/*
 * Procedural 3D model designs for the 69-item hardware catalog.
 * Edit the catalog/profile builders in this file to change model geometry.
 */

const LEGACY_MODEL_IDS = new Set([
  "audio-card",
  "cpu",
  "gpu",
  "keyboard",
  "microphone",
  "monitor",
  "mouse",
  "wireless-mouse",
  "printer",
  "projector",
  "scanner",
  "speakers",
  "webcam",
]);

function createItemModel(item) {
  return item.modelProfile && !LEGACY_MODEL_IDS.has(item.id)
    ? createCatalogHardwareModel(item)
    : createProceduralHardwareModel(item.id);
}

function createCatalogHardwareModel(item) {
  const group = new THREE.Group();
  const pcbColor =
    item.modelProfile === "hdd"
      ? 0x174b3b
      : ["fanController", "motherboard", "gpuCard", "memory", "nvme"].includes(
            item.modelProfile,
          )
        ? 0x202622
        : 0x174b3b;
  const materials = {
    pcb: new THREE.MeshStandardMaterial({
      color: pcbColor,
      roughness: 0.62,
      metalness: 0.12,
    }),
    body: new THREE.MeshStandardMaterial({
      color: 0x242629,
      roughness: 0.56,
      metalness: 0.04,
    }),
    dark: new THREE.MeshStandardMaterial({
      color: 0x17191b,
      roughness: 0.64,
      metalness: 0.08,
    }),
    metal: new THREE.MeshStandardMaterial({
      color: 0xb2b7ba,
      roughness: 0.36,
      metalness: 0.72,
    }),
    gold: new THREE.MeshStandardMaterial({
      color: 0xc99028,
      roughness: 0.34,
      metalness: 0.78,
    }),
    glass: new THREE.MeshPhysicalMaterial({
      color: 0xdce4e8,
      roughness: 0.08,
      metalness: 0,
      transparent: true,
      opacity: 0.7,
    }),
    violet: new THREE.MeshStandardMaterial({
      color: 0xb2b7ba,
      roughness: 0.42,
      metalness: 0.54,
    }),
    green: new THREE.MeshStandardMaterial({
      color: 0x4b8b61,
      roughness: 0.46,
      metalness: 0.12,
    }),
    rubber: new THREE.MeshStandardMaterial({
      color: 0x171a20,
      roughness: 0.9,
    }),
  };
  const box = (name, width, height, depth, x, y, z, material) => {
    const mesh = new THREE.Mesh(
      new THREE.BoxGeometry(width, height, depth),
      material,
    );
    mesh.name = name;
    mesh.position.set(x, y, z);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);
    return mesh;
  };
  const cylinder = (
    name,
    radiusTop,
    radiusBottom,
    height,
    x,
    y,
    z,
    material,
    segments = 24,
  ) => {
    const mesh = new THREE.Mesh(
      new THREE.CylinderGeometry(
        radiusTop,
        radiusBottom,
        height,
        segments,
      ),
      material,
    );
    mesh.name = name;
    mesh.position.set(x, y, z);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);
    return mesh;
  };
  const curvedCable = (name, points, radius, material) => {
    const path = new THREE.CatmullRomCurve3(
      points.map(([x, y, z]) => new THREE.Vector3(x, y, z)),
    );
    const mesh = new THREE.Mesh(
      new THREE.TubeGeometry(path, 48, radius, 10, false),
      material,
    );
    mesh.name = name;
    mesh.castShadow = true;
    group.add(mesh);
    return mesh;
  };
  const profile = item.modelProfile;

  switch (profile) {
    case "fanController": {
      box("controller-board", 1.72, 0.07, 1.12, 0, 0, 0, materials.pcb);
      box("controller-chip", 0.35, 0.075, 0.31, -0.38, 0.075, -0.13, materials.dark);
      [-0.56, -0.18, 0.2, 0.58].forEach((x) => {
        const header = new THREE.Group();
        header.name = "fan-headers";
        const base = new THREE.Mesh(
          new THREE.BoxGeometry(0.2, 0.09, 0.18),
          materials.dark,
        );
        base.position.set(x, 0.08, -0.36);
        header.add(base);
        for (let pin = 0; pin < 4; pin += 1) {
          const contact = new THREE.Mesh(
            new THREE.CylinderGeometry(0.018, 0.018, 0.1, 8),
            materials.gold,
          );
          contact.position.set(x - 0.06 + pin * 0.04, 0.15, -0.36);
          header.add(contact);
        }
        group.add(header);
      });
      box("power-input", 0.34, 0.13, 0.24, 0.62, 0.08, 0.35, materials.metal);
      box("sensor-input", 0.24, 0.1, 0.2, -0.62, 0.08, 0.34, materials.gold);
      break;
    }
    case "heatsink": {
      box("base", 1.55, 0.12, 0.92, 0, -0.24, 0, materials.metal);
      for (let index = 0; index < 12; index += 1) {
        box(
          "fins",
          0.055,
          0.52,
          0.78,
          -0.64 + index * 0.116,
          0.06,
          0,
          materials.metal,
        );
      }
      [-0.27, 0, 0.27].forEach((z) => {
        curvedCable(
          "heat-pipes",
          [
            [-0.55, -0.18, z],
            [-0.3, -0.08, z],
            [0, -0.03, z],
            [0.3, -0.08, z],
            [0.55, -0.18, z],
          ],
          0.045,
          materials.metal,
        );
      });
      [-0.58, 0.58].forEach((x) => {
        [-0.3, 0.3].forEach((z) => {
          cylinder("mounts", 0.055, 0.055, 0.09, x, -0.16, z, materials.dark, 12);
        });
      });
      break;
    }
    case "bus": {
      const endpoints = new THREE.Group();
      endpoints.name = "endpoints";
      [-1.05, 1.05].forEach((x) => {
        const endpoint = new THREE.Mesh(
          new THREE.BoxGeometry(0.58, 0.18, 0.72),
          materials.dark,
        );
        endpoint.position.set(x, 0, 0);
        endpoint.castShadow = true;
        endpoints.add(endpoint);
      });
      group.add(endpoints);
      [
        ["data-lines", 0.2, materials.green],
        ["address-lines", 0, materials.gold],
        ["control-lines", -0.2, materials.violet],
      ].forEach(([name, z, material]) => {
        curvedCable(
          name,
          [
            [-0.75, 0.03, z],
            [-0.4, 0.03, z],
            [0, 0.03, z],
            [0.4, 0.03, z],
            [0.75, 0.03, z],
          ],
          0.025,
          material,
        );
      });
      break;
    }
    case "interconnect": {
      [-0.95, 0.95].forEach((x) => {
        box("processor-nodes", 0.78, 0.22, 0.92, x, 0, 0, materials.dark);
        box("link-connector", 0.24, 0.11, 0.4, x * 0.72, 0.17, 0, materials.gold);
      });
      [-0.2, 0, 0.2].forEach((z) => {
        curvedCable(
          "links",
          [
            [-0.55, 0.15, z],
            [-0.28, 0.22, z],
            [0, 0.22, z],
            [0.28, 0.22, z],
            [0.55, 0.15, z],
          ],
          0.035,
          materials.violet,
        );
      });
      break;
    }
    case "mouse": {
      const shell = new THREE.Mesh(
        new THREE.SphereGeometry(1, 40, 28),
        materials.rubber,
      );
      shell.name = "mouse-shell";
      shell.scale.set(0.62, 0.34, 0.96);
      shell.position.y = 0.16;
      shell.castShadow = true;
      shell.receiveShadow = true;
      group.add(shell);
      const wheel = cylinder(
        "scroll-wheel",
        0.11,
        0.11,
        0.2,
        0,
        0.39,
        0.08,
        materials.metal,
        20,
      );
      wheel.rotation.x = Math.PI / 2;
      box("optical-sensor", 0.18, 0.06, 0.16, 0, -0.18, -0.25, materials.violet);
      break;
    }
    case "chip":
      box("package", 1.35, 0.14, 1.35, 0, 0, 0, materials.dark);
      box("die", 0.68, 0.055, 0.68, 0, 0.1, 0, materials.metal);
      box("contacts", 1.08, 0.035, 1.08, 0, -0.09, 0, materials.gold);
      break;
    case "board":
    case "card":
      box(
        "circuit-board",
        profile === "board" ? 2.55 : 2.25,
        0.08,
        profile === "board" ? 1.85 : 1.1,
        0,
        0,
        0,
        materials.pcb,
      );
      box("controller-chip", 0.52, 0.11, 0.52, -0.2, 0.09, -0.03, materials.dark);
      box("connectors", 0.9, 0.16, 0.1, 0.52, 0.1, 0.48, materials.metal);
      box("ports", 0.45, 0.25, 0.22, 0.91, 0.08, 0.46, materials.metal);
      box("contacts", 0.86, 0.045, 0.12, 0, -0.06, 0.58, materials.gold);
      if (profile === "card") {
        box("bracket", 0.07, 1.06, 0.13, -1.12, 0.12, 0, materials.metal);
        for (let index = 0; index < 5; index += 1) {
          box(
            `board-chip-${index}`,
            0.18,
            0.06,
            0.18,
            -0.7 + index * 0.33,
            0.08,
            -0.28,
            materials.dark,
          );
        }
      } else {
        box("board-chip", 0.25, 0.06, 0.25, 0.78, 0.08, -0.4, materials.dark);
      }
      break;
    case "motherboard":
      box("circuit-board", 2.75, 0.09, 2.15, 0, 0, 0, materials.pcb);
      box("cpu-socket", 0.68, 0.16, 0.68, -0.42, 0.12, -0.08, materials.metal);
      for (let index = 0; index < 4; index += 1) {
        const slot = box(
          "ram-slots",
          0.1,
          0.23,
          1.22,
          0.34 + index * 0.16,
          0.13,
          -0.16,
          materials.dark,
        );
        slot.userData.slotIndex = index;
      }
      [-0.58, 0.04, 0.66].forEach((z, index) => {
        box(
          "pcie-slots",
          index === 0 ? 1.7 : 1.38,
          0.08,
          0.15,
          0.02,
          0.08,
          z,
          materials.metal,
        );
      });
      box("storage-connectors", 0.25, 0.16, 0.42, 0.95, 0.12, -0.66, materials.gold);
      box("power-connectors", 0.26, 0.23, 0.72, 1.25, 0.12, -0.16, materials.body);
      box("chipset", 0.48, 0.12, 0.42, 0.65, 0.1, 0.48, materials.dark);
      for (let index = 0; index < 7; index += 1) {
        box(
          "vrm",
          0.12,
          0.13,
          0.24,
          -0.88 + index * 0.16,
          0.18,
          -0.78,
          materials.metal,
        );
        cylinder(
          "vrm",
          0.055,
          0.055,
          0.16,
          -0.88 + index * 0.16,
          0.19,
          -1.02,
          materials.dark,
          12,
        );
      }
      [-1.1, 1.1].forEach((x) => {
        [-0.82, 0.82].forEach((z) => {
          cylinder("board-screw", 0.045, 0.045, 0.11, x, 0.05, z, materials.gold, 12);
        });
      });
      break;
    case "gpuCard": {
      box("circuit-board", 2.65, 0.1, 1.25, 0, 0, 0, materials.pcb);
      box("gpu-chip", 0.64, 0.14, 0.64, -0.12, 0.12, -0.06, materials.metal);
      [-0.82, -0.45, 0.2, 0.57].forEach((x) => {
        box("vram", 0.26, 0.1, 0.25, x, 0.12, 0.38, materials.dark);
      });
      const heatsink = new THREE.Group();
      heatsink.name = "heatsink";
      const sinkBase = new THREE.Mesh(
        new THREE.BoxGeometry(2.5, 0.1, 1.08),
        materials.metal,
      );
      sinkBase.position.y = 0.24;
      heatsink.add(sinkBase);
      for (let index = 0; index < 17; index += 1) {
        const fin = new THREE.Mesh(
          new THREE.BoxGeometry(0.045, 0.34, 0.98),
          materials.metal,
        );
        fin.position.set(-1.12 + index * 0.14, 0.4, 0);
        heatsink.add(fin);
      }
      group.add(heatsink);
      const fans = new THREE.Group();
      fans.name = "fans";
      [-0.75, 0, 0.75].forEach((x) => {
        const fan = new THREE.Group();
        fan.position.set(x, 0.62, 0.18);
        const fanFrame = new THREE.Mesh(
          new THREE.TorusGeometry(0.31, 0.035, 8, 32),
          materials.dark,
        );
        fanFrame.position.z = 0.01;
        fan.add(fanFrame);
        for (let bladeIndex = 0; bladeIndex < 7; bladeIndex += 1) {
          const blade = new THREE.Mesh(
            new THREE.BoxGeometry(0.08, 0.23, 0.035),
            materials.dark,
          );
          blade.position.y = 0.16;
          blade.rotation.z = (bladeIndex * Math.PI * 2) / 7;
          fan.add(blade);
        }
        const hub = new THREE.Mesh(
          new THREE.CylinderGeometry(0.09, 0.09, 0.13, 24),
          materials.metal,
        );
        hub.rotation.x = Math.PI / 2;
        fan.add(hub);
        fans.add(fan);
      });
      group.add(fans);
      box("power-connectors", 0.55, 0.18, 0.24, -0.55, 0.12, 0.67, materials.gold);
      box("display-connectors", 1.38, 0.18, 0.16, 1.27, -0.02, 0.46, materials.metal);
      break;
    }
    case "memory":
      box("circuit-board", 2.1, 0.07, 0.42, 0, 0, 0, materials.pcb);
      for (let index = 0; index < 8; index += 1) {
        box(
          "memory-chips",
          0.18,
          0.11,
          0.3,
          -0.82 + index * 0.235,
          0.09,
          0,
          materials.dark,
        );
      }
      box("contacts", 1.75, 0.035, 0.07, 0, -0.055, 0.22, materials.gold);
      break;
    case "nvme":
      box("circuit-board", 2.0, 0.07, 0.43, 0, 0, 0, materials.pcb);
      box("controller-chip", 0.35, 0.1, 0.34, -0.57, 0.09, 0, materials.dark);
      box("memory-chips", 0.55, 0.08, 0.34, 0.2, 0.08, 0, materials.dark);
      box("contacts", 0.3, 0.035, 0.38, -1.04, -0.02, 0, materials.gold);
      break;
    case "hdd": {
      box("drive-base", 2.0, 0.12, 1.42, 0, 0, 0, materials.metal);
      box("drive-side-rail-left", 0.08, 0.28, 1.42, -0.96, 0.08, 0, materials.body);
      box("drive-side-rail-right", 0.08, 0.28, 1.42, 0.96, 0.08, 0, materials.body);
      box("drive-rear-rail", 1.9, 0.28, 0.08, 0, 0.08, -0.67, materials.body);
      box("drive-front-rail", 1.9, 0.22, 0.08, 0, 0.06, 0.67, materials.body);
      const driveCover = new THREE.Group();
      driveCover.name = "drive-cover";
      const coverPlate = new THREE.Mesh(
        new THREE.BoxGeometry(1.78, 0.06, 1.22),
        materials.metal,
      );
      coverPlate.position.set(0, 0.25, -0.02);
      coverPlate.castShadow = true;
      driveCover.add(coverPlate);
      [-0.78, 0.78].forEach((x) => {
        [-0.5, 0.5].forEach((z) => {
          const screw = new THREE.Mesh(
            new THREE.CylinderGeometry(0.04, 0.04, 0.025, 12),
            materials.dark,
          );
          screw.position.set(x, 0.286, z);
          driveCover.add(screw);
        });
      });
      group.add(driveCover);

      const platterMaterial = new THREE.MeshStandardMaterial({
        color: 0xb7c5d6,
        roughness: 0.2,
        metalness: 0.86,
      });
      [0.11, 0.15, 0.19].forEach((y) => {
        const platter = new THREE.Mesh(
          new THREE.CylinderGeometry(0.52, 0.52, 0.035, 48),
          platterMaterial,
        );
        platter.name = "platters";
        platter.position.set(-0.16, y, -0.12);
        platter.castShadow = true;
        group.add(platter);
      });

      const spindle = cylinder(
        "spindle-motor",
        0.13,
        0.16,
        0.28,
        -0.16,
        0.18,
        -0.12,
        materials.dark,
      );
      spindle.position.y = 0.18;

      cylinder(
        "actuator-arm",
        0.1,
        0.1,
        0.12,
        0.68,
        0.25,
        0.23,
        materials.metal,
      );
      const actuatorArm = new THREE.Mesh(
        new THREE.BoxGeometry(1.3, 0.055, 0.075),
        materials.metal,
      );
      actuatorArm.name = "actuator-arm";
      actuatorArm.position.set(0.18, 0.27, 0.18);
      actuatorArm.rotation.y = -0.34;
      actuatorArm.castShadow = true;
      group.add(actuatorArm);

      const heads = new THREE.Group();
      heads.name = "read-write-heads";
      [-0.025, 0.025].forEach((offset) => {
        const head = new THREE.Mesh(
          new THREE.BoxGeometry(0.12, 0.035, 0.055),
          materials.gold,
        );
        head.position.set(-0.47, 0.25 + offset, 0.1);
        heads.add(head);
      });
      group.add(heads);

      const controllerAssembly = new THREE.Group();
      controllerAssembly.name = "controller-assembly";
      const controllerBoard = new THREE.Mesh(
        new THREE.BoxGeometry(1.25, 0.045, 0.72),
        materials.pcb,
      );
      controllerBoard.name = "controller-board";
      controllerBoard.position.set(0, -0.12, 0);
      controllerAssembly.add(controllerBoard);
      const controllerChip = new THREE.Mesh(
        new THREE.BoxGeometry(0.28, 0.055, 0.24),
        materials.dark,
      );
      controllerChip.name = "controller-chip";
      controllerChip.position.set(-0.22, -0.17, -0.1);
      controllerAssembly.add(controllerChip);
      const driveConnectors = new THREE.Mesh(
        new THREE.BoxGeometry(0.52, 0.12, 0.08),
        materials.gold,
      );
      driveConnectors.name = "connectors";
      driveConnectors.position.set(0.55, 0, 0.75);
      controllerAssembly.add(driveConnectors);
      group.add(controllerAssembly);
      group.rotation.x = Math.PI / 2;
      break;
    }
    case "drive":
      box("enclosure", 2.0, 0.24, 1.4, 0, 0, 0, materials.dark);
      box("circuit-board", 1.68, 0.045, 1.04, 0, -0.15, -0.03, materials.pcb);
      box("controller-chip", 0.38, 0.075, 0.34, -0.48, -0.08, -0.12, materials.dark);
      [-0.12, 0.22, 0.56].forEach((x) => {
        box("memory-chips", 0.25, 0.055, 0.28, x, -0.08, -0.12, materials.dark);
      });
      box("drive-label", 0.92, 0.018, 0.48, 0, 0.13, 0, materials.body);
      box("connectors", 0.42, 0.13, 0.42, 0, -0.02, 0.8, materials.dark);
      break;
    case "optical": {
      box("enclosure", 2.0, 0.28, 1.45, 0, 0, 0, materials.metal);
      box("disc-tray", 1.12, 0.06, 0.95, 0, 0.16, 0.78, materials.body);
      cylinder("spindle-motor", 0.13, 0.13, 0.12, -0.28, 0.18, -0.14, materials.dark);
      const pickup = new THREE.Group();
      pickup.name = "optical-pickup";
      const pickupCarriage = new THREE.Mesh(
        new THREE.BoxGeometry(0.46, 0.1, 0.24),
        materials.dark,
      );
      pickupCarriage.position.set(0, 0.2, 0);
      pickupCarriage.castShadow = true;
      pickup.add(pickupCarriage);
      const pickupLens = new THREE.Mesh(
        new THREE.CylinderGeometry(0.07, 0.07, 0.035, 20),
        materials.glass,
      );
      pickupLens.position.set(0, 0.26, 0);
      pickup.add(pickupLens);
      group.add(pickup);
      box("connectors", 0.4, 0.12, 0.22, 0.5, -0.12, -0.68, materials.gold);
      break;
    }
    case "fan": {
      const fanFrameMaterial = new THREE.MeshStandardMaterial({
        color: 0x716a5e,
        roughness: 0.52,
        metalness: 0.02,
      });
      const fanBladeMaterial = new THREE.MeshStandardMaterial({
        color: 0xd2c2a0,
        roughness: 0.72,
        metalness: 0.01,
      });
      const frame = new THREE.Group();
      frame.name = "frame";
      [
        [1.72, 0.16, 0.12, 0, 0.85, 0],
        [1.72, 0.16, 0.12, 0, -0.69, 0],
        [0.16, 1.38, 0.12, -0.78, 0.08, 0],
        [0.16, 1.38, 0.12, 0.78, 0.08, 0],
      ].forEach(([width, height, depth, x, y, z]) => {
        const rail = new THREE.Mesh(
          new THREE.BoxGeometry(width, height, depth),
          fanFrameMaterial,
        );
        rail.position.set(x, y, z);
        rail.castShadow = true;
        frame.add(rail);
      });
      const guardRing = new THREE.Mesh(
        new THREE.TorusGeometry(0.66, 0.035, 10, 40),
        fanFrameMaterial,
      );
      guardRing.position.z = 0.07;
      frame.add(guardRing);
      group.add(frame);
      const blades = new THREE.Group();
      blades.name = "fan-blades";
      const bladeShape = new THREE.Shape();
      bladeShape.moveTo(0.13, 0.025);
      bladeShape.bezierCurveTo(0.27, 0.16, 0.55, 0.2, 0.68, 0.08);
      bladeShape.bezierCurveTo(0.62, -0.08, 0.39, -0.17, 0.18, -0.12);
      bladeShape.quadraticCurveTo(0.1, -0.06, 0.13, 0.025);
      const bladeGeometry = new THREE.ExtrudeGeometry(bladeShape, {
        depth: 0.045,
        bevelEnabled: true,
        bevelSegments: 1,
        steps: 1,
        bevelSize: 0.008,
        bevelThickness: 0.008,
      });
      for (let index = 0; index < 7; index += 1) {
        const blade = new THREE.Mesh(
          bladeGeometry,
          fanBladeMaterial,
        );
        blade.position.z = 0.09;
        blade.rotation.z = (index * Math.PI * 2) / 7;
        blade.castShadow = true;
        blades.add(blade);
      }
      blades.position.y = 0.08;
      group.add(blades);
      const hub = cylinder("hub", 0.23, 0.23, 0.13, 0, 0.08, 0.08, fanBladeMaterial);
      hub.rotation.x = Math.PI / 2;
      [-0.68, 0.68].forEach((x) => {
        [-0.6, 0.76].forEach((y) => {
          const mountingHole = cylinder(
            "frame",
            0.055,
            0.055,
            0.14,
            x,
            y,
            0.015,
            materials.metal,
            12,
          );
          mountingHole.rotation.x = Math.PI / 2;
        });
      });
      break;
    }
    case "case": {
      const panels = new THREE.Group();
      panels.name = "panels";
      [
        [0.08, 2.15, 0.08, -0.96, 0, 0],
        [0.08, 2.15, 0.08, 0.96, 0, 0],
        [1.84, 0.08, 0.08, 0, 1.05, 0],
        [1.84, 0.08, 0.08, 0, -1.05, 0],
        [0.08, 0.08, 1.28, -0.96, 1.02, 0],
        [0.08, 0.08, 1.28, 0.96, 1.02, 0],
        [0.08, 0.08, 1.28, -0.96, -1.02, 0],
        [0.08, 0.08, 1.28, 0.96, -1.02, 0],
        [1.84, 0.08, 0.08, 0, 1.02, -0.62],
        [1.84, 0.08, 0.08, 0, -1.02, -0.62],
        [1.84, 0.08, 0.08, 0, 1.02, 0.62],
        [1.84, 0.08, 0.08, 0, -1.02, 0.62],
      ].forEach(([width, height, depth, x, y, z]) => {
        const rail = new THREE.Mesh(
          new THREE.BoxGeometry(width, height, depth),
          materials.body,
        );
        rail.position.set(x, y, z);
        rail.castShadow = true;
        panels.add(rail);
      });
      const sideWindow = new THREE.Mesh(
        new THREE.BoxGeometry(0.025, 1.75, 1.05),
        materials.glass,
      );
      sideWindow.position.set(0.91, 0, -0.04);
      panels.add(sideWindow);
      group.add(panels);

      box("internal-motherboard", 0.06, 1.45, 1.12, -0.86, 0.02, -0.02, materials.pcb);
      box("internal-gpu", 0.82, 0.14, 0.62, -0.35, -0.22, 0.04, materials.metal);
      box("internal-psu", 0.8, 0.34, 0.58, 0.42, -0.73, -0.18, materials.dark);
      box("drive-bays", 0.68, 0.56, 0.46, 0.38, 0.64, -0.12, materials.metal);
      box("front-ports", 0.52, 0.1, 0.12, -0.4, 0.94, 0.62, materials.dark);
      const caseFan = new THREE.Group();
      caseFan.name = "case-fan";
      const fanRing = new THREE.Mesh(
        new THREE.TorusGeometry(0.3, 0.035, 10, 32),
        materials.dark,
      );
      fanRing.rotation.x = Math.PI / 2;
      caseFan.add(fanRing);
      for (let index = 0; index < 5; index += 1) {
        const blade = new THREE.Mesh(
          new THREE.BoxGeometry(0.055, 0.025, 0.22),
          materials.metal,
        );
        blade.position.z = -0.11;
        blade.rotation.y = (index * Math.PI * 2) / 5;
        caseFan.add(blade);
      }
      const caseFanHub = new THREE.Mesh(
        new THREE.CylinderGeometry(0.075, 0.075, 0.07, 20),
        materials.dark,
      );
      caseFanHub.rotation.x = Math.PI / 2;
      caseFan.add(caseFanHub);
      caseFan.position.set(0.56, 0.55, 0.58);
      group.add(caseFan);
      break;
    }
    case "display":
      box("bezel", 2.6, 1.62, 0.12, 0, 0.36, 0, materials.dark);
      box("panel", 2.42, 1.42, 0.035, 0, 0.36, 0.08, materials.glass);
      box("stand", 0.2, 0.68, 0.2, 0, -0.78, -0.04, materials.metal);
      box("ports", 0.36, 0.13, 0.12, 0.92, -0.39, -0.05, materials.gold);
      box("display-base", 1.25, 0.08, 0.62, 0, -1.15, 0, materials.dark);
      break;
    case "scanner":
      box("enclosure", 2.35, 0.42, 1.7, 0, 0, 0, materials.body);
      box("glass", 2.02, 0.035, 1.42, 0, 0.225, 0, materials.glass);
      box("sensor-bar", 0.11, 0.08, 1.15, -0.8, 0.18, 0, materials.violet);
      break;
    case "camera":
      box("enclosure", 1.55, 0.98, 0.62, 0, 0, 0, materials.body);
      cylinder("lens", 0.36, 0.42, 0.4, 0, 0.04, 0.47, materials.metal).rotation.x =
        Math.PI / 2;
      cylinder("sensor", 0.24, 0.24, 0.045, 0, 0.04, 0.72, materials.violet).rotation.x =
        Math.PI / 2;
      if (item.id === "barcode-scanner") {
        box("trigger", 0.2, 0.25, 0.28, 0.35, -0.5, 0.03, materials.dark);
      }
      break;
    case "barcode":
      // Head Enclosure & Bezel
      box("enclosure", 1.0, 0.75, 1.2, 0, 0.25, 0, materials.body);
      box("bezel", 1.05, 0.8, 0.2, 0, 0.25, 0.55, materials.dark);

      // Glass Lens & Sensor Assembly
      box("lens", 0.7, 0.45, 0.05, 0, 0.25, 0.5, materials.glass);
      box("sensor", 0.4, 0.25, 0.1, 0, 0.25, 0.35, materials.violet);

      // Handle & Base
      box("handle", 0.42, 1.1, 0.45, 0, -0.55, -0.15, materials.body);
      box("handle_grip", 0.44, 0.9, 0.3, 0, -0.55, -0.05, materials.dark);
      box("cable_boot", 0.25, 0.3, 0.25, 0, -1.2, -0.28, materials.dark);

      // Yellow Trigger Switch
      box("trigger", 0.2, 0.22, 0.2, 0, -0.1, 0.18, materials.yellow);
      break;
    case "fingerprint":
      box("enclosure", 0.86, 0.22, 0.86, 0, 0, 0, materials.dark);
      box("sensor", 0.56, 0.035, 0.56, 0, 0.13, 0, materials.glass);
      box("interface", 0.36, 0.05, 0.15, 0, -0.14, -0.42, materials.gold);
      break;
    case "controller":
      box("enclosure", 1.9, 0.48, 1.15, 0, 0, 0, materials.dark);
      box("controls", 0.56, 0.12, 0.16, -0.44, 0.3, 0.04, materials.metal);
      cylinder("stick-left", 0.12, 0.12, 0.12, -0.56, 0.34, -0.3, materials.violet);
      cylinder("stick-right", 0.12, 0.12, 0.12, 0.54, 0.34, 0.22, materials.violet);
      box("connectors", 0.3, 0.1, 0.12, 0, 0.05, 0.62, materials.metal);
      break;
    case "network":
      box("enclosure", 1.9, 0.36, 1.15, 0, 0, 0, materials.body);
      box("controller-chip", 0.5, 0.08, 0.4, 0, 0.22, -0.08, materials.pcb);
      box("ports", 0.9, 0.18, 0.3, 0, 0.05, 0.62, materials.metal);
      [-0.62, 0.62].forEach((x) => {
        const antenna = cylinder(
          "antennas",
          0.035,
          0.035,
          1.1,
          x,
          0.68,
          -0.42,
          materials.dark,
          12,
        );
        antenna.rotation.z = x < 0 ? -0.18 : 0.18;
      });
      break;
    case "switch":
      box("enclosure", 2.3, 0.3, 1.1, 0, 0, 0, materials.metal);
      box("controller-chip", 0.72, 0.08, 0.34, 0, -0.2, 0, materials.pcb);
      if (item.id === "kvm-switch") {
        for (let index = 0; index < 4; index += 1) {
          box(
            "ports",
            0.24,
            0.13,
            0.2,
            -0.78 + index * 0.52,
            0.13,
            0.5,
            materials.dark,
          );
        }
        for (let index = 0; index < 4; index += 1) {
          cylinder(
            "selection-buttons",
            0.055,
            0.055,
            0.045,
            -0.62 + index * 0.4,
            0.18,
            -0.12,
            materials.violet,
            16,
          );
        }
      } else {
        for (let index = 0; index < 8; index += 1) {
          box(
            "ports",
            0.17,
            0.16,
            0.22,
            -0.88 + index * 0.25,
            0.12,
            0.5,
            materials.dark,
          );
          box(
            `link-indicator-${index}`,
            0.045,
            0.035,
            0.04,
            -0.88 + index * 0.25,
            0.16,
            0.63,
            materials.green,
          );
        }
      }
      break;
    case "power":
      box("enclosure", 1.9, 1.1, 1.5, 0, 0, 0, materials.metal);
      box("power-board", 1.32, 0.055, 0.92, 0, -0.2, -0.06, materials.pcb);
      box("transformer", 0.42, 0.31, 0.36, -0.34, 0.02, -0.08, materials.dark);
      [-0.02, 0.22, 0.46].forEach((x) => {
        cylinder("capacitors", 0.09, 0.09, 0.25, x, 0.02, 0.27, materials.metal, 18);
      });
      const powerFan = new THREE.Group();
      powerFan.name = "fan-blades";
      const fanHub = new THREE.Mesh(
        new THREE.CylinderGeometry(0.46, 0.46, 0.045, 32),
        materials.dark,
      );
      powerFan.add(fanHub);
      for (let index = 0; index < 7; index += 1) {
        const blade = new THREE.Mesh(
          new THREE.BoxGeometry(0.12, 0.035, 0.34),
          materials.metal,
        );
        blade.position.z = -0.2;
        blade.rotation.y = (index * Math.PI * 2) / 7;
        powerFan.add(blade);
      }
      powerFan.position.set(0, 0.58, 0);
      group.add(powerFan);
      cylinder("fan-hub", 0.15, 0.15, 0.06, 0, 0.61, 0, materials.body);
      for (let index = 0; index < 7; index += 1) {
        const vent = box(
          `vent-${index}`,
          0.07,
          0.035,
          0.54,
          -0.24 + index * 0.08,
          0.61,
          0,
          materials.metal,
        );
        vent.rotation.y = index * 0.28;
      }
      box("connectors", 0.62, 0.36, 0.12, 0.25, -0.25, 0.78, materials.dark);
      break;
    case "port":
      box("housing", 1.08, 0.56, 0.72, 0, 0, 0, materials.metal);
      box("contacts", 0.62, 0.18, 0.06, 0, 0.02, 0.39, materials.gold);
      box("port-opening", 0.7, 0.25, 0.06, 0, 0.04, 0.43, materials.dark);
      break;
    case "usb":
      box("housing", 1.0, 0.55, 0.62, 0, 0, 0, materials.metal);
      box("tongue", 0.58, 0.14, 0.12, 0, -0.04, 0.36, materials.body);
      box("contacts", 0.42, 0.045, 0.055, 0, -0.03, 0.44, materials.gold);
      break;
    case "slot":
      box("housing", 2.15, 0.2, 0.4, 0, 0, 0, materials.dark);
      box("contacts", 1.62, 0.045, 0.16, 0, -0.13, 0, materials.gold);
      box("slot-key", 0.08, 0.08, 0.42, 0.55, 0.05, 0, materials.body);
      break;
    case "vga":
      const vgaShape = new THREE.Shape();
      vgaShape.moveTo(-0.45, -0.18);
      vgaShape.lineTo(0.45, -0.18);
      vgaShape.lineTo(0.34, 0.18);
      vgaShape.lineTo(-0.34, 0.18);
      vgaShape.closePath();
      const vgaShell = new THREE.Mesh(
        new THREE.ExtrudeGeometry(vgaShape, {
          depth: 0.1,
          bevelEnabled: true,
          bevelSegments: 2,
          steps: 1,
          bevelSize: 0.02,
          bevelThickness: 0.02,
        }),
        materials.metal,
      );
      vgaShell.name = "housing";
      vgaShell.position.z = -0.05;
      group.add(vgaShell);
      const vgaContacts = new THREE.Group();
      vgaContacts.name = "contacts";
      for (let row = 0; row < 3; row += 1) {
        for (let column = 0; column < 5; column += 1) {
          const pin = new THREE.Mesh(
            new THREE.CylinderGeometry(0.027, 0.027, 0.04, 8),
            materials.gold,
          );
          pin.rotation.x = Math.PI / 2;
          pin.position.set(-0.25 + column * 0.125, 0.1 - row * 0.1, 0.11);
          vgaContacts.add(pin);
        }
      }
      group.add(vgaContacts);
      box("bracket", 1.15, 0.08, 0.11, 0, -0.31, 0, materials.dark);
      break;
    case "cable":
      curvedCable(
        "cable",
        [
          [-1.3, 0, -0.35],
          [-0.7, 0, 0],
          [0, 0, 0.12],
          [0.7, 0, 0],
          [1.3, 0, 0.35],
        ],
        0.065,
        materials.rubber,
      );
      box("plug", 0.48, 0.25, 0.38, 1.46, 0, 0.39, materials.metal);
      box("contacts", 0.28, 0.12, 0.055, 1.46, 0, 0.61, materials.gold);
      break;
    case "jumper":
      box("header", 0.82, 0.13, 0.28, 0, 0, 0, materials.pcb);
      for (let index = -1; index <= 1; index += 1) {
        cylinder("header-pin", 0.035, 0.035, 0.34, index * 0.18, 0.22, 0, materials.gold, 10);
      }
      box("shunt", 0.33, 0.24, 0.2, 0, 0.25, 0, materials.violet);
      break;
    case "socket":
      box("housing", 1.5, 0.28, 1.5, 0, 0, 0, materials.body);
      box("contacts", 0.96, 0.035, 0.96, 0, 0.16, 0, materials.gold);
      box("latch", 0.16, 0.35, 1.42, 0.82, 0.26, 0, materials.metal);
      break;
    case "audio":
      box("enclosure", 1.8, 0.35, 1.25, 0, 0, 0, materials.body);
      box("controller-chip", 0.56, 0.08, 0.44, 0, -0.22, -0.12, materials.pcb);
      for (let index = 0; index < 3; index += 1) {
        cylinder("ports", 0.13, 0.13, 0.12, -0.58 + index * 0.58, 0.02, 0.68, materials.metal);
      }
      break;
    case "ups":
      box("enclosure", 1.8, 1.7, 1.3, 0, 0, 0, materials.body);
      box("battery", 1.12, 0.82, 0.8, 0, 0, 0.15, materials.dark);
      box("connectors", 0.9, 0.2, 0.12, 0, 0.68, -0.68, materials.metal);
      break;
    case "battery":
      cylinder("cell", 0.48, 0.48, 0.18, 0, 0, 0, materials.metal, 48);
      cylinder("terminals", 0.19, 0.19, 0.035, 0, 0.105, 0, materials.gold, 32);
      break;
    case "thermal":
      box("compound", 0.92, 0.18, 0.58, 0, 0, 0, materials.metal);
      cylinder("applicator", 0.13, 0.13, 1.2, 0.78, -0.25, 0, materials.body, 20);
      break;
    case "printer":
      box("enclosure", 2.1, 0.78, 1.55, 0, 0.35, 0, materials.body);
      box("paper-tray", 1.35, 0.08, 0.85, 0, -0.12, 0.94, materials.metal);
      box("output-tray", 1.4, 0.07, 0.64, 0, 0.26, 0.88, materials.dark);
      box("control-panel", 0.52, 0.12, 0.26, 0.66, 0.79, 0.34, materials.violet);
      break;
    case "inkjetPrinter": {
      box("enclosure", 2.1, 0.78, 1.55, 0, 0.35, 0, materials.body);
      box("paper-tray", 1.35, 0.08, 0.85, 0, -0.12, 0.94, materials.metal);
      box("output-tray", 1.4, 0.07, 0.64, 0, 0.26, 0.88, materials.dark);
      box("control-panel", 0.52, 0.12, 0.26, 0.66, 0.79, 0.34, materials.violet);
      [-0.38, 0, 0.38].forEach((x) => {
        const roller = cylinder(
          "feed-rollers",
          0.065,
          0.065,
          1.42,
          x,
          0.08,
          0.18,
          materials.rubber,
          16,
        );
        roller.rotation.z = Math.PI / 2;
      });
      const carriage = new THREE.Group();
      carriage.name = "printhead";
      const carriageBody = new THREE.Mesh(
        new THREE.BoxGeometry(0.46, 0.16, 0.34),
        materials.dark,
      );
      carriageBody.position.set(-0.15, 0.48, 0.08);
      carriage.add(carriageBody);
      const cartridges = new THREE.Group();
      cartridges.name = "ink-cartridges";
      [-0.26, -0.05, 0.16, 0.37].forEach((x) => {
        const cartridge = new THREE.Mesh(
          new THREE.BoxGeometry(0.16, 0.24, 0.22),
          materials.violet,
        );
        cartridge.position.set(x, 0.26, -0.34);
        cartridges.add(cartridge);
      });
      group.add(carriage);
      group.add(cartridges);
      break;
    }
    case "laserPrinter": {
      box("enclosure", 2.1, 0.78, 1.55, 0, 0.35, 0, materials.body);
      box("paper-tray", 1.35, 0.08, 0.85, 0, -0.12, 0.94, materials.metal);
      box("output-tray", 1.4, 0.07, 0.64, 0, 0.26, 0.88, materials.dark);
      box("control-panel", 0.52, 0.12, 0.26, 0.66, 0.79, 0.34, materials.violet);
      box("toner-cartridge", 1.2, 0.28, 0.64, -0.08, 0.48, -0.18, materials.dark);
      const drum = cylinder(
        "photosensitive-drum",
        0.17,
        0.17,
        1.22,
        -0.08,
        0.18,
        -0.14,
        materials.metal,
        32,
      );
      drum.rotation.z = Math.PI / 2;
      [-0.3, 0.3].forEach((x) => {
        const roller = cylinder(
          "fuser-roller",
          0.09,
          0.09,
          1.18,
          x,
          0.02,
          0.36,
          materials.metal,
          24,
        );
        roller.rotation.z = Math.PI / 2;
      });
      break;
    }
    case "storageCard":
      box("enclosure", 1.7, 0.14, 1.18, 0, 0, 0, materials.dark);
      box("memory-chips", 0.92, 0.06, 0.56, 0, 0.1, 0, materials.pcb);
      box("contacts", 0.88, 0.045, 0.16, 0, -0.09, 0.57, materials.gold);
      break;
    case "flash":
      box("enclosure", 1.18, 0.32, 0.54, 0, 0, 0, materials.body);
      box("controller-chip", 0.3, 0.08, 0.22, -0.1, 0.2, 0, materials.pcb);
      box("memory-chips", 0.54, 0.07, 0.28, 0.28, 0.2, 0, materials.dark);
      box("usb-connector", 0.36, 0.16, 0.38, 0, 0, 0.44, materials.metal);
      break;
    case "headphones":
      const headband = new THREE.Mesh(
        new THREE.TorusGeometry(0.72, 0.1, 14, 40, Math.PI),
        materials.dark,
      );
      headband.name = "headband";
      headband.rotation.z = Math.PI;
      headband.position.y = 0.35;
      group.add(headband);
      [-0.72, 0.72].forEach((x) => {
        const cup = cylinder("earcups", 0.42, 0.42, 0.32, x, -0.32, 0, materials.body);
        cup.rotation.z = Math.PI / 2;
      });
      curvedCable(
        "cable",
        [
          [0.72, -0.38, 0],
          [0.88, -0.72, 0.05],
          [1.2, -0.98, 0.08],
        ],
        0.025,
        materials.rubber,
      );
      break;
    case "vr": {
      box("enclosure", 1.75, 0.9, 0.75, 0, 0, 0.12, materials.dark);
      [-0.42, 0.42].forEach((x) => {
        const lens = cylinder("lenses", 0.22, 0.22, 0.08, x, 0, 0.55, materials.glass, 32);
        lens.rotation.x = Math.PI / 2;
      });
      box("sensors", 0.18, 0.08, 0.06, -0.74, 0.25, 0.53, materials.violet);
      box("sensors", 0.18, 0.08, 0.06, 0.74, 0.25, 0.53, materials.violet);
      const strap = new THREE.Mesh(
        new THREE.TorusGeometry(0.8, 0.055, 12, 40, Math.PI),
        materials.rubber,
      );
      strap.name = "strap";
      strap.rotation.z = Math.PI;
      strap.position.y = -0.12;
      group.add(strap);
      break;
    }
    case "joystick":
      cylinder("base", 0.78, 0.86, 0.25, 0, -0.48, 0, materials.dark, 40);
      cylinder("stick", 0.13, 0.18, 0.9, 0, 0.08, 0, materials.metal);
      cylinder("trigger", 0.12, 0.13, 0.22, 0, 0.48, -0.12, materials.violet);
      cylinder("buttons", 0.12, 0.12, 0.1, 0.36, 0.18, 0.12, materials.violet);
      break;
    case "trackball":
      box("base", 1.6, 0.42, 1.3, 0, 0, 0, materials.dark);
      cylinder("ball", 0.42, 0.42, 0.22, 0, 0.32, -0.08, materials.violet, 40);
      box("buttons", 0.3, 0.09, 0.23, -0.45, 0.27, 0.4, materials.metal);
      box("buttons", 0.3, 0.09, 0.23, 0.45, 0.27, 0.4, materials.metal);
      break;
    case "lightPen": {
      const body = cylinder("body", 0.09, 0.15, 1.5, 0, 0, 0, materials.body, 24);
      body.rotation.z = Math.PI / 4;
      cylinder("sensor", 0.075, 0.075, 0.12, -0.48, 0.48, 0, materials.glass, 20);
      curvedCable(
        "connectors",
        [
          [0.42, -0.42, 0],
          [0.72, -0.78, 0],
          [1.08, -0.85, 0],
        ],
        0.025,
        materials.rubber,
      );
      break;
    }
    case "yoke": {
      const frame = new THREE.Mesh(
        new THREE.TorusGeometry(0.72, 0.13, 16, 40, Math.PI * 1.5),
        materials.dark,
      );
      frame.name = "frame";
      frame.rotation.z = Math.PI / 4;
      group.add(frame);
      box("controls", 1.25, 0.18, 0.18, 0, 0, 0, materials.metal);
      [-0.48, 0.48].forEach((x) => {
        cylinder("buttons", 0.09, 0.09, 0.08, x, 0.12, 0, materials.violet, 20);
      });
      cylinder("connectors", 0.08, 0.08, 0.68, 0, -0.52, 0, materials.metal, 18);
      break;
    }
    case "wifi":
      box("enclosure", 0.82, 0.24, 0.48, 0, 0, 0, materials.body);
      box("controller-chip", 0.28, 0.06, 0.22, -0.08, 0.16, 0, materials.pcb);
      cylinder("antenna", 0.035, 0.035, 1.05, 0.4, 0.56, -0.1, materials.dark, 12);
      box("connectors", 0.32, 0.14, 0.38, 0, 0, 0.39, materials.metal);
      break;
    case "zAxis":
      box("enclosure", 1.25, 0.54, 1.15, 0, 0, 0, materials.dark);
      cylinder("controls", 0.35, 0.35, 0.45, 0, 0.42, 0, materials.violet, 32);
      box("connectors", 0.34, 0.12, 0.14, 0, -0.08, 0.65, materials.metal);
      break;
    default:
      throw new Error(`No procedural model profile is configured for ${item.name}.`);
  }
  return group;
}

/**
 * HIGH-DETAIL PROCEDURAL HARDWARE GEOMETRY GENERATORS
 */
function createProceduralHardwareModel(id) {
  const group = new THREE.Group();

  const pcbMat = new THREE.MeshStandardMaterial({
    color: 0x174b3b,
    roughness: 0.62,
    metalness: 0.12,
  });
  const legacyBodyColor = {
    "audio-card": 0xc3c6c8,
    keyboard: 0x252628,
    microphone: 0x1b1b1b,
    monitor: 0x242424,
    printer: 0xe9e7e0,
    projector: 0xe9e7e0,
    scanner: 0x282828,
    speakers: 0x242424,
    webcam: 0x242424,
  }[id] || 0x252628;
  const whiteBodyMat = new THREE.MeshStandardMaterial({
    color: legacyBodyColor,
    roughness: id === "audio-card" ? 0.34 : 0.52,
    metalness: id === "audio-card" ? 0.72 : 0.025,
  });
  const darkMetalMat = new THREE.MeshStandardMaterial({
    color: 0x191a1c,
    roughness: 0.56,
    metalness: 0.08,
  });
  const mouseMat = new THREE.MeshStandardMaterial({
    color: 0x242527,
    roughness: 0.52,
    metalness: 0.025,
  });
  const silverMetalMat = new THREE.MeshStandardMaterial({
    color: 0xb2b7ba,
    roughness: 0.36,
    metalness: 0.72,
  });
  const cyanGlowMat = new THREE.MeshStandardMaterial({
    color: 0xe1e3e3,
    emissive: 0x41484c,
    emissiveIntensity: 0.08,
    roughness: 0.42,
    metalness: 0,
  });
  const goldMat = new THREE.MeshStandardMaterial({
    color: 0xc99b45,
    metalness: 0.78,
    roughness: 0.3,
  });

  switch (id) {
    case "mouse":
    case "wireless-mouse": {
      // ---------- Shape definition (front of the mouse points toward +Z) ----------
      const LEN = 1.15; // half-length
      const GAP = 0.07; // half-width of the scroll-wheel channel
      const ROWS = 96,
        TOP_ROWS = 40;
      const THETA_MAX = (TOP_ROWS / ROWS) * Math.PI; // how far buttons wrap down the sides
      const CORE_K = 0.975; // inner dark core scale

      const widthAt = (t) => 0.64 * (1 - 0.22 * t); // wide palm, narrower front
      const heightAt = (t) => 0.7 * (1 - 0.45 * Math.pow(t, 1.4)); // hump toward the back

      // Deforms a unit sphere into a mouse-shaped body (flat underside, humped back)
      const shape = (geo, opts = {}) => {
        const { k = 1, side = 0, lift = 0 } = opts;
        const p = geo.attributes.position;
        for (let i = 0; i < p.count; i++) {
          const xo = p.getX(i),
            yo = p.getY(i),
            zo = p.getZ(i);
          const t = (zo + 1) / 2;
          let x = xo * widthAt(t);
          let y = yo * heightAt(t) * (yo > 0 ? 1 : 0.05);
          const z = zo * LEN;
          if (side !== 0) {
            // Push each button away from the centre line to open the wheel channel
            const W = widthAt(t) * Math.sqrt(Math.max(0, 1 - zo * zo));
            const g = Math.min(GAP, W * 0.5);
            const r = W > 0 ? Math.min(1, Math.abs(x) / W) : 1;
            x = side * (Math.abs(x) + g * (1 - r) * (1 - r));
            y += lift;
          }
          p.setXYZ(i, x * k, y * k, z * k);
        }
        geo.computeVertexNormals();
        return geo;
      };

      // Height / tilt of the top surface along the centre line (used to seat parts)
      const surfaceY = (zw, k = 1) => {
        const zo = zw / (LEN * k);
        if (Math.abs(zo) >= 1) return 0;
        return k * Math.sqrt(1 - zo * zo) * heightAt((zo + 1) / 2);
      };
      const surfaceNormal = (zw, k = 1) => {
        const d = 0.02;
        const slope =
          (surfaceY(zw + d, k) - surfaceY(zw - d, k)) / (2 * d);
        return new THREE.Vector3(0, 1, -slope).normalize();
      };

      // ---------- Materials ----------
      const shellMat = new THREE.MeshPhysicalMaterial({
        color: id === "wireless-mouse" ? 0x343536 : 0x242527,
        roughness: 0.46,
        metalness: 0.02,
        clearcoat: 0.32,
        clearcoatRoughness: 0.34,
      });
      const buttonMat = new THREE.MeshPhysicalMaterial({
        color: id === "wireless-mouse" ? 0x393a3b : 0x292a2b,
        roughness: 0.4,
        metalness: 0.02,
        clearcoat: 0.38,
        clearcoatRoughness: 0.28,
      });
      const coreMat = new THREE.MeshStandardMaterial({
        color: 0x0a0e15,
        roughness: 0.6,
        metalness: 0.3,
      });
      const rubberMat = new THREE.MeshStandardMaterial({
        color: 0x171819,
        roughness: 0.9,
        metalness: 0.0,
      });
      const ridgeMat = new THREE.MeshStandardMaterial({
        color: 0x343536,
        roughness: 0.8,
        metalness: 0.1,
      });
      const thumbMat = new THREE.MeshStandardMaterial({
        color: 0x292a2b,
        roughness: 0.4,
        metalness: 0.2,
      });
      const cableMat = new THREE.MeshStandardMaterial({
        color: 0x202122,
        roughness: 0.7,
        metalness: 0.1,
      });
      const padMat = new THREE.MeshStandardMaterial({
        color: 0x55585a,
        roughness: 0.5,
        metalness: 0.0,
      });
      const sensorMat = new THREE.MeshStandardMaterial({
        color: 0x331c1b,
        roughness: 0.26,
        metalness: 0.05,
      });

      // ---------- 1. Body shell (rear half + front-lower; the front-top is open for the buttons) ----------
      const rear = new THREE.Mesh(
        shape(
          new THREE.SphereGeometry(
            1,
            64,
            ROWS,
            Math.PI,
            Math.PI,
            0,
            Math.PI,
          ),
        ),
        shellMat,
      );
      rear.castShadow = true;
      rear.name = "mouse-shell";
      group.add(rear);

      const frontLow = new THREE.Mesh(
        shape(
          new THREE.SphereGeometry(
            1,
            64,
            ROWS - TOP_ROWS,
            0,
            Math.PI,
            THETA_MAX,
            Math.PI - THETA_MAX,
          ),
        ),
        shellMat,
      );
      frontLow.castShadow = true;
      frontLow.name = "mouse-shell";
      group.add(frontLow);

      // ---------- 2. Dark inner core (visible in the channel between the buttons) ----------
      const core = new THREE.Mesh(
        shape(new THREE.SphereGeometry(1, 128, ROWS), { k: CORE_K }),
        coreMat,
      );
      core.name = "mouse-core";
      group.add(core);

      // ---------- 3. Left & right click buttons ----------
      const btnL = new THREE.Mesh(
        shape(
          new THREE.SphereGeometry(
            1,
            32,
            TOP_ROWS,
            0,
            Math.PI / 2,
            0,
            THETA_MAX,
          ),
          { side: -1, lift: 0.012 },
        ),
        buttonMat,
      );
      const btnR = new THREE.Mesh(
        shape(
          new THREE.SphereGeometry(
            1,
            32,
            TOP_ROWS,
            Math.PI / 2,
            Math.PI / 2,
            0,
            THETA_MAX,
          ),
          { side: 1, lift: 0.012 },
        ),
        buttonMat,
      );
      btnL.castShadow = btnR.castShadow = true;
      group.add(btnL, btnR);

      // ---------- 4. Scroll wheel (ridged rubber tire + metal hub caps, slowly spinning) ----------
      const wheelZ = 0.5,
        wheelR = 0.12;
      const wheel = new THREE.Group();
      wheel.name = "scroll-wheel";
      wheel.position.set(0, surfaceY(wheelZ, CORE_K) - 0.045, wheelZ);

      const tire = new THREE.Mesh(
        new THREE.CylinderGeometry(wheelR, wheelR, 0.09, 32),
        rubberMat,
      );
      tire.rotation.z = Math.PI / 2;
      wheel.add(tire);

      const RIDGES = 20;
      for (let i = 0; i < RIDGES; i++) {
        const a = (i / RIDGES) * Math.PI * 2;
        const ridge = new THREE.Mesh(
          new THREE.BoxGeometry(0.092, 0.022, 0.03),
          ridgeMat,
        );
        ridge.position.set(
          0,
          Math.cos(a) * (wheelR + 0.006),
          Math.sin(a) * (wheelR + 0.006),
        );
        ridge.rotation.x = a;
        wheel.add(ridge);
      }
      [-0.047, 0.047].forEach((x) => {
        const cap = new THREE.Mesh(
          new THREE.CylinderGeometry(0.075, 0.075, 0.012, 24),
          silverMetalMat,
        );
        cap.rotation.z = Math.PI / 2;
        cap.position.x = x;
        wheel.add(cap);
      });
      group.add(wheel);
      animatedElements.push(() => {
        wheel.rotation.x += 0.025;
      });

      // ---------- 5. DPI button behind the wheel ----------
      const dpi = new THREE.Mesh(
        new THREE.BoxGeometry(0.08, 0.022, 0.12),
        thumbMat,
      );
      dpi.position.set(0, surfaceY(0.2, CORE_K) + 0.004, 0.2);
      dpi.quaternion.setFromUnitVectors(
        new THREE.Vector3(0, 1, 0),
        surfaceNormal(0.2, CORE_K),
      );
      group.add(dpi);

      // ---------- 6. Thumb side buttons (right-handed mouse: thumb side is +X) ----------
      [0.16, 0.5].forEach((zo, idx) => {
        const yo = 0.42;
        const xo = Math.sqrt(1 - zo * zo - yo * yo);
        const t = (zo + 1) / 2;
        const a = widthAt(t),
          b = heightAt(t);
        const pos = new THREE.Vector3(xo * a, yo * b, zo * LEN);
        const n = new THREE.Vector3(xo / a, yo / b, zo / LEN).normalize();

        const thumb = new THREE.Mesh(
          new THREE.SphereGeometry(1, 24, 16),
          thumbMat,
        );
        thumb.scale.set(0.03, 0.055, idx === 0 ? 0.17 : 0.12);
        thumb.quaternion.setFromUnitVectors(
          new THREE.Vector3(1, 0, 0),
          n,
        );
        thumb.position.copy(pos).addScaledVector(n, -0.008);
        group.add(thumb);
      });

      // ---------- 7. Underside: optical sensor + glide feet ----------
      const sensorRing = new THREE.Mesh(
        new THREE.CylinderGeometry(0.11, 0.11, 0.01, 24),
        coreMat,
      );
      sensorRing.name = "sensor-ring";
      sensorRing.position.set(0, -0.03, 0.1);
      group.add(sensorRing);
      const sensor = new THREE.Mesh(
        new THREE.CylinderGeometry(0.07, 0.07, 0.014, 24),
        sensorMat,
      );
      sensor.name = "optical-sensor";
      sensor.position.set(0, -0.031, 0.1);
      group.add(sensor);

      [
        [-0.3, 0.7],
        [0.3, 0.7],
        [-0.38, -0.65],
        [0.38, -0.65],
      ].forEach(([x, z]) => {
        const foot = new THREE.Mesh(
          new THREE.CylinderGeometry(0.1, 0.1, 0.016, 24),
          padMat,
        );
        foot.position.set(x, -0.03, z);
        group.add(foot);
      });

      if (id === "mouse") {
        // ---------- 8. Cable with strain relief and USB plug ----------
        const cablePath = new THREE.CatmullRomCurve3([
          new THREE.Vector3(0, 0.03, 1.0),
          new THREE.Vector3(0, -0.004, 1.4),
          new THREE.Vector3(-0.35, -0.004, 1.75),
          new THREE.Vector3(-0.95, -0.004, 1.6),
          new THREE.Vector3(-1.35, -0.004, 1.0),
          new THREE.Vector3(-1.45, -0.004, 0.55),
        ]);
        group.add(
          new THREE.Mesh(
            new THREE.TubeGeometry(cablePath, 80, 0.026, 12, false),
            cableMat,
          ),
        );

        const relief = new THREE.Mesh(
          new THREE.CylinderGeometry(0.034, 0.05, 0.14, 16),
          cableMat,
        );
        relief.rotation.x = Math.PI / 2;
        relief.position.set(0, 0.03, 1.2);
        group.add(relief);

        const plug = new THREE.Group();
        plug.position.copy(cablePath.getPoint(1));
        plug.position.y += 0.012;
        plug.quaternion.setFromUnitVectors(
          new THREE.Vector3(0, 0, 1),
          cablePath.getTangent(1).normalize(),
        );

        const boot = new THREE.Mesh(
          new THREE.BoxGeometry(0.15, 0.09, 0.2),
          thumbMat,
        );
        boot.position.z = 0.1;
        plug.add(boot);
        const usbMetal = new THREE.Mesh(
          new THREE.BoxGeometry(0.12, 0.05, 0.3),
          silverMetalMat,
        );
        usbMetal.position.z = 0.33;
        plug.add(usbMetal);
        const usbSlot = new THREE.Mesh(
          new THREE.BoxGeometry(0.1, 0.03, 0.01),
          coreMat,
        );
        usbSlot.position.z = 0.485;
        plug.add(usbSlot);
        group.add(plug);
      }

      break;
    }

    /*
     * OPTIONAL: update the Mouse entry in HARDWARE_DATA so the "Key Parts & Features"
     * panel matches the new model:
     *
     * features: ['Contoured Palm Shell', 'Left & Right Click Buttons', 'Ridged Scroll Wheel', 'Thumb Side Buttons', 'Optical Sensor & Glide Feet']
     */

    case "audio-card": {
      const pcb = new THREE.Mesh(
        new THREE.BoxGeometry(2.6, 0.06, 1.5),
        pcbMat,
      );
      pcb.name = "circuit-board";
      pcb.castShadow = true;
      group.add(pcb);

      const pcie = new THREE.Mesh(
        new THREE.BoxGeometry(0.9, 0.15, 0.06),
        goldMat,
      );
      pcie.name = "contacts";
      pcie.position.set(-0.5, -0.1, 0.72);
      group.add(pcie);

      const bracket = new THREE.Mesh(
        new THREE.BoxGeometry(0.06, 1.4, 1.7),
        silverMetalMat,
      );
      bracket.position.set(-1.3, 0.4, 0);
      group.add(bracket);

      const jacks = new THREE.Group();
      jacks.name = "audio-connectors";
      const jackColors = [0x4b8f61, 0xd06d83, 0x527fa5, 0xd99a48];
      jackColors.forEach((col, idx) => {
        const jack = new THREE.Mesh(
          new THREE.CylinderGeometry(0.08, 0.08, 0.12, 16),
          new THREE.MeshStandardMaterial({ color: col, roughness: 0.3 }),
        );
        jack.rotation.z = Math.PI / 2;
        jack.position.set(-1.32, 0.1 + idx * 0.24, 0.2);
        jacks.add(jack);
      });
      group.add(jacks);

      const shield = new THREE.Mesh(
        new THREE.BoxGeometry(1.0, 0.18, 0.9),
        whiteBodyMat,
      );
      shield.name = "audio-shield";
      shield.position.set(-0.2, 0.1, -0.1);
      group.add(shield);
      break;
    }

    case "cpu": {
      const substrate = new THREE.Mesh(
        new THREE.BoxGeometry(1.8, 0.08, 1.8),
        pcbMat,
      );
      substrate.name = "substrate";
      substrate.castShadow = true;
      group.add(substrate);

      const heatSpreader = new THREE.Group();
      heatSpreader.name = "heat-spreader";
      const heatSpreaderPlate = new THREE.Mesh(
        new THREE.BoxGeometry(1.36, 0.12, 1.36),
        silverMetalMat,
      );
      heatSpreaderPlate.position.y = 0.14;
      heatSpreaderPlate.castShadow = true;
      heatSpreader.add(heatSpreaderPlate);
      group.add(heatSpreader);

      const logo = new THREE.Mesh(
        new THREE.BoxGeometry(0.48, 0.035, 0.48),
        darkMetalMat,
      );
      logo.name = "die";
      logo.position.y = 0.07;
      group.add(logo);

      for (let x = -0.7; x <= 0.7; x += 0.2) {
        for (let z = -0.7; z <= 0.7; z += 0.2) {
          const pin = new THREE.Mesh(
            new THREE.CylinderGeometry(0.015, 0.015, 0.06, 8),
            goldMat,
          );
          pin.name = "contacts";
          pin.position.set(x, -0.07, z);
          group.add(pin);
        }
      }
      break;
    }

    case "gpu": {
      const gpuPcbMaterial = new THREE.MeshStandardMaterial({
        color: 0x141916,
        roughness: 0.68,
        metalness: 0.14,
      });
      const pcb = new THREE.Mesh(
        new THREE.BoxGeometry(3.02, 0.1, 1.38),
        gpuPcbMaterial,
      );
      pcb.name = "circuit-board";
      pcb.position.y = -0.27;
      pcb.castShadow = true;
      group.add(pcb);

      const heatsink = new THREE.Group();
      heatsink.name = "heatsink";
      for (let index = 0; index < 9; index += 1) {
        const fin = new THREE.Mesh(
          new THREE.BoxGeometry(0.075, 0.28, 0.78),
          silverMetalMat,
        );
        fin.position.set(-1.12 + index * 0.28, -0.02, -0.16);
        fin.castShadow = true;
        heatsink.add(fin);
      }
      const heatPlate = new THREE.Mesh(
        new THREE.BoxGeometry(2.7, 0.1, 0.92),
        darkMetalMat,
      );
      heatPlate.position.y = -0.08;
      heatsink.add(heatPlate);
      group.add(heatsink);

      const gpuChip = new THREE.Mesh(
        new THREE.BoxGeometry(0.62, 0.16, 0.62),
        darkMetalMat,
      );
      gpuChip.name = "gpu-chip";
      gpuChip.position.set(0, -0.13, 0);
      group.add(gpuChip);
      const vram = new THREE.Group();
      vram.name = "vram";
      [-0.95, -0.48, 0.48, 0.95].forEach((x) => {
        const chip = new THREE.Mesh(
          new THREE.BoxGeometry(0.28, 0.09, 0.22),
          pcbMat,
        );
        chip.position.set(x, -0.13, 0.42);
        vram.add(chip);
      });
      group.add(vram);

      const fanAssemblies = new THREE.Group();
      fanAssemblies.name = "cooling-fans";
      [-0.74, 0.74].forEach((xOffset) => {
        const fanGroup = new THREE.Group();
        fanGroup.position.set(xOffset, -0.08, 0);

        const cap = new THREE.Mesh(
          new THREE.CylinderGeometry(0.13, 0.13, 0.06, 24),
          darkMetalMat,
        );
        fanGroup.add(cap);

        for (let b = 0; b < 9; b++) {
          const blade = new THREE.Mesh(
            new THREE.BoxGeometry(0.36, 0.025, 0.09),
            silverMetalMat,
          );
          blade.rotation.y = (b * Math.PI * 2) / 9;
          blade.position.x = Math.cos((b * Math.PI * 2) / 9) * 0.22;
          blade.position.z = Math.sin((b * Math.PI * 2) / 9) * 0.22;
          blade.castShadow = true;
          fanGroup.add(blade);
        }
        fanAssemblies.add(fanGroup);
      });
      group.add(fanAssemblies);

      const shroud = new THREE.Group();
      shroud.name = "gpu-shroud";
      shroud.position.y = 0.065;

      const roundedPanel = (width, height, corner) => {
        const shape = new THREE.Shape();
        shape.moveTo(-width / 2 + corner, -height / 2);
        shape.lineTo(width / 2 - corner, -height / 2);
        shape.quadraticCurveTo(
          width / 2,
          -height / 2,
          width / 2,
          -height / 2 + corner,
        );
        shape.lineTo(width / 2, height / 2 - corner);
        shape.quadraticCurveTo(
          width / 2,
          height / 2,
          width / 2 - corner,
          height / 2,
        );
        shape.lineTo(-width / 2 + corner, height / 2);
        shape.quadraticCurveTo(
          -width / 2,
          height / 2,
          -width / 2,
          height / 2 - corner,
        );
        shape.lineTo(-width / 2, -height / 2 + corner);
        shape.quadraticCurveTo(
          -width / 2,
          -height / 2,
          -width / 2 + corner,
          -height / 2,
        );
        return shape;
      };
      const shroudMaterial = new THREE.MeshStandardMaterial({
        color: 0x292b2e,
        roughness: 0.42,
        metalness: 0.56,
      });
      const bezelMaterial = new THREE.MeshStandardMaterial({
        color: 0x85898c,
        roughness: 0.38,
        metalness: 0.68,
      });
      const ventMaterial = new THREE.MeshStandardMaterial({
        color: 0x090a0c,
        roughness: 0.72,
        metalness: 0.16,
      });
      const grilleMaterial = new THREE.MeshStandardMaterial({
        color: 0x24272a,
        roughness: 0.58,
        metalness: 0.32,
      });
      const makeTopPanel = (name, width, height, corner, depth, material, y) => {
        const mesh = new THREE.Mesh(
          new THREE.ExtrudeGeometry(roundedPanel(width, height, corner), {
            depth,
            bevelEnabled: false,
            curveSegments: 8,
          }),
          material,
        );
        mesh.name = name;
        mesh.rotation.x = -Math.PI / 2;
        mesh.position.y = y;
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        shroud.add(mesh);
        return mesh;
      };

      makeTopPanel(
        "shroud-shell",
        3.08,
        1.42,
        0.2,
        0.15,
        darkMetalMat,
        0,
      );
      makeTopPanel(
        "shroud-face",
        3.01,
        1.35,
        0.2,
        0.018,
        shroudMaterial,
        0.15,
      );

      [-0.74, 0.74].forEach((xOffset) => {
        const bezel = makeTopPanel(
          "fan-bezel",
          1.34,
          1.14,
          0.14,
          0.025,
          bezelMaterial,
          0.171,
        );
        bezel.position.x = xOffset;

        const grille = makeTopPanel(
          "fan-grille",
          1.23,
          1.03,
          0.14,
          0.012,
          ventMaterial,
          0.195,
        );
        grille.position.x = xOffset;

        const lines = new THREE.Group();
        lines.name = "grille-lines";
        for (let index = -7; index <= 7; index += 1) {
          const offset = index * 0.075;
          const halfLength = Math.min(
            0.47,
            (0.46 - Math.abs(offset)) / 0.72,
          );
          if (halfLength <= 0) continue;
          const line = new THREE.Mesh(
            new THREE.BoxGeometry(halfLength * 2, 0.008, 0.009),
            grilleMaterial,
          );
          line.position.set(xOffset + offset, 0.216, 0);
          line.rotation.y = -0.72;
          lines.add(line);
        }
        shroud.add(lines);
      });

      const centerBridge = new THREE.Mesh(
        new THREE.BoxGeometry(0.22, 0.035, 1.12),
        shroudMaterial,
      );
      centerBridge.name = "shroud-bridge";
      centerBridge.position.set(0, 0.216, 0);
      shroud.add(centerBridge);
      group.add(shroud);

      const powerConnectors = new THREE.Mesh(
        new THREE.BoxGeometry(0.48, 0.18, 0.22),
        darkMetalMat,
      );
      powerConnectors.name = "power-connectors";
      powerConnectors.position.set(-1.05, -0.2, 0);
      group.add(powerConnectors);
      const displayConnectors = new THREE.Mesh(
        new THREE.BoxGeometry(0.24, 0.3, 1.1),
        silverMetalMat,
      );
      displayConnectors.name = "display-connectors";
      displayConnectors.position.set(1.54, -0.17, 0.12);
      group.add(displayConnectors);
      group.rotation.x = Math.PI / 2;
      break;
    }

    case "keyboard": {
      const base = new THREE.Mesh(
        new THREE.BoxGeometry(3.4, 0.15, 1.3),
        whiteBodyMat,
      );
      base.name = "keyboard-base";
      base.castShadow = true;
      group.add(base);

      const switches = new THREE.Group();
      switches.name = "switches";
      for (let r = -0.45; r <= 0.45; r += 0.18) {
        for (let c = -1.5; c <= 1.5; c += 0.18) {
          const switchHousing = new THREE.Mesh(
            new THREE.BoxGeometry(0.09, 0.055, 0.09),
            silverMetalMat,
          );
          switchHousing.position.set(c, 0.09, r);
          switches.add(switchHousing);
        }
      }
      group.add(switches);

      const keycaps = new THREE.Group();
      keycaps.name = "keycaps";
      for (let r = -0.45; r <= 0.45; r += 0.18) {
        for (let c = -1.5; c <= 1.5; c += 0.18) {
          const key = new THREE.Mesh(
            new THREE.BoxGeometry(0.14, 0.08, 0.14),
            darkMetalMat,
          );
          key.position.set(c, 0.15, r);
          keycaps.add(key);
        }
      }
      group.add(keycaps);

      const rgbPlate = new THREE.Mesh(
        new THREE.BoxGeometry(3.3, 0.02, 1.2),
        cyanGlowMat,
      );
      rgbPlate.name = "backlight";
      rgbPlate.position.y = 0.086;
      group.add(rgbPlate);
      break;
    }

    case "microphone": {
      const base = new THREE.Mesh(
        new THREE.CylinderGeometry(0.5, 0.55, 0.08, 32),
        darkMetalMat,
      );
      base.name = "mic-stand";
      base.position.y = -0.9;
      group.add(base);

      const stem = new THREE.Mesh(
        new THREE.CylinderGeometry(0.04, 0.04, 0.9, 16),
        silverMetalMat,
      );
      stem.name = "mic-stand";
      stem.position.y = -0.45;
      group.add(stem);

      const micBody = new THREE.Mesh(
        new THREE.CylinderGeometry(0.22, 0.22, 0.7, 32),
        whiteBodyMat,
      );
      micBody.name = "mic-body";
      micBody.position.y = 0.1;
      group.add(micBody);

      const meshHead = new THREE.Mesh(
        new THREE.SphereGeometry(0.23, 32, 16),
        silverMetalMat,
      );
      meshHead.name = "mic-capsule";
      meshHead.position.y = 0.55;
      group.add(meshHead);

      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(0.23, 0.02, 16, 32),
        cyanGlowMat,
      );
      ring.rotation.x = Math.PI / 2;
      ring.position.y = 0.25;
      group.add(ring);
      break;
    }

    case "monitor": {
      const bezel = new THREE.Mesh(
        new THREE.BoxGeometry(3.2, 1.9, 0.1),
        whiteBodyMat,
      );
      bezel.name = "monitor-bezel";
      bezel.position.y = 0.4;
      bezel.castShadow = true;
      group.add(bezel);

      const screen = new THREE.Mesh(
        new THREE.PlaneGeometry(3.0, 1.75),
        new THREE.MeshStandardMaterial({
          color: 0x111315,
          emissive: 0x000000,
          emissiveIntensity: 0,
          roughness: 0.1,
        }),
      );
      screen.name = "monitor-panel";
      screen.position.set(0, 0.4, 0.052);
      group.add(screen);

      const stand = new THREE.Mesh(
        new THREE.BoxGeometry(0.2, 0.8, 0.1),
        silverMetalMat,
      );
      stand.name = "monitor-stand";
      stand.position.set(0, -0.3, -0.1);
      group.add(stand);

      const base = new THREE.Mesh(
        new THREE.BoxGeometry(1.2, 0.04, 0.8),
        darkMetalMat,
      );
      base.name = "monitor-base";
      base.position.set(0, -0.7, 0);
      group.add(base);
      break;
    }

    case "printer": {
      // Main Body Base
      const bodyGeo = new THREE.BoxGeometry(2.4, 0.9, 1.6);
      const body = new THREE.Mesh(bodyGeo, whiteBodyMat);
      body.name = "printer-housing";
      body.position.set(0, 0.45, 0);
      body.castShadow = true;
      body.receiveShadow = true;
      group.add(body);

      // Dark Mid-Section (Paper Exit Gap / Accent Line)
      const gapGeo = new THREE.BoxGeometry(2.42, 0.12, 1.5);
      const gap = new THREE.Mesh(gapGeo, darkMetalMat || silverMetalMat);
      gap.position.set(0, 0.45, 0.02);
      group.add(gap);

      // Top Scanner Assembly
      const scannerGeo = new THREE.BoxGeometry(2.4, 0.35, 1.6);
      const scanner = new THREE.Mesh(scannerGeo, whiteBodyMat);
      scanner.position.set(0, 1.075, 0);
      scanner.castShadow = true;
      group.add(scanner);

      // Scanner Glass Bed Gap Accent Line
      const glassLineGeo = new THREE.BoxGeometry(2.3, 0.02, 1.5);
      const glassLine = new THREE.Mesh(
        glassLineGeo,
        new THREE.MeshStandardMaterial({
          color: 0x060a12,
          roughness: 0.2,
        }),
      );
      glassLine.position.set(0, 0.9, 0);
      group.add(glassLine);

      // Top Rear Input Paper Tray (Angled Back)
      const inputTray = new THREE.Mesh(
        new THREE.BoxGeometry(1.6, 0.05, 0.9),
        silverMetalMat,
      );
      inputTray.name = "paper-tray";
      inputTray.rotation.x = -0.55;
      inputTray.position.set(0, 1.4, -0.65);
      inputTray.castShadow = true;
      group.add(inputTray);

      // Blank Paper Stack in Top Tray
      const paperStack = new THREE.Mesh(
        new THREE.BoxGeometry(1.4, 0.06, 1.0),
        new THREE.MeshStandardMaterial({
          color: 0xffffff,
          roughness: 0.9,
        }),
      );
      paperStack.rotation.x = -0.55;
      paperStack.position.set(0, 1.43, -0.63);
      group.add(paperStack);

      // Front Output Paper Tray (Extending Forward)
      const outputTray = new THREE.Mesh(
        new THREE.BoxGeometry(1.5, 0.04, 0.9),
        silverMetalMat,
      );
      outputTray.name = "output-tray";
      outputTray.position.set(0, 0.22, 0.85);
      outputTray.castShadow = true;
      group.add(outputTray);

      // Output Printed Paper (Sliding out front slot)
      const outputPaper = new THREE.Mesh(
        new THREE.PlaneGeometry(1.2, 0.9),
        new THREE.MeshStandardMaterial({
          color: 0xf8f8f8,
          roughness: 0.8,
          side: THREE.DoubleSide,
        }),
      );
      outputPaper.rotation.x = Math.PI / 2;
      outputPaper.position.set(0, 0.25, 0.8);
      outputPaper.receiveShadow = true;
      group.add(outputPaper);

      // Control Panel Mount (Angled Front Screen Plate)
      const panelMount = new THREE.Mesh(
        new THREE.BoxGeometry(0.9, 0.3, 0.08),
        whiteBodyMat,
      );
      panelMount.name = "control-panel";
      panelMount.rotation.x = -0.25;
      panelMount.position.set(0.65, 0.75, 0.81);
      group.add(panelMount);

      // LCD Screen
      const lcd = new THREE.Mesh(
        new THREE.BoxGeometry(0.45, 0.2, 0.02),
        cyanGlowMat,
      );
      lcd.rotation.x = -0.25;
      lcd.position.set(0.48, 0.76, 0.85);
      group.add(lcd);

      // Control Buttons (Power, Start, Cancel)
      const btnGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.03, 16);
      const btnMat = new THREE.MeshStandardMaterial({
        color: 0x060a12,
        roughness: 0.32,
      });

      const powerBtn = new THREE.Mesh(btnGeo, btnMat);
      powerBtn.rotation.x = Math.PI / 2 - 0.25;
      powerBtn.position.set(0.82, 0.78, 0.85);
      group.add(powerBtn);

      const startBtn = new THREE.Mesh(
        btnGeo,
        new THREE.MeshStandardMaterial({
          color: 0xb8b9b7,
          roughness: 0.48,
          metalness: 0.04,
        }),
      );
      startBtn.rotation.x = Math.PI / 2 - 0.25;
      startBtn.position.set(0.93, 0.78, 0.85);
      group.add(startBtn);

      // Rubber Base Feet
      const footGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.04, 12);
      const footMat = new THREE.MeshBasicMaterial({ color: 0x111111 });
      const footPositions = [
        [-1.0, 0.02, -0.6],
        [1.0, 0.02, -0.6],
        [-1.0, 0.02, 0.6],
        [1.0, 0.02, 0.6],
      ];

      footPositions.forEach(([x, y, z]) => {
        const foot = new THREE.Mesh(footGeo, footMat);
        foot.position.set(x, y, z);
        group.add(foot);
      });

      break;
    }

    case "projector": {
      const housing = new THREE.Mesh(
        new THREE.BoxGeometry(2.3, 0.75, 1.8),
        whiteBodyMat,
      );
      housing.name = "projector-housing";
      housing.castShadow = true;
      group.add(housing);

      const lensOuter = new THREE.Mesh(
        new THREE.CylinderGeometry(0.32, 0.32, 0.2, 32),
        silverMetalMat,
      );
      lensOuter.name = "projector-lens";
      lensOuter.rotation.x = Math.PI / 2;
      lensOuter.position.set(-0.5, 0, 0.9);
      group.add(lensOuter);

      const lensGlass = new THREE.Mesh(
        new THREE.CylinderGeometry(0.25, 0.25, 0.22, 32),
        cyanGlowMat,
      );
      lensGlass.rotation.x = Math.PI / 2;
      lensGlass.position.set(-0.5, 0, 0.92);
      group.add(lensGlass);
      break;
    }

    case "scanner": {
      const body = new THREE.Mesh(
        new THREE.BoxGeometry(2.6, 0.4, 1.8),
        whiteBodyMat,
      );
      body.name = "scanner-housing";
      body.castShadow = true;
      group.add(body);

      const glass = new THREE.Mesh(
        new THREE.PlaneGeometry(2.2, 1.4),
        new THREE.MeshStandardMaterial({
          color: 0x112233,
          roughness: 0.1,
          metalness: 0.9,
          transparent: true,
          opacity: 0.8,
        }),
      );
      glass.name = "scanner-glass";
      glass.rotation.x = -Math.PI / 2;
      glass.position.y = 0.21;
      group.add(glass);

      const laserBar = new THREE.Mesh(
        new THREE.BoxGeometry(0.08, 0.04, 1.35),
        cyanGlowMat,
      );
      laserBar.name = "scanner-sensor";
      laserBar.position.set(-0.9, 0.22, 0);
      group.add(laserBar);

      let sweepDir = 1;
      animatedElements.push(() => {
        laserBar.position.x += 0.015 * sweepDir;
        if (laserBar.position.x > 0.9 || laserBar.position.x < -0.9) {
          sweepDir *= -1;
        }
      });
      break;
    }

    case "speakers": {
      [-0.9, 0.9].forEach((xPos) => {
        const box = new THREE.Mesh(
          new THREE.BoxGeometry(0.8, 1.5, 0.8),
          whiteBodyMat,
        );
        box.name = "speaker-cabinet";
        box.position.set(xPos, 0, 0);
        box.castShadow = true;
        group.add(box);

        const woofer = new THREE.Mesh(
          new THREE.CylinderGeometry(0.28, 0.15, 0.1, 32),
          darkMetalMat,
        );
        woofer.name = "woofer";
        woofer.rotation.x = Math.PI / 2;
        woofer.position.set(xPos, -0.2, 0.38);
        group.add(woofer);

        const tweeter = new THREE.Mesh(
          new THREE.CylinderGeometry(0.12, 0.08, 0.08, 32),
          cyanGlowMat,
        );
        tweeter.name = "tweeter";
        tweeter.rotation.x = Math.PI / 2;
        tweeter.position.set(xPos, 0.35, 0.38);
        group.add(tweeter);
      });
      break;
    }

    case "webcam": {
      const clip = new THREE.Mesh(
        new THREE.BoxGeometry(0.4, 0.4, 0.5),
        darkMetalMat,
      );
      clip.name = "webcam-clip";
      clip.position.y = -0.5;
      group.add(clip);

      const webcamHead = new THREE.Mesh(
        new THREE.CylinderGeometry(0.3, 0.3, 1.0, 32),
        whiteBodyMat,
      );
      webcamHead.name = "webcam-body";
      webcamHead.rotation.z = Math.PI / 2;
      webcamHead.position.y = 0.1;
      webcamHead.castShadow = true;
      group.add(webcamHead);

      const lens = new THREE.Mesh(
        new THREE.CylinderGeometry(0.18, 0.18, 0.1, 32),
        cyanGlowMat,
      );
      lens.name = "webcam-lens";
      lens.rotation.x = Math.PI / 2;
      lens.position.set(0, 0.1, 0.28);
      group.add(lens);
      break;
    }

    default: {
      throw new Error(`No procedural model is configured for hardware id "${id}".`);
    }
  }

  return group;
}

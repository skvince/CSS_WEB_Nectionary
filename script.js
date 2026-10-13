/**
 * HARDWARE DATABASE (12 Alphabetical Components)
 */
const HARDWARE_DATA = [
  {
    id: "audio-card",
    name: "Audio Card",
    category: "Internal Hardware",
    subCategory: "Expansion Board",
    icon: "fa-file-audio",
    modelUrl: "",
    shortDesc:
      "Dedicated expansion board converting digital audio signals into crisp analog sound.",
    definition:
      "An Audio Card (also known as a Sound Card) is an internal expansion card or integrated chipset that facilitates the input and output of audio signals to and from a computer under control of computer programs.",
    functions: [
      "Converts digital audio data into high-fidelity analog output for headphones/speakers.",
      "Processes audio inputs from microphones and line-in sources.",
      "Provides hardware spatial surround sound positioning and noise cancellation.",
    ],
    examples:
      "Creative Sound Blaster AE-9, ASUS Xonar SE, Realtek High Definition Integrated Audio.",
    features: [
      "Digital-to-Analog Converter (DAC)",
      "3.5mm Jack Connectors",
      "S/PDIF Optical Port",
      "PCI Express x1 Slot",
      "EMI Shielding Hood",
    ],
  },
  {
    id: "cpu",
    name: "Central Processing Unit (CPU)",
    category: "Internal Hardware",
    subCategory: "Core Processing",
    icon: "fa-microchip",
    modelUrl: "",
    shortDesc:
      "The primary electronic circuit performing instructions and logic for the entire system.",
    definition:
      'The Central Processing Unit (CPU) is the primary component of a computer that retrieves and executes instructions. It acts as the "brain" of the computer, performing basic arithmetic, logic, controlling, and input/output operations specified by instructions in the program.',
    functions: [
      "Fetches, decodes, and executes program instructions.",
      "Performs complex mathematical computations and logical operations.",
      "Manages system bus bandwidth and directs hardware resource flow.",
    ],
    examples: "Intel Core i9-14900K, AMD Ryzen 9 7950X, Apple M3 Max.",
    features: [
      "Silicon Core Die",
      "Heat Spreader (IHS)",
      "L1/L2/L3 Cache Memory",
      "LGA/PGA Pin Array",
      "Clock Rate (GHz)",
    ],
  },
  {
    id: "gpu",
    name: "Graphics Processing Unit (GPU)",
    category: "Internal Hardware",
    subCategory: "Processing & Graphics",
    icon: "fa-gamepad",
    modelUrl: "",
    shortDesc:
      "High-parallel processing board specialized for rendering 3D graphics and AI tasks.",
    definition:
      "A Graphics Processing Unit (GPU) is a specialized electronic circuit designed to rapidly manipulate and alter memory to accelerate the creation of images, 3D scenes, and videos in a frame buffer intended for output to a display device.",
    functions: [
      "Renders complex 3D geometry, shaders, textures, and ray-traced lighting.",
      "Offloads heavy parallel mathematical computations and AI workloads from the CPU.",
      "Outputs multi-monitor video display signals via HDMI and DisplayPort.",
    ],
    examples:
      "NVIDIA GeForce RTX 4090, AMD Radeon RX 7900 XTX, Intel Arc A770.",
    features: [
      "Dual/Triple Cooling Fans",
      "VRAM High-Speed Memory",
      "PCIe Connector Board",
      "Aluminum Heatsink Fins",
      "DisplayPort / HDMI Ports",
    ],
  },
  {
    id: "keyboard",
    name: "Keyboard",
    category: "Peripherals / Input",
    subCategory: "Input Device",
    icon: "fa-keyboard",
    modelUrl: "",
    shortDesc:
      "Primary alphanumeric text entry peripheral using key switches and matrix scanning.",
    definition:
      "A Keyboard is a human interface input device modeled after the typewriter, using an arrangement of buttons or keys to act as mechanical levers or electronic switches for feeding alphanumeric data into a computer.",
    functions: [
      "Feeds alphanumeric text, punctuation, and commands into software.",
      "Executes hotkeys, shortcuts, and navigation functions.",
      "Sends individual keypress matrix scans to the operating system.",
    ],
    examples:
      "Logitech MX Keys, Corsair K95 RGB Platinum, Keychron Q1 Custom.",
    features: [
      "Mechanical Switches",
      "RGB Backlighting",
      "Keycaps Grid",
      "USB Braided Cable",
      "Ergonomic Palm Rest",
    ],
  },
  {
    id: "microphone",
    name: "Microphone",
    category: "Peripherals / Input",
    subCategory: "Audio Input",
    icon: "fa-microphone",
    modelUrl: "",
    shortDesc:
      "Acoustic transducer converting sound waves into electrical signals for digital capture.",
    definition:
      "A Microphone is an input transducer that converts sound waves in the air into electrical audio signals, allowing users to record voice, communicate over networks, and utilize voice-controlled applications.",
    functions: [
      "Captures vocal audio for voice over IP (VoIP) calls and live streaming.",
      "Converts physical sound pressure into digital audio samples.",
      "Filters background ambient noise using cardioid/omnidirectional patterns.",
    ],
    examples: "Shure SM7B, Blue Yeti USB Microphone, Rode NT-USB.",
    features: [
      "Condenser Capsule",
      "Pop Filter Mesh",
      "Gain Control Knob",
      "Heavy Metal Desk Stand",
      "XLR / USB Connector",
    ],
  },
  {
    id: "monitor",
    name: "Monitor",
    category: "Output Devices",
    subCategory: "Display Output",
    icon: "fa-desktop",
    modelUrl: "",
    shortDesc:
      "Visual display output unit rendering user interfaces, video, and computer graphics.",
    definition:
      "A Monitor is an output display device that visually presents images, video, text, and graphical user interfaces generated by the computer graphics card.",
    functions: [
      "Provides real-time visual output of operating system operations.",
      "Displays high-resolution imagery, video playback, and software GUIs.",
      "Offers user controls for brightness, color calibration, and refresh rates.",
    ],
    examples:
      "Dell UltraSharp U2723QE, LG UltraGear OLED 27GS95QE, ASUS ROG Swift.",
    features: [
      "4K IPS / OLED Panel",
      "Ultra-Thin Bezel Frame",
      "Adjustable Ergonomic Stand",
      "HDMI/DisplayPort Inputs",
      "High Refresh Rate (144Hz+)",
    ],
  },
  {
    id: "mouse",
    name: "Mouse",
    category: "Peripherals / Input",
    subCategory: "Pointing Input",
    icon: "fa-mouse",
    modelUrl: "",
    shortDesc:
      "Hand-held pointing peripheral detecting 2D movement relative to a flat surface.",
    definition:
      "A Mouse is a hand-held pointing device that detects two-dimensional motion relative to a surface. This motion is typically translated into the movement of a pointer on a display, allowing smooth graphical user interface control.",
    functions: [
      "Controls the 2D position of the screen cursor with high precision.",
      "Executes click, double-click, right-click, and drag gestures.",
      "Allows rapid document and webpage scrolling via tactile scroll wheel.",
    ],
    examples:
      "Logitech M220 / Pebble Wireless Mouse, MX Master 3S, Razer DeathAdder V3 Pro.",
    features: [
      "Logi Oval Pebble Contour",
      "Center Tactile Scroll Wheel",
      "Top Split Click Buttons",
      "Optical Sensor Assembly",
      "Smooth Low-Friction Feet",
    ],
  },
  {
    id: "printer",
    name: "Printer",
    category: "Output Devices",
    subCategory: "Hardcopy Output",
    icon: "fa-print",
    modelUrl: "",
    shortDesc:
      "Peripheral device producing physical hardcopy text and graphics on paper media.",
    definition:
      "A Printer is a peripheral output device that accepts text and graphic output from a computer and transfers the information to paper, transparent film, or other physical substrates.",
    functions: [
      "Transforms electronic documents into physical paper prints.",
      "Prints photo-quality images and vector graphics.",
      "Offers multi-page double-sided (duplex) document production.",
    ],
    examples:
      "HP LaserJet Pro M404dn, Epson EcoTank ET-2850, Canon PIXMA TS9120.",
    features: [
      "Toner / Ink Cartridges",
      "Paper Feed Tray",
      "Laser / Inkjet Printhead",
      "Output Paper Catch Tray",
      "LCD Control Screen",
    ],
  },
  {
    id: "projector",
    name: "Projector",
    category: "Output Devices",
    subCategory: "Large Display Output",
    icon: "fa-video",
    modelUrl: "",
    shortDesc:
      "Optical output device projecting scaled video images onto walls or projector screens.",
    definition:
      "A Projector is an optical device that projects an image or moving video onto a large surface, such as a projection screen or wall, using high-intensity light engines.",
    functions: [
      "Magnifies display output for large audience presentations and theaters.",
      "Projects high-contrast video signals in conference rooms or home setups.",
      "Supports short-throw and long-throw optical projection distance scaling.",
    ],
    examples:
      "Epson Home Cinema 2250, BenQ TK700STi, Anker Nebula Capsule.",
    features: [
      "High-Lumen Optical Lens",
      "Keystone Correction Unit",
      "Internal Cooling Fan",
      "Focus Ring Adjuster",
      "Heat Dissipation Vents",
    ],
  },
  {
    id: "scanner",
    name: "Scanner",
    category: "Peripherals / Input",
    subCategory: "Optical Input",
    icon: "fa-copy",
    modelUrl: "",
    shortDesc:
      "Optical device analyzing physical documents to convert them into digital images.",
    definition:
      "A Scanner is an optical input device that captures images of physical documents, printed text, handwriting, or physical objects and converts them into a digital image format for computer storage.",
    functions: [
      "Digitizes paper documents into PDF or image files.",
      "Utilizes Optical Character Recognition (OCR) to convert print into editable text.",
      "Captures high-resolution digital copies of physical photographs.",
    ],
    examples:
      "Fujitsu ScanSnap iX1600, Epson Perfection V600, Canon CanoScan LiDE 400.",
    features: [
      "Glass Flatbed Surface",
      "CCD / CIS Optical Sensor",
      "Moving Laser/Light Bar",
      "Heavy Duty Hinged Cover",
      "High Optical DPI Resolution",
    ],
  },
  {
    id: "speakers",
    name: "Speakers",
    category: "Output Devices",
    subCategory: "Audio Output",
    icon: "fa-volume-high",
    modelUrl: "",
    shortDesc:
      "Audio transducers outputting audible sound waves from amplified electrical signals.",
    definition:
      "Computer Speakers are hardware output devices that plug into a computer system to generate audible audio output, converting electrical audio signals into sound waves via electromagnetic voice coils.",
    functions: [
      "Outputs stereo and multi-channel surround sound audio.",
      "Reproduces bass, mid-range, and high frequencies with audio drivers.",
      "Provides acoustic immersion for movies, games, and music reproduction.",
    ],
    examples:
      "Audioengine A2+, Bose Companion 2 Series III, Logitech Z906 Surround.",
    features: [
      "Woofer Cone Unit",
      "Tweeter Driver",
      "Bass Reflex Port Tube",
      "Volume & Tone Controls",
      "Acoustic Wooden Enclosure",
    ],
  },
  {
    id: "webcam",
    name: "Webcam",
    category: "Peripherals / Input",
    subCategory: "Video Input",
    icon: "fa-camera",
    modelUrl: "",
    shortDesc:
      "Compact video capture camera feeding real-time video streams over computer networks.",
    definition:
      "A Webcam is a compact digital video camera connected to a computer, used to stream live video images in real-time through a computer network or video conferencing software.",
    functions: [
      "Captures real-time video for Zoom, Teams, and video calls.",
      "Enables facial recognition login features (e.g., Windows Hello).",
      "Streams high-definition video feeds for creators and remote meetings.",
    ],
    examples: "Logitech C920 HD Pro, Razer Kiyo Pro, Elgato Facecam.",
    features: [
      "Glass Camera Lens",
      "Integrated LED Indicator",
      "Omnidirectional Dual Mics",
      "Privacy Shutter Shield",
      "Flexible Monitor Clip Mount",
    ],
  },
];

let currentCategory = "All";
let currentLetter = "All";
let searchQuery = "";
let isModelDarkMode = true; // Scoped strictly to the 3D model canvas studio

window.addEventListener("DOMContentLoaded", () => {
  renderAlphabetFilter();
  renderHardwareCards();

  // Register Keyboard Shortcuts
  window.addEventListener("keydown", (e) => {
    const modal = document.getElementById("viewerModal");
    if (modal.classList.contains("hidden")) return;

    if (e.key === "Escape") closeModal();
    if (e.code === "Space") {
      e.preventDefault();
      toggleAutoRotate();
    }
    if (e.key === "r" || e.key === "R") reset3DCamera();
  });

  // Close modal on backdrop click
  document
    .getElementById("viewerModal")
    .addEventListener("click", (e) => {
      if (e.target.id === "viewerModal") closeModal();
    });
});

/**
 * 3D Viewer Studio Dark/White Theme Toggle (Scoped ONLY to the Model Viewport)
 */
function toggleModelViewerTheme() {
  isModelDarkMode = !isModelDarkMode;

  const btnLabel = document.getElementById("modelThemeLabel");
  const btnIcon = document.getElementById("modelThemeIcon");

  if (isModelDarkMode) {
    btnLabel.innerText = "White Studio";
    btnIcon.className = "fa-solid fa-sun";
  } else {
    btnLabel.innerText = "Dark Studio";
    btnIcon.className = "fa-solid fa-moon";
  }

  if (renderer) {
    update3DStudioTheme(isModelDarkMode, true);
  }
}

/**
 * Render hardware grid cards
 */
function renderHardwareCards() {
  const grid = document.getElementById("hardwareGrid");
  const noResults = document.getElementById("noResults");
  const noResultsTitle = document.getElementById("noResultsTitle");
  const home = document.getElementById("home");
  grid.innerHTML = "";
  home.classList.toggle("hidden", searchQuery.length > 0);

  const filtered = HARDWARE_DATA.filter((item) => {
    const matchesCat =
      currentCategory === "All" || item.category === currentCategory;
    const matchesLetter =
      currentLetter === "All" ||
      item.name.toLocaleUpperCase().startsWith(currentLetter);
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.definition.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesLetter && matchesSearch;
  });

  if (filtered.length === 0) {
    noResults.classList.remove("hidden");
    if (searchQuery.length > 0) {
      noResultsTitle.innerText = "No results found.";
    } else if (currentLetter !== "All") {
      noResultsTitle.innerText = "No devices found for this letter";
    } else {
      noResultsTitle.innerText = "No hardware components found";
    }
  } else {
    noResults.classList.add("hidden");
    filtered.forEach((item) => {
      const card = document.createElement("div");
      card.className =
        "glass-card rounded-2xl p-5 flex flex-col justify-between group cursor-pointer relative overflow-hidden";
      card.onclick = () => openModal(item.id);

      card.innerHTML = `
                  <!-- Card Header Badge & Icon -->
                  <div>
                      <div class="flex items-center justify-between mb-4">
                          <span class="text-[11px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-lg bg-cyanGlow/10 text-cyanGlow border border-cyanGlow/30">
                              ${item.category}
                          </span>
                          <div class="w-10 h-10 rounded-xl bg-navyBg border border-slate-700/80 flex items-center justify-center text-cyanGlow group-hover:scale-110 group-hover:border-cyanGlow transition-all">
                              <i class="fa-solid ${item.icon} text-lg"></i>
                          </div>
                      </div>

                      <!-- Hardware Title -->
                      <h3 class="text-lg font-bold text-white group-hover:text-cyanGlow transition-colors mb-2">
                          ${item.name}
                      </h3>

                      <!-- Short Description -->
                      <p class="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-4 font-normal">
                          ${item.shortDesc}
                      </p>
                  </div>

                  <!-- Card Action Footer -->
                  <div class="pt-4 border-t border-slate-800 flex items-center justify-between mt-auto">
                      <span class="text-xs text-slate-400 font-mono flex items-center gap-1.5">
                          <i class="fa-solid fa-cube text-cyanGlow"></i> 3D Inspector
                      </span>
                      <button class="px-3 py-1.5 rounded-lg bg-cyanGlow/10 text-cyanGlow border border-cyanGlow/30 text-xs font-semibold group-hover:bg-cyanGlow group-hover:text-slate-950 transition-all flex items-center gap-1.5">
                          <span>Inspect</span>
                          <i class="fa-solid fa-arrow-right text-[10px]"></i>
                      </button>
                  </div>
              `;
      grid.appendChild(card);
    });
  }
}

/**
 * Category Filter handling
 */
function filterCategory(cat) {
  currentCategory = cat;
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    if (btn.dataset.category === cat) {
      btn.className =
        "filter-btn active-filter px-4 py-2 rounded-xl border border-cyanGlow bg-cyanGlow text-slate-950 font-bold shadow-cyanGlow whitespace-nowrap transition-all";
    } else {
      btn.className =
        "filter-btn px-4 py-2 rounded-xl border border-slate-800 bg-cardBg hover:border-cyanGlow/50 text-slate-300 whitespace-nowrap transition-all";
    }
  });
  renderHardwareCards();
}

function renderAlphabetFilter() {
  const filter = document.getElementById("alphabetFilter");
  const letters = ["All", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  if (filter.childElementCount === 0) {
    letters.forEach((letter) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "alphabet-filter-btn";
      button.innerText = letter;
      button.addEventListener("click", () => filterLetter(letter));
      filter.appendChild(button);
    });
  }

  filter.querySelectorAll("button").forEach((button) => {
    const selected = button.innerText === currentLetter;
    button.classList.toggle("active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
}

function filterLetter(letter) {
  currentLetter = letter;
  renderAlphabetFilter();
  renderHardwareCards();
}

/**
 * Search Input handling
 */
function handleSearch() {
  const input = document.getElementById("searchInput");
  const clearBtn = document.getElementById("clearSearchBtn");
  searchQuery = input.value.trim();
  if (searchQuery.length > 0) {
    clearBtn.classList.remove("hidden");
  } else {
    clearBtn.classList.add("hidden");
  }
  renderHardwareCards();
}

function clearSearch() {
  document.getElementById("searchInput").value = "";
  searchQuery = "";
  document.getElementById("clearSearchBtn").classList.add("hidden");
  renderHardwareCards();
}

function resetFilters() {
  clearSearch();
  filterCategory("All");
  filterLetter("All");
}

/**
 * THREE.JS 3D ENGINE & STUDIO LIGHTING
 */
let scene, camera, renderer, controls;
let currentMeshGroup = null;
let autoRotate = true;
let isWireframe = false;
let animationFrameId = null;
let currentHardwareId = null;
let animatedElements = [];

// Lighting System References
let ambientLight, hemisphereLight, dirLight, cyanRimLight, fillLight;
let gridHelper, shadowPlane, themeTransitionFrame = null;

function initThreeJS() {
  const container = document.getElementById("webgl-container");
  container.innerHTML = "";

  // 1. Create Scene & Camera
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    45,
    container.clientWidth / container.clientHeight,
    0.1,
    100,
  );
  camera.position.set(0, 2, 5);

  // 2. WebGL Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  container.appendChild(renderer.domElement);

  // 3. Orbit Controls
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.autoRotate = autoRotate;
  controls.autoRotateSpeed = 2.0;
  controls.minDistance = 1;
  controls.maxDistance = 15;

  // 4. Studio lighting setup
  ambientLight = new THREE.AmbientLight(0xffffff, 0.65);
  scene.add(ambientLight);

  hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x1e293b, 0.55);
  scene.add(hemisphereLight);

  dirLight = new THREE.DirectionalLight(0xffffff, 1.8);
  dirLight.position.set(5, 8, 5);
  dirLight.castShadow = true;
  dirLight.shadow.mapSize.width = 2048;
  dirLight.shadow.mapSize.height = 2048;
  dirLight.shadow.camera.left = -10;
  dirLight.shadow.camera.right = 10;
  dirLight.shadow.camera.top = 10;
  dirLight.shadow.camera.bottom = -10;
  dirLight.shadow.camera.far = 30;
  dirLight.shadow.bias = -0.0002;
  dirLight.shadow.normalBias = 0.025;
  dirLight.shadow.radius = 4;
  scene.add(dirLight);

  cyanRimLight = new THREE.PointLight(0x06b6d4, 2, 12);
  cyanRimLight.position.set(-4, 3, -3);
  scene.add(cyanRimLight);

  fillLight = new THREE.PointLight(0x67e8f9, 1, 10);
  fillLight.position.set(3, -2, 3);
  scene.add(fillLight);

  shadowPlane = new THREE.Mesh(
    new THREE.PlaneGeometry(20, 20),
    new THREE.ShadowMaterial({ color: 0x060a12, opacity: 0.22 }),
  );
  shadowPlane.rotation.x = -Math.PI / 2;
  shadowPlane.receiveShadow = true;
  scene.add(shadowPlane);

  gridHelper = new THREE.GridHelper(15, 20, 0x06b6d4, 0x334155);
  gridHelper.position.y = -1.2;
  scene.add(gridHelper);

  update3DStudioTheme(isModelDarkMode);

  window.addEventListener("resize", onWindowResize);
}

/**
 * Update ONLY the 3D Studio Canvas Colors & Lights
 */
function getMaterialThemeColor(color, darkMode) {
  const hsl = {};
  color.getHSL(hsl);
  if (darkMode && hsl.l < 0.18) {
    hsl.l = 0.12;
  } else if (!darkMode && hsl.l < 0.18) {
    hsl.l = 0.18;
  } else if (!darkMode && hsl.l < 0.35) {
    hsl.l = 0.28;
  } else if (!darkMode && hsl.l > 0.84) {
    hsl.l = 0.72;
  }
  return new THREE.Color().setHSL(hsl.h, hsl.s, hsl.l);
}

function update3DStudioTheme(darkMode, animate = false) {
  if (!scene) return;

  if (themeTransitionFrame) {
    cancelAnimationFrame(themeTransitionFrame);
    themeTransitionFrame = null;
  }

  const target = darkMode
    ? {
        background: new THREE.Color(0x0b1220),
        ambient: 0.65,
        hemisphere: 0.55,
        directional: 1.8,
        rim: 2,
        fill: 1,
        shadow: 0.22,
      }
    : {
        background: new THREE.Color(0xf1f5f9),
        ambient: 0.85,
        hemisphere: 0.8,
        directional: 1.8,
        rim: 0.55,
        fill: 0.65,
        shadow: 0.12,
      };

  const materialTargets = [];
  if (currentMeshGroup) {
    const seenMaterials = new Set();
    currentMeshGroup.traverse((node) => {
      if (!node.isMesh || !node.material) return;
      const materials = Array.isArray(node.material)
        ? node.material
        : [node.material];
      materials.forEach((material) => {
        if (seenMaterials.has(material) || !material.color) return;
        seenMaterials.add(material);
        if (!material.userData.studioBaseColor) {
          material.userData.studioBaseColor = material.color.clone();
          material.userData.studioBaseRoughness = Number.isFinite(
            material.roughness,
          )
            ? material.roughness
            : 0.5;
          material.userData.studioDarkColor = getMaterialThemeColor(
            material.color,
            true,
          );
          material.userData.studioLightColor = getMaterialThemeColor(
            material.color,
            false,
          );
        }
        materialTargets.push({
          material,
          color: darkMode
            ? material.userData.studioDarkColor
            : material.userData.studioLightColor,
          roughness: Number.isFinite(material.roughness)
            ? Math.max(
                darkMode ? 0.2 : 0.28,
                material.userData.studioBaseRoughness,
              )
            : null,
        });
      });
    });
  }

  const from = {
    background: scene.background
      ? scene.background.clone()
      : target.background.clone(),
    ambient: ambientLight ? ambientLight.intensity : target.ambient,
    hemisphere: hemisphereLight
      ? hemisphereLight.intensity
      : target.hemisphere,
    directional: dirLight ? dirLight.intensity : target.directional,
    rim: cyanRimLight ? cyanRimLight.intensity : target.rim,
    fill: fillLight ? fillLight.intensity : target.fill,
    shadow: shadowPlane ? shadowPlane.material.opacity : target.shadow,
  };
  const materialStarts = materialTargets.map(({ material }) => ({
    color: material.color.clone(),
    roughness: Number.isFinite(material.roughness)
      ? material.roughness
      : material.userData.studioBaseRoughness,
  }));

  const apply = (progress) => {
    if (!scene.background) {
      scene.background = from.background.clone();
    }
    scene.background.copy(from.background).lerp(target.background, progress);
    if (ambientLight) {
      ambientLight.intensity =
        from.ambient + (target.ambient - from.ambient) * progress;
    }
    if (hemisphereLight) {
      hemisphereLight.intensity =
        from.hemisphere + (target.hemisphere - from.hemisphere) * progress;
    }
    if (dirLight) {
      dirLight.intensity =
        from.directional + (target.directional - from.directional) * progress;
    }
    if (cyanRimLight) {
      cyanRimLight.intensity = from.rim + (target.rim - from.rim) * progress;
    }
    if (fillLight) {
      fillLight.intensity = from.fill + (target.fill - from.fill) * progress;
    }
    if (shadowPlane) {
      shadowPlane.material.opacity =
        from.shadow + (target.shadow - from.shadow) * progress;
    }
    materialTargets.forEach(({ material, color, roughness }, index) => {
      material.color.copy(materialStarts[index].color).lerp(color, progress);
      if (roughness !== null) {
        material.roughness =
          materialStarts[index].roughness +
          (roughness - materialStarts[index].roughness) * progress;
      }
    });
  };

  if (
    !animate ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    apply(1);
    return;
  }

  const startTime = performance.now();
  const duration = 500;
  const transition = (now) => {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = progress * progress * (3 - 2 * progress);
    apply(eased);
    if (progress < 1) {
      themeTransitionFrame = requestAnimationFrame(transition);
    } else {
      themeTransitionFrame = null;
    }
  };
  themeTransitionFrame = requestAnimationFrame(transition);
}

function onWindowResize() {
  const container = document.getElementById("webgl-container");
  if (!container || !renderer || !camera) return;
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(container.clientWidth, container.clientHeight);
}

function startAnimationLoop() {
  if (animationFrameId) cancelAnimationFrame(animationFrameId);

  function animate() {
    animationFrameId = requestAnimationFrame(animate);
    if (controls) controls.update();
    animatedElements.forEach((anim) => anim());
    if (renderer && scene && camera) {
      renderer.render(scene, camera);
    }
  }
  animate();
}

/**
 * Automatic Bounding Box Fitting & Camera Framing
 */
function fitModelToCamera(object) {
  const box = new THREE.Box3().setFromObject(object);
  const center = box.getCenter(new THREE.Vector3());
  const size = box.getSize(new THREE.Vector3());

  // Center object at origin
  object.position.x -= center.x;
  object.position.y -= center.y;
  object.position.z -= center.z;

  // Calculate bounding sphere radius
  const maxDim = Math.max(size.x, size.y, size.z);
  const fov = camera.fov * (Math.PI / 180);
  let cameraDistance = Math.abs(maxDim / (2 * Math.tan(fov / 2))) * 1.5;

  cameraDistance = Math.max(2.5, Math.min(cameraDistance, 8));

  camera.position.set(0, maxDim * 0.4, cameraDistance);
  camera.lookAt(0, 0, 0);

  if (controls) {
    controls.target.set(0, 0, 0);
    controls.update();
  }

  const fittedBox = new THREE.Box3().setFromObject(object);
  const groundY = fittedBox.min.y - 0.04;
  if (shadowPlane) shadowPlane.position.y = groundY;
  if (gridHelper) gridHelper.position.y = groundY + 0.01;
}

/**
 * Resource Cleanup Helper
 */
function disposeGroup(group) {
  if (!group) return;
  group.traverse((child) => {
    if (child.isMesh) {
      if (child.geometry) child.geometry.dispose();
      if (child.material) {
        if (Array.isArray(child.material)) {
          child.material.forEach((m) => m.dispose());
        } else {
          child.material.dispose();
        }
      }
    }
  });
  scene.remove(group);
}

/**
 * Load GLTF/GLB or Fallback Realistic Procedural Hardware Model
 */
function loadHardwareModel(item, callback) {
  animatedElements = [];

  if (item.modelUrl && item.modelUrl.trim() !== "") {
    const loader = new THREE.GLTFLoader();
    loader.load(
      item.modelUrl,
      (gltf) => {
        const model = gltf.scene;
        model.traverse((node) => {
          if (node.isMesh) {
            node.castShadow = true;
            node.receiveShadow = true;
          }
        });
        callback(model);
      },
      undefined,
      (error) => {
        console.warn(
          `Failed to load external GLTF for ${item.name}, rendering high-detail procedural model instead.`,
          error,
        );
        callback(createProceduralHardwareModel(item.id));
      },
    );
  } else {
    callback(createProceduralHardwareModel(item.id));
  }
}

/**
 * HIGH-DETAIL PROCEDURAL HARDWARE GEOMETRY GENERATORS
 */
function createProceduralHardwareModel(id) {
  const group = new THREE.Group();

  const pcbMat = new THREE.MeshStandardMaterial({
    color: 0x060a12,
    roughness: 0.42,
    metalness: 0.65,
  });
  const whiteBodyMat = new THREE.MeshStandardMaterial({
    color: 0x1e293b,
    roughness: 0.3,
    metalness: 0.35,
  });
  const darkMetalMat = new THREE.MeshStandardMaterial({
    color: 0x060a12,
    roughness: 0.32,
    metalness: 0.8,
  });
  const mouseMat = new THREE.MeshStandardMaterial({
    color: 0x0b1220,
    roughness: 0.36,
    metalness: 0.2,
  });
  const silverMetalMat = new THREE.MeshStandardMaterial({
    color: 0x334155,
    roughness: 0.26,
    metalness: 0.85,
  });
  const cyanGlowMat = new THREE.MeshStandardMaterial({
    color: 0x06b6d4,
    emissive: 0x06b6d4,
    emissiveIntensity: 1,
    roughness: 0.24,
    metalness: 0.3,
  });
  const goldMat = new THREE.MeshStandardMaterial({
    color: 0x0284c7,
    emissive: 0x06b6d4,
    emissiveIntensity: 0.2,
    metalness: 0.85,
    roughness: 0.22,
  });

  switch (id) {
    case "mouse": {
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
        color: 0x64748b,
        roughness: 0.38,
        metalness: 0.05,
        clearcoat: 0.7,
        clearcoatRoughness: 0.25,
      });
      const buttonMat = new THREE.MeshPhysicalMaterial({
        color: 0x7a8ba6,
        roughness: 0.28,
        metalness: 0.05,
        clearcoat: 0.9,
        clearcoatRoughness: 0.15,
      });
      const coreMat = new THREE.MeshStandardMaterial({
        color: 0x0a0e15,
        roughness: 0.6,
        metalness: 0.3,
      });
      const rubberMat = new THREE.MeshStandardMaterial({
        color: 0x10141b,
        roughness: 0.9,
        metalness: 0.0,
      });
      const ridgeMat = new THREE.MeshStandardMaterial({
        color: 0x2f3a4d,
        roughness: 0.8,
        metalness: 0.1,
      });
      const thumbMat = new THREE.MeshStandardMaterial({
        color: 0x334155,
        roughness: 0.4,
        metalness: 0.2,
      });
      const cableMat = new THREE.MeshStandardMaterial({
        color: 0x1e2633,
        roughness: 0.7,
        metalness: 0.1,
      });
      const padMat = new THREE.MeshStandardMaterial({
        color: 0xe2e8f0,
        roughness: 0.5,
        metalness: 0.0,
      });
      const sensorMat = new THREE.MeshStandardMaterial({
        color: 0x06b6d4,
        emissive: 0x0284c7,
        emissiveIntensity: 0.8,
        roughness: 0.3,
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
      group.add(frontLow);

      // ---------- 2. Dark inner core (visible in the channel between the buttons) ----------
      const core = new THREE.Mesh(
        shape(new THREE.SphereGeometry(1, 128, ROWS), { k: CORE_K }),
        coreMat,
      );
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

      // ---------- 7. Glowing logo ring on the back hump ----------
      const logoZ = -0.4;
      const logo = new THREE.Mesh(
        new THREE.TorusGeometry(0.07, 0.012, 12, 32),
        cyanGlowMat,
      );
      logo.position.set(0, surfaceY(logoZ) + 0.002, logoZ);
      logo.quaternion.setFromUnitVectors(
        new THREE.Vector3(0, 0, 1),
        surfaceNormal(logoZ),
      );
      group.add(logo);

      // ---------- 8. Underside: optical sensor + glide feet ----------
      const sensorRing = new THREE.Mesh(
        new THREE.CylinderGeometry(0.11, 0.11, 0.01, 24),
        coreMat,
      );
      sensorRing.position.set(0, -0.03, 0.1);
      group.add(sensorRing);
      const sensor = new THREE.Mesh(
        new THREE.CylinderGeometry(0.07, 0.07, 0.014, 24),
        sensorMat,
      );
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

      // ---------- 9. Cable with strain relief and USB plug ----------
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
      pcb.castShadow = true;
      group.add(pcb);

      const pcie = new THREE.Mesh(
        new THREE.BoxGeometry(0.9, 0.15, 0.06),
        goldMat,
      );
      pcie.position.set(-0.5, -0.1, 0.72);
      group.add(pcie);

      const bracket = new THREE.Mesh(
        new THREE.BoxGeometry(0.06, 1.4, 1.7),
        silverMetalMat,
      );
      bracket.position.set(-1.3, 0.4, 0);
      group.add(bracket);

      const jackColors = [0x06b6d4, 0x0284c7, 0x67e8f9, 0x06b6d4];
      jackColors.forEach((col, idx) => {
        const jack = new THREE.Mesh(
          new THREE.CylinderGeometry(0.08, 0.08, 0.12, 16),
          new THREE.MeshStandardMaterial({ color: col, roughness: 0.3 }),
        );
        jack.rotation.z = Math.PI / 2;
        jack.position.set(-1.32, 0.1 + idx * 0.24, 0.2);
        group.add(jack);
      });

      const shield = new THREE.Mesh(
        new THREE.BoxGeometry(1.0, 0.18, 0.9),
        whiteBodyMat,
      );
      shield.position.set(-0.2, 0.1, -0.1);
      group.add(shield);
      break;
    }

    case "cpu": {
      const substrate = new THREE.Mesh(
        new THREE.BoxGeometry(1.8, 0.08, 1.8),
        pcbMat,
      );
      substrate.castShadow = true;
      group.add(substrate);

      const ihs = new THREE.Mesh(
        new THREE.BoxGeometry(1.3, 0.12, 1.3),
        silverMetalMat,
      );
      ihs.position.y = 0.08;
      ihs.castShadow = true;
      group.add(ihs);

      const logo = new THREE.Mesh(
        new THREE.BoxGeometry(0.5, 0.13, 0.5),
        cyanGlowMat,
      );
      logo.position.y = 0.085;
      group.add(logo);

      for (let x = -0.7; x <= 0.7; x += 0.2) {
        for (let z = -0.7; z <= 0.7; z += 0.2) {
          const pin = new THREE.Mesh(
            new THREE.CylinderGeometry(0.015, 0.015, 0.06, 8),
            goldMat,
          );
          pin.position.set(x, -0.07, z);
          group.add(pin);
        }
      }
      break;
    }

    case "gpu": {
      const body = new THREE.Mesh(
        new THREE.BoxGeometry(3.0, 0.6, 1.5),
        whiteBodyMat,
      );
      body.castShadow = true;
      group.add(body);

      const fins = new THREE.Mesh(
        new THREE.BoxGeometry(2.8, 0.3, 1.4),
        silverMetalMat,
      );
      fins.position.y = -0.1;
      group.add(fins);

      [-0.75, 0.75].forEach((xOffset) => {
        const fanGroup = new THREE.Group();
        fanGroup.position.set(xOffset, 0.32, 0);

        const cap = new THREE.Mesh(
          new THREE.CylinderGeometry(0.12, 0.12, 0.06, 16),
          cyanGlowMat,
        );
        fanGroup.add(cap);

        for (let b = 0; b < 7; b++) {
          const blade = new THREE.Mesh(
            new THREE.BoxGeometry(0.38, 0.02, 0.08),
            darkMetalMat,
          );
          blade.rotation.y = (b * Math.PI * 2) / 7;
          blade.position.x = Math.cos((b * Math.PI * 2) / 7) * 0.22;
          blade.position.z = Math.sin((b * Math.PI * 2) / 7) * 0.22;
          fanGroup.add(blade);
        }
        group.add(fanGroup);

        animatedElements.push(() => {
          fanGroup.rotation.y += 0.08;
        });
      });

      const strip = new THREE.Mesh(
        new THREE.BoxGeometry(2.4, 0.08, 0.05),
        cyanGlowMat,
      );
      strip.position.set(0, 0.1, 0.76);
      group.add(strip);
      break;
    }

    case "keyboard": {
      const base = new THREE.Mesh(
        new THREE.BoxGeometry(3.4, 0.15, 1.3),
        whiteBodyMat,
      );
      base.castShadow = true;
      group.add(base);

      for (let r = -0.45; r <= 0.45; r += 0.18) {
        for (let c = -1.5; c <= 1.5; c += 0.18) {
          const key = new THREE.Mesh(
            new THREE.BoxGeometry(0.14, 0.08, 0.14),
            darkMetalMat,
          );
          key.position.set(c, 0.11, r);
          group.add(key);
        }
      }

      const rgbPlate = new THREE.Mesh(
        new THREE.BoxGeometry(3.3, 0.02, 1.2),
        cyanGlowMat,
      );
      rgbPlate.position.y = 0.06;
      group.add(rgbPlate);
      break;
    }

    case "microphone": {
      const base = new THREE.Mesh(
        new THREE.CylinderGeometry(0.5, 0.55, 0.08, 32),
        darkMetalMat,
      );
      base.position.y = -0.9;
      group.add(base);

      const stem = new THREE.Mesh(
        new THREE.CylinderGeometry(0.04, 0.04, 0.9, 16),
        silverMetalMat,
      );
      stem.position.y = -0.45;
      group.add(stem);

      const micBody = new THREE.Mesh(
        new THREE.CylinderGeometry(0.22, 0.22, 0.7, 32),
        whiteBodyMat,
      );
      micBody.position.y = 0.1;
      group.add(micBody);

      const meshHead = new THREE.Mesh(
        new THREE.SphereGeometry(0.23, 32, 16),
        silverMetalMat,
      );
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
      bezel.position.y = 0.4;
      bezel.castShadow = true;
      group.add(bezel);

      const screen = new THREE.Mesh(
        new THREE.PlaneGeometry(3.0, 1.75),
        new THREE.MeshStandardMaterial({
          color: 0x0b1220,
          emissive: 0x06b6d4,
          emissiveIntensity: 0.35,
          roughness: 0.1,
        }),
      );
      screen.position.set(0, 0.4, 0.052);
      group.add(screen);

      const stand = new THREE.Mesh(
        new THREE.BoxGeometry(0.2, 0.8, 0.1),
        silverMetalMat,
      );
      stand.position.set(0, -0.3, -0.1);
      group.add(stand);

      const base = new THREE.Mesh(
        new THREE.BoxGeometry(1.2, 0.04, 0.8),
        darkMetalMat,
      );
      base.position.set(0, -0.7, 0);
      group.add(base);
      break;
    }

    case "printer": {
      // Main Body Base
      const bodyGeo = new THREE.BoxGeometry(2.4, 0.9, 1.6);
      const body = new THREE.Mesh(bodyGeo, whiteBodyMat);
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
          color: 0x06b6d4,
          emissive: 0x0284c7,
          emissiveIntensity: 0.35,
          roughness: 0.3,
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
      housing.castShadow = true;
      group.add(housing);

      const lensOuter = new THREE.Mesh(
        new THREE.CylinderGeometry(0.32, 0.32, 0.2, 32),
        silverMetalMat,
      );
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
      glass.rotation.x = -Math.PI / 2;
      glass.position.y = 0.21;
      group.add(glass);

      const laserBar = new THREE.Mesh(
        new THREE.BoxGeometry(0.08, 0.04, 1.35),
        cyanGlowMat,
      );
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
        box.position.set(xPos, 0, 0);
        box.castShadow = true;
        group.add(box);

        const woofer = new THREE.Mesh(
          new THREE.CylinderGeometry(0.28, 0.15, 0.1, 32),
          darkMetalMat,
        );
        woofer.rotation.x = Math.PI / 2;
        woofer.position.set(xPos, -0.2, 0.38);
        group.add(woofer);

        const tweeter = new THREE.Mesh(
          new THREE.CylinderGeometry(0.12, 0.08, 0.08, 32),
          cyanGlowMat,
        );
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
      clip.position.y = -0.5;
      group.add(clip);

      const webcamHead = new THREE.Mesh(
        new THREE.CylinderGeometry(0.3, 0.3, 1.0, 32),
        whiteBodyMat,
      );
      webcamHead.rotation.z = Math.PI / 2;
      webcamHead.position.y = 0.1;
      webcamHead.castShadow = true;
      group.add(webcamHead);

      const lens = new THREE.Mesh(
        new THREE.CylinderGeometry(0.18, 0.18, 0.1, 32),
        cyanGlowMat,
      );
      lens.rotation.x = Math.PI / 2;
      lens.position.set(0, 0.1, 0.28);
      group.add(lens);
      break;
    }

    default: {
      const cube = new THREE.Mesh(
        new THREE.BoxGeometry(1.5, 1.5, 1.5),
        whiteBodyMat,
      );
      group.add(cube);
      break;
    }
  }

  return group;
}

/**
 * Open Modal Studio
 */
function openModal(id) {
  const data = HARDWARE_DATA.find((item) => item.id === id);
  if (!data) return;

  currentHardwareId = id;

  document.getElementById("modalTitle").innerHTML =
    `<i class="fa-solid ${data.icon} text-cyanGlow mr-2"></i>${data.name}`;
  document.getElementById("modalCategoryBadge").innerText = data.category;
  document.getElementById("modalDefinition").innerText = data.definition;
  document.getElementById("modalExamples").innerText = data.examples;

  const funcList = document.getElementById("modalFunctions");
  funcList.innerHTML = "";
  data.functions.forEach((fn) => {
    const li = document.createElement("li");
    li.innerText = fn;
    funcList.appendChild(li);
  });

  const featGrid = document.getElementById("modalFeatures");
  featGrid.innerHTML = "";
  data.features.forEach((ft) => {
    const badge = document.createElement("div");
    badge.className =
      "bg-navyBg p-2 rounded-lg border border-slate-800 text-slate-300 font-mono text-[11px] flex items-center gap-1.5";
    badge.innerHTML = `<i class="fa-solid fa-check text-cyanGlow"></i> ${ft}`;
    featGrid.appendChild(badge);
  });

  const modal = document.getElementById("viewerModal");
  const loader = document.getElementById("canvasLoader");
  modal.classList.remove("hidden");
  loader.classList.remove("opacity-0", "pointer-events-none");
  document.body.style.overflow = "hidden";

  setTimeout(() => {
    if (!renderer) {
      initThreeJS();
    }

    // Cleanup previous group
    if (currentMeshGroup) {
      disposeGroup(currentMeshGroup);
    }

    // Load selected hardware model
    loadHardwareModel(data, (loadedModel) => {
      currentMeshGroup = loadedModel;
      currentMeshGroup.traverse((node) => {
        if (node.isMesh) {
          node.castShadow = true;
          node.receiveShadow = true;
        }
      });
      scene.add(currentMeshGroup);

      // Centering and camera auto-fit calculation
      fitModelToCamera(currentMeshGroup);

      // Ensure renderer size & theme sync
      onWindowResize();
      update3DStudioTheme(isModelDarkMode);

      // Start clean animation loop
      startAnimationLoop();

      setTimeout(() => {
        loader.classList.add("opacity-0", "pointer-events-none");
      }, 200);
    });
  }, 100);
}

function closeModal() {
  const modal = document.getElementById("viewerModal");
  modal.classList.add("hidden");
  document.body.style.overflow = "";
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
  }
}

function toggleAutoRotate() {
  autoRotate = !autoRotate;
  if (controls) controls.autoRotate = autoRotate;
  const btn = document.getElementById("btnAutoRotate");
  if (autoRotate) {
    btn.classList.add("text-cyanGlow", "bg-slate-800");
  } else {
    btn.classList.remove("text-cyanGlow", "bg-slate-800");
  }
}

function rotateModelY(angle) {
  if (currentMeshGroup) {
    currentMeshGroup.rotation.y += angle;
  }
}

function zoom3D(delta) {
  if (camera) {
    const newFov = camera.fov + delta * 10;
    if (newFov >= 15 && newFov <= 75) {
      camera.fov = newFov;
      camera.updateProjectionMatrix();
    }
  }
}

function toggleWireframe() {
  isWireframe = !isWireframe;
  if (currentMeshGroup) {
    currentMeshGroup.traverse((child) => {
      if (child.isMesh && child.material) {
        if (Array.isArray(child.material)) {
          child.material.forEach((m) => (m.wireframe = isWireframe));
        } else {
          child.material.wireframe = isWireframe;
        }
      }
    });
  }
  const btn = document.getElementById("btnWireframe");
  if (isWireframe) {
    btn.classList.add("text-cyanGlow", "bg-slate-800");
  } else {
    btn.classList.remove("text-cyanGlow", "bg-slate-800");
  }
}

function reset3DCamera() {
  if (currentMeshGroup) {
    currentMeshGroup.rotation.set(0, 0, 0);
    fitModelToCamera(currentMeshGroup);
  }
}

function toggleFullscreen() {
  const modalCard = document.getElementById("modalCard");
  if (!document.fullscreenElement) {
    modalCard.requestFullscreen().catch((err) => {
      console.log(`Fullscreen error: ${err.message}`);
    });
  } else {
    document.exitFullscreen();
  }
}

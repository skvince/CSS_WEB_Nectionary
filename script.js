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
      "Mouse Shell",
      "Scroll Wheel",
      "Optical Sensor",
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

const EXISTING_CATEGORY_MAP = {
  "Internal Hardware": ["Processing", "Supporting Component"],
  "Peripherals / Input": ["Input"],
  "Output Devices": ["Output"],
};
const EXISTING_COMPONENT_CATEGORIES = {
  "audio-card": ["Input", "Output", "Supporting Component"],
  cpu: ["Processing"],
  gpu: ["Processing", "Output"],
  keyboard: ["Input"],
  microphone: ["Input"],
  monitor: ["Output"],
  mouse: ["Input"],
  printer: ["Output"],
  projector: ["Output"],
  scanner: ["Input"],
  speakers: ["Output"],
  webcam: ["Input"],
};
const LEGACY_COMPONENT_PARTS = {
  "audio-card": [
    { meshId: "circuit-board", name: "Circuit board", description: "Carries the audio circuitry and expansion connector." },
    { meshId: "audio-connectors", name: "Audio jacks", description: "Connect audio input and output equipment." },
    { meshId: "audio-shield", name: "Shield", description: "Covers sensitive circuitry to reduce electrical interference." },
    { meshId: "contacts", name: "PCIe edge connector", description: "Connects the card to a compatible motherboard slot." },
  ],
  cpu: [
    { meshId: "substrate", name: "Package substrate", description: "Supports the processor die and carries signals to the socket." },
    { meshId: "heat-spreader", name: "Heat spreader", description: "Transfers heat from the processor die to a cooler." },
    { meshId: "die", name: "Processor die", description: "Contains the processor's transistors and execution circuits." },
    { meshId: "contacts", name: "Package contacts", description: "Connect the processor to its compatible socket." },
  ],
  gpu: [
    { meshId: "circuit-board", name: "Graphics-card PCB", description: "Connects the GPU, memory, power circuitry, and connectors." },
    { meshId: "gpu-chip", name: "GPU chip", description: "Performs graphics calculations and parallel workloads." },
    { meshId: "vram", name: "VRAM", description: "Stores graphics data used by the GPU." },
    { meshId: "heatsink", name: "Heatsink", description: "Transfers heat away from the GPU and memory." },
    { meshId: "cooling-fans", name: "Cooling fans", description: "Move air through the heatsink to remove heat." },
    { meshId: "power-connectors", name: "Power connectors", description: "Supply additional power from the PSU when needed." },
    { meshId: "display-connectors", name: "Display connectors", description: "Send video signals to compatible displays." },
  ],
  keyboard: [
    { meshId: "keyboard-base", name: "Keyboard base", description: "Supports the keys and internal switch assembly." },
    { meshId: "keycaps", name: "Keycaps", description: "Provide the surfaces pressed by the typist." },
    { meshId: "switches", name: "Key switches", description: "Register key presses and return each key after it is released." },
    { meshId: "backlight", name: "Backlight layer", description: "Illuminates the keys on keyboards equipped with lighting." },
  ],
  microphone: [
    { meshId: "mic-body", name: "Microphone body", description: "Houses the microphone electronics and controls." },
    { meshId: "mic-capsule", name: "Microphone capsule", description: "Converts sound pressure into an electrical audio signal." },
    { meshId: "mic-stand", name: "Stand", description: "Supports and positions the microphone." },
  ],
  monitor: [
    { meshId: "monitor-panel", name: "Display panel", description: "Produces the visible image from video signals." },
    { meshId: "monitor-bezel", name: "Bezel", description: "Protects and supports the panel edges." },
    { meshId: "monitor-stand", name: "Stand", description: "Supports and positions the display." },
    { meshId: "monitor-base", name: "Base", description: "Stabilizes the monitor on a desk." },
  ],
  mouse: [
    { meshId: "mouse-shell", name: "Mouse shell", description: "Provides the outer body and hand-contact surfaces." },
    { meshId: "scroll-wheel", name: "Scroll wheel", description: "Provides tactile scrolling input." },
    { meshId: "optical-sensor", name: "Optical sensor", description: "Measures surface movement to move the pointer." },
  ],
  printer: [
    { meshId: "printer-housing", name: "Printer housing", description: "Supports and protects the print mechanism." },
    { meshId: "paper-tray", name: "Input paper tray", description: "Holds paper before printing." },
    { meshId: "output-tray", name: "Output tray", description: "Supports printed pages as they leave the printer." },
    { meshId: "control-panel", name: "Control panel", description: "Provides basic status and operating controls." },
  ],
  projector: [
    { meshId: "projector-housing", name: "Projector housing", description: "Supports and protects the optical and electronic assemblies." },
    { meshId: "projector-lens", name: "Projection lens", description: "Focuses and directs the projected image." },
  ],
  scanner: [
    { meshId: "scanner-housing", name: "Scanner housing", description: "Supports the optical scanning assembly." },
    { meshId: "scanner-glass", name: "Scan glass", description: "Provides a flat surface for documents." },
    { meshId: "scanner-sensor", name: "Sensor bar", description: "Captures reflected light as the scan head moves." },
  ],
  speakers: [
    { meshId: "speaker-cabinet", name: "Speaker cabinet", description: "Supports the drivers and helps shape their sound." },
    { meshId: "woofer", name: "Woofer", description: "Reproduces lower and midrange sound frequencies." },
    { meshId: "tweeter", name: "Tweeter", description: "Reproduces higher sound frequencies." },
  ],
  webcam: [
    { meshId: "webcam-body", name: "Camera body", description: "Houses the webcam sensor and electronics." },
    { meshId: "webcam-lens", name: "Lens", description: "Focuses light onto the image sensor." },
    { meshId: "webcam-clip", name: "Monitor clip", description: "Attaches the webcam to a display." },
  ],
};
const LEGACY_TECHNICAL_VIEWS = {
  "audio-card": { ghostMeshIds: ["audio-shield"] },
  cpu: { ghostMeshIds: ["heat-spreader", "substrate"] },
  gpu: { ghostMeshIds: ["gpu-shroud", "heatsink", "cooling-fans"] },
  keyboard: { ghostMeshIds: ["keycaps", "switches"] },
  microphone: { ghostMeshIds: ["mic-body"] },
  monitor: { ghostMeshIds: ["monitor-bezel"] },
  mouse: { ghostMeshIds: ["mouse-shell"] },
  printer: { ghostMeshIds: ["printer-housing"] },
  projector: { ghostMeshIds: ["projector-housing"] },
  scanner: { ghostMeshIds: ["scanner-housing"] },
  speakers: { ghostMeshIds: ["speaker-cabinet"] },
  webcam: { ghostMeshIds: ["webcam-body"] },
};
HARDWARE_DATA.forEach((item) => {
  item.categories =
    item.categories ||
    EXISTING_COMPONENT_CATEGORIES[item.id] ||
    EXISTING_CATEGORY_MAP[item.category] ||
    ["Supporting Component"];
  item.category = item.categories[0];
  item.howWorks = item.howWorks || item.definition;
  item.aliases = item.aliases || "";
  item.parts =
    item.parts ||
    LEGACY_COMPONENT_PARTS[item.id] ||
    item.features.map((name) => ({
      name,
      description: `${name} is a named feature of this component.`,
      meshId: null,
    }));
  item.technicalView =
    item.technicalView || LEGACY_TECHNICAL_VIEWS[item.id] || {};
  item.visualReference = HARDWARE_VISUAL_REFERENCES[item.id] || null;
  item.modelDisclaimer = item.visualReference
    ? `${item.visualReference.conceptual ? "Conceptual study; reference context: " : "Procedural approximation guided by: "}${item.visualReference.model}.`
    : "Simplified procedural study model; proportions and internal details vary by product.";
});
HARDWARE_DATA.push(...ADDITIONAL_HARDWARE_DATA);
const ALTERNATE_HARDWARE_NAMES = {
  "audio-card": ["Sound Card"],
  cpu: ["CPU", "Processor"],
  "flash-drive": ["USB Flash Drive"],
  "graphics-card": ["Video Card"],
  monitor: ["Display Monitor"],
  "network-interface-card": ["Ethernet Card", "LAN Card"],
};
HARDWARE_DATA.forEach((item) => {
  item.alternateNames = ALTERNATE_HARDWARE_NAMES[item.id] || [];
});

let currentCategory = "All";
let currentLetter = "All";
let searchQuery = "";
let isModelDarkMode = true; // Scoped strictly to the 3D model canvas studio

window.addEventListener("DOMContentLoaded", () => {
  const landingPage = document.getElementById("landingPage");
  const museumFooter = document.getElementById("museumFooter");
  const backToTopButton = document.getElementById("backToTop");
  const landingMenuToggle = document.getElementById("landingMenuToggle");
  const landingNavLinks = document.getElementById("landingNavLinks");

  landingPage.appendChild(museumFooter);
  renderCategoryFilters();
  renderAlphabetFilter();
  renderHardwareCards();
  initializeLandingModel();

  landingMenuToggle.addEventListener("click", () => {
    const isOpen = landingNavLinks.classList.toggle("is-open");
    landingMenuToggle.setAttribute("aria-expanded", String(isOpen));
    landingMenuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu",
    );
    landingMenuToggle.innerHTML = `<i class="fa-solid fa-${isOpen ? "xmark" : "bars"}" aria-hidden="true"></i>`;
  });
  landingNavLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeLandingMenu);
  });
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeLandingMenu();
  });

  const updateBackToTopVisibility = () => {
    const isLandingVisible = !landingPage.classList.contains("hidden");
    backToTopButton.classList.toggle(
      "visible",
      isLandingVisible && window.scrollY > 420,
    );
  };
  window.addEventListener("scroll", updateBackToTopVisibility, {
    passive: true,
  });
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

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

let landingModelRenderer;
let landingModelFrame = 0;
let landingModelRenderFrameCallback;
let landingModelScene;
let landingModelCamera;
let landingModelCarouselTimer = 0;
let landingCarouselTransitionTimer = 0;
let landingCarouselModels = [];
let landingCarouselIndex = -1;
const LANDING_CAROUSEL_INTERVAL_MS = 3000;
const LANDING_CAROUSEL_MODEL_IDS = [
  "cpu",
  "graphics-card",
  "motherboard",
  "ram",
  "nvme-ssd",
  "power-supply-unit",
  "heat-sink",
];

function initializeLandingModel() {
  const container = document.getElementById("landingModelCanvas");
  try {
    landingModelRenderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
  } catch (error) {
    console.error("Unable to initialize the landing-page 3D model.", error);
    container.textContent = "3D preview is unavailable in this browser.";
    return;
  }

  landingModelRenderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
  landingModelRenderer.setClearColor(0x000000, 0);
  container.appendChild(landingModelRenderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
  landingModelScene = scene;
  landingModelCamera = camera;

  scene.add(new THREE.AmbientLight(0xffffff, 1.05));
  const keyLight = new THREE.DirectionalLight(0xffffff, 2);
  keyLight.position.set(3, 5, 4);
  scene.add(keyLight);
  const fillLight = new THREE.DirectionalLight(0xdbeafe, 0.55);
  fillLight.position.set(-4, 1, -2);
  scene.add(fillLight);

  landingCarouselModels = LANDING_CAROUSEL_MODEL_IDS.flatMap((id) => {
    const item = HARDWARE_DATA.find((entry) => entry.id === id);
    if (!item) {
      console.error(`Landing carousel model "${id}" is missing from the catalog.`);
      return [];
    }
    const model = createItemModel(item);
    model.userData.landingModelId = id;
    model.rotation.x = -0.08;
    model.rotation.y = -0.55;
    return [{ id, name: item.name, model }];
  });

  const resize = () => {
    const { width, height } = container.getBoundingClientRect();
    if (!width || !height) return;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    landingModelRenderer.setSize(width, height, false);
    fitLandingCarouselModel(camera);
    landingModelRenderer.render(scene, camera);
  };
  const landingModelResizeObserver = new ResizeObserver(resize);
  landingModelResizeObserver.observe(container);
  window.addEventListener("resize", resize, { passive: true });

  landingCarouselModels.forEach(({ model }) => {
    scene.add(model);
    fitLandingCarouselModel(camera, model);
    landingModelRenderer.compile(scene, camera);
    landingModelRenderer.render(scene, camera);
    scene.remove(model);
  });
  setLandingCarouselModel(0, false);
  resize();

  const shouldReduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const renderFrame = () => {
    if (landingPageIsHidden()) {
      landingModelFrame = 0;
      return;
    }
    const activeModel = landingCarouselModels[landingCarouselIndex]?.model;
    if (!shouldReduceMotion && activeModel) activeModel.rotation.y += 0.002;
    landingModelRenderer.render(scene, camera);
    landingModelFrame = window.requestAnimationFrame(renderFrame);
  };
  landingModelRenderFrameCallback = renderFrame;
  if (!shouldReduceMotion) {
    landingModelFrame = window.requestAnimationFrame(renderFrame);
  }
  startLandingCarousel();

  container
    .closest(".landing-model-stage")
    ?.querySelectorAll("[data-carousel-index]")
    .forEach((button) => {
      button.addEventListener("click", () => {
        setLandingCarouselModel(Number(button.dataset.carouselIndex));
        startLandingCarousel();
      });
    });
}

function fitLandingCarouselModel(
  camera,
  model = landingCarouselModels[landingCarouselIndex]?.model,
) {
  const container = document.getElementById("landingModelCanvas");
  if (!model || !container) return;

  const bounds = new THREE.Box3().setFromObject(model);
  if (bounds.isEmpty()) return;
  const center = bounds.getCenter(new THREE.Vector3());
  model.position.sub(center);

  const sphere = bounds.getBoundingSphere(new THREE.Sphere());
  const verticalFov = THREE.MathUtils.degToRad(camera.fov);
  const horizontalFov =
    2 * Math.atan(Math.tan(verticalFov / 2) * camera.aspect);
  const limitingFov = Math.min(verticalFov, horizontalFov);
  const distance = Math.max(2.8, (sphere.radius / Math.sin(limitingFov / 2)) * 1.12);
  const viewDirection = new THREE.Vector3(3.1, 2.6, 3.4).normalize();
  camera.position.copy(viewDirection.multiplyScalar(distance));
  camera.lookAt(0, 0, 0);
  camera.updateProjectionMatrix();
}

function setLandingCarouselModel(index, animate = true) {
  if (!landingCarouselModels.length || !landingModelRenderer) return;
  const nextIndex =
    (index + landingCarouselModels.length) % landingCarouselModels.length;
  if (nextIndex === landingCarouselIndex) return;
  const container = document.getElementById("landingModelCanvas");
  const scene = landingModelScene;
  const camera = landingModelCamera;
  const showModel = () => {
    if (landingCarouselIndex >= 0) {
      scene.remove(landingCarouselModels[landingCarouselIndex].model);
    }
    landingCarouselIndex = nextIndex;
    scene.add(landingCarouselModels[landingCarouselIndex].model);
    fitLandingCarouselModel(camera);

    const current = landingCarouselModels[landingCarouselIndex];
    const label = document.getElementById("landingCarouselLabel");
    const caption = document.getElementById("landingCarouselCaption");
    if (label) label.textContent = `${current.name.toUpperCase()} · 3D VIEW`;
    if (caption) {
      caption.textContent = `Explore hardware from every angle · ${current.name}`;
    }
    container
      .closest(".landing-model-stage")
      ?.querySelectorAll("[data-carousel-index]")
      .forEach((button, buttonIndex) => {
        const active = buttonIndex === landingCarouselIndex;
        button.classList.toggle("active", active);
        button.setAttribute("aria-pressed", String(active));
      });
    landingModelRenderer.render(scene, camera);
    container.classList.remove("is-changing");
  };

  if (landingCarouselTransitionTimer) {
    window.clearTimeout(landingCarouselTransitionTimer);
    landingCarouselTransitionTimer = 0;
  }
  if (animate && landingCarouselIndex >= 0) {
    container.classList.add("is-changing");
    landingCarouselTransitionTimer = window.setTimeout(() => {
      landingCarouselTransitionTimer = 0;
      showModel();
    }, 130);
  } else {
    showModel();
  }
}

function startLandingCarousel() {
  if (landingModelCarouselTimer) {
    window.clearInterval(landingModelCarouselTimer);
  }
  landingModelCarouselTimer = window.setInterval(() => {
    if (!landingPageIsHidden()) {
      setLandingCarouselModel(landingCarouselIndex + 1);
    }
  }, LANDING_CAROUSEL_INTERVAL_MS);
}

function stopLandingCarousel() {
  if (landingModelCarouselTimer) {
    window.clearInterval(landingModelCarouselTimer);
    landingModelCarouselTimer = 0;
  }
}

function landingPageIsHidden() {
  return document.getElementById("landingPage").classList.contains("hidden");
}

function stopLandingModelAnimation() {
  if (landingModelFrame) {
    window.cancelAnimationFrame(landingModelFrame);
    landingModelFrame = 0;
  }
}

function startLandingModelAnimation() {
  if (
    landingModelRenderer &&
    landingModelRenderFrameCallback &&
    !landingModelFrame &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    landingModelFrame = window.requestAnimationFrame(
      landingModelRenderFrameCallback,
    );
  }
}

function closeLandingMenu() {
  const menu = document.getElementById("landingNavLinks");
  const toggle = document.getElementById("landingMenuToggle");
  if (!menu || !toggle) return;
  menu.classList.remove("is-open");
  toggle.setAttribute("aria-expanded", "false");
  toggle.setAttribute("aria-label", "Open navigation menu");
  toggle.innerHTML = '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
}

function enterMuseum() {
  stopLandingModelAnimation();
  stopLandingCarousel();
  closeLandingMenu();
  document.getElementById("landingPage").classList.add("hidden");
  document.getElementById("backToTop").classList.remove("visible");
  ["museumHeader", "catalog"].forEach((id) =>
    document.getElementById(id).classList.remove("hidden"),
  );
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function returnToLanding() {
  closeModal();
  ["museumHeader", "home", "catalog"].forEach((id) =>
    document.getElementById(id).classList.add("hidden"),
  );
  document.getElementById("landingPage").classList.remove("hidden");
  startLandingModelAnimation();
  startLandingCarousel();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

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

function getNamedPartNodes(meshId) {
  const matches = [];
  if (currentMeshGroup && meshId) {
    currentMeshGroup.traverse((node) => {
      if (node.name === meshId) matches.push(node);
    });
  }
  return matches;
}

function createKeyPartsOverlay() {
  const container = document.getElementById("webgl-container");
  keyPartsAnnotationLayer = document.createElement("div");
  keyPartsAnnotationLayer.id = "keyPartsAnnotations";
  keyPartsAnnotationLayer.className =
    "key-parts-annotations hidden absolute inset-0 z-[11] pointer-events-none";

  keyPartsSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  keyPartsSvg.setAttribute("aria-hidden", "true");
  keyPartsSvg.classList.add("key-parts-lines");
  const labelLayer = document.createElement("div");
  labelLayer.className = "key-parts-labels";
  keyPartsAnnotationLayer.append(keyPartsSvg, labelLayer);
  container.appendChild(keyPartsAnnotationLayer);
}

function renderKeyPartAnnotations(data) {
  if (!keyPartsAnnotationLayer || !keyPartsSvg) return;
  const labelLayer = keyPartsAnnotationLayer.querySelector(".key-parts-labels");
  keyPartsSvg.replaceChildren();
  labelLayer.replaceChildren();
  keyPartAnnotations = [];
  if (!currentModelReady || !currentMeshGroup) return;

  (data.parts || []).forEach((part) => {
    const nodes = getNamedPartNodes(part.meshId);
    if (!nodes.length) return;

    const targetMeshes = new Set();
    nodes.forEach((node) => {
      if (node.isMesh) targetMeshes.add(node);
      node.traverse((child) => {
        if (child.isMesh) targetMeshes.add(child);
      });
    });

    const line = document.createElementNS("http://www.w3.org/2000/svg", "path");
    line.classList.add("key-part-line");
    const marker = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    marker.setAttribute("r", "3.5");
    marker.classList.add("key-part-marker");
    keyPartsSvg.append(line, marker);

    const label = document.createElement("span");
    label.className = "key-part-label";
    label.textContent = part.name;
    label.title = part.description || part.name;
    labelLayer.appendChild(label);
    keyPartAnnotations.push({ nodes, targetMeshes, line, marker, label });
  });
  updateKeyPartAnnotations();
}

function getVisiblePartAnchor(annotation) {
  if (!currentMeshGroup || !camera || !annotationRaycaster) return null;
  const meshes = [...annotation.targetMeshes];
  if (!meshes.length) return null;

  const sampleMeshes =
    meshes.length <= 12
      ? meshes
      : meshes.filter((_, index) => index % Math.ceil(meshes.length / 12) === 0);
  const candidates = [];
  sampleMeshes.forEach((mesh) => {
    const bounds = new THREE.Box3().setFromObject(mesh);
    if (bounds.isEmpty()) return;
    const center = bounds.getCenter(new THREE.Vector3());
    candidates.push(center);
    if (meshes.length <= 12) {
      const size = bounds.getSize(new THREE.Vector3());
      const axes = [
        ["x", size.x],
        ["y", size.y],
        ["z", size.z],
      ]
        .sort((a, b) => b[1] - a[1])
        .slice(0, 2);
      axes.forEach(([axis, extent]) => {
        const offset = extent * 0.34;
        [-offset, offset].forEach((amount) => {
          const point = center.clone();
          point[axis] += amount;
          candidates.push(point);
        });
      });
    }
  });

  let projectedFallback = null;
  for (const candidate of candidates) {
    const projected = candidate.clone().project(camera);
    if (
      projected.z < -1 ||
      projected.z > 1 ||
      Math.abs(projected.x) > 1 ||
      Math.abs(projected.y) > 1
    ) {
      continue;
    }
    if (!projectedFallback) projectedFallback = projected;

    annotationRaycaster.setFromCamera(
      new THREE.Vector2(projected.x, projected.y),
      camera,
    );
    const hits = annotationRaycaster.intersectObjects(
      currentMeshGroup.children,
      true,
    );
    const visibleHit = hits.find((hit) =>
      annotation.targetMeshes.has(hit.object),
    );
    const firstOpaqueHit = hits.find((hit) => {
      const materials = Array.isArray(hit.object.material)
        ? hit.object.material
        : [hit.object.material];
      return materials.some(
        (material) => material && (!material.transparent || material.opacity >= 0.98),
      );
    });
    if (
      visibleHit &&
      (!firstOpaqueHit ||
        firstOpaqueHit.distance >= visibleHit.distance - 0.001 ||
        annotation.targetMeshes.has(firstOpaqueHit.object))
    ) {
      return visibleHit.point.clone().project(camera);
    }
  }
  return projectedFallback;
}

function updateKeyPartAnnotations() {
  if (
    !keyPartsActive ||
    !keyPartsAnnotationLayer ||
    !currentMeshGroup ||
    !camera
  ) {
    return;
  }

  const bounds = keyPartsAnnotationLayer.getBoundingClientRect();
  if (!bounds.width || !bounds.height) return;
  keyPartsSvg.setAttribute("viewBox", `0 0 ${bounds.width} ${bounds.height}`);
  keyPartsSvg.setAttribute("width", String(bounds.width));
  keyPartsSvg.setAttribute("height", String(bounds.height));
  currentMeshGroup.updateWorldMatrix(true, true);
  camera.updateMatrixWorld();

  const visible = [];
  keyPartAnnotations.forEach((annotation) => {
    const anchor = getVisiblePartAnchor(annotation);
    if (!anchor) {
      annotation.label.style.display = "none";
      annotation.line.style.display = "none";
      annotation.marker.style.display = "none";
      return;
    }

    const x = ((anchor.x + 1) / 2) * bounds.width;
    const y = ((1 - anchor.y) / 2) * bounds.height;
    annotation.label.style.display = "block";
    annotation.label.style.left = x < bounds.width / 2 ? "6px" : "auto";
    annotation.label.style.right =
      x < bounds.width / 2 ? "auto" : "6px";
    visible.push({ ...annotation, anchor: { x, y }, side: x < bounds.width / 2 ? "left" : "right" });
  });

  ["left", "right"].forEach((side) => {
    const column = visible
      .filter((item) => item.side === side)
      .sort((a, b) => a.anchor.y - b.anchor.y);
    if (!column.length) return;
    const topLimit = Math.min(40, bounds.height * 0.12);
    const bottomLimit = Math.max(topLimit + 1, bounds.height - 54);
    const totalHeight = column.reduce(
      (total, item) => total + item.label.offsetHeight,
      0,
    );
    const gap = Math.max(
      2,
      Math.min(
        6,
        (bottomLimit - topLimit - totalHeight) /
          Math.max(1, column.length - 1),
      ),
    );
    const centers = [];

    column.forEach((item, index) => {
      const height = item.label.offsetHeight;
      const halfHeight = height / 2;
      const previous = column[index - 1];
      const previousCenter = centers[index - 1];
      const minimumCenter = index === 0
        ? topLimit + halfHeight
        : previousCenter +
          previous.label.offsetHeight / 2 +
          halfHeight +
          gap;
      centers.push(Math.max(item.anchor.y, minimumCenter));
    });

    const last = column.length - 1;
    const bottomOverflow =
      centers[last] + column[last].label.offsetHeight / 2 - bottomLimit;
    if (bottomOverflow > 0) {
      centers.forEach((center, index) => {
        centers[index] = center - bottomOverflow;
      });
    }
    const topOverflow =
      topLimit - (centers[0] - column[0].label.offsetHeight / 2);
    if (topOverflow > 0) {
      centers.forEach((center, index) => {
        centers[index] = center + topOverflow;
      });
    }
    column.forEach((item, index) => {
      item.label.style.top = `${centers[index]}px`;
    });
  });

  visible.forEach((item) => {
    const labelLeft =
      item.side === "left"
        ? 6
        : bounds.width - item.label.offsetWidth - 6;
    const labelCenterY = parseFloat(item.label.style.top);
    const startX =
      item.side === "left"
        ? labelLeft + item.label.offsetWidth
        : labelLeft;
    const bendX = startX + (item.anchor.x - startX) * 0.55;
    item.line.setAttribute(
      "d",
      `M ${startX} ${labelCenterY} L ${bendX} ${labelCenterY} L ${item.anchor.x} ${item.anchor.y}`,
    );
    item.line.style.display = "";
    item.marker.setAttribute("cx", String(item.anchor.x));
    item.marker.setAttribute("cy", String(item.anchor.y));
    item.marker.style.display = "";
  });
}

function setModelTechnicalView(active) {
  if (!currentMeshGroup) return;

  if (!active) {
    technicalViewOriginals.forEach(({ node, visible, material }) => {
      const currentMaterials = Array.isArray(node.material)
        ? node.material
        : [node.material];
      const originalMaterials = Array.isArray(material) ? material : [material];
      currentMaterials.forEach((currentMaterial) => {
        if (!originalMaterials.includes(currentMaterial)) currentMaterial.dispose();
      });
      node.visible = visible;
      node.material = material;
    });
    technicalViewOriginals = [];
    technicalViewTransformOriginals.forEach(({ node, position, rotation }) => {
      node.position.copy(position);
      node.rotation.copy(rotation);
    });
    technicalViewTransformOriginals = [];
    return;
  }

  if (technicalViewOriginals.length || !currentHardwareData) return;
  const settings = currentHardwareData.technicalView || {};
  const ghostIds = new Set(settings.ghostMeshIds || []);
  const hiddenIds = new Set(settings.hideMeshIds || []);
  if (!isExploded && !explosionTransition) {
    (settings.moveMeshIds || []).forEach(({ meshId, offset, rotation }) => {
      getNamedPartNodes(meshId).forEach((node) => {
        technicalViewTransformOriginals.push({
          node,
          position: node.position.clone(),
          rotation: node.rotation.clone(),
        });
        if (offset) {
          node.position.add(new THREE.Vector3(...offset));
        }
        if (rotation) {
          node.rotation.set(...rotation);
        }
      });
    });
  }
  const ghostMeshes = new Set();
  const hiddenMeshes = new Set();
  const collectMeshes = (ids, target) => {
    ids.forEach((meshId) => {
      getNamedPartNodes(meshId).forEach((node) => {
        if (node.isMesh) target.add(node);
        node.traverse((child) => {
          if (child.isMesh) target.add(child);
        });
      });
    });
  };
  collectMeshes(ghostIds, ghostMeshes);
  collectMeshes(hiddenIds, hiddenMeshes);

  const targets = new Set([...ghostMeshes, ...hiddenMeshes]);
  targets.forEach((node) => {
    const originalMaterial = node.material;
    technicalViewOriginals.push({
      node,
      visible: node.visible,
      material: originalMaterial,
    });
    if (hiddenMeshes.has(node)) {
      node.visible = false;
      return;
    }

    const ghostMaterial = (material) => {
      const clone = material.clone();
      clone.transparent = true;
      clone.opacity = Math.min(clone.opacity, 0.18);
      clone.depthWrite = false;
      clone.needsUpdate = true;
      return clone;
    };
    node.material = Array.isArray(originalMaterial)
      ? originalMaterial.map(ghostMaterial)
      : ghostMaterial(originalMaterial);
  });
}

function setKeyPartsActive(active) {
  if (active && !keyPartsActive) {
    keyPartsPreviousAutoRotate = autoRotate;
    if (controls) controls.autoRotate = false;
    if (currentModelReady) setModelTechnicalView(true);
  } else if (!active && keyPartsActive) {
    setModelTechnicalView(false);
    if (keyPartsPreviousAutoRotate !== null) {
      autoRotate = keyPartsPreviousAutoRotate;
      if (controls) controls.autoRotate = autoRotate;
    }
    keyPartsPreviousAutoRotate = null;
  }

  keyPartsActive = active;
  const button = document.getElementById("keyPartsToggle");
  if (button) {
    button.setAttribute("aria-pressed", String(active));
    button.classList.toggle("bg-violet-500/30", active);
    button.classList.toggle("border-violet-300", active);
  }
  keyPartsAnnotationLayer?.classList.toggle(
    "hidden",
    !active || !currentModelReady,
  );
  if (active && currentHardwareData) {
    if (currentModelReady) {
      setModelTechnicalView(true);
      renderKeyPartAnnotations(currentHardwareData);
    }
  } else {
    keyPartAnnotations = [];
  }
}

function toggleKeyParts() {
  setKeyPartsActive(!keyPartsActive);
}

function resetExplodedParts() {
  explosionTransition = null;
  explodedParts.forEach(({ node, position, quaternion, scale }) => {
    node.position.copy(position);
    node.quaternion.copy(quaternion);
    node.scale.copy(scale);
  });
  explodedParts = [];
  isExploded = false;
  updateExplodedButton();
  updateKeyPartAnnotations();
}

const EXPLOSION_ANCHORS_BY_ID = {
  "audio-card": "circuit-board",
  cpu: "substrate",
  gpu: "circuit-board",
  keyboard: "keyboard-base",
  microphone: "mic-body",
  monitor: "monitor-bezel",
  mouse: "mouse-shell",
  printer: "printer-housing",
  projector: "projector-housing",
  scanner: "scanner-housing",
  speakers: "speaker-cabinet",
  webcam: "webcam-body",
  "graphics-card": "circuit-board",
  motherboard: "circuit-board",
  "memory-module": "circuit-board",
  ram: "circuit-board",
  "nvme-ssd": "circuit-board",
  "cooling-fan": "frame",
  "heat-sink": "base",
};

const EXPLOSION_ANCHORS_BY_PROFILE = {
  chip: "package",
  board: "circuit-board",
  card: "circuit-board",
  motherboard: "circuit-board",
  memory: "circuit-board",
  nvme: "circuit-board",
  fan: "frame",
  case: "panels",
  hdd: "platters",
  optical: "enclosure",
  power: "enclosure",
  heatsink: "base",
  mouse: "mouse-shell",
  printer: "enclosure",
  inkjetPrinter: "enclosure",
  laserPrinter: "enclosure",
  scanner: "enclosure",
  display: "panel",
  camera: "enclosure",
  network: "enclosure",
  controller: "enclosure",
  audio: "enclosure",
  ups: "enclosure",
  switch: "enclosure",
  socket: "housing",
  port: "housing",
  usb: "housing",
  battery: "cell",
  thermal: "applicator",
  storageCard: "enclosure",
};

const EXPLOSION_DURATION_MS = 760;

function updateExplodedButton() {
  const button = document.getElementById("explodedViewToggle");
  if (!button) return;
  button.innerHTML = isExploded
    ? '<i class="fa-solid fa-arrows-to-circle"></i><span class="hidden sm:inline text-xs font-medium">Reassemble</span>'
    : '<i class="fa-solid fa-up-down-left-right"></i><span class="hidden sm:inline text-xs font-medium">Explode</span>';
  button.setAttribute("aria-pressed", String(isExploded));
}

function getExplodablePartGroups() {
  if (!currentMeshGroup || !currentHardwareData) return [];

  const declaredParts = (currentHardwareData.parts || []).filter(
    (part) => part.meshId,
  );
  const declaredNodes = new Set(
    declaredParts.flatMap((part) => getNamedPartNodes(part.meshId)),
  );
  return declaredParts
    .map((part) => {
      const nodes = getNamedPartNodes(part.meshId).filter((node) => {
        let parent = node.parent;
        while (parent && parent !== currentMeshGroup) {
          if (declaredNodes.has(parent)) return false;
          parent = parent.parent;
        }
        return true;
      });
      return { meshId: part.meshId, nodes };
    })
    .filter((part) => part.nodes.length);
}

function createExplodedPartTransforms() {
  const groups = getExplodablePartGroups();
  if (!groups.length || !currentMeshGroup) return [];

  currentMeshGroup.updateWorldMatrix(true, true);
  const modelBounds = new THREE.Box3().setFromObject(currentMeshGroup);
  const modelSize = modelBounds.getSize(new THREE.Vector3());
  const modelExtent = Math.max(modelSize.x, modelSize.y, modelSize.z);
  const modelCenter = currentMeshGroup.worldToLocal(
    modelBounds.getCenter(new THREE.Vector3()),
  );
  const anchorMeshId =
    EXPLOSION_ANCHORS_BY_ID[currentHardwareData.id] ||
    EXPLOSION_ANCHORS_BY_PROFILE[currentHardwareData.modelProfile] ||
    groups
      .map((part) => {
        const bounds = new THREE.Box3();
        part.nodes.forEach((node) => bounds.expandByObject(node));
        const size = bounds.getSize(new THREE.Vector3());
        return { meshId: part.meshId, volume: size.x * size.y * size.z };
      })
      .sort((a, b) => b.volume - a.volume)[0]?.meshId;
  const profileKey = currentHardwareData.modelProfile || currentHardwareData.id;
  const profileHash = [...profileKey].reduce(
    (value, character) => value + character.charCodeAt(0),
    0,
  );
  const displacement = Math.max(0.12, Math.min(0.42, modelExtent * 0.13));
  const transforms = [];

  groups.forEach((part) => {
    const bounds = new THREE.Box3();
    part.nodes.forEach((node) => bounds.expandByObject(node));
    const partCenter = currentMeshGroup.worldToLocal(
      bounds.getCenter(new THREE.Vector3()),
    );
    const direction = partCenter.sub(modelCenter);
    if (direction.lengthSq() < modelExtent * modelExtent * 0.0004) {
      const partHash = [...part.meshId].reduce(
        (value, character) => value + character.charCodeAt(0),
        profileHash,
      );
      const angle = partHash * 2.399963229728653;
      direction.set(
        Math.cos(angle),
        ((partHash % 3) - 1) * 0.28,
        Math.sin(angle),
      );
    }
    direction.normalize();
    const worldDirection = direction
      .clone()
      .transformDirection(currentMeshGroup.matrixWorld);
    const isAnchor = part.meshId === anchorMeshId;

    part.nodes.forEach((node) => {
      const position = node.position.clone();
      const quaternion = node.quaternion.clone();
      const scale = node.scale.clone();
      let explodedPosition = position.clone();
      if (!isAnchor && node.parent) {
        const worldPosition = node.getWorldPosition(new THREE.Vector3());
        const localStart = node.parent.worldToLocal(worldPosition.clone());
        const localEnd = node.parent.worldToLocal(
          worldPosition.clone().addScaledVector(worldDirection, displacement),
        );
        explodedPosition.add(localEnd.sub(localStart));
      }
      transforms.push({
        node,
        position,
        quaternion,
        scale,
        explodedPosition,
      });
    });
  });
  return transforms;
}

function toggleExplodedView() {
  if (!currentModelReady || !currentMeshGroup || !currentHardwareData) return;

  const targetExploded = !isExploded;
  if (targetExploded && keyPartsActive) {
    setModelTechnicalView(false);
  }

  if (!explodedParts.length) {
    explodedParts = createExplodedPartTransforms();
  }
  if (!explodedParts.length) return;

  isExploded = targetExploded;
  explosionTransition = {
    startedAt: performance.now(),
    targetExploded,
    parts: explodedParts.map((part) => ({
      ...part,
      fromPosition: part.node.position.clone(),
      fromQuaternion: part.node.quaternion.clone(),
      fromScale: part.node.scale.clone(),
      toPosition: targetExploded
        ? part.explodedPosition.clone()
        : part.position.clone(),
      toQuaternion: part.quaternion.clone(),
      toScale: part.scale.clone(),
    })),
  };
  if (targetExploded && keyPartsActive) {
    setModelTechnicalView(true);
  }
  updateExplodedButton();
  updateKeyPartAnnotations();
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
  home.classList.add("hidden");

  const query = searchQuery.trim().toLowerCase();
  const filtered = HARDWARE_DATA.filter((item) => {
    const matchesCat =
      currentCategory === "All" || item.categories.includes(currentCategory);
    const matchesLetter =
      currentLetter === "All" ||
      item.name.toUpperCase().startsWith(currentLetter);
    const matchesSearch = item.name.toLowerCase().includes(query);
    return matchesCat && matchesLetter && matchesSearch;
  });

  if (filtered.length === 0) {
    noResults.classList.remove("hidden");
    if (searchQuery.length > 0) {
      noResultsTitle.innerText = "No components found.";
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
      card.setAttribute("role", "button");
      card.tabIndex = 0;
      card.setAttribute("aria-label", `Inspect ${item.name}`);
      card.onclick = () => openModal(item.id);
      card.onkeydown = (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openModal(item.id);
        }
      };

      card.innerHTML = `
                  <!-- Card Header Badge & Icon -->
                  <div>
                      <div class="flex items-center justify-between mb-4">
                          <span class="text-[11px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-lg bg-cyanGlow/10 text-cyanLight border border-cyanGlow/30">
                              ${item.categories.join(" · ")}
                          </span>
                          <div class="w-10 h-10 rounded-xl bg-navyBg border border-slate-700/80 flex items-center justify-center text-cyanGlow group-hover:scale-110 group-hover:border-cyanGlow transition-all">
                              <i class="fa-solid ${item.icon} text-lg"></i>
                          </div>
                      </div>

                      <!-- Hardware Title -->
                      <h3 class="text-lg font-bold text-white group-hover:text-cyanLight transition-colors mb-2">
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
                      <button type="button" class="px-3 py-1.5 rounded-lg bg-cyanDark/15 text-cyanLight border border-cyanGlow/30 text-xs font-semibold group-hover:bg-cyanDark group-hover:text-white transition-all flex items-center gap-1.5">
                          <span>Inspect</span>
                          <i class="fa-solid fa-arrow-right text-[10px]"></i>
                      </button>
                  </div>
              `;
      grid.appendChild(card);
    });
  }
}

function renderCategoryFilters() {
  const container = document.getElementById("categoryFilter");
  const categories = ["All", ...HARDWARE_CATEGORIES];
  container.innerHTML = "";
  categories.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.category = category;
    button.className = "filter-btn whitespace-nowrap rounded-xl border px-4 py-2 transition-all";
    button.innerText =
      category === "All"
        ? `All Components (${HARDWARE_DATA.length})`
        : category;
    button.addEventListener("click", () => filterCategory(category));
    container.appendChild(button);
  });
  updateCategoryFilterStates();
}

function updateCategoryFilterStates() {
  document.querySelectorAll(".filter-btn").forEach((button) => {
    const selected = button.dataset.category === currentCategory;
    button.className = selected
      ? "filter-btn active-filter whitespace-nowrap rounded-xl border border-cyanGlow bg-cyanDark px-4 py-2 font-bold text-white transition-all"
      : "filter-btn whitespace-nowrap rounded-xl border border-slate-800 bg-cardBg px-4 py-2 text-slate-300 hover:border-cyanGlow/50 transition-all";
    button.setAttribute("aria-pressed", String(selected));
  });
}

/**
 * Category Filter handling
 */
function filterCategory(cat) {
  currentCategory = cat;
  updateCategoryFilterStates();
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
let currentModelBaseRotation = new THREE.Euler();
let currentModelReady = false;
let autoRotate = true;
let isWireframe = false;
let animationFrameId = null;
let currentHardwareId = null;
let animatedElements = [];
let currentHardwareData = null;
let explodedParts = [];
let isExploded = false;
let explosionTransition = null;
let keyPartsActive = false;
let keyPartsPreviousAutoRotate = null;
let technicalViewOriginals = [];
let technicalViewTransformOriginals = [];
let keyPartsAnnotationLayer = null;
let keyPartsSvg = null;
let keyPartAnnotations = [];
let annotationRaycaster = null;

// Lighting System References
let ambientLight, hemisphereLight, dirLight, rimLight, fillLight;
let shadowPlane, themeTransitionFrame = null;

function initThreeJS() {
  const container = document.getElementById("webgl-container");
  container.innerHTML = "";

  // 1. Create Scene & Camera
  scene = new THREE.Scene();
  scene.background = null;

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
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  container.appendChild(renderer.domElement);
  annotationRaycaster = new THREE.Raycaster();
  createKeyPartsOverlay();

  // 3. Orbit Controls
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.autoRotate = keyPartsActive ? false : autoRotate;
  controls.autoRotateSpeed = 2.0;
  controls.minDistance = 1;
  controls.maxDistance = 15;
  controls.addEventListener("change", updateKeyPartAnnotations);

  // 4. Studio lighting setup
  ambientLight = new THREE.AmbientLight(0xffffff, 0.65);
  scene.add(ambientLight);

  hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x303030, 0.55);
  scene.add(hemisphereLight);

  dirLight = new THREE.DirectionalLight(0xffffff, 1.8);
  dirLight.position.set(5, 8, 5);
  dirLight.castShadow = true;
  const shadowMapSize = container.clientWidth < 800 ? 1024 : 2048;
  dirLight.shadow.mapSize.width = shadowMapSize;
  dirLight.shadow.mapSize.height = shadowMapSize;
  dirLight.shadow.camera.left = -10;
  dirLight.shadow.camera.right = 10;
  dirLight.shadow.camera.top = 10;
  dirLight.shadow.camera.bottom = -10;
  dirLight.shadow.camera.far = 30;
  dirLight.shadow.bias = -0.0002;
  dirLight.shadow.normalBias = 0.025;
  dirLight.shadow.radius = 4;
  scene.add(dirLight);

  rimLight = new THREE.PointLight(0xffffff, 2, 12);
  rimLight.position.set(-4, 3, -3);
  scene.add(rimLight);

  fillLight = new THREE.PointLight(0xf7f5f0, 1, 10);
  fillLight.position.set(3, -2, 3);
  scene.add(fillLight);

  shadowPlane = new THREE.Mesh(
    new THREE.PlaneGeometry(20, 20),
    new THREE.ShadowMaterial({ color: 0x060a12, opacity: 0.22 }),
  );
  shadowPlane.rotation.x = -Math.PI / 2;
  shadowPlane.receiveShadow = true;
  scene.add(shadowPlane);

  update3DStudioTheme(isModelDarkMode);

  window.addEventListener("resize", onWindowResize);
}

/**
 * Update ONLY the 3D Studio Canvas Colors & Lights
 */
function update3DStudioTheme(darkMode, animate = false) {
  if (!scene) return;

  if (themeTransitionFrame) {
    cancelAnimationFrame(themeTransitionFrame);
    themeTransitionFrame = null;
  }

  const target = darkMode
    ? {
        glow: new THREE.Color(0x23334c),
        edge: new THREE.Color(0x080d17),
        ambient: 0.65,
        hemisphere: 0.55,
        directional: 1.8,
        rim: 2,
        fill: 1,
        shadow: 0.22,
      }
    : {
        glow: new THREE.Color(0xffffff),
        edge: new THREE.Color(0xd7e0eb),
        ambient: 0.85,
        hemisphere: 0.8,
        directional: 1.8,
        rim: 0.55,
        fill: 0.65,
        shadow: 0.12,
      };

  const container = document.getElementById("webgl-container");
  const readStudioColor = (property, fallback) => {
    const value = getComputedStyle(container).getPropertyValue(property).trim();
    return value ? new THREE.Color(value) : fallback.clone();
  };
  const from = {
    glow: readStudioColor("--studio-glow", target.glow),
    edge: readStudioColor("--studio-edge", target.edge),
    ambient: ambientLight ? ambientLight.intensity : target.ambient,
    hemisphere: hemisphereLight
      ? hemisphereLight.intensity
      : target.hemisphere,
    directional: dirLight ? dirLight.intensity : target.directional,
    rim: rimLight ? rimLight.intensity : target.rim,
    fill: fillLight ? fillLight.intensity : target.fill,
    shadow: shadowPlane ? shadowPlane.material.opacity : target.shadow,
  };
  const apply = (progress) => {
    container.style.setProperty(
      "--studio-glow",
      from.glow.clone().lerp(target.glow, progress).getStyle(),
    );
    container.style.setProperty(
      "--studio-edge",
      from.edge.clone().lerp(target.edge, progress).getStyle(),
    );
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
    if (rimLight) {
      rimLight.intensity = from.rim + (target.rim - from.rim) * progress;
    }
    if (fillLight) {
      fillLight.intensity = from.fill + (target.fill - from.fill) * progress;
    }
    if (shadowPlane) {
      shadowPlane.material.opacity =
        from.shadow + (target.shadow - from.shadow) * progress;
    }
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
  updateKeyPartAnnotations();
}

function startAnimationLoop() {
  if (animationFrameId) cancelAnimationFrame(animationFrameId);

  function animate() {
    animationFrameId = requestAnimationFrame(animate);
    updateExplosionTransition(performance.now());
    if (controls) controls.update();
    if (!keyPartsActive) animatedElements.forEach((anim) => anim());
    if (renderer && scene && camera) {
      renderer.render(scene, camera);
    }
  }
  animate();
}

function updateExplosionTransition(now) {
  if (!explosionTransition) return;

  const transition = explosionTransition;
  const progress = Math.min(
    (now - transition.startedAt) / EXPLOSION_DURATION_MS,
    1,
  );
  const eased = progress * progress * (3 - 2 * progress);
  transition.parts.forEach((part) => {
    part.node.position.lerpVectors(part.fromPosition, part.toPosition, eased);
    part.node.quaternion.slerpQuaternions(
      part.fromQuaternion,
      part.toQuaternion,
      eased,
    );
    part.node.scale.lerpVectors(part.fromScale, part.toScale, eased);
  });
  updateKeyPartAnnotations();

  if (progress < 1) return;
  explosionTransition = null;
  if (!isExploded && keyPartsActive) {
    setModelTechnicalView(false);
    setModelTechnicalView(true);
  }
  updateKeyPartAnnotations();
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
        callback(createItemModel(item));
      },
    );
  } else {
    callback(createItemModel(item));
  }
}

/**
 * Open Modal Studio
 */
function openModal(id) {
  const data = HARDWARE_DATA.find((item) => item.id === id);
  if (!data) return;

  currentHardwareId = id;
  currentHardwareData = data;
  currentModelReady = false;
  setKeyPartsActive(false);
  resetExplodedParts();

  document.getElementById("modalTitle").innerHTML =
    `<i class="fa-solid ${data.icon} text-cyanGlow mr-2"></i>${data.name}`;
  document.getElementById("modalCategoryBadge").innerText =
    data.categories.join(" · ");
  document.getElementById("modalDefinition").innerText = data.definition;
  document.getElementById("modalHowWorks").innerText = data.howWorks;
  document.getElementById("modalExamples").innerText = data.examples;
  const modelDisclaimer = document.getElementById("modelDisclaimer");
  modelDisclaimer.replaceChildren();
  const modelDisclaimerText = document.createElement("span");
  modelDisclaimerText.textContent =
    data.modelDisclaimer ||
    "Simplified procedural study model; proportions and internal details vary by product.";
  modelDisclaimer.appendChild(modelDisclaimerText);

  const categories = document.getElementById("modalCategories");
  categories.innerHTML = "";
  data.categories.forEach((category) => {
    const badge = document.createElement("span");
    badge.className =
      "rounded-md border border-violet-400/30 bg-violet-500/10 px-2 py-1 text-[11px] font-medium text-violet-200";
    badge.textContent = category;
    categories.appendChild(badge);
  });

  const funcList = document.getElementById("modalFunctions");
  funcList.innerHTML = "";
  data.functions.forEach((fn) => {
    const li = document.createElement("li");
    li.innerText = fn;
    funcList.appendChild(li);
  });

  const featGrid = document.getElementById("modalFeatures");
  featGrid.innerHTML = "";
  (data.parts || []).forEach((part) => {
    const badge = document.createElement("div");
    badge.className =
      "bg-navyBg p-2 rounded-lg border border-slate-800 text-slate-300 font-mono text-[11px] flex items-center gap-1.5";
    const icon = document.createElement("i");
    icon.className = "fa-solid fa-check text-cyanGlow";
    const text = document.createElement("span");
    text.textContent = part.name;
    badge.title = part.description || part.name;
    badge.append(icon, text);
    featGrid.appendChild(badge);
  });

  const explodedButton = document.getElementById("explodedViewToggle");
  const explodedDivider = document.getElementById("explodedViewDivider");
  const supportsExplodedView = (data.parts || []).some((part) => part.meshId);
  explodedButton.classList.toggle("hidden", !supportsExplodedView);
  explodedDivider.classList.toggle("hidden", !supportsExplodedView);

  const modal = document.getElementById("viewerModal");
  const loader = document.getElementById("canvasLoader");
  modal.classList.remove("hidden");
  loader.classList.remove("opacity-0", "pointer-events-none");
  document.body.style.overflow = "hidden";

  setTimeout(() => {
    if (!renderer) {
      initThreeJS();
    }

    function renderExamplePicture(data) {
      const container = document.getElementById("examplePicture");
      container.replaceChildren();

      const reference = data.visualReference;
      let imageUrl = null;

      if (reference?.images?.length) {
        imageUrl = reference.images[0].url;
      } else if (reference?.url) {
        const searchTerm = encodeURIComponent(`${data.name} computer hardware`);
        imageUrl = `https://www.google.com/search?q=${searchTerm}&tbm=isch`;
      }

      if (!imageUrl) {
        const unavailable = document.createElement("p");
        unavailable.className = "text-xs leading-relaxed text-slate-400";
        unavailable.textContent = "Example picture unavailable for this component.";
        container.appendChild(unavailable);
        return;
      }

      const link = document.createElement("a");
      link.href = imageUrl;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.className =
        "inline-flex items-center gap-1.5 w-full px-4 py-2.5 rounded-lg border border-cyanGlow/40 bg-cyanGlow/10 text-cyanLight font-semibold hover:bg-cyanGlow/20 hover:text-cyanGlow transition-all";
      link.textContent = "View Example Picture";
      const externalIcon = document.createElement("i");
      externalIcon.className = "fa-solid fa-arrow-up-right-from-square";
      link.appendChild(externalIcon);
      container.appendChild(link);
    }

    renderExamplePicture(data);

    // Cleanup previous group
    if (currentMeshGroup) {
      disposeGroup(currentMeshGroup);
    }

    // Load selected hardware model
    loadHardwareModel(data, (loadedModel) => {
      if (
        currentHardwareId !== id ||
        document.getElementById("viewerModal").classList.contains("hidden")
      ) {
        disposeGroup(loadedModel);
        return;
      }
      currentMeshGroup = loadedModel;
      currentModelReady = true;
      const hasExplodableParts = getExplodablePartGroups().length > 0;
      document
        .getElementById("explodedViewToggle")
        .classList.toggle("hidden", !hasExplodableParts);
      document
        .getElementById("explodedViewDivider")
        .classList.toggle("hidden", !hasExplodableParts);
      currentModelBaseRotation.copy(currentMeshGroup.rotation);
      currentMeshGroup.traverse((node) => {
        if (node.isMesh) {
          node.castShadow = true;
          node.receiveShadow = true;
        }
      });
      scene.add(currentMeshGroup);
      if (keyPartsActive) {
        setModelTechnicalView(true);
        setKeyPartsActive(true);
      }

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
  currentModelReady = false;
  setKeyPartsActive(false);
  resetExplodedParts();
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
  }
}

function toggleAutoRotate() {
  autoRotate = !autoRotate;
  if (keyPartsActive) keyPartsPreviousAutoRotate = autoRotate;
  if (controls) controls.autoRotate = keyPartsActive ? false : autoRotate;
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
    updateKeyPartAnnotations();
  }
}

function zoom3D(delta) {
  if (camera) {
    const newFov = camera.fov + delta * 10;
    if (newFov >= 15 && newFov <= 75) {
      camera.fov = newFov;
      camera.updateProjectionMatrix();
      updateKeyPartAnnotations();
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
    currentMeshGroup.rotation.copy(currentModelBaseRotation);
    fitModelToCamera(currentMeshGroup);
    updateKeyPartAnnotations();
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

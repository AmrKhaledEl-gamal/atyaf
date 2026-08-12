/**
 * Atyaf Ice Cream — Menu Interactive Script
 * 2-Color Pill Scheme (Yellow + Purple) Across All Table Columns
 */

// SVG Icon Definitions
const SVG_ICONS = {
  flavors: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z"/><path d="M10 21h4"/></svg>`,
  booza: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m7 11 5 11 5-11"/><path d="M17 11a5 5 0 0 0-10 0"/></svg>`,
  diet: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 20A9 9 0 0 1 2 11 9 9 0 0 1 11 2c4.97 0 9 4.03 9 9a9 9 0 0 1-9 9z"/><path d="M11 2v18"/></svg>`,
  boxes: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="8" width="18" height="13" rx="2"/><path d="M12 8v13"/><path d="M3 12h18"/><path d="M8 8V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3"/></svg>`,
  milkshake: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 8h12l-1 12H7L6 8z"/><path d="M9 3h6v5H9z"/><path d="M15 3l4-2"/></svg>`,
  supplies: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a4 4 0 0 0-4 4v5a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4z"/><path d="M12 15v7"/></svg>`,
  branches: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s-8-7.5-8-12a8 8 0 1 1 16 0c0 4.5-8 12-8 12z"/><circle cx="12" cy="9" r="3"/></svg>`,
};

const MENU_DATA = {
  categories: [
    {
      id: "flavors-table",
      title: "نكهات آيس كريم (بالعلب)",
      iconSvg: SVG_ICONS.flavors,
      active: true,
    },
    { id: "arabic-booza", title: "بوظة عربية", iconSvg: SVG_ICONS.booza },
    { id: "atyaf-diet", title: "دايت أطياف", iconSvg: SVG_ICONS.diet },
    { id: "mixed-boxes", title: "آيس كريم مشكل", iconSvg: SVG_ICONS.boxes },
    { id: "milkshakes", title: "ميلك شيك", iconSvg: SVG_ICONS.milkshake },
    {
      id: "supplies",
      title: "السكوب والمستلزمات",
      iconSvg: SVG_ICONS.supplies,
    },
    {
      id: "branches-contact",
      title: "فروعنا وتواصل معنا",
      iconSvg: SVG_ICONS.branches,
    },
  ],

  // Flavors Right Column (19 flavors: عربية -> كروكان)
  rightFlavors: [
    {
      name: "عربية",
      p1L: "JD 5",
      p4L: "JD 12",
    },
    {
      name: "سنكرز",
      p1L: "JD 5",
      p4L: "JD 12",
    },
    {
      name: "تشيز كيك",
      p1L: "JD 5",
      p4L: "JD 12",
    },
    {
      name: "شوكولاتة سادة",
      p1L: "JD 5",
      p4L: "JD 12",
    },
    {
      name: "كيوي",
      p1L: "JD 5",
      p4L: "JD 12",
    },
    {
      name: "مانجا",
      p1L: "JD 5",
      p4L: "JD 12",
    },
    {
      name: "فراولة",
      p1L: "JD 5",
      p4L: "JD 12",
    },
    {
      name: "ليمون",
      p1L: "JD 5",
      p4L: "JD 12",
    },
    {
      name: "بلاك بيري",
      p1L: "JD 5",
      p4L: "JD 12",
    },
    {
      name: "شمام",
      p1L: "JD 5",
      p4L: "JD 12",
    },
    {
      name: "باونتي",
      p1L: "JD 6",
      p4L: "JD 12",
    },
    {
      name: "علكة ( بابل جم )",
      p1L: "JD 6",
      p4L: "JD 14",
    },
    {
      name: "توتي فروتي",
      p1L: "JD 6",
      p4L: "JD 14",
    },
    {
      name: "كت كات",
      p1L: "JD 6",
      p4L: "JD 14",
    },
    {
      name: "اوريو",
      p1L: "JD 6",
      p4L: "JD 14",
    },
    {
      name: "فانيلا فرنسية",
      p1L: "JD 6",
      p4L: "JD 14",
    },
    {
      name: "جلاكسي",
      p1L: "JD 6",
      p4L: "JD 14",
    },
    {
      name: "شوكولاتة دبل",
      p1L: "JD 6",
      p4L: "JD 14",
    },
    {
      name: "كروكان",
      p1L: "JD 6",
      p4L: "JD 14",
    },
  ],

  // Flavors Left Column (18 flavors: كوتن كاندي -> بستاشيو)
  leftFlavors: [
    {
      name: "كوتن كاندي",
      p1L: "JD 6",
      p4L: "JD 14",
    },
    {
      name: "أناناس",
      p1L: "JD 6",
      p4L: "JD 14",
    },
    {
      name: "مالتيزرز",
      p1L: "JD 6",
      p4L: "JD 16",
    },
    {
      name: "كندر",
      p1L: "JD 6",
      p4L: "JD 16",
    },
    {
      name: "ريد فلفت",
      p1L: "JD 6",
      p4L: "JD 16",
    },
    {
      name: "فريروروشيه",
      p1L: "JD 7",
      p4L: "JD 18",
    },
    {
      name: "شوكولاتة دارك",
      p1L: "JD 7",
      p4L: "JD 18",
    },
    {
      name: "موكا",
      p1L: "JD 7",
      p4L: "JD 18",
    },
    {
      name: "باشن فروت",
      p1L: "JD 7",
      p4L: "JD 18",
    },
    {
      name: "كوكيز",
      p1L: "JD 7",
      p4L: "JD 18",
    },
    {
      name: "لبن yogurt",
      p1L: "JD 7",
      p4L: "JD 18",
    },
    {
      name: "لوتس",
      p1L: "JD 7",
      p4L: "JD 18",
    },
    {
      name: "فانيلا دايت",
      p1L: "JD 7",
      p4L: "JD 18",
      badge: "دايت",
    },
    {
      name: "نوتيلا",
      p1L: "JD 7",
      p4L: "JD 18",
    },
    {
      name: "شوكولاتة دايت",
      p1L: "JD 7",
      p4L: "JD 18",
      badge: "دايت",
    },
    {
      name: "عربية دايت",
      p1L: "JD 7",
      p4L: "JD 18",
      badge: "دايت",
    },
    {
      name: "كاراميل مالح",
      p1L: "JD 7",
      p4L: "JD 18",
    },
    {
      name: "تشيري مانيا",
      p1L: "JD 7",
      p4L: "JD 18",
    },
    {
      name: "بستاشيو",
      p1L: "JD 9",
      p4L: "JD 25",
      badge: "الأكثر طلباً",
    },
  ],

  // Arabic Booza Section Data
  arabicBooza: [
    {
      name: "سكوب بوظة عربية",
      price: "JD 1",
    },
    {
      name: "سكوبين بوظة عربية",
      price: "JD 1.5",
    },
    {
      name: "رول عربية (1/2 كيلو)",
      price: "JD 6",
    },
    {
      name: "4 لتر عربية",
      price: "JD 12",
    },
    {
      name: "لتر عربي دايت",
      price: "JD 7",
      badge: "دايت",
    },
    {
      name: "4 لتر دايت",
      price: "JD 18",
      badge: "دايت",
    },
  ],

  // Diet Section Data
  atyafDiet: [
    {
      name: "فانيلا دايت",
      p1L: "JD 7",
      p4L: "JD 18",
      badge: "دايت",
    },
    {
      name: "شوكولاتة دايت",
      p1L: "JD 7",
      p4L: "JD 18",
      badge: "دايت",
    },
    {
      name: "عربية دايت",
      p1L: "JD 7",
      p4L: "JD 18",
      badge: "دايت",
    },
  ],

  // Mixed Boxes Section Data
  mixedBoxes: [
    {
      name: "علبة مكس 6 سكوب",
      price: "JD 4",
    },
    {
      name: "علبة مكس 12 سكوب",
      price: "JD 8",
    },
  ],

  // Milkshakes Section Data
  milkshakes: [
    {
      name: "ميلك شيك جميع النكهات",
      price: "JD 2",
    },
  ],

  // Supplies & Other Sections
  supplies: [
    {
      name: "بسكوت وافل (عدد 10)",
      price: "JD 1.5",
    },
    {
      name: "بسكوت سوفت (135 حبة)",
      price: "JD 2",
    },
    {
      name: "كاسات ورق 1 سكوب (50 حبة)",
      price: "JD 1.25",
    },
    {
      name: "كاسات ورق 2 سكوب (50 حبة)",
      price: "JD 2",
    },
    {
      name: "معالق بلاستيكية (50 حبة)",
      price: "JD 0.5",
    },
  ],

  // Branches
  branches: [
    { name: "خلدا", detail: "بجانب فندق سدين" },
    { name: "طبربور", detail: "بجانب أسواق جبر" },
    {
      name: "مرج الحمام",
      detail: "بالقرب من دوار البرديني مقابل مخابز الجويدي",
    },
    { name: "اربد", detail: "الحي الشرقي - بعد مخابز السنبلة" },
    { name: "الجويدة", detail: "بجانب محامص الشعب" },
    { name: "المصنع", detail: "حي الباير - مقابل الضمان الاجتماعي جنوب عمان" },
  ],
};

// DOM Initialization
document.addEventListener("DOMContentLoaded", () => {
  initNavTabs();
  renderFlavorTables();
  renderOtherSections();
  initSearchFilter();
});

/**
 * Initialize Sticky Navigation Tabs
 */
function initNavTabs() {
  const navContainer = document.getElementById("main-nav-tabs");
  if (!navContainer) return;

  navContainer.innerHTML = MENU_DATA.categories
    .map(
      (cat, idx) => `
        <button type="button" class="nav-tab-btn ${idx === 0 ? "active" : ""}" data-target="${cat.id}">
            <span class="tab-icon-svg-wrap">${cat.iconSvg}</span>
            <span class="tab-text">${cat.title}</span>
        </button>
    `,
    )
    .join("");

  navContainer.addEventListener("click", (e) => {
    const btn = e.target.closest(".nav-tab-btn");
    if (btn) {
      const targetId = btn.getAttribute("data-target");
      document
        .querySelectorAll(".nav-tab-btn")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      scrollToSection(targetId);
    }
  });
}

/**
 * Render Main Flavor Tables with 2-Color Pills Scheme (Yellow 4L + Blue/Purple 1L)
 */
function renderFlavorTables() {
  const rightCol = document.getElementById("right-flavors-body");
  const leftCol = document.getElementById("left-flavors-body");

  if (rightCol) {
    rightCol.innerHTML = MENU_DATA.rightFlavors
      .map((f) => createFlavorRowHTML(f))
      .join("");
  }

  if (leftCol) {
    leftCol.innerHTML = MENU_DATA.leftFlavors
      .map((f) => createFlavorRowHTML(f))
      .join("");
  }
}

/**
 * Create Row HTML (4L: Yellow Pill, 1L: Purple Pill)
 */
function createFlavorRowHTML(item) {
  return `
        <div class="flavor-table-row" data-name="${item.name}">
            <div class="prices-group">
                <span class="price-pill pill-yellow">${item.p4L}</span>
                <span class="price-pill pill-blue">${item.p1L}</span>
            </div>
            <div class="dotted-leader"></div>
            <div class="flavor-label-wrap">
                <span class="flavor-name-text">${item.name}</span>
            </div>
        </div>
    `;
}

/**
 * Render Arabic Booza, Diet, Mixed Boxes, Milkshakes, Supplies, Branches
 */
function renderOtherSections() {
  // Booza
  const boozaContainer = document.getElementById("booza-items-grid");
  if (boozaContainer) {
    boozaContainer.innerHTML = MENU_DATA.arabicBooza
      .map(
        (item) => `
            <div class="simple-item-card" data-name="${item.name}">
                <div class="price-pill pill-blue">${item.price}</div>
                <div class="dotted-leader"></div>
                <div class="flavor-label-wrap">
                    <span class="flavor-name-text">${item.name}</span>
                </div>
            </div>
        `,
      )
      .join("");
  }

  // Diet
  const dietContainer = document.getElementById("diet-items-grid");
  if (dietContainer) {
    dietContainer.innerHTML = MENU_DATA.atyafDiet
      .map(
        (item) => `
            <div class="simple-item-card" data-name="${item.name}">
                <div class="prices-group">
                    <span class="price-pill pill-yellow">${item.p4L}</span>
                    <span class="price-pill pill-blue">${item.p1L}</span>
                </div>
                <div class="dotted-leader"></div>
                <div class="flavor-label-wrap">
                    <span class="flavor-name-text">${item.name}</span>
                </div>
            </div>
        `,
      )
      .join("");
  }

  // Mixed Boxes
  const mixedContainer = document.getElementById("mixed-boxes-grid");
  if (mixedContainer) {
    mixedContainer.innerHTML = MENU_DATA.mixedBoxes
      .map(
        (item) => `
            <div class="simple-item-card" data-name="${item.name}">
                <div class="price-pill pill-blue">${item.price}</div>
                <div class="dotted-leader"></div>
                <div class="flavor-label-wrap">
                    <span class="flavor-name-text">${item.name}</span>
                </div>
            </div>
        `,
      )
      .join("");
  }

  // Milkshakes
  const milkshakeContainer = document.getElementById("milkshakes-grid");
  if (milkshakeContainer) {
    milkshakeContainer.innerHTML = MENU_DATA.milkshakes
      .map(
        (item) => `
            <div class="simple-item-card" data-name="${item.name}">
                <div class="price-pill pill-blue">${item.price}</div>
                <div class="dotted-leader"></div>
                <div class="flavor-label-wrap">
                    <span class="flavor-name-text">${item.name}</span>
                </div>
            </div>
        `,
      )
      .join("");
  }

  // Supplies
  const suppliesContainer = document.getElementById("supplies-items-grid");
  if (suppliesContainer) {
    suppliesContainer.innerHTML = MENU_DATA.supplies
      .map(
        (item) => `
            <div class="simple-item-card" data-name="${item.name}">
                <div class="price-pill pill-blue">${item.price}</div>
                <div class="dotted-leader"></div>
                <div class="flavor-label-wrap">
                    <span class="flavor-name-text">${item.name}</span>
                </div>
            </div>
        `,
      )
      .join("");
  }

  // Branches
  const branchesContainer = document.getElementById("branches-items-grid");
  if (branchesContainer) {
    branchesContainer.innerHTML = MENU_DATA.branches
      .map(
        (b, i) => `
            <div class="branch-item-card">
                <span class="branch-num-badge">${i + 1}</span>
                <div class="branch-text-info">
                    <h4>${b.name}</h4>
                    <p>${b.detail}</p>
                </div>
            </div>
        `,
      )
      .join("");
  }
}

/**
 * Smooth Scroll Handler
 */
function scrollToSection(sectionId) {
  const target = document.getElementById(sectionId);
  if (!target) return;

  const navHeight =
    document.querySelector(".sticky-menu-nav")?.offsetHeight || 70;
  const targetPos =
    target.getBoundingClientRect().top + window.pageYOffset - (navHeight + 15);

  window.scrollTo({
    top: targetPos,
    behavior: "smooth",
  });
}

/**
 * Live Search Filter
 */
function initSearchFilter() {
  const input = document.getElementById("menu-search-input");
  if (!input) return;

  input.addEventListener("input", (e) => {
    const query = e.target.value.trim().toLowerCase();
    const rows = document.querySelectorAll(
      ".flavor-table-row, .simple-item-card",
    );

    rows.forEach((row) => {
      const name = row.getAttribute("data-name") || row.innerText;
      if (name.toLowerCase().includes(query) || query === "") {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    });
  });
}

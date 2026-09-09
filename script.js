(function () {
  "use strict";

  var dict = {
    tr: {
      nav_home: "Ana Sayfa",
      nav_about: "Hakkımda",
      nav_services: "Hizmetler",
      nav_stack: "Stack",
      nav_projects: "Projeler",
      nav_process: "Süreç",
      nav_contact: "İletişim",
      nav_cta: "Teklif Al",
      hero_badge: "Frontend Developer & UI/UX Designer",
      hero_line1: "Dijital ürünlerinizi",
      hero_line2: "kurumsal standartta",
      hero_line3: "hayata geçiriyorum.",
      hero_desc: "Ölçeklenebilir arayüz mimarileri, erişilebilirlik odaklı tasarım sistemleri ve ölçülebilir performans. Fikirden yayına kadar uçtan uca üretim.",
      cta_projects: "Projeleri İncele",
      cta_contact: "İletişime Geç",
      stat_years: "Yıl Deneyim",
      stat_projects: "Tamamlanan Proje",
      stat_clients: "Memnun Müşteri",
      status_available: "Yeni projelere açık",
      about_tag: "Hakkımda",
      about_title: "Tasarım ile mühendisliği aynı masada buluşturuyorum",
      about_sub: "Kurumsal ekiplerle çalışırken netlik, sürdürülebilirlik ve ölçülebilir sonuç önceliğimdir.",
      about_p1: "Beş yılı aşkın süredir kurumsal web uygulamaları, yönetim panelleri ve ürün siteleri geliştiriyorum. Her projeye ölçülebilir hedeflerle başlıyor, teknik borç bırakmayan bir mimari kuruyorum.",
      about_p2: "Tasarım sistemleri, bileşen kütüphaneleri ve performans bütçeleri ile ekiplerin uzun vadede hızlı kalmasını sağlıyorum. Erişilebilirlik ve SEO, sonradan eklenen değil baştan planlanan başlıklardır.",
      about_c1: "Ölçülebilir performans hedefleri",
      about_c2: "WCAG uyumlu erişilebilirlik",
      about_c3: "Dokümante edilmiş tasarım sistemi",
      about_c4: "Yayın sonrası bakım ve destek",
      about_m1: "Performans",
      about_m1_d: "Lighthouse 95+ hedefiyle optimize edilmiş yükleme ve etkileşim süreleri.",
      about_m2: "Güvenilirlik",
      about_m2_d: "Test edilebilir kod, sürüm kontrolü ve şeffaf teslim süreci.",
      about_m3: "İş Birliği",
      about_m3_d: "Haftalık raporlama, net kapsam ve öngörülebilir zaman planı.",
      serv_tag: "Hizmetler",
      serv_title: "Neler yapabiliyorum",
      serv_sub: "Uçtan uca ürün geliştirme sürecinin her aşamasında destek.",
      serv1: "Web Geliştirme",
      serv1_d: "React, TypeScript ve modern CSS mimarileri ile ölçeklenebilir, bakımı kolay arayüzler.",
      serv2: "UI/UX Tasarım",
      serv2_d: "Kullanıcı akışları, prototipleme ve tutarlı tasarım belirteçleriyle kurumsal arayüz dili.",
      serv3: "Backend & Entegrasyon",
      serv3_d: "Node.js servisleri, REST API tasarımı, veritabanı modelleme ve üçüncü parti entegrasyonlar.",
      serv4: "Responsive Mimari",
      serv4_d: "Mobil öncelikli düzenler; telefondan geniş monitöre kadar kusursuz ve tutarlı deneyim.",
      serv5: "SEO & Analitik",
      serv5_d: "Teknik SEO, yapılandırılmış veri ve ölçüm altyapısı ile görünürlüğü artıran kurulum.",
      serv6: "Yayın & Bakım",
      serv6_d: "CI/CD kurulumu, izleme, hata takibi ve düzenli bakım paketleriyle sürdürülebilir yayın.",
      stack_tag: "Teknoloji",
      stack_title: "Programlama stack'im",
      stack_sub: "Projelerde aktif olarak kullandığım diller ve teknolojiler.",
      lvl_expert: "Uzman",
      lvl_advanced: "İleri Seviye",
      lvl_mid: "Orta - İleri",
      proj_tag: "Portfolyo",
      proj_title: "Seçili projeler",
      proj_sub: "Kurumsal ölçekte teslim edilen ürünlerden bir seçki.",
      badge_featured: "Öne Çıkan",
      badge_active: "Aktif",
      badge_fast: "Yüksek Performans",
      proj_cat_web: "Web Uygulaması",
      proj_cat_platform: "Otomasyon Platformu",
      proj_cat_ds: "Tasarım Sistemi",
      proj_cat_ecom: "E-Ticaret",
      proj1: "Aura Analytics",
      proj1_d: "Gerçek zamanlı kurumsal analitik paneli. Rol bazlı yetkilendirme, interaktif grafikler ve raporlama modülü.",
      proj2: "Nova Assist",
      proj2_d: "Ekip içi süreçleri otomatikleştiren bot ve panel çözümü. Biletleme, görev takibi ve webhook entegrasyonları.",
      proj3: "Pulse Design System",
      proj3_d: "Kurumsal bileşen kütüphanesi. Erişilebilirlik standartları, tasarım belirteçleri ve Storybook dokümantasyonu.",
      proj4: "ShopFlow Commerce",
      proj4_d: "Mobil öncelikli vitrin ve ödeme akışı. Gelişmiş filtreleme, sepet yönetimi ve ölçüm altyapısı.",
      link_live: "Canlı",
      link_code: "Kaynak",
      link_docs: "Doküman",
      proc_tag: "Çalışma Şekli",
      proc_title: "Şeffaf ve öngörülebilir süreç",
      proc_sub: "Her aşamada net çıktı, net takvim ve net iletişim.",
      proc1: "Keşif",
      proc1_d: "Hedefler, kapsam ve başarı ölçütlerinin belirlenmesi.",
      proc2: "Tasarım",
      proc2_d: "Akışlar, wireframe ve yüksek çözünürlüklü arayüz tasarımı.",
      proc3: "Geliştirme",
      proc3_d: "Bileşen bazlı üretim, kod incelemesi ve test süreçleri.",
      proc4: "Yayın",
      proc4_d: "Devreye alma, izleme kurulumu ve bakım planı.",
      cont_tag: "İletişim",
      cont_title: "Birlikte çalışalım",
      cont_sub: "Proje talepleriniz ve iş birlikleri için bana ulaşın.",
      cont_copy: "Kopyala",
      cont_visit: "Ziyaret Et",
      cont_connect: "Bağlan",
      cta_title: "Projenizi konuşalım",
      cta_desc: "Kapsamınızı paylaşın, 24 saat içinde yol haritası ve teklif ile dönüş yapayım.",
      cta_mail: "E-posta Gönder",
      footer_rights: "Tüm hakları saklıdır.",
      toast_copied: "E-posta adresi kopyalandı",
      toast_failed: "Kopyalanamadı"
    },
    en: {
      nav_home: "Home",
      nav_about: "About",
      nav_services: "Services",
      nav_stack: "Stack",
      nav_projects: "Projects",
      nav_process: "Process",
      nav_contact: "Contact",
      nav_cta: "Get a Quote",
      hero_badge: "Frontend Developer & UI/UX Designer",
      hero_line1: "I build your digital products",
      hero_line2: "to enterprise standards",
      hero_line3: "from concept to launch.",
      hero_desc: "Scalable interface architectures, accessibility-first design systems and measurable performance. End-to-end delivery from idea to production.",
      cta_projects: "View Projects",
      cta_contact: "Get in Touch",
      stat_years: "Years Experience",
      stat_projects: "Projects Delivered",
      stat_clients: "Happy Clients",
      status_available: "Available for new work",
      about_tag: "About",
      about_title: "Bringing design and engineering to the same table",
      about_sub: "Working with enterprise teams, clarity, sustainability and measurable outcomes come first.",
      about_p1: "For over five years I have been building enterprise web applications, admin dashboards and product sites. Every project starts with measurable goals and an architecture that leaves no technical debt.",
      about_p2: "With design systems, component libraries and performance budgets I keep teams fast in the long run. Accessibility and SEO are planned from day one, never bolted on later.",
      about_c1: "Measurable performance targets",
      about_c2: "WCAG compliant accessibility",
      about_c3: "Fully documented design system",
      about_c4: "Post-launch maintenance and support",
      about_m1: "Performance",
      about_m1_d: "Load and interaction times optimised against a Lighthouse 95+ target.",
      about_m2: "Reliability",
      about_m2_d: "Testable code, version control and a transparent delivery process.",
      about_m3: "Collaboration",
      about_m3_d: "Weekly reporting, clear scope and a predictable timeline.",
      serv_tag: "Services",
      serv_title: "What I can do",
      serv_sub: "Support at every stage of the end-to-end product development process.",
      serv1: "Web Development",
      serv1_d: "Scalable, maintainable interfaces with React, TypeScript and modern CSS architecture.",
      serv2: "UI/UX Design",
      serv2_d: "User flows, prototyping and a consistent enterprise interface language built on design tokens.",
      serv3: "Backend & Integrations",
      serv3_d: "Node.js services, REST API design, database modelling and third-party integrations.",
      serv4: "Responsive Architecture",
      serv4_d: "Mobile-first layouts delivering a flawless, consistent experience from phone to wide monitor.",
      serv5: "SEO & Analytics",
      serv5_d: "Technical SEO, structured data and measurement infrastructure that increases visibility.",
      serv6: "Deployment & Maintenance",
      serv6_d: "CI/CD setup, monitoring, error tracking and regular maintenance packages.",
      stack_tag: "Technology",
      stack_title: "My programming stack",
      stack_sub: "The languages and technologies I actively use across projects.",
      lvl_expert: "Expert",
      lvl_advanced: "Advanced",
      lvl_mid: "Intermediate - Advanced",
      proj_tag: "Portfolio",
      proj_title: "Selected projects",
      proj_sub: "A selection of products delivered at enterprise scale.",
      badge_featured: "Featured",
      badge_active: "Active",
      badge_fast: "High Performance",
      proj_cat_web: "Web Application",
      proj_cat_platform: "Automation Platform",
      proj_cat_ds: "Design System",
      proj_cat_ecom: "E-Commerce",
      proj1: "Aura Analytics",
      proj1_d: "Real-time enterprise analytics dashboard. Role-based access, interactive charts and a reporting module.",
      proj2: "Nova Assist",
      proj2_d: "Bot and dashboard solution automating internal team processes. Ticketing, task tracking and webhook integrations.",
      proj3: "Pulse Design System",
      proj3_d: "Enterprise component library. Accessibility standards, design tokens and Storybook documentation.",
      proj4: "ShopFlow Commerce",
      proj4_d: "Mobile-first storefront and checkout flow. Advanced filtering, cart management and measurement infrastructure.",
      link_live: "Live",
      link_code: "Source",
      link_docs: "Docs",
      proc_tag: "How I Work",
      proc_title: "A transparent, predictable process",
      proc_sub: "Clear output, clear schedule and clear communication at every stage.",
      proc1: "Discovery",
      proc1_d: "Defining goals, scope and success criteria.",
      proc2: "Design",
      proc2_d: "Flows, wireframes and high-fidelity interface design.",
      proc3: "Development",
      proc3_d: "Component-based build, code review and testing.",
      proc4: "Launch",
      proc4_d: "Deployment, monitoring setup and a maintenance plan.",
      cont_tag: "Contact",
      cont_title: "Let's work together",
      cont_sub: "Reach out for project requests and collaborations.",
      cont_copy: "Copy",
      cont_visit: "Visit",
      cont_connect: "Connect",
      cta_title: "Let's talk about your project",
      cta_desc: "Share your scope and I will come back with a roadmap and quote within 24 hours.",
      cta_mail: "Send Email",
      footer_rights: "All rights reserved.",
      toast_copied: "Email address copied",
      toast_failed: "Could not copy"
    }
  };

  var lang = "tr";
  var toastEl = document.getElementById("toast");
  var toastTimer = null;

  function t(key) {
    return (dict[lang] && dict[lang][key]) || key;
  }

  function applyLang(next) {
    lang = dict[next] ? next : "tr";
    document.documentElement.lang = lang;
    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute("data-i18n");
      if (dict[lang][key]) nodes[i].textContent = dict[lang][key];
    }
    var label = document.getElementById("langLabel");
    if (label) label.textContent = lang.toUpperCase();
    try {
      localStorage.setItem("trx-lang", lang);
    } catch (e) {}
  }

  function showToast(msg) {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toastEl.classList.remove("show");
    }, 2200);
  }

  var stored = null;
  try {
    stored = localStorage.getItem("trx-lang");
  } catch (e) {}
  applyLang(stored || "tr");

  var langBtn = document.getElementById("langBtn");
  if (langBtn) {
    langBtn.addEventListener("click", function () {
      applyLang(lang === "tr" ? "en" : "tr");
    });
  }

  var navbar = document.getElementById("navbar");
  var navLinks = document.getElementById("navLinks");
  var menuToggle = document.getElementById("menuToggle");
  var scrollBar = document.getElementById("scrollBar");
  var toTop = document.getElementById("toTop");
  var links = Array.prototype.slice.call(document.querySelectorAll(".nav-link"));
  var sections = links
    .map(function (l) {
      return document.querySelector(l.getAttribute("href"));
    })
    .filter(Boolean);

  function closeMenu() {
    if (navLinks) navLinks.classList.remove("open");
    if (menuToggle) {
      menuToggle.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  }

  if (menuToggle) {
    menuToggle.addEventListener("click", function () {
      var open = navLinks.classList.toggle("open");
      menuToggle.classList.toggle("open", open);
      menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  links.forEach(function (l) {
    l.addEventListener("click", closeMenu);
  });

  var lastY = window.scrollY;
  var ticking = false;

  function onScroll() {
    var y = window.scrollY;
    var max = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollBar) scrollBar.style.width = (max > 0 ? (y / max) * 100 : 0) + "%";

    if (navbar) {
      navbar.classList.toggle("scrolled", y > 24);
      var goingDown = y > lastY;
      if (goingDown && y > 220 && !navLinks.classList.contains("open")) {
        navbar.classList.add("hidden");
      } else if (!goingDown && lastY - y > 6) {
        navbar.classList.remove("hidden");
      }
      if (y < 80) navbar.classList.remove("hidden");
    }

    if (toTop) toTop.classList.toggle("show", y > 500);

    var current = sections[0];
    for (var i = 0; i < sections.length; i++) {
      if (sections[i].getBoundingClientRect().top <= 140) current = sections[i];
    }
    if (current) {
      links.forEach(function (l) {
        l.classList.toggle("is-active", l.getAttribute("href") === "#" + current.id);
      });
    }

    lastY = y;
    ticking = false;
  }

  window.addEventListener(
    "scroll",
    function () {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(onScroll);
      }
    },
    { passive: true }
  );
  onScroll();

  if (toTop) {
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry, idx) {
          if (!entry.isIntersecting) return;
          var el = entry.target;
          setTimeout(function () {
            el.classList.add("in");
          }, idx * 70);
          io.unobserve(el);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    reveals.forEach(function (el) {
      io.observe(el);
    });
  } else {
    reveals.forEach(function (el) {
      el.classList.add("in");
    });
  }

  var bars = document.querySelectorAll(".bar");
  if ("IntersectionObserver" in window) {
    var barIo = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("filled");
          barIo.unobserve(entry.target);
        });
      },
      { threshold: 0.4 }
    );
    bars.forEach(function (b) {
      barIo.observe(b);
    });
  } else {
    bars.forEach(function (b) {
      b.classList.add("filled");
    });
  }

  function runCounter(el) {
    var target = parseInt(el.getAttribute("data-target"), 10) || 0;
    var suffix = el.getAttribute("data-suffix") || "";
    var start = performance.now();
    var dur = 1600;
    function step(now) {
      var p = Math.min((now - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  var counters = document.querySelectorAll(".counter");
  if ("IntersectionObserver" in window) {
    var cIo = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          runCounter(entry.target);
          cIo.unobserve(entry.target);
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach(function (c) {
      cIo.observe(c);
    });
  } else {
    counters.forEach(runCounter);
  }

  var copyEmail = document.getElementById("copyEmail");
  if (copyEmail) {
    copyEmail.addEventListener("click", function () {
      var mail = "hello@trxiuss.dev";
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(mail).then(
          function () {
            showToast(t("toast_copied"));
          },
          function () {
            showToast(t("toast_failed"));
          }
        );
      } else {
        showToast(t("toast_failed"));
      }
    });
  }

  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  ["copy", "cut", "contextmenu", "selectstart", "dragstart"].forEach(function (evt) {
    document.addEventListener(evt, function (e) {
      e.preventDefault();
    });
  });

  document.addEventListener("keydown", function (e) {
    var k = e.key ? e.key.toLowerCase() : "";
    if ((e.ctrlKey || e.metaKey) && ["c", "u", "s", "a", "x"].indexOf(k) !== -1) {
      e.preventDefault();
    }
    if (e.key === "F12") e.preventDefault();
    if (e.key === "Escape") closeMenu();
  });

  document.addEventListener("click", function (e) {
    if (!navLinks || !navLinks.classList.contains("open")) return;
    if (navLinks.contains(e.target) || (menuToggle && menuToggle.contains(e.target))) return;
    closeMenu();
  });
})();

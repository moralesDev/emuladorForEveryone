/* Interruptor de idioma ES/EN. Español es el idioma por defecto y vive directamente
   en el HTML; este archivo solo aporta las traducciones al inglés y el motor que
   intercambia el contenido marcado con data-i18n / data-i18n-aria. */
(function () {
  var STORAGE_KEY = "efe-lang";

  var EN = {
    // — navegación / pie de página (compartido en todas las páginas) —
    "nav.aria": `Main navigation`,
    "nav.home": `Home`,
    "nav.offline": `Offline`,
    "nav.features": `Features`,
    "nav.privacy": `Privacy`,
    "nav.terms": `Terms`,
    "nav.contact": `Contact`,
    "nav.github": `GitHub`,
    "langswitch.aria": `Language selector`,
    "footer.copyright": `© 2026 moralesDev · Independent Android emulation project.`,
    "footer.aria": `Legal links`,
    "footer.disclaimer": `EmuladorForEveryone is an independent emulation software developed by moralesDev. It is not affiliated with, sponsored by, or endorsed by Nintendo or any other intellectual property rights holder. Game Boy Advance and the other trademarks mentioned belong to their respective owners and are cited for descriptive purposes only. The app does not distribute ROMs, games, proprietary BIOS files, or other protected content, and this site does not provide links to download them. Users are responsible for having the necessary rights or authorizations for any files they use.`,

    // — index.html —
    "indexPage.docTitle": `EmuladorForEveryone — GBA emulator for Android that works offline`,
    "hero.title": `Your GBA.<br>Anywhere.`,
    "hero.badge": `<i class="ph ph-wifi-slash" aria-hidden="true"></i> Play without Internet`,
    "hero.lead": `An independent Game Boy Advance emulator for Android, designed to take your games and your saves with you and play without an Internet connection.`,
    "hero.pill1": `<i class="ph ph-game-controller" aria-hidden="true"></i> Play offline`,
    "hero.pill2": `<i class="ph ph-floppy-disk" aria-hidden="true"></i> Your saves on your device`,
    "hero.pill3": `<i class="ph ph-device-mobile" aria-hidden="true"></i> Built for Android`,
    "hero.btnFeatures": `Explore the app`,
    "hero.note": `Doesn't include games or ROMs: you use your own files.`,
    "hero.phoneAria": `Mockup of the EmuladorForEveryone interface: 3:2 game screen and translucent touch controls`,

    "offline.kicker": `100% offline to play`,
    "offline.title": `No Internet. No problem.`,
    "offline.lead": `Once the app is installed and your games are available on the device, you can enjoy your gaming experience without depending on a permanent Internet connection.`,
    "offline.fineprint": `Downloading the app from Google Play, installing it, and receiving updates does require a connection. What doesn't need one is the gameplay experience: the emulation and the data already saved on your device.`,
    "offline.card1.title": `On a flight`,
    "offline.card1.text": `Enjoy your games even during a flight.`,
    "offline.card2.title": `On the subway`,
    "offline.card2.text": `No signal. No problem.`,
    "offline.card3.title": `No coverage`,
    "offline.card3.text": `Play wherever you don't have a connection.`,
    "offline.card4.title": `No mobile data`,
    "offline.card4.text": `You don't need to use mobile data to play.`,

    "features.kicker": `Features`,
    "features.title": `What the app does`,
    "features.lead": `A small set of features, built with care. Any feature marked <em>in development</em> isn't finished yet.`,
    "features.card1.title": `Offline play`,
    "features.card1.text": `Once the app is installed and your games are on the device, you can play without an Internet connection.`,
    "features.card2.title": `GBA emulation`,
    "features.card2.text": `Run your own Game Boy Advance games from the files you already have.`,
    "features.card3.title": `Local saves`,
    "features.card3.text": `Your progress is kept directly on your device.`,
    "features.card4.title": `Save states`,
    "features.card4.text": `Save and load game states quickly.`,
    "features.card5.title": `Touch controls`,
    "features.card5.text": `A touch interface designed for comfortable play.`,
    "features.card6.title": `Android experience`,
    "features.card6.text": `Designed for portrait phone screens, with large controls.`,

    "experience.kicker": `Experience`,
    "experience.title": `Your game goes with you.`,
    "experience.lead": `You don't always have Wi-Fi. You don't always have signal. And you don't always want to be connected.`,
    "experience.muted1": `EmuladorForEveryone is designed so your games and your saves are available directly on your device.`,
    "experience.muted2": `Once set up, you can enjoy your gaming experience without relying on servers or a permanent connection.`,
    "experience.sit1": `<strong>Flight</strong><small>Airplane mode on</small>`,
    "experience.sit2": `<strong>Commute</strong><small>Tunnel, no signal</small>`,
    "experience.sit3": `<strong>Trip</strong><small>Roaming off</small>`,
    "experience.sit4": `<strong>Remote place</strong><small>No coverage</small>`,

    "privacyHome.kicker": `Privacy`,
    "privacyHome.title": `Your game stays with you.`,
    "privacyHome.lead": `Offline also means private: less connection means less information traveling. The project's design points in that direction.`,
    "privacyHome.check1": `<i class="ph ph-check" aria-hidden="true"></i> The project's goal is to keep the gaming experience on your device.`,
    "privacyHome.check2": `<i class="ph ph-check" aria-hidden="true"></i> The ROMs you select and the saves you generate are designed to stay on your device, not on our servers.`,
    "privacyHome.check3": `<i class="ph ph-check" aria-hidden="true"></i> Saves and game states are designed to be stored locally.`,
    "privacyHome.check4": `<i class="ph ph-check" aria-hidden="true"></i> The app doesn't need a permanent Internet connection to play.`,
    "privacyHome.fineprint": `The <a href="privacy.html">privacy policy</a> is the document that governs: it will be kept up to date with the actual behavior of the published version, including any third-party services that may be added.`,
    "privacyHome.panel1Title": `Your library. Your saves. Your device.`,
    "privacyHome.tick1": `The games you add to the app remain under your control.`,
    "privacyHome.tick2": `Saves are stored locally on the device.`,
    "privacyHome.tick3": `The emulator doesn't need to upload your saves to the cloud for you to play.`,
    "privacyHome.panel2Title": `No unnecessary accounts.`,
    "privacyHome.panel2Text": `The goal is for you to open the app, load your games, and play without creating an account.`,

    "price.kicker": `Purchase model`,
    "price.title": `Buy once.`,
    "price.tick1": `No subscriptions.`,
    "price.tick2": `No ads.`,
    "price.tick3": `No additional purchases.`,
    "price.tick4": `Updates included with your purchase.`,
    "price.panelKicker": `Estimated price`,
    "price.sub": `One-time payment`,
    "price.fineprint": `*$2.99, one-time payment. Billing and refunds are handled by Google Play according to its policies.`,
    "price.note": `I know what it's like to look for an emulator: half of them show you ads between plays, and the other half charge you a monthly fee for things that should come standard.
This app costs $2.99, one time. It's a personal project — I started building it to learn — and it keeps growing every week with what the community asks for. Buying it is how it keeps growing.`,

    "legal.kicker": `Intellectual property and ROMs`,
    "legal.title": `An independent project`,
    "legal.lead": `It's worth saying plainly, because it defines what the app is and isn't.`,
    "legal.card1.title": `No affiliation`,
    "legal.card1.text": `EmuladorForEveryone is an independent emulation project and is not affiliated with, sponsored by, or endorsed by Nintendo or other intellectual property rights holders.`,
    "legal.card2.title": `No included ROMs`,
    "legal.card2.text": `The app does not distribute commercial ROMs, games, or other copyrighted third-party content.`,
    "legal.card3.title": `No download links`,
    "legal.card3.text": `The app doesn't provide links or services to download ROMs, and neither does this site.`,
    "legal.card4.title": `User responsibility`,
    "legal.card4.text": `The user is responsible for making sure they have the rights or authorizations needed to use any file they load into the app.`,
    "legal.fineprint": `More detail in the <a href="terms.html">terms of use</a>. This information is transparency, not legal advice.`,

    "gp.kicker": `Download it now`,
    "gp.title": `EmuladorForEveryone on Google Play`,
    "gp.text": `The best Game Boy Advance emulator for Android. Play offline, without ads, and without accounts.`,
    "gp.btn": `<i class="ph ph-google-play-logo" aria-hidden="true"></i> Download`,

    // — privacy.html —
    "privacyPage.docTitle": `Privacy Policy — EmuladorForEveryone`,
    "privacyPage.kicker": `Legal document`,
    "privacyPage.h1": `Privacy Policy`,
    "privacyPage.meta": `Last updated: August 15, 2026`,
    "privacyPage.lead": `This document describes how the EmuladorForEveryone app handles information. It's written in plain language and reflects the app's intended behavior at the time of publication. It does not constitute legal advice.`,
    "privacyPage.toc1": `Developer identification`,
    "privacyPage.toc2": `App name`,
    "privacyPage.toc3": `Contact information`,
    "privacyPage.toc4": `What information it collects`,
    "privacyPage.toc5": `What information it doesn't collect`,
    "privacyPage.toc6": `How the data is used`,
    "privacyPage.toc7": `Data shared with third parties`,
    "privacyPage.toc8": `Local storage`,
    "privacyPage.toc9": `Retention and deletion`,
    "privacyPage.toc10": `Security`,
    "privacyPage.toc11": `Changes to this policy`,
    "privacyPage.toc12": `Contact`,
    "privacyPage.h2_1": `1. Developer identification`,
    "privacyPage.p1_1": `EmuladorForEveryone is an app developed and distributed by
  <strong>moralesDev</strong>, an independent developer (natural person).`,
    "privacyPage.li1_1": `<strong>App:</strong> EmuladorForEveryone`,
    "privacyPage.li1_2": `<strong>Developer:</strong> moralesDev`,
    "privacyPage.li1_3": `<strong>Privacy contact:</strong> alessadro_9@hotmail.com`,
    "privacyPage.p1_2": `For questions related to privacy, data handling, or this
  policy, users can reach out via the email address
  above.`,
    "privacyPage.h2_2": `2. App name`,
    "privacyPage.p2": `<strong>EmuladorForEveryone</strong>, an app for the Android operating system, distributed through Google Play.`,
    "privacyPage.h2_3": `3. Contact information`,
    "privacyPage.p3": `For any questions about this policy, you can write to alessadro_9@hotmail.com.`,
    "privacyPage.h2_4": `4. What information the app collects`,
    "privacyPage.p4_1": `In its current design, the app <strong>does not collect personal data</strong>. It has no servers of its own or a backend to send information to.`,
    "privacyPage.p4_2": `The information the app handles stays on the device:`,
    "privacyPage.li4_1": `game files the user voluntarily adds;`,
    "privacyPage.li4_2": `saved games and save states generated during use;`,
    "privacyPage.li4_3": `app preferences (controls, audio, video, language).`,
    "privacyPage.p4_3": `None of this is transmitted to the developer.`,
    "privacyPage.h2_5": `5. What information it does NOT collect`,
    "privacyPage.li5_1": `No user accounts are created and no registration is required.`,
    "privacyPage.li5_2": `No name, email address, phone number, or address is collected.`,
    "privacyPage.li5_3": `The device's location is not collected.`,
    "privacyPage.li5_4": `The list of installed apps or contacts is not collected.`,
    "privacyPage.li5_5": `No ROMs or saves are stored on the developer's servers.`,
    "privacyPage.li5_6": `Saves are not synced to the cloud.`,
    "privacyPage.li5_7": `No ads are shown and no advertising identifiers are used.`,
    "privacyPage.li5_8": `There are no subscriptions or in-app purchases.`,
    "privacyPage.p5": `The app is intended as a <strong>one-time-purchase app</strong> through Google Play. The transaction is handled by Google Play under its own policies; the developer does not receive or store payment data.`,
    "privacyPage.h2_6": `6. How the data is used`,
    "privacyPage.p6": `The files and settings described in point 4 are used exclusively to run the app on the device: loading the game the user selects, keeping their progress, and remembering their preferences. They are not used for analytics, advertising, or profiling purposes.`,
    "privacyPage.h2_7": `7. Whether data is shared with third parties`,
    "privacyPage.p7_1": `The app does not share data with third parties, because it does not collect or transmit any. In its current design, it does not include Google Analytics, Firebase, Crashlytics, ad networks, or other external analytics or monetization SDKs.`,
    "privacyPage.p7_2": `If any such service is added in the future, this policy will be updated <strong>before or at the time</strong> that version is published, specifying the service, the information it handles, and its purpose. Distribution through Google Play does, in any case, involve the processing Google carries out as the distribution platform, described in its own policies.`,
    "privacyPage.h2_8": `8. Local storage`,
    "privacyPage.p8": `All app content is saved on the device's own storage: the files added by the user, saves, save states, and settings. The app only requests the permissions needed to read the files the user chooses and to write their saves and settings.`,
    "privacyPage.h2_9": `9. Data retention and deletion`,
    "privacyPage.p9": `Data stays on the device as long as the app is installed. The user can delete it at any time by removing files from within the app, clearing the app's data from Android settings, or uninstalling it. On uninstall, data created by the app in its private storage is removed; files the user has saved to public folders on the device remain under their control.`,
    "privacyPage.h2_10": `10. Security`,
    "privacyPage.p10": `Since no data is transmitted to the developer's servers, no information is stored outside the device. The app relies on Android's own isolation and permission mechanisms. No system is completely foolproof, so it's recommended to keep the device updated and protected with a screen lock.`,
    "privacyPage.h2_11": `11. Changes to this policy`,
    "privacyPage.p11": `This policy may be updated as the app's features or applicable legal requirements change. The current version will always be available on this page, along with its last-updated date. Relevant changes will also be reflected in the Google Play listing.`,
    "privacyPage.h2_12": `12. Contact`,
    "privacyPage.p12": `Questions, requests, or notices about privacy: <a href="mailto:alessadro_9@hotmail.com">alessadro_9@hotmail.com</a>.`,

    // — terms.html —
    "termsPage.docTitle": `Terms of Use — EmuladorForEveryone`,
    "termsPage.kicker": `Legal document`,
    "termsPage.h1": `Terms of Use`,
    "termsPage.meta": `Last updated: August 15, 2026`,
    "termsPage.lead": `These terms describe the conditions of use for the EmuladorForEveryone app, developed by moralesDev. They are informational and do not constitute legal advice.`,
    "termsPage.h2_1": `1. Acceptance`,
    "termsPage.p1": `By installing or using the app, the user accepts these terms. If you don't agree with them, you should stop using it and uninstall it.`,
    "termsPage.h2_2": `2. Purpose of the app`,
    "termsPage.p2": `EmuladorForEveryone is an independent emulation software that lets you run, on an Android device, files compatible with the Game Boy Advance console that the user provides themselves. The app does not include games, ROMs, proprietary BIOS files, or other third-party content, and it does not provide means or links to obtain them.`,
    "termsPage.h2_3": `3. Legitimate use`,
    "termsPage.p3": `The user agrees to use the app in accordance with the laws that apply to them. The user is responsible for having the necessary rights or authorizations for any files used. The app does not verify the origin or legal status of the files loaded into it.`,
    "termsPage.h2_4": `4. User responsibility over files`,
    "termsPage.li4_1": `The user decides which files to add to the app and where to obtain them from.`,
    "termsPage.li4_2": `The user is responsible for keeping backups of their saves and save states.`,
    "termsPage.li4_3": `Regulations on private copies, formats, and file use vary by country and may change. The user should find out what applies to them.`,
    "termsPage.h2_5": `5. Prohibited uses`,
    "termsPage.li5_1": `Using the app to distribute, publish, or make available to third parties illegal content or copyrighted content without authorization.`,
    "termsPage.li5_2": `Using it as part of a service that offers downloads of ROMs or other third-party content.`,
    "termsPage.li5_3": `Modifying, decompiling, or redistributing the app beyond what applicable law or Google Play's distribution license allows.`,
    "termsPage.li5_4": `Using third-party trademarks, names, or graphic elements to suggest a relationship with this project that does not exist.`,
    "termsPage.h2_6": `6. Third-party intellectual property`,
    "termsPage.p6": `Game Boy Advance and the other trademarks, trade names, and content mentioned belong to their respective owners. Their mention in the app or on this site is descriptive and does not imply affiliation, sponsorship, or endorsement. This project is not affiliated with, sponsored by, or endorsed by Nintendo or any other intellectual property rights holder.`,
    "termsPage.h2_7": `7. Intellectual property of the app`,
    "termsPage.p7": `The code, interface design, graphics, and original text of the app and this site belong to moralesDev, except for third-party components used under their respective licenses. Where applicable, those licenses will be listed in the app's "About" section.`,
    "termsPage.h2_8": `8. No warranties`,
    "termsPage.p8": `The app is provided "as is." Emulation is a complex process: there may be bugs, incompatibilities, or performance differences between devices, and there is no guarantee that a given file will work correctly or that the app is free of errors.`,
    "termsPage.h2_9": `9. Limitation of liability`,
    "termsPage.p9": `To the extent permitted by applicable law, the developer is not liable for the loss of saves or files, for the user's use of third-party content, or for indirect damages arising from use of the app. Nothing in these terms excludes rights that consumer regulations grant users on a mandatory basis.`,
    "termsPage.h2_10": `10. Updates and availability`,
    "termsPage.p10": `The app may receive updates that add, modify, or remove features. The developer may discontinue its distribution or support. Updates are distributed through Google Play under its conditions. Purchases and refunds are governed by Google Play's policies.`,
    "termsPage.h2_11": `11. Changes to these terms`,
    "termsPage.p11": `These terms may be modified. The current version will always be published on this page along with its last-updated date; continued use of the app after publication implies acceptance.`,
    "termsPage.h2_12": `12. Contact`,
    "termsPage.p12": `Questions about these terms: <a href="mailto:alessadro_9@hotmail.com">alessadro_9@hotmail.com</a>.`,

    // — contact.html —
    "contactPage.docTitle": `Contact — EmuladorForEveryone`,
    "contactPage.kicker": `Support`,
    "contactPage.h1": `Contact`,
    "contactPage.lead": `Have a problem, a question, or an idea for the next version?`,
    "contactPage.mailKicker": `Support email`,
    "contactPage.mailNote": `Write in Spanish or English. It's an independent project, so replies may take a few days.`,
    "contactPage.h2_report": `To report a problem`,
    "contactPage.reportIntro": `Including this information helps reproduce the issue:`,
    "contactPage.li_r1": `device model and Android version;`,
    "contactPage.li_r2": `app version (shown in "About");`,
    "contactPage.li_r3": `what you were doing when the problem happened;`,
    "contactPage.li_r4": `if it's reproducible, the steps to trigger it.`,
    "contactPage.reportNote": `Don't send ROMs, games, or other copyrighted files: we can't receive or store them.`,
    "contactPage.h2_ideas": `Ideas and suggestions`,
    "contactPage.ideasP1": `There's a person behind this app, not a company. That has a downside — replies can sometimes take a few days — and an upside: whoever reads your email is the one deciding what gets built next week.`,
    "contactPage.ideasP2": `So if something bothers you, is missing, or you have an idea for how to improve it, write to me. The idea doesn't need to be polished, and you don't need to know how to code: "I can't reach the R button in landscape" is already enough to make the list.`,
    "contactPage.ideasNote": `I can't promise everything will get built, or when. I can promise I'll read it and reply.`,
    "contactPage.h2_support": `Support the project`,
    "contactPage.supportP": `The app runs on a one-time payment, with no subscriptions or ads. If you want it to keep growing, three things really help:`,
    "contactPage.li_s1": `<strong>Leave a review on Google Play.</strong> That's what helps other people find it.`,
    "contactPage.li_s2": `<strong>Tell someone about it</strong> who likes revisiting the classic games.`,
    "contactPage.li_s3": `<strong>Write to me when something works well, too.</strong> Knowing what not to touch is as useful as knowing what to fix.`,
    "contactPage.h2_other": `Other topics`,
    "contactPage.li_o1": `<strong>Privacy:</strong> check the <a href="privacy.html">privacy policy</a> before writing; it might already answer your question.`,
    "contactPage.li_o2": `<strong>Terms of use:</strong> review the <a href="terms.html">terms of use</a>.`,
    "contactPage.li_o3": `<strong>Rights holders:</strong> if you represent a rights holder and want to raise a question about this project, write to the support email and mention it in the subject line.`,
  };

  var originalContent = {};
  var originalAria = {};

  function applyLang(lang) {
    document.documentElement.setAttribute("lang", lang);

    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var key = el.getAttribute("data-i18n");
      var isTitle = el.tagName === "TITLE";
      if (!(key in originalContent)) {
        originalContent[key] = isTitle ? el.textContent : el.innerHTML;
      }
      var value = lang === "en" && EN[key] !== undefined ? EN[key] : originalContent[key];
      if (isTitle) {
        el.textContent = value;
      } else {
        el.innerHTML = value;
      }
    }

    var ariaNodes = document.querySelectorAll("[data-i18n-aria]");
    for (var j = 0; j < ariaNodes.length; j++) {
      var ael = ariaNodes[j];
      var akey = ael.getAttribute("data-i18n-aria");
      if (!(akey in originalAria)) {
        originalAria[akey] = ael.getAttribute("aria-label") || "";
      }
      ael.setAttribute("aria-label", lang === "en" && EN[akey] !== undefined ? EN[akey] : originalAria[akey]);
    }

    var buttons = document.querySelectorAll(".lang-btn");
    for (var k = 0; k < buttons.length; k++) {
      var active = buttons[k].getAttribute("data-lang") === lang;
      buttons[k].classList.toggle("active", active);
      buttons[k].setAttribute("aria-pressed", active ? "true" : "false");
    }

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* almacenamiento no disponible (modo privado, etc.) */
    }
  }

  function init() {
    var stored = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch (e) {}
    applyLang(stored === "en" ? "en" : "es");

    var buttons = document.querySelectorAll(".lang-btn");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function () {
        applyLang(this.getAttribute("data-lang"));
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

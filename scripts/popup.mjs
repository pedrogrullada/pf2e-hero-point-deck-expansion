function registerSettings() {
    game.settings.register("pf2e-hero-point-deck-expansion", "firstTime", {
      name: "Initial Pop-Up",
      scope: "client",
      config: false,
      type: Boolean,
      default: true
    })
  };
  
  Hooks.once("init", () => {
    registerSettings();
  });
  
  Hooks.once('ready', async function() {
    if (game.user.isGM) {
      if (game.settings.get("pf2e-hero-point-deck-expansion", "firstTime") == true) {
        const journals = await game.packs.get("pf2e-hero-point-deck-expansion.pf2e-hero-point-deck-expansion-journals").getDocuments();
        const journal = journals.filter(j => j.id == "OYGoRDmDVpnhhMC8")[0]
        journal.sheet.render(true)
        game.settings.set("pf2e-hero-point-deck-expansion", "firstTime", false)
      }
    }
  })
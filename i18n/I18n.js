.pragma library

var messages = {
  en: {
    airplayMirror: "AirPlay Mirror",
    mirroringTo: "Mirroring to {name}",
    readyFor: "Ready for {name}",
    chooseReceiver: "Choose a receiver",
    chooseCapture: "Choose a screen, window, or region in the picker",
    discovery: "Discovery",
    discoveryTooltip: "Scan the network for new AirPlay receivers",
    receivers: "RECEIVERS",
    mirror: "Mirror",
    stop: "Stop",
    forget: "Forget",
    mirrorTooltip: "Start mirroring to this receiver",
    stopTooltip: "Stop mirroring",
    forgetTooltip: "Forget saved pairing; the next connection requires a PIN",
    pairNewReceiver: "PAIR A NEW RECEIVER",
    pinHelp: "Select the receiver and start once to make its PIN appear. Enter that four-digit PIN here.",
    pin: "PIN",
    pairAndConnect: "Pair & connect",
    sourceHint: "Start opens the share picker, then connects.",
    noReceivers: "No AirPlay receivers found",
    noPairedReceivers: "No paired receivers",
    discoveryFailed: "AirPlay discovery failed",
    pairingCannotForget: "This receiver did not advertise a device ID, so its saved pairing cannot be removed safely.",
    stopped: "Stopped mirroring to {name}",
    mirroringTitle: "AirPlay mirroring",
    pairingForgottenTitle: "AirPlay pairing forgotten",
    pairingForgotten: "The next connection to this receiver will require its PIN.",
    pairingForgetFailed: "Could not forget receiver pairing",
    capturePreparationFailed: "Could not prepare capture source selection",
    pickerCancelled: "Screen or window selection was cancelled",
    invalidSettings: "Invalid mirroring settings",
    connectionFailedTitle: "AirPlay connection failed",
    connectionFailed: "Could not connect. If the TV shows a PIN, enter it below and choose Pair & connect.",
    tooltipMirroring: "AirPlay mirroring to {name}",
    tooltipChoose: "Choose an AirPlay receiver",
    tvBusy: "The TV dropped the session. Wait a few seconds, then press Start again."
  },
  nb: {
    airplayMirror: "AirPlay-speiling",
    mirroringTo: "Speiler til {name}",
    readyFor: "Klar for {name}",
    chooseReceiver: "Velg en mottaker",
    chooseCapture: "Velg skjerm, vindu eller område i velgeren",
    discovery: "Oppdagelse",
    discoveryTooltip: "Søk på nettverket etter nye AirPlay-mottakere",
    receivers: "MOTTAKERE",
    mirror: "Speil",
    stop: "Stopp",
    forget: "Glem",
    mirrorTooltip: "Start speiling til denne mottakeren",
    stopTooltip: "Stopp speiling",
    forgetTooltip: "Glem lagret paring; neste tilkobling krever PIN-kode",
    pairNewReceiver: "PAR EN NY MOTTAKER",
    pinHelp: "Velg mottakeren og start én gang for å vise PIN-koden. Skriv inn den firesifrede PIN-koden her.",
    pin: "PIN",
    pairAndConnect: "Par og koble til",
    sourceHint: "Start åpner delingsvelgeren og kobler deretter til.",
    noReceivers: "Fant ingen AirPlay-mottakere",
    noPairedReceivers: "Ingen parrede mottakere",
    discoveryFailed: "AirPlay-oppdagelse feilet",
    pairingCannotForget: "Mottakeren annonserte ingen enhets-ID, så lagret paring kan ikke fjernes trygt.",
    stopped: "Stoppet speiling til {name}",
    mirroringTitle: "AirPlay-speiling",
    pairingForgottenTitle: "AirPlay-paring glemt",
    pairingForgotten: "Neste tilkobling til mottakeren krever PIN-koden.",
    pairingForgetFailed: "Kunne ikke glemme mottakerparingen",
    capturePreparationFailed: "Kunne ikke klargjøre valg av opptakskilde",
    pickerCancelled: "Valg av skjerm eller vindu ble avbrutt",
    invalidSettings: "Ugyldige speilingsinnstillinger",
    connectionFailedTitle: "AirPlay-tilkobling feilet",
    connectionFailed: "Kunne ikke koble til. Hvis TV-en viser en PIN, skriv den inn under og velg Par og koble til.",
    tooltipMirroring: "AirPlay-speiling til {name}",
    tooltipChoose: "Velg en AirPlay-mottaker",
    tvBusy: "TVen droppet økten. Vent noen sekunder og trykk Start igjen."
  }
}

function language(localeName) {
  var languageCode = String(localeName || "en").toLowerCase().split(/[_-]/)[0]
  return languageCode === "no" || languageCode === "nb" || languageCode === "nn" ? "nb" : "en"
}

function t(localeName, key, values) {
  var text = (messages[language(localeName)][key] || messages.en[key] || key)
  if (!values) return text
  for (var name in values) text = text.replace(new RegExp("\\{" + name + "\\}", "g"), String(values[name]))
  return text
}

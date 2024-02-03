import * as dotenv from 'dotenv';
import {Kagi}      from '../src';

dotenv.config({ path: './.env' });

describe("Test Kagi Client", () => {
  it("check token exists", () => {
    expect(process.env["TOKEN"]).toBeDefined();
  })

  // @ts-ignore
  let token: string = process.env["TOKEN"]
  let kagi = new Kagi({token})

  it("URL Summary", () => {
    return kagi.summarize("https://devblogs.microsoft.com/microsoft365dev/announcing-general-availability-of-microsoft-graph-apis-for-microsoft-teams-meeting-recordings/").then(res => {
      // console.log(res)
      expect(typeof res).toEqual("object")
      expect(typeof res.data).toEqual("object")
      expect(typeof res.data.output).toEqual("string")
      expect(typeof res.data.tokens).toEqual("number")
    })
  })

  it("Text Summary", () => {
    return kagi.summarize("\n" +
      "    Localized SRD 5.1 in French, Italian, German, and Spanish: On July 26th, we announced that SRD 5.1 had been localized into French, Italian, German, and Spanish and that those localizations were also being released into Creative Commons.\n" +
      "    Released 3 More Playtest Packets for the 2024 Rules Revisions: Since March, we’ve released Unearthed Arcana playtests featuring new rules for weapons, spells, feats, and all of the classes that will feature in the 2024 core rulebooks. Your feedback is crucial to the development of these books, and we appreciate the time you’ve taken to playtest and give us feedback.\n" +
      "    Held Closed Alpha Playtests for the Virtual Tabletop: Committing to the promise we made at the April Creator Summit, we invited small groups of people in June and August to playtest the upcoming VTT. Their shared feedback and insight will be incorporated as we continue to build out the VTT.\n" +
      "    Updated Our Artist Guidelines to Disallow the Use of Generative AI for Illustration: In August, it was brought to our attention that generative AI was used in artwork commissioned for Bigby Presents: Glory of the Giants. We published a response detailing our stance on generative AI, stating that artists must refrain from its use in D&D products.\n" +
      "    Recommissioned Artwork from Glory of the Giants and Released Updated Artwork on D&D Beyond: Following our statement on August 5th, the artwork was removed from D&D Beyond and recommissioned, and D&D Beyond was updated on September 20, 2023 with the new art. Additionally, the digital version of each book will contain artist credits next to each piece. Future printings of Glory of the Giants will include this recommissioned art.\n" +
      "    Increased Our Support for D&D in the Classroom, Libraries, and Beyond: Our latest batch of D&D-inspired curriculum activities challenge elementary and middle school students to put their analytical, science, and language arts skills to the test by asking them to solve puzzles and describe dragon encounters they've imagined! Additionally, we launched the D&D Beyond Educator License and revamped our D&D Afterschool Club Kits to better support D&D clubs in schools, libraries, and enrichment centers. Learn about these products and initiatives on our Educator Resources page.\n").then(res => {
      // console.log(res)
      expect(typeof res).toEqual("object")
      expect(typeof res.meta).toEqual("object")
      expect(typeof res.data).toEqual("object")
      expect(typeof res.data.output).toEqual("string")
      expect(typeof res.data.tokens).toEqual("number")
    })
  })

  it("Search", () => {
    return kagi.search("dnd beyond community updates").then(res => {
      expect(typeof res).toEqual("object")
      expect(typeof res.data).toEqual("object")
    })
  })

  it("FastGPT", () => {
    return kagi.fastgpt("what is the radius of the singularity of a blackhole?").then(res => {
      expect(typeof res).toEqual("object")
      expect(typeof res.data).toEqual("object")
      expect(typeof res.data.output).toEqual("string")
    })
  })

})

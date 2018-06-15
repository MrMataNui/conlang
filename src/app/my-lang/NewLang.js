/*jslint eqeq: true, plusplus: true, todo: true*/
/** <h2 class="head-lexi">Momem - English Dictionary</h2> */
// ʈ Ꝭ ꝭ ᴥ ᵜ ꝷ ꞅ ꟿ ꬺ Ꞃ ꞃ ỻ ƍ ɥ
// 1ᶣ 2ᵇ 3ᶮ
/**
 * ([^g]word: ".*)ui(.*",)
 * $1ꭐ$2
 */

/**
 * (partOfSpeech[2]?: ".*)art\.(")
 * $1article$2
 */
/**
 * [^\[\]{}!@#$%^&*()_+\-=\\|;:""<>,./?`→\w\sːˈʔꝝʂʈþɥʤʧꝯɲꞃɏꝭᴥᵜꝷꞅꟿꬺỻƍɥᶣᵇᶮ—]+
 */
const constants = () => ({
  syll: {
    syll: "(C)V(C)",
    stress: "Second — stress is on the second syllable",
    wordStart: "b, d, ʤ, g, h, j, k, m, n, p, t, ʧ, ɲ, ʂ, ʈ",
    wordMid: "b, bj, d, ʤ, g, gg, h, j, jj, k, m, n, nd, nh, nj, p, t, tk, ʧ, ɲ, ɽ, ʂ, ʈ, ʔ",
    wordFinal: "b, d, ʤ, g, j, k, m, n, p, t, ʧ, ɭ, ɲ, ʂ, ʔ",
  },
  phonRules: [
    "e → i / _g"
  ]
});
window.onload = () => {
  const {
    syll,
    phonRules
  } = constants();
  get("#phon-rules").innerHTML = phonRulesData(phonRules);
  get("#vowelGraph").innerHTML = vowelGraph(["a aː", "e eː", "i iː", "o", "u uː"]);
}
angular
  .module("myApp", [])
  .controller("myCtrl", $scope => {
    const {
      syll,
      phonRules
    } = constants();
    $scope.capitalize = capitalize;
    $scope.syll = syll;
    $scope.newLang = [
      {
        word: "a",
        IPA: "/a/",
        partOfSpeech: "verb",
        engWord: "be (age)"
      },
      {
        word: "a",
        IPA: "/aː/",
        partOfSpeech: "noun",
        engWord: "neck"
      },
      {
        word: "aꝝe",
        IPA: "/aˈʔe/",
        partOfSpeech: "noun",
        engWord: "joint"
      },
      {
        word: "aꝝo",
        IPA: "/aˈʔo/",
        partOfSpeech: "adjective",
        engWord: "pretty"
      },
      {
        word: "aa",
        IPA: "/aˈa/",
        partOfSpeech: "verb",
        engWord: "summon"
      },
      {
        word: "aa",
        IPA: "/aˈaː/",
        partOfSpeech: "noun",
        engWord: "altitude"
      },
      {
        word: "abi",
        IPA: "/aˈbi/",
        partOfSpeech: "noun",
        engWord: "psychology"
      },
      {
        word: "abu",
        IPA: "/aˈbu/",
        partOfSpeech: "adjective",
        engWord: "transparent"
      },
      {
        word: "abu",
        IPA: "/aːˈbuː/",
        partOfSpeech: "noun",
        engWord: "spinach"
      },
      {
        word: "abuꝝeꝯe",
        IPA: "/aˈbuʔeʤe/",
        partOfSpeech: "verb",
        engWord: "pity"
      },
      {
        word: "abue",
        IPA: "/aˈbue/",
        partOfSpeech: "adjective",
        engWord: "municipal"
      },
      {
        word: "aɥa",
        IPA: "/aˈʧaː/",
        partOfSpeech: "noun",
        engWord: "stain"
      },
      {
        word: "aɥa",
        IPA: "/aːˈʧaː/",
        partOfSpeech: "adjective",
        engWord: "calm"
      },
      {
        word: "aɥe",
        IPA: "/aˈʧe/",
        partOfSpeech: "noun",
        engWord: "devil"
      },
      {
        word: "aɥiꝯa",
        IPA: "/aːˈʧiʤa/",
        partOfSpeech: "noun",
        engWord: "friction"
      },
      {
        word: "aɥu",
        IPA: "/aˈʧu/",
        partOfSpeech: "noun",
        engWord: "accent"
      },
      {
        word: "aɥu",
        IPA: "/aˈʧuː/",
        partOfSpeech: "verb",
        engWord: "vow"
      },
      {
        word: "ade",
        IPA: "/aˈde/",
        partOfSpeech: "verb",
        engWord: "populate"
      },
      {
        word: "ae",
        IPA: "/aˈe/",
        partOfSpeech: "noun",
        engWord: "sanctuary"
      },
      {
        word: "age",
        IPA: "/aˈge/",
        partOfSpeech: "noun",
        engWord: "closure"
      },
      {
        word: "aggaɲaku",
        IPA: "/agˈgaːɲakuː/",
        partOfSpeech: "noun",
        engWord: "transcript"
      },
      {
        word: "agi",
        IPA: "/aːˈgiː/",
        partOfSpeech: "noun",
        engWord: "pick"
      },
      {
        word: "agu",
        IPA: "/aˈgu/",
        partOfSpeech: "verb",
        engWord: "accept"
      },
      {
        word: "aꝯa",
        IPA: "/aˈʤa/",
        partOfSpeech: "verb",
        engWord: "strip"
      },
      {
        word: "aka",
        IPA: "/aˈka/",
        partOfSpeech: "noun",
        engWord: "impact"
      },
      {
        word: "aka",
        IPA: "/aːˈka/",
        partOfSpeech: "noun",
        engWord: "wine"
      },
      {
        word: "akakuꝷu",
        IPA: "/aˈkakuːtu/",
        partOfSpeech: "noun",
        engWord: "bank"
      },
      {
        word: "aku",
        IPA: "/aːˈkuː/",
        partOfSpeech: "noun",
        engWord: "label"
      },
      {
        word: "akugeɏa",
        IPA: "/aˈkuːgeja/",
        partOfSpeech: "noun",
        engWord: "restoration"
      },
      {
        word: "ame",
        IPA: "/aˈme/",
        partOfSpeech: "pronoun",
        engWord: "none"
      },
      {
        word: "aꞃde",
        IPA: "/anˈde/",
        partOfSpeech: "noun",
        engWord: "drought"
      },
      {
        word: "aꞃe",
        IPA: "/aˈne/",
        partOfSpeech: "noun",
        engWord: "nonsense"
      },
      {
        word: "aꞃuꝝeꝷe",
        IPA: "/aˈnuːʔeʈe/",
        partOfSpeech: "noun",
        engWord: "oyster"
      },
      {
        word: "aꞃuude",
        IPA: "/aːˈnuude/",
        partOfSpeech: "noun",
        engWord: "neighbour"
      },
      {
        word: "aɲa",
        IPA: "/aˈɲa/",
        partOfSpeech: "noun",
        engWord: "tape"
      },
      {
        word: "aɲa",
        IPA: "/aːˈɲa/",
        partOfSpeech: "verb",
        engWord: "light"
      },
      {
        word: "aɲo",
        IPA: "/aˈɲo/",
        partOfSpeech: "verb",
        engWord: "choke"
      },
      {
        word: "aꝷa",
        IPA: "/aˈʈa/",
        partOfSpeech: "adverb",
        engWord: "below"
      },
      {
        word: "aꝷa",
        IPA: "/aːˈʈa/",
        partOfSpeech: "noun",
        engWord: "facade"
      },
      {
        word: "aꝷe",
        IPA: "/aˈʈe/",
        partOfSpeech: "verb",
        engWord: "reconcile"
      },
      {
        word: "aꝷkabi",
        IPA: "/atˈkabiː/",
        partOfSpeech: "noun",
        engWord: "paradise"
      },
      {
        word: "aꝷo",
        IPA: "/aˈʈo/",
        partOfSpeech: "noun",
        engWord: "pubic hair"
      },
      {
        word: "au",
        IPA: "/aˈuː/",
        partOfSpeech: "verb",
        engWord: "wreck"
      },
      {
        word: "auꝯe",
        IPA: "/aːˈuːʤe/",
        partOfSpeech: "noun",
        engWord: "dairy"
      },
      {
        word: "aɏa",
        IPA: "/aˈja/",
        partOfSpeech: "noun",
        engWord: "set"
      },
      {
        word: "ba",
        IPA: "/ba/",
        partOfSpeech: "adverb",
        engWord: "right"
      },
      {
        word: "ba",
        IPA: "/baː/",
        partOfSpeech: "verb",
        engWord: "behave (well)"
      },
      {
        word: "baꝝe",
        IPA: "/baˈʔe/",
        partOfSpeech: "adjective",
        engWord: "gentle"
      },
      {
        word: "baꝝoꝷaeɏ",
        IPA: "/baˈʔoʈaej/",
        partOfSpeech: "noun",
        engWord: "woman"
      },
      {
        word: "baa",
        IPA: "/baˈa/",
        partOfSpeech: "noun",
        engWord: "boot"
      },
      {
        word: "baa",
        IPA: "/baːˈa/",
        partOfSpeech: "noun",
        engWord: "film"
      },
      {
        word: "baaɏ",
        IPA: "/baˈaj/",
        partOfSpeech: "adjective",
        engWord: "spare"
      },
      {
        word: "bab",
        IPA: "/bab/",
        partOfSpeech: "adjective",
        engWord: "mobile"
      },
      {
        word: "bab",
        IPA: "/baːb/",
        partOfSpeech: "noun",
        engWord: "parlour"
      },
      {
        word: "babi",
        IPA: "/baˈbiː/",
        partOfSpeech: "adjective",
        engWord: "gay"
      },
      {
        word: "babik",
        IPA: "/baːˈbiːk/",
        partOfSpeech: "adjective",
        engWord: "prestigious"
      },
      {
        word: "babiɏ",
        IPA: "/baˈbij/",
        partOfSpeech: "verb",
        engWord: "speculate"
      },
      {
        word: "babu",
        IPA: "/baˈbu/",
        partOfSpeech: "verb",
        engWord: "explore"
      },
      {
        word: "babu",
        IPA: "/baːˈbu/",
        partOfSpeech: "adjective",
        engWord: "sophisticated"
      },
      {
        word: "babu",
        IPA: "/baːˈbuː/",
        partOfSpeech: "verb",
        engWord: "smell (sense with nose)"
      },
      {
        word: "babuedek",
        IPA: "/baːˈbuːedek/",
        partOfSpeech: "noun",
        engWord: "junk"
      },
      {
        word: "babuꝭ",
        IPA: "/baˈbuʂ/",
        partOfSpeech: "verb",
        engWord: "anticipate"
      },
      {
        word: "baɥa",
        IPA: "/baˈʧaː/",
        partOfSpeech: "verb",
        engWord: "resent"
      },
      {
        word: "baɥeɏ",
        IPA: "/baˈʧej/",
        partOfSpeech: "adjective",
        engWord: "thorough"
      },
      {
        word: "baɥu",
        IPA: "/baˈʧuː/",
        partOfSpeech: "noun",
        engWord: "loaf"
      },
      {
        word: "baɥuɏ",
        IPA: "/baːˈʧuːj/",
        partOfSpeech: "verb",
        engWord: "insist"
      },
      {
        word: "bade",
        IPA: "/baˈde/",
        partOfSpeech: "verb",
        engWord: "accumulate"
      },
      {
        word: "baduꝭ",
        IPA: "/baˈduːʂ/",
        partOfSpeech: "adjective",
        engWord: "wide"
      },
      {
        word: "bae",
        IPA: "/baˈe/",
        partOfSpeech: "adverb",
        engWord: "just"
      },
      {
        word: "bage",
        IPA: "/baːˈge/",
        partOfSpeech: "noun",
        engWord: "mural"
      },
      {
        word: "bagimura",
        IPA: "/baˈgimuɽa/",
        partOfSpeech: "verb",
        engWord: "propel"
      },
      {
        word: "baha",
        IPA: "/baˈha/",
        partOfSpeech: "verb",
        engWord: "define"
      },
      {
        word: "baꝯab",
        IPA: "/baːˈʤab/",
        partOfSpeech: "noun",
        engWord: "examine"
      },
      {
        word: "baꝯe",
        IPA: "/baˈʤe/",
        partOfSpeech: "noun",
        engWord: "curator"
      },
      {
        word: "baꝯeɥuɥa",
        IPA: "/baˈʤeʧuːʧaː/",
        partOfSpeech: "adjective",
        engWord: "infinite"
      },
      {
        word: "baꝯeɏ",
        IPA: "/baˈʤej/",
        partOfSpeech: "adjective",
        engWord: "precise"
      },
      {
        word: "bak",
        IPA: "/baːk/",
        partOfSpeech: "noun",
        engWord: "talent"
      },
      {
        word: "baka",
        IPA: "/baˈka/",
        partOfSpeech: "preposition",
        engWord: "concerning"
      },
      {
        word: "bakak",
        IPA: "/baːˈkak/",
        partOfSpeech: "adjective",
        engWord: "pending"
      },
      {
        word: "bakaɲeka",
        IPA: "/baːˈkaɲeka/",
        partOfSpeech: "determiner",
        engWord: "enough"
      },
      {
        word: "bakaꝷaa",
        IPA: "/baːˈkaʈaa/",
        partOfSpeech: "noun",
        engWord: "matter"
      },
      {
        word: "bame",
        IPA: "/baˈme/",
        partOfSpeech: "noun",
        engWord: "angle, corner"
      },
      {
        word: "bameb",
        IPA: "/baˈmeb/",
        partOfSpeech: "verb",
        engWord: "jump",
        partOfSpeech2: "noun",
        engWord2: "jump"
      },
      {
        word: "bameɏ",
        IPA: "/baˈmej/",
        partOfSpeech: "verb",
        engWord: "point"
      },
      {
        word: "bamub",
        IPA: "/baˈmuːb/",
        partOfSpeech: "verb",
        engWord: "devise"
      },
      {
        word: "baꞃeꝯaɲaɏ",
        IPA: "/baːˈneʤaɲaj/",
        partOfSpeech: "verb",
        engWord: "reap"
      },
      {
        word: "baꞃu",
        IPA: "/baˈnuː/",
        partOfSpeech: "verb",
        engWord: "inhabit"
      },
      {
        word: "baɲa",
        IPA: "/baˈɲa/",
        partOfSpeech: "noun",
        engWord: "competition"
      },
      {
        word: "baɲa",
        IPA: "/baːˈɲa/",
        partOfSpeech: "noun",
        engWord: "platter"
      },
      {
        word: "baɲabibik",
        IPA: "/baːnˈjabiːbik/",
        partOfSpeech: "noun",
        engWord: "cave, hole"
      },
      {
        word: "baɲak",
        IPA: "/baːˈɲak/",
        partOfSpeech: "noun",
        engWord: "tag"
      },
      {
        word: "baɲeꝝeɲe",
        IPA: "/baːˈɲeʔeɲe/",
        partOfSpeech: "verb",
        engWord: "kill, murder"
      },
      {
        word: "baɲeraɥe",
        IPA: "/baˈɲeɽaʧe/",
        partOfSpeech: "noun",
        engWord: "aunt"
      },
      {
        word: "bara",
        IPA: "/baˈɽa/",
        partOfSpeech: "adjective",
        engWord: "naked"
      },
      {
        word: "baraamuɏ",
        IPA: "/baˈɽaamuj/",
        partOfSpeech: "verb",
        engWord: "provoke"
      },
      {
        word: "barabubu",
        IPA: "/baːˈɽaːbuːbuː/",
        partOfSpeech: "noun",
        engWord: "adjustment"
      },
      {
        word: "baꝭ",
        IPA: "/baʂ/",
        partOfSpeech: "verb",
        engWord: "combat"
      },
      {
        word: "baꝷa",
        IPA: "/baˈʈa/",
        partOfSpeech: "noun",
        engWord: "apology"
      },
      {
        word: "baꝷo",
        IPA: "/baˈʈo/",
        partOfSpeech: "noun",
        engWord: "king"
      },
      {
        word: "baɏ",
        IPA: "/baj/",
        partOfSpeech: "noun",
        engWord: "ball"
      },
      {
        word: "baɏ",
        IPA: "/baːj/",
        partOfSpeech: "adjective",
        engWord: "scared, afriad"
      },
      {
        word: "baɏaɲeꝷeɏ",
        IPA: "/baˈjaɲeʈej/",
        partOfSpeech: "verb",
        engWord: "bless"
      },
      {
        word: "be",
        IPA: "/be/",
        partOfSpeech: "adverb",
        engWord: "both"
      },
      {
        word: "be",
        IPA: "/beː/",
        partOfSpeech: "noun",
        engWord: "room (of house)"
      },
      {
        word: "beꝝ",
        IPA: "/beʔ/",
        partOfSpeech: "verb",
        engWord: "compete"
      },
      {
        word: "beꝝ",
        IPA: "/beːʔ/",
        partOfSpeech: "noun",
        engWord: "dungeon"
      },
      {
        word: "bea",
        IPA: "/beˈa/",
        partOfSpeech: "verb",
        engWord: "descend"
      },
      {
        word: "beaꝝ",
        IPA: "/beˈaʔ/",
        partOfSpeech: "noun",
        engWord: "rubbish"
      },
      {
        word: "beab",
        IPA: "/beˈab/",
        partOfSpeech: "adjective",
        engWord: "hollow"
      },
      {
        word: "beab",
        IPA: "/beːˈaːb/",
        partOfSpeech: "verb",
        engWord: "emphasise"
      },
      {
        word: "beb",
        IPA: "/beb/",
        partOfSpeech: "verb",
        engWord: "miss (not hit), miss (not take advantage of)"
      },
      {
        word: "beb",
        IPA: "/beːb/",
        partOfSpeech: "verb",
        engWord: "graduate"
      },
      {
        word: "bebi",
        IPA: "/beːˈbi/",
        partOfSpeech: "adjective",
        engWord: "viable"
      },
      {
        word: "bebu",
        IPA: "/beˈbuː/",
        partOfSpeech: "noun",
        engWord: "critique"
      },
      {
        word: "bebumebi",
        IPA: "/beːˈbumebi/",
        partOfSpeech: "verb",
        engWord: "curse"
      },
      {
        word: "beɥa",
        IPA: "/beˈʧaː/",
        partOfSpeech: "noun",
        engWord: "destination"
      },
      {
        word: "beɥe",
        IPA: "/beˈʧe/",
        partOfSpeech: "noun",
        engWord: "camera"
      },
      {
        word: "beɥe",
        IPA: "/beːˈʧe/",
        partOfSpeech: "adjective",
        engWord: "spontaneous"
      },
      {
        word: "bee",
        IPA: "/beˈeː/",
        partOfSpeech: "adjective",
        engWord: "alternate"
      },
      {
        word: "bee",
        IPA: "/beːˈe/",
        partOfSpeech: "noun",
        engWord: "farm"
      },
      {
        word: "begeꝝ",
        IPA: "/beˈgeʔ/",
        partOfSpeech: "noun",
        engWord: "stage"
      },
      {
        word: "begeꝝ",
        IPA: "/beːˈgeʔ/",
        partOfSpeech: "noun",
        engWord: "batch"
      },
      {
        word: "begguꝝ",
        IPA: "/begˈguːʔ/",
        partOfSpeech: "noun",
        engWord: "extreme"
      },
      {
        word: "begib",
        IPA: "/beˈgiːb/",
        partOfSpeech: "verb",
        engWord: "nod"
      },
      {
        word: "beꝯeb",
        IPA: "/beːˈʤeb/",
        partOfSpeech: "verb",
        engWord: "head"
      },
      {
        word: "bekab",
        IPA: "/beˈkab/",
        partOfSpeech: "verb",
        engWord: "behave (act)"
      },
      {
        word: "beki",
        IPA: "/beˈki/",
        partOfSpeech: "verb",
        engWord: "amend"
      },
      {
        word: "beꞃe",
        IPA: "/beˈne/",
        partOfSpeech: "noun",
        engWord: "arsenal"
      },
      {
        word: "beꞃeꝝ",
        IPA: "/beˈneʔ/",
        partOfSpeech: "verb",
        engWord: "expect"
      },
      {
        word: "beɲaꝝ",
        IPA: "/beˈɲaʔ/",
        partOfSpeech: "verb",
        engWord: "shave"
      },
      {
        word: "beɲabɏoɲa",
        IPA: "/beˈɲabjonja/",
        partOfSpeech: "verb",
        engWord: "fascinate"
      },
      {
        word: "beɲeb",
        IPA: "/beˈɲeb/",
        partOfSpeech: "number",
        engWord: "five"
      },
      {
        word: "bepa",
        IPA: "/beˈpaː/",
        partOfSpeech: "noun",
        engWord: "material"
      },
      {
        word: "berab",
        IPA: "/beːˈɽab/",
        partOfSpeech: "verb",
        engWord: "clip"
      },
      {
        word: "beꝷa",
        IPA: "/beˈʈa/",
        partOfSpeech: "verb",
        engWord: "disrupt"
      },
      {
        word: "beꝷab",
        IPA: "/beˈʈab/",
        partOfSpeech: "noun",
        engWord: "irony"
      },
      {
        word: "beꝷaduꝷe",
        IPA: "/beˈʈaduːʈe/",
        partOfSpeech: "noun",
        engWord: "prison"
      },
      {
        word: "beꝷe",
        IPA: "/beˈʈe/",
        partOfSpeech: "noun",
        engWord: "voyage"
      },
      {
        word: "beꝷeꝝ",
        IPA: "/beːˈʈeʔ/",
        partOfSpeech: "adjective",
        engWord: "blue"
      },
      {
        word: "beꝷeb",
        IPA: "/beːˈʈeb/",
        partOfSpeech: "verb",
        engWord: "invent"
      },
      {
        word: "beu",
        IPA: "/beˈuː/",
        partOfSpeech: "verb",
        engWord: "provide"
      },
      {
        word: "bi",
        IPA: "/bi/",
        partOfSpeech: "noun",
        engWord: "boy"
      },
      {
        word: "bi",
        IPA: "/biː/",
        partOfSpeech: "verb",
        engWord: "look"
      },
      {
        word: "biꝝe",
        IPA: "/biːˈʔe/",
        partOfSpeech: "adjective",
        engWord: "plausible"
      },
      {
        word: "biꝝeemuk",
        IPA: "/biːˈʔeemuk/",
        partOfSpeech: "verb",
        engWord: "grow"
      },
      {
        word: "biꝝeỻ",
        IPA: "/biːˈʔeːɭ/",
        partOfSpeech: "verb",
        engWord: "deposit"
      },
      {
        word: "biꝝeɏ",
        IPA: "/biˈʔej/",
        partOfSpeech: "verb",
        engWord: "flee"
      },
      {
        word: "bia",
        IPA: "/biˈa/",
        partOfSpeech: "noun",
        engWord: "gravity"
      },
      {
        word: "bia",
        IPA: "/biˈaː/",
        partOfSpeech: "verb",
        engWord: "crave"
      },
      {
        word: "biaraka",
        IPA: "/biːˈaɽaka/",
        partOfSpeech: "noun",
        engWord: "proliferation"
      },
      {
        word: "bibi",
        IPA: "/biːˈbi/",
        partOfSpeech: "noun",
        engWord: "company"
      },
      {
        word: "bibi",
        IPA: "/biːˈbiː/",
        partOfSpeech: "noun",
        engWord: "environment"
      },
      {
        word: "bibiɥuguk",
        IPA: "/biˈbiːʧuːguːk/",
        partOfSpeech: "noun",
        engWord: "broth"
      },
      {
        word: "bibiỻ",
        IPA: "/biːˈbiːɭ/",
        partOfSpeech: "noun",
        engWord: "comet"
      },
      {
        word: "bibu",
        IPA: "/biˈbu/",
        partOfSpeech: "verb",
        engWord: "certify"
      },
      {
        word: "bibu",
        IPA: "/biːˈbu/",
        partOfSpeech: "verb",
        engWord: "arrange"
      },
      {
        word: "bibuk",
        IPA: "/biˈbuk/",
        partOfSpeech: "verb",
        engWord: "marry"
      },
      {
        word: "biɥe",
        IPA: "/biːˈʧe/",
        partOfSpeech: "verb",
        engWord: "deem"
      },
      {
        word: "biɥi",
        IPA: "/biːˈʧiː/",
        partOfSpeech: "noun",
        engWord: "recession"
      },
      {
        word: "biɥu",
        IPA: "/biˈʧuː/",
        partOfSpeech: "verb",
        engWord: "classify"
      },
      {
        word: "biɥu",
        IPA: "/biːˈʧu/",
        partOfSpeech: "adjective",
        engWord: "dubious"
      },
      {
        word: "biɥuagi",
        IPA: "/biːˈʧuagiː/",
        partOfSpeech: "noun",
        engWord: "cafeteria"
      },
      {
        word: "biɥuk",
        IPA: "/biːˈʧuːk/",
        partOfSpeech: "noun",
        engWord: "elimination"
      },
      {
        word: "biggabuɲa",
        IPA: "/biːgˈgaːbuɲa/",
        partOfSpeech: "adjective",
        engWord: "immune"
      },
      {
        word: "bigi",
        IPA: "/biːˈgiː/",
        partOfSpeech: "noun",
        engWord: "gravel"
      },
      {
        word: "bigiɥubik",
        IPA: "/biːˈgiːʧubik/",
        partOfSpeech: "noun",
        engWord: "marketing"
      },
      {
        word: "biguaꝯe",
        IPA: "/biˈguaʤe/",
        partOfSpeech: "interjection",
        engWord: "okay"
      },
      {
        word: "biha",
        IPA: "/biːˈha/",
        partOfSpeech: "number",
        engWord: "nine"
      },
      {
        word: "biꝯaɏ",
        IPA: "/biːˈʤaj/",
        partOfSpeech: "verb",
        engWord: "tie"
      },
      {
        word: "biꝯe",
        IPA: "/biˈʤe/",
        partOfSpeech: "adverb",
        engWord: "tight"
      },
      {
        word: "biꝯe",
        IPA: "/biːˈʤe/",
        partOfSpeech: "verb",
        engWord: "recommend"
      },
      {
        word: "biꝯo",
        IPA: "/biˈʤo/",
        partOfSpeech: "noun",
        engWord: "chain"
      },
      {
        word: "bik",
        IPA: "/biːk/",
        partOfSpeech: "noun",
        engWord: "show"
      },
      {
        word: "bika",
        IPA: "/biˈkaː/",
        partOfSpeech: "noun",
        engWord: "pyramid"
      },
      {
        word: "bika",
        IPA: "/biːˈka/",
        partOfSpeech: "noun",
        engWord: "prejudice"
      },
      {
        word: "bikaɥudeɏ",
        IPA: "/biːˈkaːʧuːdej/",
        partOfSpeech: "adverb",
        engWord: "sudden"
      },
      {
        word: "bikaỻ",
        IPA: "/biːˈkaɭ/",
        partOfSpeech: "noun",
        engWord: "school"
      },
      {
        word: "bikam",
        IPA: "/biˈkam/",
        partOfSpeech: "noun",
        engWord: "tee"
      },
      {
        word: "bikiɏ",
        IPA: "/biˈkij/",
        partOfSpeech: "noun",
        engWord: "maid"
      },
      {
        word: "bikuɏ",
        IPA: "/biːˈkuːj/",
        partOfSpeech: "noun",
        engWord: "coin"
      },
      {
        word: "biỻ",
        IPA: "/biːɭ/",
        partOfSpeech: "noun",
        engWord: "rag"
      },
      {
        word: "bim",
        IPA: "/bim/",
        partOfSpeech: "noun",
        engWord: "door"
      },
      {
        word: "bim",
        IPA: "/biːm/",
        partOfSpeech: "noun",
        engWord: "market"
      },
      {
        word: "bimeỻ",
        IPA: "/biːˈmeɭ/",
        partOfSpeech: "noun",
        engWord: "solo"
      },
      {
        word: "bimi",
        IPA: "/biːˈmiː/",
        partOfSpeech: "noun",
        engWord: "receipt"
      },
      {
        word: "bimukuꝷka",
        IPA: "/biːˈmukuːtka/",
        partOfSpeech: "r.",
        engWord: "upward"
      },
      {
        word: "biꞃe",
        IPA: "/biˈne/",
        partOfSpeech: "adjective",
        engWord: "fierce"
      },
      {
        word: "biꞃeɏ",
        IPA: "/biˈnej/",
        partOfSpeech: "noun",
        engWord: "institute"
      },
      {
        word: "biɲa",
        IPA: "/biːˈɲa/",
        partOfSpeech: "adjective",
        engWord: "stupid"
      },
      {
        word: "biɲak",
        IPA: "/biːˈɲak/",
        partOfSpeech: "noun",
        engWord: "brochure"
      },
      {
        word: "biɲe",
        IPA: "/biˈɲe/",
        partOfSpeech: "verb",
        engWord: "reform"
      },
      {
        word: "biraỻ",
        IPA: "/biːˈɽaɭ/",
        partOfSpeech: "verb",
        engWord: "sway"
      },
      {
        word: "biraɏ",
        IPA: "/biːˈɽaːj/",
        partOfSpeech: "adverb",
        engWord: "up"
      },
      {
        word: "biꝭaɏ",
        IPA: "/biːˈʂaj/",
        partOfSpeech: "verb",
        engWord: "calculate"
      },
      {
        word: "biꝷa",
        IPA: "/biːˈʈa/",
        partOfSpeech: "noun",
        engWord: "adult"
      },
      {
        word: "biꝷaɥuꞃu",
        IPA: "/biˈʈaʧunu/",
        partOfSpeech: "adjective",
        engWord: "petty"
      },
      {
        word: "biꝷak",
        IPA: "/biːˈʈak/",
        partOfSpeech: "noun",
        engWord: "castle"
      },
      {
        word: "biꝷaɏ",
        IPA: "/biˈʈaj/",
        partOfSpeech: "noun",
        engWord: "riot"
      },
      {
        word: "biꝷaɏ",
        IPA: "/biːˈʈaj/",
        partOfSpeech: "adjective",
        engWord: "dumb"
      },
      {
        word: "biꝷem",
        IPA: "/biːˈʈeːm/",
        partOfSpeech: "noun",
        engWord: "culture"
      },
      {
        word: "biꝷkaɏ",
        IPA: "/bitˈkaj/",
        partOfSpeech: "noun",
        engWord: "specimen"
      },
      {
        word: "biꝷo",
        IPA: "/biˈʈo/",
        partOfSpeech: "noun",
        engWord: "current"
      },
      {
        word: "biꝷom",
        IPA: "/biˈʈom/",
        partOfSpeech: "verb",
        engWord: "foster"
      },
      {
        word: "biꝷu",
        IPA: "/biˈtu/",
        partOfSpeech: "noun",
        engWord: "title"
      },
      {
        word: "biꝷu",
        IPA: "/biːˈtu/",
        partOfSpeech: "noun",
        engWord: "relationship"
      },
      {
        word: "biꝷuɲeꞃdek",
        IPA: "/biːˈtuɲendek/",
        partOfSpeech: "preposition",
        engWord: "at"
      },
      {
        word: "biuꞃeme",
        IPA: "/biːˈuːneme/",
        partOfSpeech: "noun",
        engWord: "prophet"
      },
      {
        word: "biɏ",
        IPA: "/bij/",
        partOfSpeech: "noun",
        engWord: "lock"
      },
      {
        word: "biɏ",
        IPA: "/biːj/",
        partOfSpeech: "noun",
        engWord: "world"
      },
      {
        word: "biɏak",
        IPA: "/biˈjak/",
        partOfSpeech: "noun",
        engWord: "religion"
      },
      {
        word: "biɏam",
        IPA: "/biːˈjam/",
        partOfSpeech: "verb",
        engWord: "hunt",
        partOfSpeech2: "noun",
        engWord2: "hunt"
      },
      {
        word: "bo",
        IPA: "/bo/",
        partOfSpeech: "determiner",
        engWord: "more"
      },
      {
        word: "bo",
        IPA: "/bo/",
        partOfSpeech: "pronoun",
        engWord: "I"
      },
      {
        word: "bo hi",
        IPA: "/bo hiː/",
        partOfSpeech: "pronoun",
        engWord: "to me"
      },
      {
        word: "bo pu",
        IPA: "/bo puː/",
        partOfSpeech: "pronoun",
        engWord: "mine"
      },
      {
        word: "boꝝ",
        IPA: "/boʔ/",
        partOfSpeech: "adverb",
        engWord: "never"
      },
      {
        word: "boꝝe",
        IPA: "/boˈʔe/",
        partOfSpeech: "noun",
        engWord: "dispute"
      },
      {
        word: "boꝝeb",
        IPA: "/boˈʔeb/",
        partOfSpeech: "noun",
        engWord: "danger"
      },
      {
        word: "boab",
        IPA: "/boˈab/",
        partOfSpeech: "noun",
        engWord: "tiger"
      },
      {
        word: "boaꝯeꝭa",
        IPA: "/boˈaʤeʂa/",
        partOfSpeech: "verb",
        engWord: "conceal"
      },
      {
        word: "boamuꝷa",
        IPA: "/boˈamuʈa/",
        partOfSpeech: "noun",
        engWord: "lesbian"
      },
      {
        word: "bob",
        IPA: "/bob/",
        partOfSpeech: "verb",
        engWord: "respect",
        partOfSpeech2: "noun",
        engWord2: "respect"
      },
      {
        word: "bobaꝝ",
        IPA: "/boˈbaːʔ/",
        partOfSpeech: "adjective",
        engWord: "stubborn"
      },
      {
        word: "bobi",
        IPA: "/boˈbiː/",
        partOfSpeech: "verb",
        engWord: "scratch"
      },
      {
        word: "bobiꝝ",
        IPA: "/boˈbiːʔ/",
        partOfSpeech: "noun",
        engWord: "adolescent"
      },
      {
        word: "bobiɥuaꝭ",
        IPA: "/boˈbiːʧuaʂ/",
        partOfSpeech: "adjective",
        engWord: "cruel"
      },
      {
        word: "bobimimuꝝ",
        IPA: "/boˈbimiːmuʔ/",
        partOfSpeech: "noun",
        engWord: "medium"
      },
      {
        word: "bobu",
        IPA: "/boˈbu/",
        partOfSpeech: "noun",
        engWord: "court"
      },
      {
        word: "bobu",
        IPA: "/boˈbuː/",
        partOfSpeech: "verb",
        engWord: "vomit"
      },
      {
        word: "bobuꝝ",
        IPA: "/boˈbuːʔ/",
        partOfSpeech: "noun",
        engWord: "orgasm"
      },
      {
        word: "bobub",
        IPA: "/boˈbuːb/",
        partOfSpeech: "noun",
        engWord: "basket"
      },
      {
        word: "boɥaꝝ",
        IPA: "/boˈʧaːʔ/",
        partOfSpeech: "noun",
        engWord: "skillet"
      },
      {
        word: "boɥiꝝ",
        IPA: "/boˈʧiːʔ/",
        partOfSpeech: "noun",
        engWord: "remains"
      },
      {
        word: "boɥiiɥi",
        IPA: "/boˈʧiiʧi/",
        partOfSpeech: "adverb",
        engWord: "down"
      },
      {
        word: "boɥiꝷaɲa",
        IPA: "/boˈʧiːʈaɲa/",
        partOfSpeech: "noun",
        engWord: "thunder"
      },
      {
        word: "boɥu",
        IPA: "/boˈʧu/",
        partOfSpeech: "noun",
        engWord: "bowl"
      },
      {
        word: "boɥu",
        IPA: "/boˈʧuː/",
        partOfSpeech: "noun",
        engWord: "foundation"
      },
      {
        word: "boɥuɥubiꝝ",
        IPA: "/boˈʧuːʧuːbiʔ/",
        partOfSpeech: "verb",
        engWord: "abandon"
      },
      {
        word: "boɥuuꝷuꝝ",
        IPA: "/boˈʧuuːtuʔ/",
        partOfSpeech: "verb",
        engWord: "rape"
      },
      {
        word: "bode",
        IPA: "/boˈde/",
        partOfSpeech: "noun",
        engWord: "memo"
      },
      {
        word: "boe",
        IPA: "/boˈe/",
        partOfSpeech: "adjective",
        engWord: "safe"
      },
      {
        word: "boge",
        IPA: "/boˈge/",
        partOfSpeech: "adjective",
        engWord: "offensive"
      },
      {
        word: "bogeꝭ",
        IPA: "/boˈgeʂ/",
        partOfSpeech: "adverb",
        engWord: "that"
      },
      {
        word: "bogib",
        IPA: "/boˈgiːb/",
        partOfSpeech: "noun",
        engWord: "broom"
      },
      {
        word: "boha",
        IPA: "/boˈha/",
        partOfSpeech: "verb",
        engWord: "breathe",
        partOfSpeech2: "noun",
        engWord2: "breath"
      },
      {
        word: "bohaꞃeɲa",
        IPA: "/boˈhaneɲaː/",
        partOfSpeech: "verb",
        engWord: "lurk"
      },
      {
        word: "bohaꝭ",
        IPA: "/boˈhaʂ/",
        partOfSpeech: "verb",
        engWord: "predict"
      },
      {
        word: "boiꝝekuꝭ",
        IPA: "/boˈiʔekuːʂ/",
        partOfSpeech: "noun",
        engWord: "craft"
      },
      {
        word: "boꝯa",
        IPA: "/boˈʤa/",
        partOfSpeech: "noun",
        engWord: "layout"
      },
      {
        word: "boꝯe",
        IPA: "/boˈʤe/",
        partOfSpeech: "interjection",
        engWord: "yes"
      },
      {
        word: "boꝯeꝝeꝷaꝭ",
        IPA: "/boˈʤeʔeʈaʂ/",
        partOfSpeech: "verb",
        engWord: "brief"
      },
      {
        word: "boꝯeɲeɲa",
        IPA: "/boˈʤeɲeɲa/",
        partOfSpeech: "noun",
        engWord: "tree, wood"
      },
      {
        word: "boꝯeꝭ",
        IPA: "/boˈʤeːʂ/",
        partOfSpeech: "determiner",
        engWord: "which"
      },
      {
        word: "boꝯo",
        IPA: "/boˈʤo/",
        partOfSpeech: "noun",
        engWord: "visa"
      },
      {
        word: "boka",
        IPA: "/boˈka/",
        partOfSpeech: "noun",
        engWord: "peasant"
      },
      {
        word: "boka",
        IPA: "/boˈkaː/",
        partOfSpeech: "noun",
        engWord: "child"
      },
      {
        word: "bokab",
        IPA: "/boˈkab/",
        partOfSpeech: "verb",
        engWord: "protect"
      },
      {
        word: "boki",
        IPA: "/boˈki/",
        partOfSpeech: "adjective",
        engWord: "notorious"
      },
      {
        word: "bokiꝭ",
        IPA: "/boˈkiʂ/",
        partOfSpeech: "verb",
        engWord: "avert"
      },
      {
        word: "bome",
        IPA: "/boˈme/",
        partOfSpeech: "noun",
        engWord: "strap"
      },
      {
        word: "bomeꝝ",
        IPA: "/boˈmeʔ/",
        partOfSpeech: "verb",
        engWord: "limp"
      },
      {
        word: "bomeꝭ",
        IPA: "/boˈmeʂ/",
        partOfSpeech: "noun",
        engWord: "metro"
      },
      {
        word: "bomi",
        IPA: "/boˈmiː/",
        partOfSpeech: "noun",
        engWord: "government"
      },
      {
        word: "bomib",
        IPA: "/boˈmiːb/",
        partOfSpeech: "noun",
        engWord: "spice"
      },
      {
        word: "bomiꝭ",
        IPA: "/boˈmiʂ/",
        partOfSpeech: "verb",
        engWord: "stick"
      },
      {
        word: "bomu",
        IPA: "/boˈmu/",
        partOfSpeech: "noun",
        engWord: "accommodation"
      },
      {
        word: "boꞃde",
        IPA: "/bonˈde/",
        partOfSpeech: "conjunction",
        engWord: "not"
      },
      {
        word: "boꞃe",
        IPA: "/boˈne/",
        partOfSpeech: "noun",
        engWord: "funeral"
      },
      {
        word: "boꞃu",
        IPA: "/boˈnu/",
        partOfSpeech: "noun",
        engWord: "skill"
      },
      {
        word: "boꞃub",
        IPA: "/boˈnub/",
        partOfSpeech: "noun",
        engWord: "canoe"
      },
      {
        word: "boɲa",
        IPA: "/bonˈja/",
        partOfSpeech: "noun",
        engWord: "hierarchy"
      },
      {
        word: "boɲa",
        IPA: "/boˈɲa/",
        partOfSpeech: "adjective",
        engWord: "small"
      },
      {
        word: "boɲaꝝ",
        IPA: "/boˈɲaʔ/",
        partOfSpeech: "noun",
        engWord: "kitchen"
      },
      {
        word: "boɲab",
        IPA: "/boˈɲab/",
        partOfSpeech: "preposition",
        engWord: "after"
      },
      {
        word: "boɲe",
        IPA: "/boˈɲe/",
        partOfSpeech: "noun",
        engWord: "snow",
        partOfSpeech2: "verb",
        engWord2: "snow"
      },
      {
        word: "boɲeb",
        IPA: "/boˈɲeb/",
        partOfSpeech: "verb",
        engWord: "usher"
      },
      {
        word: "boɲo",
        IPA: "/boˈɲo/",
        partOfSpeech: "verb",
        engWord: "draw"
      },
      {
        word: "boɲob",
        IPA: "/boˈɲob/",
        partOfSpeech: "noun",
        engWord: "idiot"
      },
      {
        word: "booꝝ",
        IPA: "/boˈoʔ/",
        partOfSpeech: "noun",
        engWord: "earring"
      },
      {
        word: "bora",
        IPA: "/boˈɽa/",
        partOfSpeech: "verb",
        engWord: "confer"
      },
      {
        word: "boꝭ",
        IPA: "/boʂ/",
        partOfSpeech: "noun",
        engWord: "bark (of tree)"
      },
      {
        word: "boꝭo",
        IPA: "/boˈʂo/",
        partOfSpeech: "verb",
        engWord: "lie"
      },
      {
        word: "boꝭoeeꝝ",
        IPA: "/boˈʂoeeʔ/",
        partOfSpeech: "noun",
        engWord: "cheese"
      },
      {
        word: "boꝷa",
        IPA: "/boˈʈa/",
        partOfSpeech: "adjective",
        engWord: "vacant"
      },
      {
        word: "boꝷaꝝ",
        IPA: "/boˈʈaʔ/",
        partOfSpeech: "adjective",
        engWord: "subjective"
      },
      {
        word: "boꝷaꝝede",
        IPA: "/boˈʈaʔede/",
        partOfSpeech: "verb",
        engWord: "betray"
      },
      {
        word: "boꝷaeꞃe",
        IPA: "/boˈʈaene/",
        partOfSpeech: "noun",
        engWord: "seed, grain"
      },
      {
        word: "boꝷakaꞃe",
        IPA: "/boˈʈakane/",
        partOfSpeech: "verb",
        engWord: "pierce"
      },
      {
        word: "boꝷaꝭ",
        IPA: "/boˈʈaʂ/",
        partOfSpeech: "noun",
        engWord: "present (gift)"
      },
      {
        word: "boꝷe",
        IPA: "/boˈʈe/",
        partOfSpeech: "determiner",
        engWord: "whose"
      },
      {
        word: "boꝷe",
        IPA: "/boˈʈeː/",
        partOfSpeech: "verb",
        engWord: "nurture"
      },
      {
        word: "boꝷeb",
        IPA: "/boˈʈeb/",
        partOfSpeech: "adjective",
        engWord: "simultaneous"
      },
      {
        word: "boꝷebuꞃe",
        IPA: "/boˈʈebune/",
        partOfSpeech: "adverb",
        engWord: "lately"
      },
      {
        word: "boꝷeɲebuꝭ",
        IPA: "/boˈʈeɲebuːʂ/",
        partOfSpeech: "adjective",
        engWord: "fond"
      },
      {
        word: "boꝷeꝷaꝷe",
        IPA: "/boˈʈeʈaʈe/",
        partOfSpeech: "verb",
        engWord: "render"
      },
      {
        word: "boꝷeꝷubuꝝ",
        IPA: "/boˈʈetubuːʔ/",
        partOfSpeech: "adjective",
        engWord: "mere"
      },
      {
        word: "boꝷkaꝝebu",
        IPA: "/botˈkaʔebu/",
        partOfSpeech: "adjective",
        engWord: "passive"
      },
      {
        word: "boꝷokamuꝭ",
        IPA: "/boˈʈokamuʂ/",
        partOfSpeech: "noun",
        engWord: "wealth"
      },
      {
        word: "boꝷu",
        IPA: "/boˈtu/",
        partOfSpeech: "noun",
        engWord: "bread"
      },
      {
        word: "bou",
        IPA: "/boˈuː/",
        partOfSpeech: "pronoun",
        engWord: "somebody"
      },
      {
        word: "bouɲeꞃe",
        IPA: "/boˈuːɲeːne/",
        partOfSpeech: "adjective",
        engWord: "amazing"
      },
      {
        word: "bouraa",
        IPA: "/boˈuɽaaː/",
        partOfSpeech: "verb",
        engWord: "import"
      },
      {
        word: "boɏab",
        IPA: "/boˈjab/",
        partOfSpeech: "verb",
        engWord: "crunch"
      },
      {
        word: "bu",
        IPA: "/bu/",
        partOfSpeech: "adjective",
        engWord: "different"
      },
      {
        word: "bu",
        IPA: "/buː/",
        partOfSpeech: "noun",
        engWord: "question",
        partOfSpeech2: "verb",
        engWord2: "question"
      },
      {
        word: "buꝝ",
        IPA: "/buʔ/",
        partOfSpeech: "pronoun",
        engWord: "me"
      },
      {
        word: "buꝝ",
        IPA: "/buʔ/",
        partOfSpeech: "verb",
        engWord: "check"
      },
      {
        word: "buꝝ",
        IPA: "/buːʔ/",
        partOfSpeech: "noun",
        engWord: "weight"
      },
      {
        word: "buꝝe",
        IPA: "/buˈʔe/",
        partOfSpeech: "verb",
        engWord: "crumble"
      },
      {
        word: "buꝝe",
        IPA: "/buːˈʔe/",
        partOfSpeech: "verb",
        engWord: "rely"
      },
      {
        word: "buꝝeaɥeꝝ",
        IPA: "/buːˈʔeaʧeʔ/",
        partOfSpeech: "noun",
        engWord: "echo"
      },
      {
        word: "buꝝeꝯekaꝝ",
        IPA: "/buːˈʔeʤeːkaʔ/",
        partOfSpeech: "noun",
        engWord: "locker"
      },
      {
        word: "buꝝeỻ",
        IPA: "/buˈʔeɭ/",
        partOfSpeech: "verb",
        engWord: "contain"
      },
      {
        word: "buꝝeɏ",
        IPA: "/buːˈʔej/",
        partOfSpeech: "noun",
        engWord: "approach"
      },
      {
        word: "buꝝo",
        IPA: "/buːˈʔo/",
        partOfSpeech: "adjective",
        engWord: "insane"
      },
      {
        word: "bua",
        IPA: "/buˈa/",
        partOfSpeech: "noun",
        engWord: "struggle"
      },
      {
        word: "bua",
        IPA: "/buːˈaː/",
        partOfSpeech: "verb",
        engWord: "withstand"
      },
      {
        word: "buaꝝ",
        IPA: "/buˈaʔ/",
        partOfSpeech: "noun",
        engWord: "hug"
      },
      {
        word: "buaꝯeꝷug",
        IPA: "/buˈaʤetug/",
        partOfSpeech: "verb",
        engWord: "retire"
      },
      {
        word: "buak",
        IPA: "/buːˈak/",
        partOfSpeech: "verb",
        engWord: "circulate"
      },
      {
        word: "buaỻ",
        IPA: "/buːˈaɭ/",
        partOfSpeech: "noun",
        engWord: "upper class"
      },
      {
        word: "buam",
        IPA: "/buˈam/",
        partOfSpeech: "verb",
        engWord: "shout"
      },
      {
        word: "buaꝷeꝯa",
        IPA: "/buˈaːʈeʤa/",
        partOfSpeech: "noun",
        engWord: "grandmother"
      },
      {
        word: "buaɏ",
        IPA: "/buːˈaj/",
        partOfSpeech: "adjective",
        engWord: "damn"
      },
      {
        word: "bub",
        IPA: "/buːb/",
        partOfSpeech: "adjective",
        engWord: "real"
      },
      {
        word: "buba",
        IPA: "/buˈbaː/",
        partOfSpeech: "noun",
        engWord: "bow (weapon)"
      },
      {
        word: "bubaꝝ",
        IPA: "/buːˈbaːʔ/",
        partOfSpeech: "noun",
        engWord: "feat"
      },
      {
        word: "bubi",
        IPA: "/buˈbi/",
        partOfSpeech: "noun",
        engWord: "lake"
      },
      {
        word: "bubi",
        IPA: "/buːˈbiː/",
        partOfSpeech: "noun",
        engWord: "authority"
      },
      {
        word: "bubibiɲek",
        IPA: "/buˈbiːbiːɲek/",
        partOfSpeech: "noun",
        engWord: "posture"
      },
      {
        word: "bubik",
        IPA: "/buːˈbiːk/",
        partOfSpeech: "noun",
        engWord: "trip"
      },
      {
        word: "bubim",
        IPA: "/buˈbim/",
        partOfSpeech: "noun",
        engWord: "permission"
      },
      {
        word: "bubiɏ",
        IPA: "/buːˈbij/",
        partOfSpeech: "noun",
        engWord: "chemical"
      },
      {
        word: "bubu",
        IPA: "/buˈbu/",
        partOfSpeech: "adjective",
        engWord: "rigid"
      },
      {
        word: "bubu",
        IPA: "/buˈbuː/",
        partOfSpeech: "noun",
        engWord: "resident"
      },
      {
        word: "bubu",
        IPA: "/buːˈbuː/",
        partOfSpeech: "noun",
        engWord: "poison"
      },
      {
        word: "bubuꝝ",
        IPA: "/buːˈbuʔ/",
        partOfSpeech: "adjective",
        engWord: "marine"
      },
      {
        word: "bubub",
        IPA: "/buːˈbub/",
        partOfSpeech: "verb",
        engWord: "smash"
      },
      {
        word: "bubuɥikag",
        IPA: "/buˈbuːʧiːkag/",
        partOfSpeech: "noun",
        engWord: "disgust"
      },
      {
        word: "bubuggubuỻ",
        IPA: "/buˈbuːgguːbuɭ/",
        partOfSpeech: "adjective",
        engWord: "classic"
      },
      {
        word: "bubuỻ",
        IPA: "/buˈbuɭ/",
        partOfSpeech: "noun",
        engWord: "fool"
      },
      {
        word: "bubuỻ",
        IPA: "/buːˈbuɭ/",
        partOfSpeech: "noun",
        engWord: "mist"
      },
      {
        word: "bubuɏaa",
        IPA: "/buːˈbujaa/",
        partOfSpeech: "noun",
        engWord: "area"
      },
      {
        word: "bubɏo",
        IPA: "/buˈbjo/",
        partOfSpeech: "noun",
        engWord: "cart"
      },
      {
        word: "bubɏoỻ",
        IPA: "/buˈbjoɭ/",
        partOfSpeech: "noun",
        engWord: "footprint"
      },
      {
        word: "buɥa",
        IPA: "/buˈʧaː/",
        partOfSpeech: "noun",
        engWord: "appliance"
      },
      {
        word: "buɥa",
        IPA: "/buːˈʧaː/",
        partOfSpeech: "noun",
        engWord: "sand"
      },
      {
        word: "buɥeebu",
        IPA: "/buːˈʧeeːbuː/",
        partOfSpeech: "noun",
        engWord: "local"
      },
      {
        word: "buɥikaraɏ",
        IPA: "/buːˈʧiːkaɽaːj/",
        partOfSpeech: "noun",
        engWord: "winter"
      },
      {
        word: "buɥu",
        IPA: "/buːˈʧu/",
        partOfSpeech: "verb",
        engWord: "chop"
      },
      {
        word: "buɥuỻ",
        IPA: "/buːˈʧuɭ/",
        partOfSpeech: "noun",
        engWord: "ally"
      },
      {
        word: "bude",
        IPA: "/buˈde/",
        partOfSpeech: "noun",
        engWord: "hike"
      },
      {
        word: "budek",
        IPA: "/buːˈdek/",
        partOfSpeech: "noun",
        engWord: "louse"
      },
      {
        word: "budekagu",
        IPA: "/buːˈdekaːgu/",
        partOfSpeech: "adverb",
        engWord: "indeed"
      },
      {
        word: "budeỻ",
        IPA: "/buˈdeɭ/",
        partOfSpeech: "noun",
        engWord: "marathon"
      },
      {
        word: "budeꞃ",
        IPA: "/buːˈden/",
        partOfSpeech: "adjective",
        engWord: "special"
      },
      {
        word: "buderaꝷe",
        IPA: "/buːˈdeɽaːʈe/",
        partOfSpeech: "noun",
        engWord: "parcel"
      },
      {
        word: "buduỻ",
        IPA: "/buːˈduːɭ/",
        partOfSpeech: "noun",
        engWord: "program"
      },
      {
        word: "bue",
        IPA: "/buːˈe/",
        partOfSpeech: "verb",
        engWord: "wander"
      },
      {
        word: "bug",
        IPA: "/bug/",
        partOfSpeech: "verb",
        engWord: "come"
      },
      {
        word: "buge",
        IPA: "/buːˈge/",
        partOfSpeech: "adjective",
        engWord: "compact"
      },
      {
        word: "bugemuꝷa",
        IPA: "/buːˈgemuʈa/",
        partOfSpeech: "noun",
        engWord: "gauge"
      },
      {
        word: "bugi",
        IPA: "/buˈgiː/",
        partOfSpeech: "noun",
        engWord: "cup"
      },
      {
        word: "bugiꝭaa",
        IPA: "/buˈgiːʂaa/",
        partOfSpeech: "adverb",
        engWord: "close"
      },
      {
        word: "bugugue",
        IPA: "/buːˈgugue/",
        partOfSpeech: "noun",
        engWord: "swamp"
      },
      {
        word: "buguỻ",
        IPA: "/buˈguɭ/",
        partOfSpeech: "noun",
        engWord: "character"
      },
      {
        word: "buguỻ",
        IPA: "/buːˈguɭ/",
        partOfSpeech: "noun",
        engWord: "pain"
      },
      {
        word: "buhak",
        IPA: "/buːˈhak/",
        partOfSpeech: "noun",
        engWord: "coffee"
      },
      {
        word: "buhaɏ",
        IPA: "/buːˈhaj/",
        partOfSpeech: "adverb",
        engWord: "yet"
      },
      {
        word: "bui",
        IPA: "/buˈi/",
        partOfSpeech: "noun",
        engWord: "barbecue"
      },
      {
        word: "bui",
        IPA: "/buːˈiː/",
        partOfSpeech: "noun",
        engWord: "bill"
      },
      {
        word: "buꝯaaka",
        IPA: "/buːˈʤaaːka/",
        partOfSpeech: "adverb",
        engWord: "tonight"
      },
      {
        word: "buꝯe",
        IPA: "/buˈʤe/",
        partOfSpeech: "noun",
        engWord: "battle",
        partOfSpeech2: "verb",
        engWord2: "battle"
      },
      {
        word: "buꝯe",
        IPA: "/buːˈʤe/",
        partOfSpeech: "verb",
        engWord: "brake"
      },
      {
        word: "buꝯek",
        IPA: "/buːˈʤeːk/",
        partOfSpeech: "noun",
        engWord: "cabbage"
      },
      {
        word: "buꝯeỻ",
        IPA: "/buˈʤeɭ/",
        partOfSpeech: "noun",
        engWord: "powder"
      },
      {
        word: "buꝯoỻ",
        IPA: "/buːˈʤoɭ/",
        partOfSpeech: "noun",
        engWord: "smoke, dust"
      },
      {
        word: "buk",
        IPA: "/buk/",
        partOfSpeech: "verb",
        engWord: "kidnap"
      },
      {
        word: "buk",
        IPA: "/buːk/",
        partOfSpeech: "noun",
        engWord: "transplant"
      },
      {
        word: "buka",
        IPA: "/buˈka/",
        partOfSpeech: "verb",
        engWord: "grip",
        partOfSpeech2: "noun",
        engWord2: "grip"
      },
      {
        word: "bukaꝝemiꝝ",
        IPA: "/buːˈkaːʔemiːʔ/",
        partOfSpeech: "noun",
        engWord: "percent"
      },
      {
        word: "bukaỻ",
        IPA: "/buˈkaɭ/",
        partOfSpeech: "adjective",
        engWord: "nervous"
      },
      {
        word: "bukaỻ",
        IPA: "/buˈkaːɭ/",
        partOfSpeech: "noun",
        engWord: "crack",
        partOfSpeech2: "verb",
        engWord2: "crack"
      },
      {
        word: "bukaỻ",
        IPA: "/buːˈkaːɭ/",
        partOfSpeech: "verb",
        engWord: "buy"
      },
      {
        word: "bukaɲoɲeỻ",
        IPA: "/buˈkaɲoɲeɭ/",
        partOfSpeech: "verb",
        engWord: "march"
      },
      {
        word: "bukaɏ",
        IPA: "/buːˈkaj/",
        partOfSpeech: "verb",
        engWord: "scrape"
      },
      {
        word: "buku",
        IPA: "/buːˈkuː/",
        partOfSpeech: "verb",
        engWord: "bust"
      },
      {
        word: "buỻ",
        IPA: "/buɭ/",
        partOfSpeech: "verb",
        engWord: "stand"
      },
      {
        word: "buỻ",
        IPA: "/buːɭ/",
        partOfSpeech: "preposition",
        engWord: "beside"
      },
      {
        word: "bum",
        IPA: "/bum/",
        partOfSpeech: "noun",
        engWord: "hand"
      },
      {
        word: "bume",
        IPA: "/buˈme/",
        partOfSpeech: "noun",
        engWord: "cynic"
      },
      {
        word: "bumeg",
        IPA: "/buˈmeg/",
        partOfSpeech: "noun",
        engWord: "prize"
      },
      {
        word: "bumi",
        IPA: "/buˈmi/",
        partOfSpeech: "verb",
        engWord: "discover"
      },
      {
        word: "bumi",
        IPA: "/buːˈmiː/",
        partOfSpeech: "verb",
        engWord: "exaggerate"
      },
      {
        word: "bumik",
        IPA: "/buːˈmik/",
        partOfSpeech: "noun",
        engWord: "nurse"
      },
      {
        word: "bumu",
        IPA: "/buˈmu/",
        partOfSpeech: "adverb",
        engWord: "furthermore"
      },
      {
        word: "bumu",
        IPA: "/buːˈmuː/",
        partOfSpeech: "noun",
        engWord: "succession"
      },
      {
        word: "buꞃ",
        IPA: "/buːn/",
        partOfSpeech: "noun",
        engWord: "urine"
      },
      {
        word: "buꞃe",
        IPA: "/buˈne/",
        partOfSpeech: "noun",
        engWord: "box"
      },
      {
        word: "buꞃek",
        IPA: "/buˈnek/",
        partOfSpeech: "adjective",
        engWord: "clever"
      },
      {
        word: "buꞃeỻ",
        IPA: "/buːˈneɭ/",
        partOfSpeech: "noun",
        engWord: "despair"
      },
      {
        word: "buꞃerara",
        IPA: "/buˈneɽaːɽaː/",
        partOfSpeech: "verb",
        engWord: "cook (heat food), cook (prepare food)"
      },
      {
        word: "buꞃhe",
        IPA: "/buːnˈhe/",
        partOfSpeech: "noun",
        engWord: "average"
      },
      {
        word: "buɲa",
        IPA: "/buˈɲa/",
        partOfSpeech: "noun",
        engWord: "fish"
      },
      {
        word: "buɲaꝯekak",
        IPA: "/buːˈɲaʤekak/",
        partOfSpeech: "noun",
        engWord: "pen"
      },
      {
        word: "buɲaỻ",
        IPA: "/bunˈjaɭ/",
        partOfSpeech: "noun",
        engWord: "concept"
      },
      {
        word: "buɲaỻ",
        IPA: "/buːnˈjaɭ/",
        partOfSpeech: "noun",
        engWord: "spur"
      },
      {
        word: "buɲaꞃ",
        IPA: "/buːˈɲan/",
        partOfSpeech: "adjective",
        engWord: "intimate"
      },
      {
        word: "buɲaɲabuk",
        IPA: "/buːnˈjaːnjabuːk/",
        partOfSpeech: "verb",
        engWord: "pledge"
      },
      {
        word: "buɲaraꝯe",
        IPA: "/buːˈɲaɽaʤe/",
        partOfSpeech: "adverb",
        engWord: "ok"
      },
      {
        word: "buɲaꝷuꝷka",
        IPA: "/buːˈɲatutka/",
        partOfSpeech: "verb",
        engWord: "oppress"
      },
      {
        word: "buɲe",
        IPA: "/buˈɲe/",
        partOfSpeech: "verb",
        engWord: "peer"
      },
      {
        word: "buɲe",
        IPA: "/buːˈɲe/",
        partOfSpeech: "noun",
        engWord: "valve"
      },
      {
        word: "buɲek",
        IPA: "/buˈɲek/",
        partOfSpeech: "noun",
        engWord: "romance"
      },
      {
        word: "buɲem",
        IPA: "/buˈɲem/",
        partOfSpeech: "preposition",
        engWord: "over"
      },
      {
        word: "buɲo",
        IPA: "/buːˈɲo/",
        partOfSpeech: "noun",
        engWord: "cloak"
      },
      {
        word: "buɲoꝝ",
        IPA: "/buˈɲoʔ/",
        partOfSpeech: "noun",
        engWord: "money"
      },
      {
        word: "buob",
        IPA: "/buːˈob/",
        partOfSpeech: "adjective",
        engWord: "fertile"
      },
      {
        word: "bupa",
        IPA: "/buˈpaː/",
        partOfSpeech: "noun",
        engWord: "clerk"
      },
      {
        word: "bura",
        IPA: "/buːˈɽa/",
        partOfSpeech: "verb",
        engWord: "authorise"
      },
      {
        word: "buraɥuꝷaỻ",
        IPA: "/buˈɽaːʧuʈaɭ/",
        partOfSpeech: "noun",
        engWord: "experience"
      },
      {
        word: "buraỻ",
        IPA: "/buˈɽaɭ/",
        partOfSpeech: "noun",
        engWord: "thumb"
      },
      {
        word: "buramebuꝝ",
        IPA: "/buˈɽaːmebuʔ/",
        partOfSpeech: "noun",
        engWord: "property"
      },
      {
        word: "buraɏ",
        IPA: "/buːˈɽaj/",
        partOfSpeech: "adjective",
        engWord: "unfortunate"
      },
      {
        word: "buꝭo",
        IPA: "/buˈʂo/",
        partOfSpeech: "noun",
        engWord: "monopoly"
      },
      {
        word: "buꝷa",
        IPA: "/buˈʈa/",
        partOfSpeech: "noun",
        engWord: "water"
      },
      {
        word: "buꝷa",
        IPA: "/buːˈʈa/",
        partOfSpeech: "adjective",
        engWord: "benign"
      },
      {
        word: "buꝷaɥeꝷug",
        IPA: "/buˈʈaʧetug/",
        partOfSpeech: "noun",
        engWord: "toy"
      },
      {
        word: "buꝷagea",
        IPA: "/buˈʈagea/",
        partOfSpeech: "verb",
        engWord: "mark",
        partOfSpeech2: "noun",
        engWord2: "mark"
      },
      {
        word: "buꝷak",
        IPA: "/buːˈʈak/",
        partOfSpeech: "verb",
        engWord: "dissolve"
      },
      {
        word: "buꝷaỻ",
        IPA: "/buˈʈaɭ/",
        partOfSpeech: "noun",
        engWord: "hallway"
      },
      {
        word: "buꝷam",
        IPA: "/buˈʈam/",
        partOfSpeech: "adjective",
        engWord: "stunning"
      },
      {
        word: "buꝷaɏ",
        IPA: "/buːˈʈaj/",
        partOfSpeech: "noun",
        engWord: "guy"
      },
      {
        word: "buꝷe",
        IPA: "/buˈʈe/",
        partOfSpeech: "noun",
        engWord: "servant"
      },
      {
        word: "buꝷeuɲek",
        IPA: "/buˈʈeuːɲek/",
        partOfSpeech: "verb",
        engWord: "roar"
      },
      {
        word: "buꝷkaꝝ",
        IPA: "/butˈkaʔ/",
        partOfSpeech: "noun",
        engWord: "cocktail"
      },
      {
        word: "buꝷo",
        IPA: "/buːˈʈo/",
        partOfSpeech: "adjective",
        engWord: "dark"
      },
      {
        word: "buꝷu",
        IPA: "/buːˈtu/",
        partOfSpeech: "noun",
        engWord: "initiative"
      },
      {
        word: "buꝷuꝯoɲa",
        IPA: "/buːˈtuʤoɲa/",
        partOfSpeech: "verb",
        engWord: "desert"
      },
      {
        word: "buꝷuɏabi",
        IPA: "/buːˈtujabiː/",
        partOfSpeech: "verb",
        engWord: "enrich"
      },
      {
        word: "buu",
        IPA: "/buːˈuː/",
        partOfSpeech: "verb",
        engWord: "abuse"
      },
      {
        word: "buuɥubu",
        IPA: "/buːˈuːʧubuː/",
        partOfSpeech: "verb",
        engWord: "grind"
      },
      {
        word: "buɏ",
        IPA: "/buːj/",
        partOfSpeech: "noun",
        engWord: "student"
      },
      {
        word: "buɏa",
        IPA: "/buˈja/",
        partOfSpeech: "noun",
        engWord: "thread"
      },
      {
        word: "buɏak",
        IPA: "/buːˈjak/",
        partOfSpeech: "noun",
        engWord: "back (of body), back (reverse side)",
        partOfSpeech2: "adverb",
        engWord2: "back"
      },
      {
        word: "ɥa",
        IPA: "/ʧa/",
        partOfSpeech: "noun",
        engWord: "year"
      },
      {
        word: "ɥa",
        IPA: "/ʧaː/",
        partOfSpeech: "verb",
        engWord: "start, begin"
      },
      {
        word: "ɥaꝝe",
        IPA: "/ʧaˈʔeː/",
        partOfSpeech: "noun",
        engWord: "sibling"
      },
      {
        word: "ɥaꝝe",
        IPA: "/ʧaːˈʔe/",
        partOfSpeech: "verb",
        engWord: "imitate"
      },
      {
        word: "ɥaꝝek",
        IPA: "/ʧaːˈʔek/",
        partOfSpeech: "verb",
        engWord: "sniff"
      },
      {
        word: "ɥabi",
        IPA: "/ʧaˈbi/",
        partOfSpeech: "noun",
        engWord: "psychologist"
      },
      {
        word: "ɥabi",
        IPA: "/ʧaːˈbiː/",
        partOfSpeech: "verb",
        engWord: "gamble"
      },
      {
        word: "ɥabu",
        IPA: "/ʧaˈbu/",
        partOfSpeech: "noun",
        engWord: "hero"
      },
      {
        word: "ɥabuɥ",
        IPA: "/ʧaːˈbuːʧ/",
        partOfSpeech: "verb",
        engWord: "inquire"
      },
      {
        word: "ɥaɥ",
        IPA: "/ʧaʧ/",
        partOfSpeech: "noun",
        engWord: "trigger"
      },
      {
        word: "ɥaɥ",
        IPA: "/ʧaːʧ/",
        partOfSpeech: "noun",
        engWord: "chin"
      },
      {
        word: "ɥaɥu",
        IPA: "/ʧaˈʧuː/",
        partOfSpeech: "adjective",
        engWord: "necessary"
      },
      {
        word: "ɥade",
        IPA: "/ʧaːˈde/",
        partOfSpeech: "noun",
        engWord: "liberty"
      },
      {
        word: "ɥae",
        IPA: "/ʧaˈe/",
        partOfSpeech: "noun",
        engWord: "conquest"
      },
      {
        word: "ɥagga",
        IPA: "/ʧagˈgaː/",
        partOfSpeech: "verb",
        engWord: "bore"
      },
      {
        word: "ɥaggaɥ",
        IPA: "/ʧaːgˈgaːʧ/",
        partOfSpeech: "noun",
        engWord: "ink"
      },
      {
        word: "ɥagiɥ",
        IPA: "/ʧaˈgiːʧ/",
        partOfSpeech: "adjective",
        engWord: "intricate"
      },
      {
        word: "ɥagiɲ",
        IPA: "/ʧaˈgiːɲ/",
        partOfSpeech: "adjective",
        engWord: "loud"
      },
      {
        word: "ɥaha",
        IPA: "/ʧaˈha/",
        partOfSpeech: "noun",
        engWord: "war"
      },
      {
        word: "ɥaꝯ",
        IPA: "/ʧaʤ/",
        partOfSpeech: "adverb",
        engWord: "barely"
      },
      {
        word: "ɥak",
        IPA: "/ʧak/",
        partOfSpeech: "preposition",
        engWord: "before"
      },
      {
        word: "ɥak",
        IPA: "/ʧaːk/",
        partOfSpeech: "noun",
        engWord: "transport"
      },
      {
        word: "ɥaka",
        IPA: "/ʧaˈka/",
        partOfSpeech: "noun",
        engWord: "counselor"
      },
      {
        word: "ɥame",
        IPA: "/ʧaːˈme/",
        partOfSpeech: "noun",
        engWord: "throne"
      },
      {
        word: "ɥami",
        IPA: "/ʧaˈmiː/",
        partOfSpeech: "verb",
        engWord: "verify"
      },
      {
        word: "ɥamu",
        IPA: "/ʧaːˈmu/",
        partOfSpeech: "noun",
        engWord: "cinnamon"
      },
      {
        word: "ɥamup",
        IPA: "/ʧaˈmup/",
        partOfSpeech: "noun",
        engWord: "cement"
      },
      {
        word: "ɥaꞃdeɥ",
        IPA: "/ʧanˈdeʧ/",
        partOfSpeech: "preposition",
        engWord: "despite"
      },
      {
        word: "ɥaꞃeɥ",
        IPA: "/ʧaˈneʧ/",
        partOfSpeech: "noun",
        engWord: "vampire"
      },
      {
        word: "ɥaꞃek",
        IPA: "/ʧaːˈnek/",
        partOfSpeech: "verb",
        engWord: "accustom"
      },
      {
        word: "ɥaꞃu",
        IPA: "/ʧaˈnu/",
        partOfSpeech: "noun",
        engWord: "fan"
      },
      {
        word: "ɥaɲ",
        IPA: "/ʧaɲ/",
        partOfSpeech: "verb",
        engWord: "compromise"
      },
      {
        word: "ɥaɲa",
        IPA: "/ʧaˈɲa/",
        partOfSpeech: "verb",
        engWord: "encourage"
      },
      {
        word: "ɥaɲaɥ",
        IPA: "/ʧaˈɲaʧ/",
        partOfSpeech: "verb",
        engWord: "damage"
      },
      {
        word: "ɥaɲaɥ",
        IPA: "/ʧaːˈɲaʧ/",
        partOfSpeech: "verb",
        engWord: "forge"
      },
      {
        word: "ɥaɲe",
        IPA: "/ʧaˈɲe/",
        partOfSpeech: "verb",
        engWord: "visit"
      },
      {
        word: "ɥap",
        IPA: "/ʧap/",
        partOfSpeech: "verb",
        engWord: "activate"
      },
      {
        word: "ɥap",
        IPA: "/ʧaːp/",
        partOfSpeech: "noun",
        engWord: "sale"
      },
      {
        word: "ɥaꝷak",
        IPA: "/ʧaˈʈak/",
        partOfSpeech: "noun",
        engWord: "demographic"
      },
      {
        word: "ɥaꝷap",
        IPA: "/ʧaːˈʈap/",
        partOfSpeech: "noun",
        engWord: "bastard"
      },
      {
        word: "ɥaꝷe",
        IPA: "/ʧaˈʈe/",
        partOfSpeech: "verb",
        engWord: "tease"
      },
      {
        word: "ɥaꝷe",
        IPA: "/ʧaːˈʈe/",
        partOfSpeech: "noun",
        engWord: "bachelor"
      },
      {
        word: "ɥaꝷek",
        IPA: "/ʧaːˈʈek/",
        partOfSpeech: "verb",
        engWord: "win"
      },
      {
        word: "ɥau",
        IPA: "/ʧaːˈuː/",
        partOfSpeech: "noun",
        engWord: "chair"
      },
      {
        word: "ɥauɲ",
        IPA: "/ʧaˈuːɲ/",
        partOfSpeech: "verb",
        engWord: "ride"
      },
      {
        word: "ɥaɏa",
        IPA: "/ʧaˈja/",
        partOfSpeech: "verb",
        engWord: "pray"
      },
      {
        word: "ɥe",
        IPA: "/ʧe/",
        partOfSpeech: "adjective",
        engWord: "slim (of a person)"
      },
      {
        word: "ɥe",
        IPA: "/ʧeː/",
        partOfSpeech: "preposition",
        engWord: "in"
      },
      {
        word: "ɥeꝝe",
        IPA: "/ʧeˈʔe/",
        partOfSpeech: "noun",
        engWord: "beam"
      },
      {
        word: "ɥeꝝeꝷ",
        IPA: "/ʧeˈʔet/",
        partOfSpeech: "noun",
        engWord: "kink (sharp twist)"
      },
      {
        word: "ɥea",
        IPA: "/ʧeˈa/",
        partOfSpeech: "adjective",
        engWord: "main"
      },
      {
        word: "ɥea",
        IPA: "/ʧeːˈa/",
        partOfSpeech: "adjective",
        engWord: "round"
      },
      {
        word: "ɥeam",
        IPA: "/ʧeˈam/",
        partOfSpeech: "preposition",
        engWord: "against"
      },
      {
        word: "ɥebaɲeꝝeɲe",
        IPA: "/ʧeˈbaːɲeʔeɲe/",
        partOfSpeech: "noun",
        engWord: "killer"
      },
      {
        word: "ɥebee",
        IPA: "/ʧeˈbeːe/",
        partOfSpeech: "noun",
        engWord: "farmer"
      },
      {
        word: "ɥebeꝷaduꝷe",
        IPA: "/ʧeˈbeʈaduːʈe/",
        partOfSpeech: "noun",
        engWord: "prisoner"
      },
      {
        word: "ɥebi",
        IPA: "/ʧeˈbiː/",
        partOfSpeech: "verb",
        engWord: "afford"
      },
      {
        word: "ɥebikaỻ",
        IPA: "/ʧeˈbiːkaɭ/",
        partOfSpeech: "noun",
        engWord: "teacher"
      },
      {
        word: "ɥebiɏ",
        IPA: "/ʧeˈbij/",
        partOfSpeech: "noun",
        engWord: "locksmith"
      },
      {
        word: "ɥebiɏam",
        IPA: "/ʧeˈbiːjam/",
        partOfSpeech: "noun",
        engWord: "hunter"
      },
      {
        word: "ɥebomi",
        IPA: "/ʧeˈbomiː/",
        partOfSpeech: "noun",
        engWord: "government official"
      },
      {
        word: "ɥebu",
        IPA: "/ʧeːˈbu/",
        partOfSpeech: "verb",
        engWord: "tolerate"
      },
      {
        word: "ɥebu",
        IPA: "/ʧeːˈbuː/",
        partOfSpeech: "noun",
        engWord: "vehicle"
      },
      {
        word: "ɥebuꞃerara",
        IPA: "/ʧeˈbuneɽaːɽaː/",
        partOfSpeech: "noun",
        engWord: "chef"
      },
      {
        word: "ɥeɥ",
        IPA: "/ʧeʧ/",
        partOfSpeech: "noun",
        engWord: "politics"
      },
      {
        word: "ɥeɥ",
        IPA: "/ʧeːʧ/",
        partOfSpeech: "noun",
        engWord: "sum"
      },
      {
        word: "ɥeɥa",
        IPA: "/ʧeˈʧaː/",
        partOfSpeech: "noun",
        engWord: "runner"
      },
      {
        word: "ɥeɥa",
        IPA: "/ʧeˈʧaː/",
        partOfSpeech: "noun",
        engWord: "glove"
      },
      {
        word: "ɥeɥaha",
        IPA: "/ʧeˈʧaha/",
        partOfSpeech: "noun",
        engWord: "warrior"
      },
      {
        word: "ɥeɥaɲe",
        IPA: "/ʧeˈʧaɲe/",
        partOfSpeech: "noun",
        engWord: "visitor"
      },
      {
        word: "ɥeɥeɥ",
        IPA: "/ʧeˈʧeʧ/",
        partOfSpeech: "noun",
        engWord: "politician"
      },
      {
        word: "ɥeɥi",
        IPA: "/ʧeːˈʧi/",
        partOfSpeech: "noun",
        engWord: "leaf"
      },
      {
        word: "ɥeɥiꝷ",
        IPA: "/ʧeˈʧit/",
        partOfSpeech: "adjective",
        engWord: "physical"
      },
      {
        word: "ɥeɥiꝷ",
        IPA: "/ʧeˈʧiːt/",
        partOfSpeech: "adjective",
        engWord: "hostile"
      },
      {
        word: "ɥeɥu",
        IPA: "/ʧeːˈʧuː/",
        partOfSpeech: "noun",
        engWord: "pumpkin"
      },
      {
        word: "ɥedeɥ",
        IPA: "/ʧeˈdeʧ/",
        partOfSpeech: "adjective",
        engWord: "beautiful"
      },
      {
        word: "ɥee",
        IPA: "/ʧeˈe/",
        partOfSpeech: "noun",
        engWord: "milk"
      },
      {
        word: "ɥeeɥ",
        IPA: "/ʧeˈeʧ/",
        partOfSpeech: "verb",
        engWord: "wave (salutation)",
        partOfSpeech2: "noun",
        engWord2: "wave (salutation)"
      },
      {
        word: "ɥegeꝷ",
        IPA: "/ʧeˈget/",
        partOfSpeech: "adjective",
        engWord: "bizarre"
      },
      {
        word: "ɥegeꝷ",
        IPA: "/ʧeːˈget/",
        partOfSpeech: "noun",
        engWord: "ideal"
      },
      {
        word: "ɥegi",
        IPA: "/ʧeːˈgi/",
        partOfSpeech: "preposition",
        engWord: "off"
      },
      {
        word: "ɥegim",
        IPA: "/ʧeˈgiːm/",
        partOfSpeech: "noun",
        engWord: "boss"
      },
      {
        word: "ɥegoꝯe",
        IPA: "/ʧeˈgoʤe/",
        partOfSpeech: "noun",
        engWord: "driver"
      },
      {
        word: "ɥegu",
        IPA: "/ʧeˈguː/",
        partOfSpeech: "verb",
        engWord: "tremble"
      },
      {
        word: "ɥegum",
        IPA: "/ʧeːˈgum/",
        partOfSpeech: "noun",
        engWord: "language"
      },
      {
        word: "ɥehiaꝷe",
        IPA: "/ʧeˈhiːaːʈe/",
        partOfSpeech: "noun",
        engWord: "painter"
      },
      {
        word: "ɥehoe",
        IPA: "/ʧeˈhoe/",
        partOfSpeech: "noun",
        engWord: "lawyer"
      },
      {
        word: "ɥehom",
        IPA: "/ʧeˈhom/",
        partOfSpeech: "noun",
        engWord: "singer"
      },
      {
        word: "ɥehou",
        IPA: "/ʧeˈhou/",
        partOfSpeech: "noun",
        engWord: "florist"
      },
      {
        word: "ɥeꝯe",
        IPA: "/ʧeˈʤe/",
        partOfSpeech: "determiner",
        engWord: "these"
      },
      {
        word: "ɥeꝯe",
        IPA: "/ʧeːˈʤe/",
        partOfSpeech: "noun",
        engWord: "tin"
      },
      {
        word: "ɥeꝯem",
        IPA: "/ʧeːˈʤem/",
        partOfSpeech: "verb",
        engWord: "announce"
      },
      {
        word: "ɥeꝯem",
        IPA: "/ʧeːˈʤeːm/",
        partOfSpeech: "noun",
        engWord: "ginger"
      },
      {
        word: "ɥeꝯo",
        IPA: "/ʧeˈʤo/",
        partOfSpeech: "adjective",
        engWord: "lovely"
      },
      {
        word: "ɥeka",
        IPA: "/ʧeˈka/",
        partOfSpeech: "noun",
        engWord: "military"
      },
      {
        word: "ɥeka",
        IPA: "/ʧeˈkaː/",
        partOfSpeech: "noun",
        engWord: "boat"
      },
      {
        word: "ɥeka",
        IPA: "/ʧeːˈka/",
        partOfSpeech: "noun",
        engWord: "case"
      },
      {
        word: "ɥekaꝷ",
        IPA: "/ʧeːˈkat/",
        partOfSpeech: "noun",
        engWord: "torch"
      },
      {
        word: "ɥekaꝷ",
        IPA: "/ʧeːˈkaːt/",
        partOfSpeech: "noun",
        engWord: "mule"
      },
      {
        word: "ɥem",
        IPA: "/ʧem/",
        partOfSpeech: "pronoun",
        engWord: "anything"
      },
      {
        word: "ɥem",
        IPA: "/ʧeːm/",
        partOfSpeech: "noun",
        engWord: "hell"
      },
      {
        word: "ɥemiɲam",
        IPA: "/ʧeˈmiɲam/",
        partOfSpeech: "noun",
        engWord: "sailor"
      },
      {
        word: "ɥeꞃde",
        IPA: "/ʧenˈde/",
        partOfSpeech: "noun",
        engWord: "literature"
      },
      {
        word: "ɥeꞃe",
        IPA: "/ʧeˈne/",
        partOfSpeech: "verb",
        engWord: "measure"
      },
      {
        word: "ɥeꞃem",
        IPA: "/ʧeˈnem/",
        partOfSpeech: "noun",
        engWord: "plane"
      },
      {
        word: "ɥeꞃu",
        IPA: "/ʧeˈnu/",
        partOfSpeech: "noun",
        engWord: "poet"
      },
      {
        word: "ɥeꞃum",
        IPA: "/ʧeˈnum/",
        partOfSpeech: "verb",
        engWord: "follow"
      },
      {
        word: "ɥeɲa",
        IPA: "/ʧeːˈɲa/",
        partOfSpeech: "verb",
        engWord: "transfer"
      },
      {
        word: "ɥeɲaɥ",
        IPA: "/ʧenˈjaʧ/",
        partOfSpeech: "verb",
        engWord: "encompass"
      },
      {
        word: "ɥeɲam",
        IPA: "/ʧeːˈɲam/",
        partOfSpeech: "verb",
        engWord: "lift"
      },
      {
        word: "ɥeɲaꝷ",
        IPA: "/ʧenˈjat/",
        partOfSpeech: "noun",
        engWord: "custom"
      },
      {
        word: "ɥeɲe",
        IPA: "/ʧeˈɲe/",
        partOfSpeech: "noun",
        engWord: "integrity"
      },
      {
        word: "ɥeɲoguꝷ",
        IPA: "/ʧeˈɲogut/",
        partOfSpeech: "noun",
        engWord: "foreigner"
      },
      {
        word: "ɥeɲoꞃe",
        IPA: "/ʧeˈɲone/",
        partOfSpeech: "noun",
        engWord: "vendor"
      },
      {
        word: "ɥeɲoꝷ",
        IPA: "/ʧeˈɲot/",
        partOfSpeech: "noun",
        engWord: "prototype"
      },
      {
        word: "ɥeo",
        IPA: "/ʧeːˈo/",
        partOfSpeech: "adjective",
        engWord: "certain"
      },
      {
        word: "ɥepoꝯ",
        IPA: "/ʧeˈpoʤ/",
        partOfSpeech: "noun",
        engWord: "lover"
      },
      {
        word: "ɥeꝭak",
        IPA: "/ʧeˈʂak/",
        partOfSpeech: "noun",
        engWord: "worker, employee"
      },
      {
        word: "ɥeꝭoka",
        IPA: "/ʧeˈʂoka/",
        partOfSpeech: "noun",
        engWord: "gardener"
      },
      {
        word: "ɥeꝭoꝷaꝭ",
        IPA: "/ʧeˈʂoʈaʂ/",
        partOfSpeech: "noun",
        engWord: "artist"
      },
      {
        word: "ɥeꝭoꝷka",
        IPA: "/ʧeˈʂotka/",
        partOfSpeech: "noun",
        engWord: "author"
      },
      {
        word: "ɥeꝷ",
        IPA: "/ʧet/",
        partOfSpeech: "verb",
        engWord: "seem"
      },
      {
        word: "ɥeꝷ",
        IPA: "/ʧeːt/",
        partOfSpeech: "noun",
        engWord: "shirt"
      },
      {
        word: "ɥeꝷa",
        IPA: "/ʧeˈʈa/",
        partOfSpeech: "noun",
        engWord: "contempt"
      },
      {
        word: "ɥeꝷa",
        IPA: "/ʧeːˈʈa/",
        partOfSpeech: "verb",
        engWord: "break"
      },
      {
        word: "ɥeꝷaꝷ",
        IPA: "/ʧeːˈʈat/",
        partOfSpeech: "verb",
        engWord: "dwell"
      },
      {
        word: "ɥeꝷkam",
        IPA: "/ʧeːtˈkam/",
        partOfSpeech: "noun",
        engWord: "propaganda"
      },
      {
        word: "ɥeꝷoɥ",
        IPA: "/ʧeˈʈoʧ/",
        partOfSpeech: "noun",
        engWord: "test",
        partOfSpeech2: "verb",
        engWord2: "test"
      },
      {
        word: "ɥeu",
        IPA: "/ʧeːˈu/",
        partOfSpeech: "interjection",
        engWord: "goodbye"
      },
      {
        word: "ɥeɏue",
        IPA: "/ʧeˈjuːe/",
        partOfSpeech: "noun",
        engWord: "scientist"
      },
      {
        word: "ɥeɏuka",
        IPA: "/ʧeˈjuːkaː/",
        partOfSpeech: "noun",
        engWord: "dancer"
      },
      {
        word: "ɥi",
        IPA: "/ʧi/",
        partOfSpeech: "verb",
        engWord: "combine"
      },
      {
        word: "ɥi",
        IPA: "/ʧiː/",
        partOfSpeech: "adverb",
        engWord: "later"
      },
      {
        word: "ɥiꝝe",
        IPA: "/ʧiːˈʔe/",
        partOfSpeech: "adjective",
        engWord: "technical"
      },
      {
        word: "ɥia",
        IPA: "/ʧiːˈa/",
        partOfSpeech: "noun",
        engWord: "chord"
      },
      {
        word: "ɥia",
        IPA: "/ʧiːˈaː/",
        partOfSpeech: "noun",
        engWord: "peace"
      },
      {
        word: "ɥibi",
        IPA: "/ʧiˈbi/",
        partOfSpeech: "noun",
        engWord: "level"
      },
      {
        word: "ɥibip",
        IPA: "/ʧiːˈbip/",
        partOfSpeech: "verb",
        engWord: "warrant"
      },
      {
        word: "ɥibu",
        IPA: "/ʧiˈbuː/",
        partOfSpeech: "noun",
        engWord: "mall"
      },
      {
        word: "ɥibub",
        IPA: "/ʧiːˈbub/",
        partOfSpeech: "r.",
        engWord: "quick"
      },
      {
        word: "ɥiɥ",
        IPA: "/ʧiʧ/",
        partOfSpeech: "noun",
        engWord: "harmony"
      },
      {
        word: "ɥiɥ",
        IPA: "/ʧiːʧ/",
        partOfSpeech: "verb",
        engWord: "receive"
      },
      {
        word: "ɥiɥap",
        IPA: "/ʧiˈʧaːp/",
        partOfSpeech: "verb",
        engWord: "startle"
      },
      {
        word: "ɥiɥu",
        IPA: "/ʧiˈʧu/",
        partOfSpeech: "verb",
        engWord: "harm"
      },
      {
        word: "ɥige",
        IPA: "/ʧiːˈge/",
        partOfSpeech: "noun",
        engWord: "sea"
      },
      {
        word: "ɥigu",
        IPA: "/ʧiːˈguː/",
        partOfSpeech: "verb",
        engWord: "compare"
      },
      {
        word: "ɥika",
        IPA: "/ʧiːˈka/",
        partOfSpeech: "noun",
        engWord: "greenhouse"
      },
      {
        word: "ɥikub",
        IPA: "/ʧiːˈkuːb/",
        partOfSpeech: "adjective",
        engWord: "crude"
      },
      {
        word: "ɥimeɥ",
        IPA: "/ʧiːˈmeʧ/",
        partOfSpeech: "noun",
        engWord: "heritage"
      },
      {
        word: "ɥimu",
        IPA: "/ʧiˈmu/",
        partOfSpeech: "noun",
        engWord: "lawyer"
      },
      {
        word: "ɥimu",
        IPA: "/ʧiːˈmu/",
        partOfSpeech: "verb",
        engWord: "assassinate"
      },
      {
        word: "ɥiꞃde",
        IPA: "/ʧiːnˈde/",
        partOfSpeech: "preposition",
        engWord: "according"
      },
      {
        word: "ɥiꞃeɥ",
        IPA: "/ʧiːˈneʧ/",
        partOfSpeech: "noun",
        engWord: "total"
      },
      {
        word: "ɥiꞃhe",
        IPA: "/ʧiːnˈhe/",
        partOfSpeech: "verb",
        engWord: "complicate"
      },
      {
        word: "ɥiɲa",
        IPA: "/ʧiːˈɲa/",
        partOfSpeech: "noun",
        engWord: "basil"
      },
      {
        word: "ɥiɲe",
        IPA: "/ʧiˈɲe/",
        partOfSpeech: "noun",
        engWord: "origin"
      },
      {
        word: "ɥiɲeb",
        IPA: "/ʧiːˈɲeb/",
        partOfSpeech: "noun",
        engWord: "need"
      },
      {
        word: "ɥio",
        IPA: "/ʧiːˈo/",
        partOfSpeech: "noun",
        engWord: "beetle"
      },
      {
        word: "ɥip",
        IPA: "/ʧiːp/",
        partOfSpeech: "adjective",
        engWord: "straight"
      },
      {
        word: "ɥiꝭo",
        IPA: "/ʧiˈʂo/",
        partOfSpeech: "noun",
        engWord: "peach"
      },
      {
        word: "ɥiꝷaɥ",
        IPA: "/ʧiːˈʈaʧ/",
        partOfSpeech: "noun",
        engWord: "suburb"
      },
      {
        word: "ɥiꝷop",
        IPA: "/ʧiːˈʈop/",
        partOfSpeech: "noun",
        engWord: "double"
      },
      {
        word: "ɥiɏaɥ",
        IPA: "/ʧiˈjaʧ/",
        partOfSpeech: "verb",
        engWord: "migrate"
      },
      {
        word: "ɥo",
        IPA: "/ʧo/",
        partOfSpeech: "noun",
        engWord: "life"
      },
      {
        word: "ɥoꝝe",
        IPA: "/ʧoˈʔe/",
        partOfSpeech: "adjective",
        engWord: "next"
      },
      {
        word: "ɥoꝝeꝯ",
        IPA: "/ʧoˈʔeʤ/",
        partOfSpeech: "noun",
        engWord: "palace"
      },
      {
        word: "ɥoꝝem",
        IPA: "/ʧoˈʔem/",
        partOfSpeech: "verb",
        engWord: "would"
      },
      {
        word: "ɥoa",
        IPA: "/ʧoˈa/",
        partOfSpeech: "adjective",
        engWord: "ancient"
      },
      {
        word: "ɥoaꝷ",
        IPA: "/ʧoˈaːt/",
        partOfSpeech: "noun",
        engWord: "stall"
      },
      {
        word: "ɥobad",
        IPA: "/ʧoˈbaːd/",
        partOfSpeech: "verb",
        engWord: "spot"
      },
      {
        word: "ɥobi",
        IPA: "/ʧoˈbi/",
        partOfSpeech: "noun",
        engWord: "elbow"
      },
      {
        word: "ɥobi",
        IPA: "/ʧoˈbiː/",
        partOfSpeech: "verb",
        engWord: "scoop"
      },
      {
        word: "ɥobiꝯ",
        IPA: "/ʧoˈbiːʤ/",
        partOfSpeech: "verb",
        engWord: "shoot"
      },
      {
        word: "ɥobim",
        IPA: "/ʧoˈbiːm/",
        partOfSpeech: "verb",
        engWord: "force"
      },
      {
        word: "ɥobu",
        IPA: "/ʧoˈbu/",
        partOfSpeech: "noun",
        engWord: "elastic"
      },
      {
        word: "ɥobu",
        IPA: "/ʧoˈbuː/",
        partOfSpeech: "verb",
        engWord: "harass"
      },
      {
        word: "ɥobum",
        IPA: "/ʧoˈbum/",
        partOfSpeech: "noun",
        engWord: "coral"
      },
      {
        word: "ɥobuɲ",
        IPA: "/ʧoˈbuːɲ/",
        partOfSpeech: "noun",
        engWord: "pasta"
      },
      {
        word: "ɥobɏoꝯ",
        IPA: "/ʧoˈbjoʤ/",
        partOfSpeech: "noun",
        engWord: "organisation"
      },
      {
        word: "ɥoɥ",
        IPA: "/ʧoʧ/",
        partOfSpeech: "noun",
        engWord: "rail"
      },
      {
        word: "ɥoɥa",
        IPA: "/ʧoˈʧaː/",
        partOfSpeech: "noun",
        engWord: "factor"
      },
      {
        word: "ɥoɥaꝯ",
        IPA: "/ʧoˈʧaːʤ/",
        partOfSpeech: "adjective",
        engWord: "whole"
      },
      {
        word: "ɥoɥam",
        IPA: "/ʧoˈʧaːm/",
        partOfSpeech: "noun",
        engWord: "puppet"
      },
      {
        word: "ɥoɥed",
        IPA: "/ʧoˈʧed/",
        partOfSpeech: "noun",
        engWord: "bath"
      },
      {
        word: "ɥoɥi",
        IPA: "/ʧoˈʧi/",
        partOfSpeech: "noun",
        engWord: "rhythm"
      },
      {
        word: "ɥoɥi",
        IPA: "/ʧoˈʧiː/",
        partOfSpeech: "noun",
        engWord: "thief"
      },
      {
        word: "ɥoɥu",
        IPA: "/ʧoˈʧu/",
        partOfSpeech: "adverb",
        engWord: "actually"
      },
      {
        word: "ɥoɥu",
        IPA: "/ʧoˈʧuː/",
        partOfSpeech: "verb",
        engWord: "chant"
      },
      {
        word: "ɥoɥuꝯ",
        IPA: "/ʧoˈʧuʤ/",
        partOfSpeech: "noun",
        engWord: "opinion"
      },
      {
        word: "ɥoɥuꝷ",
        IPA: "/ʧoˈʧuːt/",
        partOfSpeech: "noun",
        engWord: "direction"
      },
      {
        word: "ɥod",
        IPA: "/ʧod/",
        partOfSpeech: "noun",
        engWord: "player"
      },
      {
        word: "ɥode",
        IPA: "/ʧoˈde/",
        partOfSpeech: "preposition",
        engWord: "across"
      },
      {
        word: "ɥodeꝯ",
        IPA: "/ʧoˈdeʤ/",
        partOfSpeech: "noun",
        engWord: "horse"
      },
      {
        word: "ɥodem",
        IPA: "/ʧoˈdem/",
        partOfSpeech: "verb",
        engWord: "swim"
      },
      {
        word: "ɥoe",
        IPA: "/ʧoˈe/",
        partOfSpeech: "adjective",
        engWord: "far"
      },
      {
        word: "ɥoe",
        IPA: "/ʧoˈeː/",
        partOfSpeech: "noun",
        engWord: "commission"
      },
      {
        word: "ɥoeɲ",
        IPA: "/ʧoˈeɲ/",
        partOfSpeech: "noun",
        engWord: "prestige"
      },
      {
        word: "ɥoge",
        IPA: "/ʧoˈge/",
        partOfSpeech: "noun",
        engWord: "altar"
      },
      {
        word: "ɥoggu",
        IPA: "/ʧogˈguː/",
        partOfSpeech: "adverb",
        engWord: "always"
      },
      {
        word: "ɥogi",
        IPA: "/ʧoˈgiː/",
        partOfSpeech: "verb",
        engWord: "become"
      },
      {
        word: "ɥogu",
        IPA: "/ʧoˈgu/",
        partOfSpeech: "noun",
        engWord: "comfort"
      },
      {
        word: "ɥoham",
        IPA: "/ʧoˈham/",
        partOfSpeech: "noun",
        engWord: "decade"
      },
      {
        word: "ɥoi",
        IPA: "/ʧoˈi/",
        partOfSpeech: "noun",
        engWord: "look (appearance)"
      },
      {
        word: "ɥoꝯ",
        IPA: "/ʧoʤ/",
        partOfSpeech: "verb",
        engWord: "lead"
      },
      {
        word: "ɥoꝯa",
        IPA: "/ʧoˈʤa/",
        partOfSpeech: "noun",
        engWord: "slave"
      },
      {
        word: "ɥoꝯa",
        IPA: "/ʧoˈʤa/",
        partOfSpeech: "noun",
        engWord: "skirt"
      },
      {
        word: "ɥoꝯaꝯ",
        IPA: "/ʧoˈʤaʤ/",
        partOfSpeech: "verb",
        engWord: "mix"
      },
      {
        word: "ɥoꝯe",
        IPA: "/ʧoˈʤe/",
        partOfSpeech: "verb",
        engWord: "jam"
      },
      {
        word: "ɥoꝯeꝯ",
        IPA: "/ʧoˈʤeʤ/",
        partOfSpeech: "noun",
        engWord: "jam"
      },
      {
        word: "ɥoꝯoꝯ",
        IPA: "/ʧoˈʤoʤ/",
        partOfSpeech: "verb",
        engWord: "consolidate"
      },
      {
        word: "ɥoka",
        IPA: "/ʧoˈka/",
        partOfSpeech: "noun",
        engWord: "agency"
      },
      {
        word: "ɥokaꝯ",
        IPA: "/ʧoˈkaːʤ/",
        partOfSpeech: "noun",
        engWord: "century"
      },
      {
        word: "ɥokaɲ",
        IPA: "/ʧoˈkaɲ/",
        partOfSpeech: "noun",
        engWord: "mist"
      },
      {
        word: "ɥokaꝷ",
        IPA: "/ʧoˈkat/",
        partOfSpeech: "noun",
        engWord: "volcano"
      },
      {
        word: "ɥom",
        IPA: "/ʧom/",
        partOfSpeech: "preposition",
        engWord: "among"
      },
      {
        word: "ɥome",
        IPA: "/ʧoˈme/",
        partOfSpeech: "adverb",
        engWord: "anyway"
      },
      {
        word: "ɥomeɥ",
        IPA: "/ʧoˈmeʧ/",
        partOfSpeech: "adjective",
        engWord: "permanent"
      },
      {
        word: "ɥomi",
        IPA: "/ʧoˈmiː/",
        partOfSpeech: "verb",
        engWord: "imagine"
      },
      {
        word: "ɥomu",
        IPA: "/ʧoˈmu/",
        partOfSpeech: "adjective",
        engWord: "miniature"
      },
      {
        word: "ɥomuɥ",
        IPA: "/ʧoˈmuːʧ/",
        partOfSpeech: "verb",
        engWord: "repeat"
      },
      {
        word: "ɥoꞃde",
        IPA: "/ʧonˈde/",
        partOfSpeech: "noun",
        engWord: "beard"
      },
      {
        word: "ɥoꞃe",
        IPA: "/ʧoˈne/",
        partOfSpeech: "noun",
        engWord: "reversal"
      },
      {
        word: "ɥoꞃhe",
        IPA: "/ʧonˈhe/",
        partOfSpeech: "noun",
        engWord: "enemy"
      },
      {
        word: "ɥoꞃu",
        IPA: "/ʧoˈnu/",
        partOfSpeech: "noun",
        engWord: "moisture"
      },
      {
        word: "ɥoꞃud",
        IPA: "/ʧoˈnud/",
        partOfSpeech: "noun",
        engWord: "franchise"
      },
      {
        word: "ɥoꞃuɲ",
        IPA: "/ʧoˈnuɲ/",
        partOfSpeech: "noun",
        engWord: "raid"
      },
      {
        word: "ɥoɲ",
        IPA: "/ʧoɲ/",
        partOfSpeech: "noun",
        engWord: "age"
      },
      {
        word: "ɥoɲa",
        IPA: "/ʧoˈɲa/",
        partOfSpeech: "adjective",
        engWord: "delicious"
      },
      {
        word: "ɥoɲaꝯ",
        IPA: "/ʧoˈɲaʤ/",
        partOfSpeech: "adjective",
        engWord: "acute"
      },
      {
        word: "ɥoɲe",
        IPA: "/ʧoˈɲe/",
        partOfSpeech: "noun",
        engWord: "dictator"
      },
      {
        word: "ɥoɲo",
        IPA: "/ʧoˈɲo/",
        partOfSpeech: "adverb",
        engWord: "less"
      },
      {
        word: "ɥoɲoɥ",
        IPA: "/ʧoˈɲoʧ/",
        partOfSpeech: "verb",
        engWord: "affiliate"
      },
      {
        word: "ɥora",
        IPA: "/ʧoˈɽa/",
        partOfSpeech: "noun",
        engWord: "horizon"
      },
      {
        word: "ɥora",
        IPA: "/ʧoˈɽaː/",
        partOfSpeech: "adjective",
        engWord: "competent"
      },
      {
        word: "ɥorad",
        IPA: "/ʧoˈɽad/",
        partOfSpeech: "adjective",
        engWord: "limited"
      },
      {
        word: "ɥoꝭaꝯ",
        IPA: "/ʧoˈʂaʤ/",
        partOfSpeech: "noun",
        engWord: "flavour"
      },
      {
        word: "ɥoꝭo",
        IPA: "/ʧoˈʂo/",
        partOfSpeech: "noun",
        engWord: "cost"
      },
      {
        word: "ɥoꝭoꝯ",
        IPA: "/ʧoˈʂoʤ/",
        partOfSpeech: "adjective",
        engWord: "strange"
      },
      {
        word: "ɥoꝷ",
        IPA: "/ʧot/",
        partOfSpeech: "noun",
        engWord: "eye, eyeball"
      },
      {
        word: "ɥoꝷa",
        IPA: "/ʧoˈʈa/",
        partOfSpeech: "determiner",
        engWord: "own"
      },
      {
        word: "ɥoꝷaꝯ",
        IPA: "/ʧoˈʈaʤ/",
        partOfSpeech: "noun",
        engWord: "atom"
      },
      {
        word: "ɥoꝷe",
        IPA: "/ʧoˈʈe/",
        partOfSpeech: "adjective",
        engWord: "proud"
      },
      {
        word: "ɥoꝷe",
        IPA: "/ʧoˈʈeː/",
        partOfSpeech: "noun",
        engWord: "diaper"
      },
      {
        word: "ɥoꝷeꝯ",
        IPA: "/ʧoˈʈeʤ/",
        partOfSpeech: "noun",
        engWord: "prince"
      },
      {
        word: "ɥoꝷu",
        IPA: "/ʧoˈtu/",
        partOfSpeech: "verb",
        engWord: "blame"
      },
      {
        word: "ɥoɏa",
        IPA: "/ʧoˈja/",
        partOfSpeech: "verb",
        engWord: "note"
      },
      {
        word: "ɥu",
        IPA: "/ʧu/",
        partOfSpeech: "noun",
        engWord: "road"
      },
      {
        word: "ɥu",
        IPA: "/ʧuː/",
        partOfSpeech: "verb",
        engWord: "can"
      },
      {
        word: "ɥuꝝe",
        IPA: "/ʧuːˈʔe/",
        partOfSpeech: "verb",
        engWord: "change"
      },
      {
        word: "ɥuꝝeb",
        IPA: "/ʧuˈʔeb/",
        partOfSpeech: "verb",
        engWord: "illustrate"
      },
      {
        word: "ɥuꝝeɥ",
        IPA: "/ʧuːˈʔeʧ/",
        partOfSpeech: "verb",
        engWord: "relate"
      },
      {
        word: "ɥua",
        IPA: "/ʧuˈa/",
        partOfSpeech: "adjective",
        engWord: "vertical"
      },
      {
        word: "ɥua",
        IPA: "/ʧuːˈa/",
        partOfSpeech: "adjective",
        engWord: "absent"
      },
      {
        word: "ɥua",
        IPA: "/ʧuːˈaː/",
        partOfSpeech: "noun",
        engWord: "economy"
      },
      {
        word: "ɥuaɥ",
        IPA: "/ʧuːˈaʧ/",
        partOfSpeech: "adjective",
        engWord: "shiny"
      },
      {
        word: "ɥub",
        IPA: "/ʧub/",
        partOfSpeech: "verb",
        engWord: "see"
      },
      {
        word: "ɥuba",
        IPA: "/ʧuːˈbaː/",
        partOfSpeech: "verb",
        engWord: "collaborate"
      },
      {
        word: "ɥubi",
        IPA: "/ʧuˈbi/",
        partOfSpeech: "noun",
        engWord: "dwarf"
      },
      {
        word: "ɥubiɥ",
        IPA: "/ʧuːˈbiʧ/",
        partOfSpeech: "verb",
        engWord: "comprise"
      },
      {
        word: "ɥubu",
        IPA: "/ʧuˈbu/",
        partOfSpeech: "verb",
        engWord: "estimate"
      },
      {
        word: "ɥubuɥ",
        IPA: "/ʧuˈbuʧ/",
        partOfSpeech: "verb",
        engWord: "recite"
      },
      {
        word: "ɥubuk",
        IPA: "/ʧuːˈbuːk/",
        partOfSpeech: "verb",
        engWord: "reject"
      },
      {
        word: "ɥubuꝷ",
        IPA: "/ʧuːˈbut/",
        partOfSpeech: "adjective",
        engWord: "suspicious"
      },
      {
        word: "ɥuɥ",
        IPA: "/ʧuʧ/",
        partOfSpeech: "noun",
        engWord: "sister"
      },
      {
        word: "ɥuɥ",
        IPA: "/ʧuːʧ/",
        partOfSpeech: "verb",
        engWord: "please"
      },
      {
        word: "ɥude",
        IPA: "/ʧuˈde/",
        partOfSpeech: "verb",
        engWord: "reveal"
      },
      {
        word: "ɥue",
        IPA: "/ʧuːˈe/",
        partOfSpeech: "noun",
        engWord: "north"
      },
      {
        word: "ɥueɥ",
        IPA: "/ʧuˈeʧ/",
        partOfSpeech: "noun",
        engWord: "twilight"
      },
      {
        word: "ɥuge",
        IPA: "/ʧuːˈge/",
        partOfSpeech: "verb",
        engWord: "enhance"
      },
      {
        word: "ɥugguɥ",
        IPA: "/ʧugˈguːʧ/",
        partOfSpeech: "verb",
        engWord: "devastate"
      },
      {
        word: "ɥugguꝷ",
        IPA: "/ʧuːgˈguːt/",
        partOfSpeech: "noun",
        engWord: "shadow"
      },
      {
        word: "ɥuguɥ",
        IPA: "/ʧuˈguːʧ/",
        partOfSpeech: "noun",
        engWord: "blade"
      },
      {
        word: "ɥuꝯa",
        IPA: "/ʧuːˈʤa/",
        partOfSpeech: "adjective",
        engWord: "worthy"
      },
      {
        word: "ɥuꝯab",
        IPA: "/ʧuˈʤab/",
        partOfSpeech: "verb",
        engWord: "hail"
      },
      {
        word: "ɥuꝯe",
        IPA: "/ʧuːˈʤe/",
        partOfSpeech: "noun",
        engWord: "comedy"
      },
      {
        word: "ɥuꝯeɥ",
        IPA: "/ʧuˈʤeʧ/",
        partOfSpeech: "noun",
        engWord: "surge"
      },
      {
        word: "ɥuꝯep",
        IPA: "/ʧuːˈʤep/",
        partOfSpeech: "noun",
        engWord: "card"
      },
      {
        word: "ɥuꝯeꝷ",
        IPA: "/ʧuːˈʤet/",
        partOfSpeech: "noun",
        engWord: "guardian"
      },
      {
        word: "ɥuk",
        IPA: "/ʧuːk/",
        partOfSpeech: "adverb",
        engWord: "even"
      },
      {
        word: "ɥuka",
        IPA: "/ʧuˈka/",
        partOfSpeech: "noun",
        engWord: "crown"
      },
      {
        word: "ɥuka",
        IPA: "/ʧuːˈka/",
        partOfSpeech: "noun",
        engWord: "receipt"
      },
      {
        word: "ɥukaɥ",
        IPA: "/ʧuˈkaʧ/",
        partOfSpeech: "pronoun",
        engWord: "something"
      },
      {
        word: "ɥukuɥ",
        IPA: "/ʧuːˈkuːʧ/",
        partOfSpeech: "verb",
        engWord: "manifest"
      },
      {
        word: "ɥumeb",
        IPA: "/ʧuˈmeb/",
        partOfSpeech: "noun",
        engWord: "dash"
      },
      {
        word: "ɥumep",
        IPA: "/ʧuːˈmep/",
        partOfSpeech: "noun",
        engWord: "disease"
      },
      {
        word: "ɥumi",
        IPA: "/ʧuːˈmiː/",
        partOfSpeech: "noun",
        engWord: "dash"
      },
      {
        word: "ɥumib",
        IPA: "/ʧuˈmib/",
        partOfSpeech: "noun",
        engWord: "uniform"
      },
      {
        word: "ɥuꞃde",
        IPA: "/ʧunˈde/",
        partOfSpeech: "noun",
        engWord: "kind"
      },
      {
        word: "ɥuꞃe",
        IPA: "/ʧuˈne/",
        partOfSpeech: "noun",
        engWord: "unity"
      },
      {
        word: "ɥuꞃe",
        IPA: "/ʧuːˈne/",
        partOfSpeech: "adverb",
        engWord: "as"
      },
      {
        word: "ɥuꞃek",
        IPA: "/ʧuːˈnek/",
        partOfSpeech: "noun",
        engWord: "mine"
      },
      {
        word: "ɥuɲa",
        IPA: "/ʧuˈɲa/",
        partOfSpeech: "verb",
        engWord: "stroll"
      },
      {
        word: "ɥuɲa",
        IPA: "/ʧuːˈɲa/",
        partOfSpeech: "number",
        engWord: "six"
      },
      {
        word: "ɥuɲap",
        IPA: "/ʧuːˈɲap/",
        partOfSpeech: "noun",
        engWord: "lounge"
      },
      {
        word: "ɥuɲe",
        IPA: "/ʧuːˈɲe/",
        partOfSpeech: "noun",
        engWord: "skin"
      },
      {
        word: "ɥuɲo",
        IPA: "/ʧuːˈɲo/",
        partOfSpeech: "verb",
        engWord: "glance"
      },
      {
        word: "ɥuɲoɥ",
        IPA: "/ʧuˈɲoʧ/",
        partOfSpeech: "noun",
        engWord: "dot"
      },
      {
        word: "ɥuɲop",
        IPA: "/ʧuːˈɲop/",
        partOfSpeech: "noun",
        engWord: "maple"
      },
      {
        word: "ɥup",
        IPA: "/ʧuːp/",
        partOfSpeech: "adverb",
        engWord: "better"
      },
      {
        word: "ɥuꝭok",
        IPA: "/ʧuːˈʂok/",
        partOfSpeech: "adjective",
        engWord: "sure"
      },
      {
        word: "ɥuꝷ",
        IPA: "/ʧuːt/",
        partOfSpeech: "noun",
        engWord: "project"
      },
      {
        word: "ɥuꝷa",
        IPA: "/ʧuˈʈa/",
        partOfSpeech: "verb",
        engWord: "escape"
      },
      {
        word: "ɥuꝷa",
        IPA: "/ʧuːˈʈa/",
        partOfSpeech: "verb",
        engWord: "spoil"
      },
      {
        word: "ɥuꝷap",
        IPA: "/ʧuːˈʈap/",
        partOfSpeech: "noun",
        engWord: "excrement",
        partOfSpeech2: "verb",
        engWord2: "defecate"
      },
      {
        word: "ɥuꝷe",
        IPA: "/ʧuːˈʈe/",
        partOfSpeech: "verb",
        engWord: "substitute"
      },
      {
        word: "ɥuꝷeɥ",
        IPA: "/ʧuːˈʈeʧ/",
        partOfSpeech: "noun",
        engWord: "jaw"
      },
      {
        word: "ɥuu",
        IPA: "/ʧuˈu/",
        partOfSpeech: "verb",
        engWord: "search"
      },
      {
        word: "ɥuɏa",
        IPA: "/ʧuˈja/",
        partOfSpeech: "verb",
        engWord: "travel"
      },
      {
        word: "ɥuɏab",
        IPA: "/ʧuˈjab/",
        partOfSpeech: "noun",
        engWord: "surplus"
      },
      {
        word: "da",
        IPA: "/da/",
        partOfSpeech: "verb",
        engWord: "add, combine"
      },
      {
        word: "da",
        IPA: "/daː/",
        partOfSpeech: "noun",
        engWord: "tear"
      },
      {
        word: "daaꝯ",
        IPA: "/daˈaʤ/",
        partOfSpeech: "adjective",
        engWord: "favourite"
      },
      {
        word: "dabak",
        IPA: "/daˈbaːk/",
        partOfSpeech: "adjective",
        engWord: "late"
      },
      {
        word: "dabuk",
        IPA: "/daˈbuːk/",
        partOfSpeech: "preposition",
        engWord: "near"
      },
      {
        word: "daɥu",
        IPA: "/daˈʧu/",
        partOfSpeech: "noun",
        engWord: "swamp"
      },
      {
        word: "daꝯ",
        IPA: "/daʤ/",
        partOfSpeech: "verb",
        engWord: "dive"
      },
      {
        word: "daꝯek",
        IPA: "/daˈʤek/",
        partOfSpeech: "adjective",
        engWord: "outrageous"
      },
      {
        word: "dak",
        IPA: "/dak/",
        partOfSpeech: "verb",
        engWord: "recognise"
      },
      {
        word: "dak",
        IPA: "/daːk/",
        partOfSpeech: "verb",
        engWord: "blend"
      },
      {
        word: "daka",
        IPA: "/daˈka/",
        partOfSpeech: "adverb",
        engWord: "long"
      },
      {
        word: "daꝷa",
        IPA: "/daːˈʈa/",
        partOfSpeech: "determiner",
        engWord: "many"
      },
      {
        word: "daꝷe",
        IPA: "/daˈʈe/",
        partOfSpeech: "noun",
        engWord: "clinic"
      },
      {
        word: "daꝷe",
        IPA: "/daːˈʈe/",
        partOfSpeech: "noun",
        engWord: "fence"
      },
      {
        word: "daꝷek",
        IPA: "/daˈʈek/",
        partOfSpeech: "verb",
        engWord: "squash"
      },
      {
        word: "deɥ",
        IPA: "/deːʧ/",
        partOfSpeech: "verb",
        engWord: "tread"
      },
      {
        word: "di",
        IPA: "/di/",
        partOfSpeech: "noun",
        engWord: "weather"
      },
      {
        word: "di",
        IPA: "/diː/",
        partOfSpeech: "noun",
        engWord: "building"
      },
      {
        word: "diꝝek",
        IPA: "/diˈʔek/",
        partOfSpeech: "noun",
        engWord: "bunker"
      },
      {
        word: "dibu",
        IPA: "/diˈbuː/",
        partOfSpeech: "noun",
        engWord: "razor"
      },
      {
        word: "diɥik",
        IPA: "/diːˈʧik/",
        partOfSpeech: "adjective",
        engWord: "empty"
      },
      {
        word: "dide",
        IPA: "/diːˈde/",
        partOfSpeech: "conjunction",
        engWord: "after"
      },
      {
        word: "digek",
        IPA: "/diːˈgek/",
        partOfSpeech: "verb",
        engWord: "confront"
      },
      {
        word: "diggu",
        IPA: "/diːgˈguː/",
        partOfSpeech: "noun",
        engWord: "axis"
      },
      {
        word: "dik",
        IPA: "/dik/",
        partOfSpeech: "noun",
        engWord: "tongue"
      },
      {
        word: "dik",
        IPA: "/diːk/",
        partOfSpeech: "r.",
        engWord: "namely"
      },
      {
        word: "dika",
        IPA: "/diˈka/",
        partOfSpeech: "noun",
        engWord: "master"
      },
      {
        word: "dika",
        IPA: "/diːˈka/",
        partOfSpeech: "noun",
        engWord: "campaign"
      },
      {
        word: "diɲa",
        IPA: "/diˈɲa/",
        partOfSpeech: "verb",
        engWord: "rock (move back and forth)"
      },
      {
        word: "diꝷa",
        IPA: "/diˈʈa/",
        partOfSpeech: "verb",
        engWord: "drip"
      },
      {
        word: "diꝷak",
        IPA: "/diːˈʈak/",
        partOfSpeech: "verb",
        engWord: "curb"
      },
      {
        word: "diꝷek",
        IPA: "/diːˈʈek/",
        partOfSpeech: "noun",
        engWord: "parameter"
      },
      {
        word: "diɏak",
        IPA: "/diːˈjak/",
        partOfSpeech: "noun",
        engWord: "margin"
      },
      {
        word: "do",
        IPA: "/do/",
        partOfSpeech: "verb",
        engWord: "agree"
      },
      {
        word: "doꝝeꝯ",
        IPA: "/doˈʔeʤ/",
        partOfSpeech: "noun",
        engWord: "segregate"
      },
      {
        word: "doa",
        IPA: "/doˈa/",
        partOfSpeech: "verb",
        engWord: "disappoint"
      },
      {
        word: "dobuꝯ",
        IPA: "/doˈbuʤ/",
        partOfSpeech: "noun",
        engWord: "luck"
      },
      {
        word: "dobɏa",
        IPA: "/doˈbja/",
        partOfSpeech: "noun",
        engWord: "custody"
      },
      {
        word: "doɥe",
        IPA: "/doˈʧe/",
        partOfSpeech: "verb",
        engWord: "separate"
      },
      {
        word: "doɥi",
        IPA: "/doˈʧiː/",
        partOfSpeech: "noun",
        engWord: "temple"
      },
      {
        word: "doɥiꝯ",
        IPA: "/doˈʧiːʤ/",
        partOfSpeech: "verb",
        engWord: "reflect"
      },
      {
        word: "doɥu",
        IPA: "/doˈʧuː/",
        partOfSpeech: "verb",
        engWord: "admire"
      },
      {
        word: "doɥuꝯ",
        IPA: "/doˈʧuʤ/",
        partOfSpeech: "determiner",
        engWord: "former"
      },
      {
        word: "dodeꝯ",
        IPA: "/doˈdeʤ/",
        partOfSpeech: "conjunction",
        engWord: "even"
      },
      {
        word: "doe",
        IPA: "/doˈe/",
        partOfSpeech: "adjective",
        engWord: "pure"
      },
      {
        word: "doge",
        IPA: "/doˈge/",
        partOfSpeech: "verb",
        engWord: "situate"
      },
      {
        word: "doggu",
        IPA: "/dogˈguː/",
        partOfSpeech: "noun",
        engWord: "reef"
      },
      {
        word: "dohaꝯ",
        IPA: "/doˈhaʤ/",
        partOfSpeech: "verb",
        engWord: "decorate"
      },
      {
        word: "doꝯ",
        IPA: "/doʤ/",
        partOfSpeech: "conjunction",
        engWord: "so"
      },
      {
        word: "doꝯa",
        IPA: "/doˈʤa/",
        partOfSpeech: "noun",
        engWord: "tomb"
      },
      {
        word: "doꝯe",
        IPA: "/doˈʤe/",
        partOfSpeech: "noun",
        engWord: "planet"
      },
      {
        word: "doka",
        IPA: "/doˈka/",
        partOfSpeech: "verb",
        engWord: "warn"
      },
      {
        word: "domiꝯ",
        IPA: "/doˈmiʤ/",
        partOfSpeech: "verb",
        engWord: "forgive"
      },
      {
        word: "domu",
        IPA: "/doˈmu/",
        partOfSpeech: "adjective",
        engWord: "anxious"
      },
      {
        word: "domuꝯ",
        IPA: "/doˈmuʤ/",
        partOfSpeech: "noun",
        engWord: "knife"
      },
      {
        word: "doꞃe",
        IPA: "/doˈne/",
        partOfSpeech: "noun",
        engWord: "divorce"
      },
      {
        word: "doꞃhe",
        IPA: "/donˈhe/",
        partOfSpeech: "verb",
        engWord: "revolve"
      },
      {
        word: "doꞃu",
        IPA: "/doˈnu/",
        partOfSpeech: "noun",
        engWord: "offspring"
      },
      {
        word: "doɲa",
        IPA: "/doˈɲa/",
        partOfSpeech: "verb",
        engWord: "alleviate"
      },
      {
        word: "doɲaꝯ",
        IPA: "/donˈjaʤ/",
        partOfSpeech: "noun",
        engWord: "fossil"
      },
      {
        word: "dora",
        IPA: "/doˈɽa/",
        partOfSpeech: "noun",
        engWord: "rainbow"
      },
      {
        word: "doraꝯ",
        IPA: "/doˈɽaːʤ/",
        partOfSpeech: "noun",
        engWord: "lightning"
      },
      {
        word: "doꝷaꝯ",
        IPA: "/doˈʈaʤ/",
        partOfSpeech: "verb",
        engWord: "indulge"
      },
      {
        word: "doꝷe",
        IPA: "/doˈʈe/",
        partOfSpeech: "adjective",
        engWord: "deep"
      },
      {
        word: "doꝷeꝯ",
        IPA: "/doˈʈeʤ/",
        partOfSpeech: "adjective",
        engWord: "imminent"
      },
      {
        word: "doꝷo",
        IPA: "/doˈʈo/",
        partOfSpeech: "noun",
        engWord: "athlete"
      },
      {
        word: "dou",
        IPA: "/doˈuː/",
        partOfSpeech: "verb",
        engWord: "burst"
      },
      {
        word: "doɏa",
        IPA: "/doˈja/",
        partOfSpeech: "noun",
        engWord: "sequence"
      },
      {
        word: "du",
        IPA: "/du/",
        partOfSpeech: "noun",
        engWord: "part"
      },
      {
        word: "du",
        IPA: "/duː/",
        partOfSpeech: "noun",
        engWord: "prostitute"
      },
      {
        word: "duꝝ",
        IPA: "/duʔ/",
        partOfSpeech: "verb",
        engWord: "request"
      },
      {
        word: "duꝝe",
        IPA: "/duˈʔe/",
        partOfSpeech: "verb",
        engWord: "roll"
      },
      {
        word: "duꝝek",
        IPA: "/duˈʔeːk/",
        partOfSpeech: "noun",
        engWord: "peril"
      },
      {
        word: "duak",
        IPA: "/duːˈak/",
        partOfSpeech: "noun",
        engWord: "map"
      },
      {
        word: "dubi",
        IPA: "/duːˈbi/",
        partOfSpeech: "verb",
        engWord: "shine"
      },
      {
        word: "dubi",
        IPA: "/duːˈbiː/",
        partOfSpeech: "noun",
        engWord: "metropolis"
      },
      {
        word: "dubu",
        IPA: "/duˈbu/",
        partOfSpeech: "noun",
        engWord: "brass"
      },
      {
        word: "duɥi",
        IPA: "/duˈʧiː/",
        partOfSpeech: "verb",
        engWord: "incorporate"
      },
      {
        word: "duɥug",
        IPA: "/duˈʧug/",
        partOfSpeech: "verb",
        engWord: "haggle"
      },
      {
        word: "due",
        IPA: "/duˈe/",
        partOfSpeech: "verb",
        engWord: "adapt"
      },
      {
        word: "duek",
        IPA: "/duːˈek/",
        partOfSpeech: "noun",
        engWord: "cracker"
      },
      {
        word: "dugi",
        IPA: "/duˈgiː/",
        partOfSpeech: "noun",
        engWord: "vent"
      },
      {
        word: "duha",
        IPA: "/duːˈha/",
        partOfSpeech: "adjective",
        engWord: "vivid"
      },
      {
        word: "duk",
        IPA: "/duk/",
        partOfSpeech: "noun",
        engWord: "control"
      },
      {
        word: "duk",
        IPA: "/duːk/",
        partOfSpeech: "noun",
        engWord: "number"
      },
      {
        word: "duka",
        IPA: "/duːˈka/",
        partOfSpeech: "noun",
        engWord: "nephew"
      },
      {
        word: "dumi",
        IPA: "/duˈmi/",
        partOfSpeech: "verb",
        engWord: "tumble"
      },
      {
        word: "duꞃek",
        IPA: "/duːˈnek/",
        partOfSpeech: "noun",
        engWord: "democracy"
      },
      {
        word: "duɲa",
        IPA: "/duˈɲa/",
        partOfSpeech: "verb",
        engWord: "flick"
      },
      {
        word: "duꝭo",
        IPA: "/duˈʂo/",
        partOfSpeech: "noun",
        engWord: "homicide"
      },
      {
        word: "duꝷka",
        IPA: "/dutˈka/",
        partOfSpeech: "noun",
        engWord: "crystal"
      },
      {
        word: "duꝷkak",
        IPA: "/dutˈkak/",
        partOfSpeech: "noun",
        engWord: "rubble"
      },
      {
        word: "duu",
        IPA: "/duˈuː/",
        partOfSpeech: "verb",
        engWord: "pave"
      },
      {
        word: "e",
        IPA: "/e/",
        partOfSpeech: "verb",
        engWord: "spend"
      },
      {
        word: "e",
        IPA: "/eː/",
        partOfSpeech: "adverb",
        engWord: "too"
      },
      {
        word: "eꝝe",
        IPA: "/eˈʔe/",
        partOfSpeech: "noun",
        engWord: "trap",
        partOfSpeech2: "verb",
        engWord2: "trap"
      },
      {
        word: "ea",
        IPA: "/eːˈa/",
        partOfSpeech: "noun",
        engWord: "rebel"
      },
      {
        word: "eaꝷ",
        IPA: "/eːˈat/",
        partOfSpeech: "noun",
        engWord: "problem"
      },
      {
        word: "ebi",
        IPA: "/eˈbiː/",
        partOfSpeech: "noun",
        engWord: "referendum"
      },
      {
        word: "ebi",
        IPA: "/eːˈbi/",
        partOfSpeech: "verb",
        engWord: "dig"
      },
      {
        word: "ebi",
        IPA: "/eːˈbiː/",
        partOfSpeech: "noun",
        engWord: "conviction"
      },
      {
        word: "ebibi",
        IPA: "/eˈbiːbi/",
        partOfSpeech: "adjective",
        engWord: "ready"
      },
      {
        word: "ebiɲede",
        IPA: "/eˈbiːɲede/",
        partOfSpeech: "noun",
        engWord: "knee"
      },
      {
        word: "ebu",
        IPA: "/eˈbu/",
        partOfSpeech: "adverb",
        engWord: "finally"
      },
      {
        word: "ebu",
        IPA: "/eˈbuː/",
        partOfSpeech: "verb",
        engWord: "paralyse"
      },
      {
        word: "ebu",
        IPA: "/eːˈbu/",
        partOfSpeech: "verb",
        engWord: "block"
      },
      {
        word: "ebu",
        IPA: "/eːˈbuː/",
        partOfSpeech: "verb",
        engWord: "regret"
      },
      {
        word: "ebuꝷ",
        IPA: "/eˈbut/",
        partOfSpeech: "determiner",
        engWord: "less"
      },
      {
        word: "eɥa",
        IPA: "/eˈʧaː/",
        partOfSpeech: "verb",
        engWord: "run"
      },
      {
        word: "eɥe",
        IPA: "/eˈʧe/",
        partOfSpeech: "noun",
        engWord: "champion"
      },
      {
        word: "ede",
        IPA: "/eˈde/",
        partOfSpeech: "noun",
        engWord: "rank (position)"
      },
      {
        word: "ede",
        IPA: "/eːˈde/",
        partOfSpeech: "noun",
        engWord: "morning"
      },
      {
        word: "edu",
        IPA: "/eˈduː/",
        partOfSpeech: "adjective",
        engWord: "pastoral"
      },
      {
        word: "ee",
        IPA: "/eˈe/",
        partOfSpeech: "verb",
        engWord: "assume"
      },
      {
        word: "ee",
        IPA: "/eːˈe/",
        partOfSpeech: "noun",
        engWord: "atmosphere"
      },
      {
        word: "ege",
        IPA: "/eˈge/",
        partOfSpeech: "noun",
        engWord: "body"
      },
      {
        word: "egi",
        IPA: "/eˈgi/",
        partOfSpeech: "noun",
        engWord: "insurgent"
      },
      {
        word: "egi",
        IPA: "/eˈgiː/",
        partOfSpeech: "adverb",
        engWord: "sometimes"
      },
      {
        word: "egi",
        IPA: "/eːˈgiː/",
        partOfSpeech: "adjective",
        engWord: "sleek"
      },
      {
        word: "egu",
        IPA: "/eˈgu/",
        partOfSpeech: "verb",
        engWord: "tempt"
      },
      {
        word: "egu",
        IPA: "/eːˈgu/",
        partOfSpeech: "verb",
        engWord: "interpret"
      },
      {
        word: "eꝯe",
        IPA: "/eˈʤe/",
        partOfSpeech: "noun",
        engWord: "casino"
      },
      {
        word: "eꝯe",
        IPA: "/eːˈʤe/",
        partOfSpeech: "adjective",
        engWord: "bad"
      },
      {
        word: "eꝯemu",
        IPA: "/eːˈʤemuː/",
        partOfSpeech: "verb",
        engWord: "roam"
      },
      {
        word: "eꝯo",
        IPA: "/eˈʤo/",
        partOfSpeech: "noun",
        engWord: "scope"
      },
      {
        word: "eꝯo",
        IPA: "/eːˈʤo/",
        partOfSpeech: "verb",
        engWord: "replace"
      },
      {
        word: "eka",
        IPA: "/eˈka/",
        partOfSpeech: "noun",
        engWord: "device"
      },
      {
        word: "ekaꝷ",
        IPA: "/eːˈkat/",
        partOfSpeech: "verb",
        engWord: "gasp"
      },
      {
        word: "eki",
        IPA: "/eːˈki/",
        partOfSpeech: "verb",
        engWord: "exploit"
      },
      {
        word: "eku",
        IPA: "/eˈkuː/",
        partOfSpeech: "verb",
        engWord: "arm"
      },
      {
        word: "eku",
        IPA: "/eːˈkuː/",
        partOfSpeech: "noun",
        engWord: "nail"
      },
      {
        word: "eme",
        IPA: "/eːˈme/",
        partOfSpeech: "noun",
        engWord: "logic"
      },
      {
        word: "emi",
        IPA: "/eˈmi/",
        partOfSpeech: "verb",
        engWord: "duck"
      },
      {
        word: "emu",
        IPA: "/eˈmu/",
        partOfSpeech: "verb",
        engWord: "gather"
      },
      {
        word: "emuꝷe",
        IPA: "/eːˈmuːʈe/",
        partOfSpeech: "noun",
        engWord: "compound"
      },
      {
        word: "eꞃe",
        IPA: "/eˈne/",
        partOfSpeech: "noun",
        engWord: "book"
      },
      {
        word: "eꞃe",
        IPA: "/eːˈne/",
        partOfSpeech: "noun",
        engWord: "view"
      },
      {
        word: "eꞃu",
        IPA: "/eˈnu/",
        partOfSpeech: "noun",
        engWord: "poem"
      },
      {
        word: "eꞃu",
        IPA: "/eːˈnuː/",
        partOfSpeech: "verb",
        engWord: "attend"
      },
      {
        word: "eɲa",
        IPA: "/enˈja/",
        partOfSpeech: "noun",
        engWord: "stomach, belly (stomach area)"
      },
      {
        word: "eɲa",
        IPA: "/eˈɲa/",
        partOfSpeech: "adjective",
        engWord: "available"
      },
      {
        word: "eɲa",
        IPA: "/eːˈɲa/",
        partOfSpeech: "verb",
        engWord: "animate"
      },
      {
        word: "eɲe",
        IPA: "/eˈɲe/",
        partOfSpeech: "noun",
        engWord: "paradox"
      },
      {
        word: "eɲe",
        IPA: "/eːˈɲe/",
        partOfSpeech: "adjective",
        engWord: "peculiar"
      },
      {
        word: "eɲo",
        IPA: "/eːˈɲo/",
        partOfSpeech: "noun",
        engWord: "elk"
      },
      {
        word: "eo",
        IPA: "/eˈo/",
        partOfSpeech: "verb",
        engWord: "claim"
      },
      {
        word: "era",
        IPA: "/eˈɽa/",
        partOfSpeech: "verb",
        engWord: "carry"
      },
      {
        word: "era",
        IPA: "/eːˈɽaː/",
        partOfSpeech: "noun",
        engWord: "roof"
      },
      {
        word: "eraka",
        IPA: "/eːˈɽaka/",
        partOfSpeech: "adjective",
        engWord: "compatible"
      },
      {
        word: "erara",
        IPA: "/eːˈɽaɽa/",
        partOfSpeech: "verb",
        engWord: "take out"
      },
      {
        word: "eꝷ",
        IPA: "/et/",
        partOfSpeech: "noun",
        engWord: "terrace"
      },
      {
        word: "eꝷ",
        IPA: "/eːt/",
        partOfSpeech: "noun",
        engWord: "vacation"
      },
      {
        word: "eꝷa",
        IPA: "/eˈʈa/",
        partOfSpeech: "verb",
        engWord: "freeze"
      },
      {
        word: "eꝷa",
        IPA: "/eːˈʈa/",
        partOfSpeech: "adjective",
        engWord: "gross"
      },
      {
        word: "eꝷaꝷaꝯa",
        IPA: "/eˈʈaʈaʤa/",
        partOfSpeech: "noun",
        engWord: "standard"
      },
      {
        word: "eꝷe",
        IPA: "/eˈʈe/",
        partOfSpeech: "verb",
        engWord: "astonish"
      },
      {
        word: "eꝷe",
        IPA: "/eːˈʈe/",
        partOfSpeech: "noun",
        engWord: "cabin"
      },
      {
        word: "eꝷka",
        IPA: "/eːtˈka/",
        partOfSpeech: "noun",
        engWord: "shame"
      },
      {
        word: "eɏa",
        IPA: "/eˈja/",
        partOfSpeech: "noun",
        engWord: "answer"
      },
      {
        word: "eɏa",
        IPA: "/eːˈja/",
        partOfSpeech: "verb",
        engWord: "thrust"
      },
      {
        word: "eɏaꝷa",
        IPA: "/eˈjaʈa/",
        partOfSpeech: "noun",
        engWord: "ass"
      },
      {
        word: "eɏaꝷaɲe",
        IPA: "/eˈjaʈaɲe/",
        partOfSpeech: "noun",
        engWord: "grandfather"
      },
      {
        word: "eɏɏe",
        IPA: "/ejˈje/",
        partOfSpeech: "noun",
        engWord: "muscle"
      },
      {
        word: "eɏɏe",
        IPA: "/eːjˈje/",
        partOfSpeech: "preposition",
        engWord: "beyond"
      },
      {
        word: "ga",
        IPA: "/ga/",
        partOfSpeech: "noun",
        engWord: "desk"
      },
      {
        word: "ga",
        IPA: "/gaː/",
        partOfSpeech: "noun",
        engWord: "tree"
      },
      {
        word: "gaꝝep",
        IPA: "/gaˈʔep/",
        partOfSpeech: "noun",
        engWord: "raft"
      },
      {
        word: "gaa",
        IPA: "/gaˈa/",
        partOfSpeech: "noun",
        engWord: "oath"
      },
      {
        word: "gaa",
        IPA: "/gaːˈaː/",
        partOfSpeech: "adverb",
        engWord: "pretty"
      },
      {
        word: "gaap",
        IPA: "/gaˈap/",
        partOfSpeech: "noun",
        engWord: "sermon"
      },
      {
        word: "gaɥep",
        IPA: "/gaˈʧep/",
        partOfSpeech: "noun",
        engWord: "tide"
      },
      {
        word: "gaɥu",
        IPA: "/gaˈʧu/",
        partOfSpeech: "noun",
        engWord: "range"
      },
      {
        word: "gae",
        IPA: "/gaˈe/",
        partOfSpeech: "noun",
        engWord: "mug"
      },
      {
        word: "gae",
        IPA: "/gaːˈe/",
        partOfSpeech: "noun",
        engWord: "pea"
      },
      {
        word: "gagguɲ",
        IPA: "/gagˈguːɲ/",
        partOfSpeech: "verb",
        engWord: "inhibit"
      },
      {
        word: "gai",
        IPA: "/gaˈiː/",
        partOfSpeech: "noun",
        engWord: "type"
      },
      {
        word: "gaꝯe",
        IPA: "/gaˈʤe/",
        partOfSpeech: "verb",
        engWord: "advance"
      },
      {
        word: "game",
        IPA: "/gaˈme/",
        partOfSpeech: "verb",
        engWord: "worry"
      },
      {
        word: "gamu",
        IPA: "/gaˈmu/",
        partOfSpeech: "noun",
        engWord: "embassy"
      },
      {
        word: "gamuɲ",
        IPA: "/gaˈmuɲ/",
        partOfSpeech: "noun",
        engWord: "squirrel"
      },
      {
        word: "gaꞃe",
        IPA: "/gaˈne/",
        partOfSpeech: "noun",
        engWord: "judge"
      },
      {
        word: "gaɲ",
        IPA: "/gaɲ/",
        partOfSpeech: "noun",
        engWord: "oil"
      },
      {
        word: "gaɲap",
        IPA: "/gaːˈɲap/",
        partOfSpeech: "noun",
        engWord: "perception"
      },
      {
        word: "gap",
        IPA: "/gap/",
        partOfSpeech: "noun",
        engWord: "threat"
      },
      {
        word: "gap",
        IPA: "/gaːp/",
        partOfSpeech: "adjective",
        engWord: "local"
      },
      {
        word: "gaꝷe",
        IPA: "/gaˈʈe/",
        partOfSpeech: "noun",
        engWord: "spy"
      },
      {
        word: "gaꝷka",
        IPA: "/gatˈka/",
        partOfSpeech: "noun",
        engWord: "fashion"
      },
      {
        word: "ge",
        IPA: "/ge/",
        partOfSpeech: "noun",
        engWord: "loop"
      },
      {
        word: "ge",
        IPA: "/geː/",
        partOfSpeech: "conjunction",
        engWord: "that"
      },
      {
        word: "geꝝe",
        IPA: "/geːˈʔe/",
        partOfSpeech: "verb",
        engWord: "produce"
      },
      {
        word: "geaꝷ",
        IPA: "/geˈat/",
        partOfSpeech: "adjective",
        engWord: "polite"
      },
      {
        word: "gebi",
        IPA: "/geˈbiː/",
        partOfSpeech: "adjective",
        engWord: "sick, unwell",
        partOfSpeech2: "noun",
        engWord2: "health"
      },
      {
        word: "gebum",
        IPA: "/geːˈbuːm/",
        partOfSpeech: "noun",
        engWord: "faith"
      },
      {
        word: "gebuꝷ",
        IPA: "/geˈbut/",
        partOfSpeech: "noun",
        engWord: "punch"
      },
      {
        word: "geɥuꝷ",
        IPA: "/geˈʧut/",
        partOfSpeech: "adjective",
        engWord: "lush"
      },
      {
        word: "geeꝷ",
        IPA: "/geˈet/",
        partOfSpeech: "noun",
        engWord: "blur"
      },
      {
        word: "geeꝷ",
        IPA: "/geˈeːt/",
        partOfSpeech: "noun",
        engWord: "outline"
      },
      {
        word: "gege",
        IPA: "/geˈge/",
        partOfSpeech: "verb",
        engWord: "move"
      },
      {
        word: "geguꝷ",
        IPA: "/geˈgut/",
        partOfSpeech: "noun",
        engWord: "remnant"
      },
      {
        word: "geha",
        IPA: "/geˈha/",
        partOfSpeech: "noun",
        engWord: "jelly"
      },
      {
        word: "geka",
        IPA: "/geˈka/",
        partOfSpeech: "conjunction",
        engWord: "although"
      },
      {
        word: "gem",
        IPA: "/geːm/",
        partOfSpeech: "adjective",
        engWord: "right (direction)"
      },
      {
        word: "geꞃe",
        IPA: "/geːˈne/",
        partOfSpeech: "noun",
        engWord: "amateur"
      },
      {
        word: "geɲam",
        IPA: "/geːˈɲam/",
        partOfSpeech: "noun",
        engWord: "foil"
      },
      {
        word: "geɲaꝷ",
        IPA: "/genˈjat/",
        partOfSpeech: "noun",
        engWord: "station"
      },
      {
        word: "geɲe",
        IPA: "/geˈɲe/",
        partOfSpeech: "noun",
        engWord: "bicycle"
      },
      {
        word: "geɲeꝷ",
        IPA: "/geˈɲet/",
        partOfSpeech: "noun",
        engWord: "telescope"
      },
      {
        word: "geɲo",
        IPA: "/geːˈɲo/",
        partOfSpeech: "negation",
        engWord: "not",
        partOfSpeech2: "interjection",
        engWord2: "no"
      },
      {
        word: "gepaꝷ",
        IPA: "/geˈpaːt/",
        partOfSpeech: "noun",
        engWord: "waiter/waitress"
      },
      {
        word: "geꝷ",
        IPA: "/get/",
        partOfSpeech: "noun",
        engWord: "square"
      },
      {
        word: "geꝷaꝷ",
        IPA: "/geˈʈat/",
        partOfSpeech: "verb",
        engWord: "peel"
      },
      {
        word: "geꝷe",
        IPA: "/geˈʈe/",
        partOfSpeech: "verb",
        engWord: "conform"
      },
      {
        word: "geꝷkaꝷ",
        IPA: "/getˈkat/",
        partOfSpeech: "noun",
        engWord: "glue"
      },
      {
        word: "geuꝷ",
        IPA: "/geˈuːt/",
        partOfSpeech: "noun",
        engWord: "bud"
      },
      {
        word: "gi",
        IPA: "/gi/",
        partOfSpeech: "adverb",
        engWord: "otherwise"
      },
      {
        word: "gi",
        IPA: "/giː/",
        partOfSpeech: "verb",
        engWord: "rise"
      },
      {
        word: "giꝝe",
        IPA: "/giːˈʔe/",
        partOfSpeech: "noun",
        engWord: "vision"
      },
      {
        word: "gia",
        IPA: "/giˈa/",
        partOfSpeech: "verb",
        engWord: "apply"
      },
      {
        word: "gib",
        IPA: "/giːb/",
        partOfSpeech: "adjective",
        engWord: "absurd"
      },
      {
        word: "giɥa",
        IPA: "/giːˈʧaː/",
        partOfSpeech: "adjective",
        engWord: "full"
      },
      {
        word: "gidep",
        IPA: "/giːˈdep/",
        partOfSpeech: "verb",
        engWord: "boost"
      },
      {
        word: "giꝯe",
        IPA: "/giːˈʤe/",
        partOfSpeech: "noun",
        engWord: "skeptic"
      },
      {
        word: "gimep",
        IPA: "/giˈmep/",
        partOfSpeech: "noun",
        engWord: "match"
      },
      {
        word: "gimi",
        IPA: "/giːˈmiː/",
        partOfSpeech: "noun",
        engWord: "bell"
      },
      {
        word: "giꞃe",
        IPA: "/giˈne/",
        partOfSpeech: "noun",
        engWord: "discount"
      },
      {
        word: "giɲop",
        IPA: "/giˈɲop/",
        partOfSpeech: "noun",
        engWord: "crumb"
      },
      {
        word: "gip",
        IPA: "/gip/",
        partOfSpeech: "noun",
        engWord: "rifle"
      },
      {
        word: "gip",
        IPA: "/giːp/",
        partOfSpeech: "verb",
        engWord: "snatch"
      },
      {
        word: "gira",
        IPA: "/giːˈɽaː/",
        partOfSpeech: "noun",
        engWord: "rock, stone"
      },
      {
        word: "girap",
        IPA: "/giːˈɽap/",
        partOfSpeech: "verb",
        engWord: "devote"
      },
      {
        word: "giꝷep",
        IPA: "/giˈʈep/",
        partOfSpeech: "verb",
        engWord: "dub"
      },
      {
        word: "giꝷu",
        IPA: "/giːˈtu/",
        partOfSpeech: "adjective",
        engWord: "sensible"
      },
      {
        word: "go",
        IPA: "/go/",
        partOfSpeech: "verb",
        engWord: "should"
      },
      {
        word: "goꝝem",
        IPA: "/goˈʔem/",
        partOfSpeech: "noun",
        engWord: "calf"
      },
      {
        word: "goa",
        IPA: "/goˈa/",
        partOfSpeech: "adjective",
        engWord: "prompt"
      },
      {
        word: "goam",
        IPA: "/goˈam/",
        partOfSpeech: "preposition",
        engWord: "towards"
      },
      {
        word: "gobi",
        IPA: "/goˈbi/",
        partOfSpeech: "noun",
        engWord: "ethnicity"
      },
      {
        word: "gobu",
        IPA: "/goˈbuː/",
        partOfSpeech: "adjective",
        engWord: "native"
      },
      {
        word: "goɥa",
        IPA: "/goˈʧaː/",
        partOfSpeech: "noun",
        engWord: "alien"
      },
      {
        word: "goɥam",
        IPA: "/goˈʧaːm/",
        partOfSpeech: "noun",
        engWord: "electron"
      },
      {
        word: "goɥe",
        IPA: "/goˈʧe/",
        partOfSpeech: "adjective",
        engWord: "depressed"
      },
      {
        word: "goɥu",
        IPA: "/goˈʧu/",
        partOfSpeech: "noun",
        engWord: "noon"
      },
      {
        word: "gode",
        IPA: "/goˈde/",
        partOfSpeech: "verb",
        engWord: "evoke"
      },
      {
        word: "goe",
        IPA: "/goˈe/",
        partOfSpeech: "verb",
        engWord: "poise"
      },
      {
        word: "goem",
        IPA: "/goˈeːm/",
        partOfSpeech: "conjunction",
        engWord: "where"
      },
      {
        word: "goggu",
        IPA: "/gogˈguː/",
        partOfSpeech: "noun",
        engWord: "veil"
      },
      {
        word: "gogi",
        IPA: "/goˈgi/",
        partOfSpeech: "preposition",
        engWord: "away"
      },
      {
        word: "goꝯe",
        IPA: "/goˈʤe/",
        partOfSpeech: "verb",
        engWord: "drive"
      },
      {
        word: "goꝯem",
        IPA: "/goˈʤem/",
        partOfSpeech: "adjective",
        engWord: "elusive"
      },
      {
        word: "goka",
        IPA: "/goˈka/",
        partOfSpeech: "verb",
        engWord: "enable"
      },
      {
        word: "gom",
        IPA: "/gom/",
        partOfSpeech: "adverb",
        engWord: "ago"
      },
      {
        word: "gome",
        IPA: "/goˈme/",
        partOfSpeech: "noun",
        engWord: "motor"
      },
      {
        word: "gomi",
        IPA: "/goˈmiː/",
        partOfSpeech: "noun",
        engWord: "steel"
      },
      {
        word: "gomum",
        IPA: "/goˈmum/",
        partOfSpeech: "adjective",
        engWord: "excellent"
      },
      {
        word: "goɲ",
        IPA: "/goɲ/",
        partOfSpeech: "adjective",
        engWord: "clear"
      },
      {
        word: "goɲa",
        IPA: "/goˈɲa/",
        partOfSpeech: "verb",
        engWord: "exclude"
      },
      {
        word: "goꝷa",
        IPA: "/goˈʈa/",
        partOfSpeech: "averb",
        engWord: "resist"
      },
      {
        word: "goꝷaɲ",
        IPA: "/goˈʈaɲ/",
        partOfSpeech: "noun",
        engWord: "rabbit"
      },
      {
        word: "goꝷeɲ",
        IPA: "/goˈʈeɲ/",
        partOfSpeech: "noun",
        engWord: "treat"
      },
      {
        word: "goꝷkam",
        IPA: "/gotˈkam/",
        partOfSpeech: "adjective",
        engWord: "free"
      },
      {
        word: "gou",
        IPA: "/goˈuː/",
        partOfSpeech: "adjective",
        engWord: "narrative"
      },
      {
        word: "gu",
        IPA: "/gu/",
        partOfSpeech: "noun",
        engWord: "class"
      },
      {
        word: "gu",
        IPA: "/guː/",
        partOfSpeech: "article",
        engWord: "no"
      },
      {
        word: "guꝝe",
        IPA: "/guːˈʔe/",
        partOfSpeech: "adverb",
        engWord: "inevitably"
      },
      {
        word: "guap",
        IPA: "/guːˈap/",
        partOfSpeech: "noun",
        engWord: "oven"
      },
      {
        word: "gub",
        IPA: "/gub/",
        partOfSpeech: "adverb",
        engWord: "either"
      },
      {
        word: "gubib",
        IPA: "/guˈbib/",
        partOfSpeech: "verb",
        engWord: "prop"
      },
      {
        word: "gubu",
        IPA: "/guˈbuː/",
        partOfSpeech: "noun",
        engWord: "gown"
      },
      {
        word: "gubub",
        IPA: "/guˈbub/",
        partOfSpeech: "verb",
        engWord: "slide"
      },
      {
        word: "guɥa",
        IPA: "/guˈʧaː/",
        partOfSpeech: "noun",
        engWord: "point"
      },
      {
        word: "guɥab",
        IPA: "/guˈʧaːb/",
        partOfSpeech: "verb",
        engWord: "bang"
      },
      {
        word: "guɥe",
        IPA: "/guːˈʧe/",
        partOfSpeech: "noun",
        engWord: "party"
      },
      {
        word: "guɥep",
        IPA: "/guːˈʧep/",
        partOfSpeech: "verb",
        engWord: "drain",
        partOfSpeech2: "noun",
        engWord2: "drain"
      },
      {
        word: "guɥi",
        IPA: "/guˈʧiː/",
        partOfSpeech: "noun",
        engWord: "force"
      },
      {
        word: "guɥu",
        IPA: "/guˈʧu/",
        partOfSpeech: "noun",
        engWord: "sovereign"
      },
      {
        word: "guɥu",
        IPA: "/guːˈʧu/",
        partOfSpeech: "adverb",
        engWord: "maybe"
      },
      {
        word: "gudeb",
        IPA: "/guˈdeb/",
        partOfSpeech: "noun",
        engWord: "image"
      },
      {
        word: "gudu",
        IPA: "/guːˈduː/",
        partOfSpeech: "conjunction",
        engWord: "though"
      },
      {
        word: "gue",
        IPA: "/guˈe/",
        partOfSpeech: "verb",
        engWord: "hate"
      },
      {
        word: "gueb",
        IPA: "/guˈeb/",
        partOfSpeech: "noun",
        engWord: "graphic"
      },
      {
        word: "gugi",
        IPA: "/guːˈgiː/",
        partOfSpeech: "noun",
        engWord: "laboratory"
      },
      {
        word: "gugu",
        IPA: "/guːˈgu/",
        partOfSpeech: "verb",
        engWord: "chat"
      },
      {
        word: "guguꝷ",
        IPA: "/guːˈguːt/",
        partOfSpeech: "noun",
        engWord: "magnet"
      },
      {
        word: "guꝯa",
        IPA: "/guːˈʤa/",
        partOfSpeech: "verb",
        engWord: "perch"
      },
      {
        word: "guka",
        IPA: "/guːˈka/",
        partOfSpeech: "noun",
        engWord: "eagle"
      },
      {
        word: "gumeb",
        IPA: "/guˈmeb/",
        partOfSpeech: "noun",
        engWord: "linen"
      },
      {
        word: "gumeꝷ",
        IPA: "/guːˈmet/",
        partOfSpeech: "verb",
        engWord: "entail"
      },
      {
        word: "gumup",
        IPA: "/guːˈmup/",
        partOfSpeech: "adjective",
        engWord: "obesie"
      },
      {
        word: "gumup",
        IPA: "/guːˈmuːp/",
        partOfSpeech: "verb",
        engWord: "slip"
      },
      {
        word: "gumuꝷ",
        IPA: "/guːˈmut/",
        partOfSpeech: "noun",
        engWord: "illness"
      },
      {
        word: "guꞃde",
        IPA: "/gunˈde/",
        partOfSpeech: "noun",
        engWord: "priest"
      },
      {
        word: "guꞃe",
        IPA: "/guːˈne/",
        partOfSpeech: "noun",
        engWord: "petition"
      },
      {
        word: "guɲab",
        IPA: "/guˈɲab/",
        partOfSpeech: "noun",
        engWord: "hay"
      },
      {
        word: "guɲaꝷ",
        IPA: "/guːˈɲat/",
        partOfSpeech: "noun",
        engWord: "bullet"
      },
      {
        word: "gup",
        IPA: "/guːp/",
        partOfSpeech: "preposition",
        engWord: "under"
      },
      {
        word: "guꝷ",
        IPA: "/guːt/",
        partOfSpeech: "verb",
        engWord: "return, go back"
      },
      {
        word: "guꝷa",
        IPA: "/guːˈʈa/",
        partOfSpeech: "verb",
        engWord: "uncover"
      },
      {
        word: "guꝷab",
        IPA: "/guˈʈab/",
        partOfSpeech: "verb",
        engWord: "find"
      },
      {
        word: "guꝷe",
        IPA: "/guˈʈe/",
        partOfSpeech: "adjective",
        engWord: "dire"
      },
      {
        word: "guꝷe",
        IPA: "/guːˈʈe/",
        partOfSpeech: "verb",
        engWord: "deter"
      },
      {
        word: "ha",
        IPA: "/ha/",
        partOfSpeech: "noun",
        engWord: "interest"
      },
      {
        word: "ha",
        IPA: "/haː/",
        partOfSpeech: "noun",
        engWord: "saddle"
      },
      {
        word: "haꝝe",
        IPA: "/haˈʔeː/",
        partOfSpeech: "noun",
        engWord: "chance"
      },
      {
        word: "haaab",
        IPA: "/haːˈaab/",
        partOfSpeech: "verb",
        engWord: "touch",
        partOfSpeech2: "noun",
        engWord2: "touch"
      },
      {
        word: "haaꝯe",
        IPA: "/haˈaʤe/",
        partOfSpeech: "noun",
        engWord: "breast"
      },
      {
        word: "haaka",
        IPA: "/haˈaːka/",
        partOfSpeech: "verb",
        engWord: "seek"
      },
      {
        word: "haao",
        IPA: "/haːˈao/",
        partOfSpeech: "verb",
        engWord: "murmur"
      },
      {
        word: "haaꝷe",
        IPA: "/haˈaʈe/",
        partOfSpeech: "noun",
        engWord: "saucepan"
      },
      {
        word: "hab",
        IPA: "/hab/",
        partOfSpeech: "noun",
        engWord: "earth"
      },
      {
        word: "hab",
        IPA: "/haːb/",
        partOfSpeech: "adjective",
        engWord: "mean"
      },
      {
        word: "habib",
        IPA: "/haːˈbiːb/",
        partOfSpeech: "noun",
        engWord: "rule"
      },
      {
        word: "habumup",
        IPA: "/haˈbumup/",
        partOfSpeech: "noun",
        engWord: "backpack"
      },
      {
        word: "haɥi",
        IPA: "/haˈʧiː/",
        partOfSpeech: "adjective",
        engWord: "sudden"
      },
      {
        word: "haɥiꝝe",
        IPA: "/haˈʧiʔe/",
        partOfSpeech: "adverb",
        engWord: "rather"
      },
      {
        word: "haɥu",
        IPA: "/haˈʧu/",
        partOfSpeech: "adjective",
        engWord: "cute"
      },
      {
        word: "hade",
        IPA: "/haːˈde/",
        partOfSpeech: "adjective",
        engWord: "nude"
      },
      {
        word: "hae",
        IPA: "/haˈe/",
        partOfSpeech: "preposition",
        engWord: "above"
      },
      {
        word: "hae",
        IPA: "/haːˈe/",
        partOfSpeech: "noun",
        engWord: "bag"
      },
      {
        word: "hagekap",
        IPA: "/haˈgekap/",
        partOfSpeech: "verb",
        engWord: "sweat"
      },
      {
        word: "hageme",
        IPA: "/haˈgeme/",
        partOfSpeech: "noun",
        engWord: "entry"
      },
      {
        word: "hagi",
        IPA: "/haˈgiː/",
        partOfSpeech: "noun",
        engWord: "hybrid"
      },
      {
        word: "hagi",
        IPA: "/haːˈgiː/",
        partOfSpeech: "noun",
        engWord: "diner"
      },
      {
        word: "hagu",
        IPA: "/haˈgu/",
        partOfSpeech: "noun",
        engWord: "soldier"
      },
      {
        word: "hai",
        IPA: "/haˈiː/",
        partOfSpeech: "noun",
        engWord: "wax"
      },
      {
        word: "haꝯeb",
        IPA: "/haːˈʤeb/",
        partOfSpeech: "noun",
        engWord: "gold"
      },
      {
        word: "haꝯedu",
        IPA: "/haˈʤeduː/",
        partOfSpeech: "verb",
        engWord: "hang"
      },
      {
        word: "haꝯo",
        IPA: "/haːˈʤo/",
        partOfSpeech: "noun",
        engWord: "location"
      },
      {
        word: "hakup",
        IPA: "/haːˈkuːp/",
        partOfSpeech: "verb",
        engWord: "patrol"
      },
      {
        word: "hame",
        IPA: "/haˈme/",
        partOfSpeech: "verb",
        engWord: "base"
      },
      {
        word: "hamuɲ",
        IPA: "/haˈmuːɲ/",
        partOfSpeech: "noun",
        engWord: "affection"
      },
      {
        word: "haꞃdeɲa",
        IPA: "/hanˈdeɲa/",
        partOfSpeech: "adjective",
        engWord: "median"
      },
      {
        word: "haꞃe",
        IPA: "/haːˈne/",
        partOfSpeech: "preposition",
        engWord: "because"
      },
      {
        word: "haꞃeꝷa",
        IPA: "/haˈneʈa/",
        partOfSpeech: "noun",
        engWord: "mess"
      },
      {
        word: "haꞃu",
        IPA: "/haːˈnu/",
        partOfSpeech: "verb",
        engWord: "pace"
      },
      {
        word: "haɲa",
        IPA: "/haˈɲa/",
        partOfSpeech: "verb",
        engWord: "suggest"
      },
      {
        word: "haɲameɲ",
        IPA: "/haˈɲameɲ/",
        partOfSpeech: "noun",
        engWord: "span"
      },
      {
        word: "haɲaꝷaɲ",
        IPA: "/hanˈjaʈaɲ/",
        partOfSpeech: "noun",
        engWord: "uncle"
      },
      {
        word: "haɲe",
        IPA: "/haˈɲe/",
        partOfSpeech: "noun",
        engWord: "counsel"
      },
      {
        word: "haɲeb",
        IPA: "/haˈɲeb/",
        partOfSpeech: "preposition",
        engWord: "via"
      },
      {
        word: "haɲo",
        IPA: "/haːˈɲo/",
        partOfSpeech: "noun",
        engWord: "bean"
      },
      {
        word: "hap",
        IPA: "/hap/",
        partOfSpeech: "noun",
        engWord: "cavity"
      },
      {
        word: "haragep",
        IPA: "/haˈɽagep/",
        partOfSpeech: "noun",
        engWord: "rod"
      },
      {
        word: "haꝷa",
        IPA: "/haˈʈa/",
        partOfSpeech: "noun",
        engWord: "mask"
      },
      {
        word: "haꝷa",
        IPA: "/haːˈʈa/",
        partOfSpeech: "noun",
        engWord: "ruler"
      },
      {
        word: "haꝷaꝝe",
        IPA: "/haˈʈaʔe/",
        partOfSpeech: "noun",
        engWord: "scene"
      },
      {
        word: "haꝷauɲ",
        IPA: "/haˈʈauːɲ/",
        partOfSpeech: "adjective",
        engWord: "sour"
      },
      {
        word: "haꝷe",
        IPA: "/haːˈʈe/",
        partOfSpeech: "verb",
        engWord: "elevate"
      },
      {
        word: "haꝷedeb",
        IPA: "/haːˈʈedeb/",
        partOfSpeech: "adjective",
        engWord: "brown"
      },
      {
        word: "haꝷo",
        IPA: "/haˈʈo/",
        partOfSpeech: "noun",
        engWord: "official"
      },
      {
        word: "haꝷu",
        IPA: "/haːˈtu/",
        partOfSpeech: "verb",
        engWord: "sponsor"
      },
      {
        word: "haꝷuaɲ",
        IPA: "/haˈtuaɲ/",
        partOfSpeech: "adjective",
        engWord: "ironic"
      },
      {
        word: "haɏa",
        IPA: "/haˈja/",
        partOfSpeech: "noun",
        engWord: "lord"
      },
      {
        word: "he",
        IPA: "/he/",
        partOfSpeech: "conjunction",
        engWord: "but"
      },
      {
        word: "he",
        IPA: "/heː/",
        partOfSpeech: "verb",
        engWord: "leap"
      },
      {
        word: "heꝝe",
        IPA: "/heˈʔe/",
        partOfSpeech: "verb",
        engWord: "foresee"
      },
      {
        word: "heꝝeꝝe",
        IPA: "/heːˈʔeʔe/",
        partOfSpeech: "noun",
        engWord: "bitch"
      },
      {
        word: "heꝝeb",
        IPA: "/heːˈʔeb/",
        partOfSpeech: "verb",
        engWord: "display"
      },
      {
        word: "heꝝede",
        IPA: "/heˈʔede/",
        partOfSpeech: "noun",
        engWord: "pottery"
      },
      {
        word: "hea",
        IPA: "/heˈa/",
        partOfSpeech: "noun",
        engWord: "emotion"
      },
      {
        word: "hea",
        IPA: "/heːˈa/",
        partOfSpeech: "noun",
        engWord: "saw"
      },
      {
        word: "heb",
        IPA: "/heb/",
        partOfSpeech: "adjective",
        engWord: "major"
      },
      {
        word: "heb",
        IPA: "/heːb/",
        partOfSpeech: "determiner",
        engWord: "those"
      },
      {
        word: "hebi",
        IPA: "/heˈbiː/",
        partOfSpeech: "noun",
        engWord: "mud"
      },
      {
        word: "hebiꝯe",
        IPA: "/heˈbiːʤe/",
        partOfSpeech: "noun",
        engWord: "artery"
      },
      {
        word: "hebu",
        IPA: "/heːˈbu/",
        partOfSpeech: "adverb",
        engWord: "okay"
      },
      {
        word: "hebub",
        IPA: "/heːˈbuːb/",
        partOfSpeech: "noun",
        engWord: "logo"
      },
      {
        word: "hebum",
        IPA: "/heˈbum/",
        partOfSpeech: "adjective",
        engWord: "external"
      },
      {
        word: "hebuɏa",
        IPA: "/heːˈbuja/",
        partOfSpeech: "noun",
        engWord: "drama"
      },
      {
        word: "heɥaɲa",
        IPA: "/heːˈʧaːɲa/",
        partOfSpeech: "pronoun",
        engWord: "each"
      },
      {
        word: "heɥi",
        IPA: "/heˈʧiː/",
        partOfSpeech: "noun",
        engWord: "staple"
      },
      {
        word: "heɥim",
        IPA: "/heːˈʧiːm/",
        partOfSpeech: "verb",
        engWord: "shake"
      },
      {
        word: "heɥu",
        IPA: "/heˈʧuː/",
        partOfSpeech: "verb",
        engWord: "decide"
      },
      {
        word: "heɥuem",
        IPA: "/heːˈʧuem/",
        partOfSpeech: "noun",
        engWord: "challenge"
      },
      {
        word: "hed",
        IPA: "/heːd/",
        partOfSpeech: "pronoun",
        engWord: "you (object pl.)"
      },
      {
        word: "hede",
        IPA: "/heˈde/",
        partOfSpeech: "adjective",
        engWord: "triple"
      },
      {
        word: "hedeɥe",
        IPA: "/heˈdeʧe/",
        partOfSpeech: "verb",
        engWord: "discourage"
      },
      {
        word: "hee",
        IPA: "/heˈe/",
        partOfSpeech: "verb",
        engWord: "study"
      },
      {
        word: "heekab",
        IPA: "/heːˈekab/",
        partOfSpeech: "verb",
        engWord: "cover"
      },
      {
        word: "hege",
        IPA: "/heːˈge/",
        partOfSpeech: "adjective",
        engWord: "slow"
      },
      {
        word: "hegeb",
        IPA: "/heːˈgeb/",
        partOfSpeech: "noun",
        engWord: "employer"
      },
      {
        word: "heggaꝷa",
        IPA: "/hegˈgaːʈa/",
        partOfSpeech: "noun",
        engWord: "research"
      },
      {
        word: "hegi",
        IPA: "/heːˈgiː/",
        partOfSpeech: "noun",
        engWord: "group"
      },
      {
        word: "hegoɲ",
        IPA: "/heːˈgoɲ/",
        partOfSpeech: "adverb",
        engWord: "clearly"
      },
      {
        word: "heguꝷa",
        IPA: "/heːˈguʈa/",
        partOfSpeech: "adjective",
        engWord: "daunting"
      },
      {
        word: "hehaɥi",
        IPA: "/heːˈhaʧiː/",
        partOfSpeech: "adverb",
        engWord: "suddenly"
      },
      {
        word: "heꝯeb",
        IPA: "/heˈʤeb/",
        partOfSpeech: "verb",
        engWord: "protest"
      },
      {
        word: "heꝯeɥib",
        IPA: "/heˈʤeʧib/",
        partOfSpeech: "verb",
        engWord: "regulate"
      },
      {
        word: "heꝯem",
        IPA: "/heˈʤem/",
        partOfSpeech: "noun",
        engWord: "niece"
      },
      {
        word: "heꝯemu",
        IPA: "/heːˈʤemu/",
        partOfSpeech: "adverb",
        engWord: "quickly"
      },
      {
        word: "heꝯo",
        IPA: "/heˈʤo/",
        partOfSpeech: "preposition",
        engWord: "outside"
      },
      {
        word: "heꝯoa",
        IPA: "/heːˈʤoaː/",
        partOfSpeech: "adverb",
        engWord: "simply"
      },
      {
        word: "hekagu",
        IPA: "/heˈkagu/",
        partOfSpeech: "noun",
        engWord: "click"
      },
      {
        word: "hekaɲe",
        IPA: "/heːˈkaɲe/",
        partOfSpeech: "verb",
        engWord: "disperse"
      },
      {
        word: "heku",
        IPA: "/heːˈkuː/",
        partOfSpeech: "adjective",
        engWord: "innocent"
      },
      {
        word: "hem",
        IPA: "/hem/",
        partOfSpeech: "verb",
        engWord: "set"
      },
      {
        word: "hem",
        IPA: "/heːm/",
        partOfSpeech: "noun",
        engWord: "highlight"
      },
      {
        word: "heme",
        IPA: "/heːˈme/",
        partOfSpeech: "verb",
        engWord: "linger"
      },
      {
        word: "hemem",
        IPA: "/heˈmem/",
        partOfSpeech: "verb",
        engWord: "differ"
      },
      {
        word: "hemum",
        IPA: "/heˈmum/",
        partOfSpeech: "adjective",
        engWord: "serious"
      },
      {
        word: "heꞃdeb",
        IPA: "/henˈdeb/",
        partOfSpeech: "noun",
        engWord: "stool"
      },
      {
        word: "heꞃegu",
        IPA: "/heˈnegu/",
        partOfSpeech: "adjective",
        engWord: "probable"
      },
      {
        word: "heꞃu",
        IPA: "/heˈnuː/",
        partOfSpeech: "adjective",
        engWord: "cool (slightly cold)"
      },
      {
        word: "heɲa",
        IPA: "/heˈɲa/",
        partOfSpeech: "noun",
        engWord: "shaft"
      },
      {
        word: "heɲab",
        IPA: "/heːˈɲab/",
        partOfSpeech: "verb",
        engWord: "stop, arrest"
      },
      {
        word: "heɲam",
        IPA: "/heːnˈjam/",
        partOfSpeech: "noun",
        engWord: "store"
      },
      {
        word: "heram",
        IPA: "/heːˈɽam/",
        partOfSpeech: "verb",
        engWord: "fail"
      },
      {
        word: "heraɲe",
        IPA: "/heˈɽaːɲeː/",
        partOfSpeech: "noun",
        engWord: "magic"
      },
      {
        word: "heꝭeeo",
        IPA: "/heːˈʂeːeo/",
        partOfSpeech: "adverb",
        engWord: "recently"
      },
      {
        word: "heꝷa",
        IPA: "/heˈʈa/",
        partOfSpeech: "adjective",
        engWord: "slender"
      },
      {
        word: "heꝷe",
        IPA: "/heˈʈe/",
        partOfSpeech: "verb",
        engWord: "die"
      },
      {
        word: "heꝷe",
        IPA: "/heːˈʈe/",
        partOfSpeech: "adjective",
        engWord: "static"
      },
      {
        word: "heꝷka",
        IPA: "/heːtˈka/",
        partOfSpeech: "noun",
        engWord: "crest"
      },
      {
        word: "hi",
        IPA: "/hi/",
        partOfSpeech: "adverb",
        engWord: "today"
      },
      {
        word: "hi",
        IPA: "/hiː/",
        partOfSpeech: "noun",
        engWord: "report"
      },
      {
        word: "hiꝝeem",
        IPA: "/hiːˈʔeem/",
        partOfSpeech: "noun",
        engWord: "flock"
      },
      {
        word: "hiꝝeep",
        IPA: "/hiˈʔeep/",
        partOfSpeech: "noun",
        engWord: "spell (of magic)"
      },
      {
        word: "hiai",
        IPA: "/hiːˈaiː/",
        partOfSpeech: "adjective",
        engWord: "confidential"
      },
      {
        word: "hiaꝷe",
        IPA: "/hiːˈaːʈe/",
        partOfSpeech: "noun",
        engWord: "paint",
        partOfSpeech2: "verb",
        engWord2: "paint"
      },
      {
        word: "hibi",
        IPA: "/hiːˈbi/",
        partOfSpeech: "adjective",
        engWord: "skinny"
      },
      {
        word: "hibige",
        IPA: "/hiˈbige/",
        partOfSpeech: "preposition",
        engWord: "onto"
      },
      {
        word: "hibiỻ",
        IPA: "/hiːˈbiːɭ/",
        partOfSpeech: "verb",
        engWord: "realise"
      },
      {
        word: "hibiu",
        IPA: "/hiˈbiuː/",
        partOfSpeech: "noun",
        engWord: "costume"
      },
      {
        word: "hibu",
        IPA: "/hiːˈbu/",
        partOfSpeech: "adjective",
        engWord: "mid"
      },
      {
        word: "hibup",
        IPA: "/hiːˈbup/",
        partOfSpeech: "noun",
        engWord: "iron"
      },
      {
        word: "hiɥa",
        IPA: "/hiˈʧaː/",
        partOfSpeech: "verb",
        engWord: "choose"
      },
      {
        word: "hiɥerap",
        IPA: "/hiˈʧeɽap/",
        partOfSpeech: "verb",
        engWord: "hold"
      },
      {
        word: "hiɥi",
        IPA: "/hiːˈʧi/",
        partOfSpeech: "verb",
        engWord: "intercept"
      },
      {
        word: "hiɥi",
        IPA: "/hiːˈʧiː/",
        partOfSpeech: "verb",
        engWord: "achieve"
      },
      {
        word: "hiɥub",
        IPA: "/hiːˈʧuːb/",
        partOfSpeech: "adjective",
        engWord: "dense"
      },
      {
        word: "hide",
        IPA: "/hiːˈde/",
        partOfSpeech: "conjunction",
        engWord: "until"
      },
      {
        word: "hidege",
        IPA: "/hiːˈdege/",
        partOfSpeech: "noun",
        engWord: "incident"
      },
      {
        word: "hidu",
        IPA: "/hiːˈduː/",
        partOfSpeech: "adjective",
        engWord: "urban"
      },
      {
        word: "hiege",
        IPA: "/hiˈege/",
        partOfSpeech: "noun",
        engWord: "concession"
      },
      {
        word: "hieɏ",
        IPA: "/hiːˈej/",
        partOfSpeech: "noun",
        engWord: "race"
      },
      {
        word: "higeɲa",
        IPA: "/hiˈgeɲa/",
        partOfSpeech: "adjective",
        engWord: "wonderful"
      },
      {
        word: "higi",
        IPA: "/hiˈgiː/",
        partOfSpeech: "noun",
        engWord: "skull"
      },
      {
        word: "hiha",
        IPA: "/hiːˈha/",
        partOfSpeech: "verb",
        engWord: "camp"
      },
      {
        word: "hihap",
        IPA: "/hiˈhap/",
        partOfSpeech: "adjective",
        engWord: "arrogant"
      },
      {
        word: "hiꝯe",
        IPA: "/hiˈʤe/",
        partOfSpeech: "noun",
        engWord: "hospital"
      },
      {
        word: "hiꝯe",
        IPA: "/hiːˈʤe/",
        partOfSpeech: "adjective",
        engWord: "robust"
      },
      {
        word: "hiꝯem",
        IPA: "/hiːˈʤem/",
        partOfSpeech: "noun",
        engWord: "toast"
      },
      {
        word: "hika",
        IPA: "/hiːˈka/",
        partOfSpeech: "adjective",
        engWord: "optical"
      },
      {
        word: "hikabu",
        IPA: "/hiˈkabu/",
        partOfSpeech: "noun",
        engWord: "anchor"
      },
      {
        word: "hikap",
        IPA: "/hiˈkap/",
        partOfSpeech: "adjective",
        engWord: "right (correct)"
      },
      {
        word: "hikuꝷka",
        IPA: "/hiːˈkuːtka/",
        partOfSpeech: "noun",
        engWord: "widow"
      },
      {
        word: "hiỻ",
        IPA: "/hiːɭ/",
        partOfSpeech: "noun",
        engWord: "allocation"
      },
      {
        word: "him",
        IPA: "/him/",
        partOfSpeech: "noun",
        engWord: "nut"
      },
      {
        word: "him",
        IPA: "/hiːm/",
        partOfSpeech: "verb",
        engWord: "lean"
      },
      {
        word: "hime",
        IPA: "/hiːˈme/",
        partOfSpeech: "noun",
        engWord: "resource"
      },
      {
        word: "himeku",
        IPA: "/hiːˈmekuː/",
        partOfSpeech: "noun",
        engWord: "film"
      },
      {
        word: "himem",
        IPA: "/hiˈmem/",
        partOfSpeech: "noun",
        engWord: "sky"
      },
      {
        word: "himum",
        IPA: "/hiːˈmum/",
        partOfSpeech: "noun",
        engWord: "wallet"
      },
      {
        word: "hiꞃe",
        IPA: "/hiˈne/",
        partOfSpeech: "noun",
        engWord: "reign"
      },
      {
        word: "hiꞃe",
        IPA: "/hiːˈne/",
        partOfSpeech: "verb",
        engWord: "distinguish"
      },
      {
        word: "hiꞃeỻ",
        IPA: "/hiːˈneɭ/",
        partOfSpeech: "pronoun",
        engWord: "everybody"
      },
      {
        word: "hiɲep",
        IPA: "/hiːˈɲep/",
        partOfSpeech: "verb",
        engWord: "dangle"
      },
      {
        word: "hip",
        IPA: "/hiːp/",
        partOfSpeech: "verb",
        engWord: "deduce"
      },
      {
        word: "hira",
        IPA: "/hiːˈɽa/",
        partOfSpeech: "verb",
        engWord: "vote"
      },
      {
        word: "hiraap",
        IPA: "/hiˈɽaap/",
        partOfSpeech: "noun",
        engWord: "veteran"
      },
      {
        word: "hiraɥaɏ",
        IPA: "/hiˈɽaʧaːj/",
        partOfSpeech: "verb",
        engWord: "embark"
      },
      {
        word: "hiꝷa",
        IPA: "/hiˈʈa/",
        partOfSpeech: "verb",
        engWord: "influence"
      },
      {
        word: "hiꝷa",
        IPA: "/hiːˈʈa/",
        partOfSpeech: "noun",
        engWord: "detail"
      },
      {
        word: "hiꝷab",
        IPA: "/hiːˈʈab/",
        partOfSpeech: "noun",
        engWord: "rubber"
      },
      {
        word: "hiꝷabuɏ",
        IPA: "/hiːˈʈabuj/",
        partOfSpeech: "verb",
        engWord: "cheer"
      },
      {
        word: "hiꝷaɥa",
        IPA: "/hiːˈʈaʧaː/",
        partOfSpeech: "verb",
        engWord: "distort"
      },
      {
        word: "hiꝷaꝷe",
        IPA: "/hiˈʈaʈe/",
        partOfSpeech: "verb",
        engWord: "enlist"
      },
      {
        word: "hiꝷe",
        IPA: "/hiːˈʈeː/",
        partOfSpeech: "noun",
        engWord: "vagina"
      },
      {
        word: "hiꝷep",
        IPA: "/hiːˈʈep/",
        partOfSpeech: "noun",
        engWord: "arch"
      },
      {
        word: "hiꝷogeb",
        IPA: "/hiːˈʈogeb/",
        partOfSpeech: "preposition",
        engWord: "regarding"
      },
      {
        word: "hiꝷu",
        IPA: "/hiːˈtu/",
        partOfSpeech: "verb",
        engWord: "persist"
      },
      {
        word: "hiu",
        IPA: "/hiˈu/",
        partOfSpeech: "noun",
        engWord: "licence"
      },
      {
        word: "hiɏ",
        IPA: "/hij/",
        partOfSpeech: "noun",
        engWord: "east"
      },
      {
        word: "hiɏ",
        IPA: "/hiːj/",
        partOfSpeech: "verb",
        engWord: "say"
      },
      {
        word: "ho",
        IPA: "/ho/",
        partOfSpeech: "pronoun",
        engWord: "one"
      },
      {
        word: "hoꝝe",
        IPA: "/hoˈʔe/",
        partOfSpeech: "noun",
        engWord: "present (time)"
      },
      {
        word: "hoꝝeꝝe",
        IPA: "/hoˈʔeʔe/",
        partOfSpeech: "noun",
        engWord: "ship"
      },
      {
        word: "hoꝝeb",
        IPA: "/hoˈʔeb/",
        partOfSpeech: "conjunction",
        engWord: "since"
      },
      {
        word: "hoa",
        IPA: "/hoˈa/",
        partOfSpeech: "noun",
        engWord: "passion"
      },
      {
        word: "hoa",
        IPA: "/hoˈaː/",
        partOfSpeech: "verb",
        engWord: "remember"
      },
      {
        word: "hoab",
        IPA: "/hoˈab/",
        partOfSpeech: "determiner",
        engWord: "most"
      },
      {
        word: "hoab",
        IPA: "/hoˈaːb/",
        partOfSpeech: "verb",
        engWord: "crash",
        partOfSpeech2: "noun",
        engWord2: "crash"
      },
      {
        word: "hoagga",
        IPA: "/hoˈaggaː/",
        partOfSpeech: "adjective",
        engWord: "fertile"
      },
      {
        word: "hoam",
        IPA: "/hoˈaːm/",
        partOfSpeech: "noun",
        engWord: "orchestra"
      },
      {
        word: "hoameɲ",
        IPA: "/hoˈameɲ/",
        partOfSpeech: "noun",
        engWord: "worm"
      },
      {
        word: "hoaɲam",
        IPA: "/hoˈanjam/",
        partOfSpeech: "adjective",
        engWord: "inferior"
      },
      {
        word: "hoaum",
        IPA: "/hoˈaum/",
        partOfSpeech: "verb",
        engWord: "deprive"
      },
      {
        word: "hob",
        IPA: "/hob/",
        partOfSpeech: "noun",
        engWord: "thing"
      },
      {
        word: "hob",
        IPA: "/hob/",
        partOfSpeech: "pronoun",
        engWord: "you"
      },
      {
        word: "hobabu",
        IPA: "/hoˈbaːbuː/",
        partOfSpeech: "verb",
        engWord: "thank"
      },
      {
        word: "hobi",
        IPA: "/hoˈbi/",
        partOfSpeech: "noun",
        engWord: "clause"
      },
      {
        word: "hobi",
        IPA: "/hoˈbiː/",
        partOfSpeech: "verb",
        engWord: "raise"
      },
      {
        word: "hobie",
        IPA: "/hoˈbie/",
        partOfSpeech: "adverb",
        engWord: "certainly"
      },
      {
        word: "hobiꝯeɲ",
        IPA: "/hoˈbiːʤeɲ/",
        partOfSpeech: "adjective",
        engWord: "better"
      },
      {
        word: "hobim",
        IPA: "/hoˈbiːm/",
        partOfSpeech: "adverb",
        engWord: "there"
      },
      {
        word: "hobimi",
        IPA: "/hoˈbiːmiː/",
        partOfSpeech: "determiner",
        engWord: "same"
      },
      {
        word: "hobiꝷam",
        IPA: "/hoˈbiʈam/",
        partOfSpeech: "verb",
        engWord: "taste"
      },
      {
        word: "hobiꝷe",
        IPA: "/hoˈbiːʈe/",
        partOfSpeech: "adverb",
        engWord: "much"
      },
      {
        word: "hobua",
        IPA: "/hoˈbua/",
        partOfSpeech: "noun",
        engWord: "term"
      },
      {
        word: "hobub",
        IPA: "/hoˈbub/",
        partOfSpeech: "verb",
        engWord: "contradict"
      },
      {
        word: "hobub",
        IPA: "/hoˈbuːb/",
        partOfSpeech: "noun",
        engWord: "grill"
      },
      {
        word: "hobɏoɏab",
        IPA: "/hoˈbjojab/",
        partOfSpeech: "adjective",
        engWord: "intense"
      },
      {
        word: "hoɥe",
        IPA: "/hoˈʧe/",
        partOfSpeech: "verb",
        engWord: "play"
      },
      {
        word: "hoɥigeɲ",
        IPA: "/hoˈʧiːgeɲ/",
        partOfSpeech: "noun",
        engWord: "sweetheart"
      },
      {
        word: "hoɥu",
        IPA: "/hoˈʧu/",
        partOfSpeech: "noun",
        engWord: "whore"
      },
      {
        word: "hoɥu",
        IPA: "/hoˈʧuː/",
        partOfSpeech: "noun",
        engWord: "herd"
      },
      {
        word: "hoɥuɥa",
        IPA: "/hoˈʧuːʧaː/",
        partOfSpeech: "noun",
        engWord: "cloud"
      },
      {
        word: "hode",
        IPA: "/hoˈde/",
        partOfSpeech: "preposition",
        engWord: "upon"
      },
      {
        word: "hodeɲ",
        IPA: "/hoˈdeɲ/",
        partOfSpeech: "verb",
        engWord: "peek"
      },
      {
        word: "hoderab",
        IPA: "/hoˈdeɽab/",
        partOfSpeech: "noun",
        engWord: "pride"
      },
      {
        word: "hoe",
        IPA: "/hoˈe/",
        partOfSpeech: "noun",
        engWord: "law"
      },
      {
        word: "hoee",
        IPA: "/hoˈee/",
        partOfSpeech: "verb",
        engWord: "indicate"
      },
      {
        word: "hogeꞃde",
        IPA: "/hoˈgende/",
        partOfSpeech: "verb",
        engWord: "torture"
      },
      {
        word: "hogeɲ",
        IPA: "/hoˈgeɲ/",
        partOfSpeech: "adjective",
        engWord: "grave"
      },
      {
        word: "hogi",
        IPA: "/hoˈgi/",
        partOfSpeech: "adverb",
        engWord: "then"
      },
      {
        word: "hoguɥi",
        IPA: "/hoˈguʧiː/",
        partOfSpeech: "verb",
        engWord: "lament"
      },
      {
        word: "hoguɲ",
        IPA: "/hoˈguɲ/",
        partOfSpeech: "verb",
        engWord: "surround"
      },
      {
        word: "hoguꝷa",
        IPA: "/hoˈguːʈa/",
        partOfSpeech: "noun",
        engWord: "tariff"
      },
      {
        word: "hoꝯab",
        IPA: "/hoˈʤab/",
        partOfSpeech: "noun",
        engWord: "yogurt"
      },
      {
        word: "hoꝯe",
        IPA: "/hoˈʤe/",
        partOfSpeech: "noun",
        engWord: "habitat"
      },
      {
        word: "hoꝯeꝝeɲ",
        IPA: "/hoˈʤeʔeɲ/",
        partOfSpeech: "verb",
        engWord: "cram"
      },
      {
        word: "hoꝯeɥab",
        IPA: "/hoˈʤeʧaːb/",
        partOfSpeech: "verb",
        engWord: "fund",
        partOfSpeech2: "noun",
        engWord2: "fund"
      },
      {
        word: "hoꝯeꝯeb",
        IPA: "/hoˈʤeʤeːb/",
        partOfSpeech: "noun",
        engWord: "dragon"
      },
      {
        word: "hoꝯem",
        IPA: "/hoˈʤem/",
        partOfSpeech: "adjective",
        engWord: "proposed"
      },
      {
        word: "hoka",
        IPA: "/hoˈka/",
        partOfSpeech: "noun",
        engWord: "flash"
      },
      {
        word: "hoka",
        IPA: "/hoˈkaː/",
        partOfSpeech: "noun",
        engWord: "lower class"
      },
      {
        word: "hokab",
        IPA: "/hoˈkab/",
        partOfSpeech: "verb",
        engWord: "veto"
      },
      {
        word: "hokabu",
        IPA: "/hoˈkabu/",
        partOfSpeech: "conjunction",
        engWord: "except"
      },
      {
        word: "hokaɥub",
        IPA: "/hoˈkaʧuːb/",
        partOfSpeech: "noun",
        engWord: "niece"
      },
      {
        word: "hokaꝷem",
        IPA: "/hoˈkaʈem/",
        partOfSpeech: "adjective",
        engWord: "tall"
      },
      {
        word: "hokaꝷkab",
        IPA: "/hoˈkaːtkab/",
        partOfSpeech: "noun",
        engWord: "brain"
      },
      {
        word: "hokubi",
        IPA: "/hoˈkuːbiː/",
        partOfSpeech: "noun",
        engWord: "dynamics"
      },
      {
        word: "hom",
        IPA: "/hom/",
        partOfSpeech: "noun",
        engWord: "song"
      },
      {
        word: "homeab",
        IPA: "/hoˈmeab/",
        partOfSpeech: "verb",
        engWord: "impose"
      },
      {
        word: "homede",
        IPA: "/hoˈmede/",
        partOfSpeech: "noun",
        engWord: "suitcase"
      },
      {
        word: "homeem",
        IPA: "/hoˈmeem/",
        partOfSpeech: "noun",
        engWord: "velocity"
      },
      {
        word: "homem",
        IPA: "/hoˈmem/",
        partOfSpeech: "noun",
        engWord: "moon"
      },
      {
        word: "homeɲ",
        IPA: "/hoˈmeɲ/",
        partOfSpeech: "noun",
        engWord: "whip"
      },
      {
        word: "homeɏa",
        IPA: "/hoˈmeja/",
        partOfSpeech: "verb",
        engWord: "plant"
      },
      {
        word: "homi",
        IPA: "/hoˈmiː/",
        partOfSpeech: "noun",
        engWord: "rise"
      },
      {
        word: "homikab",
        IPA: "/hoˈmikab/",
        partOfSpeech: "verb",
        engWord: "breed"
      },
      {
        word: "homuɥeb",
        IPA: "/hoˈmuʧeb/",
        partOfSpeech: "noun",
        engWord: "fixture"
      },
      {
        word: "homum",
        IPA: "/hoˈmum/",
        partOfSpeech: "verb",
        engWord: "bother"
      },
      {
        word: "hoꞃe",
        IPA: "/hoˈne/",
        partOfSpeech: "noun",
        engWord: "interview"
      },
      {
        word: "hoɲ",
        IPA: "/hoɲ/",
        partOfSpeech: "verb",
        engWord: "walk"
      },
      {
        word: "hoɲam",
        IPA: "/hoˈɲam/",
        partOfSpeech: "noun",
        engWord: "procedure"
      },
      {
        word: "hoɲamub",
        IPA: "/honˈjaːmub/",
        partOfSpeech: "verb",
        engWord: "strap"
      },
      {
        word: "hoɲaɲ",
        IPA: "/hoˈɲaɲ/",
        partOfSpeech: "verb",
        engWord: "equal"
      },
      {
        word: "hoɲaꝷa",
        IPA: "/hoˈɲaʈa/",
        partOfSpeech: "noun",
        engWord: "education"
      },
      {
        word: "hoɲeɥem",
        IPA: "/hoˈɲeʧem/",
        partOfSpeech: "verb",
        engWord: "comply"
      },
      {
        word: "hoɲem",
        IPA: "/hoˈɲem/",
        partOfSpeech: "noun",
        engWord: "potato"
      },
      {
        word: "hoɲeɲ",
        IPA: "/hoˈɲeɲ/",
        partOfSpeech: "adjective",
        engWord: "moist"
      },
      {
        word: "hoɲo",
        IPA: "/hoˈɲo/",
        partOfSpeech: "noun",
        engWord: "resolution"
      },
      {
        word: "hora",
        IPA: "/hoˈɽaː/",
        partOfSpeech: "verb",
        engWord: "tilt"
      },
      {
        word: "horabu",
        IPA: "/hoˈɽabu/",
        partOfSpeech: "noun",
        engWord: "second"
      },
      {
        word: "horam",
        IPA: "/hoˈɽam/",
        partOfSpeech: "noun",
        engWord: "bar (pub)"
      },
      {
        word: "hoꝭo",
        IPA: "/hoˈʂo/",
        partOfSpeech: "noun",
        engWord: "mound"
      },
      {
        word: "hoꝭoꞃe",
        IPA: "/hoˈʂone/",
        partOfSpeech: "noun",
        engWord: "candy"
      },
      {
        word: "hoꝷa",
        IPA: "/hoˈʈa/",
        partOfSpeech: "adverb",
        engWord: "on"
      },
      {
        word: "hoꝷab",
        IPA: "/hoˈʈab/",
        partOfSpeech: "noun",
        engWord: "protagonist"
      },
      {
        word: "hoꝷakaɲ",
        IPA: "/hoˈʈakaɲ/",
        partOfSpeech: "noun",
        engWord: "module"
      },
      {
        word: "hoꝷaɲ",
        IPA: "/hoˈʈaɲ/",
        partOfSpeech: "adjective",
        engWord: "amateur"
      },
      {
        word: "hoꝷaɲe",
        IPA: "/hoˈʈaɲe/",
        partOfSpeech: "verb",
        engWord: "sob"
      },
      {
        word: "hoꝷe",
        IPA: "/hoˈʈe/",
        partOfSpeech: "conjunction",
        engWord: "because"
      },
      {
        word: "hoꝷebu",
        IPA: "/hoˈʈebu/",
        partOfSpeech: "noun",
        engWord: "branch"
      },
      {
        word: "hoꝷkaꝯa",
        IPA: "/hotˈkaʤa/",
        partOfSpeech: "noun",
        engWord: "hat"
      },
      {
        word: "hoꝷom",
        IPA: "/hoˈʈom/",
        partOfSpeech: "verb",
        engWord: "float"
      },
      {
        word: "hoꝷu",
        IPA: "/hoˈtu/",
        partOfSpeech: "verb",
        engWord: "desire"
      },
      {
        word: "hou",
        IPA: "/hoˈu/",
        partOfSpeech: "noun",
        engWord: "flower"
      },
      {
        word: "houb",
        IPA: "/hoˈub/",
        partOfSpeech: "adjective",
        engWord: "overwhelming"
      },
      {
        word: "houba",
        IPA: "/hoˈuːbaː/",
        partOfSpeech: "noun",
        engWord: "hose"
      },
      {
        word: "houbub",
        IPA: "/hoˈuːbub/",
        partOfSpeech: "noun",
        engWord: "colour"
      },
      {
        word: "hoɏa",
        IPA: "/hoˈja/",
        partOfSpeech: "noun",
        engWord: "motion"
      },
      {
        word: "hu",
        IPA: "/hu/",
        partOfSpeech: "number",
        engWord: "two"
      },
      {
        word: "hu",
        IPA: "/huː/",
        partOfSpeech: "noun",
        engWord: "line"
      },
      {
        word: "huꝝe",
        IPA: "/huːˈʔe/",
        partOfSpeech: "noun",
        engWord: "cat"
      },
      {
        word: "huꝝeꝝe",
        IPA: "/huˈʔeːʔe/",
        partOfSpeech: "verb",
        engWord: "swing"
      },
      {
        word: "huꝝebi",
        IPA: "/huˈʔebiː/",
        partOfSpeech: "verb",
        engWord: "hum"
      },
      {
        word: "huꝝeỻ",
        IPA: "/huˈʔeɭ/",
        partOfSpeech: "verb",
        engWord: "glide"
      },
      {
        word: "huꝝeɲa",
        IPA: "/huːˈʔeɲa/",
        partOfSpeech: "verb",
        engWord: "arrest"
      },
      {
        word: "huꝝob",
        IPA: "/huːˈʔob/",
        partOfSpeech: "verb",
        engWord: "fertilise"
      },
      {
        word: "huꝝomeɏ",
        IPA: "/huːˈʔomej/",
        partOfSpeech: "noun",
        engWord: "hazard"
      },
      {
        word: "hua",
        IPA: "/huˈa/",
        partOfSpeech: "adjective",
        engWord: "rare"
      },
      {
        word: "hua",
        IPA: "/huːˈaː/",
        partOfSpeech: "noun",
        engWord: "plant"
      },
      {
        word: "huaa",
        IPA: "/huˈaa/",
        partOfSpeech: "noun",
        engWord: "genocide"
      },
      {
        word: "huaỻ",
        IPA: "/huːˈaɭ/",
        partOfSpeech: "verb",
        engWord: "comprehend"
      },
      {
        word: "huam",
        IPA: "/huˈam/",
        partOfSpeech: "noun",
        engWord: "reference"
      },
      {
        word: "huaɏ",
        IPA: "/huːˈaj/",
        partOfSpeech: "adjective",
        engWord: "empirical"
      },
      {
        word: "hub",
        IPA: "/hub/",
        partOfSpeech: "noun",
        engWord: "cushion"
      },
      {
        word: "hubabub",
        IPA: "/huˈbaːbub/",
        partOfSpeech: "adverb",
        engWord: "somewhere"
      },
      {
        word: "hubaduꝭ",
        IPA: "/huˈbaduːʂ/",
        partOfSpeech: "noun",
        engWord: "width"
      },
      {
        word: "hubeꝷab",
        IPA: "/huˈbeʈab/",
        partOfSpeech: "adjective",
        engWord: "ironic"
      },
      {
        word: "hubi",
        IPA: "/huˈbiː/",
        partOfSpeech: "noun",
        engWord: "adventure"
      },
      {
        word: "hubiab",
        IPA: "/huˈbiːab/",
        partOfSpeech: "adjective",
        engWord: "exempt"
      },
      {
        word: "hubiku",
        IPA: "/huːˈbikuː/",
        partOfSpeech: "noun",
        engWord: "recognition"
      },
      {
        word: "hubio",
        IPA: "/huːˈbio/",
        partOfSpeech: "verb",
        engWord: "guess",
        partOfSpeech2: "noun",
        engWord2: "guess"
      },
      {
        word: "hubiɏak",
        IPA: "/huˈbijak/",
        partOfSpeech: "adjective",
        engWord: "religious"
      },
      {
        word: "huboꝝeb",
        IPA: "/huˈboʔeb/",
        partOfSpeech: "adjective",
        engWord: "dangerous"
      },
      {
        word: "huboꞃu",
        IPA: "/huˈbonu/",
        partOfSpeech: "adjective",
        engWord: "skilled"
      },
      {
        word: "huboɲob",
        IPA: "/huˈboɲob/",
        partOfSpeech: "adjective",
        engWord: "idiotic"
      },
      {
        word: "huboꝷokamuꝭ",
        IPA: "/huˈboʈokamuʂ/",
        partOfSpeech: "adjective",
        engWord: "rich, wealthy"
      },
      {
        word: "hubu",
        IPA: "/huˈbu/",
        partOfSpeech: "noun",
        engWord: "difference"
      },
      {
        word: "hubuguỻ",
        IPA: "/huˈbuːguɭ/",
        partOfSpeech: "adjective",
        engWord: "painful"
      },
      {
        word: "hubuỻ",
        IPA: "/huːˈbuɭ/",
        partOfSpeech: "noun",
        engWord: "table"
      },
      {
        word: "hubuꝷo",
        IPA: "/huˈbuːʈo/",
        partOfSpeech: "noun",
        engWord: "darkness"
      },
      {
        word: "hubɏo",
        IPA: "/huˈbjo/",
        partOfSpeech: "verb",
        engWord: "escort"
      },
      {
        word: "huɥaỻ",
        IPA: "/huːˈʧaːɭ/",
        partOfSpeech: "noun",
        engWord: "arrow"
      },
      {
        word: "huɥedeɥ",
        IPA: "/huˈʧedeʧ/",
        partOfSpeech: "noun",
        engWord: "beauty"
      },
      {
        word: "huɥeỻ",
        IPA: "/huˈʧeɭ/",
        partOfSpeech: "verb",
        engWord: "complain"
      },
      {
        word: "huɥem",
        IPA: "/huːˈʧem/",
        partOfSpeech: "noun",
        engWord: "bracket"
      },
      {
        word: "huɥikap",
        IPA: "/huːˈʧiːkap/",
        partOfSpeech: "verb",
        engWord: "clutch"
      },
      {
        word: "huɥoꝭaꝯ",
        IPA: "/huˈʧoʂaʤ/",
        partOfSpeech: "adjective",
        engWord: "rich, flavoursome"
      },
      {
        word: "huɥoꝭo",
        IPA: "/huˈʧoʂo/",
        partOfSpeech: "adjective",
        engWord: "expensive"
      },
      {
        word: "huɥu",
        IPA: "/huːˈʧu/",
        partOfSpeech: "noun",
        engWord: "egg"
      },
      {
        word: "huɥua",
        IPA: "/huˈʧuːaː/",
        partOfSpeech: "adjective",
        engWord: "economic"
      },
      {
        word: "huɥuge",
        IPA: "/huˈʧuge/",
        partOfSpeech: "adjective",
        engWord: "sturdy"
      },
      {
        word: "huɥuꝯo",
        IPA: "/huˈʧuːʤo/",
        partOfSpeech: "adjective",
        engWord: "accurate"
      },
      {
        word: "huɥup",
        IPA: "/huːˈʧup/",
        partOfSpeech: "noun",
        engWord: "shark"
      },
      {
        word: "hude",
        IPA: "/huˈde/",
        partOfSpeech: "noun",
        engWord: "trail"
      },
      {
        word: "hudeb",
        IPA: "/huˈdeb/",
        partOfSpeech: "noun",
        engWord: "block"
      },
      {
        word: "hudeꝯem",
        IPA: "/huˈdeʤem/",
        partOfSpeech: "noun",
        engWord: "grave"
      },
      {
        word: "hudobuꝯ",
        IPA: "/huˈdobuʤ/",
        partOfSpeech: "adjective",
        engWord: "lucky"
      },
      {
        word: "hudomu",
        IPA: "/huˈdomu/",
        partOfSpeech: "noun",
        engWord: "anxiety"
      },
      {
        word: "hue",
        IPA: "/huːˈe/",
        partOfSpeech: "noun",
        engWord: "bacteria"
      },
      {
        word: "hueỻ",
        IPA: "/huˈeɭ/",
        partOfSpeech: "noun",
        engWord: "spa"
      },
      {
        word: "hueỻ",
        IPA: "/huːˈeɭ/",
        partOfSpeech: "adjective",
        engWord: "tight"
      },
      {
        word: "huem",
        IPA: "/huˈem/",
        partOfSpeech: "verb",
        engWord: "contribute"
      },
      {
        word: "hugaꝷka",
        IPA: "/huˈgatka/",
        partOfSpeech: "adjective",
        engWord: "fashionable"
      },
      {
        word: "huge",
        IPA: "/huˈge/",
        partOfSpeech: "noun",
        engWord: "strawberry"
      },
      {
        word: "hugeꝝeꞃ",
        IPA: "/huːˈgeʔen/",
        partOfSpeech: "noun",
        engWord: "apartment"
      },
      {
        word: "hugebi",
        IPA: "/huˈgebiː/",
        partOfSpeech: "adjective",
        engWord: "healthy"
      },
      {
        word: "hugebi",
        IPA: "/huˈgebiː/",
        partOfSpeech: "noun",
        engWord: "sickness, disease"
      },
      {
        word: "hugebu",
        IPA: "/huˈgebu/",
        partOfSpeech: "verb",
        engWord: "skate"
      },
      {
        word: "hugeỻ",
        IPA: "/huːˈgeɭ/",
        partOfSpeech: "verb",
        engWord: "turn"
      },
      {
        word: "hugemi",
        IPA: "/huˈgemiː/",
        partOfSpeech: "noun",
        engWord: "side"
      },
      {
        word: "hugeꞃ",
        IPA: "/huːˈgen/",
        partOfSpeech: "noun",
        engWord: "streak"
      },
      {
        word: "huggu",
        IPA: "/huːgˈguː/",
        partOfSpeech: "preposition",
        engWord: "out"
      },
      {
        word: "hugiꝯaꞃ",
        IPA: "/huːˈgiːʤan/",
        partOfSpeech: "noun",
        engWord: "den"
      },
      {
        word: "hugiỻ",
        IPA: "/huˈgiɭ/",
        partOfSpeech: "adverb",
        engWord: "quite"
      },
      {
        word: "hugiỻ",
        IPA: "/huˈgiːɭ/",
        partOfSpeech: "adjective",
        engWord: "poor"
      },
      {
        word: "hugim",
        IPA: "/huˈgiːm/",
        partOfSpeech: "noun",
        engWord: "tribunal"
      },
      {
        word: "hugiꞃem",
        IPA: "/huːˈgiːnem/",
        partOfSpeech: "verb",
        engWord: "develop"
      },
      {
        word: "hugiꝷka",
        IPA: "/huːˈgiːtka/",
        partOfSpeech: "noun",
        engWord: "circulation"
      },
      {
        word: "hugu",
        IPA: "/huːˈgu/",
        partOfSpeech: "verb",
        engWord: "bite"
      },
      {
        word: "hugup",
        IPA: "/huːˈguːp/",
        partOfSpeech: "verb",
        engWord: "brace"
      },
      {
        word: "huha",
        IPA: "/huˈha/",
        partOfSpeech: "verb",
        engWord: "copy, imitate"
      },
      {
        word: "huhaꝯeb",
        IPA: "/huˈhaːʤeb/",
        partOfSpeech: "adjective",
        engWord: "golden"
      },
      {
        word: "huhaỻ",
        IPA: "/huːˈhaɭ/",
        partOfSpeech: "adjective",
        engWord: "blank"
      },
      {
        word: "huhaꞃeꝷa",
        IPA: "/huˈhaneʈa/",
        partOfSpeech: "adjective",
        engWord: "messy"
      },
      {
        word: "huhaꝷem",
        IPA: "/huˈhaʈem/",
        partOfSpeech: "noun",
        engWord: "navy"
      },
      {
        word: "huhoagga",
        IPA: "/huˈhoaggaː/",
        partOfSpeech: "noun",
        engWord: "fertility"
      },
      {
        word: "huhoe",
        IPA: "/huˈhoe/",
        partOfSpeech: "adjective",
        engWord: "legal"
      },
      {
        word: "huhuki",
        IPA: "/huˈhuːki/",
        partOfSpeech: "noun",
        engWord: "anger"
      },
      {
        word: "huhuꝷabi",
        IPA: "/huˈhuʈabiː/",
        partOfSpeech: "adjective",
        engWord: "distant"
      },
      {
        word: "hui",
        IPA: "/huˈiː/",
        partOfSpeech: "pronoun",
        engWord: "someone"
      },
      {
        word: "hui",
        IPA: "/huːˈiː/",
        partOfSpeech: "noun",
        engWord: "cotton"
      },
      {
        word: "huꝯa",
        IPA: "/huːˈʤa/",
        partOfSpeech: "verb",
        engWord: "flood",
        partOfSpeech2: "noun",
        engWord2: "flood"
      },
      {
        word: "huꝯaɲe",
        IPA: "/huˈʤaːɲe/",
        partOfSpeech: "adjective",
        engWord: "bloody"
      },
      {
        word: "huꝯe",
        IPA: "/huˈʤe/",
        partOfSpeech: "adjective",
        engWord: "federal"
      },
      {
        word: "huꝯe",
        IPA: "/huːˈʤe/",
        partOfSpeech: "verb",
        engWord: "open"
      },
      {
        word: "huꝯegga",
        IPA: "/huːˈʤeggaː/",
        partOfSpeech: "noun",
        engWord: "tomb"
      },
      {
        word: "huꝯeỻ",
        IPA: "/huˈʤeɭ/",
        partOfSpeech: "noun",
        engWord: "talk"
      },
      {
        word: "huꝯem",
        IPA: "/huˈʤem/",
        partOfSpeech: "noun",
        engWord: "infection"
      },
      {
        word: "huꝯi",
        IPA: "/huˈʤiː/",
        partOfSpeech: "adjective",
        engWord: "friendly"
      },
      {
        word: "huꝯoɏab",
        IPA: "/huˈʤojab/",
        partOfSpeech: "noun",
        engWord: "youth"
      },
      {
        word: "huꝯuɥu",
        IPA: "/huˈʤuʧuː/",
        partOfSpeech: "adjective",
        engWord: "natural"
      },
      {
        word: "huka",
        IPA: "/huːˈka/",
        partOfSpeech: "noun",
        engWord: "dawn"
      },
      {
        word: "huka",
        IPA: "/huːˈkaː/",
        partOfSpeech: "noun",
        engWord: "ring"
      },
      {
        word: "hukaɥam",
        IPA: "/huːˈkaʧaːm/",
        partOfSpeech: "noun",
        engWord: "couch, sofa"
      },
      {
        word: "hukaꝯe",
        IPA: "/huˈkaʤe/",
        partOfSpeech: "noun",
        engWord: "sausage"
      },
      {
        word: "hukaɏ",
        IPA: "/huːˈkaːj/",
        partOfSpeech: "noun",
        engWord: "wound"
      },
      {
        word: "huki",
        IPA: "/huˈki/",
        partOfSpeech: "noun",
        engWord: "effect"
      },
      {
        word: "huki",
        IPA: "/huːˈki/",
        partOfSpeech: "adjective",
        engWord: "angry"
      },
      {
        word: "hukiꝯe",
        IPA: "/huːˈkiʤe/",
        partOfSpeech: "adjective",
        engWord: "deliberate"
      },
      {
        word: "huku",
        IPA: "/huːˈkuː/",
        partOfSpeech: "noun",
        engWord: "bottle"
      },
      {
        word: "hukua",
        IPA: "/huˈkuːaː/",
        partOfSpeech: "verb",
        engWord: "clean",
        partOfSpeech2: "adjective",
        engWord2: "clean"
      },
      {
        word: "huỻ",
        IPA: "/huɭ/",
        partOfSpeech: "preposition",
        engWord: "than"
      },
      {
        word: "huỻ",
        IPA: "/huːɭ/",
        partOfSpeech: "adverb",
        engWord: "nowhere"
      },
      {
        word: "hum",
        IPA: "/hum/",
        partOfSpeech: "noun",
        engWord: "stake"
      },
      {
        word: "hum",
        IPA: "/huːm/",
        partOfSpeech: "noun",
        engWord: "spark"
      },
      {
        word: "hum",
        IPA: "/huːm/",
        partOfSpeech: "pronoun",
        engWord: "you (subject pl.)"
      },
      {
        word: "hum hi",
        IPA: "/huːm hiː/",
        partOfSpeech: "pronoun",
        engWord: "to you (pl.)"
      },
      {
        word: "hum pu",
        IPA: "/huːm puː/",
        partOfSpeech: "pronoun",
        engWord: "yours (pl.)"
      },
      {
        word: "hume",
        IPA: "/huːˈme/",
        partOfSpeech: "adjective",
        engWord: "bright"
      },
      {
        word: "humi",
        IPA: "/huːˈmi/",
        partOfSpeech: "noun",
        engWord: "print"
      },
      {
        word: "humib",
        IPA: "/huːˈmiːb/",
        partOfSpeech: "verb",
        engWord: "applaud"
      },
      {
        word: "humika",
        IPA: "/huːˈmikaː/",
        partOfSpeech: "noun",
        engWord: "kettle"
      },
      {
        word: "humimep",
        IPA: "/huːˈmiːmep/",
        partOfSpeech: "noun",
        engWord: "row"
      },
      {
        word: "humu",
        IPA: "/huːˈmu/",
        partOfSpeech: "verb",
        engWord: "extend"
      },
      {
        word: "huꞃa",
        IPA: "/huˈna/",
        partOfSpeech: "adjective",
        engWord: "powerful"
      },
      {
        word: "huꞃaɥuoub",
        IPA: "/huˈnaʧuoub/",
        partOfSpeech: "adjective",
        engWord: "industrial"
      },
      {
        word: "huꞃe",
        IPA: "/huˈne/",
        partOfSpeech: "verb",
        engWord: "bounce"
      },
      {
        word: "huꞃeỻ",
        IPA: "/huˈneɭ/",
        partOfSpeech: "verb",
        engWord: "erase"
      },
      {
        word: "huꞃeɲa",
        IPA: "/huːˈnenja/",
        partOfSpeech: "noun",
        engWord: "mercy"
      },
      {
        word: "huꞃeɏ",
        IPA: "/huːˈnej/",
        partOfSpeech: "noun",
        engWord: "bit"
      },
      {
        word: "huꞃogukaꝷeb",
        IPA: "/huˈnogukaʈeːb/",
        partOfSpeech: "noun",
        engWord: "truth"
      },
      {
        word: "huꞃorabɏoi",
        IPA: "/huˈnoɽabjoi/",
        partOfSpeech: "noun",
        engWord: "sadness"
      },
      {
        word: "huꞃou",
        IPA: "/huˈnouː/",
        partOfSpeech: "noun",
        engWord: "silence"
      },
      {
        word: "huꞃukaaꝯeỻ",
        IPA: "/huˈnuːkaaʤeɭ/",
        partOfSpeech: "noun",
        engWord: "heat"
      },
      {
        word: "huɲa",
        IPA: "/huˈɲa/",
        partOfSpeech: "noun",
        engWord: "courtyard"
      },
      {
        word: "huɲa",
        IPA: "/huːˈɲa/",
        partOfSpeech: "noun",
        engWord: "merchandise"
      },
      {
        word: "huɲabu",
        IPA: "/huˈɲabu/",
        partOfSpeech: "adjective",
        engWord: "greedy"
      },
      {
        word: "huɲam",
        IPA: "/huˈɲam/",
        partOfSpeech: "verb",
        engWord: "stare"
      },
      {
        word: "huɲamib",
        IPA: "/hunˈjaːmiːb/",
        partOfSpeech: "adjective",
        engWord: "dull"
      },
      {
        word: "huɲaɲep",
        IPA: "/huːnˈjaɲep/",
        partOfSpeech: "verb",
        engWord: "attack",
        partOfSpeech2: "noun",
        engWord2: "attack"
      },
      {
        word: "huɲap",
        IPA: "/huːˈɲap/",
        partOfSpeech: "verb",
        engWord: "pause"
      },
      {
        word: "huɲoɲaɲ",
        IPA: "/huˈɲoɲaɲ/",
        partOfSpeech: "adjective",
        engWord: "medical"
      },
      {
        word: "huɲoɲe",
        IPA: "/huˈɲoɲe/",
        partOfSpeech: "adjective",
        engWord: "criminal"
      },
      {
        word: "huoỻ",
        IPA: "/huːˈoɭ/",
        partOfSpeech: "noun",
        engWord: "pillow"
      },
      {
        word: "hup",
        IPA: "/huːp/",
        partOfSpeech: "noun",
        engWord: "land, soil"
      },
      {
        word: "hup",
        IPA: "/huːp/",
        partOfSpeech: "pronoun",
        engWord: "you"
      },
      {
        word: "hup hi",
        IPA: "/huːp hiː/",
        partOfSpeech: "pronoun",
        engWord: "to you"
      },
      {
        word: "hup pu",
        IPA: "/huːp puː/",
        partOfSpeech: "pronoun",
        engWord: "yours"
      },
      {
        word: "hupa",
        IPA: "/huˈpaː/",
        partOfSpeech: "adjective",
        engWord: "anonymous"
      },
      {
        word: "hupaꞃ",
        IPA: "/huːˈpaːn/",
        partOfSpeech: "adjective",
        engWord: "reverse"
      },
      {
        word: "hupaɏ",
        IPA: "/huːˈpaːj/",
        partOfSpeech: "noun",
        engWord: "vegetable"
      },
      {
        word: "hupeꝯe",
        IPA: "/huˈpeʤe/",
        partOfSpeech: "adjective",
        engWord: "successful"
      },
      {
        word: "hupoɲa",
        IPA: "/huˈpoɲa/",
        partOfSpeech: "adjective",
        engWord: "evident, obvious"
      },
      {
        word: "hupuggaɥ",
        IPA: "/huˈpuːggaːʧ/",
        partOfSpeech: "adjective",
        engWord: "dirty"
      },
      {
        word: "hupuka",
        IPA: "/huˈpuːka/",
        partOfSpeech: "noun",
        engWord: "perfection"
      },
      {
        word: "hura",
        IPA: "/huːˈɽa/",
        partOfSpeech: "noun",
        engWord: "community"
      },
      {
        word: "huraɥim",
        IPA: "/huˈɽaʧiːm/",
        partOfSpeech: "verb",
        engWord: "escalate"
      },
      {
        word: "huraɲom",
        IPA: "/huˈɽaɲom/",
        partOfSpeech: "noun",
        engWord: "diamond"
      },
      {
        word: "hurap",
        IPA: "/huːˈɽaːp/",
        partOfSpeech: "noun",
        engWord: "dam"
      },
      {
        word: "huraɏ",
        IPA: "/huːˈɽaːj/",
        partOfSpeech: "adjective",
        engWord: "alone"
      },
      {
        word: "huꝭaꞃe",
        IPA: "/huˈʂane/",
        partOfSpeech: "adjective",
        engWord: "homely"
      },
      {
        word: "huꝭe",
        IPA: "/huˈʂeː/",
        partOfSpeech: "adjective",
        engWord: "divine"
      },
      {
        word: "huꝭobiu",
        IPA: "/huˈʂobiːuː/",
        partOfSpeech: "adjective",
        engWord: "troublesome"
      },
      {
        word: "huꝭokaꝷaꝭ",
        IPA: "/huˈʂokaʈaʂ/",
        partOfSpeech: "adjective",
        engWord: "sexy"
      },
      {
        word: "huꝭom",
        IPA: "/huˈʂom/",
        partOfSpeech: "verb",
        engWord: "wear"
      },
      {
        word: "huꝭoue",
        IPA: "/huˈʂoue/",
        partOfSpeech: "noun",
        engWord: "strength"
      },
      {
        word: "huꝭuꝝe",
        IPA: "/huˈʂuʔe/",
        partOfSpeech: "noun",
        engWord: "violence"
      },
      {
        word: "huꝭuꝯa",
        IPA: "/huˈʂuʤa/",
        partOfSpeech: "adjective",
        engWord: "central"
      },
      {
        word: "huꝭuꝭok",
        IPA: "/huˈʂuːʂok/",
        partOfSpeech: "noun",
        engWord: "length"
      },
      {
        word: "huꝷa",
        IPA: "/huˈʈa/",
        partOfSpeech: "verb",
        engWord: "hope"
      },
      {
        word: "huꝷa",
        IPA: "/huːˈʈa/",
        partOfSpeech: "noun",
        engWord: "sin"
      },
      {
        word: "huꝷab",
        IPA: "/huˈʈab/",
        partOfSpeech: "adjective",
        engWord: "private"
      },
      {
        word: "huꝷab",
        IPA: "/huːˈʈab/",
        partOfSpeech: "noun",
        engWord: "amount"
      },
      {
        word: "huꝷaba",
        IPA: "/huˈʈabaː/",
        partOfSpeech: "verb",
        engWord: "stain"
      },
      {
        word: "huꝷabi",
        IPA: "/huˈʈabiː/",
        partOfSpeech: "noun",
        engWord: "distance"
      },
      {
        word: "huꝷap",
        IPA: "/huːˈʈap/",
        partOfSpeech: "noun",
        engWord: "excuse"
      },
      {
        word: "huꝷau",
        IPA: "/huˈʈauː/",
        partOfSpeech: "noun",
        engWord: "lip"
      },
      {
        word: "huꝷe",
        IPA: "/huːˈʈe/",
        partOfSpeech: "adjective",
        engWord: "able"
      },
      {
        word: "huꝷeb",
        IPA: "/huˈʈeb/",
        partOfSpeech: "verb",
        engWord: "allocate"
      },
      {
        word: "huꝷeduɥ",
        IPA: "/huˈteduːʧ/",
        partOfSpeech: "noun",
        engWord: "possibility"
      },
      {
        word: "huꝷegup",
        IPA: "/huːˈʈeːgup/",
        partOfSpeech: "noun",
        engWord: "machine"
      },
      {
        word: "huꝷeka",
        IPA: "/huˈʈekaː/",
        partOfSpeech: "verb",
        engWord: "hit"
      },
      {
        word: "huꝷem",
        IPA: "/huˈʈem/",
        partOfSpeech: "adjective",
        engWord: "technological"
      },
      {
        word: "huꝷeɲa",
        IPA: "/huˈʈeɲa/",
        partOfSpeech: "noun",
        engWord: "plaintiff"
      },
      {
        word: "huꝷeom",
        IPA: "/huˈʈeom/",
        partOfSpeech: "adjective",
        engWord: "personal"
      },
      {
        word: "huꝷep",
        IPA: "/huːˈʈep/",
        partOfSpeech: "noun",
        engWord: "role"
      },
      {
        word: "huꝷeu",
        IPA: "/huˈʈeuː/",
        partOfSpeech: "noun",
        engWord: "confidence"
      },
      {
        word: "huꝷiɥim",
        IPA: "/huˈʈiːʧiːm/",
        partOfSpeech: "noun",
        engWord: "happiness"
      },
      {
        word: "huꝷkaỻ",
        IPA: "/huːtˈkaɭ/",
        partOfSpeech: "verb",
        engWord: "straighten"
      },
      {
        word: "huꝷoge",
        IPA: "/huˈtoge/",
        partOfSpeech: "adjective",
        engWord: "funny"
      },
      {
        word: "huꝷom",
        IPA: "/huˈʈom/",
        partOfSpeech: "noun",
        engWord: "capsule"
      },
      {
        word: "huꝷou",
        IPA: "/huˈʈouː/",
        partOfSpeech: "noun",
        engWord: "subtlety"
      },
      {
        word: "huꝷu",
        IPA: "/huˈtu/",
        partOfSpeech: "adjective",
        engWord: "purple"
      },
      {
        word: "huꝷuỻ",
        IPA: "/huˈtuɭ/",
        partOfSpeech: "adjective",
        engWord: "precious"
      },
      {
        word: "huꝷuraɥ",
        IPA: "/huˈtuːɽaʧ/",
        partOfSpeech: "adjective",
        engWord: "oral"
      },
      {
        word: "huuɏ",
        IPA: "/huːˈuːj/",
        partOfSpeech: "noun",
        engWord: "stuff"
      },
      {
        word: "huɏ",
        IPA: "/huːj/",
        partOfSpeech: "noun",
        engWord: "hook"
      },
      {
        word: "huɏa",
        IPA: "/huˈja/",
        partOfSpeech: "adjective",
        engWord: "wary"
      },
      {
        word: "huɏa",
        IPA: "/huːˈja/",
        partOfSpeech: "verb",
        engWord: "require"
      },
      {
        word: "huɏaꞃeꝭoaɥ",
        IPA: "/huˈjaneʂoaʧ/",
        partOfSpeech: "adjective",
        engWord: "risky, dangerous"
      },
      {
        word: "huɏaɏa",
        IPA: "/huːˈjaja/",
        partOfSpeech: "noun",
        engWord: "pastry"
      },
      {
        word: "huɏɏekaỻ",
        IPA: "/huːjˈjekaːɭ/",
        partOfSpeech: "noun",
        engWord: "fungus"
      },
      {
        word: "i",
        IPA: "/i/",
        partOfSpeech: "noun",
        engWord: "town"
      },
      {
        word: "i",
        IPA: "/iː/",
        partOfSpeech: "adverb",
        engWord: "very"
      },
      {
        word: "iꝝe",
        IPA: "/iˈʔe/",
        partOfSpeech: "verb",
        engWord: "spit",
        partOfSpeech2: "noun",
        engWord2: "spit"
      },
      {
        word: "iꝝe",
        IPA: "/iːˈʔe/",
        partOfSpeech: "noun",
        engWord: "fit"
      },
      {
        word: "ia",
        IPA: "/iːˈa/",
        partOfSpeech: "adjective",
        engWord: "curious"
      },
      {
        word: "iba",
        IPA: "/iːˈbaː/",
        partOfSpeech: "noun",
        engWord: "bush"
      },
      {
        word: "ibi",
        IPA: "/iˈbi/",
        partOfSpeech: "adjective",
        engWord: "autonomous"
      },
      {
        word: "ibi",
        IPA: "/iˈbiː/",
        partOfSpeech: "adjective",
        engWord: "noble"
      },
      {
        word: "ibiꝷeꝯa",
        IPA: "/iˈbiʈeʤa/",
        partOfSpeech: "noun",
        engWord: "retention"
      },
      {
        word: "ibɏo",
        IPA: "/iːˈbjo/",
        partOfSpeech: "noun",
        engWord: "garment"
      },
      {
        word: "iɥe",
        IPA: "/iːˈʧe/",
        partOfSpeech: "number",
        engWord: "thousand"
      },
      {
        word: "iɥi",
        IPA: "/iːˈʧiː/",
        partOfSpeech: "noun",
        engWord: "fog"
      },
      {
        word: "iɥu",
        IPA: "/iˈʧuː/",
        partOfSpeech: "noun",
        engWord: "premiere"
      },
      {
        word: "iɥu",
        IPA: "/iːˈʧu/",
        partOfSpeech: "verb",
        engWord: "flirt"
      },
      {
        word: "ide",
        IPA: "/iˈde/",
        partOfSpeech: "adverb",
        engWord: "nowadays"
      },
      {
        word: "idu",
        IPA: "/iːˈduː/",
        partOfSpeech: "noun",
        engWord: "city"
      },
      {
        word: "ie",
        IPA: "/iˈe/",
        partOfSpeech: "noun",
        engWord: "vinegar"
      },
      {
        word: "ieɥu",
        IPA: "/iːˈeʧuː/",
        partOfSpeech: "verb",
        engWord: "lay"
      },
      {
        word: "ige",
        IPA: "/iˈge/",
        partOfSpeech: "adjective",
        engWord: "gorgeous"
      },
      {
        word: "igi",
        IPA: "/iˈgiː/",
        partOfSpeech: "noun",
        engWord: "territory"
      },
      {
        word: "ihamu",
        IPA: "/iːˈhamu/",
        partOfSpeech: "noun",
        engWord: "container"
      },
      {
        word: "iꝯe",
        IPA: "/iˈʤe/",
        partOfSpeech: "noun",
        engWord: "bump"
      },
      {
        word: "iꝯe",
        IPA: "/iːˈʤe/",
        partOfSpeech: "noun",
        engWord: "thigh"
      },
      {
        word: "iꝯoꝝeɥu",
        IPA: "/iːˈʤoʔeʧu/",
        partOfSpeech: "noun",
        engWord: "tail, penis"
      },
      {
        word: "ika",
        IPA: "/iːˈkaː/",
        partOfSpeech: "noun",
        engWord: "beast"
      },
      {
        word: "iki",
        IPA: "/iːˈki/",
        partOfSpeech: "verb",
        engWord: "disclose"
      },
      {
        word: "ime",
        IPA: "/iːˈme/",
        partOfSpeech: "noun",
        engWord: "mouse"
      },
      {
        word: "imeꝯa",
        IPA: "/iˈmeʤa/",
        partOfSpeech: "noun",
        engWord: "letter"
      },
      {
        word: "imia",
        IPA: "/iːˈmiːa/",
        partOfSpeech: "verb",
        engWord: "bake"
      },
      {
        word: "iꞃe",
        IPA: "/iːˈne/",
        partOfSpeech: "noun",
        engWord: "emperor"
      },
      {
        word: "iꞃhe",
        IPA: "/iːnˈhe/",
        partOfSpeech: "noun",
        engWord: "joy"
      },
      {
        word: "iɲa",
        IPA: "/inˈja/",
        partOfSpeech: "noun",
        engWord: "velvet"
      },
      {
        word: "iɲa",
        IPA: "/iˈɲa/",
        partOfSpeech: "noun",
        engWord: "chorus"
      },
      {
        word: "iɲabu",
        IPA: "/iˈɲabuː/",
        partOfSpeech: "adjective",
        engWord: "endangered"
      },
      {
        word: "iɲo",
        IPA: "/iˈɲo/",
        partOfSpeech: "noun",
        engWord: "academy"
      },
      {
        word: "iraa",
        IPA: "/iːˈɽaaː/",
        partOfSpeech: "noun",
        engWord: "state"
      },
      {
        word: "iꝷa",
        IPA: "/iːˈʈa/",
        partOfSpeech: "noun",
        engWord: "insect"
      },
      {
        word: "iꝷabi",
        IPA: "/iːˈʈabi/",
        partOfSpeech: "verb",
        engWord: "pose"
      },
      {
        word: "iꝷe",
        IPA: "/iˈʈe/",
        partOfSpeech: "noun",
        engWord: "meat"
      },
      {
        word: "iꝷe",
        IPA: "/iːˈʈeː/",
        partOfSpeech: "adjective",
        engWord: "pragmatic"
      },
      {
        word: "iu",
        IPA: "/iːˈu/",
        partOfSpeech: "verb",
        engWord: "appeal"
      },
      {
        word: "ꝯa",
        IPA: "/ʤa/",
        partOfSpeech: "noun",
        engWord: "lot"
      },
      {
        word: "ꝯa",
        IPA: "/ʤaː/",
        partOfSpeech: "verb",
        engWord: "turn [sth.] on"
      },
      {
        word: "ꝯaꝝe",
        IPA: "/ʤaˈʔe/",
        partOfSpeech: "adjective",
        engWord: "crisp"
      },
      {
        word: "ꝯaꝝe",
        IPA: "/ʤaːˈʔe/",
        partOfSpeech: "noun",
        engWord: "canyon"
      },
      {
        word: "ꝯaꝝeɏ",
        IPA: "/ʤaˈʔej/",
        partOfSpeech: "noun",
        engWord: "revolution"
      },
      {
        word: "ꝯab",
        IPA: "/ʤab/",
        partOfSpeech: "verb",
        engWord: "like"
      },
      {
        word: "ꝯab",
        IPA: "/ʤaːb/",
        partOfSpeech: "noun",
        engWord: "front"
      },
      {
        word: "ꝯabu",
        IPA: "/ʤaˈbu/",
        partOfSpeech: "noun",
        engWord: "midnight"
      },
      {
        word: "ꝯade",
        IPA: "/ʤaˈde/",
        partOfSpeech: "adverb",
        engWord: "probably"
      },
      {
        word: "ꝯadeꝭ",
        IPA: "/ʤaˈdeʂ/",
        partOfSpeech: "verb",
        engWord: "deliver"
      },
      {
        word: "ꝯae",
        IPA: "/ʤaˈe/",
        partOfSpeech: "verb",
        engWord: "overlook"
      },
      {
        word: "ꝯaeɏ",
        IPA: "/ʤaˈej/",
        partOfSpeech: "verb",
        engWord: "dispose"
      },
      {
        word: "ꝯage",
        IPA: "/ʤaˈge/",
        partOfSpeech: "noun",
        engWord: "plague"
      },
      {
        word: "ꝯagib",
        IPA: "/ʤaːˈgiːb/",
        partOfSpeech: "noun",
        engWord: "sock"
      },
      {
        word: "ꝯaꝯab",
        IPA: "/ʤaˈʤab/",
        partOfSpeech: "verb",
        engWord: "shock"
      },
      {
        word: "ꝯaꝯe",
        IPA: "/ʤaˈʤe/",
        partOfSpeech: "noun",
        engWord: "fowl"
      },
      {
        word: "ꝯaꝯo",
        IPA: "/ʤaˈʤo/",
        partOfSpeech: "noun",
        engWord: "jewel"
      },
      {
        word: "ꝯakab",
        IPA: "/ʤaˈkab/",
        partOfSpeech: "noun",
        engWord: "sympathy"
      },
      {
        word: "ꝯakaɏ",
        IPA: "/ʤaˈkaj/",
        partOfSpeech: "noun",
        engWord: "frontier"
      },
      {
        word: "ꝯaku",
        IPA: "/ʤaːˈkuː/",
        partOfSpeech: "verb",
        engWord: "sketch"
      },
      {
        word: "ꝯaꞃeb",
        IPA: "/ʤaˈneb/",
        partOfSpeech: "verb",
        engWord: "hurry"
      },
      {
        word: "ꝯaɲa",
        IPA: "/ʤaˈɲa/",
        partOfSpeech: "noun",
        engWord: "haven"
      },
      {
        word: "ꝯaɲe",
        IPA: "/ʤaˈɲe/",
        partOfSpeech: "noun",
        engWord: "blasphemy"
      },
      {
        word: "ꝯaɲe",
        IPA: "/ʤaːˈɲe/",
        partOfSpeech: "noun",
        engWord: "blood"
      },
      {
        word: "ꝯara",
        IPA: "/ʤaˈɽa/",
        partOfSpeech: "adjective",
        engWord: "keen"
      },
      {
        word: "ꝯaꝭ",
        IPA: "/ʤaʂ/",
        partOfSpeech: "noun",
        engWord: "novice"
      },
      {
        word: "ꝯaꝷa",
        IPA: "/ʤaˈʈa/",
        partOfSpeech: "verb",
        engWord: "polish"
      },
      {
        word: "ꝯaꝷa",
        IPA: "/ʤaːˈʈa/",
        partOfSpeech: "verb",
        engWord: "evolve"
      },
      {
        word: "ꝯaꝷab",
        IPA: "/ʤaˈʈab/",
        partOfSpeech: "verb",
        engWord: "intend"
      },
      {
        word: "ꝯaꝷeꝭ",
        IPA: "/ʤaˈʈeʂ/",
        partOfSpeech: "verb",
        engWord: "gesture"
      },
      {
        word: "ꝯaꝷu",
        IPA: "/ʤaˈtu/",
        partOfSpeech: "noun",
        engWord: "feast"
      },
      {
        word: "ꝯaɏ",
        IPA: "/ʤaj/",
        partOfSpeech: "verb",
        engWord: "boil"
      },
      {
        word: "ꝯaɏ",
        IPA: "/ʤaːj/",
        partOfSpeech: "verb",
        engWord: "recycle"
      },
      {
        word: "ꝯe",
        IPA: "/ʤe/",
        partOfSpeech: "pronoun",
        engWord: "he/she/it"
      },
      {
        word: "ꝯe",
        IPA: "/ʤe/",
        partOfSpeech: "verb",
        engWord: "let, allow"
      },
      {
        word: "ꝯe",
        IPA: "/ʤeː/",
        partOfSpeech: "noun",
        engWord: "stump"
      },
      {
        word: "ꝯe hi",
        IPA: "/ʤe hiː/",
        partOfSpeech: "pronoun",
        engWord: "to him/her/it"
      },
      {
        word: "ꝯe pu",
        IPA: "/ʤe puː/",
        partOfSpeech: "pronoun",
        engWord: "his/hers/its"
      },
      {
        word: "ꝯeꝝ",
        IPA: "/ʤeʔ/",
        partOfSpeech: "adverb",
        engWord: "only"
      },
      {
        word: "ꝯeꝝ",
        IPA: "/ʤeːʔ/",
        partOfSpeech: "verb",
        engWord: "stay, remain"
      },
      {
        word: "ꝯeꝝeꝝ",
        IPA: "/ʤeːˈʔeʔ/",
        partOfSpeech: "noun",
        engWord: "clash"
      },
      {
        word: "ꝯea",
        IPA: "/ʤeːˈa/",
        partOfSpeech: "noun",
        engWord: "artillery"
      },
      {
        word: "ꝯeab",
        IPA: "/ʤeˈaːb/",
        partOfSpeech: "noun",
        engWord: "snake"
      },
      {
        word: "ꝯeb",
        IPA: "/ʤeb/",
        partOfSpeech: "noun",
        engWord: "skeleton"
      },
      {
        word: "ꝯeb",
        IPA: "/ʤeːb/",
        partOfSpeech: "adjective",
        engWord: "custom"
      },
      {
        word: "ꝯebi",
        IPA: "/ʤeːˈbiː/",
        partOfSpeech: "verb",
        engWord: "collide"
      },
      {
        word: "ꝯebub",
        IPA: "/ʤeːˈbub/",
        partOfSpeech: "noun",
        engWord: "necklace"
      },
      {
        word: "ꝯebɏo",
        IPA: "/ʤeːˈbjo/",
        partOfSpeech: "verb",
        engWord: "discuss"
      },
      {
        word: "ꝯeɥe",
        IPA: "/ʤeˈʧe/",
        partOfSpeech: "adjective",
        engWord: "backward"
      },
      {
        word: "ꝯeɥu",
        IPA: "/ʤeˈʧu/",
        partOfSpeech: "verb",
        engWord: "might"
      },
      {
        word: "ꝯeɥu",
        IPA: "/ʤeːˈʧuː/",
        partOfSpeech: "adjective",
        engWord: "forensic"
      },
      {
        word: "ꝯeɥub",
        IPA: "/ʤeˈʧuːb/",
        partOfSpeech: "noun",
        engWord: "precinct"
      },
      {
        word: "ꝯede",
        IPA: "/ʤeˈde/",
        partOfSpeech: "noun",
        engWord: "root"
      },
      {
        word: "ꝯedeꝝ",
        IPA: "/ʤeːˈdeʔ/",
        partOfSpeech: "noun",
        engWord: "massacre"
      },
      {
        word: "ꝯee",
        IPA: "/ʤeːˈe/",
        partOfSpeech: "adjective",
        engWord: "rear"
      },
      {
        word: "ꝯee",
        IPA: "/ʤeːˈeː/",
        partOfSpeech: "verb",
        engWord: "relax"
      },
      {
        word: "ꝯeeꝝ",
        IPA: "/ʤeːˈeʔ/",
        partOfSpeech: "noun",
        engWord: "default"
      },
      {
        word: "ꝯeeb",
        IPA: "/ʤeːˈeb/",
        partOfSpeech: "noun",
        engWord: "hag (old woman)"
      },
      {
        word: "ꝯeguꝝ",
        IPA: "/ʤeːˈguʔ/",
        partOfSpeech: "adjective",
        engWord: "annual"
      },
      {
        word: "ꝯegub",
        IPA: "/ʤeˈgub/",
        partOfSpeech: "noun",
        engWord: "hull"
      },
      {
        word: "ꝯehab",
        IPA: "/ʤeːˈhab/",
        partOfSpeech: "verb",
        engWord: "collect"
      },
      {
        word: "ꝯeꝯeb",
        IPA: "/ʤeːˈʤeb/",
        partOfSpeech: "adjective",
        engWord: "generic"
      },
      {
        word: "ꝯeka",
        IPA: "/ʤeːˈka/",
        partOfSpeech: "verb",
        engWord: "elect"
      },
      {
        word: "ꝯekaꝝ",
        IPA: "/ʤeˈkaʔ/",
        partOfSpeech: "noun",
        engWord: "right"
      },
      {
        word: "ꝯeme",
        IPA: "/ʤeːˈme/",
        partOfSpeech: "adjective",
        engWord: "abundant"
      },
      {
        word: "ꝯemib",
        IPA: "/ʤeˈmiːb/",
        partOfSpeech: "noun",
        engWord: "hurdle"
      },
      {
        word: "ꝯemu",
        IPA: "/ʤeˈmu/",
        partOfSpeech: "adjective",
        engWord: "quick"
      },
      {
        word: "ꝯemu",
        IPA: "/ʤeːˈmu/",
        partOfSpeech: "verb",
        engWord: "postpone"
      },
      {
        word: "ꝯeꞃdeꝝ",
        IPA: "/ʤeːnˈdeʔ/",
        partOfSpeech: "noun",
        engWord: "variable"
      },
      {
        word: "ꝯeꞃeꝝ",
        IPA: "/ʤeːˈneʔ/",
        partOfSpeech: "noun",
        engWord: "cone"
      },
      {
        word: "ꝯeꞃeb",
        IPA: "/ʤeːˈneb/",
        partOfSpeech: "verb",
        engWord: "reduce"
      },
      {
        word: "ꝯeꞃheb",
        IPA: "/ʤeːnˈheb/",
        partOfSpeech: "noun",
        engWord: "glory"
      },
      {
        word: "ꝯeɲa",
        IPA: "/ʤeˈɲa/",
        partOfSpeech: "noun",
        engWord: "gene"
      },
      {
        word: "ꝯeɲaꝝ",
        IPA: "/ʤeːnˈjaːʔ/",
        partOfSpeech: "noun",
        engWord: "pistol"
      },
      {
        word: "ꝯeɲe",
        IPA: "/ʤeˈɲe/",
        partOfSpeech: "adverb",
        engWord: "exactly"
      },
      {
        word: "ꝯeɲe",
        IPA: "/ʤeːˈɲe/",
        partOfSpeech: "number",
        engWord: "one"
      },
      {
        word: "ꝯeɲeꝝ",
        IPA: "/ʤeˈɲeʔ/",
        partOfSpeech: "noun",
        engWord: "shoulder"
      },
      {
        word: "ꝯeo",
        IPA: "/ʤeˈo/",
        partOfSpeech: "adjective",
        engWord: "weak"
      },
      {
        word: "ꝯera",
        IPA: "/ʤeˈɽa/",
        partOfSpeech: "noun",
        engWord: "teenager"
      },
      {
        word: "ꝯeꝷa",
        IPA: "/ʤeˈʈa/",
        partOfSpeech: "noun",
        engWord: "hydrogen"
      },
      {
        word: "ꝯeꝷab",
        IPA: "/ʤeˈʈab/",
        partOfSpeech: "preposition",
        engWord: "for"
      },
      {
        word: "ꝯeꝷe",
        IPA: "/ʤeˈʈe/",
        partOfSpeech: "noun",
        engWord: "firearm"
      },
      {
        word: "ꝯeꝷkab",
        IPA: "/ʤetˈkab/",
        partOfSpeech: "noun",
        engWord: "heap"
      },
      {
        word: "ꝯeꝷkab",
        IPA: "/ʤeːtˈkab/",
        partOfSpeech: "adverb",
        engWord: "forward"
      },
      {
        word: "ꝯeɏa",
        IPA: "/ʤeˈja/",
        partOfSpeech: "verb",
        engWord: "squint"
      },
      {
        word: "ꝯi",
        IPA: "/ʤi/",
        partOfSpeech: "verb",
        engWord: "may"
      },
      {
        word: "ꝯi",
        IPA: "/ʤiː/",
        partOfSpeech: "noun",
        engWord: "friend"
      },
      {
        word: "ꝯibu",
        IPA: "/ʤiːˈbu/",
        partOfSpeech: "noun",
        engWord: "publicity"
      },
      {
        word: "ꝯiɥu",
        IPA: "/ʤiːˈʧuː/",
        partOfSpeech: "verb",
        engWord: "save (put aside)"
      },
      {
        word: "ꝯidek",
        IPA: "/ʤiˈdek/",
        partOfSpeech: "verb",
        engWord: "harass"
      },
      {
        word: "ꝯideɏ",
        IPA: "/ʤiːˈdej/",
        partOfSpeech: "noun",
        engWord: "enthusiasm"
      },
      {
        word: "ꝯiguɏ",
        IPA: "/ʤiˈguːj/",
        partOfSpeech: "noun",
        engWord: "noise"
      },
      {
        word: "ꝯiꝯa",
        IPA: "/ʤiːˈʤa/",
        partOfSpeech: "noun",
        engWord: "series"
      },
      {
        word: "ꝯiꝯek",
        IPA: "/ʤiˈʤek/",
        partOfSpeech: "interjection",
        engWord: "okay"
      },
      {
        word: "ꝯik",
        IPA: "/ʤik/",
        partOfSpeech: "noun",
        engWord: "underwear"
      },
      {
        word: "ꝯik",
        IPA: "/ʤiːk/",
        partOfSpeech: "noun",
        engWord: "media"
      },
      {
        word: "ꝯika",
        IPA: "/ʤiˈkaː/",
        partOfSpeech: "adjective",
        engWord: "prevalent"
      },
      {
        word: "ꝯika",
        IPA: "/ʤiːˈka/",
        partOfSpeech: "noun",
        engWord: "compost"
      },
      {
        word: "ꝯiỻ",
        IPA: "/ʤiːɭ/",
        partOfSpeech: "noun",
        engWord: "clock"
      },
      {
        word: "ꝯime",
        IPA: "/ʤiˈme/",
        partOfSpeech: "adjective",
        engWord: "overseas"
      },
      {
        word: "ꝯimek",
        IPA: "/ʤiːˈmek/",
        partOfSpeech: "noun",
        engWord: "precedent"
      },
      {
        word: "ꝯiꞃeɏ",
        IPA: "/ʤiˈnej/",
        partOfSpeech: "noun",
        engWord: "band"
      },
      {
        word: "ꝯiꞃhek",
        IPA: "/ʤiːnˈhek/",
        partOfSpeech: "adverb",
        engWord: "around"
      },
      {
        word: "ꝯiɲa",
        IPA: "/ʤiːnˈja/",
        partOfSpeech: "noun",
        engWord: "wage"
      },
      {
        word: "ꝯiɲak",
        IPA: "/ʤiːˈɲak/",
        partOfSpeech: "verb",
        engWord: "suppress"
      },
      {
        word: "ꝯiɲe",
        IPA: "/ʤiːˈɲe/",
        partOfSpeech: "verb",
        engWord: "rehearse"
      },
      {
        word: "ꝯira",
        IPA: "/ʤiˈɽaː/",
        partOfSpeech: "noun",
        engWord: "embrace"
      },
      {
        word: "ꝯiꝷka",
        IPA: "/ʤiːtˈka/",
        partOfSpeech: "verb",
        engWord: "pull"
      },
      {
        word: "ꝯiꝷok",
        IPA: "/ʤiːˈʈok/",
        partOfSpeech: "adjective",
        engWord: "common"
      },
      {
        word: "ꝯiu",
        IPA: "/ʤiˈuː/",
        partOfSpeech: "noun",
        engWord: "list"
      },
      {
        word: "ꝯiɏ",
        IPA: "/ʤij/",
        partOfSpeech: "verb",
        engWord: "finish"
      },
      {
        word: "ꝯiɏ",
        IPA: "/ʤiːj/",
        partOfSpeech: "noun",
        engWord: "wolf"
      },
      {
        word: "ꝯiɏɏek",
        IPA: "/ʤijˈjek/",
        partOfSpeech: "verb",
        engWord: "marry"
      },
      {
        word: "ꝯo",
        IPA: "/ʤo/",
        partOfSpeech: "verb",
        engWord: "think"
      },
      {
        word: "ꝯoꝝ",
        IPA: "/ʤoʔ/",
        partOfSpeech: "adjective",
        engWord: "likely"
      },
      {
        word: "ꝯoꝝe",
        IPA: "/ʤoˈʔe/",
        partOfSpeech: "determiner",
        engWord: "each"
      },
      {
        word: "ꝯoꝝeb",
        IPA: "/ʤoˈʔeb/",
        partOfSpeech: "noun",
        engWord: "top, mountain"
      },
      {
        word: "ꝯoꝝeꝭ",
        IPA: "/ʤoˈʔeʂ/",
        partOfSpeech: "verb",
        engWord: "meditate"
      },
      {
        word: "ꝯoꝝo",
        IPA: "/ʤoˈʔo/",
        partOfSpeech: "adjective",
        engWord: "lone"
      },
      {
        word: "ꝯoa",
        IPA: "/ʤoˈa/",
        partOfSpeech: "verb",
        engWord: "take"
      },
      {
        word: "ꝯoa",
        IPA: "/ʤoˈaː/",
        partOfSpeech: "adjective",
        engWord: "simple"
      },
      {
        word: "ꝯoaꝝ",
        IPA: "/ʤoˈaːʔ/",
        partOfSpeech: "adverb",
        engWord: "far"
      },
      {
        word: "ꝯoab",
        IPA: "/ʤoˈab/",
        partOfSpeech: "noun",
        engWord: "information"
      },
      {
        word: "ꝯoaꝭ",
        IPA: "/ʤoˈaʂ/",
        partOfSpeech: "adverb",
        engWord: "apart"
      },
      {
        word: "ꝯob",
        IPA: "/ʤob/",
        partOfSpeech: "pronoun",
        engWord: "him/her/it"
      },
      {
        word: "ꝯob",
        IPA: "/ʤob/",
        partOfSpeech: "verb",
        engWord: "call"
      },
      {
        word: "ꝯoba",
        IPA: "/ʤoˈbaː/",
        partOfSpeech: "noun",
        engWord: "dentist"
      },
      {
        word: "ꝯobi",
        IPA: "/ʤoˈbi/",
        partOfSpeech: "verb",
        engWord: "wash"
      },
      {
        word: "ꝯobiꝝ",
        IPA: "/ʤoˈbiʔ/",
        partOfSpeech: "adjective",
        engWord: "rough"
      },
      {
        word: "ꝯobiꝭ",
        IPA: "/ʤoˈbiʂ/",
        partOfSpeech: "noun",
        engWord: "track"
      },
      {
        word: "ꝯobu",
        IPA: "/ʤoˈbuː/",
        partOfSpeech: "verb",
        engWord: "balance"
      },
      {
        word: "ꝯobuꝝ",
        IPA: "/ʤoˈbuːʔ/",
        partOfSpeech: "preposition",
        engWord: "toward"
      },
      {
        word: "ꝯobub",
        IPA: "/ʤoˈbub/",
        partOfSpeech: "noun",
        engWord: "cereal"
      },
      {
        word: "ꝯoɥa",
        IPA: "/ʤoˈʧaː/",
        partOfSpeech: "noun",
        engWord: "ward"
      },
      {
        word: "ꝯoɥab",
        IPA: "/ʤoˈʧaːb/",
        partOfSpeech: "noun",
        engWord: "fiber"
      },
      {
        word: "ꝯoɥaꝭ",
        IPA: "/ʤoˈʧaːʂ/",
        partOfSpeech: "adjective",
        engWord: "sour"
      },
      {
        word: "ꝯoɥe",
        IPA: "/ʤoˈʧe/",
        partOfSpeech: "adjective",
        engWord: "equal"
      },
      {
        word: "ꝯoɥi",
        IPA: "/ʤoˈʧiː/",
        partOfSpeech: "noun",
        engWord: "venue"
      },
      {
        word: "ꝯoɥib",
        IPA: "/ʤoˈʧib/",
        partOfSpeech: "noun",
        engWord: "dome"
      },
      {
        word: "ꝯoɥib",
        IPA: "/ʤoˈʧiːb/",
        partOfSpeech: "noun",
        engWord: "behalf"
      },
      {
        word: "ꝯoɥu",
        IPA: "/ʤoˈʧuː/",
        partOfSpeech: "noun",
        engWord: "month"
      },
      {
        word: "ꝯodu",
        IPA: "/ʤoˈduː/",
        partOfSpeech: "noun",
        engWord: "ornament"
      },
      {
        word: "ꝯoe",
        IPA: "/ʤoˈe/",
        partOfSpeech: "noun",
        engWord: "felony"
      },
      {
        word: "ꝯoe",
        IPA: "/ʤoˈeː/",
        partOfSpeech: "noun",
        engWord: "mill"
      },
      {
        word: "ꝯogeꝝ",
        IPA: "/ʤoˈgeʔ/",
        partOfSpeech: "noun",
        engWord: "page"
      },
      {
        word: "ꝯogeb",
        IPA: "/ʤoˈgeb/",
        partOfSpeech: "adjective",
        engWord: "valid"
      },
      {
        word: "ꝯoggaꝭ",
        IPA: "/ʤogˈgaːʂ/",
        partOfSpeech: "noun",
        engWord: "frenzy"
      },
      {
        word: "ꝯoggu",
        IPA: "/ʤogˈguː/",
        partOfSpeech: "verb",
        engWord: "whistle"
      },
      {
        word: "ꝯogi",
        IPA: "/ʤoˈgiː/",
        partOfSpeech: "adjective",
        engWord: "fantastic"
      },
      {
        word: "ꝯogib",
        IPA: "/ʤoˈgib/",
        partOfSpeech: "verb",
        engWord: "expel"
      },
      {
        word: "ꝯogu",
        IPA: "/ʤoˈgu/",
        partOfSpeech: "noun",
        engWord: "flesh"
      },
      {
        word: "ꝯogu",
        IPA: "/ʤoˈguː/",
        partOfSpeech: "noun",
        engWord: "wave (ocean)"
      },
      {
        word: "ꝯoha",
        IPA: "/ʤoˈha/",
        partOfSpeech: "verb",
        engWord: "excel"
      },
      {
        word: "ꝯoꝯe",
        IPA: "/ʤoˈʤe/",
        partOfSpeech: "noun",
        engWord: "cork"
      },
      {
        word: "ꝯoꝯeꝝ",
        IPA: "/ʤoˈʤeʔ/",
        partOfSpeech: "verb",
        engWord: "explain"
      },
      {
        word: "ꝯokab",
        IPA: "/ʤoˈkab/",
        partOfSpeech: "noun",
        engWord: "course"
      },
      {
        word: "ꝯokab",
        IPA: "/ʤoˈkaːb/",
        partOfSpeech: "noun",
        engWord: "sword"
      },
      {
        word: "ꝯome",
        IPA: "/ʤoˈme/",
        partOfSpeech: "noun",
        engWord: "dune"
      },
      {
        word: "ꝯomeꝝ",
        IPA: "/ʤoˈmeʔ/",
        partOfSpeech: "adjective",
        engWord: "top"
      },
      {
        word: "ꝯomeb",
        IPA: "/ʤoˈmeb/",
        partOfSpeech: "adjective",
        engWord: "firm"
      },
      {
        word: "ꝯomi",
        IPA: "/ʤoˈmi/",
        partOfSpeech: "noun",
        engWord: "thesis"
      },
      {
        word: "ꝯomu",
        IPA: "/ʤoˈmuː/",
        partOfSpeech: "noun",
        engWord: "lens"
      },
      {
        word: "ꝯomuꝝ",
        IPA: "/ʤoˈmuʔ/",
        partOfSpeech: "adjective",
        engWord: "sharp"
      },
      {
        word: "ꝯoꞃde",
        IPA: "/ʤonˈde/",
        partOfSpeech: "noun",
        engWord: "scratch"
      },
      {
        word: "ꝯoꞃe",
        IPA: "/ʤoˈne/",
        partOfSpeech: "noun",
        engWord: "alphabet"
      },
      {
        word: "ꝯoɲa",
        IPA: "/ʤoˈɲa/",
        partOfSpeech: "noun",
        engWord: "butt"
      },
      {
        word: "ꝯoɲab",
        IPA: "/ʤoˈɲab/",
        partOfSpeech: "noun",
        engWord: "turf"
      },
      {
        word: "ꝯoɲe",
        IPA: "/ʤoˈɲe/",
        partOfSpeech: "adjective",
        engWord: "single"
      },
      {
        word: "ꝯoɲeꝝ",
        IPA: "/ʤoˈɲeʔ/",
        partOfSpeech: "noun",
        engWord: "dialect"
      },
      {
        word: "ꝯoɲoꝝ",
        IPA: "/ʤoˈɲoʔ/",
        partOfSpeech: "noun",
        engWord: "resemblance"
      },
      {
        word: "ꝯoo",
        IPA: "/ʤoˈo/",
        partOfSpeech: "verb",
        engWord: "stress"
      },
      {
        word: "ꝯoraꝝ",
        IPA: "/ʤoˈɽaʔ/",
        partOfSpeech: "noun",
        engWord: "restaurant"
      },
      {
        word: "ꝯorab",
        IPA: "/ʤoˈɽab/",
        partOfSpeech: "noun",
        engWord: "tuition"
      },
      {
        word: "ꝯoꝭ",
        IPA: "/ʤoʂ/",
        partOfSpeech: "preposition",
        engWord: "with"
      },
      {
        word: "ꝯoꝷa",
        IPA: "/ʤoˈʈa/",
        partOfSpeech: "noun",
        engWord: "terror"
      },
      {
        word: "ꝯoꝷaꝝ",
        IPA: "/ʤoˈʈaʔ/",
        partOfSpeech: "verb",
        engWord: "present"
      },
      {
        word: "ꝯoꝷab",
        IPA: "/ʤoˈʈab/",
        partOfSpeech: "adjective",
        engWord: "last (final)"
      },
      {
        word: "ꝯoꝷe",
        IPA: "/ʤoˈʈe/",
        partOfSpeech: "noun",
        engWord: "recipe"
      },
      {
        word: "ꝯoꝷka",
        IPA: "/ʤotˈka/",
        partOfSpeech: "noun",
        engWord: "grace"
      },
      {
        word: "ꝯoꝷkaꝝ",
        IPA: "/ʤotˈkaʔ/",
        partOfSpeech: "verb",
        engWord: "appear"
      },
      {
        word: "ꝯoꝷo",
        IPA: "/ʤoˈʈo/",
        partOfSpeech: "verb",
        engWord: "laugh",
        partOfSpeech2: "noun",
        engWord2: "laugh"
      },
      {
        word: "ꝯoꝷu",
        IPA: "/ʤoˈtu/",
        partOfSpeech: "noun",
        engWord: "tower"
      },
      {
        word: "ꝯouꝭ",
        IPA: "/ʤoˈuʂ/",
        partOfSpeech: "adjective",
        engWord: "polar"
      },
      {
        word: "ꝯoɏa",
        IPA: "/ʤoˈja/",
        partOfSpeech: "adjective",
        engWord: "nice"
      },
      {
        word: "ꝯoɏab",
        IPA: "/ʤoˈjab/",
        partOfSpeech: "adjective",
        engWord: "young"
      },
      {
        word: "ꝯu",
        IPA: "/ʤu/",
        partOfSpeech: "noun",
        engWord: "mirror"
      },
      {
        word: "ꝯu",
        IPA: "/ʤuː/",
        partOfSpeech: "adverb",
        engWord: "when"
      },
      {
        word: "ꝯuꝝ",
        IPA: "/ʤuʔ/",
        partOfSpeech: "verb",
        engWord: "design"
      },
      {
        word: "ꝯuꝝ",
        IPA: "/ʤuːʔ/",
        partOfSpeech: "adverb",
        engWord: "over"
      },
      {
        word: "ꝯuꝝe",
        IPA: "/ʤuːˈʔeː/",
        partOfSpeech: "noun",
        engWord: "heir"
      },
      {
        word: "ꝯua",
        IPA: "/ʤuˈa/",
        partOfSpeech: "pronoun",
        engWord: "other"
      },
      {
        word: "ꝯua",
        IPA: "/ʤuːˈa/",
        partOfSpeech: "noun",
        engWord: "flu"
      },
      {
        word: "ꝯua",
        IPA: "/ʤuːˈaː/",
        partOfSpeech: "noun",
        engWord: "play (stage play)"
      },
      {
        word: "ꝯub",
        IPA: "/ʤuːb/",
        partOfSpeech: "adverb",
        engWord: "once"
      },
      {
        word: "ꝯubi",
        IPA: "/ʤuːˈbiː/",
        partOfSpeech: "adverb",
        engWord: "behind"
      },
      {
        word: "ꝯubu",
        IPA: "/ʤuːˈbuː/",
        partOfSpeech: "number",
        engWord: "hundred"
      },
      {
        word: "ꝯubuꝝ",
        IPA: "/ʤuːˈbuʔ/",
        partOfSpeech: "noun",
        engWord: "target"
      },
      {
        word: "ꝯuɥaꝝ",
        IPA: "/ʤuːˈʧaːʔ/",
        partOfSpeech: "adjective",
        engWord: "bleak"
      },
      {
        word: "ꝯuɥi",
        IPA: "/ʤuːˈʧi/",
        partOfSpeech: "noun",
        engWord: "tornado"
      },
      {
        word: "ꝯuɥi",
        IPA: "/ʤuːˈʧiː/",
        partOfSpeech: "noun",
        engWord: "carcass"
      },
      {
        word: "ꝯuɥu",
        IPA: "/ʤuˈʧuː/",
        partOfSpeech: "noun",
        engWord: "nature"
      },
      {
        word: "ꝯuɥu",
        IPA: "/ʤuːˈʧu/",
        partOfSpeech: "noun",
        engWord: "autumn"
      },
      {
        word: "ꝯudeꝝ",
        IPA: "/ʤuːˈdeʔ/",
        partOfSpeech: "noun",
        engWord: "flow"
      },
      {
        word: "ꝯuduꝝ",
        IPA: "/ʤuˈduːʔ/",
        partOfSpeech: "noun",
        engWord: "hammer"
      },
      {
        word: "ꝯue",
        IPA: "/ʤuːˈe/",
        partOfSpeech: "noun",
        engWord: "silver"
      },
      {
        word: "ꝯue",
        IPA: "/ʤuːˈeː/",
        partOfSpeech: "noun",
        engWord: "crusade"
      },
      {
        word: "ꝯug",
        IPA: "/ʤug/",
        partOfSpeech: "noun",
        engWord: "toe"
      },
      {
        word: "ꝯuge",
        IPA: "/ʤuˈge/",
        partOfSpeech: "verb",
        engWord: "shiver"
      },
      {
        word: "ꝯugeb",
        IPA: "/ʤuːˈgeb/",
        partOfSpeech: "noun",
        engWord: "defect"
      },
      {
        word: "ꝯugeỻ",
        IPA: "/ʤuˈgeɭ/",
        partOfSpeech: "noun",
        engWord: "boost"
      },
      {
        word: "ꝯuggu",
        IPA: "/ʤugˈguː/",
        partOfSpeech: "adverb",
        engWord: "how"
      },
      {
        word: "ꝯugi",
        IPA: "/ʤuːˈgiː/",
        partOfSpeech: "verb",
        engWord: "investigate"
      },
      {
        word: "ꝯugiꝝ",
        IPA: "/ʤuˈgiːʔ/",
        partOfSpeech: "noun",
        engWord: "editor"
      },
      {
        word: "ꝯugib",
        IPA: "/ʤuːˈgiːb/",
        partOfSpeech: "verb",
        engWord: "involve"
      },
      {
        word: "ꝯuguɏ",
        IPA: "/ʤuːˈguj/",
        partOfSpeech: "noun",
        engWord: "dignity"
      },
      {
        word: "ꝯuꝯa",
        IPA: "/ʤuːˈʤa/",
        partOfSpeech: "verb",
        engWord: "inject"
      },
      {
        word: "ꝯuꝯe",
        IPA: "/ʤuˈʤe/",
        partOfSpeech: "adjective",
        engWord: "aggressive"
      },
      {
        word: "ꝯuꝯe",
        IPA: "/ʤuːˈʤe/",
        partOfSpeech: "noun",
        engWord: "peak"
      },
      {
        word: "ꝯuk",
        IPA: "/ʤuk/",
        partOfSpeech: "verb",
        engWord: "judge"
      },
      {
        word: "ꝯuka",
        IPA: "/ʤuˈka/",
        partOfSpeech: "verb",
        engWord: "refuse"
      },
      {
        word: "ꝯuka",
        IPA: "/ʤuːˈka/",
        partOfSpeech: "verb",
        engWord: "continue"
      },
      {
        word: "ꝯuka",
        IPA: "/ʤuːˈkaː/",
        partOfSpeech: "noun",
        engWord: "badge"
      },
      {
        word: "ꝯukaɏ",
        IPA: "/ʤuːˈkaj/",
        partOfSpeech: "noun",
        engWord: "supervisor"
      },
      {
        word: "ꝯuki",
        IPA: "/ʤuːˈki/",
        partOfSpeech: "noun",
        engWord: "volume"
      },
      {
        word: "ꝯuku",
        IPA: "/ʤuːˈkuː/",
        partOfSpeech: "verb",
        engWord: "count"
      },
      {
        word: "ꝯuỻ",
        IPA: "/ʤuɭ/",
        partOfSpeech: "interjection",
        engWord: "no"
      },
      {
        word: "ꝯuỻ",
        IPA: "/ʤuːɭ/",
        partOfSpeech: "adjective",
        engWord: "social"
      },
      {
        word: "ꝯume",
        IPA: "/ʤuːˈme/",
        partOfSpeech: "noun",
        engWord: "south"
      },
      {
        word: "ꝯumi",
        IPA: "/ʤuˈmiː/",
        partOfSpeech: "noun",
        engWord: "committee"
      },
      {
        word: "ꝯumi",
        IPA: "/ʤuːˈmiː/",
        partOfSpeech: "verb",
        engWord: "justify"
      },
      {
        word: "ꝯumuɏ",
        IPA: "/ʤuːˈmuj/",
        partOfSpeech: "verb",
        engWord: "register"
      },
      {
        word: "ꝯuꞃ",
        IPA: "/ʤuːn/",
        partOfSpeech: "verb",
        engWord: "surprise"
      },
      {
        word: "ꝯuꞃeỻ",
        IPA: "/ʤuˈneɭ/",
        partOfSpeech: "verb",
        engWord: "devastate"
      },
      {
        word: "ꝯuɲa",
        IPA: "/ʤuˈɲa/",
        partOfSpeech: "adjective",
        engWord: "humble"
      },
      {
        word: "ꝯuɲaɏ",
        IPA: "/ʤuːˈɲaj/",
        partOfSpeech: "noun",
        engWord: "place"
      },
      {
        word: "ꝯura",
        IPA: "/ʤuˈɽa/",
        partOfSpeech: "verb",
        engWord: "edit"
      },
      {
        word: "ꝯura",
        IPA: "/ʤuːˈɽa/",
        partOfSpeech: "verb",
        engWord: "fulfil"
      },
      {
        word: "ꝯurak",
        IPA: "/ʤuˈɽak/",
        partOfSpeech: "verb",
        engWord: "rattle"
      },
      {
        word: "ꝯuraỻ",
        IPA: "/ʤuːˈɽaɭ/",
        partOfSpeech: "noun",
        engWord: "symbol"
      },
      {
        word: "ꝯuraɏ",
        IPA: "/ʤuːˈɽaj/",
        partOfSpeech: "noun",
        engWord: "trophy"
      },
      {
        word: "ꝯuꝷa",
        IPA: "/ʤuːˈʈa/",
        partOfSpeech: "noun",
        engWord: "plight"
      },
      {
        word: "ꝯuꝷe",
        IPA: "/ʤuːˈʈe/",
        partOfSpeech: "verb",
        engWord: "transcend"
      },
      {
        word: "ꝯuꝷek",
        IPA: "/ʤuˈʈeːk/",
        partOfSpeech: "noun",
        engWord: "alumnus"
      },
      {
        word: "ꝯuꝷo",
        IPA: "/ʤuˈʈo/",
        partOfSpeech: "interjection",
        engWord: "hello"
      },
      {
        word: "ꝯuꝷog",
        IPA: "/ʤuˈʈog/",
        partOfSpeech: "preposition",
        engWord: "throughout"
      },
      {
        word: "ꝯuꝷu",
        IPA: "/ʤuːˈtu/",
        partOfSpeech: "noun",
        engWord: "coffin"
      },
      {
        word: "ꝯuu",
        IPA: "/ʤuːˈuː/",
        partOfSpeech: "adjective",
        engWord: "broad"
      },
      {
        word: "ꝯuɏ",
        IPA: "/ʤuːj/",
        partOfSpeech: "noun",
        engWord: "leader"
      },
      {
        word: "ꝯuɏa",
        IPA: "/ʤuˈja/",
        partOfSpeech: "verb",
        engWord: "last"
      },
      {
        word: "ke",
        IPA: "/ke/",
        partOfSpeech: "determiner",
        engWord: "another"
      },
      {
        word: "ke",
        IPA: "/keː/",
        partOfSpeech: "noun",
        engWord: "brush, brush (for hair)"
      },
      {
        word: "keꝝe",
        IPA: "/keːˈʔe/",
        partOfSpeech: "noun",
        engWord: "fantasy"
      },
      {
        word: "keꝝo",
        IPA: "/keˈʔo/",
        partOfSpeech: "noun",
        engWord: "accessory"
      },
      {
        word: "keam",
        IPA: "/keːˈaːm/",
        partOfSpeech: "adjective",
        engWord: "dead"
      },
      {
        word: "kebi",
        IPA: "/keˈbiː/",
        partOfSpeech: "noun",
        engWord: "assassin"
      },
      {
        word: "kebum",
        IPA: "/keːˈbuːm/",
        partOfSpeech: "noun",
        engWord: "linguistics"
      },
      {
        word: "keem",
        IPA: "/keˈem/",
        partOfSpeech: "noun",
        engWord: "agriculture"
      },
      {
        word: "keha",
        IPA: "/keːˈha/",
        partOfSpeech: "noun",
        engWord: "lettuce"
      },
      {
        word: "keku",
        IPA: "/keˈkuː/",
        partOfSpeech: "verb",
        engWord: "cruise"
      },
      {
        word: "kem",
        IPA: "/kem/",
        partOfSpeech: "noun",
        engWord: "face, forehead"
      },
      {
        word: "kem",
        IPA: "/keːm/",
        partOfSpeech: "noun",
        engWord: "car"
      },
      {
        word: "kemem",
        IPA: "/keˈmem/",
        partOfSpeech: "article",
        engWord: "every"
      },
      {
        word: "keɲem",
        IPA: "/keˈɲem/",
        partOfSpeech: "adjective",
        engWord: "steep"
      },
      {
        word: "keɲem",
        IPA: "/keːˈɲem/",
        partOfSpeech: "noun",
        engWord: "remedy"
      },
      {
        word: "keꝭom",
        IPA: "/keˈʂom/",
        partOfSpeech: "adjective",
        engWord: "tactical"
      },
      {
        word: "keꝷe",
        IPA: "/keˈʈe/",
        partOfSpeech: "verb",
        engWord: "surpass"
      },
      {
        word: "keꝷe",
        IPA: "/keːˈʈe/",
        partOfSpeech: "verb",
        engWord: "release"
      },
      {
        word: "keꝷem",
        IPA: "/keˈʈem/",
        partOfSpeech: "verb",
        engWord: "distract"
      },
      {
        word: "keꝷem",
        IPA: "/keːˈʈem/",
        partOfSpeech: "verb",
        engWord: "intimidate"
      },
      {
        word: "ki",
        IPA: "/ki/",
        partOfSpeech: "noun",
        engWord: "clay"
      },
      {
        word: "ki",
        IPA: "/kiː/",
        partOfSpeech: "noun",
        engWord: "tool"
      },
      {
        word: "kiꝝe",
        IPA: "/kiːˈʔe/",
        partOfSpeech: "noun",
        engWord: "mathematics"
      },
      {
        word: "kiba",
        IPA: "/kiːˈbaː/",
        partOfSpeech: "verb",
        engWord: "confuse"
      },
      {
        word: "kiɥe",
        IPA: "/kiːˈʧe/",
        partOfSpeech: "noun",
        engWord: "shade"
      },
      {
        word: "kiɥem",
        IPA: "/kiːˈʧem/",
        partOfSpeech: "verb",
        engWord: "name"
      },
      {
        word: "kiɥu",
        IPA: "/kiːˈʧu/",
        partOfSpeech: "verb",
        engWord: "inherit"
      },
      {
        word: "kide",
        IPA: "/kiːˈde/",
        partOfSpeech: "verb",
        engWord: "inhale"
      },
      {
        word: "kiem",
        IPA: "/kiˈem/",
        partOfSpeech: "verb",
        engWord: "mold"
      },
      {
        word: "kika",
        IPA: "/kiːˈka/",
        partOfSpeech: "verb",
        engWord: "trip"
      },
      {
        word: "kim",
        IPA: "/kim/",
        partOfSpeech: "adverb",
        engWord: "almost"
      },
      {
        word: "kim",
        IPA: "/kiːm/",
        partOfSpeech: "noun",
        engWord: "heart"
      },
      {
        word: "kimu",
        IPA: "/kiːˈmu/",
        partOfSpeech: "verb",
        engWord: "instruct"
      },
      {
        word: "kimum",
        IPA: "/kiːˈmum/",
        partOfSpeech: "noun",
        engWord: "pact"
      },
      {
        word: "kiom",
        IPA: "/kiˈom/",
        partOfSpeech: "adverb",
        engWord: "nationwide"
      },
      {
        word: "kiꝷa",
        IPA: "/kiˈʈa/",
        partOfSpeech: "number",
        engWord: "three"
      },
      {
        word: "kium",
        IPA: "/kiːˈuːm/",
        partOfSpeech: "noun",
        engWord: "criteria"
      },
      {
        word: "ku",
        IPA: "/ku/",
        partOfSpeech: "noun",
        engWord: "police"
      },
      {
        word: "ku",
        IPA: "/kuː/",
        partOfSpeech: "noun",
        engWord: "process"
      },
      {
        word: "kua",
        IPA: "/kuːˈa/",
        partOfSpeech: "noun",
        engWord: "belt"
      },
      {
        word: "kuba",
        IPA: "/kuːˈbaː/",
        partOfSpeech: "verb",
        engWord: "tug"
      },
      {
        word: "kuɥi",
        IPA: "/kuˈʧiː/",
        partOfSpeech: "noun",
        engWord: "scale"
      },
      {
        word: "kuɥim",
        IPA: "/kuˈʧim/",
        partOfSpeech: "adjective",
        engWord: "juvenile"
      },
      {
        word: "kue",
        IPA: "/kuːˈe/",
        partOfSpeech: "noun",
        engWord: "bark",
        partOfSpeech2: "verb",
        engWord2: "bark "
      },
      {
        word: "kuge",
        IPA: "/kuˈge/",
        partOfSpeech: "noun",
        engWord: "regression"
      },
      {
        word: "kugu",
        IPA: "/kuːˈgu/",
        partOfSpeech: "noun",
        engWord: "coconut"
      },
      {
        word: "kuꝯa",
        IPA: "/kuːˈʤa/",
        partOfSpeech: "preposition",
        engWord: "versus"
      },
      {
        word: "kuꝯe",
        IPA: "/kuˈʤe/",
        partOfSpeech: "noun",
        engWord: "sheep"
      },
      {
        word: "kuki",
        IPA: "/kuˈki/",
        partOfSpeech: "noun",
        engWord: "package"
      },
      {
        word: "kum",
        IPA: "/kum/",
        partOfSpeech: "verb",
        engWord: "report"
      },
      {
        word: "kum",
        IPA: "/kuːm/",
        partOfSpeech: "verb",
        engWord: "evacuate"
      },
      {
        word: "kuɲa",
        IPA: "/kuˈɲa/",
        partOfSpeech: "adjective",
        engWord: "random"
      },
      {
        word: "kuꝷam",
        IPA: "/kuˈʈam/",
        partOfSpeech: "noun",
        engWord: "arm"
      },
      {
        word: "kuꝷum",
        IPA: "/kuːˈtum/",
        partOfSpeech: "verb",
        engWord: "stretch"
      },
      {
        word: "kuu",
        IPA: "/kuːˈuː/",
        partOfSpeech: "noun",
        engWord: "soup"
      },
      {
        word: "kuum",
        IPA: "/kuːˈuːm/",
        partOfSpeech: "adjective",
        engWord: "electoral"
      },
      {
        word: "me",
        IPA: "/me/",
        partOfSpeech: "preposition",
        engWord: "through"
      },
      {
        word: "me",
        IPA: "/meː/",
        partOfSpeech: "noun",
        engWord: "period"
      },
      {
        word: "mebi",
        IPA: "/meˈbi/",
        partOfSpeech: "noun",
        engWord: "lease"
      },
      {
        word: "meɥu",
        IPA: "/meːˈʧuː/",
        partOfSpeech: "noun",
        engWord: "pillar"
      },
      {
        word: "medem",
        IPA: "/meˈdem/",
        partOfSpeech: "noun",
        engWord: "rug"
      },
      {
        word: "mee",
        IPA: "/meˈe/",
        partOfSpeech: "noun",
        engWord: "portion"
      },
      {
        word: "megu",
        IPA: "/meˈgu/",
        partOfSpeech: "verb",
        engWord: "rub"
      },
      {
        word: "meham",
        IPA: "/meˈham/",
        partOfSpeech: "noun",
        engWord: "patriot"
      },
      {
        word: "meka",
        IPA: "/meˈka/",
        partOfSpeech: "verb",
        engWord: "adopt"
      },
      {
        word: "mekam",
        IPA: "/meːˈkam/",
        partOfSpeech: "noun",
        engWord: "menu"
      },
      {
        word: "mem",
        IPA: "/mem/",
        partOfSpeech: "verb",
        engWord: "live"
      },
      {
        word: "mem",
        IPA: "/meːm/",
        partOfSpeech: "noun",
        engWord: "curtain"
      },
      {
        word: "memi",
        IPA: "/meˈmi/",
        partOfSpeech: "noun",
        engWord: "eyelash"
      },
      {
        word: "meꞃde",
        IPA: "/meːnˈde/",
        partOfSpeech: "pronoun",
        engWord: "nobody"
      },
      {
        word: "meꞃu",
        IPA: "/meˈnuː/",
        partOfSpeech: "adjective",
        engWord: "naive"
      },
      {
        word: "meɲa",
        IPA: "/meˈɲa/",
        partOfSpeech: "noun",
        engWord: "crust"
      },
      {
        word: "meɲem",
        IPA: "/meːˈɲem/",
        partOfSpeech: "noun",
        engWord: "network"
      },
      {
        word: "meꝷa",
        IPA: "/meˈʈa/",
        partOfSpeech: "noun",
        engWord: "command"
      },
      {
        word: "meꝷe",
        IPA: "/meːˈʈeː/",
        partOfSpeech: "verb",
        engWord: "compose"
      },
      {
        word: "meɏa",
        IPA: "/meˈja/",
        partOfSpeech: "noun",
        engWord: "joke"
      },
      {
        word: "mi",
        IPA: "/mi/",
        partOfSpeech: "adverb",
        engWord: "instead"
      },
      {
        word: "mi",
        IPA: "/miː/",
        partOfSpeech: "determiner",
        engWord: "this"
      },
      {
        word: "miꝝe",
        IPA: "/miˈʔe/",
        partOfSpeech: "adverb",
        engWord: "neither"
      },
      {
        word: "mibi",
        IPA: "/miːˈbi/",
        partOfSpeech: "noun",
        engWord: "appetite"
      },
      {
        word: "mibu",
        IPA: "/miːˈbuː/",
        partOfSpeech: "noun",
        engWord: "certificate"
      },
      {
        word: "miɥe",
        IPA: "/miːˈʧe/",
        partOfSpeech: "verb",
        engWord: "form"
      },
      {
        word: "miɥum",
        IPA: "/miˈʧuːm/",
        partOfSpeech: "verb",
        engWord: "recruit"
      },
      {
        word: "midem",
        IPA: "/miˈdem/",
        partOfSpeech: "verb",
        engWord: "pollute"
      },
      {
        word: "mie",
        IPA: "/miːˈe/",
        partOfSpeech: "preposition",
        engWord: "below"
      },
      {
        word: "miꝯem",
        IPA: "/miˈʤem/",
        partOfSpeech: "verb",
        engWord: "review"
      },
      {
        word: "mika",
        IPA: "/miˈka/",
        partOfSpeech: "noun",
        engWord: "deed"
      },
      {
        word: "mika",
        IPA: "/miːˈkaː/",
        partOfSpeech: "verb",
        engWord: "spray"
      },
      {
        word: "mim",
        IPA: "/mim/",
        partOfSpeech: "noun",
        engWord: "shrimp"
      },
      {
        word: "mim",
        IPA: "/miːm/",
        partOfSpeech: "noun",
        engWord: "axe"
      },
      {
        word: "mime",
        IPA: "/miːˈme/",
        partOfSpeech: "adjective",
        engWord: "dual"
      },
      {
        word: "mimu",
        IPA: "/miːˈmuː/",
        partOfSpeech: "noun",
        engWord: "erection"
      },
      {
        word: "miɲa",
        IPA: "/miːˈɲa/",
        partOfSpeech: "noun",
        engWord: "ramp"
      },
      {
        word: "miɲam",
        IPA: "/miˈɲam/",
        partOfSpeech: "verb",
        engWord: "sail"
      },
      {
        word: "mo",
        IPA: "/mo/",
        partOfSpeech: "noun",
        engWord: "goal"
      },
      {
        word: "mobam",
        IPA: "/moˈbaːm/",
        partOfSpeech: "noun",
        engWord: "spectacle"
      },
      {
        word: "mobu",
        IPA: "/moˈbuː/",
        partOfSpeech: "verb",
        engWord: "perceive"
      },
      {
        word: "modem",
        IPA: "/moˈdem/",
        partOfSpeech: "noun",
        engWord: "matrix"
      },
      {
        word: "mogem",
        IPA: "/moˈgem/",
        partOfSpeech: "noun",
        engWord: "census"
      },
      {
        word: "moꝯem",
        IPA: "/moˈʤem/",
        partOfSpeech: "noun",
        engWord: "call"
      },
      {
        word: "mom",
        IPA: "/mom/",
        partOfSpeech: "adjective",
        engWord: "popular"
      },
      {
        word: "momim",
        IPA: "/moˈmiːm/",
        partOfSpeech: "noun",
        engWord: "vase"
      },
      {
        word: "mu",
        IPA: "/mu/",
        partOfSpeech: "noun",
        engWord: "air"
      },
      {
        word: "mu",
        IPA: "/muː/",
        partOfSpeech: "noun",
        engWord: "belly (stomach area)"
      },
      {
        word: "mua",
        IPA: "/muːˈa/",
        partOfSpeech: "verb",
        engWord: "inspect"
      },
      {
        word: "mubu",
        IPA: "/muˈbu/",
        partOfSpeech: "verb",
        engWord: "earn"
      },
      {
        word: "mubu",
        IPA: "/muːˈbu/",
        partOfSpeech: "verb",
        engWord: "arouse"
      },
      {
        word: "mubum",
        IPA: "/muˈbuːm/",
        partOfSpeech: "adjective",
        engWord: "pervasive"
      },
      {
        word: "muɥa",
        IPA: "/muˈʧaː/",
        partOfSpeech: "noun",
        engWord: "colony"
      },
      {
        word: "muɥi",
        IPA: "/muːˈʧiː/",
        partOfSpeech: "pronoun",
        engWord: "everyone"
      },
      {
        word: "muɥum",
        IPA: "/muˈʧum/",
        partOfSpeech: "verb",
        engWord: "promote"
      },
      {
        word: "muge",
        IPA: "/muˈge/",
        partOfSpeech: "adjective",
        engWord: "adolescent"
      },
      {
        word: "mugga",
        IPA: "/muːgˈgaː/",
        partOfSpeech: "noun",
        engWord: "hair (of head), hair (of body)"
      },
      {
        word: "mugu",
        IPA: "/muˈgu/",
        partOfSpeech: "verb",
        engWord: "exist"
      },
      {
        word: "mugum",
        IPA: "/muːˈgum/",
        partOfSpeech: "adjective",
        engWord: "high"
      },
      {
        word: "muham",
        IPA: "/muˈham/",
        partOfSpeech: "noun",
        engWord: "geography"
      },
      {
        word: "mukam",
        IPA: "/muˈkam/",
        partOfSpeech: "noun",
        engWord: "folder"
      },
      {
        word: "mukam",
        IPA: "/muːˈkaːm/",
        partOfSpeech: "noun",
        engWord: "trial"
      },
      {
        word: "mum",
        IPA: "/mum/",
        partOfSpeech: "adjective",
        engWord: "cold"
      },
      {
        word: "mum",
        IPA: "/muːm/",
        partOfSpeech: "noun",
        engWord: "spider"
      },
      {
        word: "mume",
        IPA: "/muˈme/",
        partOfSpeech: "adjective",
        engWord: "scarce"
      },
      {
        word: "muꞃem",
        IPA: "/muːˈnem/",
        partOfSpeech: "verb",
        engWord: "fill"
      },
      {
        word: "muɲa",
        IPA: "/muˈɲa/",
        partOfSpeech: "noun",
        engWord: "ammunition"
      },
      {
        word: "muɲa",
        IPA: "/muːˈɲa/",
        partOfSpeech: "adverb",
        engWord: "meanwhile"
      },
      {
        word: "muɲe",
        IPA: "/muˈɲe/",
        partOfSpeech: "noun",
        engWord: "brother"
      },
      {
        word: "mura",
        IPA: "/muˈɽa/",
        partOfSpeech: "noun",
        engWord: "olive"
      },
      {
        word: "mura",
        IPA: "/muːˈɽa/",
        partOfSpeech: "adjective",
        engWord: "deadly"
      },
      {
        word: "muram",
        IPA: "/muˈɽaːm/",
        partOfSpeech: "noun",
        engWord: "publisher"
      },
      {
        word: "muꝷe",
        IPA: "/muːˈʈe/",
        partOfSpeech: "noun",
        engWord: "accident"
      },
      {
        word: "muꝷem",
        IPA: "/muˈʈem/",
        partOfSpeech: "verb",
        engWord: "forecast"
      },
      {
        word: "ꞃa",
        IPA: "/na/",
        partOfSpeech: "noun",
        engWord: "power"
      },
      {
        word: "ꞃa",
        IPA: "/naː/",
        partOfSpeech: "adverb",
        engWord: "else"
      },
      {
        word: "ꞃaꝝe",
        IPA: "/naːˈʔe/",
        partOfSpeech: "verb",
        engWord: "halt"
      },
      {
        word: "ꞃaꝝeb",
        IPA: "/naˈʔeb/",
        partOfSpeech: "adjective",
        engWord: "live"
      },
      {
        word: "ꞃaa",
        IPA: "/naˈaː/",
        partOfSpeech: "noun",
        engWord: "sound"
      },
      {
        word: "ꞃaakaka",
        IPA: "/naˈakaka/",
        partOfSpeech: "noun",
        engWord: "descendant"
      },
      {
        word: "ꞃab",
        IPA: "/nab/",
        partOfSpeech: "noun",
        engWord: "tension"
      },
      {
        word: "ꞃabi",
        IPA: "/naˈbiː/",
        partOfSpeech: "noun",
        engWord: "kidney"
      },
      {
        word: "ꞃaɥi",
        IPA: "/naːˈʧi/",
        partOfSpeech: "verb",
        engWord: "plug"
      },
      {
        word: "ꞃaɥu",
        IPA: "/naˈʧuː/",
        partOfSpeech: "noun",
        engWord: "cord"
      },
      {
        word: "ꞃaɥumemu",
        IPA: "/naˈʧuːmemu/",
        partOfSpeech: "noun",
        engWord: "membrane"
      },
      {
        word: "ꞃaɥuoub",
        IPA: "/naˈʧuoub/",
        partOfSpeech: "noun",
        engWord: "industry"
      },
      {
        word: "ꞃae",
        IPA: "/naˈe/",
        partOfSpeech: "adjective",
        engWord: "sole"
      },
      {
        word: "ꞃaguꝝebu",
        IPA: "/naːˈguːʔebuː/",
        partOfSpeech: "verb",
        engWord: "scream"
      },
      {
        word: "ꞃagub",
        IPA: "/naːˈgub/",
        partOfSpeech: "verb",
        engWord: "emit"
      },
      {
        word: "ꞃaꝯe",
        IPA: "/naˈʤe/",
        partOfSpeech: "noun",
        engWord: "price"
      },
      {
        word: "ꞃaꝯeaɥu",
        IPA: "/naːˈʤeːaʧuː/",
        partOfSpeech: "adjective",
        engWord: "qualitative"
      },
      {
        word: "ꞃaꝯeb",
        IPA: "/naˈʤeb/",
        partOfSpeech: "noun",
        engWord: "stock"
      },
      {
        word: "ꞃaka",
        IPA: "/naˈka/",
        partOfSpeech: "adverb",
        engWord: "thus"
      },
      {
        word: "ꞃakaaꞃheb",
        IPA: "/naˈkaaːnheb/",
        partOfSpeech: "noun",
        engWord: "prairie"
      },
      {
        word: "ꞃami",
        IPA: "/naˈmiː/",
        partOfSpeech: "noun",
        engWord: "hedge"
      },
      {
        word: "ꞃamu",
        IPA: "/naˈmuː/",
        partOfSpeech: "noun",
        engWord: "waist"
      },
      {
        word: "ꞃamub",
        IPA: "/naˈmub/",
        partOfSpeech: "noun",
        engWord: "yacht"
      },
      {
        word: "ꞃaꞃde",
        IPA: "/nanˈde/",
        partOfSpeech: "noun",
        engWord: "foe"
      },
      {
        word: "ꞃaꞃuabu",
        IPA: "/naˈnuabu/",
        partOfSpeech: "noun",
        engWord: "outcome"
      },
      {
        word: "ꞃaɲa",
        IPA: "/naˈɲa/",
        partOfSpeech: "verb",
        engWord: "waste"
      },
      {
        word: "ꞃaɲageɲe",
        IPA: "/naˈɲageɲe/",
        partOfSpeech: "number",
        engWord: "second"
      },
      {
        word: "ꞃaɲeb",
        IPA: "/naːˈɲeb/",
        partOfSpeech: "noun",
        engWord: "breakthrough"
      },
      {
        word: "ꞃaɲo",
        IPA: "/naˈɲo/",
        partOfSpeech: "verb",
        engWord: "attach"
      },
      {
        word: "ꞃaꝷa",
        IPA: "/naˈʈa/",
        partOfSpeech: "noun",
        engWord: "breakdown"
      },
      {
        word: "ꞃaꝷaꝯoɲa",
        IPA: "/naˈʈaʤoɲa/",
        partOfSpeech: "verb",
        engWord: "retreat"
      },
      {
        word: "ꞃaꝷu",
        IPA: "/naˈtu/",
        partOfSpeech: "noun",
        engWord: "key"
      },
      {
        word: "ꞃe",
        IPA: "/ne/",
        partOfSpeech: "adverb",
        engWord: "home"
      },
      {
        word: "ꞃe",
        IPA: "/neː/",
        partOfSpeech: "adjective",
        engWord: "stable"
      },
      {
        word: "ꞃeꝝeꝷaɲo",
        IPA: "/neˈʔeʈaɲo/",
        partOfSpeech: "noun",
        engWord: "fox"
      },
      {
        word: "ꞃeaɥuꝯob",
        IPA: "/neˈaʧuʤob/",
        partOfSpeech: "adjective",
        engWord: "thick"
      },
      {
        word: "ꞃeb",
        IPA: "/neb/",
        partOfSpeech: "verb",
        engWord: "shove"
      },
      {
        word: "ꞃeb",
        IPA: "/neːb/",
        partOfSpeech: "verb",
        engWord: "excite"
      },
      {
        word: "ꞃeba",
        IPA: "/neˈbaː/",
        partOfSpeech: "noun",
        engWord: "bench"
      },
      {
        word: "ꞃebib",
        IPA: "/neˈbib/",
        partOfSpeech: "noun",
        engWord: "security"
      },
      {
        word: "ꞃebiꝷaꝷe",
        IPA: "/neˈbiːʈaʈe/",
        partOfSpeech: "noun",
        engWord: "board"
      },
      {
        word: "ꞃebukaꞃeb",
        IPA: "/neˈbuːkaneb/",
        partOfSpeech: "verb",
        engWord: "exert"
      },
      {
        word: "ꞃebuꞃdeme",
        IPA: "/neˈbuːndeme/",
        partOfSpeech: "verb",
        engWord: "denounce"
      },
      {
        word: "ꞃeɥu",
        IPA: "/neːˈʧuː/",
        partOfSpeech: "verb",
        engWord: "stack"
      },
      {
        word: "ꞃedeb",
        IPA: "/neˈdeb/",
        partOfSpeech: "adjective",
        engWord: "renowned"
      },
      {
        word: "ꞃee",
        IPA: "/neːˈe/",
        partOfSpeech: "adverb",
        engWord: "back"
      },
      {
        word: "ꞃegidemi",
        IPA: "/neːˈgiːdemiː/",
        partOfSpeech: "noun",
        engWord: "claw"
      },
      {
        word: "ꞃegu",
        IPA: "/neˈguː/",
        partOfSpeech: "noun",
        engWord: "summer"
      },
      {
        word: "ꞃegu",
        IPA: "/neːˈgu/",
        partOfSpeech: "noun",
        engWord: "topic"
      },
      {
        word: "ꞃegub",
        IPA: "/neːˈgub/",
        partOfSpeech: "adjective",
        engWord: "sore"
      },
      {
        word: "ꞃegugeɥib",
        IPA: "/neˈguːgeʧiːb/",
        partOfSpeech: "noun",
        engWord: "model"
      },
      {
        word: "ꞃegugiꝯe",
        IPA: "/neˈguːgiːʤe/",
        partOfSpeech: "noun",
        engWord: "violin"
      },
      {
        word: "ꞃehaoka",
        IPA: "/neːˈhaoka/",
        partOfSpeech: "noun",
        engWord: "wool, fur"
      },
      {
        word: "ꞃekab",
        IPA: "/neːˈkab/",
        partOfSpeech: "noun",
        engWord: "citizen"
      },
      {
        word: "ꞃekadeꝷeb",
        IPA: "/neˈkadeʈeb/",
        partOfSpeech: "noun",
        engWord: "benefit"
      },
      {
        word: "ꞃeꞃu",
        IPA: "/neˈnu/",
        partOfSpeech: "noun",
        engWord: "marsh"
      },
      {
        word: "ꞃeɲa",
        IPA: "/neːˈɲa/",
        partOfSpeech: "number",
        engWord: "million"
      },
      {
        word: "ꞃeɲab",
        IPA: "/neˈɲab/",
        partOfSpeech: "verb",
        engWord: "train"
      },
      {
        word: "ꞃera",
        IPA: "/neˈɽa/",
        partOfSpeech: "noun",
        engWord: "job"
      },
      {
        word: "ꞃerab",
        IPA: "/neˈɽaːb/",
        partOfSpeech: "noun",
        engWord: "liquor"
      },
      {
        word: "ꞃeꝷa",
        IPA: "/neˈʈa/",
        partOfSpeech: "verb",
        engWord: "save, rescue"
      },
      {
        word: "ꞃeꝷameɏab",
        IPA: "/neːˈʈamejab/",
        partOfSpeech: "verb",
        engWord: "refer"
      },
      {
        word: "ꞃo",
        IPA: "/no/",
        partOfSpeech: "adjective",
        engWord: "thin (of an object), slim (of a person)"
      },
      {
        word: "ꞃoꝝeb",
        IPA: "/noˈʔeb/",
        partOfSpeech: "verb",
        engWord: "insult"
      },
      {
        word: "ꞃoa",
        IPA: "/noˈa/",
        partOfSpeech: "noun",
        engWord: "calcium"
      },
      {
        word: "ꞃoab",
        IPA: "/noˈab/",
        partOfSpeech: "noun",
        engWord: "observation"
      },
      {
        word: "ꞃoadeka",
        IPA: "/noˈadekaː/",
        partOfSpeech: "noun",
        engWord: "tourist"
      },
      {
        word: "ꞃob",
        IPA: "/nob/",
        partOfSpeech: "adjective",
        engWord: "white, blank"
      },
      {
        word: "ꞃobi",
        IPA: "/noˈbiː/",
        partOfSpeech: "adverb",
        engWord: "perhaps"
      },
      {
        word: "ꞃobu",
        IPA: "/noˈbu/",
        partOfSpeech: "verb",
        engWord: "manoeuvre"
      },
      {
        word: "ꞃobub",
        IPA: "/noˈbuːb/",
        partOfSpeech: "noun",
        engWord: "whiskey"
      },
      {
        word: "ꞃobuhagub",
        IPA: "/noˈbuːhagub/",
        partOfSpeech: "noun",
        engWord: "attention"
      },
      {
        word: "ꞃoɥa",
        IPA: "/noˈʧaː/",
        partOfSpeech: "noun",
        engWord: "corpse"
      },
      {
        word: "ꞃoɥab",
        IPA: "/noˈʧaːb/",
        partOfSpeech: "verb",
        engWord: "borrow"
      },
      {
        word: "ꞃoɥaꝯemi",
        IPA: "/noˈʧaːʤeːmiː/",
        partOfSpeech: "verb",
        engWord: "moan",
        partOfSpeech2: "noun",
        engWord2: "moan"
      },
      {
        word: "ꞃoɥeꝷaɥe",
        IPA: "/noˈʧeʈaʧe/",
        partOfSpeech: "adjective",
        engWord: "smart"
      },
      {
        word: "ꞃoɥiaa",
        IPA: "/noˈʧiaa/",
        partOfSpeech: "noun",
        engWord: "theory"
      },
      {
        word: "ꞃoɥu",
        IPA: "/noˈʧu/",
        partOfSpeech: "noun",
        engWord: "limit"
      },
      {
        word: "ꞃoɥuꞃdeme",
        IPA: "/noˈʧundeme/",
        partOfSpeech: "noun",
        engWord: "wind"
      },
      {
        word: "ꞃodeb",
        IPA: "/noˈdeb/",
        partOfSpeech: "adjective",
        engWord: "patient"
      },
      {
        word: "ꞃoe",
        IPA: "/noˈe/",
        partOfSpeech: "verb",
        engWord: "knock"
      },
      {
        word: "ꞃoeguɥe",
        IPA: "/noˈeguʧe/",
        partOfSpeech: "verb",
        engWord: "starve"
      },
      {
        word: "ꞃogeɲabi",
        IPA: "/noˈgenjabiː/",
        partOfSpeech: "noun",
        engWord: "ritual"
      },
      {
        word: "ꞃogib",
        IPA: "/noˈgiːb/",
        partOfSpeech: "verb",
        engWord: "drop"
      },
      {
        word: "ꞃogukaꝷeb",
        IPA: "/noˈgukaʈeːb/",
        partOfSpeech: "adjective",
        engWord: "true"
      },
      {
        word: "ꞃoguꝷueb",
        IPA: "/noˈgutueb/",
        partOfSpeech: "verb",
        engWord: "insure"
      },
      {
        word: "ꞃohab",
        IPA: "/noˈhab/",
        partOfSpeech: "verb",
        engWord: "cry"
      },
      {
        word: "ꞃoꝯe",
        IPA: "/noˈʤe/",
        partOfSpeech: "adverb",
        engWord: "also"
      },
      {
        word: "ꞃoꝯe",
        IPA: "/noˈʤeː/",
        partOfSpeech: "noun",
        engWord: "snack"
      },
      {
        word: "ꞃoꝯeɥeꝷkab",
        IPA: "/noˈʤeʧetkab/",
        partOfSpeech: "noun",
        engWord: "paste"
      },
      {
        word: "ꞃoꝯeɥumi",
        IPA: "/noˈʤeʧuːmiː/",
        partOfSpeech: "noun",
        engWord: "sewer"
      },
      {
        word: "ꞃoꝯeeɥu",
        IPA: "/noˈʤeeʧu/",
        partOfSpeech: "verb",
        engWord: "twist"
      },
      {
        word: "ꞃoka",
        IPA: "/noˈka/",
        partOfSpeech: "noun",
        engWord: "fracture"
      },
      {
        word: "ꞃokub",
        IPA: "/noˈkuːb/",
        partOfSpeech: "noun",
        engWord: "flag"
      },
      {
        word: "ꞃomeɲabi",
        IPA: "/noˈmeɲabiː/",
        partOfSpeech: "noun",
        engWord: "nucleus"
      },
      {
        word: "ꞃoꞃebuab",
        IPA: "/noˈnebuab/",
        partOfSpeech: "noun",
        engWord: "brass"
      },
      {
        word: "ꞃoꞃu",
        IPA: "/noˈnuː/",
        partOfSpeech: "verb",
        engWord: "clap"
      },
      {
        word: "ꞃoɲa",
        IPA: "/noˈɲa/",
        partOfSpeech: "noun",
        engWord: "foot"
      },
      {
        word: "ꞃoɲeꝝeꝷeb",
        IPA: "/noˈɲeʔeʈeb/",
        partOfSpeech: "noun",
        engWord: "luxury"
      },
      {
        word: "ꞃoob",
        IPA: "/noˈob/",
        partOfSpeech: "noun",
        engWord: "embargo"
      },
      {
        word: "ꞃoogeɏa",
        IPA: "/noˈogeja/",
        partOfSpeech: "noun",
        engWord: "embryo"
      },
      {
        word: "ꞃora",
        IPA: "/noˈɽa/",
        partOfSpeech: "noun",
        engWord: "examination"
      },
      {
        word: "ꞃorab",
        IPA: "/noˈɽab/",
        partOfSpeech: "adverb",
        engWord: "formerly"
      },
      {
        word: "ꞃorabɏoi",
        IPA: "/noˈɽabjoi/",
        partOfSpeech: "adjective",
        engWord: "sad"
      },
      {
        word: "ꞃoraꝭaɥu",
        IPA: "/noˈɽaʂaʧuː/",
        partOfSpeech: "verb",
        engWord: "defy"
      },
      {
        word: "ꞃoꝷa",
        IPA: "/noˈʈa/",
        partOfSpeech: "noun",
        engWord: "animal"
      },
      {
        word: "ꞃoꝷaguꝷo",
        IPA: "/noˈʈaguʈo/",
        partOfSpeech: "noun",
        engWord: "spear"
      },
      {
        word: "ꞃoꝷauꝷe",
        IPA: "/noˈʈauːʈe/",
        partOfSpeech: "noun",
        engWord: "ensemble"
      },
      {
        word: "ꞃoꝷe",
        IPA: "/noˈʈe/",
        partOfSpeech: "noun",
        engWord: "napkin"
      },
      {
        word: "ꞃoꝷkaꞃuka",
        IPA: "/notˈkanuːka/",
        partOfSpeech: "verb",
        engWord: "bring"
      },
      {
        word: "ꞃoꝷo",
        IPA: "/noˈʈo/",
        partOfSpeech: "adjective",
        engWord: "outside"
      },
      {
        word: "ꞃoꝷub",
        IPA: "/noˈtub/",
        partOfSpeech: "noun",
        engWord: "wood, pole"
      },
      {
        word: "ꞃou",
        IPA: "/noˈuː/",
        partOfSpeech: "adjective",
        engWord: "silent"
      },
      {
        word: "ꞃoub",
        IPA: "/noˈub/",
        partOfSpeech: "noun",
        engWord: "tab"
      },
      {
        word: "ꞃoɏa",
        IPA: "/noˈja/",
        partOfSpeech: "noun",
        engWord: "enrollment"
      },
      {
        word: "ꞃoɏaɥiꝷe",
        IPA: "/noˈjaʧiʈe/",
        partOfSpeech: "adjective",
        engWord: "vigorous"
      },
      {
        word: "ꞃu",
        IPA: "/nuː/",
        partOfSpeech: "preposition",
        engWord: "of"
      },
      {
        word: "ꞃuab",
        IPA: "/nuːˈab/",
        partOfSpeech: "noun",
        engWord: "rate"
      },
      {
        word: "ꞃub",
        IPA: "/nuːb/",
        partOfSpeech: "verb",
        engWord: "support",
        partOfSpeech2: "noun",
        engWord2: "support"
      },
      {
        word: "ꞃubiꞃ",
        IPA: "/nuːˈbiːn/",
        partOfSpeech: "verb",
        engWord: "roast"
      },
      {
        word: "ꞃuɥa",
        IPA: "/nuːˈʧaː/",
        partOfSpeech: "pronoun",
        engWord: "plenty"
      },
      {
        word: "ꞃuɥe",
        IPA: "/nuːˈʧe/",
        partOfSpeech: "verb",
        engWord: "prove"
      },
      {
        word: "ꞃuɥukabib",
        IPA: "/nuːˈʧuːkaːbiːb/",
        partOfSpeech: "adjective",
        engWord: "fat",
        partOfSpeech2: "noun",
        engWord2: "fat"
      },
      {
        word: "ꞃudeꝯabi",
        IPA: "/nuːˈdeʤabiː/",
        partOfSpeech: "verb",
        engWord: "dodge"
      },
      {
        word: "ꞃuduꞃ",
        IPA: "/nuːˈduːn/",
        partOfSpeech: "verb",
        engWord: "use"
      },
      {
        word: "ꞃue",
        IPA: "/nuːˈe/",
        partOfSpeech: "adjective",
        engWord: "drunk (inebriated)"
      },
      {
        word: "ꞃugguɥeɥe",
        IPA: "/nuːgˈguːʧeʧe/",
        partOfSpeech: "adjective",
        engWord: "apparent"
      },
      {
        word: "ꞃugi",
        IPA: "/nuːˈgiː/",
        partOfSpeech: "verb",
        engWord: "cater"
      },
      {
        word: "ꞃugub",
        IPA: "/nuːˈguːb/",
        partOfSpeech: "adjective",
        engWord: "sound"
      },
      {
        word: "ꞃuhaɲeꝯeb",
        IPA: "/nuːˈhaɲeʤeb/",
        partOfSpeech: "noun",
        engWord: "wilderness"
      },
      {
        word: "ꞃuꝯe",
        IPA: "/nuːˈʤe/",
        partOfSpeech: "verb",
        engWord: "starve"
      },
      {
        word: "ꞃuꝯe",
        IPA: "/nuːˈʤeː/",
        partOfSpeech: "adjective",
        engWord: "sincere"
      },
      {
        word: "ꞃukaaꝯeỻ",
        IPA: "/nuːˈkaaʤeɭ/",
        partOfSpeech: "adjective",
        engWord: "hot, hot (attractive)"
      },
      {
        word: "ꞃukaɥuꝷeỻ",
        IPA: "/nuːˈkaʧuʈeɭ/",
        partOfSpeech: "noun",
        engWord: "date"
      },
      {
        word: "ꞃuỻ",
        IPA: "/nuːɭ/",
        partOfSpeech: "noun",
        engWord: "subject"
      },
      {
        word: "ꞃumeb",
        IPA: "/nuːˈmeb/",
        partOfSpeech: "noun",
        engWord: "predecessor"
      },
      {
        word: "ꞃumugegu",
        IPA: "/nuːˈmugegu/",
        partOfSpeech: "noun",
        engWord: "paradigm"
      },
      {
        word: "ꞃuꞃ",
        IPA: "/nuːn/",
        partOfSpeech: "verb",
        engWord: "navigate"
      },
      {
        word: "ꞃuo",
        IPA: "/nuːˈo/",
        partOfSpeech: "verb",
        engWord: "designate"
      },
      {
        word: "ꞃurakaɏab",
        IPA: "/nuːˈɽakajab/",
        partOfSpeech: "adjective",
        engWord: "immense"
      },
      {
        word: "ꞃuꝷahaɲa",
        IPA: "/nuːˈʈahaɲa/",
        partOfSpeech: "noun",
        engWord: "landlord"
      },
      {
        word: "ꞃuꝷeaꝯo",
        IPA: "/nuːˈʈeaʤo/",
        partOfSpeech: "verb",
        engWord: "testimfy"
      },
      {
        word: "ꞃuꝷeꝷaɥaỻ",
        IPA: "/nuːˈʈeʈaʧaːɭ/",
        partOfSpeech: "noun",
        engWord: "mistake, error"
      },
      {
        word: "ꞃuꝷuaaỻ",
        IPA: "/nuːˈtuaaɭ/",
        partOfSpeech: "adjective",
        engWord: "desperate"
      },
      {
        word: "ꞃuɏɏeb",
        IPA: "/nuːjˈjeb/",
        partOfSpeech: "noun",
        engWord: "parsley"
      },
      {
        word: "ɲa",
        IPA: "/ɲa/",
        partOfSpeech: "verb",
        engWord: "kiss",
        partOfSpeech2: "noun",
        engWord2: "kiss"
      },
      {
        word: "ɲa",
        IPA: "/ɲaː/",
        partOfSpeech: "verb",
        engWord: "cough",
        partOfSpeech2: "noun",
        engWord2: "cough"
      },
      {
        word: "ɲaꝝe",
        IPA: "/ɲaˈʔe/",
        partOfSpeech: "verb",
        engWord: "want"
      },
      {
        word: "ɲaꝝe",
        IPA: "/ɲaˈʔeː/",
        partOfSpeech: "noun",
        engWord: "arc"
      },
      {
        word: "ɲaa",
        IPA: "/ɲaˈaː/",
        partOfSpeech: "noun",
        engWord: "detention"
      },
      {
        word: "ɲabu",
        IPA: "/ɲaˈbu/",
        partOfSpeech: "noun",
        engWord: "greed"
      },
      {
        word: "ɲage",
        IPA: "/ɲaːˈge/",
        partOfSpeech: "noun",
        engWord: "complex"
      },
      {
        word: "ɲagi",
        IPA: "/ɲaˈgiː/",
        partOfSpeech: "adjective",
        engWord: "adjacent"
      },
      {
        word: "ɲaka",
        IPA: "/ɲaˈka/",
        partOfSpeech: "noun",
        engWord: "warrant"
      },
      {
        word: "ɲaka",
        IPA: "/ɲaˈkaː/",
        partOfSpeech: "adverb",
        engWord: "hence"
      },
      {
        word: "ɲame",
        IPA: "/ɲaˈme/",
        partOfSpeech: "noun",
        engWord: "drill"
      },
      {
        word: "ɲamu",
        IPA: "/ɲaˈmu/",
        partOfSpeech: "noun",
        engWord: "unit"
      },
      {
        word: "ɲaɲ",
        IPA: "/ɲaɲ/",
        partOfSpeech: "verb",
        engWord: "deal"
      },
      {
        word: "ɲaɲaɲ",
        IPA: "/ɲaˈɲaɲ/",
        partOfSpeech: "adverb",
        engWord: "hardly"
      },
      {
        word: "ɲaɲap",
        IPA: "/ɲanˈjap/",
        partOfSpeech: "noun",
        engWord: "novel"
      },
      {
        word: "ɲap",
        IPA: "/ɲap/",
        partOfSpeech: "verb",
        engWord: "fall"
      },
      {
        word: "ɲap",
        IPA: "/ɲaːp/",
        partOfSpeech: "noun",
        engWord: "condition"
      },
      {
        word: "ɲau",
        IPA: "/ɲaˈuː/",
        partOfSpeech: "noun",
        engWord: "shortage"
      },
      {
        word: "ɲe",
        IPA: "/ɲe/",
        partOfSpeech: "noun",
        engWord: "street"
      },
      {
        word: "ɲe",
        IPA: "/ɲeː/",
        partOfSpeech: "verb",
        engWord: "manage"
      },
      {
        word: "ɲeꝝe",
        IPA: "/ɲeːˈʔe/",
        partOfSpeech: "noun",
        engWord: "frog"
      },
      {
        word: "ɲeꝝeꝷ",
        IPA: "/ɲeˈʔet/",
        partOfSpeech: "noun",
        engWord: "scout"
      },
      {
        word: "ɲea",
        IPA: "/ɲeːˈa/",
        partOfSpeech: "noun",
        engWord: "fuel"
      },
      {
        word: "ɲeaꝷ",
        IPA: "/ɲeˈat/",
        partOfSpeech: "noun",
        engWord: "exile"
      },
      {
        word: "ɲebi",
        IPA: "/ɲeˈbiː/",
        partOfSpeech: "noun",
        engWord: "pornography"
      },
      {
        word: "ɲebi",
        IPA: "/ɲeːˈbiː/",
        partOfSpeech: "verb",
        engWord: "bolster"
      },
      {
        word: "ɲebu",
        IPA: "/ɲeːˈbu/",
        partOfSpeech: "noun",
        engWord: "design"
      },
      {
        word: "ɲeɥa",
        IPA: "/ɲeːˈʧaː/",
        partOfSpeech: "noun",
        engWord: "health"
      },
      {
        word: "ɲeɥu",
        IPA: "/ɲeˈʧu/",
        partOfSpeech: "verb",
        engWord: "spawn"
      },
      {
        word: "ɲede",
        IPA: "/ɲeːˈde/",
        partOfSpeech: "noun",
        engWord: "purpose"
      },
      {
        word: "ɲegeꝷ",
        IPA: "/ɲeːˈget/",
        partOfSpeech: "noun",
        engWord: "backup"
      },
      {
        word: "ɲegiꝷ",
        IPA: "/ɲeˈgiːt/",
        partOfSpeech: "verb",
        engWord: "promise"
      },
      {
        word: "ɲeguꝷ",
        IPA: "/ɲeːˈgut/",
        partOfSpeech: "verb",
        engWord: "ruin"
      },
      {
        word: "ɲeka",
        IPA: "/ɲeˈkaː/",
        partOfSpeech: "noun",
        engWord: "tire"
      },
      {
        word: "ɲemeꝷ",
        IPA: "/ɲeˈmet/",
        partOfSpeech: "verb",
        engWord: "spit"
      },
      {
        word: "ɲeꞃeꝷ",
        IPA: "/ɲeːˈnet/",
        partOfSpeech: "verb",
        engWord: "dismantle"
      },
      {
        word: "ɲeɲa",
        IPA: "/ɲeˈɲa/",
        partOfSpeech: "verb",
        engWord: "mumble"
      },
      {
        word: "ɲeɲaꝷ",
        IPA: "/ɲeˈɲat/",
        partOfSpeech: "verb",
        engWord: "yank"
      },
      {
        word: "ɲeɲaꝷ",
        IPA: "/ɲeːˈɲat/",
        partOfSpeech: "verb",
        engWord: "hurt"
      },
      {
        word: "ɲera",
        IPA: "/ɲeˈɽa/",
        partOfSpeech: "noun",
        engWord: "implant"
      },
      {
        word: "ɲeꝷ",
        IPA: "/ɲet/",
        partOfSpeech: "verb",
        engWord: "jerk"
      },
      {
        word: "ɲeꝷ",
        IPA: "/ɲeːt/",
        partOfSpeech: "noun",
        engWord: "scrap"
      },
      {
        word: "ɲeɏa",
        IPA: "/ɲeːˈja/",
        partOfSpeech: "noun",
        engWord: "hub"
      },
      {
        word: "ɲi",
        IPA: "/ɲi/",
        partOfSpeech: "noun",
        engWord: "accountant"
      },
      {
        word: "ɲi",
        IPA: "/ɲiː/",
        partOfSpeech: "noun",
        engWord: "sun"
      },
      {
        word: "ɲib",
        IPA: "/ɲiːb/",
        partOfSpeech: "verb",
        engWord: "doubt",
        partOfSpeech2: "noun",
        engWord2: "doubt"
      },
      {
        word: "ɲibi",
        IPA: "/ɲiˈbi/",
        partOfSpeech: "noun",
        engWord: "plate"
      },
      {
        word: "ɲiɥu",
        IPA: "/ɲiːˈʧuː/",
        partOfSpeech: "noun",
        engWord: "birth"
      },
      {
        word: "ɲie",
        IPA: "/ɲiːˈe/",
        partOfSpeech: "verb",
        engWord: "direct"
      },
      {
        word: "ɲiep",
        IPA: "/ɲiˈep/",
        partOfSpeech: "noun",
        engWord: "bargain"
      },
      {
        word: "ɲigip",
        IPA: "/ɲiˈgiːp/",
        partOfSpeech: "verb",
        engWord: "worship"
      },
      {
        word: "ɲiꝯe",
        IPA: "/ɲiːˈʤe/",
        partOfSpeech: "noun",
        engWord: "molecule"
      },
      {
        word: "ɲiki",
        IPA: "/ɲiːˈki/",
        partOfSpeech: "adjective",
        engWord: "guilty"
      },
      {
        word: "ɲiɲa",
        IPA: "/ɲiˈɲa/",
        partOfSpeech: "noun",
        engWord: "tub"
      },
      {
        word: "ɲip",
        IPA: "/ɲiːp/",
        partOfSpeech: "noun",
        engWord: "mandate"
      },
      {
        word: "ɲiꝷa",
        IPA: "/ɲiːˈʈa/",
        partOfSpeech: "verb",
        engWord: "compel"
      },
      {
        word: "ɲiꝷep",
        IPA: "/ɲiˈʈep/",
        partOfSpeech: "verb",
        engWord: "fly"
      },
      {
        word: "ɲo",
        IPA: "/ɲo/",
        partOfSpeech: "verb",
        engWord: "need"
      },
      {
        word: "ɲoꝝe",
        IPA: "/ɲoˈʔe/",
        partOfSpeech: "verb",
        engWord: "care"
      },
      {
        word: "ɲoa",
        IPA: "/ɲoˈa/",
        partOfSpeech: "noun",
        engWord: "impression"
      },
      {
        word: "ɲoa",
        IPA: "/ɲoˈaː/",
        partOfSpeech: "noun",
        engWord: "sneeze",
        partOfSpeech2: "noun",
        engWord2: "sneeze"
      },
      {
        word: "ɲoaɲ",
        IPA: "/ɲoˈaɲ/",
        partOfSpeech: "verb",
        engWord: "maintain"
      },
      {
        word: "ɲobi",
        IPA: "/ɲoˈbiː/",
        partOfSpeech: "noun",
        engWord: "compliment",
        partOfSpeech2: "verb",
        engWord2: "compliment"
      },
      {
        word: "ɲobu",
        IPA: "/ɲoˈbu/",
        partOfSpeech: "noun",
        engWord: "illusion"
      },
      {
        word: "ɲobu",
        IPA: "/ɲoˈbuː/",
        partOfSpeech: "verb",
        engWord: "row"
      },
      {
        word: "ɲobum",
        IPA: "/ɲoˈbum/",
        partOfSpeech: "noun",
        engWord: "scarf"
      },
      {
        word: "ɲobuꝷ",
        IPA: "/ɲoˈbut/",
        partOfSpeech: "adjective",
        engWord: "obscure"
      },
      {
        word: "ɲoɥeꝷ",
        IPA: "/ɲoˈʧet/",
        partOfSpeech: "verb",
        engWord: "scramble"
      },
      {
        word: "ɲoɥim",
        IPA: "/ɲoˈʧiːm/",
        partOfSpeech: "noun",
        engWord: "mold"
      },
      {
        word: "ɲode",
        IPA: "/ɲoˈde/",
        partOfSpeech: "noun",
        engWord: "middle class"
      },
      {
        word: "ɲodem",
        IPA: "/ɲoˈdem/",
        partOfSpeech: "verb",
        engWord: "mourn"
      },
      {
        word: "ɲodeɲ",
        IPA: "/ɲoˈdeɲ/",
        partOfSpeech: "adjective",
        engWord: "appropriate"
      },
      {
        word: "ɲodeꝷ",
        IPA: "/ɲoˈdet/",
        partOfSpeech: "noun",
        engWord: "shape"
      },
      {
        word: "ɲoe",
        IPA: "/ɲoˈe/",
        partOfSpeech: "verb",
        engWord: "pass"
      },
      {
        word: "ɲoeɲ",
        IPA: "/ɲoˈeɲ/",
        partOfSpeech: "noun",
        engWord: "nutrition"
      },
      {
        word: "ɲogguɲ",
        IPA: "/ɲogˈguːɲ/",
        partOfSpeech: "noun",
        engWord: "ditch"
      },
      {
        word: "ɲoguꝷ",
        IPA: "/ɲoˈgut/",
        partOfSpeech: "adjective",
        engWord: "foreign"
      },
      {
        word: "ɲoha",
        IPA: "/ɲoˈha/",
        partOfSpeech: "noun",
        engWord: "snow"
      },
      {
        word: "ɲoꝯe",
        IPA: "/ɲoˈʤe/",
        partOfSpeech: "noun",
        engWord: "eclipse"
      },
      {
        word: "ɲoꝯe",
        IPA: "/ɲoˈʤeː/",
        partOfSpeech: "noun",
        engWord: "con"
      },
      {
        word: "ɲoka",
        IPA: "/ɲoˈka/",
        partOfSpeech: "noun",
        engWord: "equipment"
      },
      {
        word: "ɲokam",
        IPA: "/ɲoˈkam/",
        partOfSpeech: "noun",
        engWord: "capital"
      },
      {
        word: "ɲoki",
        IPA: "/ɲoˈki/",
        partOfSpeech: "noun",
        engWord: "male"
      },
      {
        word: "ɲokuꝷ",
        IPA: "/ɲoˈkuːt/",
        partOfSpeech: "noun",
        engWord: "pork"
      },
      {
        word: "ɲom",
        IPA: "/ɲom/",
        partOfSpeech: "adverb",
        engWord: "still"
      },
      {
        word: "ɲomu",
        IPA: "/ɲoˈmu/",
        partOfSpeech: "adjective",
        engWord: "characteristic"
      },
      {
        word: "ɲoꞃe",
        IPA: "/ɲoˈne/",
        partOfSpeech: "verb",
        engWord: "sell"
      },
      {
        word: "ɲoꞃheꝷ",
        IPA: "/ɲonˈhet/",
        partOfSpeech: "noun",
        engWord: "giant"
      },
      {
        word: "ɲoꞃu",
        IPA: "/ɲoˈnu/",
        partOfSpeech: "noun",
        engWord: "staff"
      },
      {
        word: "ɲoɲ",
        IPA: "/ɲoɲ/",
        partOfSpeech: "verb",
        engWord: "help",
        partOfSpeech2: "noun",
        engWord2: "help"
      },
      {
        word: "ɲoɲaɲ",
        IPA: "/ɲoˈɲaɲ/",
        partOfSpeech: "noun",
        engWord: "medicine"
      },
      {
        word: "ɲoɲe",
        IPA: "/ɲoˈɲe/",
        partOfSpeech: "noun",
        engWord: "crime"
      },
      {
        word: "ɲoɲeꝷ",
        IPA: "/ɲoˈɲet/",
        partOfSpeech: "adjective",
        engWord: "chronic"
      },
      {
        word: "ɲoram",
        IPA: "/ɲoˈɽaːm/",
        partOfSpeech: "adverb",
        engWord: "merely"
      },
      {
        word: "ɲoꝷ",
        IPA: "/ɲot/",
        partOfSpeech: "noun",
        engWord: "record"
      },
      {
        word: "ɲoꝷa",
        IPA: "/ɲoˈʈa/",
        partOfSpeech: "noun",
        engWord: "soul"
      },
      {
        word: "ɲou",
        IPA: "/ɲoˈu/",
        partOfSpeech: "noun",
        engWord: "bruise"
      },
      {
        word: "ɲoɏa",
        IPA: "/ɲoˈja/",
        partOfSpeech: "verb",
        engWord: "extract"
      },
      {
        word: "ɲu",
        IPA: "/ɲu/",
        partOfSpeech: "noun",
        engWord: "use"
      },
      {
        word: "ɲu",
        IPA: "/ɲuː/",
        partOfSpeech: "verb",
        engWord: "push"
      },
      {
        word: "ɲuꝝe",
        IPA: "/ɲuːˈʔe/",
        partOfSpeech: "adjective",
        engWord: "pregnant"
      },
      {
        word: "ɲuꝝep",
        IPA: "/ɲuːˈʔep/",
        partOfSpeech: "noun",
        engWord: "scissors"
      },
      {
        word: "ɲuꝝo",
        IPA: "/ɲuːˈʔo/",
        partOfSpeech: "adverb",
        engWord: "basically"
      },
      {
        word: "ɲua",
        IPA: "/ɲuˈaː/",
        partOfSpeech: "noun",
        engWord: "wheel"
      },
      {
        word: "ɲua",
        IPA: "/ɲuːˈa/",
        partOfSpeech: "noun",
        engWord: "runway"
      },
      {
        word: "ɲuap",
        IPA: "/ɲuːˈaːp/",
        partOfSpeech: "verb",
        engWord: "offend"
      },
      {
        word: "ɲub",
        IPA: "/ɲub/",
        partOfSpeech: "adjective",
        engWord: "difficult"
      },
      {
        word: "ɲuba",
        IPA: "/ɲuːˈbaː/",
        partOfSpeech: "adjective",
        engWord: "fast"
      },
      {
        word: "ɲubi",
        IPA: "/ɲuˈbiː/",
        partOfSpeech: "noun",
        engWord: "basin"
      },
      {
        word: "ɲubu",
        IPA: "/ɲuːˈbuː/",
        partOfSpeech: "adjective",
        engWord: "rigorous"
      },
      {
        word: "ɲuɥe",
        IPA: "/ɲuˈʧe/",
        partOfSpeech: "noun",
        engWord: "option"
      },
      {
        word: "ɲuɥi",
        IPA: "/ɲuːˈʧi/",
        partOfSpeech: "noun",
        engWord: "fountain"
      },
      {
        word: "ɲuɥib",
        IPA: "/ɲuˈʧiːb/",
        partOfSpeech: "adjective",
        engWord: "internal"
      },
      {
        word: "ɲuɥu",
        IPA: "/ɲuˈʧuː/",
        partOfSpeech: "verb",
        engWord: "rotate"
      },
      {
        word: "ɲue",
        IPA: "/ɲuˈe/",
        partOfSpeech: "noun",
        engWord: "fly"
      },
      {
        word: "ɲue",
        IPA: "/ɲuːˈe/",
        partOfSpeech: "adjective",
        engWord: "various"
      },
      {
        word: "ɲuep",
        IPA: "/ɲuːˈep/",
        partOfSpeech: "verb",
        engWord: "govern"
      },
      {
        word: "ɲuha",
        IPA: "/ɲuˈha/",
        partOfSpeech: "verb",
        engWord: "wrestle"
      },
      {
        word: "ɲuꝯe",
        IPA: "/ɲuːˈʤe/",
        partOfSpeech: "noun",
        engWord: "segment"
      },
      {
        word: "ɲukap",
        IPA: "/ɲuːˈkap/",
        partOfSpeech: "verb",
        engWord: "multiply"
      },
      {
        word: "ɲuki",
        IPA: "/ɲuːˈki/",
        partOfSpeech: "verb",
        engWord: "proclaim"
      },
      {
        word: "ɲume",
        IPA: "/ɲuːˈme/",
        partOfSpeech: "noun",
        engWord: "dress"
      },
      {
        word: "ɲumeb",
        IPA: "/ɲuˈmeb/",
        partOfSpeech: "noun",
        engWord: "train"
      },
      {
        word: "ɲumu",
        IPA: "/ɲuˈmu/",
        partOfSpeech: "adjective",
        engWord: "tense"
      },
      {
        word: "ɲuꞃdep",
        IPA: "/ɲuːnˈdep/",
        partOfSpeech: "adjective",
        engWord: "deaf"
      },
      {
        word: "ɲuꞃe",
        IPA: "/ɲuˈne/",
        partOfSpeech: "verb",
        engWord: "place"
      },
      {
        word: "ɲuɲa",
        IPA: "/ɲuːˈɲa/",
        partOfSpeech: "verb",
        engWord: "graze"
      },
      {
        word: "ɲuɲe",
        IPA: "/ɲuˈɲe/",
        partOfSpeech: "adjective",
        engWord: "tangible"
      },
      {
        word: "ɲuɲo",
        IPA: "/ɲuˈɲo/",
        partOfSpeech: "noun",
        engWord: "cult"
      },
      {
        word: "ɲup",
        IPA: "/ɲuːp/",
        partOfSpeech: "noun",
        engWord: "gum"
      },
      {
        word: "ɲuꝭob",
        IPA: "/ɲuˈʂob/",
        partOfSpeech: "verb",
        engWord: "align"
      },
      {
        word: "ɲuꝷ",
        IPA: "/ɲuːt/",
        partOfSpeech: "verb",
        engWord: "treat"
      },
      {
        word: "ɲuꝷa",
        IPA: "/ɲuːˈʈa/",
        partOfSpeech: "noun",
        engWord: "architecture"
      },
      {
        word: "ɲuꝷab",
        IPA: "/ɲuˈʈab/",
        partOfSpeech: "verb",
        engWord: "creep"
      },
      {
        word: "ɲuꝷo",
        IPA: "/ɲuˈʈo/",
        partOfSpeech: "noun",
        engWord: "nose"
      },
      {
        word: "ɲuꝷo",
        IPA: "/ɲuːˈʈo/",
        partOfSpeech: "adjective",
        engWord: "loyal"
      },
      {
        word: "ɲuu",
        IPA: "/ɲuˈuː/",
        partOfSpeech: "noun",
        engWord: "one"
      },
      {
        word: "ɲuɏab",
        IPA: "/ɲuˈjab/",
        partOfSpeech: "noun",
        engWord: "claim"
      },
      {
        word: "o",
        IPA: "/o/",
        partOfSpeech: "noun",
        engWord: "day, light"
      },
      {
        word: "o",
        IPA: "/o/",
        partOfSpeech: "pronoun",
        engWord: "we"
      },
      {
        word: "o hi",
        IPA: "/o hiː/",
        partOfSpeech: "pronoun",
        engWord: "to us"
      },
      {
        word: "o pu",
        IPA: "/o puː/",
        partOfSpeech: "pronoun",
        engWord: "ours"
      },
      {
        word: "oꝝe",
        IPA: "/oˈʔe/",
        partOfSpeech: "noun",
        engWord: "policy"
      },
      {
        word: "oa",
        IPA: "/oˈa/",
        partOfSpeech: "noun",
        engWord: "past"
      },
      {
        word: "oa",
        IPA: "/oˈaː/",
        partOfSpeech: "verb",
        engWord: "reach"
      },
      {
        word: "oabi",
        IPA: "/oˈabi/",
        partOfSpeech: "noun",
        engWord: "turtle"
      },
      {
        word: "oabiꝯo",
        IPA: "/oˈabiːʤo/",
        partOfSpeech: "noun",
        engWord: "dump"
      },
      {
        word: "oaꝷ",
        IPA: "/oˈat/",
        partOfSpeech: "adjective",
        engWord: "vibrant"
      },
      {
        word: "obi",
        IPA: "/oˈbi/",
        partOfSpeech: "noun",
        engWord: "buttocks"
      },
      {
        word: "obi",
        IPA: "/oˈbiː/",
        partOfSpeech: "noun",
        engWord: "fur"
      },
      {
        word: "obii",
        IPA: "/oˈbii/",
        partOfSpeech: "noun",
        engWord: "thorn"
      },
      {
        word: "obu",
        IPA: "/oˈbu/",
        partOfSpeech: "noun",
        engWord: "fork"
      },
      {
        word: "obuꝷ",
        IPA: "/oˈbuːt/",
        partOfSpeech: "noun",
        engWord: "counter (flat, evelated surface)"
      },
      {
        word: "obɏo",
        IPA: "/oˈbjo/",
        partOfSpeech: "noun",
        engWord: "diameter"
      },
      {
        word: "oɥe",
        IPA: "/oˈʧe/",
        partOfSpeech: "adjective",
        engWord: "reasonable"
      },
      {
        word: "oɥeɥami",
        IPA: "/oˈʧeʧaːmiː/",
        partOfSpeech: "verb",
        engWord: "recover"
      },
      {
        word: "oɥed",
        IPA: "/oˈʧed/",
        partOfSpeech: "noun",
        engWord: "evil"
      },
      {
        word: "oɥeɲaɥu",
        IPA: "/oˈʧenjaʧuː/",
        partOfSpeech: "verb",
        engWord: "embarrass"
      },
      {
        word: "oɥi",
        IPA: "/oˈʧi/",
        partOfSpeech: "verb",
        engWord: "neglect"
      },
      {
        word: "oɥi",
        IPA: "/oˈʧiː/",
        partOfSpeech: "verb",
        engWord: "steal"
      },
      {
        word: "oɥiꝯa",
        IPA: "/oˈʧiʤa/",
        partOfSpeech: "verb",
        engWord: "rally"
      },
      {
        word: "oɥiꝷ",
        IPA: "/oˈʧit/",
        partOfSpeech: "noun",
        engWord: "crawl"
      },
      {
        word: "oɥu",
        IPA: "/oˈʧu/",
        partOfSpeech: "adjective",
        engWord: "exclusive"
      },
      {
        word: "oɥu",
        IPA: "/oˈʧuː/",
        partOfSpeech: "noun",
        engWord: "speed"
      },
      {
        word: "oɥuku",
        IPA: "/oˈʧuːkuː/",
        partOfSpeech: "verb",
        engWord: "congregate"
      },
      {
        word: "od",
        IPA: "/od/",
        partOfSpeech: "preposition",
        engWord: "including"
      },
      {
        word: "ode",
        IPA: "/oˈde/",
        partOfSpeech: "conjunction",
        engWord: "if"
      },
      {
        word: "oe",
        IPA: "/oˈe/",
        partOfSpeech: "verb",
        engWord: "read"
      },
      {
        word: "oge",
        IPA: "/oˈge/",
        partOfSpeech: "verb",
        engWord: "remind"
      },
      {
        word: "oged",
        IPA: "/oˈged/",
        partOfSpeech: "verb",
        engWord: "discriminate"
      },
      {
        word: "ogga",
        IPA: "/ogˈgaː/",
        partOfSpeech: "noun",
        engWord: "bulk"
      },
      {
        word: "oggade",
        IPA: "/ogˈgaːde/",
        partOfSpeech: "verb",
        engWord: "negotiate"
      },
      {
        word: "ogi",
        IPA: "/oˈgiː/",
        partOfSpeech: "noun",
        engWord: "expert"
      },
      {
        word: "ogud",
        IPA: "/oˈgud/",
        partOfSpeech: "noun",
        engWord: "stripe"
      },
      {
        word: "oha",
        IPA: "/oˈha/",
        partOfSpeech: "verb",
        engWord: "trail"
      },
      {
        word: "ohad",
        IPA: "/oˈhad/",
        partOfSpeech: "noun",
        engWord: "siren"
      },
      {
        word: "oꝯa",
        IPA: "/oˈʤa/",
        partOfSpeech: "verb",
        engWord: "serve"
      },
      {
        word: "oꝯe",
        IPA: "/oˈʤe/",
        partOfSpeech: "noun",
        engWord: "order"
      },
      {
        word: "oꝯed",
        IPA: "/oˈʤed/",
        partOfSpeech: "adjective",
        engWord: "reluctant"
      },
      {
        word: "oꝯemu",
        IPA: "/oˈʤemu/",
        partOfSpeech: "verb",
        engWord: "vibrate"
      },
      {
        word: "oka",
        IPA: "/oˈka/",
        partOfSpeech: "noun",
        engWord: "effort"
      },
      {
        word: "oka",
        IPA: "/oˈkaː/",
        partOfSpeech: "verb",
        engWord: "bow"
      },
      {
        word: "oki",
        IPA: "/oˈki/",
        partOfSpeech: "noun",
        engWord: "coal"
      },
      {
        word: "oku",
        IPA: "/oˈkuː/",
        partOfSpeech: "noun",
        engWord: "edge"
      },
      {
        word: "ome",
        IPA: "/oˈme/",
        partOfSpeech: "determiner",
        engWord: "few"
      },
      {
        word: "omu",
        IPA: "/oˈmu/",
        partOfSpeech: "number",
        engWord: "zero"
      },
      {
        word: "omu",
        IPA: "/oˈmuː/",
        partOfSpeech: "verb",
        engWord: "defend"
      },
      {
        word: "omugege",
        IPA: "/oˈmugege/",
        partOfSpeech: "preposition",
        engWord: "till"
      },
      {
        word: "oꞃe",
        IPA: "/oˈne/",
        partOfSpeech: "noun",
        engWord: "others"
      },
      {
        word: "oꞃu",
        IPA: "/oˈnu/",
        partOfSpeech: "verb",
        engWord: "crush"
      },
      {
        word: "oꞃu",
        IPA: "/oˈnuː/",
        partOfSpeech: "verb",
        engWord: "convict"
      },
      {
        word: "oꞃuꝝode",
        IPA: "/oˈnuːʔode/",
        partOfSpeech: "verb",
        engWord: "probe"
      },
      {
        word: "oꞃudeꝷa",
        IPA: "/oˈnuːdeʈa/",
        partOfSpeech: "verb",
        engWord: "long"
      },
      {
        word: "oɲa",
        IPA: "/onˈja/",
        partOfSpeech: "verb",
        engWord: "heal"
      },
      {
        word: "oɲa",
        IPA: "/oˈɲa/",
        partOfSpeech: "verb",
        engWord: "ring"
      },
      {
        word: "oɲaꝝe",
        IPA: "/oˈɲaʔe/",
        partOfSpeech: "adjective",
        engWord: "formal"
      },
      {
        word: "oɲaabi",
        IPA: "/oˈɲaabiː/",
        partOfSpeech: "adjective",
        engWord: "coherent"
      },
      {
        word: "oɲad",
        IPA: "/onˈjaːd/",
        partOfSpeech: "noun",
        engWord: "bay"
      },
      {
        word: "oɲad",
        IPA: "/oˈɲad/",
        partOfSpeech: "verb",
        engWord: "commission"
      },
      {
        word: "oɲami",
        IPA: "/onˈjaːmiː/",
        partOfSpeech: "verb",
        engWord: "refine"
      },
      {
        word: "oɲe",
        IPA: "/oˈɲe/",
        partOfSpeech: "preposition",
        engWord: "into"
      },
      {
        word: "oɲebu",
        IPA: "/oˈɲebu/",
        partOfSpeech: "noun",
        engWord: "orchard"
      },
      {
        word: "oɲo",
        IPA: "/oˈɲo/",
        partOfSpeech: "adverb",
        engWord: "aside"
      },
      {
        word: "ora",
        IPA: "/oˈɽa/",
        partOfSpeech: "noun",
        engWord: "journey"
      },
      {
        word: "ora",
        IPA: "/oˈɽaː/",
        partOfSpeech: "verb",
        engWord: "listen"
      },
      {
        word: "oꝭa",
        IPA: "/oˈʂa/",
        partOfSpeech: "verb",
        engWord: "leap"
      },
      {
        word: "oꝭubuɥ",
        IPA: "/oˈʂuːbuːʧ/",
        partOfSpeech: "noun",
        engWord: "mansion"
      },
      {
        word: "oꝷ",
        IPA: "/ot/",
        partOfSpeech: "noun",
        engWord: "star"
      },
      {
        word: "oꝷ",
        IPA: "/oʈ/",
        partOfSpeech: "pronoun",
        engWord: "us"
      },
      {
        word: "oꝷa",
        IPA: "/oˈʈa/",
        partOfSpeech: "adverb",
        engWord: "best"
      },
      {
        word: "oꝷakage",
        IPA: "/oˈʈakage/",
        partOfSpeech: "verb",
        engWord: "reply"
      },
      {
        word: "oꝷaꝷeɲa",
        IPA: "/oˈʈaʈeɲa/",
        partOfSpeech: "noun",
        engWord: "mob"
      },
      {
        word: "oꝷe",
        IPA: "/oˈʈeː/",
        partOfSpeech: "noun",
        engWord: "region"
      },
      {
        word: "oꝷu",
        IPA: "/oˈtu/",
        partOfSpeech: "noun",
        engWord: "awe"
      },
      {
        word: "ou",
        IPA: "/oˈu/",
        partOfSpeech: "noun",
        engWord: "curve"
      },
      {
        word: "ou",
        IPA: "/oˈuː/",
        partOfSpeech: "noun",
        engWord: "showcase"
      },
      {
        word: "oɏa",
        IPA: "/oˈja/",
        partOfSpeech: "noun",
        engWord: "praise"
      },
      {
        word: "oɏaɥira",
        IPA: "/oˈjaʧiːɽa/",
        partOfSpeech: "adjective",
        engWord: "particular"
      },
      {
        word: "pa",
        IPA: "/pa/",
        partOfSpeech: "verb",
        engWord: "include"
      },
      {
        word: "pa",
        IPA: "/paː/",
        partOfSpeech: "noun",
        engWord: "apple"
      },
      {
        word: "paꝝe",
        IPA: "/paˈʔe/",
        partOfSpeech: "verb",
        engWord: "analyse"
      },
      {
        word: "paꝝeꝯ",
        IPA: "/paˈʔeʤ/",
        partOfSpeech: "noun",
        engWord: "berry"
      },
      {
        word: "paꝝek",
        IPA: "/paˈʔek/",
        partOfSpeech: "noun",
        engWord: "cathedral"
      },
      {
        word: "paa",
        IPA: "/paˈa/",
        partOfSpeech: "verb",
        engWord: "terminate"
      },
      {
        word: "paa",
        IPA: "/paːˈa/",
        partOfSpeech: "preposition",
        engWord: "about"
      },
      {
        word: "pabi",
        IPA: "/paːˈbiː/",
        partOfSpeech: "noun",
        engWord: "glare"
      },
      {
        word: "pabu",
        IPA: "/paːˈbu/",
        partOfSpeech: "verb",
        engWord: "confess"
      },
      {
        word: "pabuk",
        IPA: "/paˈbuk/",
        partOfSpeech: "noun",
        engWord: "outbreak"
      },
      {
        word: "paɥ",
        IPA: "/paʧ/",
        partOfSpeech: "adverb",
        engWord: "especially"
      },
      {
        word: "paɥe",
        IPA: "/paˈʧe/",
        partOfSpeech: "noun",
        engWord: "coast"
      },
      {
        word: "paɥiɥ",
        IPA: "/paˈʧiʧ/",
        partOfSpeech: "verb",
        engWord: "sentence"
      },
      {
        word: "paɥuk",
        IPA: "/paːˈʧuːk/",
        partOfSpeech: "adjective",
        engWord: "definite"
      },
      {
        word: "pade",
        IPA: "/paˈde/",
        partOfSpeech: "verb",
        engWord: "defecate"
      },
      {
        word: "pade",
        IPA: "/paːˈde/",
        partOfSpeech: "preposition",
        engWord: "plus"
      },
      {
        word: "page",
        IPA: "/paˈge/",
        partOfSpeech: "verb",
        engWord: "shrink"
      },
      {
        word: "pagguɥ",
        IPA: "/pagˈguːʧ/",
        partOfSpeech: "noun",
        engWord: "scar"
      },
      {
        word: "pagiɥ",
        IPA: "/paˈgiːʧ/",
        partOfSpeech: "verb",
        engWord: "compensate"
      },
      {
        word: "paꝯ",
        IPA: "/paʤ/",
        partOfSpeech: "noun",
        engWord: "hormone"
      },
      {
        word: "paꝯe",
        IPA: "/paˈʤe/",
        partOfSpeech: "noun",
        engWord: "surface"
      },
      {
        word: "paꝯeɥ",
        IPA: "/paˈʤeʧ/",
        partOfSpeech: "verb",
        engWord: "giggle"
      },
      {
        word: "pak",
        IPA: "/pak/",
        partOfSpeech: "adjective",
        engWord: "important"
      },
      {
        word: "pak",
        IPA: "/paːk/",
        partOfSpeech: "noun",
        engWord: "concern"
      },
      {
        word: "paka",
        IPA: "/paˈka/",
        partOfSpeech: "number",
        engWord: "eight"
      },
      {
        word: "pame",
        IPA: "/paˈme/",
        partOfSpeech: "noun",
        engWord: "dust"
      },
      {
        word: "pameɥ",
        IPA: "/paˈmeʧ/",
        partOfSpeech: "verb",
        engWord: "correlate"
      },
      {
        word: "pamuɥ",
        IPA: "/paːˈmuʧ/",
        partOfSpeech: "verb",
        engWord: "saturate"
      },
      {
        word: "paꞃe",
        IPA: "/paˈne/",
        partOfSpeech: "noun",
        engWord: "opposite"
      },
      {
        word: "paꞃeꝭ",
        IPA: "/paˈneʂ/",
        partOfSpeech: "adjective",
        engWord: "upset"
      },
      {
        word: "paɲa",
        IPA: "/paˈɲa/",
        partOfSpeech: "verb",
        engWord: "affect"
      },
      {
        word: "paɲe",
        IPA: "/paˈɲe/",
        partOfSpeech: "verb",
        engWord: "doom"
      },
      {
        word: "paɲe",
        IPA: "/paˈɲeː/",
        partOfSpeech: "noun",
        engWord: "carpet"
      },
      {
        word: "paɲe",
        IPA: "/paːˈɲe/",
        partOfSpeech: "verb",
        engWord: "climb"
      },
      {
        word: "paɲo",
        IPA: "/paˈɲo/",
        partOfSpeech: "verb",
        engWord: "diagnose"
      },
      {
        word: "pao",
        IPA: "/paˈo/",
        partOfSpeech: "noun",
        engWord: "vintage"
      },
      {
        word: "paok",
        IPA: "/paːˈok/",
        partOfSpeech: "verb",
        engWord: "dominate"
      },
      {
        word: "para",
        IPA: "/paˈɽaː/",
        partOfSpeech: "noun",
        engWord: "father"
      },
      {
        word: "paꝭ",
        IPA: "/paʂ/",
        partOfSpeech: "noun",
        engWord: "cloth"
      },
      {
        word: "paꝷa",
        IPA: "/paˈʈa/",
        partOfSpeech: "noun",
        engWord: "sewage"
      },
      {
        word: "paꝷaɥ",
        IPA: "/paˈʈaʧ/",
        partOfSpeech: "noun",
        engWord: "terminal"
      },
      {
        word: "paꝷuꝭ",
        IPA: "/paˈtuʂ/",
        partOfSpeech: "noun",
        engWord: "lizard"
      },
      {
        word: "pe",
        IPA: "/pe/",
        partOfSpeech: "pronoun",
        engWord: "they"
      },
      {
        word: "pe",
        IPA: "/pe/",
        partOfSpeech: "verb",
        engWord: "try"
      },
      {
        word: "pe",
        IPA: "/peː/",
        partOfSpeech: "noun",
        engWord: "queen"
      },
      {
        word: "pe hi",
        IPA: "/pe hiː/",
        partOfSpeech: "pronoun",
        engWord: "to them"
      },
      {
        word: "pe pu",
        IPA: "/pe puː/",
        partOfSpeech: "pronoun",
        engWord: "theirs"
      },
      {
        word: "peꝝ",
        IPA: "/peʔ/",
        partOfSpeech: "verb",
        engWord: "discriminate"
      },
      {
        word: "peꝝ",
        IPA: "/peːʔ/",
        partOfSpeech: "verb",
        engWord: "answer"
      },
      {
        word: "peꝝe",
        IPA: "/peːˈʔe/",
        partOfSpeech: "adjective",
        engWord: "superb"
      },
      {
        word: "peꝝeꝝ",
        IPA: "/peːˈʔeʔ/",
        partOfSpeech: "noun",
        engWord: "trader"
      },
      {
        word: "peꝝeɥ",
        IPA: "/peˈʔeʧ/",
        partOfSpeech: "noun",
        engWord: "rank (military)"
      },
      {
        word: "peꝝo",
        IPA: "/peːˈʔo/",
        partOfSpeech: "noun",
        engWord: "comrade"
      },
      {
        word: "peba",
        IPA: "/peˈbaː/",
        partOfSpeech: "verb",
        engWord: "describe"
      },
      {
        word: "pebiɥ",
        IPA: "/peˈbiʧ/",
        partOfSpeech: "verb",
        engWord: "prepare"
      },
      {
        word: "pebu",
        IPA: "/peːˈbuː/",
        partOfSpeech: "noun",
        engWord: "mattress"
      },
      {
        word: "peɥ",
        IPA: "/peʧ/",
        partOfSpeech: "verb",
        engWord: "practise"
      },
      {
        word: "peɥ",
        IPA: "/peːʧ/",
        partOfSpeech: "noun",
        engWord: "ear"
      },
      {
        word: "peɥe",
        IPA: "/peːˈʧe/",
        partOfSpeech: "noun",
        engWord: "patient"
      },
      {
        word: "peɥu",
        IPA: "/peˈʧuː/",
        partOfSpeech: "verb",
        engWord: "remark"
      },
      {
        word: "peɥu",
        IPA: "/peːˈʧu/",
        partOfSpeech: "adjective",
        engWord: "buxom"
      },
      {
        word: "peduɥ",
        IPA: "/peˈduːʧ/",
        partOfSpeech: "adverb",
        engWord: "tomorrow"
      },
      {
        word: "pee",
        IPA: "/peˈe/",
        partOfSpeech: "noun",
        engWord: "section"
      },
      {
        word: "pee",
        IPA: "/peːˈe/",
        partOfSpeech: "verb",
        engWord: "simmer"
      },
      {
        word: "pege",
        IPA: "/peˈge/",
        partOfSpeech: "verb",
        engWord: "state"
      },
      {
        word: "pegeɥ",
        IPA: "/peˈgeʧ/",
        partOfSpeech: "noun",
        engWord: "bark"
      },
      {
        word: "pegeɥ",
        IPA: "/peːˈgeʧ/",
        partOfSpeech: "noun",
        engWord: "chalk"
      },
      {
        word: "peggu",
        IPA: "/pegˈguː/",
        partOfSpeech: "noun",
        engWord: "girl"
      },
      {
        word: "pegi",
        IPA: "/peˈgiː/",
        partOfSpeech: "noun",
        engWord: "cigar"
      },
      {
        word: "peha",
        IPA: "/peˈha/",
        partOfSpeech: "noun",
        engWord: "bee"
      },
      {
        word: "pei",
        IPA: "/peːˈiː/",
        partOfSpeech: "noun",
        engWord: "flaw"
      },
      {
        word: "peꝯe",
        IPA: "/peˈʤe/",
        partOfSpeech: "noun",
        engWord: "success"
      },
      {
        word: "peꝯeꝝ",
        IPA: "/peːˈʤeːʔ/",
        partOfSpeech: "adjective",
        engWord: "automatic"
      },
      {
        word: "peꝯeɥ",
        IPA: "/peːˈʤeʧ/",
        partOfSpeech: "adjective",
        engWord: "open"
      },
      {
        word: "peka",
        IPA: "/peˈka/",
        partOfSpeech: "noun",
        engWord: "palette"
      },
      {
        word: "peka",
        IPA: "/peːˈkaː/",
        partOfSpeech: "noun",
        engWord: "pupil"
      },
      {
        word: "pekiɥ",
        IPA: "/peːˈkiʧ/",
        partOfSpeech: "verb",
        engWord: "inflict"
      },
      {
        word: "pemi",
        IPA: "/peˈmi/",
        partOfSpeech: "noun",
        engWord: "race (ethnicity)"
      },
      {
        word: "peꞃu",
        IPA: "/peːˈnuː/",
        partOfSpeech: "verb",
        engWord: "fashion"
      },
      {
        word: "peɲa",
        IPA: "/peːˈɲa/",
        partOfSpeech: "verb",
        engWord: "control"
      },
      {
        word: "peɲeɥ",
        IPA: "/peˈɲeʧ/",
        partOfSpeech: "verb",
        engWord: "retire"
      },
      {
        word: "pera",
        IPA: "/peːˈɽaː/",
        partOfSpeech: "noun",
        engWord: "sugar"
      },
      {
        word: "peꝷaꝝ",
        IPA: "/peˈʈaʔ/",
        partOfSpeech: "noun",
        engWord: "pavement"
      },
      {
        word: "peꝷo",
        IPA: "/peˈʈo/",
        partOfSpeech: "noun",
        engWord: "sorrow"
      },
      {
        word: "peu",
        IPA: "/peˈuː/",
        partOfSpeech: "noun",
        engWord: "gun"
      },
      {
        word: "peu",
        IPA: "/peːˈuː/",
        partOfSpeech: "noun",
        engWord: "guerrilla"
      },
      {
        word: "pi",
        IPA: "/pi/",
        partOfSpeech: "noun",
        engWord: "fire"
      },
      {
        word: "pi",
        IPA: "/piː/",
        partOfSpeech: "adjective",
        engWord: "last (previous)"
      },
      {
        word: "piꝝe",
        IPA: "/piːˈʔe/",
        partOfSpeech: "verb",
        engWord: "crouch"
      },
      {
        word: "pia",
        IPA: "/piːˈa/",
        partOfSpeech: "noun",
        engWord: "slab"
      },
      {
        word: "piba",
        IPA: "/piːˈbaː/",
        partOfSpeech: "verb",
        engWord: "sit"
      },
      {
        word: "pibi",
        IPA: "/piːˈbiː/",
        partOfSpeech: "noun",
        engWord: "emphasis"
      },
      {
        word: "pibuɥ",
        IPA: "/piːˈbuːʧ/",
        partOfSpeech: "noun",
        engWord: "siege"
      },
      {
        word: "piɥ",
        IPA: "/piːʧ/",
        partOfSpeech: "pronoun",
        engWord: "who"
      },
      {
        word: "piɥa",
        IPA: "/piˈʧaː/",
        partOfSpeech: "verb",
        engWord: "sip"
      },
      {
        word: "piɥu",
        IPA: "/piˈʧuː/",
        partOfSpeech: "noun",
        engWord: "cellar"
      },
      {
        word: "piɥu",
        IPA: "/piːˈʧu/",
        partOfSpeech: "verb",
        engWord: "grasp"
      },
      {
        word: "piɥuɥ",
        IPA: "/piˈʧuʧ/",
        partOfSpeech: "noun",
        engWord: "roster"
      },
      {
        word: "pideɥ",
        IPA: "/piˈdeʧ/",
        partOfSpeech: "noun",
        engWord: "piano"
      },
      {
        word: "pie",
        IPA: "/piːˈe/",
        partOfSpeech: "verb",
        engWord: "weep"
      },
      {
        word: "pige",
        IPA: "/piːˈge/",
        partOfSpeech: "noun",
        engWord: "ethic"
      },
      {
        word: "piꝯe",
        IPA: "/piˈʤe/",
        partOfSpeech: "verb",
        engWord: "wait"
      },
      {
        word: "piꝯe",
        IPA: "/piːˈʤe/",
        partOfSpeech: "noun",
        engWord: "comb"
      },
      {
        word: "piꝯek",
        IPA: "/piːˈʤek/",
        partOfSpeech: "verb",
        engWord: "sign"
      },
      {
        word: "pik",
        IPA: "/piːk/",
        partOfSpeech: "noun",
        engWord: "slope"
      },
      {
        word: "pika",
        IPA: "/piːˈka/",
        partOfSpeech: "noun",
        engWord: "verse"
      },
      {
        word: "pikak",
        IPA: "/piˈkak/",
        partOfSpeech: "noun",
        engWord: "prospect"
      },
      {
        word: "pikak",
        IPA: "/piːˈkak/",
        partOfSpeech: "adjective",
        engWord: "civilized"
      },
      {
        word: "pikak",
        IPA: "/piːˈkaːk/",
        partOfSpeech: "verb",
        engWord: "generate"
      },
      {
        word: "pimu",
        IPA: "/piːˈmu/",
        partOfSpeech: "noun",
        engWord: "dice"
      },
      {
        word: "pimuk",
        IPA: "/piːˈmuk/",
        partOfSpeech: "verb",
        engWord: "curl"
      },
      {
        word: "piꞃek",
        IPA: "/piːˈnek/",
        partOfSpeech: "noun",
        engWord: "memoir"
      },
      {
        word: "piɲak",
        IPA: "/piːˈɲak/",
        partOfSpeech: "noun",
        engWord: "magnitude"
      },
      {
        word: "piraɥ",
        IPA: "/piːˈɽaːʧ/",
        partOfSpeech: "noun",
        engWord: "ice"
      },
      {
        word: "piꝷka",
        IPA: "/piːtˈka/",
        partOfSpeech: "noun",
        engWord: "bead"
      },
      {
        word: "po",
        IPA: "/po/",
        partOfSpeech: "adjective",
        engWord: "big"
      },
      {
        word: "po",
        IPA: "/po/",
        partOfSpeech: "pronoun",
        engWord: "them"
      },
      {
        word: "poꝝ",
        IPA: "/poʔ/",
        partOfSpeech: "verb",
        engWord: "cook (prepare food)"
      },
      {
        word: "poꝝe",
        IPA: "/poˈʔe/",
        partOfSpeech: "noun",
        engWord: "pressure"
      },
      {
        word: "poꝝeꝝ",
        IPA: "/poˈʔeːʔ/",
        partOfSpeech: "number",
        engWord: "four"
      },
      {
        word: "poꝝeɥ",
        IPA: "/poˈʔeʧ/",
        partOfSpeech: "verb",
        engWord: "operate"
      },
      {
        word: "poꝝeꝯ",
        IPA: "/poˈʔeʤ/",
        partOfSpeech: "verb",
        engWord: "scrub"
      },
      {
        word: "poa",
        IPA: "/poˈa/",
        partOfSpeech: "noun",
        engWord: "dealer"
      },
      {
        word: "poa",
        IPA: "/poˈaː/",
        partOfSpeech: "noun",
        engWord: "ink"
      },
      {
        word: "poaꝝ",
        IPA: "/poˈaːʔ/",
        partOfSpeech: "noun",
        engWord: "owl"
      },
      {
        word: "poaꝭ",
        IPA: "/poˈaʂ/",
        partOfSpeech: "adjective",
        engWord: "fabulous"
      },
      {
        word: "pobi",
        IPA: "/poˈbi/",
        partOfSpeech: "noun",
        engWord: "schedule"
      },
      {
        word: "pobi",
        IPA: "/poˈbiː/",
        partOfSpeech: "noun",
        engWord: "ray"
      },
      {
        word: "pobiꝯ",
        IPA: "/poˈbiʤ/",
        partOfSpeech: "adjective",
        engWord: "relevant"
      },
      {
        word: "pobiꝯ",
        IPA: "/poˈbiːʤ/",
        partOfSpeech: "noun",
        engWord: "insight"
      },
      {
        word: "pobu",
        IPA: "/poˈbu/",
        partOfSpeech: "noun",
        engWord: "crowd"
      },
      {
        word: "poɥ",
        IPA: "/poʧ/",
        partOfSpeech: "noun",
        engWord: "season"
      },
      {
        word: "poɥa",
        IPA: "/poˈʧaː/",
        partOfSpeech: "verb",
        engWord: "loom"
      },
      {
        word: "poɥaꝭ",
        IPA: "/poˈʧaːʂ/",
        partOfSpeech: "verb",
        engWord: "nominate"
      },
      {
        word: "poɥeꝯ",
        IPA: "/poˈʧeʤ/",
        partOfSpeech: "verb",
        engWord: "book"
      },
      {
        word: "poɥu",
        IPA: "/poˈʧuː/",
        partOfSpeech: "noun",
        engWord: "cushion"
      },
      {
        word: "poɥud",
        IPA: "/poˈʧud/",
        partOfSpeech: "verb",
        engWord: "violate"
      },
      {
        word: "pod",
        IPA: "/pod/",
        partOfSpeech: "noun",
        engWord: "figure"
      },
      {
        word: "pode",
        IPA: "/poˈde/",
        partOfSpeech: "verb",
        engWord: "interact"
      },
      {
        word: "podeꝝ",
        IPA: "/poˈdeʔ/",
        partOfSpeech: "noun",
        engWord: "parent"
      },
      {
        word: "podeꝭ",
        IPA: "/poˈdeʂ/",
        partOfSpeech: "verb",
        engWord: "impair"
      },
      {
        word: "podu",
        IPA: "/poˈduː/",
        partOfSpeech: "verb",
        engWord: "shatter"
      },
      {
        word: "poe",
        IPA: "/poˈe/",
        partOfSpeech: "noun",
        engWord: "vest"
      },
      {
        word: "poe",
        IPA: "/poˈeː/",
        partOfSpeech: "adjective",
        engWord: "stubborn"
      },
      {
        word: "poge",
        IPA: "/poˈge/",
        partOfSpeech: "noun",
        engWord: "partner"
      },
      {
        word: "pogeꝯ",
        IPA: "/poˈgeʤ/",
        partOfSpeech: "verb",
        engWord: "show"
      },
      {
        word: "pogu",
        IPA: "/poˈgu/",
        partOfSpeech: "noun",
        engWord: "pencil"
      },
      {
        word: "pogu",
        IPA: "/poˈguː/",
        partOfSpeech: "noun",
        engWord: "wit"
      },
      {
        word: "poguꝝ",
        IPA: "/poˈguʔ/",
        partOfSpeech: "noun",
        engWord: "hobby"
      },
      {
        word: "poguɥ",
        IPA: "/poˈguʧ/",
        partOfSpeech: "adjective",
        engWord: "yellow"
      },
      {
        word: "poguꝯ",
        IPA: "/poˈguːʤ/",
        partOfSpeech: "noun",
        engWord: "column"
      },
      {
        word: "pohad",
        IPA: "/poˈhad/",
        partOfSpeech: "noun",
        engWord: "horn"
      },
      {
        word: "poꝯ",
        IPA: "/poʤ/",
        partOfSpeech: "verb",
        engWord: "love",
        partOfSpeech2: "noun",
        engWord2: "love"
      },
      {
        word: "poꝯa",
        IPA: "/poˈʤa/",
        partOfSpeech: "verb",
        engWord: "thrill"
      },
      {
        word: "poꝯaꝭ",
        IPA: "/poˈʤaʂ/",
        partOfSpeech: "noun",
        engWord: "reason"
      },
      {
        word: "poꝯe",
        IPA: "/poˈʤe/",
        partOfSpeech: "adjective",
        engWord: "flexible"
      },
      {
        word: "poꝯeꝯ",
        IPA: "/poˈʤeʤ/",
        partOfSpeech: "noun",
        engWord: "cream"
      },
      {
        word: "poꝯeꝭ",
        IPA: "/poˈʤeʂ/",
        partOfSpeech: "noun",
        engWord: "needle"
      },
      {
        word: "poꝯeꝭ",
        IPA: "/poˈʤeːʂ/",
        partOfSpeech: "verb",
        engWord: "confirm"
      },
      {
        word: "poꝯoꝝ",
        IPA: "/poˈʤoʔ/",
        partOfSpeech: "noun",
        engWord: "lesson"
      },
      {
        word: "poꝯoꝯ",
        IPA: "/poˈʤoʤ/",
        partOfSpeech: "verb",
        engWord: "monitor"
      },
      {
        word: "poka",
        IPA: "/poˈka/",
        partOfSpeech: "verb",
        engWord: "matter"
      },
      {
        word: "poka",
        IPA: "/poˈkaː/",
        partOfSpeech: "verb",
        engWord: "drown"
      },
      {
        word: "pokaꝝ",
        IPA: "/poˈkaʔ/",
        partOfSpeech: "verb",
        engWord: "embrace"
      },
      {
        word: "pokaꝯ",
        IPA: "/poˈkaʤ/",
        partOfSpeech: "verb",
        engWord: "ponder"
      },
      {
        word: "poki",
        IPA: "/poˈki/",
        partOfSpeech: "verb",
        engWord: "pull"
      },
      {
        word: "pomiꝭ",
        IPA: "/poˈmiːʂ/",
        partOfSpeech: "noun",
        engWord: "organism"
      },
      {
        word: "pomu",
        IPA: "/poˈmu/",
        partOfSpeech: "noun",
        engWord: "disposition"
      },
      {
        word: "pomud",
        IPA: "/poˈmud/",
        partOfSpeech: "noun",
        engWord: "array"
      },
      {
        word: "pomuꝭ",
        IPA: "/poˈmuːʂ/",
        partOfSpeech: "noun",
        engWord: "lever"
      },
      {
        word: "poꞃe",
        IPA: "/poˈne/",
        partOfSpeech: "number",
        engWord: "seven"
      },
      {
        word: "poꞃeꝝ",
        IPA: "/poˈneʔ/",
        partOfSpeech: "noun",
        engWord: "bat (club)"
      },
      {
        word: "poꞃeꝯ",
        IPA: "/poˈneʤ/",
        partOfSpeech: "verb",
        engWord: "snap"
      },
      {
        word: "poɲa",
        IPA: "/poˈɲa/",
        partOfSpeech: "noun",
        engWord: "evidence"
      },
      {
        word: "poɲaꝝ",
        IPA: "/poˈɲaʔ/",
        partOfSpeech: "verb",
        engWord: "acquire"
      },
      {
        word: "poɲad",
        IPA: "/poˈɲad/",
        partOfSpeech: "noun",
        engWord: "constellation"
      },
      {
        word: "poɲeꝯ",
        IPA: "/poˈɲeʤ/",
        partOfSpeech: "verb",
        engWord: "validate"
      },
      {
        word: "poo",
        IPA: "/poˈo/",
        partOfSpeech: "verb",
        engWord: "install"
      },
      {
        word: "popa",
        IPA: "/poˈpaː/",
        partOfSpeech: "verb",
        engWord: "withdraw"
      },
      {
        word: "pora",
        IPA: "/poˈɽa/",
        partOfSpeech: "noun",
        engWord: "example"
      },
      {
        word: "poraꝯ",
        IPA: "/poˈɽaːʤ/",
        partOfSpeech: "verb",
        engWord: "fuck, screw"
      },
      {
        word: "poꝭ",
        IPA: "/poʂ/",
        partOfSpeech: "verb",
        engWord: "believe"
      },
      {
        word: "poꝭaꝝ",
        IPA: "/poˈʂaʔ/",
        partOfSpeech: "verb",
        engWord: "convert"
      },
      {
        word: "poꝷa",
        IPA: "/poˈʈa/",
        partOfSpeech: "adjective",
        engWord: "convenient"
      },
      {
        word: "poꝷaꝝ",
        IPA: "/poˈʈaʔ/",
        partOfSpeech: "noun",
        engWord: "monster"
      },
      {
        word: "poꝷad",
        IPA: "/poˈʈad/",
        partOfSpeech: "noun",
        engWord: "shoe"
      },
      {
        word: "poꝷe",
        IPA: "/poˈʈe/",
        partOfSpeech: "preposition",
        engWord: "by"
      },
      {
        word: "poꝷe",
        IPA: "/poˈʈeː/",
        partOfSpeech: "verb",
        engWord: "fit"
      },
      {
        word: "poꝷkaꝭ",
        IPA: "/potˈkaʂ/",
        partOfSpeech: "verb",
        engWord: "stroke"
      },
      {
        word: "poꝷo",
        IPA: "/poˈʈo/",
        partOfSpeech: "noun",
        engWord: "projection"
      },
      {
        word: "poꝷod",
        IPA: "/poˈʈod/",
        partOfSpeech: "noun",
        engWord: "forecast"
      },
      {
        word: "poꝷu",
        IPA: "/poˈtu/",
        partOfSpeech: "noun",
        engWord: "eyelid, eyelash"
      },
      {
        word: "poꝷuꝯ",
        IPA: "/poˈtuʤ/",
        partOfSpeech: "adjective",
        engWord: "complex"
      },
      {
        word: "pou",
        IPA: "/poˈuː/",
        partOfSpeech: "noun",
        engWord: "bass"
      },
      {
        word: "poɏa",
        IPA: "/poˈja/",
        partOfSpeech: "verb",
        engWord: "go"
      },
      {
        word: "pu",
        IPA: "/pu/",
        partOfSpeech: "adverb",
        engWord: "least"
      },
      {
        word: "pu",
        IPA: "/puː/",
        partOfSpeech: "adverb",
        engWord: "usually"
      },
      {
        word: "puꝝ",
        IPA: "/puʔ/",
        partOfSpeech: "adjective",
        engWord: "fragile"
      },
      {
        word: "puꝝ",
        IPA: "/puːʔ/",
        partOfSpeech: "noun",
        engWord: "candle"
      },
      {
        word: "puꝝeɥ",
        IPA: "/puˈʔeʧ/",
        partOfSpeech: "noun",
        engWord: "mass"
      },
      {
        word: "puꝝek",
        IPA: "/puˈʔek/",
        partOfSpeech: "verb",
        engWord: "mandate"
      },
      {
        word: "puaꝝ",
        IPA: "/puˈaʔ/",
        partOfSpeech: "noun",
        engWord: "darling"
      },
      {
        word: "puaɥ",
        IPA: "/puˈaʧ/",
        partOfSpeech: "verb",
        engWord: "discharge"
      },
      {
        word: "puaɥ",
        IPA: "/puˈaːʧ/",
        partOfSpeech: "verb",
        engWord: "meet"
      },
      {
        word: "puaɥ",
        IPA: "/puːˈaːʧ/",
        partOfSpeech: "noun",
        engWord: "radius"
      },
      {
        word: "pubi",
        IPA: "/puˈbiː/",
        partOfSpeech: "adjective",
        engWord: "wet"
      },
      {
        word: "pubi",
        IPA: "/puːˈbiː/",
        partOfSpeech: "noun",
        engWord: "kin"
      },
      {
        word: "pubuɥ",
        IPA: "/puːˈbuːʧ/",
        partOfSpeech: "noun",
        engWord: "chick (girl)"
      },
      {
        word: "puɥ",
        IPA: "/puʧ/",
        partOfSpeech: "verb",
        engWord: "be (temporary state)"
      },
      {
        word: "puɥ",
        IPA: "/puːʧ/",
        partOfSpeech: "determiner",
        engWord: "any"
      },
      {
        word: "puɥek",
        IPA: "/puːˈʧek/",
        partOfSpeech: "adverb",
        engWord: "now"
      },
      {
        word: "puɥuꝝ",
        IPA: "/puːˈʧuːʔ/",
        partOfSpeech: "adjective",
        engWord: "nasty"
      },
      {
        word: "pude",
        IPA: "/puːˈde/",
        partOfSpeech: "verb",
        engWord: "spread"
      },
      {
        word: "pudek",
        IPA: "/puːˈdek/",
        partOfSpeech: "noun",
        engWord: "ambassador"
      },
      {
        word: "puduɥ",
        IPA: "/puˈduːʧ/",
        partOfSpeech: "adjective",
        engWord: "swift"
      },
      {
        word: "pug",
        IPA: "/pug/",
        partOfSpeech: "verb",
        engWord: "cure"
      },
      {
        word: "puge",
        IPA: "/puːˈge/",
        partOfSpeech: "noun",
        engWord: "sponge"
      },
      {
        word: "pugeɥ",
        IPA: "/puˈgeʧ/",
        partOfSpeech: "noun",
        engWord: "stitch",
        partOfSpeech2: "verb",
        engWord2: "stitch"
      },
      {
        word: "puggaɥ",
        IPA: "/puːgˈgaːʧ/",
        partOfSpeech: "noun",
        engWord: "dirt"
      },
      {
        word: "pugik",
        IPA: "/puˈgiːk/",
        partOfSpeech: "adjective",
        engWord: "gradual"
      },
      {
        word: "pugu",
        IPA: "/puˈgu/",
        partOfSpeech: "adverb",
        engWord: "really"
      },
      {
        word: "pugu",
        IPA: "/puˈguː/",
        partOfSpeech: "adjective",
        engWord: "hybrid"
      },
      {
        word: "puꝯa",
        IPA: "/puːˈʤa/",
        partOfSpeech: "noun",
        engWord: "independence"
      },
      {
        word: "puꝯek",
        IPA: "/puˈʤek/",
        partOfSpeech: "noun",
        engWord: "champagne"
      },
      {
        word: "puꝯo",
        IPA: "/puːˈʤo/",
        partOfSpeech: "noun",
        engWord: "agony"
      },
      {
        word: "puk",
        IPA: "/puk/",
        partOfSpeech: "noun",
        engWord: "daughter"
      },
      {
        word: "puk",
        IPA: "/puːk/",
        partOfSpeech: "conjunction",
        engWord: "than"
      },
      {
        word: "puka",
        IPA: "/puˈka/",
        partOfSpeech: "verb",
        engWord: "depart"
      },
      {
        word: "puka",
        IPA: "/puːˈka/",
        partOfSpeech: "adjective",
        engWord: "perfect"
      },
      {
        word: "pukaɥ",
        IPA: "/puˈkaʧ/",
        partOfSpeech: "noun",
        engWord: "drug"
      },
      {
        word: "pukaɥ",
        IPA: "/puːˈkaːʧ/",
        partOfSpeech: "noun",
        engWord: "metal"
      },
      {
        word: "pukak",
        IPA: "/puˈkak/",
        partOfSpeech: "noun",
        engWord: "storm"
      },
      {
        word: "pume",
        IPA: "/puːˈme/",
        partOfSpeech: "verb",
        engWord: "swirl"
      },
      {
        word: "pumu",
        IPA: "/puˈmu/",
        partOfSpeech: "noun",
        engWord: "note"
      },
      {
        word: "pumu",
        IPA: "/puˈmuː/",
        partOfSpeech: "verb",
        engWord: "surrender"
      },
      {
        word: "pumu",
        IPA: "/puːˈmu/",
        partOfSpeech: "adverb",
        engWord: "in"
      },
      {
        word: "puꞃdek",
        IPA: "/puːnˈdek/",
        partOfSpeech: "verb",
        engWord: "lure"
      },
      {
        word: "puꞃe",
        IPA: "/puːˈne/",
        partOfSpeech: "noun",
        engWord: "leather"
      },
      {
        word: "puꞃeɥ",
        IPA: "/puːˈneʧ/",
        partOfSpeech: "adjective",
        engWord: "fellow"
      },
      {
        word: "puꞃu",
        IPA: "/puːˈnu/",
        partOfSpeech: "verb",
        engWord: "exacerbate"
      },
      {
        word: "puɲa",
        IPA: "/punˈjaː/",
        partOfSpeech: "noun",
        engWord: "distinction"
      },
      {
        word: "puɲaꝝ",
        IPA: "/punˈjaʔ/",
        partOfSpeech: "noun",
        engWord: "oxygen"
      },
      {
        word: "puɲe",
        IPA: "/puˈɲeː/",
        partOfSpeech: "adjective",
        engWord: "basic"
      },
      {
        word: "puɲe",
        IPA: "/puːˈɲe/",
        partOfSpeech: "verb",
        engWord: "feed"
      },
      {
        word: "puɲoꝝ",
        IPA: "/puːˈɲoʔ/",
        partOfSpeech: "verb",
        engWord: "bury"
      },
      {
        word: "puo",
        IPA: "/puˈo/",
        partOfSpeech: "adjective",
        engWord: "smooth"
      },
      {
        word: "puo",
        IPA: "/puːˈo/",
        partOfSpeech: "noun",
        engWord: "patron"
      },
      {
        word: "pura",
        IPA: "/puːˈɽa/",
        partOfSpeech: "noun",
        engWord: "allergy"
      },
      {
        word: "purak",
        IPA: "/puːˈɽaːk/",
        partOfSpeech: "adjective",
        engWord: "rude"
      },
      {
        word: "puꝭoꝝ",
        IPA: "/puˈʂoʔ/",
        partOfSpeech: "adverb",
        engWord: "aboard"
      },
      {
        word: "puꝷa",
        IPA: "/puˈʈa/",
        partOfSpeech: "verb",
        engWord: "fire"
      },
      {
        word: "puꝷaɥ",
        IPA: "/puːˈʈaʧ/",
        partOfSpeech: "adjective",
        engWord: "domestic"
      },
      {
        word: "puꝷak",
        IPA: "/puˈʈak/",
        partOfSpeech: "verb",
        engWord: "ignore"
      },
      {
        word: "puꝷe",
        IPA: "/puˈʈe/",
        partOfSpeech: "adjective",
        engWord: "temporary"
      },
      {
        word: "puꝷe",
        IPA: "/puˈʈeː/",
        partOfSpeech: "verb",
        engWord: "act"
      },
      {
        word: "puꝷe",
        IPA: "/puːˈʈe/",
        partOfSpeech: "adjective",
        engWord: "careful"
      },
      {
        word: "puꝷeɥ",
        IPA: "/puːˈʈeʧ/",
        partOfSpeech: "verb",
        engWord: "panic"
      },
      {
        word: "puꝷo",
        IPA: "/puːˈʈo/",
        partOfSpeech: "noun",
        engWord: "cherry"
      },
      {
        word: "puu",
        IPA: "/puːˈuː/",
        partOfSpeech: "verb",
        engWord: "tick"
      },
      {
        word: "puuk",
        IPA: "/puˈuk/",
        partOfSpeech: "noun",
        engWord: "bucket"
      },
      {
        word: "puɏa",
        IPA: "/puˈja/",
        partOfSpeech: "noun",
        engWord: "ivory"
      },
      {
        word: "ꝭa",
        IPA: "/ʂa/",
        partOfSpeech: "verb",
        engWord: "keep"
      },
      {
        word: "ꝭa",
        IPA: "/ʂaː/",
        partOfSpeech: "noun",
        engWord: "member"
      },
      {
        word: "ꝭaꝝe",
        IPA: "/ʂaˈʔe/",
        partOfSpeech: "noun",
        engWord: "quality"
      },
      {
        word: "ꝭaꝝe",
        IPA: "/ʂaːˈʔe/",
        partOfSpeech: "adjective",
        engWord: "stark"
      },
      {
        word: "ꝭaa",
        IPA: "/ʂaˈa/",
        partOfSpeech: "adjective",
        engWord: "past"
      },
      {
        word: "ꝭaa",
        IPA: "/ʂaˈaː/",
        partOfSpeech: "verb",
        engWord: "sleep",
        partOfSpeech2: "noun",
        engWord2: "sleep"
      },
      {
        word: "ꝭaa",
        IPA: "/ʂaːˈa/",
        partOfSpeech: "noun",
        engWord: "tenure"
      },
      {
        word: "ꝭaa",
        IPA: "/ʂaːˈaː/",
        partOfSpeech: "adjective",
        engWord: "awkward"
      },
      {
        word: "ꝭaaɥ",
        IPA: "/ʂaːˈaʧ/",
        partOfSpeech: "noun",
        engWord: "mat"
      },
      {
        word: "ꝭaaraꝭ",
        IPA: "/ʂaˈaɽaʂ/",
        partOfSpeech: "adjective",
        engWord: "selfish"
      },
      {
        word: "ꝭabakak",
        IPA: "/ʂaˈbaːkaːk/",
        partOfSpeech: "noun",
        engWord: "optimism"
      },
      {
        word: "ꝭabuɲa",
        IPA: "/ʂaˈbuɲa/",
        partOfSpeech: "noun",
        engWord: "residue"
      },
      {
        word: "ꝭabuꝷeɏ",
        IPA: "/ʂaˈbuːʈej/",
        partOfSpeech: "verb",
        engWord: "alert"
      },
      {
        word: "ꝭaɥ",
        IPA: "/ʂaʧ/",
        partOfSpeech: "verb",
        engWord: "plan"
      },
      {
        word: "ꝭaɥ",
        IPA: "/ʂaːʧ/",
        partOfSpeech: "noun",
        engWord: "uniform"
      },
      {
        word: "ꝭaɥi",
        IPA: "/ʂaːˈʧiː/",
        partOfSpeech: "adjective",
        engWord: "luxury"
      },
      {
        word: "ꝭaɥiꝯe",
        IPA: "/ʂaˈʧiːʤe/",
        partOfSpeech: "noun",
        engWord: "slice"
      },
      {
        word: "ꝭaɥiꝷo",
        IPA: "/ʂaˈʧiʈo/",
        partOfSpeech: "noun",
        engWord: "advertisement"
      },
      {
        word: "ꝭaɥu",
        IPA: "/ʂaːˈʧuː/",
        partOfSpeech: "noun",
        engWord: "temper"
      },
      {
        word: "ꝭaɥude",
        IPA: "/ʂaˈʧuːde/",
        partOfSpeech: "noun",
        engWord: "glasses"
      },
      {
        word: "ꝭadek",
        IPA: "/ʂaˈdek/",
        partOfSpeech: "noun",
        engWord: "dictionary"
      },
      {
        word: "ꝭae",
        IPA: "/ʂaˈe/",
        partOfSpeech: "noun",
        engWord: "incentive"
      },
      {
        word: "ꝭae",
        IPA: "/ʂaˈeː/",
        partOfSpeech: "noun",
        engWord: "perimeter"
      },
      {
        word: "ꝭagiꝯ",
        IPA: "/ʂaˈgiːʤ/",
        partOfSpeech: "verb",
        engWord: "touch"
      },
      {
        word: "ꝭagiꝭ",
        IPA: "/ʂaˈgiːʂ/",
        partOfSpeech: "noun",
        engWord: "library"
      },
      {
        word: "ꝭaguɥ",
        IPA: "/ʂaˈguʧ/",
        partOfSpeech: "verb",
        engWord: "affirm"
      },
      {
        word: "ꝭaꝯ",
        IPA: "/ʂaʤ/",
        partOfSpeech: "verb",
        engWord: "stamp"
      },
      {
        word: "ꝭaꝯa",
        IPA: "/ʂaˈʤa/",
        partOfSpeech: "adjective",
        engWord: "consistent"
      },
      {
        word: "ꝭaꝯe",
        IPA: "/ʂaːˈʤe/",
        partOfSpeech: "noun",
        engWord: "coat"
      },
      {
        word: "ꝭaꝯebu",
        IPA: "/ʂaˈʤebu/",
        partOfSpeech: "verb",
        engWord: "drape"
      },
      {
        word: "ꝭaꝯeɥ",
        IPA: "/ʂaˈʤeʧ/",
        partOfSpeech: "verb",
        engWord: "suck"
      },
      {
        word: "ꝭaꝯeku",
        IPA: "/ʂaːˈʤekuː/",
        partOfSpeech: "noun",
        engWord: "manual"
      },
      {
        word: "ꝭaꝯogi",
        IPA: "/ʂaˈʤogiː/",
        partOfSpeech: "verb",
        engWord: "penetrate"
      },
      {
        word: "ꝭak",
        IPA: "/ʂak/",
        partOfSpeech: "verb",
        engWord: "work"
      },
      {
        word: "ꝭak",
        IPA: "/ʂaːk/",
        partOfSpeech: "noun",
        engWord: "source"
      },
      {
        word: "ꝭaka",
        IPA: "/ʂaːˈka/",
        partOfSpeech: "noun",
        engWord: "winery"
      },
      {
        word: "ꝭakabi",
        IPA: "/ʂaːˈkaːbi/",
        partOfSpeech: "adjective",
        engWord: "ugly"
      },
      {
        word: "ꝭakaꝷuk",
        IPA: "/ʂaːˈkaːtuk/",
        partOfSpeech: "noun",
        engWord: "brow"
      },
      {
        word: "ꝭakuɥ",
        IPA: "/ʂaˈkuːʧ/",
        partOfSpeech: "noun",
        engWord: "privilege"
      },
      {
        word: "ꝭaꞃe",
        IPA: "/ʂaˈne/",
        partOfSpeech: "noun",
        engWord: "home"
      },
      {
        word: "ꝭaꞃeɥ",
        IPA: "/ʂaˈneʧ/",
        partOfSpeech: "verb",
        engWord: "know"
      },
      {
        word: "ꝭaꞃhe",
        IPA: "/ʂanˈhe/",
        partOfSpeech: "adverb",
        engWord: "forever"
      },
      {
        word: "ꝭaɲabi",
        IPA: "/ʂaˈɲabiː/",
        partOfSpeech: "noun",
        engWord: "paragraph"
      },
      {
        word: "ꝭaɲaꝯ",
        IPA: "/ʂaˈɲaʤ/",
        partOfSpeech: "noun",
        engWord: "fairy"
      },
      {
        word: "ꝭaɲe",
        IPA: "/ʂaˈɲe/",
        partOfSpeech: "adverb",
        engWord: "ahead"
      },
      {
        word: "ꝭaɲeɏ",
        IPA: "/ʂaːˈɲej/",
        partOfSpeech: "noun",
        engWord: "cube"
      },
      {
        word: "ꝭarabuk",
        IPA: "/ʂaˈɽaːbuːk/",
        partOfSpeech: "verb",
        engWord: "assist"
      },
      {
        word: "ꝭaraɥ",
        IPA: "/ʂaːˈɽaːʧ/",
        partOfSpeech: "noun",
        engWord: "hedge"
      },
      {
        word: "ꝭaraku",
        IPA: "/ʂaˈɽakuː/",
        partOfSpeech: "verb",
        engWord: "batter"
      },
      {
        word: "ꝭaꝷaꝯe",
        IPA: "/ʂaːˈʈaʤe/",
        partOfSpeech: "adjective",
        engWord: "corrupt"
      },
      {
        word: "ꝭaꝷe",
        IPA: "/ʂaˈʈe/",
        partOfSpeech: "adjective",
        engWord: "deliberate"
      },
      {
        word: "ꝭaꝷe",
        IPA: "/ʂaˈʈeː/",
        partOfSpeech: "conjunction",
        engWord: "while"
      },
      {
        word: "ꝭaꝷeka",
        IPA: "/ʂaˈʈeːka/",
        partOfSpeech: "noun",
        engWord: "intervention"
      },
      {
        word: "ꝭaꝷu",
        IPA: "/ʂaːˈtu/",
        partOfSpeech: "pronoun",
        engWord: "anybody"
      },
      {
        word: "ꝭaɏ",
        IPA: "/ʂaj/",
        partOfSpeech: "adjective",
        engWord: "significant"
      },
      {
        word: "ꝭaɏ",
        IPA: "/ʂaːj/",
        partOfSpeech: "verb",
        engWord: "expose"
      },
      {
        word: "ꝭaɏa",
        IPA: "/ʂaːˈja/",
        partOfSpeech: "verb",
        engWord: "haunt"
      },
      {
        word: "ꝭaɏɏeɏ",
        IPA: "/ʂajˈjej/",
        partOfSpeech: "noun",
        engWord: "pair"
      },
      {
        word: "ꝭe",
        IPA: "/ʂe/",
        partOfSpeech: "adjective",
        engWord: "good"
      },
      {
        word: "ꝭe",
        IPA: "/ʂeː/",
        partOfSpeech: "noun",
        engWord: "god"
      },
      {
        word: "ꝭeꝝ",
        IPA: "/ʂeʔ/",
        partOfSpeech: "verb",
        engWord: "eat"
      },
      {
        word: "ꝭeꝝ",
        IPA: "/ʂeːʔ/",
        partOfSpeech: "verb",
        engWord: "step",
        partOfSpeech2: "noun",
        engWord2: "step"
      },
      {
        word: "ꝭeꝝe",
        IPA: "/ʂeˈʔe/",
        partOfSpeech: "noun",
        engWord: "island"
      },
      {
        word: "ꝭea",
        IPA: "/ʂeˈaː/",
        partOfSpeech: "adjective",
        engWord: "authentic"
      },
      {
        word: "ꝭeaꝝeꝝ",
        IPA: "/ʂeˈaʔeːʔ/",
        partOfSpeech: "adjective",
        engWord: "selected"
      },
      {
        word: "ꝭeagu",
        IPA: "/ʂeːˈagu/",
        partOfSpeech: "verb",
        engWord: "identify"
      },
      {
        word: "ꝭebi",
        IPA: "/ʂeˈbiː/",
        partOfSpeech: "verb",
        engWord: "subsidize"
      },
      {
        word: "ꝭebi",
        IPA: "/ʂeːˈbiː/",
        partOfSpeech: "noun",
        engWord: "breeze"
      },
      {
        word: "ꝭeɥ",
        IPA: "/ʂeʧ/",
        partOfSpeech: "noun",
        engWord: "officer"
      },
      {
        word: "ꝭeɥ",
        IPA: "/ʂeːʧ/",
        partOfSpeech: "noun",
        engWord: "gossip"
      },
      {
        word: "ꝭeɥa",
        IPA: "/ʂeˈʧaː/",
        partOfSpeech: "adjective",
        engWord: "monetary"
      },
      {
        word: "ꝭeɥi",
        IPA: "/ʂeˈʧi/",
        partOfSpeech: "verb",
        engWord: "allege"
      },
      {
        word: "ꝭeɥuɥ",
        IPA: "/ʂeˈʧuʧ/",
        partOfSpeech: "noun",
        engWord: "stew"
      },
      {
        word: "ꝭeɥuɥ",
        IPA: "/ʂeˈʧuːʧ/",
        partOfSpeech: "noun",
        engWord: "excerpt"
      },
      {
        word: "ꝭede",
        IPA: "/ʂeˈde/",
        partOfSpeech: "verb",
        engWord: "feel"
      },
      {
        word: "ꝭede",
        IPA: "/ʂeːˈde/",
        partOfSpeech: "adjective",
        engWord: "lucrative"
      },
      {
        word: "ꝭedeɲaꝝ",
        IPA: "/ʂeˈdeɲaʔ/",
        partOfSpeech: "noun",
        engWord: "energy"
      },
      {
        word: "ꝭedeꝷa",
        IPA: "/ʂeˈdeʈa/",
        partOfSpeech: "verb",
        engWord: "smile",
        partOfSpeech2: "noun",
        engWord2: "smile"
      },
      {
        word: "ꝭee",
        IPA: "/ʂeˈeː/",
        partOfSpeech: "noun",
        engWord: "wall"
      },
      {
        word: "ꝭee",
        IPA: "/ʂeːˈe/",
        partOfSpeech: "noun",
        engWord: "liquid"
      },
      {
        word: "ꝭeeo",
        IPA: "/ʂeːˈeo/",
        partOfSpeech: "adjective",
        engWord: "recent"
      },
      {
        word: "ꝭeguꝝ",
        IPA: "/ʂeˈguːʔ/",
        partOfSpeech: "conjunction",
        engWord: "rather"
      },
      {
        word: "ꝭeꝯe",
        IPA: "/ʂeˈʤe/",
        partOfSpeech: "verb",
        engWord: "reward"
      },
      {
        word: "ꝭeka",
        IPA: "/ʂeˈkaː/",
        partOfSpeech: "adjective",
        engWord: "equivalent"
      },
      {
        word: "ꝭeka",
        IPA: "/ʂeːˈkaː/",
        partOfSpeech: "verb",
        engWord: "wrap"
      },
      {
        word: "ꝭekame",
        IPA: "/ʂeˈkame/",
        partOfSpeech: "noun",
        engWord: "frog"
      },
      {
        word: "ꝭeku",
        IPA: "/ʂeˈkuː/",
        partOfSpeech: "noun",
        engWord: "packet"
      },
      {
        word: "ꝭemeɥu",
        IPA: "/ʂeːˈmeʧuː/",
        partOfSpeech: "adverb",
        engWord: "off"
      },
      {
        word: "ꝭeꞃdeɥ",
        IPA: "/ʂenˈdeʧ/",
        partOfSpeech: "noun",
        engWord: "guilt"
      },
      {
        word: "ꝭeꞃe",
        IPA: "/ʂeːˈne/",
        partOfSpeech: "adjective",
        engWord: "sufficient"
      },
      {
        word: "ꝭeꞃeꝝ",
        IPA: "/ʂeːˈneʔ/",
        partOfSpeech: "noun",
        engWord: "textile"
      },
      {
        word: "ꝭeɲa",
        IPA: "/ʂeˈɲa/",
        partOfSpeech: "noun",
        engWord: "torso"
      },
      {
        word: "ꝭeɲa",
        IPA: "/ʂeːˈɲa/",
        partOfSpeech: "verb",
        engWord: "protest"
      },
      {
        word: "ꝭeɲau",
        IPA: "/ʂeːˈɲauː/",
        partOfSpeech: "verb",
        engWord: "close"
      },
      {
        word: "ꝭeɲe",
        IPA: "/ʂeːˈɲe/",
        partOfSpeech: "noun",
        engWord: "legend"
      },
      {
        word: "ꝭepa",
        IPA: "/ʂeˈpaː/",
        partOfSpeech: "noun",
        engWord: "statistic"
      },
      {
        word: "ꝭeraꝝ",
        IPA: "/ʂeˈɽaːʔ/",
        partOfSpeech: "adverb",
        engWord: "elsewhere"
      },
      {
        word: "ꝭeꝭaɥ",
        IPA: "/ʂeːˈʂaʧ/",
        partOfSpeech: "noun",
        engWord: "mosquito"
      },
      {
        word: "ꝭeꝷa",
        IPA: "/ʂeˈʈa/",
        partOfSpeech: "verb",
        engWord: "respond"
      },
      {
        word: "ꝭeꝷaɥ",
        IPA: "/ʂeˈʈaʧ/",
        partOfSpeech: "noun",
        engWord: "week"
      },
      {
        word: "ꝭeꝷe",
        IPA: "/ʂeːˈʈeː/",
        partOfSpeech: "noun",
        engWord: "shrub"
      },
      {
        word: "ꝭeꝷeɥ",
        IPA: "/ʂeˈʈeːʧ/",
        partOfSpeech: "noun",
        engWord: "copper"
      },
      {
        word: "ꝭeꝷo",
        IPA: "/ʂeːˈʈo/",
        partOfSpeech: "verb",
        engWord: "embody"
      },
      {
        word: "ꝭeꝷoɥu",
        IPA: "/ʂeˈʈoʧu/",
        partOfSpeech: "verb",
        engWord: "slump"
      },
      {
        word: "ꝭeu",
        IPA: "/ʂeˈuː/",
        partOfSpeech: "verb",
        engWord: "manipulate"
      },
      {
        word: "ꝭeuꝝ",
        IPA: "/ʂeˈuːʔ/",
        partOfSpeech: "noun",
        engWord: "action"
      },
      {
        word: "ꝭeɏaɥ",
        IPA: "/ʂeˈjaʧ/",
        partOfSpeech: "noun",
        engWord: "trauma"
      },
      {
        word: "ꝭeɏɏeɥ",
        IPA: "/ʂejˈjeʧ/",
        partOfSpeech: "verb",
        engWord: "bid"
      },
      {
        word: "ꝭi",
        IPA: "/ʂi/",
        partOfSpeech: "adverb",
        engWord: "together"
      },
      {
        word: "ꝭi",
        IPA: "/ʂiː/",
        partOfSpeech: "adverb",
        engWord: "early"
      },
      {
        word: "ꝭiꝝe",
        IPA: "/ʂiːˈʔe/",
        partOfSpeech: "verb",
        engWord: "sigh"
      },
      {
        word: "ꝭia",
        IPA: "/ʂiːˈa/",
        partOfSpeech: "verb",
        engWord: "stun"
      },
      {
        word: "ꝭibigek",
        IPA: "/ʂiːˈbigek/",
        partOfSpeech: "adjective",
        engWord: "old"
      },
      {
        word: "ꝭibu",
        IPA: "/ʂiːˈbu/",
        partOfSpeech: "noun",
        engWord: "lion"
      },
      {
        word: "ꝭiɥ",
        IPA: "/ʂiʧ/",
        partOfSpeech: "noun",
        engWord: "armour"
      },
      {
        word: "ꝭiɥ",
        IPA: "/ʂiːʧ/",
        partOfSpeech: "noun",
        engWord: "change"
      },
      {
        word: "ꝭiɥek",
        IPA: "/ʂiːˈʧek/",
        partOfSpeech: "noun",
        engWord: "wire"
      },
      {
        word: "ꝭiɥume",
        IPA: "/ʂiːˈʧume/",
        partOfSpeech: "adjective",
        engWord: "fuzzy"
      },
      {
        word: "ꝭigiɥ",
        IPA: "/ʂiːˈgiːʧ/",
        partOfSpeech: "noun",
        engWord: "cow"
      },
      {
        word: "ꝭigiꞃuk",
        IPA: "/ʂiˈginuːk/",
        partOfSpeech: "noun",
        engWord: "paper"
      },
      {
        word: "ꝭigu",
        IPA: "/ʂiːˈguː/",
        partOfSpeech: "noun",
        engWord: "foam"
      },
      {
        word: "ꝭik",
        IPA: "/ʂik/",
        partOfSpeech: "adjective",
        engWord: "green"
      },
      {
        word: "ꝭik",
        IPA: "/ʂiːk/",
        partOfSpeech: "noun",
        engWord: "pipe"
      },
      {
        word: "ꝭikaɥik",
        IPA: "/ʂiːˈkaʧik/",
        partOfSpeech: "noun",
        engWord: "guide"
      },
      {
        word: "ꝭimu",
        IPA: "/ʂiːˈmu/",
        partOfSpeech: "noun",
        engWord: "beer"
      },
      {
        word: "ꝭiꞃe",
        IPA: "/ʂiːˈne/",
        partOfSpeech: "verb",
        engWord: "contribute"
      },
      {
        word: "ꝭiɲoɥ",
        IPA: "/ʂiːˈɲoʧ/",
        partOfSpeech: "noun",
        engWord: "advice"
      },
      {
        word: "ꝭiꝷa",
        IPA: "/ʂiːˈʈa/",
        partOfSpeech: "verb",
        engWord: "execute"
      },
      {
        word: "ꝭiꝷe",
        IPA: "/ʂiːˈʈeː/",
        partOfSpeech: "noun",
        engWord: "quarter"
      },
      {
        word: "ꝭiꝷeɥ",
        IPA: "/ʂiːˈʈeːʧ/",
        partOfSpeech: "noun",
        engWord: "pearl"
      },
      {
        word: "ꝭiꝷeɲa",
        IPA: "/ʂiːˈʈeɲa/",
        partOfSpeech: "noun",
        engWord: "foliage"
      },
      {
        word: "ꝭiꝷo",
        IPA: "/ʂiːˈʈo/",
        partOfSpeech: "noun",
        engWord: "millennium"
      },
      {
        word: "ꝭiɏa",
        IPA: "/ʂiːˈja/",
        partOfSpeech: "noun",
        engWord: "triangle"
      },
      {
        word: "ꝭo",
        IPA: "/ʂo/",
        partOfSpeech: "adverb",
        engWord: "here"
      },
      {
        word: "ꝭoꝝ",
        IPA: "/ʂoʔ/",
        partOfSpeech: "noun",
        engWord: "hour, time"
      },
      {
        word: "ꝭoꝝe",
        IPA: "/ʂoˈʔe/",
        partOfSpeech: "verb",
        engWord: "sneak"
      },
      {
        word: "ꝭoꝝeꝝ",
        IPA: "/ʂoˈʔeʔ/",
        partOfSpeech: "noun",
        engWord: "vanilla"
      },
      {
        word: "ꝭoꝝeꝯ",
        IPA: "/ʂoˈʔeːʤ/",
        partOfSpeech: "noun",
        engWord: "copper"
      },
      {
        word: "ꝭoꝝera",
        IPA: "/ʂoˈʔeɽa/",
        partOfSpeech: "determiner",
        engWord: "little"
      },
      {
        word: "ꝭoꝝoꝷeꝭ",
        IPA: "/ʂoˈʔoʈeʂ/",
        partOfSpeech: "noun",
        engWord: "collar"
      },
      {
        word: "ꝭoa",
        IPA: "/ʂoˈa/",
        partOfSpeech: "noun",
        engWord: "anthropology"
      },
      {
        word: "ꝭoaꝯ",
        IPA: "/ʂoˈaʤ/",
        partOfSpeech: "noun",
        engWord: "rib"
      },
      {
        word: "ꝭobad",
        IPA: "/ʂoˈbaːd/",
        partOfSpeech: "noun",
        engWord: "wildlife"
      },
      {
        word: "ꝭobi",
        IPA: "/ʂoˈbiː/",
        partOfSpeech: "noun",
        engWord: "brick"
      },
      {
        word: "ꝭobiꝝe",
        IPA: "/ʂoˈbiːʔe/",
        partOfSpeech: "verb",
        engWord: "stumble"
      },
      {
        word: "ꝭobiguꝯ",
        IPA: "/ʂoˈbiːguːʤ/",
        partOfSpeech: "noun",
        engWord: "hue"
      },
      {
        word: "ꝭobiꝯ",
        IPA: "/ʂoˈbiʤ/",
        partOfSpeech: "noun",
        engWord: "witch"
      },
      {
        word: "ꝭobiꝷa",
        IPA: "/ʂoˈbiːʈa/",
        partOfSpeech: "noun",
        engWord: "clown"
      },
      {
        word: "ꝭobiu",
        IPA: "/ʂoˈbiːuː/",
        partOfSpeech: "noun",
        engWord: "trouble"
      },
      {
        word: "ꝭobuɏaꝯ",
        IPA: "/ʂoˈbuːjaʤ/",
        partOfSpeech: "noun",
        engWord: "controversy"
      },
      {
        word: "ꝭoɥa",
        IPA: "/ʂoˈʧaː/",
        partOfSpeech: "verb",
        engWord: "envision"
      },
      {
        word: "ꝭoɥi",
        IPA: "/ʂoˈʧi/",
        partOfSpeech: "adjective",
        engWord: "marital"
      },
      {
        word: "ꝭoɥid",
        IPA: "/ʂoˈʧiːd/",
        partOfSpeech: "verb",
        engWord: "store"
      },
      {
        word: "ꝭoɥiɲe",
        IPA: "/ʂoˈʧiːɲe/",
        partOfSpeech: "noun",
        engWord: "siege"
      },
      {
        word: "ꝭoɥu",
        IPA: "/ʂoˈʧu/",
        partOfSpeech: "adjective",
        engWord: "vulgar"
      },
      {
        word: "ꝭoɥu",
        IPA: "/ʂoˈʧuː/",
        partOfSpeech: "noun",
        engWord: "teacher",
        partOfSpeech2: "noun",
        engWord2: "teacher"
      },
      {
        word: "ꝭoɥuꝯ",
        IPA: "/ʂoˈʧuːʤ/",
        partOfSpeech: "verb",
        engWord: "translate"
      },
      {
        word: "ꝭoɥuꝷa",
        IPA: "/ʂoˈʧuːʈa/",
        partOfSpeech: "adjective",
        engWord: "fancy"
      },
      {
        word: "ꝭoe",
        IPA: "/ʂoˈe/",
        partOfSpeech: "verb",
        engWord: "argue"
      },
      {
        word: "ꝭoe",
        IPA: "/ʂoˈeː/",
        partOfSpeech: "verb",
        engWord: "assault"
      },
      {
        word: "ꝭoeꝷa",
        IPA: "/ʂoˈeʈa/",
        partOfSpeech: "r.",
        engWord: "overhead"
      },
      {
        word: "ꝭogeꝝ",
        IPA: "/ʂoˈgeʔ/",
        partOfSpeech: "noun",
        engWord: "shield"
      },
      {
        word: "ꝭogegeꝭ",
        IPA: "/ʂoˈgegeʂ/",
        partOfSpeech: "adjective",
        engWord: "corrupt"
      },
      {
        word: "ꝭogeɲa",
        IPA: "/ʂoˈgeɲa/",
        partOfSpeech: "verb",
        engWord: "isolate"
      },
      {
        word: "ꝭogeɲeꝝ",
        IPA: "/ʂoˈgeɲeːʔ/",
        partOfSpeech: "adjective",
        engWord: "best"
      },
      {
        word: "ꝭogiꝭ",
        IPA: "/ʂoˈgiːʂ/",
        partOfSpeech: "noun",
        engWord: "burger"
      },
      {
        word: "ꝭogu",
        IPA: "/ʂoˈguː/",
        partOfSpeech: "noun",
        engWord: "carrot"
      },
      {
        word: "ꝭoguaꝯ",
        IPA: "/ʂoˈguaʤ/",
        partOfSpeech: "noun",
        engWord: "crab"
      },
      {
        word: "ꝭogugu",
        IPA: "/ʂoˈguːgu/",
        partOfSpeech: "noun",
        engWord: "turmoil"
      },
      {
        word: "ꝭoguꝭ",
        IPA: "/ʂoˈguʂ/",
        partOfSpeech: "verb",
        engWord: "destroy"
      },
      {
        word: "ꝭoha",
        IPA: "/ʂoˈha/",
        partOfSpeech: "verb",
        engWord: "stock"
      },
      {
        word: "ꝭoꝯ",
        IPA: "/ʂoʤ/",
        partOfSpeech: "verb",
        engWord: "watch"
      },
      {
        word: "ꝭoꝯa",
        IPA: "/ʂoˈʤa/",
        partOfSpeech: "verb",
        engWord: "erect"
      },
      {
        word: "ꝭoꝯaꝯ",
        IPA: "/ʂoˈʤaʤ/",
        partOfSpeech: "noun",
        engWord: "phone"
      },
      {
        word: "ꝭoꝯeɥuꝯ",
        IPA: "/ʂoˈʤeʧuʤ/",
        partOfSpeech: "noun",
        engWord: "bra"
      },
      {
        word: "ꝭoꝯeꝯ",
        IPA: "/ʂoˈʤeʤ/",
        partOfSpeech: "adjective",
        engWord: "earnest"
      },
      {
        word: "ꝭoka",
        IPA: "/ʂoˈka/",
        partOfSpeech: "noun",
        engWord: "garden"
      },
      {
        word: "ꝭokaꝝ",
        IPA: "/ʂoˈkaʔ/",
        partOfSpeech: "noun",
        engWord: "cane"
      },
      {
        word: "ꝭokaꝝ",
        IPA: "/ʂoˈkaːʔ/",
        partOfSpeech: "noun",
        engWord: "orbit"
      },
      {
        word: "ꝭokaaꝭ",
        IPA: "/ʂoˈkaaʂ/",
        partOfSpeech: "noun",
        engWord: "genetics"
      },
      {
        word: "ꝭokabi",
        IPA: "/ʂoˈkabiː/",
        partOfSpeech: "verb",
        engWord: "settle (land)"
      },
      {
        word: "ꝭokaꝭ",
        IPA: "/ʂoˈkaʂ/",
        partOfSpeech: "verb",
        engWord: "charm"
      },
      {
        word: "ꝭokaꝷaꝭ",
        IPA: "/ʂoˈkaʈaʂ/",
        partOfSpeech: "noun",
        engWord: "sex"
      },
      {
        word: "ꝭokika",
        IPA: "/ʂoˈkika/",
        partOfSpeech: "noun",
        engWord: "lump"
      },
      {
        word: "ꝭoku",
        IPA: "/ʂoˈkuː/",
        partOfSpeech: "verb",
        engWord: "hiss"
      },
      {
        word: "ꝭome",
        IPA: "/ʂoˈme/",
        partOfSpeech: "noun",
        engWord: "food"
      },
      {
        word: "ꝭomebuꝭ",
        IPA: "/ʂoˈmebuʂ/",
        partOfSpeech: "adjective",
        engWord: "close"
      },
      {
        word: "ꝭomiɥaꝝ",
        IPA: "/ʂoˈmiːʧaːʔ/",
        partOfSpeech: "noun",
        engWord: "acquaintance"
      },
      {
        word: "ꝭomiꝯ",
        IPA: "/ʂoˈmiʤ/",
        partOfSpeech: "verb",
        engWord: "celebrate"
      },
      {
        word: "ꝭomu",
        IPA: "/ʂoˈmu/",
        partOfSpeech: "verb",
        engWord: "consider"
      },
      {
        word: "ꝭoꞃdeꝝ",
        IPA: "/ʂonˈdeʔ/",
        partOfSpeech: "noun",
        engWord: "plaque"
      },
      {
        word: "ꝭoꞃeɲaꝝ",
        IPA: "/ʂoˈneɲaʔ/",
        partOfSpeech: "verb",
        engWord: "ask"
      },
      {
        word: "ꝭoꞃeɲeꝯ",
        IPA: "/ʂoˈneɲeʤ/",
        partOfSpeech: "noun",
        engWord: "merit"
      },
      {
        word: "ꝭoꞃhe",
        IPA: "/ʂonˈhe/",
        partOfSpeech: "noun",
        engWord: "dish"
      },
      {
        word: "ꝭoꞃu",
        IPA: "/ʂoˈnuː/",
        partOfSpeech: "verb",
        engWord: "supervise"
      },
      {
        word: "ꝭoꞃuꝯ",
        IPA: "/ʂoˈnuʤ/",
        partOfSpeech: "adjective",
        engWord: "fortunate"
      },
      {
        word: "ꝭoꞃuꝭ",
        IPA: "/ʂoˈnuːʂ/",
        partOfSpeech: "noun",
        engWord: "sample"
      },
      {
        word: "ꝭoɲa",
        IPA: "/ʂoˈɲa/",
        partOfSpeech: "noun",
        engWord: "compassion"
      },
      {
        word: "ꝭoɲabi",
        IPA: "/ʂoˈɲabiː/",
        partOfSpeech: "verb",
        engWord: "stall"
      },
      {
        word: "ꝭoɲaꞃuꝝ",
        IPA: "/ʂoˈɲanuʔ/",
        partOfSpeech: "adjective",
        engWord: "remarkable"
      },
      {
        word: "ꝭoɲeꝷuꝯ",
        IPA: "/ʂoˈɲetuʤ/",
        partOfSpeech: "adverb",
        engWord: "fairly"
      },
      {
        word: "ꝭoɲo",
        IPA: "/ʂoˈɲo/",
        partOfSpeech: "noun",
        engWord: "couple"
      },
      {
        word: "ꝭoobu",
        IPA: "/ʂoˈobuː/",
        partOfSpeech: "noun",
        engWord: "camel"
      },
      {
        word: "ꝭoraꝝ",
        IPA: "/ʂoˈɽaʔ/",
        partOfSpeech: "noun",
        engWord: "almond"
      },
      {
        word: "ꝭoraa",
        IPA: "/ʂoˈɽaːa/",
        partOfSpeech: "noun",
        engWord: "wife"
      },
      {
        word: "ꝭoraꝯ",
        IPA: "/ʂoˈɽaʤ/",
        partOfSpeech: "noun",
        engWord: "owner"
      },
      {
        word: "ꝭoꝭ",
        IPA: "/ʂoʂ/",
        partOfSpeech: "noun",
        engWord: "clothes, clothing"
      },
      {
        word: "ꝭoꝭaaꝯ",
        IPA: "/ʂoˈʂaaʤ/",
        partOfSpeech: "noun",
        engWord: "shack"
      },
      {
        word: "ꝭoꝷa",
        IPA: "/ʂoˈʈa/",
        partOfSpeech: "noun",
        engWord: "forehead"
      },
      {
        word: "ꝭoꝷaꝝ",
        IPA: "/ʂoˈʈaʔ/",
        partOfSpeech: "noun",
        engWord: "youth"
      },
      {
        word: "ꝭoꝷaka",
        IPA: "/ʂoˈʈaka/",
        partOfSpeech: "noun",
        engWord: "electricity"
      },
      {
        word: "ꝭoꝷakaꝭ",
        IPA: "/ʂoˈʈakaʂ/",
        partOfSpeech: "adjective",
        engWord: "select"
      },
      {
        word: "ꝭoꝷaꝭ",
        IPA: "/ʂoˈʈaʂ/",
        partOfSpeech: "noun",
        engWord: "art"
      },
      {
        word: "ꝭoꝷeꝯe",
        IPA: "/ʂoˈʈeʤe/",
        partOfSpeech: "adjective",
        engWord: "similar"
      },
      {
        word: "ꝭoꝷeꝭ",
        IPA: "/ʂoˈʈeʂ/",
        partOfSpeech: "adjective",
        engWord: "blonde"
      },
      {
        word: "ꝭoꝷka",
        IPA: "/ʂotˈka/",
        partOfSpeech: "verb",
        engWord: "write"
      },
      {
        word: "ꝭoꝷo",
        IPA: "/ʂoˈʈo/",
        partOfSpeech: "preposition",
        engWord: "such"
      },
      {
        word: "ꝭoubuꝝ",
        IPA: "/ʂoˈuːbuʔ/",
        partOfSpeech: "noun",
        engWord: "notebook"
      },
      {
        word: "ꝭouɥ",
        IPA: "/ʂoˈuːʧ/",
        partOfSpeech: "noun",
        engWord: "specialist"
      },
      {
        word: "ꝭoue",
        IPA: "/ʂoˈue/",
        partOfSpeech: "adjective",
        engWord: "strong"
      },
      {
        word: "ꝭoɏaꝯ",
        IPA: "/ʂoˈjaʤ/",
        partOfSpeech: "verb",
        engWord: "explode"
      },
      {
        word: "ꝭu",
        IPA: "/ʂu/",
        partOfSpeech: "noun",
        engWord: "plan"
      },
      {
        word: "ꝭu",
        IPA: "/ʂuː/",
        partOfSpeech: "preposition",
        engWord: "from"
      },
      {
        word: "ꝭuꝝ",
        IPA: "/ʂuʔ/",
        partOfSpeech: "adjective",
        engWord: "dry"
      },
      {
        word: "ꝭuꝝ",
        IPA: "/ʂuːʔ/",
        partOfSpeech: "verb",
        engWord: "squeeze"
      },
      {
        word: "ꝭuꝝe",
        IPA: "/ʂuˈʔe/",
        partOfSpeech: "adjective",
        engWord: "violent"
      },
      {
        word: "ꝭuꝝeɥ",
        IPA: "/ʂuːˈʔeʧ/",
        partOfSpeech: "verb",
        engWord: "bump"
      },
      {
        word: "ꝭuꝝekig",
        IPA: "/ʂuˈʔekig/",
        partOfSpeech: "noun",
        engWord: "plantation"
      },
      {
        word: "ꝭuꝝeɏ",
        IPA: "/ʂuːˈʔej/",
        partOfSpeech: "noun",
        engWord: "ham"
      },
      {
        word: "ꝭuꝝo",
        IPA: "/ʂuːˈʔo/",
        partOfSpeech: "noun",
        engWord: "bundle"
      },
      {
        word: "ꝭua",
        IPA: "/ʂuˈa/",
        partOfSpeech: "verb",
        engWord: "drift"
      },
      {
        word: "ꝭua",
        IPA: "/ʂuːˈaː/",
        partOfSpeech: "adjective",
        engWord: "holy"
      },
      {
        word: "ꝭuaɥ",
        IPA: "/ʂuːˈaʧ/",
        partOfSpeech: "noun",
        engWord: "tie"
      },
      {
        word: "ꝭuak",
        IPA: "/ʂuˈak/",
        partOfSpeech: "noun",
        engWord: "extent"
      },
      {
        word: "ꝭubaɥ",
        IPA: "/ʂuːˈbaːʧ/",
        partOfSpeech: "noun",
        engWord: "sense"
      },
      {
        word: "ꝭubi",
        IPA: "/ʂuˈbiː/",
        partOfSpeech: "noun",
        engWord: "saddle"
      },
      {
        word: "ꝭubu",
        IPA: "/ʂuˈbu/",
        partOfSpeech: "noun",
        engWord: "drawer"
      },
      {
        word: "ꝭubu",
        IPA: "/ʂuːˈbu/",
        partOfSpeech: "noun",
        engWord: "pig"
      },
      {
        word: "ꝭubu",
        IPA: "/ʂuːˈbuː/",
        partOfSpeech: "verb",
        engWord: "divide"
      },
      {
        word: "ꝭubuɥ",
        IPA: "/ʂuːˈbuːʧ/",
        partOfSpeech: "noun",
        engWord: "house"
      },
      {
        word: "ꝭubuhak",
        IPA: "/ʂuːˈbuːhak/",
        partOfSpeech: "noun",
        engWord: "cafe"
      },
      {
        word: "ꝭubuk",
        IPA: "/ʂuːˈbuːk/",
        partOfSpeech: "noun",
        engWord: "demise"
      },
      {
        word: "ꝭubuka",
        IPA: "/ʂuːˈbuka/",
        partOfSpeech: "verb",
        engWord: "avoid"
      },
      {
        word: "ꝭuɥ",
        IPA: "/ʂuʧ/",
        partOfSpeech: "verb",
        engWord: "talk"
      },
      {
        word: "ꝭuɥ",
        IPA: "/ʂuːʧ/",
        partOfSpeech: "verb",
        engWord: "sort"
      },
      {
        word: "ꝭuɥeɥ",
        IPA: "/ʂuːˈʧeʧ/",
        partOfSpeech: "verb",
        engWord: "throw"
      },
      {
        word: "ꝭuɥi",
        IPA: "/ʂuːˈʧi/",
        partOfSpeech: "verb",
        engWord: "blink",
        partOfSpeech2: "noun",
        engWord2: "blink"
      },
      {
        word: "ꝭuɥi",
        IPA: "/ʂuːˈʧiː/",
        partOfSpeech: "noun",
        engWord: "prose"
      },
      {
        word: "ꝭuɥodeꝯ",
        IPA: "/ʂuːˈʧodeʤ/",
        partOfSpeech: "noun",
        engWord: "stable"
      },
      {
        word: "ꝭuɥu",
        IPA: "/ʂuːˈʧu/",
        partOfSpeech: "adjective",
        engWord: "awful, terrible"
      },
      {
        word: "ꝭuɥuɥ",
        IPA: "/ʂuːˈʧuʧ/",
        partOfSpeech: "verb",
        engWord: "be (exist - there is/are)"
      },
      {
        word: "ꝭuɥura",
        IPA: "/ʂuːˈʧuɽa/",
        partOfSpeech: "adjective",
        engWord: "attractive"
      },
      {
        word: "ꝭude",
        IPA: "/ʂuˈde/",
        partOfSpeech: "verb",
        engWord: "learn"
      },
      {
        word: "ꝭude",
        IPA: "/ʂuːˈde/",
        partOfSpeech: "noun",
        engWord: "credit"
      },
      {
        word: "ꝭudeɥ",
        IPA: "/ʂuːˈdeʧ/",
        partOfSpeech: "adjective",
        engWord: "great"
      },
      {
        word: "ꝭudu",
        IPA: "/ʂuˈduː/",
        partOfSpeech: "noun",
        engWord: "spirit"
      },
      {
        word: "ꝭue",
        IPA: "/ʂuˈe/",
        partOfSpeech: "noun",
        engWord: "piece"
      },
      {
        word: "ꝭue",
        IPA: "/ʂuːˈe/",
        partOfSpeech: "noun",
        engWord: "arena"
      },
      {
        word: "ꝭuee",
        IPA: "/ʂuːˈeeː/",
        partOfSpeech: "verb",
        engWord: "spectate"
      },
      {
        word: "ꝭug",
        IPA: "/ʂug/",
        partOfSpeech: "noun",
        engWord: "fact"
      },
      {
        word: "ꝭuge",
        IPA: "/ʂuˈge/",
        partOfSpeech: "verb",
        engWord: "compile"
      },
      {
        word: "ꝭugeɥ",
        IPA: "/ʂuːˈgeʧ/",
        partOfSpeech: "verb",
        engWord: "liberate"
      },
      {
        word: "ꝭuguɥu",
        IPA: "/ʂuːˈguʧu/",
        partOfSpeech: "noun",
        engWord: "pub"
      },
      {
        word: "ꝭuguɏ",
        IPA: "/ʂuːˈguj/",
        partOfSpeech: "noun",
        engWord: "ferry"
      },
      {
        word: "ꝭuhuꝝe",
        IPA: "/ʂuˈhuːʔe/",
        partOfSpeech: "noun",
        engWord: "kitten"
      },
      {
        word: "ꝭuhudeꝯem",
        IPA: "/ʂuːˈhudeʤem/",
        partOfSpeech: "noun",
        engWord: "graveyard"
      },
      {
        word: "ꝭuhupaɏ",
        IPA: "/ʂuːˈhuːpaːj/",
        partOfSpeech: "noun",
        engWord: "grocer"
      },
      {
        word: "ꝭuꝯa",
        IPA: "/ʂuˈʤa/",
        partOfSpeech: "noun",
        engWord: "centre"
      },
      {
        word: "ꝭuꝯe",
        IPA: "/ʂuˈʤe/",
        partOfSpeech: "verb",
        engWord: "scan"
      },
      {
        word: "ꝭuꝯe",
        IPA: "/ʂuːˈʤe/",
        partOfSpeech: "noun",
        engWord: "grid"
      },
      {
        word: "ꝭuꝯeɥ",
        IPA: "/ʂuˈʤeʧ/",
        partOfSpeech: "adjective",
        engWord: "interior"
      },
      {
        word: "ꝭuꝯeꝷka",
        IPA: "/ʂuːˈʤetka/",
        partOfSpeech: "verb",
        engWord: "occur"
      },
      {
        word: "ꝭuk",
        IPA: "/ʂuk/",
        partOfSpeech: "verb",
        engWord: "found"
      },
      {
        word: "ꝭuk",
        IPA: "/ʂuːk/",
        partOfSpeech: "noun",
        engWord: "field"
      },
      {
        word: "ꝭukaɥ",
        IPA: "/ʂuːˈkaːʧ/",
        partOfSpeech: "noun",
        engWord: "nation"
      },
      {
        word: "ꝭukag",
        IPA: "/ʂuˈkag/",
        partOfSpeech: "noun",
        engWord: "mountain, hill"
      },
      {
        word: "ꝭukiꝝ",
        IPA: "/ʂuːˈkiʔ/",
        partOfSpeech: "adverb",
        engWord: "yesterday"
      },
      {
        word: "ꝭukiɏ",
        IPA: "/ʂuːˈkij/",
        partOfSpeech: "noun",
        engWord: "article"
      },
      {
        word: "ꝭuku",
        IPA: "/ʂuˈkuː/",
        partOfSpeech: "verb",
        engWord: "attribute"
      },
      {
        word: "ꝭumeɥ",
        IPA: "/ʂuːˈmeʧ/",
        partOfSpeech: "verb",
        engWord: "depend"
      },
      {
        word: "ꝭumeɥa",
        IPA: "/ʂuːˈmeʧaː/",
        partOfSpeech: "noun",
        engWord: "bait"
      },
      {
        word: "ꝭumiɏak",
        IPA: "/ʂuˈmijak/",
        partOfSpeech: "adjective",
        engWord: "specific"
      },
      {
        word: "ꝭumuɥ",
        IPA: "/ʂuˈmuʧ/",
        partOfSpeech: "verb",
        engWord: "wonder"
      },
      {
        word: "ꝭumurak",
        IPA: "/ʂuːˈmuɽak/",
        partOfSpeech: "noun",
        engWord: "country"
      },
      {
        word: "ꝭumuꝷe",
        IPA: "/ʂuːˈmuʈe/",
        partOfSpeech: "noun",
        engWord: "balcony"
      },
      {
        word: "ꝭuꞃde",
        IPA: "/ʂuːnˈde/",
        partOfSpeech: "noun",
        engWord: "void"
      },
      {
        word: "ꝭuꞃdegi",
        IPA: "/ʂunˈdegiː/",
        partOfSpeech: "noun",
        engWord: "alcohol"
      },
      {
        word: "ꝭuꞃdeɲaꝝ",
        IPA: "/ʂunˈdeɲaʔ/",
        partOfSpeech: "noun",
        engWord: "apparatus"
      },
      {
        word: "ꝭuꞃe",
        IPA: "/ʂuˈne/",
        partOfSpeech: "noun",
        engWord: "patent"
      },
      {
        word: "ꝭuꞃe",
        IPA: "/ʂuːˈne/",
        partOfSpeech: "noun",
        engWord: "constitution"
      },
      {
        word: "ꝭuꞃeɥ",
        IPA: "/ʂuˈneʧ/",
        partOfSpeech: "noun",
        engWord: "shell"
      },
      {
        word: "ꝭuɲa",
        IPA: "/ʂuˈɲa/",
        partOfSpeech: "noun",
        engWord: "meal"
      },
      {
        word: "ꝭuɲa",
        IPA: "/ʂuːˈɲa/",
        partOfSpeech: "verb",
        engWord: "inspect"
      },
      {
        word: "ꝭuɲaɥ",
        IPA: "/ʂuːˈɲaʧ/",
        partOfSpeech: "noun",
        engWord: "umbrella"
      },
      {
        word: "ꝭuɲaɏ",
        IPA: "/ʂuːˈɲaj/",
        partOfSpeech: "noun",
        engWord: "species"
      },
      {
        word: "ꝭuɲe",
        IPA: "/ʂuˈɲe/",
        partOfSpeech: "verb",
        engWord: "miss (long for)"
      },
      {
        word: "ꝭuɲeɥ",
        IPA: "/ʂuˈɲeʧ/",
        partOfSpeech: "noun",
        engWord: "spectrum"
      },
      {
        word: "ꝭuɲo",
        IPA: "/ʂuːˈɲo/",
        partOfSpeech: "adjective",
        engWord: "composite"
      },
      {
        word: "ꝭuo",
        IPA: "/ʂuːˈo/",
        partOfSpeech: "verb",
        engWord: "catch"
      },
      {
        word: "ꝭuoɥ",
        IPA: "/ʂuˈoʧ/",
        partOfSpeech: "noun",
        engWord: "disaster"
      },
      {
        word: "ꝭupukaɥ",
        IPA: "/ʂuːˈpukaʧ/",
        partOfSpeech: "noun",
        engWord: "chemist"
      },
      {
        word: "ꝭura",
        IPA: "/ʂuˈɽa/",
        partOfSpeech: "adjective",
        engWord: "objective"
      },
      {
        word: "ꝭura",
        IPA: "/ʂuːˈɽa/",
        partOfSpeech: "noun",
        engWord: "fiction"
      },
      {
        word: "ꝭuraɥ",
        IPA: "/ʂuˈɽaːʧ/",
        partOfSpeech: "adjective",
        engWord: "efficient"
      },
      {
        word: "ꝭuꝭoa",
        IPA: "/ʂuːˈʂoa/",
        partOfSpeech: "adverb",
        engWord: "more"
      },
      {
        word: "ꝭuꝭoɥa",
        IPA: "/ʂuːˈʂoʧaː/",
        partOfSpeech: "verb",
        engWord: "ring"
      },
      {
        word: "ꝭuꝭok",
        IPA: "/ʂuːˈʂok/",
        partOfSpeech: "adjective",
        engWord: "long"
      },
      {
        word: "ꝭuꝷa",
        IPA: "/ʂuˈʈa/",
        partOfSpeech: "adjective",
        engWord: "effective"
      },
      {
        word: "ꝭuꝷa",
        IPA: "/ʂuːˈʈa/",
        partOfSpeech: "verb",
        engWord: "jerk"
      },
      {
        word: "ꝭuꝷaɥ",
        IPA: "/ʂuˈʈaʧ/",
        partOfSpeech: "verb",
        engWord: "rob"
      },
      {
        word: "ꝭuꝷaek",
        IPA: "/ʂuˈʈaek/",
        partOfSpeech: "noun",
        engWord: "blouse"
      },
      {
        word: "ꝭuꝷe",
        IPA: "/ʂuˈʈe/",
        partOfSpeech: "noun",
        engWord: "magnet"
      },
      {
        word: "ꝭuꝷkabuk",
        IPA: "/ʂuːtˈkabuk/",
        partOfSpeech: "noun",
        engWord: "public"
      },
      {
        word: "ꝭuꝷoꝷ",
        IPA: "/ʂuːˈtot/",
        partOfSpeech: "noun",
        engWord: "armoury"
      },
      {
        word: "ꝭuꝷu",
        IPA: "/ʂuˈtu/",
        partOfSpeech: "verb",
        engWord: "cooperate"
      },
      {
        word: "ꝭuꝷuk",
        IPA: "/ʂuˈtuk/",
        partOfSpeech: "adjective",
        engWord: "moral"
      },
      {
        word: "ꝭuɏ",
        IPA: "/ʂuːj/",
        partOfSpeech: "noun",
        engWord: "glass"
      },
      {
        word: "ꝭuɏakaɥ",
        IPA: "/ʂuˈjaːkaʧ/",
        partOfSpeech: "noun",
        engWord: "puppy"
      },
      {
        word: "ꝭuɏaꝷo",
        IPA: "/ʂuˈjaʈo/",
        partOfSpeech: "verb",
        engWord: "irrigate"
      },
      {
        word: "ꝷa",
        IPA: "/ta/",
        partOfSpeech: "noun",
        engWord: "floor, ground"
      },
      {
        word: "ꝷa",
        IPA: "/taː/",
        partOfSpeech: "noun",
        engWord: "feather"
      },
      {
        word: "ꝷa",
        IPA: "/ʈa/",
        partOfSpeech: "adverb",
        engWord: "so"
      },
      {
        word: "ꝷa",
        IPA: "/ʈaː/",
        partOfSpeech: "noun",
        engWord: "seat"
      },
      {
        word: "ꝷaꝝe",
        IPA: "/ʈaˈʔeː/",
        partOfSpeech: "noun",
        engWord: "canopy"
      },
      {
        word: "ꝷaa",
        IPA: "/ʈaˈa/",
        partOfSpeech: "noun",
        engWord: "style"
      },
      {
        word: "ꝷaab",
        IPA: "/ʈaˈab/",
        partOfSpeech: "verb",
        engWord: "wind"
      },
      {
        word: "ꝷaaɏ",
        IPA: "/ʈaːˈaj/",
        partOfSpeech: "noun",
        engWord: "stand"
      },
      {
        word: "ꝷab",
        IPA: "/ʈab/",
        partOfSpeech: "verb",
        engWord: "offer"
      },
      {
        word: "ꝷab",
        IPA: "/ʈaːb/",
        partOfSpeech: "noun",
        engWord: "leg"
      },
      {
        word: "ꝷaba",
        IPA: "/taˈbaː/",
        partOfSpeech: "noun",
        engWord: "granite"
      },
      {
        word: "ꝷabip",
        IPA: "/taːˈbip/",
        partOfSpeech: "noun",
        engWord: "premise"
      },
      {
        word: "ꝷabu",
        IPA: "/taˈbuː/",
        partOfSpeech: "verb",
        engWord: "cause"
      },
      {
        word: "ꝷabu",
        IPA: "/ʈaˈbu/",
        partOfSpeech: "verb",
        engWord: "obsess"
      },
      {
        word: "ꝷabu",
        IPA: "/ʈaˈbuː/",
        partOfSpeech: "noun",
        engWord: "capture"
      },
      {
        word: "ꝷabuɏ",
        IPA: "/ʈaˈbuj/",
        partOfSpeech: "adjective",
        engWord: "lazy"
      },
      {
        word: "ꝷaɥ",
        IPA: "/taʧ/",
        partOfSpeech: "adjective",
        engWord: "comic"
      },
      {
        word: "ꝷaɥ",
        IPA: "/taːʧ/",
        partOfSpeech: "adjective",
        engWord: "fair"
      },
      {
        word: "ꝷaɥab",
        IPA: "/ʈaˈʧaːb/",
        partOfSpeech: "noun",
        engWord: "space (outer)"
      },
      {
        word: "ꝷaɥe",
        IPA: "/taːˈʧe/",
        partOfSpeech: "verb",
        engWord: "clarify"
      },
      {
        word: "ꝷaɥi",
        IPA: "/taːˈʧi/",
        partOfSpeech: "verb",
        engWord: "hide"
      },
      {
        word: "ꝷaɥi",
        IPA: "/ʈaˈʧiː/",
        partOfSpeech: "adjective",
        engWord: "huge"
      },
      {
        word: "ꝷaɥu",
        IPA: "/taˈʧu/",
        partOfSpeech: "adverb",
        engWord: "however"
      },
      {
        word: "ꝷaɥu",
        IPA: "/ʈaˈʧuː/",
        partOfSpeech: "noun",
        engWord: "impulse"
      },
      {
        word: "ꝷaɥup",
        IPA: "/taːˈʧup/",
        partOfSpeech: "noun",
        engWord: "avenue"
      },
      {
        word: "ꝷade",
        IPA: "/ʈaˈde/",
        partOfSpeech: "noun",
        engWord: "cigarette"
      },
      {
        word: "ꝷadep",
        IPA: "/taˈdep/",
        partOfSpeech: "adjective",
        engWord: "direct"
      },
      {
        word: "ꝷadep",
        IPA: "/taːˈdep/",
        partOfSpeech: "verb",
        engWord: "manufacture"
      },
      {
        word: "ꝷadeɏ",
        IPA: "/ʈaːˈdej/",
        partOfSpeech: "noun",
        engWord: "news"
      },
      {
        word: "ꝷadu",
        IPA: "/taˈduː/",
        partOfSpeech: "adjective",
        engWord: "false"
      },
      {
        word: "ꝷae",
        IPA: "/taˈe/",
        partOfSpeech: "noun",
        engWord: "niche"
      },
      {
        word: "ꝷae",
        IPA: "/ʈaˈe/",
        partOfSpeech: "adjective",
        engWord: "critical"
      },
      {
        word: "ꝷage",
        IPA: "/ʈaˈge/",
        partOfSpeech: "verb",
        engWord: "hover"
      },
      {
        word: "ꝷage",
        IPA: "/ʈaːˈge/",
        partOfSpeech: "noun",
        engWord: "bone"
      },
      {
        word: "ꝷagga",
        IPA: "/ʈagˈgaː/",
        partOfSpeech: "verb",
        engWord: "amuse"
      },
      {
        word: "ꝷaguɥ",
        IPA: "/taˈguʧ/",
        partOfSpeech: "verb",
        engWord: "dismiss"
      },
      {
        word: "ꝷaꝯaɥ",
        IPA: "/taˈʤaʧ/",
        partOfSpeech: "noun",
        engWord: "charcoal"
      },
      {
        word: "ꝷaꝯe",
        IPA: "/ʈaˈʤe/",
        partOfSpeech: "verb",
        engWord: "reinforce"
      },
      {
        word: "ꝷaꝯeb",
        IPA: "/ʈaˈʤeb/",
        partOfSpeech: "noun",
        engWord: "absence"
      },
      {
        word: "ꝷaka",
        IPA: "/ʈaˈka/",
        partOfSpeech: "noun",
        engWord: "intestine"
      },
      {
        word: "ꝷakuɏ",
        IPA: "/ʈaˈkuːj/",
        partOfSpeech: "noun",
        engWord: "button"
      },
      {
        word: "ꝷame",
        IPA: "/taːˈme/",
        partOfSpeech: "noun",
        engWord: "enterprise"
      },
      {
        word: "ꝷameɏ",
        IPA: "/ʈaˈmej/",
        partOfSpeech: "adjective",
        engWord: "new"
      },
      {
        word: "ꝷami",
        IPA: "/taːˈmiː/",
        partOfSpeech: "adjective",
        engWord: "conscious"
      },
      {
        word: "ꝷami",
        IPA: "/ʈaˈmi/",
        partOfSpeech: "noun",
        engWord: "waiter"
      },
      {
        word: "ꝷami",
        IPA: "/ʈaˈmiː/",
        partOfSpeech: "noun",
        engWord: "memorial"
      },
      {
        word: "ꝷamu",
        IPA: "/ʈaˈmu/",
        partOfSpeech: "noun",
        engWord: "fruit"
      },
      {
        word: "ꝷamuɥ",
        IPA: "/taˈmuʧ/",
        partOfSpeech: "preposition",
        engWord: "worth"
      },
      {
        word: "ꝷamup",
        IPA: "/taˈmup/",
        partOfSpeech: "noun",
        engWord: "potion"
      },
      {
        word: "ꝷamuɏ",
        IPA: "/ʈaˈmuj/",
        partOfSpeech: "noun",
        engWord: "path"
      },
      {
        word: "ꝷaꞃe",
        IPA: "/taˈne/",
        partOfSpeech: "adverb",
        engWord: "eventually"
      },
      {
        word: "ꝷaꞃe",
        IPA: "/taːˈne/",
        partOfSpeech: "verb",
        engWord: "appreciate"
      },
      {
        word: "ꝷaꞃe",
        IPA: "/ʈaˈne/",
        partOfSpeech: "adjective",
        engWord: "armed"
      },
      {
        word: "ꝷaꞃeɥ",
        IPA: "/taˈneʧ/",
        partOfSpeech: "verb",
        engWord: "amend"
      },
      {
        word: "ꝷaꞃep",
        IPA: "/taˈnep/",
        partOfSpeech: "conjunction",
        engWord: "when"
      },
      {
        word: "ꝷaꞃhe",
        IPA: "/ʈanˈhe/",
        partOfSpeech: "adjective",
        engWord: "approximate"
      },
      {
        word: "ꝷaɲ",
        IPA: "/taɲ/",
        partOfSpeech: "adverb",
        engWord: "course"
      },
      {
        word: "ꝷaɲa",
        IPA: "/taˈɲa/",
        partOfSpeech: "noun",
        engWord: "mistress"
      },
      {
        word: "ꝷaɲa",
        IPA: "/ʈanˈja/",
        partOfSpeech: "adjective",
        engWord: "mandatory"
      },
      {
        word: "ꝷaɲaɏ",
        IPA: "/ʈaˈɲaj/",
        partOfSpeech: "noun",
        engWord: "sensation"
      },
      {
        word: "ꝷaɲaɏ",
        IPA: "/ʈaˈɲaːj/",
        partOfSpeech: "noun",
        engWord: "manager"
      },
      {
        word: "ꝷaɲo",
        IPA: "/ʈaˈɲo/",
        partOfSpeech: "verb",
        engWord: "invite"
      },
      {
        word: "ꝷap",
        IPA: "/tap/",
        partOfSpeech: "conjunction",
        engWord: "and"
      },
      {
        word: "ꝷap",
        IPA: "/taːp/",
        partOfSpeech: "adjective",
        engWord: "short"
      },
      {
        word: "ꝷara",
        IPA: "/ʈaˈɽa/",
        partOfSpeech: "verb",
        engWord: "tackle"
      },
      {
        word: "ꝷaraɥ",
        IPA: "/taˈɽaːʧ/",
        partOfSpeech: "noun",
        engWord: "verge"
      },
      {
        word: "ꝷaꝭ",
        IPA: "/ʈaʂ/",
        partOfSpeech: "noun",
        engWord: "population"
      },
      {
        word: "ꝷaꝭoɥ",
        IPA: "/taˈʂoʧ/",
        partOfSpeech: "verb",
        engWord: "dart"
      },
      {
        word: "ꝷaꝷa",
        IPA: "/taˈʈa/",
        partOfSpeech: "noun",
        engWord: "specialty"
      },
      {
        word: "ꝷaꝷa",
        IPA: "/ʈaˈʈa/",
        partOfSpeech: "adjective",
        engWord: "premier"
      },
      {
        word: "ꝷaꝷa",
        IPA: "/ʈaːˈʈa/",
        partOfSpeech: "verb",
        engWord: "spell"
      },
      {
        word: "ꝷaꝷe",
        IPA: "/ʈaːˈʈe/",
        partOfSpeech: "noun",
        engWord: "therapy"
      },
      {
        word: "ꝷaꝷka",
        IPA: "/ʈatˈka/",
        partOfSpeech: "verb",
        engWord: "whisk"
      },
      {
        word: "ꝷaɏ",
        IPA: "/ʈaj/",
        partOfSpeech: "noun",
        engWord: "human"
      },
      {
        word: "ꝷaɏ",
        IPA: "/ʈaːj/",
        partOfSpeech: "verb",
        engWord: "abolish"
      },
      {
        word: "ꝷaɏa",
        IPA: "/ʈaˈja/",
        partOfSpeech: "adjective",
        engWord: "homosexual"
      },
      {
        word: "ꝷe",
        IPA: "/te/",
        partOfSpeech: "determiner",
        engWord: "that"
      },
      {
        word: "ꝷe",
        IPA: "/teː/",
        partOfSpeech: "determiner",
        engWord: "such"
      },
      {
        word: "ꝷe",
        IPA: "/ʈe/",
        partOfSpeech: "verb",
        engWord: "hear"
      },
      {
        word: "ꝷe",
        IPA: "/ʈeː/",
        partOfSpeech: "verb",
        engWord: "mention"
      },
      {
        word: "ꝷeꝝ",
        IPA: "/ʈeʔ/",
        partOfSpeech: "noun",
        engWord: "voice"
      },
      {
        word: "ꝷeꝝ",
        IPA: "/ʈeːʔ/",
        partOfSpeech: "noun",
        engWord: "name"
      },
      {
        word: "ꝷeꝝeꝝ",
        IPA: "/ʈeːˈʔeʔ/",
        partOfSpeech: "noun",
        engWord: "loser"
      },
      {
        word: "ꝷeꝝem",
        IPA: "/teˈʔem/",
        partOfSpeech: "verb",
        engWord: "build"
      },
      {
        word: "ꝷea",
        IPA: "/teˈaː/",
        partOfSpeech: "noun",
        engWord: "gate"
      },
      {
        word: "ꝷea",
        IPA: "/ʈeˈa/",
        partOfSpeech: "verb",
        engWord: "implement"
      },
      {
        word: "ꝷea",
        IPA: "/ʈeːˈa/",
        partOfSpeech: "adjective",
        engWord: "vicious"
      },
      {
        word: "ꝷeb",
        IPA: "/ʈeb/",
        partOfSpeech: "noun",
        engWord: "data"
      },
      {
        word: "ꝷeb",
        IPA: "/ʈeːb/",
        partOfSpeech: "conjunction",
        engWord: "or"
      },
      {
        word: "ꝷebi",
        IPA: "/teːˈbiː/",
        partOfSpeech: "adjective",
        engWord: "regular"
      },
      {
        word: "ꝷebiꝝ",
        IPA: "/ʈeːˈbiːʔ/",
        partOfSpeech: "noun",
        engWord: "grass"
      },
      {
        word: "ꝷebim",
        IPA: "/ʈeˈbiːm/",
        partOfSpeech: "preposition",
        engWord: "on"
      },
      {
        word: "ꝷebu",
        IPA: "/teːˈbuː/",
        partOfSpeech: "noun",
        engWord: "engine"
      },
      {
        word: "ꝷebu",
        IPA: "/ʈeˈbu/",
        partOfSpeech: "verb",
        engWord: "volunteer"
      },
      {
        word: "ꝷebu",
        IPA: "/ʈeˈbuː/",
        partOfSpeech: "verb",
        engWord: "whisper"
      },
      {
        word: "ꝷebu",
        IPA: "/ʈeːˈbuː/",
        partOfSpeech: "noun",
        engWord: "sweater"
      },
      {
        word: "ꝷebuꝝ",
        IPA: "/ʈeːˈbuːʔ/",
        partOfSpeech: "verb",
        engWord: "blossom"
      },
      {
        word: "ꝷebɏa",
        IPA: "/ʈeːˈbja/",
        partOfSpeech: "noun",
        engWord: "footpath, sidewalk"
      },
      {
        word: "ꝷeɥ",
        IPA: "/teʧ/",
        partOfSpeech: "preposition",
        engWord: "without"
      },
      {
        word: "ꝷeɥ",
        IPA: "/teːʧ/",
        partOfSpeech: "verb",
        engWord: "rest"
      },
      {
        word: "ꝷeɥaꝷ",
        IPA: "/teˈʧaːt/",
        partOfSpeech: "noun",
        engWord: "fin (of fish)"
      },
      {
        word: "ꝷeɥe",
        IPA: "/teːˈʧe/",
        partOfSpeech: "noun",
        engWord: "concrete"
      },
      {
        word: "ꝷeɥeꝝ",
        IPA: "/ʈeˈʧeʔ/",
        partOfSpeech: "verb",
        engWord: "fold",
        partOfSpeech2: "noun",
        engWord2: "fold"
      },
      {
        word: "ꝷeɥi",
        IPA: "/teˈʧiː/",
        partOfSpeech: "noun",
        engWord: "shrine"
      },
      {
        word: "ꝷeɥi",
        IPA: "/teːˈʧiː/",
        partOfSpeech: "noun",
        engWord: "militia"
      },
      {
        word: "ꝷeɥu",
        IPA: "/teˈʧu/",
        partOfSpeech: "verb",
        engWord: "induce"
      },
      {
        word: "ꝷeɥu",
        IPA: "/teːˈʧuː/",
        partOfSpeech: "noun",
        engWord: "dusk"
      },
      {
        word: "ꝷeɥum",
        IPA: "/ʈeˈʧuːm/",
        partOfSpeech: "adjective",
        engWord: "lethal"
      },
      {
        word: "ꝷede",
        IPA: "/teːˈde/",
        partOfSpeech: "noun",
        engWord: "beach"
      },
      {
        word: "ꝷedem",
        IPA: "/teˈdem/",
        partOfSpeech: "noun",
        engWord: "individual"
      },
      {
        word: "ꝷeduɥ",
        IPA: "/teˈduːʧ/",
        partOfSpeech: "adjective",
        engWord: "possible"
      },
      {
        word: "ꝷee",
        IPA: "/teˈe/",
        partOfSpeech: "verb",
        engWord: "could"
      },
      {
        word: "ꝷege",
        IPA: "/teˈge/",
        partOfSpeech: "verb",
        engWord: "make"
      },
      {
        word: "ꝷege",
        IPA: "/ʈeːˈge/",
        partOfSpeech: "noun",
        engWord: "paste"
      },
      {
        word: "ꝷegeɥ",
        IPA: "/teːˈgeʧ/",
        partOfSpeech: "noun",
        engWord: "adversary"
      },
      {
        word: "ꝷegi",
        IPA: "/teˈgiː/",
        partOfSpeech: "noun",
        engWord: "plug"
      },
      {
        word: "ꝷegi",
        IPA: "/ʈeːˈgiː/",
        partOfSpeech: "adverb",
        engWord: "why"
      },
      {
        word: "ꝷegiɥ",
        IPA: "/teˈgiːʧ/",
        partOfSpeech: "verb",
        engWord: "swallow"
      },
      {
        word: "ꝷegu",
        IPA: "/teˈgu/",
        partOfSpeech: "noun",
        engWord: "prey"
      },
      {
        word: "ꝷegu",
        IPA: "/ʈeˈgu/",
        partOfSpeech: "adverb",
        engWord: "nevertheless, regardless, even though"
      },
      {
        word: "ꝷegum",
        IPA: "/teːˈguːm/",
        partOfSpeech: "noun",
        engWord: "stride"
      },
      {
        word: "ꝷeguꝷ",
        IPA: "/teˈgut/",
        partOfSpeech: "noun",
        engWord: "persona"
      },
      {
        word: "ꝷeꝯaꝝ",
        IPA: "/ʈeˈʤaʔ/",
        partOfSpeech: "noun",
        engWord: "tuna"
      },
      {
        word: "ꝷeꝯam",
        IPA: "/ʈeˈʤam/",
        partOfSpeech: "noun",
        engWord: "exit"
      },
      {
        word: "ꝷeꝯe",
        IPA: "/teˈʤe/",
        partOfSpeech: "adjective",
        engWord: "current"
      },
      {
        word: "ꝷeꝯe",
        IPA: "/teːˈʤe/",
        partOfSpeech: "noun",
        engWord: "game"
      },
      {
        word: "ꝷeꝯem",
        IPA: "/teːˈʤem/",
        partOfSpeech: "adjective",
        engWord: "orthodox"
      },
      {
        word: "ꝷeka",
        IPA: "/teːˈka/",
        partOfSpeech: "adjective",
        engWord: "sober"
      },
      {
        word: "ꝷeka",
        IPA: "/teːˈkaː/",
        partOfSpeech: "noun",
        engWord: "credential"
      },
      {
        word: "ꝷekab",
        IPA: "/ʈeˈkab/",
        partOfSpeech: "adjective",
        engWord: "massive"
      },
      {
        word: "ꝷekam",
        IPA: "/teˈkaːm/",
        partOfSpeech: "noun",
        engWord: "realm"
      },
      {
        word: "ꝷekaꝷ",
        IPA: "/teːˈkat/",
        partOfSpeech: "noun",
        engWord: "lottery"
      },
      {
        word: "ꝷeku",
        IPA: "/teˈkuː/",
        partOfSpeech: "noun",
        engWord: "boulder"
      },
      {
        word: "ꝷeku",
        IPA: "/ʈeːˈkuː/",
        partOfSpeech: "noun",
        engWord: "icon"
      },
      {
        word: "ꝷeỻ",
        IPA: "/ʈeɭ/",
        partOfSpeech: "noun",
        engWord: "instrument"
      },
      {
        word: "ꝷem",
        IPA: "/tem/",
        partOfSpeech: "noun",
        engWord: "trade"
      },
      {
        word: "ꝷem",
        IPA: "/teːm/",
        partOfSpeech: "adjective",
        engWord: "medium"
      },
      {
        word: "ꝷem",
        IPA: "/ʈem/",
        partOfSpeech: "noun",
        engWord: "technology"
      },
      {
        word: "ꝷeme",
        IPA: "/teˈme/",
        partOfSpeech: "noun",
        engWord: "chore"
      },
      {
        word: "ꝷeme",
        IPA: "/ʈeˈme/",
        partOfSpeech: "noun",
        engWord: "toe"
      },
      {
        word: "ꝷemi",
        IPA: "/ʈeˈmi/",
        partOfSpeech: "verb",
        engWord: "underscore"
      },
      {
        word: "ꝷemiꝝ",
        IPA: "/ʈeˈmiːʔ/",
        partOfSpeech: "verb",
        engWord: "deploy"
      },
      {
        word: "ꝷemiꝷ",
        IPA: "/teˈmiːt/",
        partOfSpeech: "noun",
        engWord: "biology"
      },
      {
        word: "ꝷemu",
        IPA: "/teˈmu/",
        partOfSpeech: "noun",
        engWord: "bed"
      },
      {
        word: "ꝷemu",
        IPA: "/ʈeˈmuː/",
        partOfSpeech: "noun",
        engWord: "liver"
      },
      {
        word: "ꝷeꞃde",
        IPA: "/teːnˈde/",
        partOfSpeech: "noun",
        engWord: "picnic"
      },
      {
        word: "ꝷeꞃe",
        IPA: "/teˈne/",
        partOfSpeech: "noun",
        engWord: "salon"
      },
      {
        word: "ꝷeꞃe",
        IPA: "/ʈeˈne/",
        partOfSpeech: "noun",
        engWord: "recreation"
      },
      {
        word: "ꝷeꞃe",
        IPA: "/ʈeːˈne/",
        partOfSpeech: "verb",
        engWord: "masturbate"
      },
      {
        word: "ꝷeꞃeb",
        IPA: "/ʈeːˈneb/",
        partOfSpeech: "verb",
        engWord: "wake up"
      },
      {
        word: "ꝷeꞃeɥ",
        IPA: "/teˈneʧ/",
        partOfSpeech: "noun",
        engWord: "work"
      },
      {
        word: "ꝷeꞃheb",
        IPA: "/ʈeːnˈheb/",
        partOfSpeech: "adverb",
        engWord: "regardless"
      },
      {
        word: "ꝷeɲa",
        IPA: "/tenˈja/",
        partOfSpeech: "noun",
        engWord: "room (space)"
      },
      {
        word: "ꝷeɲa",
        IPA: "/teˈɲa/",
        partOfSpeech: "noun",
        engWord: "grade"
      },
      {
        word: "ꝷeɲa",
        IPA: "/teːˈɲa/",
        partOfSpeech: "adverb",
        engWord: "anymore"
      },
      {
        word: "ꝷeɲa",
        IPA: "/ʈeˈɲa/",
        partOfSpeech: "noun",
        engWord: "trousers, pants"
      },
      {
        word: "ꝷeɲab",
        IPA: "/ʈenˈjab/",
        partOfSpeech: "noun",
        engWord: "sphere"
      },
      {
        word: "ꝷeɲab",
        IPA: "/ʈeˈɲab/",
        partOfSpeech: "verb",
        engWord: "vary"
      },
      {
        word: "ꝷeɲaꝷ",
        IPA: "/teːˈɲat/",
        partOfSpeech: "adjective",
        engWord: "rational"
      },
      {
        word: "ꝷeɲe",
        IPA: "/teˈɲe/",
        partOfSpeech: "noun",
        engWord: "mustard"
      },
      {
        word: "ꝷeɲeɥ",
        IPA: "/teˈɲeʧ/",
        partOfSpeech: "verb",
        engWord: "groan"
      },
      {
        word: "ꝷeo",
        IPA: "/teˈo/",
        partOfSpeech: "noun",
        engWord: "strand"
      },
      {
        word: "ꝷeom",
        IPA: "/ʈeˈom/",
        partOfSpeech: "noun",
        engWord: "person"
      },
      {
        word: "ꝷeraꝝ",
        IPA: "/ʈeːˈɽaʔ/",
        partOfSpeech: "adjective",
        engWord: "volatile"
      },
      {
        word: "ꝷeꝷ",
        IPA: "/tet/",
        partOfSpeech: "adverb",
        engWord: "where"
      },
      {
        word: "ꝷeꝷ",
        IPA: "/teːt/",
        partOfSpeech: "adjective",
        engWord: "wise"
      },
      {
        word: "ꝷeꝷa",
        IPA: "/ʈeˈʈa/",
        partOfSpeech: "adjective",
        engWord: "tired"
      },
      {
        word: "ꝷeꝷab",
        IPA: "/ʈeˈʈab/",
        partOfSpeech: "verb",
        engWord: "wade"
      },
      {
        word: "ꝷeꝷe",
        IPA: "/teːˈʈe/",
        partOfSpeech: "verb",
        engWord: "accuse"
      },
      {
        word: "ꝷeꝷeɥ",
        IPA: "/teˈʈeʧ/",
        partOfSpeech: "noun",
        engWord: "future"
      },
      {
        word: "ꝷeꝷem",
        IPA: "/teˈʈem/",
        partOfSpeech: "adjective",
        engWord: "light (weight)"
      },
      {
        word: "ꝷeꝷeꝷ",
        IPA: "/teːˈʈet/",
        partOfSpeech: "noun",
        engWord: "husband"
      },
      {
        word: "ꝷeꝷo",
        IPA: "/ʈeˈʈo/",
        partOfSpeech: "adjective",
        engWord: "awesome"
      },
      {
        word: "ꝷeu",
        IPA: "/teːˈu/",
        partOfSpeech: "noun",
        engWord: "vine"
      },
      {
        word: "ꝷeu",
        IPA: "/ʈeˈuː/",
        partOfSpeech: "adjective",
        engWord: "confident"
      },
      {
        word: "ꝷeɏa",
        IPA: "/ʈeˈja/",
        partOfSpeech: "verb",
        engWord: "dial"
      },
      {
        word: "ꝷeɏab",
        IPA: "/ʈeˈjab/",
        partOfSpeech: "verb",
        engWord: "imply"
      },
      {
        word: "ꝷi",
        IPA: "/ti/",
        partOfSpeech: "verb",
        engWord: "cut",
        partOfSpeech2: "noun",
        engWord2: "cut"
      },
      {
        word: "ꝷi",
        IPA: "/tiː/",
        partOfSpeech: "verb",
        engWord: "put"
      },
      {
        word: "ꝷi",
        IPA: "/ʈi/",
        partOfSpeech: "noun",
        engWord: "tax"
      },
      {
        word: "ꝷi",
        IPA: "/ʈiː/",
        partOfSpeech: "noun",
        engWord: "business"
      },
      {
        word: "ꝷiꝝe",
        IPA: "/tiːˈʔe/",
        partOfSpeech: "verb",
        engWord: "lick"
      },
      {
        word: "ꝷiꝝeɏ",
        IPA: "/ʈiːˈʔej/",
        partOfSpeech: "adverb",
        engWord: "up"
      },
      {
        word: "ꝷiꝝom",
        IPA: "/ʈiːˈʔom/",
        partOfSpeech: "noun",
        engWord: "link"
      },
      {
        word: "ꝷia",
        IPA: "/tiːˈaː/",
        partOfSpeech: "noun",
        engWord: "midst"
      },
      {
        word: "ꝷia",
        IPA: "/ʈiˈa/",
        partOfSpeech: "noun",
        engWord: "astronomy"
      },
      {
        word: "ꝷia",
        IPA: "/ʈiːˈa/",
        partOfSpeech: "verb",
        engWord: "permit"
      },
      {
        word: "ꝷib",
        IPA: "/tiːb/",
        partOfSpeech: "noun",
        engWord: "acid"
      },
      {
        word: "ꝷiba",
        IPA: "/ʈiːˈbaː/",
        partOfSpeech: "noun",
        engWord: "fuse"
      },
      {
        word: "ꝷibam",
        IPA: "/ʈiːˈbaːm/",
        partOfSpeech: "verb",
        engWord: "increase"
      },
      {
        word: "ꝷibi",
        IPA: "/tiːˈbiː/",
        partOfSpeech: "noun",
        engWord: "melody"
      },
      {
        word: "ꝷibup",
        IPA: "/tiˈbup/",
        partOfSpeech: "adverb",
        engWord: "out"
      },
      {
        word: "ꝷibuɏ",
        IPA: "/ʈiːˈbuːj/",
        partOfSpeech: "noun",
        engWord: "summary"
      },
      {
        word: "ꝷiɥ",
        IPA: "/tiʧ/",
        partOfSpeech: "noun",
        engWord: "carrier"
      },
      {
        word: "ꝷiɥ",
        IPA: "/tiːʧ/",
        partOfSpeech: "preposition",
        engWord: "between"
      },
      {
        word: "ꝷiɥa",
        IPA: "/ʈiːˈʧaː/",
        partOfSpeech: "noun",
        engWord: "catalogue"
      },
      {
        word: "ꝷiɥim",
        IPA: "/ʈiːˈʧiːm/",
        partOfSpeech: "adjective",
        engWord: "happy"
      },
      {
        word: "ꝷiɥu",
        IPA: "/ʈiːˈʧuː/",
        partOfSpeech: "adjective",
        engWord: "severe"
      },
      {
        word: "ꝷide",
        IPA: "/ʈiˈde/",
        partOfSpeech: "noun",
        engWord: "provision"
      },
      {
        word: "ꝷide",
        IPA: "/ʈiːˈde/",
        partOfSpeech: "verb",
        engWord: "smell (emit odour)"
      },
      {
        word: "ꝷieb",
        IPA: "/tiːˈeb/",
        partOfSpeech: "noun",
        engWord: "buffalo"
      },
      {
        word: "ꝷieɏ",
        IPA: "/ʈiːˈej/",
        partOfSpeech: "adverb",
        engWord: "already"
      },
      {
        word: "ꝷige",
        IPA: "/tiˈge/",
        partOfSpeech: "noun",
        engWord: "finger"
      },
      {
        word: "ꝷiꝯaɏ",
        IPA: "/ʈiˈʤaj/",
        partOfSpeech: "verb",
        engWord: "fight",
        partOfSpeech2: "noun",
        engWord2: "fight"
      },
      {
        word: "ꝷiꝯe",
        IPA: "/ʈiːˈʤe/",
        partOfSpeech: "verb",
        engWord: "pronounce"
      },
      {
        word: "ꝷiꝯo",
        IPA: "/tiːˈʤo/",
        partOfSpeech: "verb",
        engWord: "blast"
      },
      {
        word: "ꝷika",
        IPA: "/tiːˈka/",
        partOfSpeech: "preposition",
        engWord: "per"
      },
      {
        word: "ꝷika",
        IPA: "/ʈiːˈka/",
        partOfSpeech: "noun",
        engWord: "saint"
      },
      {
        word: "ꝷika",
        IPA: "/ʈiːˈkaː/",
        partOfSpeech: "noun",
        engWord: "beverage"
      },
      {
        word: "ꝷim",
        IPA: "/ʈim/",
        partOfSpeech: "noun",
        engWord: "fear"
      },
      {
        word: "ꝷim",
        IPA: "/ʈiːm/",
        partOfSpeech: "noun",
        engWord: "bear"
      },
      {
        word: "ꝷimu",
        IPA: "/ʈiːˈmuː/",
        partOfSpeech: "verb",
        engWord: "fling"
      },
      {
        word: "ꝷimup",
        IPA: "/tiːˈmup/",
        partOfSpeech: "noun",
        engWord: "zoo"
      },
      {
        word: "ꝷiꞃe",
        IPA: "/tiːˈne/",
        partOfSpeech: "noun",
        engWord: "seizure"
      },
      {
        word: "ꝷiɲa",
        IPA: "/tiˈɲa/",
        partOfSpeech: "verb",
        engWord: "bond"
      },
      {
        word: "ꝷiɲe",
        IPA: "/tiːˈɲe/",
        partOfSpeech: "verb",
        engWord: "detect"
      },
      {
        word: "ꝷip",
        IPA: "/tip/",
        partOfSpeech: "verb",
        engWord: "teach"
      },
      {
        word: "ꝷip",
        IPA: "/tiːp/",
        partOfSpeech: "verb",
        engWord: "forget"
      },
      {
        word: "ꝷira",
        IPA: "/tiːˈɽa/",
        partOfSpeech: "verb",
        engWord: "revise"
      },
      {
        word: "ꝷirap",
        IPA: "/tiːˈɽap/",
        partOfSpeech: "noun",
        engWord: "transition"
      },
      {
        word: "ꝷiꝭaɥ",
        IPA: "/tiːˈʂaʧ/",
        partOfSpeech: "noun",
        engWord: "bracelet"
      },
      {
        word: "ꝷiꝭo",
        IPA: "/tiˈʂo/",
        partOfSpeech: "adjective",
        engWord: "antique"
      },
      {
        word: "ꝷiꝷa",
        IPA: "/tiˈʈa/",
        partOfSpeech: "noun",
        engWord: "archive"
      },
      {
        word: "ꝷiꝷa",
        IPA: "/tiːˈʈa/",
        partOfSpeech: "verb",
        engWord: "donate"
      },
      {
        word: "ꝷiꝷe",
        IPA: "/tiːˈʈe/",
        partOfSpeech: "noun",
        engWord: "luggage"
      },
      {
        word: "ꝷiꝷeɥ",
        IPA: "/tiːˈʈeʧ/",
        partOfSpeech: "verb",
        engWord: "dine"
      },
      {
        word: "ꝷiꝷu",
        IPA: "/ʈiˈtu/",
        partOfSpeech: "noun",
        engWord: "wedge"
      },
      {
        word: "ꝷiꝷum",
        IPA: "/ʈiːˈtum/",
        partOfSpeech: "noun",
        engWord: "silk"
      },
      {
        word: "ꝷiu",
        IPA: "/ʈiˈuː/",
        partOfSpeech: "noun",
        engWord: "tap"
      },
      {
        word: "ꝷiɏ",
        IPA: "/ʈij/",
        partOfSpeech: "noun",
        engWord: "grease"
      },
      {
        word: "ꝷiɏ",
        IPA: "/ʈiːj/",
        partOfSpeech: "noun",
        engWord: "mind"
      },
      {
        word: "ꝷo",
        IPA: "/to/",
        partOfSpeech: "noun",
        engWord: "man",
        partOfSpeech2: "adjective",
        engWord2: "male"
      },
      {
        word: "ꝷo",
        IPA: "/ʈo/",
        partOfSpeech: "noun",
        engWord: "fat"
      },
      {
        word: "ꝷoꝝ",
        IPA: "/ʈoʔ/",
        partOfSpeech: "noun",
        engWord: "night"
      },
      {
        word: "ꝷoꝝe",
        IPA: "/ʈoˈʔe/",
        partOfSpeech: "verb",
        engWord: "hint",
        partOfSpeech2: "noun",
        engWord2: "hint"
      },
      {
        word: "ꝷoꝝeꝝ",
        IPA: "/ʈoˈʔeːʔ/",
        partOfSpeech: "adjective",
        engWord: "eager"
      },
      {
        word: "ꝷoꝝeb",
        IPA: "/ʈoˈʔeb/",
        partOfSpeech: "noun",
        engWord: "wish"
      },
      {
        word: "ꝷoꝝem",
        IPA: "/toˈʔem/",
        partOfSpeech: "noun",
        engWord: "hut"
      },
      {
        word: "ꝷoa",
        IPA: "/toˈa/",
        partOfSpeech: "pronoun",
        engWord: "nothing"
      },
      {
        word: "ꝷoa",
        IPA: "/toˈaː/",
        partOfSpeech: "noun",
        engWord: "stick (of tree)"
      },
      {
        word: "ꝷoad",
        IPA: "/toˈad/",
        partOfSpeech: "noun",
        engWord: "moment"
      },
      {
        word: "ꝷoam",
        IPA: "/toˈam/",
        partOfSpeech: "noun",
        engWord: "lodge"
      },
      {
        word: "ꝷoaꝭ",
        IPA: "/ʈoˈaʂ/",
        partOfSpeech: "adjective",
        engWord: "furious"
      },
      {
        word: "ꝷob",
        IPA: "/ʈob/",
        partOfSpeech: "verb",
        engWord: "get"
      },
      {
        word: "ꝷobi",
        IPA: "/toˈbi/",
        partOfSpeech: "noun",
        engWord: "stream"
      },
      {
        word: "ꝷobi",
        IPA: "/toˈbiː/",
        partOfSpeech: "noun",
        engWord: "delight"
      },
      {
        word: "ꝷobi",
        IPA: "/ʈoˈbi/",
        partOfSpeech: "noun",
        engWord: "homeland, motherland"
      },
      {
        word: "ꝷobi",
        IPA: "/ʈoˈbiː/",
        partOfSpeech: "noun",
        engWord: "triangle"
      },
      {
        word: "ꝷobib",
        IPA: "/ʈoˈbib/",
        partOfSpeech: "preposition",
        engWord: "alongside, as well as"
      },
      {
        word: "ꝷobiɲ",
        IPA: "/toˈbiːɲ/",
        partOfSpeech: "verb",
        engWord: "access"
      },
      {
        word: "ꝷobu",
        IPA: "/toˈbu/",
        partOfSpeech: "verb",
        engWord: "sink"
      },
      {
        word: "ꝷobu",
        IPA: "/toˈbuː/",
        partOfSpeech: "verb",
        engWord: "wield"
      },
      {
        word: "ꝷobu",
        IPA: "/ʈoˈbuː/",
        partOfSpeech: "verb",
        engWord: "focus"
      },
      {
        word: "ꝷobɏoɥ",
        IPA: "/toˈbjoʧ/",
        partOfSpeech: "noun",
        engWord: "urge"
      },
      {
        word: "ꝷoɥ",
        IPA: "/toʧ/",
        partOfSpeech: "verb",
        engWord: "must"
      },
      {
        word: "ꝷoɥa",
        IPA: "/toˈʧaː/",
        partOfSpeech: "noun",
        engWord: "music"
      },
      {
        word: "ꝷoɥaꝷ",
        IPA: "/toˈʧaːt/",
        partOfSpeech: "verb",
        engWord: "accomplish"
      },
      {
        word: "ꝷoɥe",
        IPA: "/ʈoˈʧe/",
        partOfSpeech: "verb",
        engWord: "praise"
      },
      {
        word: "ꝷoɥeb",
        IPA: "/ʈoˈʧeb/",
        partOfSpeech: "noun",
        engWord: "rope"
      },
      {
        word: "ꝷoɥi",
        IPA: "/ʈoˈʧiː/",
        partOfSpeech: "noun",
        engWord: "canvas"
      },
      {
        word: "ꝷoɥim",
        IPA: "/toˈʧiːm/",
        partOfSpeech: "noun",
        engWord: "encounter"
      },
      {
        word: "ꝷoɥu",
        IPA: "/toˈʧu/",
        partOfSpeech: "verb",
        engWord: "fascinate"
      },
      {
        word: "ꝷoɥu",
        IPA: "/toˈʧuː/",
        partOfSpeech: "noun",
        engWord: "goat"
      },
      {
        word: "ꝷoɥu",
        IPA: "/ʈoˈʧuː/",
        partOfSpeech: "number",
        engWord: "first"
      },
      {
        word: "ꝷoɥub",
        IPA: "/ʈoˈʧub/",
        partOfSpeech: "verb",
        engWord: "glare"
      },
      {
        word: "ꝷoɥuɥ",
        IPA: "/toˈʧuːʧ/",
        partOfSpeech: "verb",
        engWord: "fix, mend"
      },
      {
        word: "ꝷod",
        IPA: "/tod/",
        partOfSpeech: "preposition",
        engWord: "like"
      },
      {
        word: "ꝷode",
        IPA: "/toˈde/",
        partOfSpeech: "verb",
        engWord: "enjoy"
      },
      {
        word: "ꝷoe",
        IPA: "/toˈe/",
        partOfSpeech: "noun",
        engWord: "minute"
      },
      {
        word: "ꝷoe",
        IPA: "/toˈeː/",
        partOfSpeech: "noun",
        engWord: "mood"
      },
      {
        word: "ꝷoeꝝ",
        IPA: "/ʈoˈeːʔ/",
        partOfSpeech: "noun",
        engWord: "bird"
      },
      {
        word: "ꝷoeb",
        IPA: "/ʈoˈeb/",
        partOfSpeech: "noun",
        engWord: "office"
      },
      {
        word: "ꝷoed",
        IPA: "/toˈed/",
        partOfSpeech: "verb",
        engWord: "disturb"
      },
      {
        word: "ꝷoeꝷ",
        IPA: "/toˈet/",
        partOfSpeech: "noun",
        engWord: "fatigue"
      },
      {
        word: "ꝷoge",
        IPA: "/toˈge/",
        partOfSpeech: "noun",
        engWord: "humour"
      },
      {
        word: "ꝷogem",
        IPA: "/toˈgem/",
        partOfSpeech: "noun",
        engWord: "caution"
      },
      {
        word: "ꝷogi",
        IPA: "/ʈoˈgiː/",
        partOfSpeech: "adjective",
        engWord: "primitive"
      },
      {
        word: "ꝷogu",
        IPA: "/ʈoˈgu/",
        partOfSpeech: "adjective",
        engWord: "general"
      },
      {
        word: "ꝷoha",
        IPA: "/toˈha/",
        partOfSpeech: "noun",
        engWord: "stem"
      },
      {
        word: "ꝷoha",
        IPA: "/ʈoˈha/",
        partOfSpeech: "noun",
        engWord: "asteroid"
      },
      {
        word: "ꝷohaꝷ",
        IPA: "/toˈhat/",
        partOfSpeech: "noun",
        engWord: "supper"
      },
      {
        word: "ꝷoi",
        IPA: "/toˈiː/",
        partOfSpeech: "verb",
        engWord: "topple"
      },
      {
        word: "ꝷoꝯe",
        IPA: "/toˈʤe/",
        partOfSpeech: "noun",
        engWord: "result"
      },
      {
        word: "ꝷoꝯe",
        IPA: "/ʈoˈʤe/",
        partOfSpeech: "verb",
        engWord: "stalk"
      },
      {
        word: "ꝷoꝯeb",
        IPA: "/ʈoˈʤeːb/",
        partOfSpeech: "verb",
        engWord: "replicate"
      },
      {
        word: "ꝷoꝯem",
        IPA: "/toˈʤem/",
        partOfSpeech: "noun",
        engWord: "pedestrian"
      },
      {
        word: "ꝷoꝯeꝭ",
        IPA: "/ʈoˈʤeʂ/",
        partOfSpeech: "verb",
        engWord: "conquer"
      },
      {
        word: "ꝷoꝯo",
        IPA: "/toˈʤo/",
        partOfSpeech: "verb",
        engWord: "spin"
      },
      {
        word: "ꝷoka",
        IPA: "/toˈka/",
        partOfSpeech: "noun",
        engWord: "salt"
      },
      {
        word: "ꝷoka",
        IPA: "/ʈoˈka/",
        partOfSpeech: "verb",
        engWord: "advertise"
      },
      {
        word: "ꝷokab",
        IPA: "/ʈoˈkab/",
        partOfSpeech: "noun",
        engWord: "girlfriend"
      },
      {
        word: "ꝷoki",
        IPA: "/toˈki/",
        partOfSpeech: "noun",
        engWord: "administration"
      },
      {
        word: "ꝷoku",
        IPA: "/toˈkuː/",
        partOfSpeech: "c.",
        engWord: "albeit"
      },
      {
        word: "ꝷoku",
        IPA: "/ʈoˈkuː/",
        partOfSpeech: "verb",
        engWord: "mock"
      },
      {
        word: "ꝷom",
        IPA: "/tom/",
        partOfSpeech: "conjunction",
        engWord: "as"
      },
      {
        word: "ꝷome",
        IPA: "/toˈme/",
        partOfSpeech: "adjective",
        engWord: "explicit"
      },
      {
        word: "ꝷomu",
        IPA: "/ʈoˈmu/",
        partOfSpeech: "adjective",
        engWord: "cozy"
      },
      {
        word: "ꝷomud",
        IPA: "/toˈmud/",
        partOfSpeech: "noun",
        engWord: "kindergarten"
      },
      {
        word: "ꝷomud",
        IPA: "/toˈmuːd/",
        partOfSpeech: "noun",
        engWord: "cell"
      },
      {
        word: "ꝷomuꝷ",
        IPA: "/toˈmut/",
        partOfSpeech: "adjective",
        engWord: "warm"
      },
      {
        word: "ꝷoꞃde",
        IPA: "/ʈonˈde/",
        partOfSpeech: "verb",
        engWord: "gear"
      },
      {
        word: "ꝷoꞃe",
        IPA: "/toˈne/",
        partOfSpeech: "noun",
        engWord: "rhetoric"
      },
      {
        word: "ꝷoꞃem",
        IPA: "/toˈnem/",
        partOfSpeech: "adjective",
        engWord: "easy"
      },
      {
        word: "ꝷoꞃu",
        IPA: "/toˈnu/",
        partOfSpeech: "verb",
        engWord: "rinse"
      },
      {
        word: "ꝷoꞃu",
        IPA: "/toˈnuː/",
        partOfSpeech: "noun",
        engWord: "impeachment"
      },
      {
        word: "ꝷoɲ",
        IPA: "/toɲ/",
        partOfSpeech: "verb",
        engWord: "blow"
      },
      {
        word: "ꝷoɲa",
        IPA: "/toˈɲa/",
        partOfSpeech: "verb",
        engWord: "interrupt"
      },
      {
        word: "ꝷoɲa",
        IPA: "/ʈoˈɲa/",
        partOfSpeech: "noun",
        engWord: "soap"
      },
      {
        word: "ꝷoɲaꝝ",
        IPA: "/ʈoˈɲaʔ/",
        partOfSpeech: "verb",
        engWord: "lend"
      },
      {
        word: "ꝷoɲam",
        IPA: "/toˈɲam/",
        partOfSpeech: "noun",
        engWord: "reception (of office or hotel)"
      },
      {
        word: "ꝷoɲaꝭ",
        IPA: "/ʈoˈɲaʂ/",
        partOfSpeech: "noun",
        engWord: "check"
      },
      {
        word: "ꝷoɲe",
        IPA: "/toˈɲe/",
        partOfSpeech: "verb",
        engWord: "share"
      },
      {
        word: "ꝷoɲe",
        IPA: "/ʈoˈɲe/",
        partOfSpeech: "noun",
        engWord: "boyfriend"
      },
      {
        word: "ꝷoo",
        IPA: "/ʈoˈo/",
        partOfSpeech: "adjective",
        engWord: "vague"
      },
      {
        word: "ꝷora",
        IPA: "/toˈɽa/",
        partOfSpeech: "verb",
        engWord: "relieve"
      },
      {
        word: "ꝷora",
        IPA: "/toˈɽaː/",
        partOfSpeech: "verb",
        engWord: "splash"
      },
      {
        word: "ꝷora",
        IPA: "/ʈoˈɽa/",
        partOfSpeech: "verb",
        engWord: "organise"
      },
      {
        word: "ꝷoraɥ",
        IPA: "/toˈɽaʧ/",
        partOfSpeech: "noun",
        engWord: "goose"
      },
      {
        word: "ꝷoꝭ",
        IPA: "/ʈoʂ/",
        partOfSpeech: "verb",
        engWord: "rent"
      },
      {
        word: "ꝷoꝭa",
        IPA: "/toˈʂa/",
        partOfSpeech: "noun",
        engWord: "commerce"
      },
      {
        word: "ꝷoꝭa",
        IPA: "/ʈoˈʂa/",
        partOfSpeech: "verb",
        engWord: "erupt"
      },
      {
        word: "ꝷoꝭob",
        IPA: "/ʈoˈʂob/",
        partOfSpeech: "noun",
        engWord: "leverage"
      },
      {
        word: "ꝷoꝷ",
        IPA: "/tot/",
        partOfSpeech: "noun",
        engWord: "weapon"
      },
      {
        word: "ꝷoꝷa",
        IPA: "/toˈʈa/",
        partOfSpeech: "noun",
        engWord: "strategy"
      },
      {
        word: "ꝷoꝷa",
        IPA: "/ʈoˈʈa/",
        partOfSpeech: "noun",
        engWord: "pocket"
      },
      {
        word: "ꝷoꝷab",
        IPA: "/ʈoˈʈab/",
        partOfSpeech: "verb",
        engWord: "bend"
      },
      {
        word: "ꝷoꝷe",
        IPA: "/toˈʈe/",
        partOfSpeech: "adjective",
        engWord: "middle"
      },
      {
        word: "ꝷoꝷe",
        IPA: "/ʈoˈʈe/",
        partOfSpeech: "noun",
        engWord: "flour"
      },
      {
        word: "ꝷoꝷka",
        IPA: "/totˈka/",
        partOfSpeech: "noun",
        engWord: "inn"
      },
      {
        word: "ꝷoꝷo",
        IPA: "/ʈoˈʈo/",
        partOfSpeech: "adjective",
        engWord: "mature"
      },
      {
        word: "ꝷoꝷu",
        IPA: "/ʈoˈtu/",
        partOfSpeech: "noun",
        engWord: "oval"
      },
      {
        word: "ꝷou",
        IPA: "/toˈuː/",
        partOfSpeech: "noun",
        engWord: "west"
      },
      {
        word: "ꝷou",
        IPA: "/ʈoˈuː/",
        partOfSpeech: "adjective",
        engWord: "subtle"
      },
      {
        word: "ꝷoub",
        IPA: "/ʈoˈuːb/",
        partOfSpeech: "noun",
        engWord: "rookie"
      },
      {
        word: "ꝷoɏa",
        IPA: "/ʈoˈja/",
        partOfSpeech: "noun",
        engWord: "size"
      },
      {
        word: "ꝷoɏab",
        IPA: "/ʈoˈjab/",
        partOfSpeech: "verb",
        engWord: "retrieve"
      },
      {
        word: "ꝷoɏɏe",
        IPA: "/ʈojˈje/",
        partOfSpeech: "noun",
        engWord: "trailer"
      },
      {
        word: "ꝷoɏɏeꝷ",
        IPA: "/tojˈjet/",
        partOfSpeech: "verb",
        engWord: "precede"
      },
      {
        word: "ꝷu",
        IPA: "/tu/",
        partOfSpeech: "verb",
        engWord: "tell"
      },
      {
        word: "ꝷu",
        IPA: "/tuː/",
        partOfSpeech: "noun",
        engWord: "family"
      },
      {
        word: "ꝷu",
        IPA: "/ʈu/",
        partOfSpeech: "verb",
        engWord: "enter"
      },
      {
        word: "ꝷu",
        IPA: "/ʈuː/",
        partOfSpeech: "preposition",
        engWord: "to"
      },
      {
        word: "ꝷuꝝ",
        IPA: "/ʈuʔ/",
        partOfSpeech: "noun",
        engWord: "time"
      },
      {
        word: "ꝷuꝝ",
        IPA: "/ʈuːʔ/",
        partOfSpeech: "noun",
        engWord: "sign"
      },
      {
        word: "ꝷuꝝe",
        IPA: "/tuˈʔe/",
        partOfSpeech: "adjective",
        engWord: "flat"
      },
      {
        word: "ꝷuꝝe",
        IPA: "/tuːˈʔe/",
        partOfSpeech: "verb",
        engWord: "divert"
      },
      {
        word: "ꝷuꝝeb",
        IPA: "/tuˈʔeb/",
        partOfSpeech: "noun",
        engWord: "rear"
      },
      {
        word: "ꝷuꝝeỻ",
        IPA: "/ʈuˈʔeɭ/",
        partOfSpeech: "verb",
        engWord: "survive"
      },
      {
        word: "ꝷuꝝem",
        IPA: "/tuˈʔem/",
        partOfSpeech: "noun",
        engWord: "princess"
      },
      {
        word: "ꝷuꝝeꞃ",
        IPA: "/ʈuːˈʔen/",
        partOfSpeech: "noun",
        engWord: "justice"
      },
      {
        word: "ꝷua",
        IPA: "/tuˈa/",
        partOfSpeech: "noun",
        engWord: "experiment"
      },
      {
        word: "ꝷua",
        IPA: "/tuːˈa/",
        partOfSpeech: "noun",
        engWord: "banner"
      },
      {
        word: "ꝷuaɥ",
        IPA: "/tuˈaʧ/",
        partOfSpeech: "verb",
        engWord: "disguise"
      },
      {
        word: "ꝷuaɥ",
        IPA: "/tuːˈaʧ/",
        partOfSpeech: "verb",
        engWord: "mimic"
      },
      {
        word: "ꝷub",
        IPA: "/tub/",
        partOfSpeech: "noun",
        engWord: "rumour"
      },
      {
        word: "ꝷub",
        IPA: "/ʈuːb/",
        partOfSpeech: "adverb",
        engWord: "about"
      },
      {
        word: "ꝷuba",
        IPA: "/ʈuˈbaː/",
        partOfSpeech: "noun",
        engWord: "motif"
      },
      {
        word: "ꝷubi",
        IPA: "/tuˈbi/",
        partOfSpeech: "noun",
        engWord: "brothel"
      },
      {
        word: "ꝷubi",
        IPA: "/tuˈbiː/",
        partOfSpeech: "noun",
        engWord: "wing"
      },
      {
        word: "ꝷubi",
        IPA: "/ʈuːˈbi/",
        partOfSpeech: "adverb",
        engWord: "allegedly"
      },
      {
        word: "ꝷubiꝝ",
        IPA: "/ʈuˈbiːʔ/",
        partOfSpeech: "verb",
        engWord: "drink"
      },
      {
        word: "ꝷubib",
        IPA: "/ʈuːˈbiːb/",
        partOfSpeech: "noun",
        engWord: "compartment"
      },
      {
        word: "ꝷubiɥ",
        IPA: "/tuːˈbiːʧ/",
        partOfSpeech: "noun",
        engWord: "exhibit"
      },
      {
        word: "ꝷubiỻ",
        IPA: "/ʈuˈbiɭ/",
        partOfSpeech: "noun",
        engWord: "modify"
      },
      {
        word: "ꝷubim",
        IPA: "/ʈuːˈbim/",
        partOfSpeech: "noun",
        engWord: "copyright"
      },
      {
        word: "ꝷubu",
        IPA: "/ʈuːˈbuː/",
        partOfSpeech: "adjective",
        engWord: "ambiguous"
      },
      {
        word: "ꝷubuỻ",
        IPA: "/ʈuːˈbuːɭ/",
        partOfSpeech: "noun",
        engWord: "diplomacy"
      },
      {
        word: "ꝷubuꞃ",
        IPA: "/ʈuːˈbuːn/",
        partOfSpeech: "noun",
        engWord: "garbage, trash"
      },
      {
        word: "ꝷubup",
        IPA: "/tuːˈbup/",
        partOfSpeech: "verb",
        engWord: "embed"
      },
      {
        word: "ꝷubɏo",
        IPA: "/tuːˈbjo/",
        partOfSpeech: "verb",
        engWord: "lodge"
      },
      {
        word: "ꝷubɏob",
        IPA: "/tuˈbjob/",
        partOfSpeech: "noun",
        engWord: "document"
      },
      {
        word: "ꝷuɥ",
        IPA: "/tuʧ/",
        partOfSpeech: "noun",
        engWord: "valley"
      },
      {
        word: "ꝷuɥ",
        IPA: "/tuːʧ/",
        partOfSpeech: "adverb",
        engWord: "well"
      },
      {
        word: "ꝷuɥa",
        IPA: "/ʈuˈʧaː/",
        partOfSpeech: "noun",
        engWord: "event"
      },
      {
        word: "ꝷuɥe",
        IPA: "/ʈuˈʧe/",
        partOfSpeech: "noun",
        engWord: "end"
      },
      {
        word: "ꝷuɥe",
        IPA: "/ʈuːˈʧe/",
        partOfSpeech: "verb",
        engWord: "reserve"
      },
      {
        word: "ꝷuɥeb",
        IPA: "/ʈuːˈʧeb/",
        partOfSpeech: "verb",
        engWord: "exclaim"
      },
      {
        word: "ꝷuɥi",
        IPA: "/tuˈʧi/",
        partOfSpeech: "noun",
        engWord: "position"
      },
      {
        word: "ꝷuɥi",
        IPA: "/ʈuˈʧi/",
        partOfSpeech: "pronoun",
        engWord: "lots"
      },
      {
        word: "ꝷuɥi",
        IPA: "/ʈuˈʧiː/",
        partOfSpeech: "adverb",
        engWord: "within"
      },
      {
        word: "ꝷuɥib",
        IPA: "/tuˈʧib/",
        partOfSpeech: "verb",
        engWord: "kick",
        partOfSpeech2: "noun",
        engWord2: "kick"
      },
      {
        word: "ꝷuɥiɥ",
        IPA: "/tuˈʧiʧ/",
        partOfSpeech: "noun",
        engWord: "afternoon"
      },
      {
        word: "ꝷuɥim",
        IPA: "/ʈuːˈʧim/",
        partOfSpeech: "adjective",
        engWord: "chief"
      },
      {
        word: "ꝷuɥiꝷ",
        IPA: "/tuːˈʧiːt/",
        partOfSpeech: "adverb",
        engWord: "before"
      },
      {
        word: "ꝷuɥu",
        IPA: "/tuːˈʧu/",
        partOfSpeech: "noun",
        engWord: "ancestor, forefather"
      },
      {
        word: "ꝷuɥu",
        IPA: "/ʈuːˈʧuː/",
        partOfSpeech: "verb",
        engWord: "reproduce"
      },
      {
        word: "ꝷude",
        IPA: "/tuˈde/",
        partOfSpeech: "noun",
        engWord: "empathy"
      },
      {
        word: "ꝷude",
        IPA: "/tuːˈde/",
        partOfSpeech: "number",
        engWord: "trillion"
      },
      {
        word: "ꝷude",
        IPA: "/ʈuˈde/",
        partOfSpeech: "noun",
        engWord: "elevation"
      },
      {
        word: "ꝷudeb",
        IPA: "/tuˈdeb/",
        partOfSpeech: "verb",
        engWord: "conspire"
      },
      {
        word: "ꝷudeɥ",
        IPA: "/tuˈdeʧ/",
        partOfSpeech: "noun",
        engWord: "bully"
      },
      {
        word: "ꝷudeɥ",
        IPA: "/tuːˈdeʧ/",
        partOfSpeech: "noun",
        engWord: "strip"
      },
      {
        word: "ꝷudeỻ",
        IPA: "/ʈuˈdeɭ/",
        partOfSpeech: "noun",
        engWord: "attic"
      },
      {
        word: "ꝷue",
        IPA: "/tuˈe/",
        partOfSpeech: "adjective",
        engWord: "casual"
      },
      {
        word: "ꝷue",
        IPA: "/tuːˈe/",
        partOfSpeech: "noun",
        engWord: "bow (decorative material)"
      },
      {
        word: "ꝷue",
        IPA: "/ʈuˈe/",
        partOfSpeech: "verb",
        engWord: "pluck"
      },
      {
        word: "ꝷue",
        IPA: "/ʈuːˈe/",
        partOfSpeech: "noun",
        engWord: "repetition"
      },
      {
        word: "ꝷueꝝ",
        IPA: "/ʈuːˈeʔ/",
        partOfSpeech: "adjective",
        engWord: "missing"
      },
      {
        word: "ꝷueỻ",
        IPA: "/ʈuˈeɭ/",
        partOfSpeech: "determiner",
        engWord: "much"
      },
      {
        word: "ꝷueỻ",
        IPA: "/ʈuːˈeɭ/",
        partOfSpeech: "noun",
        engWord: "tray"
      },
      {
        word: "ꝷuge",
        IPA: "/tuːˈge/",
        partOfSpeech: "noun",
        engWord: "nursery"
      },
      {
        word: "ꝷuge",
        IPA: "/ʈuːˈge/",
        partOfSpeech: "adjective",
        engWord: "hard"
      },
      {
        word: "ꝷugem",
        IPA: "/ʈuːˈgem/",
        partOfSpeech: "noun",
        engWord: "screw"
      },
      {
        word: "ꝷugeꝷ",
        IPA: "/tuːˈget/",
        partOfSpeech: "noun",
        engWord: "sap"
      },
      {
        word: "ꝷugeɏ",
        IPA: "/ʈuːˈgej/",
        partOfSpeech: "adjective",
        engWord: "bankrupt"
      },
      {
        word: "ꝷuggu",
        IPA: "/tuːgˈguː/",
        partOfSpeech: "noun",
        engWord: "pot"
      },
      {
        word: "ꝷuggum",
        IPA: "/ʈugˈguːm/",
        partOfSpeech: "adjective",
        engWord: "narrow"
      },
      {
        word: "ꝷugi",
        IPA: "/tuˈgiː/",
        partOfSpeech: "noun",
        engWord: "lobster"
      },
      {
        word: "ꝷugib",
        IPA: "/ʈuːˈgib/",
        partOfSpeech: "verb",
        engWord: "complicate"
      },
      {
        word: "ꝷugu",
        IPA: "/ʈuːˈgu/",
        partOfSpeech: "noun",
        engWord: "shit",
        partOfSpeech2: "verb",
        engWord2: "shit"
      },
      {
        word: "ꝷugub",
        IPA: "/tuˈgub/",
        partOfSpeech: "adjective",
        engWord: "pink"
      },
      {
        word: "ꝷuha",
        IPA: "/ʈuˈha/",
        partOfSpeech: "noun",
        engWord: "shovel"
      },
      {
        word: "ꝷuhaꝝ",
        IPA: "/ʈuːˈhaʔ/",
        partOfSpeech: "noun",
        engWord: "trousers"
      },
      {
        word: "ꝷui",
        IPA: "/ʈuˈiː/",
        partOfSpeech: "adjective",
        engWord: "honest"
      },
      {
        word: "ꝷuꝯa",
        IPA: "/tuˈʤa/",
        partOfSpeech: "noun",
        engWord: "moss"
      },
      {
        word: "ꝷuꝯaɥ",
        IPA: "/tuˈʤaʧ/",
        partOfSpeech: "adjective",
        engWord: "orange"
      },
      {
        word: "ꝷuꝯap",
        IPA: "/tuːˈʤap/",
        partOfSpeech: "noun",
        engWord: "evening"
      },
      {
        word: "ꝷuꝯe",
        IPA: "/tuːˈʤe/",
        partOfSpeech: "noun",
        engWord: "cake"
      },
      {
        word: "ꝷuꝯe",
        IPA: "/ʈuːˈʤe/",
        partOfSpeech: "noun",
        engWord: "reward",
        partOfSpeech2: "verb",
        engWord2: "reward"
      },
      {
        word: "ꝷuꝯeb",
        IPA: "/tuˈʤeb/",
        partOfSpeech: "noun",
        engWord: "analogy"
      },
      {
        word: "ꝷuꝯeɥ",
        IPA: "/tuːˈʤeʧ/",
        partOfSpeech: "verb",
        engWord: "infect"
      },
      {
        word: "ꝷuꝯeɏ",
        IPA: "/ʈuːˈʤej/",
        partOfSpeech: "adjective",
        engWord: "ignorant"
      },
      {
        word: "ꝷuꝯo",
        IPA: "/tuˈʤo/",
        partOfSpeech: "noun",
        engWord: "hatch"
      },
      {
        word: "ꝷuka",
        IPA: "/tuːˈka/",
        partOfSpeech: "noun",
        engWord: "honour"
      },
      {
        word: "ꝷuka",
        IPA: "/tuːˈkaː/",
        partOfSpeech: "noun",
        engWord: "nickname"
      },
      {
        word: "ꝷuka",
        IPA: "/ʈuˈka/",
        partOfSpeech: "noun",
        engWord: "parliament"
      },
      {
        word: "ꝷuka",
        IPA: "/ʈuˈkaː/",
        partOfSpeech: "adjective",
        engWord: "blunt"
      },
      {
        word: "ꝷuka",
        IPA: "/ʈuːˈka/",
        partOfSpeech: "noun",
        engWord: "stay"
      },
      {
        word: "ꝷukaỻ",
        IPA: "/ʈuˈkaɭ/",
        partOfSpeech: "noun",
        engWord: "frame"
      },
      {
        word: "ꝷukam",
        IPA: "/ʈuːˈkam/",
        partOfSpeech: "noun",
        engWord: "province"
      },
      {
        word: "ꝷukiꝷ",
        IPA: "/tuːˈkit/",
        partOfSpeech: "adverb",
        engWord: "ever"
      },
      {
        word: "ꝷuỻ",
        IPA: "/ʈuɭ/",
        partOfSpeech: "adjective",
        engWord: "large"
      },
      {
        word: "ꝷuỻ",
        IPA: "/ʈuːɭ/",
        partOfSpeech: "noun",
        engWord: "soil"
      },
      {
        word: "ꝷum",
        IPA: "/tum/",
        partOfSpeech: "noun",
        engWord: "cuff"
      },
      {
        word: "ꝷum",
        IPA: "/tuːm/",
        partOfSpeech: "noun",
        engWord: "vein"
      },
      {
        word: "ꝷum",
        IPA: "/ʈum/",
        partOfSpeech: "noun",
        engWord: "military"
      },
      {
        word: "ꝷum",
        IPA: "/ʈuːm/",
        partOfSpeech: "preposition",
        engWord: "during"
      },
      {
        word: "ꝷume",
        IPA: "/ʈuˈme/",
        partOfSpeech: "verb",
        engWord: "aim"
      },
      {
        word: "ꝷumi",
        IPA: "/tuːˈmi/",
        partOfSpeech: "noun",
        engWord: "comment"
      },
      {
        word: "ꝷumi",
        IPA: "/tuːˈmiː/",
        partOfSpeech: "verb",
        engWord: "collapse"
      },
      {
        word: "ꝷumim",
        IPA: "/ʈuːˈmiːm/",
        partOfSpeech: "noun",
        engWord: "crater"
      },
      {
        word: "ꝷumu",
        IPA: "/ʈuˈmu/",
        partOfSpeech: "noun",
        engWord: "kit"
      },
      {
        word: "ꝷumuɥ",
        IPA: "/tuːˈmuʧ/",
        partOfSpeech: "preposition",
        engWord: "within"
      },
      {
        word: "ꝷuꞃ",
        IPA: "/ʈuːn/",
        partOfSpeech: "noun",
        engWord: "tradition"
      },
      {
        word: "ꝷuꞃe",
        IPA: "/tuˈne/",
        partOfSpeech: "noun",
        engWord: "slogan"
      },
      {
        word: "ꝷuꞃheꞃ",
        IPA: "/ʈuːnˈhen/",
        partOfSpeech: "noun",
        engWord: "patio"
      },
      {
        word: "ꝷuꞃu",
        IPA: "/ʈuːˈnu/",
        partOfSpeech: "verb",
        engWord: "erode"
      },
      {
        word: "ꝷuɲa",
        IPA: "/ʈuˈɲa/",
        partOfSpeech: "number",
        engWord: "third"
      },
      {
        word: "ꝷuɲaꝝ",
        IPA: "/ʈuːˈɲaʔ/",
        partOfSpeech: "verb",
        engWord: "assemble"
      },
      {
        word: "ꝷuɲab",
        IPA: "/tuˈɲab/",
        partOfSpeech: "verb",
        engWord: "pick"
      },
      {
        word: "ꝷuɲaꞃ",
        IPA: "/ʈuːnˈjaːn/",
        partOfSpeech: "adjective",
        engWord: "aware"
      },
      {
        word: "ꝷuɲap",
        IPA: "/tuːnˈjap/",
        partOfSpeech: "noun",
        engWord: "river"
      },
      {
        word: "ꝷuɲaɏ",
        IPA: "/ʈuːˈɲaj/",
        partOfSpeech: "adjective",
        engWord: "manual"
      },
      {
        word: "ꝷuɲe",
        IPA: "/tuːˈɲe/",
        partOfSpeech: "noun",
        engWord: "rival"
      },
      {
        word: "ꝷuɲe",
        IPA: "/ʈuˈɲeː/",
        partOfSpeech: "verb",
        engWord: "establish"
      },
      {
        word: "ꝷuɲe",
        IPA: "/ʈuːˈɲe/",
        partOfSpeech: "noun",
        engWord: "faculty"
      },
      {
        word: "ꝷuɲem",
        IPA: "/ʈuˈɲem/",
        partOfSpeech: "noun",
        engWord: "sketch"
      },
      {
        word: "ꝷuɲem",
        IPA: "/ʈuːˈɲem/",
        partOfSpeech: "verb",
        engWord: "hire"
      },
      {
        word: "ꝷuɲem",
        IPA: "/ʈuːˈɲeːm/",
        partOfSpeech: "adverb",
        engWord: "away"
      },
      {
        word: "ꝷuɲep",
        IPA: "/tuːˈɲep/",
        partOfSpeech: "noun",
        engWord: "courtesy"
      },
      {
        word: "ꝷuɲo",
        IPA: "/tuːˈɲo/",
        partOfSpeech: "adjective",
        engWord: "aesthetic"
      },
      {
        word: "ꝷuɲoɥ",
        IPA: "/tuːˈɲoʧ/",
        partOfSpeech: "verb",
        engWord: "assign"
      },
      {
        word: "ꝷuo",
        IPA: "/tuːˈo/",
        partOfSpeech: "noun",
        engWord: "hair (of body), fur"
      },
      {
        word: "ꝷup",
        IPA: "/tuːp/",
        partOfSpeech: "verb",
        engWord: "do"
      },
      {
        word: "ꝷupa",
        IPA: "/ʈuˈpaː/",
        partOfSpeech: "adjective",
        engWord: "awake"
      },
      {
        word: "ꝷupaɥ",
        IPA: "/tuːˈpaːʧ/",
        partOfSpeech: "noun",
        engWord: "tooth, beak"
      },
      {
        word: "ꝷupaỻ",
        IPA: "/ʈuˈpaːɭ/",
        partOfSpeech: "verb",
        engWord: "contaminate"
      },
      {
        word: "ꝷura",
        IPA: "/tuˈɽa/",
        partOfSpeech: "verb",
        engWord: "lose"
      },
      {
        word: "ꝷura",
        IPA: "/ʈuˈɽa/",
        partOfSpeech: "noun",
        engWord: "offence"
      },
      {
        word: "ꝷuraɥ",
        IPA: "/tuːˈɽaʧ/",
        partOfSpeech: "noun",
        engWord: "mouth"
      },
      {
        word: "ꝷuꝭoꞃ",
        IPA: "/ʈuːˈʂon/",
        partOfSpeech: "adjective",
        engWord: "audio"
      },
      {
        word: "ꝷuꝷ",
        IPA: "/tuːt/",
        partOfSpeech: "noun",
        engWord: "spring (season)"
      },
      {
        word: "ꝷuꝷa",
        IPA: "/tuˈʈa/",
        partOfSpeech: "verb",
        engWord: "merge"
      },
      {
        word: "ꝷuꝷa",
        IPA: "/tuːˈʈa/",
        partOfSpeech: "noun",
        engWord: "charge"
      },
      {
        word: "ꝷuꝷaɥ",
        IPA: "/tuˈʈaʧ/",
        partOfSpeech: "adjective",
        engWord: "normal"
      },
      {
        word: "ꝷuꝷam",
        IPA: "/ʈuˈʈam/",
        partOfSpeech: "noun",
        engWord: "guest"
      },
      {
        word: "ꝷuꝷe",
        IPA: "/tuːˈʈe/",
        partOfSpeech: "noun",
        engWord: "lobby"
      },
      {
        word: "ꝷuꝷeb",
        IPA: "/tuˈʈeːb/",
        partOfSpeech: "adjective",
        engWord: "fake"
      },
      {
        word: "ꝷuꝷeɥ",
        IPA: "/tuːˈʈeʧ/",
        partOfSpeech: "verb",
        engWord: "sustain"
      },
      {
        word: "ꝷuꝷeỻ",
        IPA: "/ʈuˈʈeɭ/",
        partOfSpeech: "noun",
        engWord: "bureaucracy"
      },
      {
        word: "ꝷuꝷem",
        IPA: "/ʈuˈʈem/",
        partOfSpeech: "verb",
        engWord: "near"
      },
      {
        word: "ꝷuꝷka",
        IPA: "/tutˈka/",
        partOfSpeech: "preposition",
        engWord: "inside"
      },
      {
        word: "ꝷuꝷka",
        IPA: "/ʈutˈka/",
        partOfSpeech: "noun",
        engWord: "carriage"
      },
      {
        word: "ꝷuꝷkab",
        IPA: "/tutˈkab/",
        partOfSpeech: "adjective",
        engWord: "naval"
      },
      {
        word: "ꝷuꝷoỻ",
        IPA: "/ʈuˈʈoɭ/",
        partOfSpeech: "adjective",
        engWord: "credible"
      },
      {
        word: "ꝷuu",
        IPA: "/ʈuːˈuː/",
        partOfSpeech: "adjective",
        engWord: "ripe"
      },
      {
        word: "ꝷuɏ",
        IPA: "/ʈuːj/",
        partOfSpeech: "verb",
        engWord: "face"
      },
      {
        word: "ꝷuɏa",
        IPA: "/ʈuˈja/",
        partOfSpeech: "noun",
        engWord: "ocean"
      },
      {
        word: "ꝷuɏaỻ",
        IPA: "/ʈuˈjaɭ/",
        partOfSpeech: "verb",
        engWord: "hop"
      },
      {
        word: "ꝷuɏam",
        IPA: "/ʈuˈjam/",
        partOfSpeech: "noun",
        engWord: "diagram"
      },
      {
        word: "u",
        IPA: "/u/",
        partOfSpeech: "verb",
        engWord: "will"
      },
      {
        word: "u",
        IPA: "/uː/",
        partOfSpeech: "verb",
        engWord: "give"
      },
      {
        word: "uꝝe",
        IPA: "/uˈʔeː/",
        partOfSpeech: "noun",
        engWord: "canal"
      },
      {
        word: "uꝝe",
        IPA: "/uːˈʔe/",
        partOfSpeech: "noun",
        engWord: "structure"
      },
      {
        word: "uꝝe",
        IPA: "/uːˈʔeː/",
        partOfSpeech: "noun",
        engWord: "debt"
      },
      {
        word: "ua",
        IPA: "/uˈa/",
        partOfSpeech: "noun",
        engWord: "perfume"
      },
      {
        word: "ua",
        IPA: "/uːˈa/",
        partOfSpeech: "noun",
        engWord: "text"
      },
      {
        word: "uaa",
        IPA: "/uˈaaː/",
        partOfSpeech: "noun",
        engWord: "surgery"
      },
      {
        word: "uba",
        IPA: "/uːˈbaː/",
        partOfSpeech: "verb",
        engWord: "stab"
      },
      {
        word: "ubekab",
        IPA: "/uˈbekab/",
        partOfSpeech: "noun",
        engWord: "behaviour"
      },
      {
        word: "ubi",
        IPA: "/uːˈbi/",
        partOfSpeech: "adjective",
        engWord: "extinct"
      },
      {
        word: "ubi",
        IPA: "/uːˈbiː/",
        partOfSpeech: "noun",
        engWord: "flame"
      },
      {
        word: "ubiꝝeemuk",
        IPA: "/uˈbiːʔeemuk/",
        partOfSpeech: "noun",
        engWord: "growth"
      },
      {
        word: "ubibi",
        IPA: "/uˈbiːbi/",
        partOfSpeech: "verb",
        engWord: "accompany"
      },
      {
        word: "ubiɏa",
        IPA: "/uˈbija/",
        partOfSpeech: "verb",
        engWord: "consult"
      },
      {
        word: "ubokab",
        IPA: "/uˈbokab/",
        partOfSpeech: "noun",
        engWord: "protection"
      },
      {
        word: "ubu",
        IPA: "/uˈbu/",
        partOfSpeech: "noun",
        engWord: "quota"
      },
      {
        word: "ubu",
        IPA: "/uˈbuː/",
        partOfSpeech: "noun",
        engWord: "suspect"
      },
      {
        word: "ubu",
        IPA: "/uːˈbuː/",
        partOfSpeech: "verb",
        engWord: "debate"
      },
      {
        word: "ubuꝝ",
        IPA: "/uˈbuːʔ/",
        partOfSpeech: "verb",
        engWord: "weigh"
      },
      {
        word: "ubumi",
        IPA: "/uˈbumi/",
        partOfSpeech: "noun",
        engWord: "discovery"
      },
      {
        word: "ubuꝭo",
        IPA: "/uːˈbuʂo/",
        partOfSpeech: "noun",
        engWord: "quilt"
      },
      {
        word: "uɥa",
        IPA: "/uːˈʧaː/",
        partOfSpeech: "preposition",
        engWord: "rather"
      },
      {
        word: "uɥe",
        IPA: "/uːˈʧe/",
        partOfSpeech: "verb",
        engWord: "improve"
      },
      {
        word: "uɥeꝷa",
        IPA: "/uˈʧeːʈa/",
        partOfSpeech: "adjective",
        engWord: "broken"
      },
      {
        word: "uɥi",
        IPA: "/uˈʧi/",
        partOfSpeech: "verb",
        engWord: "flush"
      },
      {
        word: "uɥi",
        IPA: "/uˈʧiː/",
        partOfSpeech: "noun",
        engWord: "distress"
      },
      {
        word: "uɥu",
        IPA: "/uˈʧu/",
        partOfSpeech: "adjective",
        engWord: "substantial"
      },
      {
        word: "uɥu",
        IPA: "/uˈʧuː/",
        partOfSpeech: "noun",
        engWord: "ambition"
      },
      {
        word: "uɥu",
        IPA: "/uːˈʧu/",
        partOfSpeech: "noun",
        engWord: "spring (coil)"
      },
      {
        word: "uɥu",
        IPA: "/uːˈʧuː/",
        partOfSpeech: "noun",
        engWord: "climate"
      },
      {
        word: "uɥuɥ",
        IPA: "/uˈʧuːʧ/",
        partOfSpeech: "noun",
        engWord: "pleasure"
      },
      {
        word: "ude",
        IPA: "/uˈde/",
        partOfSpeech: "adjective",
        engWord: "instant"
      },
      {
        word: "ude",
        IPA: "/uːˈde/",
        partOfSpeech: "verb",
        engWord: "order"
      },
      {
        word: "udo",
        IPA: "/uˈdo/",
        partOfSpeech: "noun",
        engWord: "agreement"
      },
      {
        word: "udoɥiꝯ",
        IPA: "/uˈdoʧiːʤ/",
        partOfSpeech: "noun",
        engWord: "reflection"
      },
      {
        word: "udu",
        IPA: "/uˈduː/",
        partOfSpeech: "verb",
        engWord: "endorse"
      },
      {
        word: "udu",
        IPA: "/uːˈduː/",
        partOfSpeech: "verb",
        engWord: "export"
      },
      {
        word: "ue",
        IPA: "/uˈe/",
        partOfSpeech: "noun",
        engWord: "cost"
      },
      {
        word: "ue",
        IPA: "/uˈe/",
        partOfSpeech: "conjunction",
        engWord: "whether"
      },
      {
        word: "ue",
        IPA: "/uːˈe/",
        partOfSpeech: "adjective",
        engWord: "frequent"
      },
      {
        word: "uede",
        IPA: "/uˈeːde/",
        partOfSpeech: "adjective",
        engWord: "early"
      },
      {
        word: "ueꝷa",
        IPA: "/uˈeʈa/",
        partOfSpeech: "noun",
        engWord: "frost"
      },
      {
        word: "uge",
        IPA: "/uˈge/",
        partOfSpeech: "noun",
        engWord: "well"
      },
      {
        word: "uge",
        IPA: "/uːˈge/",
        partOfSpeech: "verb",
        engWord: "exercise",
        partOfSpeech2: "noun",
        engWord2: "exercise"
      },
      {
        word: "ugeꝝe",
        IPA: "/uˈgeːʔe/",
        partOfSpeech: "noun",
        engWord: "product"
      },
      {
        word: "ugege",
        IPA: "/uˈgege/",
        partOfSpeech: "noun",
        engWord: "movement"
      },
      {
        word: "ugeɲo",
        IPA: "/uˈgeɲo/",
        partOfSpeech: "verb",
        engWord: "favour"
      },
      {
        word: "uggu",
        IPA: "/uːgˈguː/",
        partOfSpeech: "adjective",
        engWord: "jealous"
      },
      {
        word: "ugi",
        IPA: "/uˈgi/",
        partOfSpeech: "adjective",
        engWord: "serial"
      },
      {
        word: "ugi",
        IPA: "/uːˈgi/",
        partOfSpeech: "noun",
        engWord: "syrup"
      },
      {
        word: "ugi",
        IPA: "/uːˈgiː/",
        partOfSpeech: "noun",
        engWord: "circus"
      },
      {
        word: "ugu",
        IPA: "/uˈgu/",
        partOfSpeech: "verb",
        engWord: "deny"
      },
      {
        word: "uha",
        IPA: "/uˈha/",
        partOfSpeech: "noun",
        engWord: "church"
      },
      {
        word: "uhaɲa",
        IPA: "/uˈhaɲa/",
        partOfSpeech: "noun",
        engWord: "suggestion"
      },
      {
        word: "uheɥu",
        IPA: "/uˈheʧuː/",
        partOfSpeech: "noun",
        engWord: "decision"
      },
      {
        word: "uheram",
        IPA: "/uˈheːɽam/",
        partOfSpeech: "noun",
        engWord: "failure"
      },
      {
        word: "uheꝷe",
        IPA: "/uˈheʈe/",
        partOfSpeech: "noun",
        engWord: "death"
      },
      {
        word: "uhiaꝷe",
        IPA: "/uˈhiːaːʈe/",
        partOfSpeech: "noun",
        engWord: "painting"
      },
      {
        word: "uhiɥa",
        IPA: "/uˈhiʧaː/",
        partOfSpeech: "noun",
        engWord: "choice"
      },
      {
        word: "uhoa",
        IPA: "/uˈhoaː/",
        partOfSpeech: "noun",
        engWord: "memory"
      },
      {
        word: "uhom",
        IPA: "/uˈhom/",
        partOfSpeech: "verb",
        engWord: "sing"
      },
      {
        word: "uhugiꞃem",
        IPA: "/uˈhuːgiːnem/",
        partOfSpeech: "noun",
        engWord: "development"
      },
      {
        word: "uhuꝯe",
        IPA: "/uˈhuːʤe/",
        partOfSpeech: "noun",
        engWord: "opening"
      },
      {
        word: "uhuꝷe",
        IPA: "/uˈhuːʈe/",
        partOfSpeech: "noun",
        engWord: "ability"
      },
      {
        word: "ui",
        IPA: "/uˈiː/",
        partOfSpeech: "noun",
        engWord: "pasture"
      },
      {
        word: "ui",
        IPA: "/uːˈi/",
        partOfSpeech: "verb",
        engWord: "retain"
      },
      {
        word: "uꝯa",
        IPA: "/uːˈʤa/",
        partOfSpeech: "noun",
        engWord: "idea"
      },
      {
        word: "uꝯe",
        IPA: "/uˈʤe/",
        partOfSpeech: "verb",
        engWord: "pant"
      },
      {
        word: "uꝯe",
        IPA: "/uˈʤeː/",
        partOfSpeech: "adjective",
        engWord: "sticky"
      },
      {
        word: "uꝯe",
        IPA: "/uːˈʤe/",
        partOfSpeech: "adjective",
        engWord: "arbitrary"
      },
      {
        word: "uꝯeka",
        IPA: "/uˈʤeːka/",
        partOfSpeech: "noun",
        engWord: "election"
      },
      {
        word: "uꝯiɏ",
        IPA: "/uˈʤij/",
        partOfSpeech: "adjective",
        engWord: "final"
      },
      {
        word: "uꝯo",
        IPA: "/uˈʤo/",
        partOfSpeech: "adjective",
        engWord: "pensive"
      },
      {
        word: "uꝯo",
        IPA: "/uˈʤo/",
        partOfSpeech: "noun",
        engWord: "thought"
      },
      {
        word: "uꝯo",
        IPA: "/uːˈʤo/",
        partOfSpeech: "noun",
        engWord: "female"
      },
      {
        word: "uꝯoeꝯe",
        IPA: "/uˈʤoeʤe/",
        partOfSpeech: "noun",
        engWord: "holiday"
      },
      {
        word: "uꝯoge",
        IPA: "/uˈʤoge/",
        partOfSpeech: "noun",
        engWord: "hill"
      },
      {
        word: "uꝯoꝯeꝝ",
        IPA: "/uˈʤoʤeʔ/",
        partOfSpeech: "noun",
        engWord: "explanation"
      },
      {
        word: "uka",
        IPA: "/uˈka/",
        partOfSpeech: "noun",
        engWord: "army"
      },
      {
        word: "uka",
        IPA: "/uˈkaː/",
        partOfSpeech: "adjective",
        engWord: "crazy"
      },
      {
        word: "uka",
        IPA: "/uːˈka/",
        partOfSpeech: "determiner",
        engWord: "whatever"
      },
      {
        word: "uka",
        IPA: "/uːˈkaː/",
        partOfSpeech: "noun",
        engWord: "poultry"
      },
      {
        word: "uku",
        IPA: "/uˈkuː/",
        partOfSpeech: "noun",
        engWord: "downtown (commercial area of city)"
      },
      {
        word: "uku",
        IPA: "/uːˈkuː/",
        partOfSpeech: "noun",
        engWord: "organisation"
      },
      {
        word: "ume",
        IPA: "/uˈme/",
        partOfSpeech: "adjective",
        engWord: "fine"
      },
      {
        word: "ume",
        IPA: "/uːˈme/",
        partOfSpeech: "adjective",
        engWord: "little"
      },
      {
        word: "umeꞃeka",
        IPA: "/uˈmeneka/",
        partOfSpeech: "noun",
        engWord: "semester"
      },
      {
        word: "umu",
        IPA: "/uˈmu/",
        partOfSpeech: "noun",
        engWord: "nest"
      },
      {
        word: "umu",
        IPA: "/uːˈmu/",
        partOfSpeech: "noun",
        engWord: "way"
      },
      {
        word: "umuꝷege",
        IPA: "/uˈmuʈege/",
        partOfSpeech: "adjective",
        engWord: "radical"
      },
      {
        word: "uꞃde",
        IPA: "/uːnˈde/",
        partOfSpeech: "noun",
        engWord: "harbour"
      },
      {
        word: "uꞃdeɥaɲe",
        IPA: "/unˈdeʧaːɲe/",
        partOfSpeech: "noun",
        engWord: "gut"
      },
      {
        word: "uꞃdepaɥi",
        IPA: "/unˈdepaːʧiː/",
        partOfSpeech: "verb",
        engWord: "pay"
      },
      {
        word: "uꞃe",
        IPA: "/uˈne/",
        partOfSpeech: "noun",
        engWord: "chest"
      },
      {
        word: "uꞃe",
        IPA: "/uːˈne/",
        partOfSpeech: "verb",
        engWord: "fetch"
      },
      {
        word: "uꞃeb",
        IPA: "/uˈneːb/",
        partOfSpeech: "noun",
        engWord: "excitement"
      },
      {
        word: "uꞃuɥe",
        IPA: "/uˈnuːʧe/",
        partOfSpeech: "noun",
        engWord: "proof"
      },
      {
        word: "uɲa",
        IPA: "/uˈɲa/",
        partOfSpeech: "pronoun",
        engWord: "everything"
      },
      {
        word: "uɲa",
        IPA: "/uːˈɲa/",
        partOfSpeech: "verb",
        engWord: "prevent"
      },
      {
        word: "uɲaɥu",
        IPA: "/uːˈɲaʧu/",
        partOfSpeech: "noun",
        engWord: "word"
      },
      {
        word: "uɲaꝷa",
        IPA: "/uˈɲaʈa/",
        partOfSpeech: "verb",
        engWord: "chuckle"
      },
      {
        word: "uɲe",
        IPA: "/uːˈɲe/",
        partOfSpeech: "adjective",
        engWord: "hungry"
      },
      {
        word: "uɲiꝷep",
        IPA: "/uˈɲiʈep/",
        partOfSpeech: "noun",
        engWord: "flight"
      },
      {
        word: "uɲo",
        IPA: "/uːˈɲo/",
        partOfSpeech: "verb",
        engWord: "frustrate"
      },
      {
        word: "uɲoꝝe",
        IPA: "/uˈɲoʔe/",
        partOfSpeech: "adjective",
        engWord: "careful"
      },
      {
        word: "uɲuap",
        IPA: "/uˈɲuːaːp/",
        partOfSpeech: "adjective",
        engWord: "offensive"
      },
      {
        word: "uɲumeb",
        IPA: "/uˈɲumeb/",
        partOfSpeech: "noun",
        engWord: "training"
      },
      {
        word: "uɲuꝷ",
        IPA: "/uˈɲuːt/",
        partOfSpeech: "noun",
        engWord: "treatment"
      },
      {
        word: "uoꝯa",
        IPA: "/uˈoʤa/",
        partOfSpeech: "noun",
        engWord: "service"
      },
      {
        word: "uomu",
        IPA: "/uˈomuː/",
        partOfSpeech: "noun",
        engWord: "defence"
      },
      {
        word: "upaꝝe",
        IPA: "/uˈpaʔe/",
        partOfSpeech: "noun",
        engWord: "analysis"
      },
      {
        word: "upeba",
        IPA: "/uˈpebaː/",
        partOfSpeech: "noun",
        engWord: "description"
      },
      {
        word: "upebiɥ",
        IPA: "/uˈpebiʧ/",
        partOfSpeech: "noun",
        engWord: "preparation"
      },
      {
        word: "upoꝭ",
        IPA: "/uˈpoʂ/",
        partOfSpeech: "noun",
        engWord: "belief"
      },
      {
        word: "upuaɥ",
        IPA: "/uˈpuaːʧ/",
        partOfSpeech: "noun",
        engWord: "meeting"
      },
      {
        word: "ura",
        IPA: "/uˈɽa/",
        partOfSpeech: "preposition",
        engWord: "except, besides"
      },
      {
        word: "ura",
        IPA: "/uːˈɽa/",
        partOfSpeech: "noun",
        engWord: "final"
      },
      {
        word: "ura",
        IPA: "/uːˈɽaː/",
        partOfSpeech: "verb",
        engWord: "prosecute"
      },
      {
        word: "uragia",
        IPA: "/uːˈɽagia/",
        partOfSpeech: "noun",
        engWord: "insurance"
      },
      {
        word: "uꝭa",
        IPA: "/uːˈʂa/",
        partOfSpeech: "verb",
        engWord: "worth"
      },
      {
        word: "uꝭaꞃeɥ",
        IPA: "/uˈʂaneʧ/",
        partOfSpeech: "noun",
        engWord: "knowledge"
      },
      {
        word: "uꝭeagu",
        IPA: "/uˈʂeːagu/",
        partOfSpeech: "noun",
        engWord: "identity"
      },
      {
        word: "uꝭede",
        IPA: "/uˈʂede/",
        partOfSpeech: "noun",
        engWord: "feeling"
      },
      {
        word: "uꝭeꝷa",
        IPA: "/uˈʂeʈa/",
        partOfSpeech: "noun",
        engWord: "response"
      },
      {
        word: "uꝭoe",
        IPA: "/uˈʂoe/",
        partOfSpeech: "noun",
        engWord: "argument"
      },
      {
        word: "uꝭoguꝭ",
        IPA: "/uˈʂoguʂ/",
        partOfSpeech: "noun",
        engWord: "destruction"
      },
      {
        word: "uꝭokabi",
        IPA: "/uˈʂokabiː/",
        partOfSpeech: "noun",
        engWord: "settlement"
      },
      {
        word: "uꝭubu",
        IPA: "/uˈʂuːbuː/",
        partOfSpeech: "noun",
        engWord: "division"
      },
      {
        word: "uꝷa",
        IPA: "/uˈʈa/",
        partOfSpeech: "noun",
        engWord: "kid"
      },
      {
        word: "uꝷa",
        IPA: "/uːˈʈa/",
        partOfSpeech: "noun",
        engWord: "slack"
      },
      {
        word: "uꝷaꝷa",
        IPA: "/uˈʈaːʈa/",
        partOfSpeech: "noun",
        engWord: "spelling"
      },
      {
        word: "uꝷe",
        IPA: "/uˈʈe/",
        partOfSpeech: "noun",
        engWord: "hearing"
      },
      {
        word: "uꝷe",
        IPA: "/uˈʈe/",
        partOfSpeech: "noun",
        engWord: "team"
      },
      {
        word: "uꝷe",
        IPA: "/uˈʈeː/",
        partOfSpeech: "noun",
        engWord: "half"
      },
      {
        word: "uꝷe",
        IPA: "/uːˈʈe/",
        partOfSpeech: "noun",
        engWord: "expression"
      },
      {
        word: "uꝷip",
        IPA: "/uˈtiːp/",
        partOfSpeech: "adjective",
        engWord: "forgetful"
      },
      {
        word: "uꝷka",
        IPA: "/uːtˈka/",
        partOfSpeech: "noun",
        engWord: "quantum"
      },
      {
        word: "uꝷu",
        IPA: "/uˈtu/",
        partOfSpeech: "noun",
        engWord: "university"
      },
      {
        word: "uꝷu",
        IPA: "/uːˈtu/",
        partOfSpeech: "verb",
        engWord: "huddle"
      },
      {
        word: "uꝷura",
        IPA: "/uˈtuɽa/",
        partOfSpeech: "noun",
        engWord: "loss"
      },
      {
        word: "uu",
        IPA: "/uːˈuː/",
        partOfSpeech: "noun",
        engWord: "writer"
      },
      {
        word: "uɏiꝷemuɲaɥ",
        IPA: "/uˈjiːʈemunjaʧ/",
        partOfSpeech: "noun",
        engWord: "arrival"
      },
      {
        word: "ɏa",
        IPA: "/ja/",
        partOfSpeech: "noun",
        engWord: "plain"
      },
      {
        word: "ɏa",
        IPA: "/jaː/",
        partOfSpeech: "adverb",
        engWord: "often"
      },
      {
        word: "ɏaꝝebua",
        IPA: "/jaˈʔebua/",
        partOfSpeech: "verb",
        engWord: "join"
      },
      {
        word: "ɏaa",
        IPA: "/jaˈa/",
        partOfSpeech: "noun",
        engWord: "bulb"
      },
      {
        word: "ɏaak",
        IPA: "/jaˈak/",
        partOfSpeech: "adjective",
        engWord: "entire"
      },
      {
        word: "ɏaaoɲaɥ",
        IPA: "/jaːˈaoɲaʧ/",
        partOfSpeech: "noun",
        engWord: "clove"
      },
      {
        word: "ɏabiɥ",
        IPA: "/jaˈbiːʧ/",
        partOfSpeech: "noun",
        engWord: "pump"
      },
      {
        word: "ɏabuhaꝯeɥ",
        IPA: "/jaˈbuːhaʤeʧ/",
        partOfSpeech: "noun",
        engWord: "appearance"
      },
      {
        word: "ɏabuꝯeɥu",
        IPA: "/jaˈbuːʤeʧu/",
        partOfSpeech: "noun",
        engWord: "keeper"
      },
      {
        word: "ɏaɥ",
        IPA: "/jaʧ/",
        partOfSpeech: "noun",
        engWord: "destiny"
      },
      {
        word: "ɏaɥa",
        IPA: "/jaˈʧaː/",
        partOfSpeech: "noun",
        engWord: "mint"
      },
      {
        word: "ɏaɥuɲau",
        IPA: "/jaˈʧuɲauː/",
        partOfSpeech: "noun",
        engWord: "worm"
      },
      {
        word: "ɏaduꝷaɏa",
        IPA: "/jaːˈduːʈaja/",
        partOfSpeech: "conjunction",
        engWord: "unless"
      },
      {
        word: "ɏagu",
        IPA: "/jaˈgu/",
        partOfSpeech: "verb",
        engWord: "strive"
      },
      {
        word: "ɏai",
        IPA: "/jaˈi/",
        partOfSpeech: "preposition",
        engWord: "instead"
      },
      {
        word: "ɏaꝯe",
        IPA: "/jaˈʤe/",
        partOfSpeech: "noun",
        engWord: "circle"
      },
      {
        word: "ɏaꝯeɥ",
        IPA: "/jaˈʤeʧ/",
        partOfSpeech: "preposition",
        engWord: "along"
      },
      {
        word: "ɏaꝯeꝷaꝝek",
        IPA: "/jaˈʤeʈaʔek/",
        partOfSpeech: "determiner",
        engWord: "both"
      },
      {
        word: "ɏak",
        IPA: "/jak/",
        partOfSpeech: "noun",
        engWord: "shelf"
      },
      {
        word: "ɏaka",
        IPA: "/jaˈka/",
        partOfSpeech: "noun",
        engWord: "vocabulary"
      },
      {
        word: "ɏakaɥ",
        IPA: "/jaˈkaːʧ/",
        partOfSpeech: "adjective",
        engWord: "damp"
      },
      {
        word: "ɏakaɥ",
        IPA: "/jaːˈkaʧ/",
        partOfSpeech: "noun",
        engWord: "dog"
      },
      {
        word: "ɏakaꝯoꝷe",
        IPA: "/jaˈkaʤoʈeː/",
        partOfSpeech: "adjective",
        engWord: "bald"
      },
      {
        word: "ɏakak",
        IPA: "/jaˈkak/",
        partOfSpeech: "noun",
        engWord: "cousin"
      },
      {
        word: "ɏame",
        IPA: "/jaˈme/",
        partOfSpeech: "verb",
        engWord: "fry"
      },
      {
        word: "ɏami",
        IPA: "/jaˈmiː/",
        partOfSpeech: "noun",
        engWord: "fringe"
      },
      {
        word: "ɏamu",
        IPA: "/jaˈmu/",
        partOfSpeech: "noun",
        engWord: "capacity"
      },
      {
        word: "ɏaꞃdemeku",
        IPA: "/janˈdemekuː/",
        partOfSpeech: "noun",
        engWord: "contract"
      },
      {
        word: "ɏaꞃeꝭoaɥ",
        IPA: "/jaˈneʂoaʧ/",
        partOfSpeech: "noun",
        engWord: "risk"
      },
      {
        word: "ɏaꞃuguɲaɥ",
        IPA: "/jaˈnugunjaʧ/",
        partOfSpeech: "noun",
        engWord: "lipstick"
      },
      {
        word: "ɏaɲa",
        IPA: "/jaˈɲa/",
        partOfSpeech: "noun",
        engWord: "dream"
      },
      {
        word: "ɏaɲa",
        IPA: "/jaːˈɲa/",
        partOfSpeech: "verb",
        engWord: "complete"
      },
      {
        word: "ɏaɲaɥ",
        IPA: "/jaˈɲaʧ/",
        partOfSpeech: "noun",
        engWord: "tattoo"
      },
      {
        word: "ɏaꝷa",
        IPA: "/jaˈʈa/",
        partOfSpeech: "noun",
        engWord: "issue"
      },
      {
        word: "ɏaꝷaɥ",
        IPA: "/jaˈʈaʧ/",
        partOfSpeech: "noun",
        engWord: "mail"
      },
      {
        word: "ɏaꝷe",
        IPA: "/jaˈʈe/",
        partOfSpeech: "noun",
        engWord: "turbine"
      },
      {
        word: "ɏaꝷeɥ",
        IPA: "/jaˈʈeːʧ/",
        partOfSpeech: "noun",
        engWord: "trench"
      },
      {
        word: "ɏaꝷek",
        IPA: "/jaˈʈek/",
        partOfSpeech: "noun",
        engWord: "rice"
      },
      {
        word: "ɏaꝷkaꞃdeꝷa",
        IPA: "/jatˈkandeʈa/",
        partOfSpeech: "noun",
        engWord: "linen"
      },
      {
        word: "ɏauꝷaꝯoɥ",
        IPA: "/jaˈuːʈaʤoʧ/",
        partOfSpeech: "adverb",
        engWord: "most"
      },
      {
        word: "ɏaɏaɥuge",
        IPA: "/jaˈjaʧuːge/",
        partOfSpeech: "noun",
        engWord: "switch"
      },
      {
        word: "ɏe",
        IPA: "/je/",
        partOfSpeech: "noun",
        engWord: "window"
      },
      {
        word: "ɏe",
        IPA: "/jeː/",
        partOfSpeech: "adjective",
        engWord: "red"
      },
      {
        word: "ɏeꝝe",
        IPA: "/jeˈʔe/",
        partOfSpeech: "verb",
        engWord: "notify"
      },
      {
        word: "ɏeꝝeɥ",
        IPA: "/jeːˈʔeʧ/",
        partOfSpeech: "noun",
        engWord: "head"
      },
      {
        word: "ɏeꝝeɥuraꝷ",
        IPA: "/jeːˈʔeʧuːɽaːt/",
        partOfSpeech: "noun",
        engWord: "mystery"
      },
      {
        word: "ɏeꝝeedeꝷ",
        IPA: "/jeːˈʔeːedet/",
        partOfSpeech: "verb",
        engWord: "qualify"
      },
      {
        word: "ɏeꝝeꝷuu",
        IPA: "/jeˈʔetuu/",
        partOfSpeech: "verb",
        engWord: "nap"
      },
      {
        word: "ɏea",
        IPA: "/jeːˈaː/",
        partOfSpeech: "noun",
        engWord: "pirate"
      },
      {
        word: "ɏeakiaꝷ",
        IPA: "/jeːˈakiat/",
        partOfSpeech: "noun",
        engWord: "fan (enthusiast)"
      },
      {
        word: "ɏebi",
        IPA: "/jeˈbi/",
        partOfSpeech: "noun",
        engWord: "update"
      },
      {
        word: "ɏebiɲaɲe",
        IPA: "/jeˈbiːɲaɲe/",
        partOfSpeech: "noun",
        engWord: "lamb"
      },
      {
        word: "ɏebu",
        IPA: "/jeːˈbu/",
        partOfSpeech: "noun",
        engWord: "commodity"
      },
      {
        word: "ɏebuꝷ",
        IPA: "/jeˈbut/",
        partOfSpeech: "noun",
        engWord: "fury"
      },
      {
        word: "ɏeɥ",
        IPA: "/jeʧ/",
        partOfSpeech: "noun",
        engWord: "pond"
      },
      {
        word: "ɏeɥ",
        IPA: "/jeːʧ/",
        partOfSpeech: "noun",
        engWord: "throat"
      },
      {
        word: "ɏeɥi",
        IPA: "/jeˈʧiː/",
        partOfSpeech: "verb",
        engWord: "react"
      },
      {
        word: "ɏeɥu",
        IPA: "/jeˈʧu/",
        partOfSpeech: "verb",
        engWord: "restrain"
      },
      {
        word: "ɏeɥu",
        IPA: "/jeˈʧuː/",
        partOfSpeech: "verb",
        engWord: "deteriorate"
      },
      {
        word: "ɏee",
        IPA: "/jeˈe/",
        partOfSpeech: "noun",
        engWord: "sickness"
      },
      {
        word: "ɏee",
        IPA: "/jeˈeː/",
        partOfSpeech: "noun",
        engWord: "doctor"
      },
      {
        word: "ɏegeɥ",
        IPA: "/jeːˈgeʧ/",
        partOfSpeech: "noun",
        engWord: "supply"
      },
      {
        word: "ɏegukaꝯeꝷ",
        IPA: "/jeːˈguːkaʤet/",
        partOfSpeech: "noun",
        engWord: "dean"
      },
      {
        word: "ɏeguꝷ",
        IPA: "/jeːˈguːt/",
        partOfSpeech: "noun",
        engWord: "clan"
      },
      {
        word: "ɏei",
        IPA: "/jeːˈiː/",
        partOfSpeech: "verb",
        engWord: "hurl"
      },
      {
        word: "ɏeꝯa",
        IPA: "/jeˈʤa/",
        partOfSpeech: "adjective",
        engWord: "parallel"
      },
      {
        word: "ɏeꝯeɥ",
        IPA: "/jeːˈʤeʧ/",
        partOfSpeech: "noun",
        engWord: "curl"
      },
      {
        word: "ɏeꝯeꝯeꞃeɥ",
        IPA: "/jeːˈʤeʤeneʧ/",
        partOfSpeech: "noun",
        engWord: "knight"
      },
      {
        word: "ɏeꝯekaɲaɥ",
        IPA: "/jeˈʤekaɲaʧ/",
        partOfSpeech: "noun",
        engWord: "desert"
      },
      {
        word: "ɏeꝯeꝷ",
        IPA: "/jeˈʤet/",
        partOfSpeech: "verb",
        engWord: "commute"
      },
      {
        word: "ɏeka",
        IPA: "/jeˈka/",
        partOfSpeech: "verb",
        engWord: "sew"
      },
      {
        word: "ɏeka",
        IPA: "/jeːˈkaː/",
        partOfSpeech: "verb",
        engWord: "have"
      },
      {
        word: "ɏekaɥ",
        IPA: "/jeˈkaːʧ/",
        partOfSpeech: "verb",
        engWord: "understand"
      },
      {
        word: "ɏekuꝷ",
        IPA: "/jeːˈkuːt/",
        partOfSpeech: "noun",
        engWord: "demon"
      },
      {
        word: "ɏeme",
        IPA: "/jeːˈme/",
        partOfSpeech: "verb",
        engWord: "detain"
      },
      {
        word: "ɏemebigu",
        IPA: "/jeːˈmebiːgu/",
        partOfSpeech: "verb",
        engWord: "flourish"
      },
      {
        word: "ɏemeegu",
        IPA: "/jeˈmeeguː/",
        partOfSpeech: "noun",
        engWord: "ash"
      },
      {
        word: "ɏemiaꝯaꝷ",
        IPA: "/jeˈmiaʤat/",
        partOfSpeech: "verb",
        engWord: "expire"
      },
      {
        word: "ɏemu",
        IPA: "/jeˈmu/",
        partOfSpeech: "noun",
        engWord: "ditch"
      },
      {
        word: "ɏeꞃeꝷ",
        IPA: "/jeːˈnet/",
        partOfSpeech: "noun",
        engWord: "commentary"
      },
      {
        word: "ɏeɲa",
        IPA: "/jeˈɲa/",
        partOfSpeech: "noun",
        engWord: "sport"
      },
      {
        word: "ɏeɲaɥuka",
        IPA: "/jeːˈɲaʧukaː/",
        partOfSpeech: "verb",
        engWord: "massage",
        partOfSpeech2: "noun",
        engWord2: "massage"
      },
      {
        word: "ɏeɲaguaɥ",
        IPA: "/jeːˈɲaguaʧ/",
        partOfSpeech: "noun",
        engWord: "rake"
      },
      {
        word: "ɏera",
        IPA: "/jeˈɽa/",
        partOfSpeech: "noun",
        engWord: "maximum"
      },
      {
        word: "ɏera",
        IPA: "/jeˈɽaː/",
        partOfSpeech: "noun",
        engWord: "tenant"
      },
      {
        word: "ɏera",
        IPA: "/jeːˈɽa/",
        partOfSpeech: "verb",
        engWord: "obey"
      },
      {
        word: "ɏera",
        IPA: "/jeːˈɽaː/",
        partOfSpeech: "noun",
        engWord: "nerve"
      },
      {
        word: "ɏeraɥ",
        IPA: "/jeːˈɽaʧ/",
        partOfSpeech: "adjective",
        engWord: "other"
      },
      {
        word: "ɏeꝷ",
        IPA: "/jet/",
        partOfSpeech: "verb",
        engWord: "glow"
      },
      {
        word: "ɏeꝷ",
        IPA: "/jeːt/",
        partOfSpeech: "verb",
        engWord: "confine"
      },
      {
        word: "ɏeꝷa",
        IPA: "/jeˈʈa/",
        partOfSpeech: "noun",
        engWord: "chapel"
      },
      {
        word: "ɏeꝷagigu",
        IPA: "/jeˈʈagiːgu/",
        partOfSpeech: "noun",
        engWord: "butter"
      },
      {
        word: "ɏeꝷaɲeme",
        IPA: "/jeːˈʈaɲeme/",
        partOfSpeech: "noun",
        engWord: "shed"
      },
      {
        word: "ɏeꝷebiaꝷ",
        IPA: "/jeˈʈeːbiat/",
        partOfSpeech: "noun",
        engWord: "wedding"
      },
      {
        word: "ɏeꝷka",
        IPA: "/jetˈka/",
        partOfSpeech: "adjective",
        engWord: "grim"
      },
      {
        word: "ɏeꝷoɥ",
        IPA: "/jeˈʈoʧ/",
        partOfSpeech: "noun",
        engWord: "filter"
      },
      {
        word: "ɏeꝷu",
        IPA: "/jeˈtu/",
        partOfSpeech: "adverb",
        engWord: "soon"
      },
      {
        word: "ɏi",
        IPA: "/ji/",
        partOfSpeech: "noun",
        engWord: "discourse"
      },
      {
        word: "ɏi",
        IPA: "/jiː/",
        partOfSpeech: "noun",
        engWord: "victim"
      },
      {
        word: "ɏiꝝe",
        IPA: "/jiˈʔe/",
        partOfSpeech: "noun",
        engWord: "fingerprint"
      },
      {
        word: "ɏiaɥ",
        IPA: "/jiːˈaʧ/",
        partOfSpeech: "noun",
        engWord: "choir"
      },
      {
        word: "ɏibamuꝝe",
        IPA: "/jiːˈbaːmuʔeː/",
        partOfSpeech: "noun",
        engWord: "knot"
      },
      {
        word: "ɏibiꝷeɲa",
        IPA: "/jiːˈbiʈenjaː/",
        partOfSpeech: "verb",
        engWord: "interrogate"
      },
      {
        word: "ɏiɥ",
        IPA: "/jiːʧ/",
        partOfSpeech: "noun",
        engWord: "base"
      },
      {
        word: "ɏiɥa",
        IPA: "/jiːˈʧaː/",
        partOfSpeech: "noun",
        engWord: "magazine"
      },
      {
        word: "ɏiɥeꝯamiɥ",
        IPA: "/jiˈʧeʤamiːʧ/",
        partOfSpeech: "noun",
        engWord: "nostril"
      },
      {
        word: "ɏie",
        IPA: "/jiːˈe/",
        partOfSpeech: "adjective",
        engWord: "stiff"
      },
      {
        word: "ɏigu",
        IPA: "/jiːˈguː/",
        partOfSpeech: "noun",
        engWord: "wrist"
      },
      {
        word: "ɏigubigi",
        IPA: "/jiːˈgubigi/",
        partOfSpeech: "adjective",
        engWord: "excess"
      },
      {
        word: "ɏihaɥ",
        IPA: "/jiːˈhaʧ/",
        partOfSpeech: "verb",
        engWord: "concentrate"
      },
      {
        word: "ɏiꝯeɥ",
        IPA: "/jiˈʤeʧ/",
        partOfSpeech: "verb",
        engWord: "satisfy"
      },
      {
        word: "ɏiꝯeꝷebi",
        IPA: "/jiːˈʤeʈebiː/",
        partOfSpeech: "verb",
        engWord: "leak"
      },
      {
        word: "ɏika",
        IPA: "/jiːˈka/",
        partOfSpeech: "verb",
        engWord: "possess"
      },
      {
        word: "ɏika",
        IPA: "/jiːˈkaː/",
        partOfSpeech: "adverb",
        engWord: "somehow"
      },
      {
        word: "ɏikaɲaɲa",
        IPA: "/jiːˈkaɲanja/",
        partOfSpeech: "noun",
        engWord: "breed"
      },
      {
        word: "ɏikiege",
        IPA: "/jiˈkiege/",
        partOfSpeech: "noun",
        engWord: "reservoir"
      },
      {
        word: "ɏimiɥ",
        IPA: "/jiːˈmiʧ/",
        partOfSpeech: "noun",
        engWord: "manner"
      },
      {
        word: "ɏimu",
        IPA: "/jiˈmu/",
        partOfSpeech: "adjective",
        engWord: "early"
      },
      {
        word: "ɏiꞃeɲakiɥ",
        IPA: "/jiːˈneɲakiʧ/",
        partOfSpeech: "noun",
        engWord: "pest"
      },
      {
        word: "ɏiɲe",
        IPA: "/jiːˈɲe/",
        partOfSpeech: "adjective",
        engWord: "due"
      },
      {
        word: "ɏiraꝷamu",
        IPA: "/jiˈɽaːʈamu/",
        partOfSpeech: "noun",
        engWord: "message"
      },
      {
        word: "ɏiꝭo",
        IPA: "/jiˈʂo/",
        partOfSpeech: "adjective",
        engWord: "rugged"
      },
      {
        word: "ɏiꝷe",
        IPA: "/jiˈʈe/",
        partOfSpeech: "verb",
        engWord: "advocate"
      },
      {
        word: "ɏiꝷe",
        IPA: "/jiːˈʈe/",
        partOfSpeech: "verb",
        engWord: "be (located)"
      },
      {
        word: "ɏiꝷemuɲaɥ",
        IPA: "/jiːˈʈemunjaʧ/",
        partOfSpeech: "verb",
        engWord: "arrive"
      },
      {
        word: "ɏiꝷoꞃdeꞃe",
        IPA: "/jiˈʈondene/",
        partOfSpeech: "noun",
        engWord: "site"
      },
      {
        word: "ɏiuɥ",
        IPA: "/jiːˈuʧ/",
        partOfSpeech: "adjective",
        engWord: "urgent"
      },
      {
        word: "ɏiɏɏeꝯeꞃe",
        IPA: "/jijˈjeʤene/",
        partOfSpeech: "interjection",
        engWord: "welcome"
      },
      {
        word: "ɏo",
        IPA: "/jo/",
        partOfSpeech: "verb",
        engWord: "be (condition, state), be (located)"
      },
      {
        word: "ɏoꝝeꝯ",
        IPA: "/joˈʔeʤ/",
        partOfSpeech: "verb",
        engWord: "criticise"
      },
      {
        word: "ɏoa",
        IPA: "/joˈa/",
        partOfSpeech: "noun",
        engWord: "career"
      },
      {
        word: "ɏoa",
        IPA: "/joˈaː/",
        partOfSpeech: "adjective",
        engWord: "only"
      },
      {
        word: "ɏoaɲaɥe",
        IPA: "/joˈanjaʧe/",
        partOfSpeech: "verb",
        engWord: "oblige"
      },
      {
        word: "ɏobi",
        IPA: "/joˈbi/",
        partOfSpeech: "noun",
        engWord: "orphan"
      },
      {
        word: "ɏobibiꝯe",
        IPA: "/joˈbibiːʤe/",
        partOfSpeech: "noun",
        engWord: "doctrine"
      },
      {
        word: "ɏobid",
        IPA: "/joˈbid/",
        partOfSpeech: "noun",
        engWord: "cliff"
      },
      {
        word: "ɏobiꝯ",
        IPA: "/joˈbiːʤ/",
        partOfSpeech: "verb",
        engWord: "slash"
      },
      {
        word: "ɏobiꝯeꝷaꝷ",
        IPA: "/joˈbiːʤeʈat/",
        partOfSpeech: "adjective",
        engWord: "cool (fashionable)"
      },
      {
        word: "ɏobu",
        IPA: "/joˈbu/",
        partOfSpeech: "noun",
        engWord: "delegate"
      },
      {
        word: "ɏobuꝯ",
        IPA: "/joˈbuʤ/",
        partOfSpeech: "adjective",
        engWord: "left"
      },
      {
        word: "ɏobuꝯ",
        IPA: "/joˈbuːʤ/",
        partOfSpeech: "noun",
        engWord: "rain"
      },
      {
        word: "ɏobuɲeɥud",
        IPA: "/joˈbuːɲeʧud/",
        partOfSpeech: "noun",
        engWord: "robe"
      },
      {
        word: "ɏoburaꝝe",
        IPA: "/joˈbuɽaʔeː/",
        partOfSpeech: "verb",
        engWord: "ignite"
      },
      {
        word: "ɏoɥ",
        IPA: "/joʧ/",
        partOfSpeech: "noun",
        engWord: "profit"
      },
      {
        word: "ɏoɥa",
        IPA: "/joˈʧaː/",
        partOfSpeech: "adjective",
        engWord: "useful"
      },
      {
        word: "ɏoɥaꝯ",
        IPA: "/joˈʧaːʤ/",
        partOfSpeech: "preposition",
        engWord: "well"
      },
      {
        word: "ɏoɥameꝷu",
        IPA: "/joˈʧaːmetu/",
        partOfSpeech: "adjective",
        engWord: "optimal"
      },
      {
        word: "ɏoɥaꝷkamuɥ",
        IPA: "/joˈʧaːtkamuʧ/",
        partOfSpeech: "noun",
        engWord: "pear"
      },
      {
        word: "ɏoɥe",
        IPA: "/joˈʧe/",
        partOfSpeech: "noun",
        engWord: "shore"
      },
      {
        word: "ɏoɥi",
        IPA: "/joˈʧiː/",
        partOfSpeech: "verb",
        engWord: "leave"
      },
      {
        word: "ɏoɥuꝝeu",
        IPA: "/joˈʧuːʔeuː/",
        partOfSpeech: "noun",
        engWord: "system"
      },
      {
        word: "ɏoɥukamu",
        IPA: "/joˈʧuːkaːmu/",
        partOfSpeech: "noun",
        engWord: "rationale"
      },
      {
        word: "ɏoɥuꞃue",
        IPA: "/joˈʧunue/",
        partOfSpeech: "noun",
        engWord: "value"
      },
      {
        word: "ɏoɥuꝷami",
        IPA: "/joˈʧuːʈami/",
        partOfSpeech: "adjective",
        engWord: "notable"
      },
      {
        word: "ɏod",
        IPA: "/jod/",
        partOfSpeech: "adjective",
        engWord: "low"
      },
      {
        word: "ɏode",
        IPA: "/joˈde/",
        partOfSpeech: "adverb",
        engWord: "therefore"
      },
      {
        word: "ɏodebie",
        IPA: "/joˈdebiːe/",
        partOfSpeech: "noun",
        engWord: "palm (of hand)"
      },
      {
        word: "ɏodebudeꝯ",
        IPA: "/joˈdebudeʤ/",
        partOfSpeech: "verb",
        engWord: "remove"
      },
      {
        word: "ɏoe",
        IPA: "/joˈe/",
        partOfSpeech: "noun",
        engWord: "rep"
      },
      {
        word: "ɏoe",
        IPA: "/joˈeː/",
        partOfSpeech: "noun",
        engWord: "umbrella"
      },
      {
        word: "ɏoeguꝯeꝯ",
        IPA: "/joˈeguʤeʤ/",
        partOfSpeech: "noun",
        engWord: "spike"
      },
      {
        word: "ɏoeꞃebid",
        IPA: "/joˈenebid/",
        partOfSpeech: "adverb",
        engWord: "enough"
      },
      {
        word: "ɏoge",
        IPA: "/joˈge/",
        partOfSpeech: "verb",
        engWord: "mean"
      },
      {
        word: "ɏogga",
        IPA: "/jogˈgaː/",
        partOfSpeech: "noun",
        engWord: "litigation"
      },
      {
        word: "ɏogi",
        IPA: "/joˈgiː/",
        partOfSpeech: "verb",
        engWord: "sweep"
      },
      {
        word: "ɏogibuɥu",
        IPA: "/joˈgiːbuːʧuː/",
        partOfSpeech: "verb",
        engWord: "burn"
      },
      {
        word: "ɏogidebi",
        IPA: "/joˈgiːdebi/",
        partOfSpeech: "preposition",
        engWord: "around"
      },
      {
        word: "ɏoguraɥu",
        IPA: "/joˈguɽaʧu/",
        partOfSpeech: "noun",
        engWord: "catastrophe"
      },
      {
        word: "ɏohaꞃdeɥiꝯ",
        IPA: "/joˈhandeʧiːʤ/",
        partOfSpeech: "noun",
        engWord: "picture"
      },
      {
        word: "ɏoꝯ",
        IPA: "/joʤ/",
        partOfSpeech: "determiner",
        engWord: "what"
      },
      {
        word: "ɏoꝯe",
        IPA: "/joˈʤe/",
        partOfSpeech: "verb",
        engWord: "happen"
      },
      {
        word: "ɏoꝯekaɥud",
        IPA: "/joˈʤekaʧud/",
        partOfSpeech: "verb",
        engWord: "punish"
      },
      {
        word: "ɏoꝯo",
        IPA: "/joˈʤo/",
        partOfSpeech: "verb",
        engWord: "trick",
        partOfSpeech2: "noun",
        engWord2: "trick"
      },
      {
        word: "ɏoka",
        IPA: "/joˈka/",
        partOfSpeech: "adjective",
        engWord: "thin"
      },
      {
        word: "ɏoka",
        IPA: "/joˈkaː/",
        partOfSpeech: "verb",
        engWord: "illuminate"
      },
      {
        word: "ɏokaɥea",
        IPA: "/joˈkaːʧea/",
        partOfSpeech: "noun",
        engWord: "victory"
      },
      {
        word: "ɏokaꝷau",
        IPA: "/joˈkaʈauː/",
        partOfSpeech: "noun",
        engWord: "carriage"
      },
      {
        word: "ɏokid",
        IPA: "/joˈkid/",
        partOfSpeech: "noun",
        engWord: "toddler"
      },
      {
        word: "ɏokuguꝷa",
        IPA: "/joˈkuːguʈa/",
        partOfSpeech: "noun",
        engWord: "degree"
      },
      {
        word: "ɏokuꝷoꝷeꝷ",
        IPA: "/joˈkuːʈoʈet/",
        partOfSpeech: "verb",
        engWord: "invade"
      },
      {
        word: "ɏome",
        IPA: "/joˈme/",
        partOfSpeech: "adverb",
        engWord: "somewhat"
      },
      {
        word: "ɏomeꝯ",
        IPA: "/joˈmeʤ/",
        partOfSpeech: "verb",
        engWord: "supplement"
      },
      {
        word: "ɏomi",
        IPA: "/joˈmi/",
        partOfSpeech: "noun",
        engWord: "revenge"
      },
      {
        word: "ɏomu",
        IPA: "/joˈmu/",
        partOfSpeech: "adverb",
        engWord: "etcetera"
      },
      {
        word: "ɏomuaꝭaꝯ",
        IPA: "/joˈmuaʂaʤ/",
        partOfSpeech: "noun",
        engWord: "bureaucrat"
      },
      {
        word: "ɏoꞃe",
        IPA: "/joˈne/",
        partOfSpeech: "verb",
        engWord: "enforce"
      },
      {
        word: "ɏoꞃeꝯ",
        IPA: "/joˈneʤ/",
        partOfSpeech: "adjective",
        engWord: "academic"
      },
      {
        word: "ɏoꞃeɲabu",
        IPA: "/joˈneɲabu/",
        partOfSpeech: "noun",
        engWord: "leisure"
      },
      {
        word: "ɏoꞃeꝷoe",
        IPA: "/joˈneʈoe/",
        partOfSpeech: "noun",
        engWord: "bridge"
      },
      {
        word: "ɏoꞃhe",
        IPA: "/jonˈhe/",
        partOfSpeech: "noun",
        engWord: "semen"
      },
      {
        word: "ɏoꞃheꝯ",
        IPA: "/jonˈheʤ/",
        partOfSpeech: "verb",
        engWord: "split"
      },
      {
        word: "ɏoꞃukaa",
        IPA: "/joˈnukaa/",
        partOfSpeech: "noun",
        engWord: "activity"
      },
      {
        word: "ɏoɲa",
        IPA: "/jonˈja/",
        partOfSpeech: "noun",
        engWord: "forest"
      },
      {
        word: "ɏoɲa",
        IPA: "/joˈɲa/",
        partOfSpeech: "noun",
        engWord: "baby"
      },
      {
        word: "ɏoɲaꝯ",
        IPA: "/joˈɲaʤ/",
        partOfSpeech: "noun",
        engWord: "spoon"
      },
      {
        word: "ɏoɲakaꝯeꝯ",
        IPA: "/jonˈjakaʤeʤ/",
        partOfSpeech: "verb",
        engWord: "intervene"
      },
      {
        word: "ɏoɲe",
        IPA: "/joˈɲe/",
        partOfSpeech: "noun",
        engWord: "voucher"
      },
      {
        word: "ɏoɲobiꝯe",
        IPA: "/joˈɲobiʤe/",
        partOfSpeech: "noun",
        engWord: "lyrics"
      },
      {
        word: "ɏora",
        IPA: "/joˈɽaː/",
        partOfSpeech: "noun",
        engWord: "progress"
      },
      {
        word: "ɏorad",
        IPA: "/joˈɽad/",
        partOfSpeech: "noun",
        engWord: "earthquake"
      },
      {
        word: "ɏoraꝯ",
        IPA: "/joˈɽaʤ/",
        partOfSpeech: "noun",
        engWord: "deputy"
      },
      {
        word: "ɏoꝭoguꝯa",
        IPA: "/joˈʂoguːʤa/",
        partOfSpeech: "noun",
        engWord: "ticket"
      },
      {
        word: "ɏoꝭoꝯoɲaꝷ",
        IPA: "/joˈʂoʤoɲat/",
        partOfSpeech: "verb",
        engWord: "create"
      },
      {
        word: "ɏoꝷ",
        IPA: "/jot/",
        partOfSpeech: "noun",
        engWord: "object"
      },
      {
        word: "ɏoꝷa",
        IPA: "/joˈʈa/",
        partOfSpeech: "adverb",
        engWord: "little"
      },
      {
        word: "ɏoꝷad",
        IPA: "/joˈʈad/",
        partOfSpeech: "adjective",
        engWord: "quiet"
      },
      {
        word: "ɏoꝷaꝯ",
        IPA: "/joˈʈaʤ/",
        partOfSpeech: "noun",
        engWord: "cylinder"
      },
      {
        word: "ɏoꝷakaꝷad",
        IPA: "/joˈʈakaʈad/",
        partOfSpeech: "noun",
        engWord: "lime"
      },
      {
        word: "ɏoꝷe",
        IPA: "/joˈʈe/",
        partOfSpeech: "noun",
        engWord: "pin"
      },
      {
        word: "ɏoꝷe",
        IPA: "/joˈʈeː/",
        partOfSpeech: "verb",
        engWord: "audit"
      },
      {
        word: "ɏoꝷegeɥaꝯ",
        IPA: "/joˈʈegeʧaːʤ/",
        partOfSpeech: "noun",
        engWord: "creek"
      },
      {
        word: "ɏoꝷeꝯ",
        IPA: "/joˈʈeʤ/",
        partOfSpeech: "noun",
        engWord: "son"
      },
      {
        word: "ɏoꝷka",
        IPA: "/jotˈka/",
        partOfSpeech: "noun",
        engWord: "society"
      },
      {
        word: "ɏoubia",
        IPA: "/joˈuːbia/",
        partOfSpeech: "adjective",
        engWord: "boring"
      },
      {
        word: "ɏouꝯ",
        IPA: "/joˈuʤ/",
        partOfSpeech: "noun",
        engWord: "situation"
      },
      {
        word: "ɏoɏa",
        IPA: "/joˈja/",
        partOfSpeech: "adjective",
        engWord: "black"
      },
      {
        word: "ɏoɏaꝯeꝝe",
        IPA: "/joˈjaʤeːʔe/",
        partOfSpeech: "adjective",
        engWord: "grey"
      },
      {
        word: "ɏu",
        IPA: "/ju/",
        partOfSpeech: "noun",
        engWord: "form"
      },
      {
        word: "ɏu",
        IPA: "/juː/",
        partOfSpeech: "determiner",
        engWord: "all",
        partOfSpeech2: "adverb",
        engWord2: "all"
      },
      {
        word: "ɏuꝝeb",
        IPA: "/juˈʔeb/",
        partOfSpeech: "noun",
        engWord: "plague"
      },
      {
        word: "ɏuꝝeɥ",
        IPA: "/juˈʔeʧ/",
        partOfSpeech: "adjective",
        engWord: "blind"
      },
      {
        word: "ɏuꝝeɥ",
        IPA: "/juːˈʔeʧ/",
        partOfSpeech: "verb",
        engWord: "kid"
      },
      {
        word: "ɏuꝝeꞃeeɥ",
        IPA: "/juːˈʔeneeʧ/",
        partOfSpeech: "noun",
        engWord: "secret",
        partOfSpeech2: "adjective",
        engWord2: "secret"
      },
      {
        word: "ɏuaɥ",
        IPA: "/juːˈaʧ/",
        partOfSpeech: "adjective",
        engWord: "sweet"
      },
      {
        word: "ɏuaɥiɲa",
        IPA: "/juˈaʧinja/",
        partOfSpeech: "verb",
        engWord: "shop"
      },
      {
        word: "ɏub",
        IPA: "/jub/",
        partOfSpeech: "verb",
        engWord: "end"
      },
      {
        word: "ɏuba",
        IPA: "/juːˈbaː/",
        partOfSpeech: "number",
        engWord: "billion"
      },
      {
        word: "ɏubi",
        IPA: "/juˈbiː/",
        partOfSpeech: "noun",
        engWord: "hood"
      },
      {
        word: "ɏubi",
        IPA: "/juːˈbiː/",
        partOfSpeech: "verb",
        engWord: "perform"
      },
      {
        word: "ɏubiꝷ",
        IPA: "/juːˈbiːt/",
        partOfSpeech: "adjective",
        engWord: "adverse"
      },
      {
        word: "ɏubu",
        IPA: "/juːˈbuː/",
        partOfSpeech: "noun",
        engWord: "tribute"
      },
      {
        word: "ɏubuu",
        IPA: "/juˈbuuː/",
        partOfSpeech: "noun",
        engWord: "string"
      },
      {
        word: "ɏuɥ",
        IPA: "/juʧ/",
        partOfSpeech: "verb",
        engWord: "wake"
      },
      {
        word: "ɏuɥ",
        IPA: "/juːʧ/",
        partOfSpeech: "adjective",
        engWord: "wrong"
      },
      {
        word: "ɏuɥeꝷeɥe",
        IPA: "/juːˈʧeʈeʧe/",
        partOfSpeech: "noun",
        engWord: "story, history"
      },
      {
        word: "ɏuɥigiꝯe",
        IPA: "/juːˈʧigiːʤe/",
        partOfSpeech: "verb",
        engWord: "prescribe"
      },
      {
        word: "ɏuɥikade",
        IPA: "/juːˈʧikaːde/",
        partOfSpeech: "noun",
        engWord: "tour"
      },
      {
        word: "ɏuɥuɥ",
        IPA: "/juːˈʧuʧ/",
        partOfSpeech: "noun",
        engWord: "addiction"
      },
      {
        word: "ɏude",
        IPA: "/juˈde/",
        partOfSpeech: "pronoun",
        engWord: "anyone"
      },
      {
        word: "ɏude",
        IPA: "/juːˈde/",
        partOfSpeech: "adverb",
        engWord: "again"
      },
      {
        word: "ɏudebib",
        IPA: "/juˈdebib/",
        partOfSpeech: "verb",
        engWord: "innovate"
      },
      {
        word: "ɏue",
        IPA: "/juˈeː/",
        partOfSpeech: "noun",
        engWord: "scrutiny"
      },
      {
        word: "ɏue",
        IPA: "/juːˈe/",
        partOfSpeech: "noun",
        engWord: "science"
      },
      {
        word: "ɏueɥ",
        IPA: "/juˈeʧ/",
        partOfSpeech: "noun",
        engWord: "lace"
      },
      {
        word: "ɏueɥ",
        IPA: "/juˈeːʧ/",
        partOfSpeech: "pronoun",
        engWord: "no"
      },
      {
        word: "ɏueɥ",
        IPA: "/juːˈeʧ/",
        partOfSpeech: "noun",
        engWord: "steam"
      },
      {
        word: "ɏueguɥe",
        IPA: "/juːˈeguʧe/",
        partOfSpeech: "noun",
        engWord: "interior"
      },
      {
        word: "ɏuekaꝝe",
        IPA: "/juːˈekaʔe/",
        partOfSpeech: "noun",
        engWord: "net"
      },
      {
        word: "ɏugeɥ",
        IPA: "/juˈgeʧ/",
        partOfSpeech: "noun",
        engWord: "essence"
      },
      {
        word: "ɏugguꝷ",
        IPA: "/juːgˈguːt/",
        partOfSpeech: "verb",
        engWord: "employ"
      },
      {
        word: "ɏugiɥ",
        IPA: "/juːˈgiːʧ/",
        partOfSpeech: "noun",
        engWord: "meadow"
      },
      {
        word: "ɏugu",
        IPA: "/juˈgu/",
        partOfSpeech: "adjective",
        engWord: "cheap"
      },
      {
        word: "ɏugu",
        IPA: "/juˈguː/",
        partOfSpeech: "verb",
        engWord: "complement"
      },
      {
        word: "ɏuguɥ",
        IPA: "/juːˈguʧ/",
        partOfSpeech: "noun",
        engWord: "celebrity"
      },
      {
        word: "ɏuguꞃege",
        IPA: "/juːˈgunege/",
        partOfSpeech: "verb",
        engWord: "ground"
      },
      {
        word: "ɏuhaꝷ",
        IPA: "/juːˈhat/",
        partOfSpeech: "noun",
        engWord: "motel"
      },
      {
        word: "ɏuꝯa",
        IPA: "/juːˈʤa/",
        partOfSpeech: "number",
        engWord: "ten"
      },
      {
        word: "ɏuꝯebiɲeɥ",
        IPA: "/juːˈʤeːbiːɲeʧ/",
        partOfSpeech: "noun",
        engWord: "misery"
      },
      {
        word: "ɏuꝯeɥ",
        IPA: "/juːˈʤeʧ/",
        partOfSpeech: "verb",
        engWord: "kidnap"
      },
      {
        word: "ɏuꝯemuka",
        IPA: "/juˈʤemuːka/",
        partOfSpeech: "noun",
        engWord: "taxi"
      },
      {
        word: "ɏuꝯo",
        IPA: "/juˈʤo/",
        partOfSpeech: "noun",
        engWord: "ant"
      },
      {
        word: "ɏuꝯoꝯaɏa",
        IPA: "/juˈʤoʤaja/",
        partOfSpeech: "adjective",
        engWord: "portable"
      },
      {
        word: "ɏuka",
        IPA: "/juˈka/",
        partOfSpeech: "verb",
        engWord: "speak",
        partOfSpeech2: "noun",
        engWord2: "speech"
      },
      {
        word: "ɏuka",
        IPA: "/juːˈkaː/",
        partOfSpeech: "verb",
        engWord: "dance"
      },
      {
        word: "ɏukaɥ",
        IPA: "/juːˈkaʧ/",
        partOfSpeech: "determiner",
        engWord: "several"
      },
      {
        word: "ɏukaɏameɥ",
        IPA: "/juˈkajameʧ/",
        partOfSpeech: "noun",
        engWord: "existence"
      },
      {
        word: "ɏuku",
        IPA: "/juˈkuː/",
        partOfSpeech: "noun",
        engWord: "attribute"
      },
      {
        word: "ɏuku",
        IPA: "/juːˈkuː/",
        partOfSpeech: "verb",
        engWord: "send"
      },
      {
        word: "ɏukuɥ",
        IPA: "/juːˈkuːʧ/",
        partOfSpeech: "noun",
        engWord: "cab"
      },
      {
        word: "ɏumi",
        IPA: "/juːˈmi/",
        partOfSpeech: "noun",
        engWord: "cuisine"
      },
      {
        word: "ɏumi",
        IPA: "/juːˈmiː/",
        partOfSpeech: "noun",
        engWord: "have to (must)"
      },
      {
        word: "ɏumikaka",
        IPA: "/juːˈmiːkaka/",
        partOfSpeech: "verb",
        engWord: "smack"
      },
      {
        word: "ɏumu",
        IPA: "/juˈmuː/",
        partOfSpeech: "noun",
        engWord: "charity"
      },
      {
        word: "ɏumu",
        IPA: "/juːˈmu/",
        partOfSpeech: "noun",
        engWord: "mammal"
      },
      {
        word: "ɏuꞃe",
        IPA: "/juːˈne/",
        partOfSpeech: "verb",
        engWord: "elaborate"
      },
      {
        word: "ɏuꞃheꝷ",
        IPA: "/juːnˈhet/",
        partOfSpeech: "noun",
        engWord: "chaos"
      },
      {
        word: "ɏuꞃu",
        IPA: "/juˈnuː/",
        partOfSpeech: "adjective",
        engWord: "partisan"
      },
      {
        word: "ɏuɲaɥ",
        IPA: "/juːnˈjaʧ/",
        partOfSpeech: "noun",
        engWord: "formula"
      },
      {
        word: "ɏuɲageme",
        IPA: "/juːˈɲageme/",
        partOfSpeech: "verb",
        engWord: "contrast"
      },
      {
        word: "ɏuɲeb",
        IPA: "/juˈɲeb/",
        partOfSpeech: "verb",
        engWord: "witness"
      },
      {
        word: "ɏura",
        IPA: "/juˈɽa/",
        partOfSpeech: "noun",
        engWord: "shrine"
      },
      {
        word: "ɏura",
        IPA: "/juːˈɽa/",
        partOfSpeech: "adjective",
        engWord: "dim"
      },
      {
        word: "ɏurab",
        IPA: "/juˈɽab/",
        partOfSpeech: "adjective",
        engWord: "aroused (sexually)"
      },
      {
        word: "ɏuraɥ",
        IPA: "/juˈɽaːʧ/",
        partOfSpeech: "noun",
        engWord: "mother"
      },
      {
        word: "ɏuꝷ",
        IPA: "/juːt/",
        partOfSpeech: "conjunction",
        engWord: "before"
      },
      {
        word: "ɏuꝷa",
        IPA: "/juˈʈa/",
        partOfSpeech: "verb",
        engWord: "plough"
      },
      {
        word: "ɏuꝷa",
        IPA: "/juːˈʈa/",
        partOfSpeech: "noun",
        engWord: "puzzle"
      },
      {
        word: "ɏuꝷabia",
        IPA: "/juˈʈabia/",
        partOfSpeech: "noun",
        engWord: "arch"
      },
      {
        word: "ɏuꝷaɥ",
        IPA: "/juˈʈaʧ/",
        partOfSpeech: "noun",
        engWord: "morale"
      },
      {
        word: "ɏuꝷarab",
        IPA: "/juˈʈaɽab/",
        partOfSpeech: "noun",
        engWord: "bat (winged mammal)"
      },
      {
        word: "ɏuꝷe",
        IPA: "/juˈʈe/",
        partOfSpeech: "noun",
        engWord: "self"
      },
      {
        word: "ɏuꝷegeggu",
        IPA: "/juːˈʈegegguː/",
        partOfSpeech: "noun",
        engWord: "galaxy"
      },
      {
        word: "ɏuꝷeɲobu",
        IPA: "/juːˈʈeɲobu/",
        partOfSpeech: "noun",
        engWord: "strap"
      },
      {
        word: "ɏuꝷokaꞃeɥ",
        IPA: "/juˈʈokaneʧ/",
        partOfSpeech: "adjective",
        engWord: "prone"
      },
      {
        word: "ɏuꝷu",
        IPA: "/juˈtu/",
        partOfSpeech: "adjective",
        engWord: "imaginary"
      },
      {
        word: "ɏuꝷu",
        IPA: "/juːˈtu/",
        partOfSpeech: "verb",
        engWord: "owe"
      },
      {
        word: "ɏuɏagebu",
        IPA: "/juːˈjagebuː/",
        partOfSpeech: "noun",
        engWord: "reservation"
      }
    ];
  });

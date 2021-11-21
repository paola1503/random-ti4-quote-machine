var quotes= [
    "Do you hear, flesh-thing? The harmonies of the Arborec? Your golems of metal and noise and fire have deafened you to the symphony.",
    "Hold your fire until the main fleet arrives. Our armada will blot out their sun - when they die, they will die in darkness!",
    "O, Lisis, you whose fate is forever carved into the backs of the weary. Your spectre is all we see.",
    "No longer will the Gashlai be shackled by your whims. Be extinguished, now, and know that you have lost.",
    "There is no price too great for the Hacan, no silk too fine, and no war too long. My people will persevere.",
    "Our enemies consider us children. They think us weak. Show them. Show them what the children of Jord can do!",
    "We do not mean to offend the honored ambassador. We mean only to imply that should his ship attempt to pass through the gate, it will not return.",
    "You do not know the meaning of time. You do not comprehend the infinite. Your ignorance is surpassed only by your irrelevance.",
    "One people. One mind. One destiny. We will rise above the pit they have thrown us in.",
    "You insult me, sssknling. Ze monstrosity you suggest - ze Druua, we are not capable of such cruelty. Purge zis madness from your mind and leave zis world.",
    "The final step of all craft. The gate to eternity. A transcendency to a state of being that can only be described as godhood.",
    "Fear is death. Most of you will die. The Queen Mother thanks you for your worthy sacrifice.",
    "We cannot halt progress for the sake of morality. If you have not the stomach for science, then I suggest you depart Wun-Escha immediately.",
    "We will claim what is ours by right, cousins. We will fulfill the destiny of those who came before us, and your treachery will not be forgotten.",
    "To fight without cause is not the way, human. Curb your anger. Let us walk through the gardens and consider how to proceed.",
    "A-ah! You mistake me for a human; that we share the blood of Jord. I am no son of humanity. My life for the Yin!",
    "Clever Ssruu has met the offworlder and made it dead. What does the Guild want for Ssruu to meet next?",
    "You tread upon sacred ground. There is no path to atonement for your sins, only swift and merciless defeat.",
    "We see what you are. We see what you are not. There is nothing we do not know.",
    "KNEEL.",
    "For too long the galaxy has squabbled over the bones of our predecessors. It's time for something new.",
    "The future must be preserved at all costs.",
    "The Titans seek something more permanent than a mere empire.",
    "YOUR FORM IS FRAGILE AND WEAK. LET ME RELIEVE YOU OF YOUR HARDSHIPS."
]

var authors= [
    "- Dirzuga Rophal",
    "- Baron Unienn",
    "- The Lay of Lisis",
    "- Fire Warden Umbat",
    "- Hacan Carth",
    "- Supreme Admiral DeLouis",
    "- Emissary Taivra",
    "- Diplomat 2RAM",
    "- Erwan Mentak, Founder of the Coalition",
    "- Q'uesh Sish",
    "- Mordai, The First",
    "- G'hom Sek'kus",
    "- Doctor Sucaban",
    "- Muad Di Faruuq",
    "- Elder Qanoj",
    "- Brother Milor",
    "- Ssruu",
    "- Sakora Aun Nabori, Argent Vanguard",
    "- Conservator Procyon",
    "- Airo Shir Aur",
    "- Tetrach Clik",
    "- The Nomad",
    "- Pyrolusius the Observer",
    "- That Which Molds Flesh"
]

var images= [
    "arborec.png",
    "letnev.png",
    "saar.png",
    "muaat.png",
    "hacan.png",
    "sol.png",
    "creuss.png",
    "l1z1x.png",
    "mentak.png",
    "naalu.png",
    "nekro.png",
    "sardakk.png",
    "jolnar.png",
    "winnu.png",
    "xxcha.png",
    "yin.png",
    "yssaril.png",
    "argent.jpeg",
    "empyrean.png",
    "mahact.png",
    "naazrokha.png",
    "nomad.png",
    "titans.png",
    "cabal.jpeg"
]

function newQuote(){
    var randomNumber= Math.floor(Math.random()*(quotes.length));
    document.getElementById("thequote").innerHTML= quotes[randomNumber];
    document.getElementById("theauthor").innerHTML= authors[randomNumber];
    $("img").attr("src", images[randomNumber]);
}

$(document).ready(function () {
    newQuote()
    });
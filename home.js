// Home Page

'use strict;'

// Global Variables
let row = 0;
let timer;
let reading = false;
let disable = false;

// Event Listeners
// Images
document.getElementById('s1b1').addEventListener('click', showTextS1B1);
document.getElementById('s1b2').addEventListener('click', showTextS1B2);
document.getElementById('s1b3').addEventListener('click', showTextS1B3);
document.getElementById('s1b4').addEventListener('click', showTextS1B4);
document.getElementById('s2b1').addEventListener('click', showTextS2B1);
document.getElementById('s2b2').addEventListener('click', showTextS2B2);
document.getElementById('s2b3').addEventListener('click', showTextS2B3);
document.getElementById('s2b4').addEventListener('click', showTextS2B4);
document.getElementById('s3b1').addEventListener('click', showTextS3B1);
document.getElementById('s3b2').addEventListener('click', showTextS3B2);
document.getElementById('s3b3').addEventListener('click', showTextS3B3);
document.getElementById('s3b4').addEventListener('click', showTextS3B4);
document.getElementById('s4b1').addEventListener('click', showTextS4B1);
document.getElementById('s4b2').addEventListener('click', showTextS4B2);
document.getElementById('s4b3').addEventListener('click', showTextS4B3);
document.getElementById('s4b4').addEventListener('click', showTextS4B4);
document.getElementById('s5b1').addEventListener('click', showTextS5B1);
document.getElementById('s5b2').addEventListener('click', showTextS5B2);
document.getElementById('s5b3').addEventListener('click', showTextS5B3);
document.getElementById('s5b4').addEventListener('click', showTextS5B4);

// Buttons
document.getElementById('request-book').addEventListener('click', requestBook);
document.getElementById('clear').addEventListener('click', clearInput);

function showTextS1B1() {

    // When Not a Penny More, Not a Penny Less is Clicked
    document.getElementById('s1-text').innerHTML = 'Not a Penny More, Not a Penny Less Description: The conned: an Oxford don, a revered society physician, a chic French art dealer, and a charming English lord. They have one thing in common. Overnight, each novice investor lost his life’s fortune to one man. The con: Harvey Metcalfe. A brilliant, self-made guru of deceit. A very dangerous individual. And now, a hunted man. With nothing left to lose four strangers are about to come together — each expert in their own field. Their plan: find Harvey, shadow him, trap him, and penny-for-penny, destroy him. From the luxurious casinos of Monte Carlo to the high-stakes windows at Ascot to the bustling streets of Wall Street to fashionable London galleries, their own ingenious game has begun. It’s called revenge — and they were taught by a master.'

    setTimeout(s1Text, 50000);
}

function showTextS1B2() {

    // When The Sixth Victim is Clicked
    document.getElementById('s1-text').innerHTML = 'The Sixth Victim Description: The Sixth Victim is an imaginative take on the murders perpetrated by Jack the Ripper in the murky backstreets of Victorian London. Highly atmospheric, impeccably-researched, and with a supernatural twist, the novel is also about sisters and friendship, class and loyalty.'

    setTimeout(s1Text, 50000);
}

function showTextS1B3() {

    // When And Only to Deceive is Clicked
    document.getElementById('s1-text').innerHTML = 'And Only to Deceive Description: Emily\'s desire to learn more about her late husband takes her to the quiet corridors of the British Museum, where, amid priceless ancient statues, she uncovers a dark, dangerous secret involving stolen artifacts from the Greco-Roman galleries. To complicate matters, she\'s juggling two very prominent and wealthy suitors, one of whose intentions may go beyond the marrying kind. Her search to solve the crime leads to surprising discoveries about the man she married and causes her to question the role in Victorian society to which she, as a woman, is relegated.'

    setTimeout(s1Text, 50000);
}

function showTextS1B4() {
   
        // When Homes is Clicked
        document.getElementById('s1-text').innerHTML = 'Homes Description: In 2010, the al Rabeeah family left their home in Iraq in hope of a safer life. They moved to Homs, in Syria — just before the Syrian civil war broke out. Abu Bakr, one of eight children, was ten years old when the violence began on the streets around him: car bombings, attacks on his mosque and school, firebombs late at night. Homes tells of the strange juxtapositions of growing up in a war zone: horrific, unimaginable events punctuated by normalcy — soccer, cousins, video games, friends. Homes is the remarkable true story of how a young boy emerged from a war zone — and found safety in Canada — with a passion for sharing his story and telling the world what is truly happening in Syria. As told to her by Abu Bakr al Rabeeah, writer Winnie Yeung has crafted a heartbreaking, hopeful, and urgently necessary book that provides a window into understanding Syria.'

        setTimeout(s1Text, 50000);
}

function showTextS2B1() {

        // When Daddy's Gone A Hunting is Clicked
        document.getElementById('s2-text').innerHTML = 'Daddy\'s Gone A Hunting Description: Mary Higgins Clark, the beloved “Queen of Suspense,” exposes a dark secret from a family’s past that threatens the lives of sisters Kate and Hannah Connelly when the family-owned furniture firm explodes into flames in the middle of the night, leveling the buildings to the ground, including a museum where priceless antiques have been on permanent display for years.'

        setTimeout(s2Text, 50000);
}

function showTextS2B2() {

        // When I'll Walk Alone is Clicked
        document.getElementById('s2-text').innerHTML = 'I\'ll Walk Alone Description: Alexandra “Zan” Moreland, a gifted, beautiful interior designer on the verge of a successful Manhattan career, is terrified to discover that somebody is not only using her credit cards, but may also be impersonating her in a scheme that involves the much more brutal crimes of kidnapping and murder. Already haunted by the disappearance of her own son, Matthew, kidnapped in broad daylight two years ago in Central Park, Zan has been left torn between hope and despair. Now, on what would be Matthew’s fifth birthday, photos surface that seem to show Zan kidnapping her own child, followed by a chain of events that suggests somebody has stolen her identity.'

        setTimeout(s2Text, 50000);
}

function showTextS2B3() {
   
        // When The Man in the Brown Suit is Clicked
        document.getElementById('s2-text').innerHTML = 'The Man in the Brown Suit Description: Pretty, young Anne Beddingfield has come to London looking for adventure. But adventure finds her when a strange-smelling man falls off an Underground platform and is electrocuted on the rails. The police verdict is accidental death. But who was the man in the brown suit who examined the body before running away? Armed with only one cryptic clue, Anne is determined to track him down and bring the mysterious killer to justice.'

        setTimeout(s2Text, 50000);
}

function showTextS2B4() {
    
        // When Murder on the Orient Express is Clicked
        document.getElementById('s2-text').innerHTML = 'Murder on the Orient Express Description: Just after midnight, a snowdrift stops the Orient Express in its tracks. The luxurious train is surprisingly full for the time of the year, but by the morning it is one passenger fewer. An American tycoon lies dead in his compartment, stabbed a dozen times, his door locked from the inside. Isolated and with a killer in their midst, detective Hercule Poirot must identify the murderer – in case he or she decides to strike again.'

        setTimeout(s2Text, 50000);
}

function showTextS3B1() {

        // When You May Now Kill The Bride is Clicked
        document.getElementById('s3-text').innerHTML = 'You May Now Kill The Bride Description: Two sisters, divided by time. Each with a terrible resentment she can barely contain. Two Fear family weddings, decades apart... Each bride will find that the ancient curse that haunts the Fears LIVES ON. It feeds off the evil that courses through their blood. It takes its toll in unexpected ways, and allows dark history to repeat itself. In this all-new Fear Street story, family ties bind sisters together—till DEATH do they part.'

        setTimeout(s3Text, 50000);
}

function showTextS3B2() {

        // When Don't Stay Up Late is Clicked
        document.getElementById('s3-text').innerHTML = 'Don\'t Stay Up Late Description: Both day and night, Lisa Brooks is plagued with nightmares and hallucinations. Could they be caused by the horrifying accident that landed her in the hospital for weeks? When Lisa finds out that a neighbor is looking for a babysitter for her little boy, Lisa jumps at the chance to keep busy and take her mind off of her troubling thoughts. But then the murders start -- and her friends begin dying one by one. Are Lisa\'s nightmares coming true? Find out in the next installment of R.L. Stine\'s Fear Street series, Don\'t Stay Up Late.'

        setTimeout(s3Text, 50000);
}

function showTextS3B3() {

        // When The Confession is Clicked
        document.getElementById('s3-text').innerHTML = 'The Confession Description: Five close friends... one murderer.. All Julie\'s friends hated Al. They all wished Al were dead. But that doesn\'t mean one of them killed him. Julie knows her friends. She knows they are innocent.... Until one of them confesses. Julie and her friends promise to keep the killer\'s secret. After all, they know he would never kill again. Or would he?'

        setTimeout(s3Text, 50000);
}

function showTextS3B4() {

        // When Dead End is Clicked
        document.getElementById('s3-text').innerHTML = 'Dead End Description: Natalie Erickson and her friends share a terrible secret. They were all in the car that foggy night - the night someone died at the dead end. Now someone knows too much and there\'s danger ahead. Natalie just wants a way out of this nightmare - but there is none.'

        setTimeout(s3Text, 50000);

}

function showTextS4B1() {

        // When The Fault in Our Stars is Clicked
        document.getElementById('s4-text').innerHTML = 'The Fault in Our Stars Description: Despite the tumor-shrinking medical miracle that has bought her a few years, Hazel has never been anything but terminal, her final chapter inscribed upon diagnosis. But when a gorgeous plot twist named Augustus Waters suddenly appears at Cancer Kid Support Group, Hazel\'s story is about to be completely rewritten. Insightful, bold, irreverent, and raw, The Fault in Our Stars is award-winning author John Green\'s most ambitious and heartbreaking work yet, brilliantly exploring the funny, thrilling, and tragic business of being alive and in love.'

        setTimeout(s4Text, 50000);

}

function showTextS4B2() {

        // When Twilight is Clicked
        document.getElementById('s4-text').innerHTML = 'Twilight Description: In the first book of the Twilight Saga, internationally bestselling author Stephenie Meyer introduces Bella Swan and Edward Cullen, a pair of star-crossed lovers whose forbidden relationship ripens against the backdrop of small-town suspicion and a mysterious coven of vampires. This is a love story with bite.'

        setTimeout(s4Text, 50000);

}

function showTextS4B3() {

        // When Stargirl is Clicked
        document.getElementById('s4-text').innerHTML = 'Stargirl Description: Leo Borlock follows the unspoken rule at Mica Area High School: don\'t stand out--under any circumstances! Then Stargirl arrives at Mica High and everything changes--for Leo and for the entire school. After 15 years of home schooling, Stargirl bursts into tenth grade in an explosion of color and a clatter of ukulele music, enchanting the Mica student body. But the delicate scales of popularity suddenly shift, and Stargirl is shunned for everything that makes her different. Somewhere in the midst of Stargirl\'s arrival and rise and fall, normal Leo Borlock has tumbled into love with her.'

        setTimeout(s4Text, 50000);
}

function showTextS4B4() {

        // When The Notebook is Clicked
        document.getElementById('s4-text').innerHTML = 'The Notebook Description: A man with a faded, well-worn notebook open in his lap. A woman experiencing a morning ritual she doesn\'t understand. Until he begins to read to her. The Notebook is an achingly tender story about the enduring power of love, a story of miracles that will stay with you forever.'

        setTimeout(s4Text, 50000);
}

function showTextS5B1() {

        // When Pride and Prejudice is Clicked
        document.getElementById('s5-text').innerHTML = 'Pride and Prejudice Description: This tale of love and values unfolds in the class-conscious England of the late 18th century. The five Bennet sisters - including strong-willed Elizabeth and young Lydia - have been raised by their mother with one purpose in life: finding a husband. When a wealthy bachelor takes up residence in a nearby mansion, the Bennets are abuzz. Amongst the man\'s sophisticated circle of friends, surely there will be no shortage of suitors for the Bennet sisters. But when Elizabeth meets up with the handsome and - it would seem - snobbish Mr. Darcy, the battle of the sexes is joined.'

        setTimeout(s5Text, 50000);
}

function showTextS5B2() {

        // When A Tale of Two Cities is Clicked
        document.getElementById('s5-text').innerHTML = 'A Tale of Two Cities Description: After eighteen years as a political prisoner in the Bastille, the ageing Doctor Manette is finally released and reunited with his daughter in England. There the lives of two very different men, Charles Darnay, an exiled French aristocrat, and Sydney Carton, a disreputable but brilliant English lawyer, become enmeshed through their love for Lucie Manette. From the tranquil roads of London, they are drawn against their will to the vengeful, bloodstained streets of Paris at the height of the Reign of Terror, and they soon fall under the lethal shadow of La Guillotine.'

        setTimeout(s5Text, 50000);
}

function showTextS5B3() {

        // When To Kill a Mockingbird is Clicked
        document.getElementById('s5-text').innerHTML = 'To Kill a Mockingbird Description: The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it, To Kill A Mockingbird became both an instant bestseller and a critical success when it was first published in 193. Compassionate, dramatic, and deeply moving, To Kill A Mockingbird takes readers to the roots of human behavior - to innocence and experience, kindness and cruelty, love and hatred, humor and pathos.'

        setTimeout(s5Text, 50000);
}

function showTextS5B4() {

        // When Jane Eyre is Clicked
        document.getElementById('s5-text').innerHTML = 'Jane Eyre Description: Charlotte Brontë’s most beloved novel describes the passionate love between the courageous orphan Jane Eyre and the brilliant, brooding, and domineering Rochester. The loneliness and cruelty of Jane’s childhood strengthens her natural independence and spirit, which prove invaluable when she takes a position as a governess at Thornfield Hall. But after she falls in love with her sardonic employer, her discovery of his terrible secret forces her to make a heart-wrenching choice. Ever since its publication in 1847, Jane Eyre has enthralled every kind of reader, from the most critical and cultivated to the youngest and most unabashedly romantic. It lives as one of the great triumphs of storytelling and as a moving and unforgettable portrayal of a woman’s quest for self-respect.'

        setTimeout(s5Text, 50000);
}

// Button Functions
function requestBook() {
    row += 1;
    let title = document.getElementById('input1').value;
    let author = document.getElementById('input2').value;
    let currentRow = document.getElementById('table2').insertRow(row);
    let cell1 = currentRow.insertCell(0);
    cell1.innerHTML = title;
    let cell2 = currentRow.insertCell(1);
    cell2.innerHTML = author;
}

function clearInput() {
    document.getElementById('input1').value = '';
    document.getElementById('input2').value = '';
}

// Set Time Functions

function s1Text() {
    document.getElementById('s1-text').innerHTML = '';
}

function s2Text() {
    document.getElementById('s2-text').innerHTML = '';
}

function s3Text() {
    document.getElementById('s3-text').innerHTML = '';
}

function s4Text() {
    document.getElementById('s4-text').innerHTML = '';
}

function s5Text() {
    document.getElementById('s5-text').innerHTML = '';
}
import React from "react";
import "./Author.css";
import book1 from "../../assets/images/book1.png";
import book2 from "../../assets/images/book2.png";
import book3 from "../../assets/images/book3.png";
import MAGUIRE from "../../assets/images/maguire.png";
import ShowMoreLessBtn from "../ShowMoreLessBtn/ShowMoreLessBtn";
import PopularHightLight from "../CarouselForm/PopularHightLight";

function Author({ name, infor }) {
  return (
    <div className="author__section">
      <h3>Popular Highlights in this book</h3>
      <div>
        <PopularHightLight />
      </div>
      <div className="author__published">
        <h3>From the Publisher</h3>
        <div className="author__publishedTOp">
          <img src={book1} alt="" />
        </div>
      </div>
      <div className="author__sectionHeader">
        <h3>About the author</h3>
        <p>
          Follow authors to get new release updates, plus improved
          recommendations.
        </p>
      </div>

      <div className="author__container">
        <div className="author__left">
          <img className="author__img" src={MAGUIRE} alt="/#" />
        </div>
        <div className="author__right">
          <div className="author__name">{name}</div>
          <div className="author__infor">{infor}</div>
        </div>
      </div>

      <h2 className="author__sectionHeader">Editorial Reviews</h2>
      <p className="author__sectionHeader">Review</p>
      <div className="Editorial__Reviews">
        <div>
          <ShowMoreLessBtn limit={1150}>
            “Hoover builds a terrific new-adult world here with two people
            growing in their careers and discovering mature love.” -- Booklist
            (starred review) "A must-read book of the year! I loved every word,
            I felt every moment, and I will never forget this story. I don’t
            give out a lot of 6 star ratings (in fact this will be the first one
            I’ve given this year) but the truth is that this book went above and
            beyond. The story was powerful, the writing was stunning, and the
            way every single piece of it was woven together was simply
            breathtaking.” -- Aestas, blog review “By the end of this book, my
            heart was aching and rejoicing at the same time from the countless
            emotions it had been exposed to. This is the sexiest, most
            heart-wrenching Colleen Hoover book to date—a book that shows us a
            brand new side of this author’s writing genius, and it is in my
            humble opinion, her best work thus far.” -- Natasha is a Book
            Junkie, blog review “Colleen Hoover once again proves she’s a master
            storyteller in her best and boldest work to date.” -- Vilma Iris'
            Blog “She's done it again, my friends. And to be honest I didn't
            think she was ever going to write something I loved more than MAYBE
            SOMEDAY, but I was book hung over for 2 full days after UGLY LOVE.”
            -- Me, My Shelf, & I, blog review “I fell in love with this book
            from the very first chapter.” -- Owl Always be Reading, blog review
            "Ugly Love is another hit from Colleen Hoover that will leave your
            heart open and exposed to the myriad of emotions Tate and Miles'
            story will inflict upon it.” -- Lovin Los Libros, blog review “
            Colleen Hoover has given us a story that is full of emotion.... she
            stayed true to her reputation of writing characters that are real
            and a story that is both compelling and powerful.” -- A Literary
            Perusal, blog review "Colleen Hoover just demolished me. Completely
            and 100% blew me away…not that I’m surprised or anything because she
            never ceases to amaze me.... I was pulled in from the beginning…and
            I loved every second of it!” -- True Story Book Blog, blog tour
            review "Thank you for another 'rip my heart out' excursion ... and
            with Ugly Love you somehow managed to do it TWICE! And I loved every
            bit of it!” -- The Real Housewives of Romance, blog tour review “If
            you were to only read one book this year, make that book Ugly
            Love.... It's definitely my favorite book of all time, and that's
            not a phrase that I use lightly.” -- Kayla’s Reads & Reviews, blog
            tour review “I LOVED this book. I stayed up until 1:00 a.m. to
            finish it, something I haven’t done in ages.... Ugly Love was a
            riveting page-turner that I couldn’t put down.” -- Reading Books
            like a Boss, blog review “Colleen is an artist. She has this uncanny
            ability to take normal, everyday words and somehow turn them into
            the most beautiful poetry I’ve ever read. The beauty of her lyrical
            writing style made me teary-eyed countless times. She can take
            something so simple and make it so powerful.” -- Nestled in a Book,
            blog review “Colleen Hoover does it again. She always creates a
            story that gets under your skin and hits you right in the heart.
            Ugly Love was no exception. Miles and Tate have a very intense story
            to be told and only Colleen Hoover could do it justice.” -- Readers
            Live a 1000 Lives, blog tour review “I’m not sure my heart will ever
            forget this book. Incredible read!!!” -- Flirty and Dirty Book Blog,
            blog tour review “Colleen Hoover has done it again. Her words have
            wholly altered me, mind, body, and spirit. I can’t explain what I’ve
            done or where I’ve been the past few hours, and the only thing that
            is in my mind is WOW.” -- The Scarlet Siren, blog tour review "Ugly
            Love carries the kinship of stellar writing, (poetry, really),
            searing emotion, and a story that hits you in your very core.” ― I
            Heart Big Books, blog tour review "I LOVE everything and anything
            that this woman writes…This is everything we come to expect from Ms.
            Hoover and SO MUCH more! You know when you come across a book and
            you don’t know what to say about it other than that you loved it and
            it was amazing?! Well thats how I feel about Ugly Love. JUST READ
            IT! TRUST ME!” ― Shh Mom’s Reading, blog tour review From the Author
            Colleen Hoover is the author of five New York Times bestselling
            novels. Her first series was published in 2012 and includes SLAMMED,
            POINT OF RETREAT and the companion novel THIS GIRL. Her second
            series, published in 2013, includes the #1 NYT's bestseller HOPELESS
            and the companion novel, LOSING HOPE. She has released a free
            novella, FINDING CINDERELLA, as a thank you to her readers for their
            continued support. The novella is a companion to her Hopeless
            series, but can be read as a standalone. You can follow Colleen on
            Instagram @colleenhoover if you want to watch her pointless, random
            videos. You can also follow her on TWITTER, but she rarely tweets
            anything worth following. You can also find her on her blog at
            colleenhoover.com or on her very active Facebook page at
            facebook.com/authorcolleenhoover where she loves to give away free
            stuff when her husband isn't looking. About the Author Colleen
            Hoover is the #1 New York Times bestselling author of more than
            twenty-three novels, including It Ends with Us, All Your Perfects,
            Ugly Love, and Verity. In 2015, Colleen and her family founded a
            nonprofit called The Bookworm Box, a bookstore and monthly book
            subscription service. Colleen lives in Texas with her husband and
            their three boys. For more information, please visit
            ColleenHoover.com. Excerpt. © Reprinted by permission. All rights
            reserved. Chapter One: Tate chapter one TATE “Somebody stabbed you
            in the neck, young lady.” My eyes widen, and I slowly turn toward
            the elderly gentleman standing at my side. He presses the up button
            on the elevator and faces me. He smiles and points to my neck. “Your
            birthmark,” he says. My hand instinctively goes up to my neck, and I
            touch the dime-sized mark just below my ear. “My grandfather used to
            say the placement of a birthmark was the story of how a person lost
            the battle in their past life. I guess you got stabbed in the neck.
            Bet it was a quick death, though.” I smile, but I can’t tell if I
            should be afraid or entertained. Despite his somewhat morbid opening
            conversation, he can’t be that dangerous. His curved posture and
            shaky stance give away that he isn’t a day less than eighty years
            old. He takes a few slow steps toward one of two velvet red chairs
            that are positioned against the wall next to the elevator. He grunts
            as he sinks into the chair and then looks up at me again. “You going
            up to floor eighteen?” My eyes narrow as I process his question. He
            somehow knows what floor I’m going to, even though this is the first
            time I’ve ever set foot in this apartment complex, and it’s
            definitely the first time I’ve ever laid eyes on this man. “Yes,
            sir,” I say cautiously. “Do you work here?” “I do indeed.” He nods
            his head toward the elevator, and my eyes move to the illuminated
            numbers overhead. Eleven floors to go before it arrives. I pray it
            gets here quickly. “I push the button for the elevator,” he says. “I
            don’t think there’s an official title for my position, but I like to
            refer to myself as a flight captain, considering I do send people as
            high as twenty stories up in the air.” I smile at his words, since
            my brother and father are both pilots. “How long have you been
            flight captain of this elevator?” I ask as I wait. I swear this is
            the slowest damn elevator I’ve ever encountered. “Since I got too
            old to do maintenance on this building. Worked here thirty-two years
            before I became captain. Been sending people on flights now for more
            than fifteen years, I think. Owner gave me a pity job to keep me
            busy till I died.” He smiles to himself. “What he didn’t realize is
            that God gave me a lot of great things to accomplish in my life, and
            right now, I’m so far behind I ain’t ever gonna die.” I find myself
            laughing when the elevator doors finally open. I reach down to grab
            the handle of my suitcase and turn to him one more time before I
            step inside. “What’s your name?” “Samuel, but call me Cap,” he says.
            “Everybody else does.” “You got any birthmarks, Cap?” He grins. “As
            a matter of fact, I do. Seems in my past life, I was shot right in
            the ass. Must have bled out.” I smile and bring my hand to my
            forehead, giving him a proper captain’s salute. I step into the
            elevator and turn around to face the open doors, admiring the
            extravagance of the lobby. This place seems more like a historic
            hotel than an apartment complex, with its expansive columns and
            marble floors. When Corbin said I could stay with him until I found
            a job, I had no idea he lived like an actual adult. I thought it
            would be similar to the last time I visited him, right after I
            graduated from high school, back when he had first started working
            toward his pilot’s license. That was four years and a two-story
            sketchy complex ago. That’s kind of what I was expecting. I
            certainly wasn’t anticipating a high-rise smack dab in the middle of
            downtown San Francisco. I find the panel and press the button for
            the eighteenth floor, then look up at the mirrored wall of the
            elevator. I spent all day yesterday and most of this morning packing
            up everything I own from my apartment back in San Diego. Luckily, I
            don’t own much. But after making the solo five-hundred-mile drive
            today, my exhaustion is pretty evident in my reflection. My hair is
            in a loose knot on top of my head, secured with a pencil, since I
            couldn’t find a hair tie while I was driving. My eyes are usually as
            brown as my hazelnut hair, but right now, they look ten shades
            darker, thanks to the bags under them. I reach into my purse to find
            a tube of ChapStick, hoping to salvage my lips before they end up as
            weary-looking as the rest of me. As soon as the elevator doors begin
            to close, they open again. A guy is rushing toward the elevators,
            preparing to walk on as he acknowledges the old man. “Thanks, Cap,”
            he says. I can’t see Cap from inside the elevator, but I hear him
            grunt something in return. He doesn’t sound nearly as eager to make
            small talk with this guy as he was with me. This man looks to be in
            his late twenties at most. He grins at me, and I know exactly what’s
            going through his mind, considering he just slid his left hand into
            his pocket. The hand with the wedding ring on it. “Floor ten,” he
            says without looking away from me. His eyes fall to what little
            cleavage is peeking out of my shirt, and then he looks at the
            suitcase by my side. I press the button for floor ten. I should have
            worn a sweater. “Moving in?” he asks, blatantly staring at my shirt
            again. I nod, although I doubt he notices, considering his gaze
            isn’t planted anywhere near my face. “What floor?” Oh, no, you
            don’t. I reach beside me and cover all the buttons on the panel with
            my hands to hide the illuminated eighteenth-floor button, and then I
            press every single button between floors ten and eighteen. He
            glances at the panel, confused. “None of your business,” I say. He
            laughs. He thinks I’m kidding. He arches his dark, thick eyebrow.
            It’s a nice eyebrow. It’s attached to a nice face, which is attached
            to a nice head, which is attached to a nice body. A married body.
            Asshole. He grins seductively after seeing me check him out—only I
            wasn’t checking him out the way he thinks I was. In my mind, I was
            wondering how many times that body has been pressed against a girl
            who wasn’t his wife. I feel sorry for his wife. He’s looking at my
            cleavage again when we reach floor ten. “I can help you with that,”
            he says, nodding toward my suitcase. His voice is nice. I wonder how
            many girls have fallen for that married voice. He walks toward me
            and reaches to the panel, bravely pressing the button that closes
            the doors. I hold his stare and press the button to open the doors.
            “I’ve got it.” He nods as if he understands, but there’s still a
            wicked gleam in his eyes that reaffirms my immediate dislike of him.
            He steps out of the elevator and turns to face me before walking
            away. “Catch you later, Tate,” he says, just as the doors close. I
            frown, not comfortable with the fact that the only two people I’ve
            interacted with since walking into this apartment building already
            know who I am. I remain alone on the elevator as it stops on every
            single floor until it reaches the eighteenth. I step off, pull my
            phone out of my pocket, and open up my messages to Corbin. I can’t
            remember which apartment number he said was his. It’s either 1816 or
            1814. Maybe it’s 1826? I come to a stop at 1814, because there’s a
            guy passed out on the floor of the hallway, leaning against the door
            to 1816. Please don’t let it be 1816. I find the message on my phone
            and cringe. It’s 1816. Of course it is. I walk slowly to the door,
            hoping I don’t wake up the guy. His legs are sprawled out in front
            of him, and he’s leaning with his back propped up against Corbin’s
            door. His chin is tucked to his chest, and he’s snoring. “Excuse
            me,” I say, my voice just above a whisper. He doesn’t move. I lift
            my leg and poke his shoulder with my foot. “I need to get into this
            apartment.” He rustles and then slowly opens his eyes and stares
            straight ahead at my legs. His eyes meet my knees, and his eyebrows
            furrow as he slowly leans forward with a deep scowl on his face. He
            lifts a hand and pokes my knee with his finger, almost as if he’s
            never seen a knee before. He drops his hand, closes his eyes, and
            falls back asleep against the door. Great. Corbin won’t be back
            until tomorrow, so I dial his number to see if this guy is someone I
            should be concerned about. “Tate?” he asks, answering his phone
            without a hello. “Yep,” I reply. “Made it safe, but I can’t get in
            because there’s a drunk guy passed out at your front door.
            Suggestions?” “Eighteen sixteen?” he asks. “You sure you’re at the
            right apartment?” “Positive.” “Are you sure he’s drunk?” “Positive.”
            “Weird,” he says. “What’s he wearing?” “Why do you want to know what
            he’s wearing?” “If he’s wearing a pilot’s uniform, he probably lives
            in the building. The complex contracts with our airline.” This guy
            isn’t wearing any type of uniform, but I can’t help but notice that
            his jeans and black T-shirt do fit him very nicely. “No uniform,” I
            say. “Can you get past him without waking him up?” “I’d have to move
            him. He’ll fall inside if I open the door.” He’s quiet for a few
            seconds while he thinks. “Go downstairs and ask for Cap,” he says.
            “I told him you were coming tonight. He can wait with you until
            you’re inside the apartment.” I sigh, because I’ve been driving for
            six hours, and going all the way back downstairs is not something I
            feel like doing right now. I also sigh because Cap is the last
            person who could probably help in this situation. “Just stay on the
            phone with me until I’m inside your apartment.” I like my plan a lot
            better. I balance my phone against my ear with my shoulder and dig
            inside my purse for the key Corbin sent me. I insert it into the
            lock and begin to open the door, but the drunk guy begins to fall
            backward with every inch the door opens. He groans, but his eyes
            don’t open again. “It’s too bad he’s wasted,” I tell Corbin. “He’s
            not bad-looking.” “Tate, just get your ass inside and lock the door
            so I can hang up.” I roll my eyes. He’s still the same bossy brother
            he always was. I knew that moving in with him would not be good for
            our relationship, considering how fatherly he acted toward me when
            we were younger. However, I had no time to find a job, get my own
            apartment, and get settled before my new classes started, so it left
            me with little choice. I’m hoping things will be different between
            us now, though. Corbin is twenty-five, and I’m twenty-three, so if
            we can’t get along better than we did as kids, we’ve got a lot of
            growing up left to do. I guess that mostly depends on Corbin and
            whether he’s changed since we last lived together. He had an issue
            with anyone I dated, all of my friends, every choice I made—even
            what college I wanted to attend. Not that I ever paid any attention
            to his opinion, though. The distance and time apart has seemed to
            get him off my back for the last few years, but moving in with him
            will be the ultimate test of our patience. I wrap my purse around my
            shoulder, but it gets caught on my suitcase handle, so I just let it
            fall to the floor. I keep my left hand wrapped tightly around the
            doorknob and hold the door shut so the guy won’t fall completely
            into the apartment. I take my foot and press it against his
            shoulder, pushing him from the center of the doorway. He doesn’t
            budge. “Corbin, he’s too heavy. I’m gonna have to hang up so I can
            use both hands.” “No, don’t hang up. Just put the phone in your
            pocket, but don’t hang up.” I look down at the oversized shirt and
            leggings I have on. “No pockets. You’re going in the bra.” Corbin
            makes a gagging sound as I pull the phone from my ear and shove it
            inside my bra. I remove the key from the lock and drop it toward my
            purse, but it misses and falls to the floor. I reach down to grab
            the drunk guy so I can move him out of the way. “All right, buddy,”
            I say, struggling to pull him away from the center of the doorway.
            “Sorry to interrupt your nap, but I need inside this apartment.” I
            somehow manage to prop him up against the doorframe to prevent him
            from falling into the apartment, and then I push the door open
            farther and turn to get my things. Something warm wraps around my
            ankle. I freeze. I look down. “Let go of me!” I yell, kicking at the
            hand that’s gripping my ankle so tightly I’m pretty sure it might
            bruise. The drunk guy is looking up at me now, and his grip sends me
            falling backward into the apartment when I try to pull away from
            him. “I need to get in there,” he mutters, just as my butt meets the
            floor. He makes an attempt to push the apartment door open with his
            other hand, and this immediately sends me into panic mode. I pull my
            legs the rest of the way inside, and his hand comes with me. I use
            my free leg to kick the door shut, slamming it directly onto his
            wrist. “Shit!” he yells. He’s trying to pull his hand back into the
            hallway with him, but my foot is still pressing against the door. I
            release enough pressure for him to have his hand back, and then I
            immediately kick the door all the way shut. I pull myself up and
            lock the door, the dead bolt, and the chain lock as quickly as I
            can. As soon as my heart rate begins to calm down, it starts to
            scream at me. My heart is actually screaming at me. In a deep male
            voice. It sounds like it’s yelling, “Tate! Tate!” Corbin. I
            immediately look down at my chest and pull my phone out of my bra,
            then bring it up to my ear. “Tate! Answer me!” I wince, then pull
            the phone several inches from my ear. “I’m fine,” I say, out of
            breath. “I’m inside. I locked the door.” “Jesus Christ!” he says,
            relieved. “You scared me to death. What the hell happened?” “He was
            trying to get inside. I locked the door, though.” I flip on the
            living-room light and take no more than three steps inside before I
            come to a halt. Good going, Tate. I slowly turn back toward the door
            after realizing what I’ve done. “Um. Corbin?” I pause. “I might have
            left a few things outside that I need. I would just grab them, but
            the drunk guy thinks he needs to get inside your apartment for some
            reason, so there’s no way I’m opening that door again. Any
            suggestions?” He’s silent for a few seconds. “What did you leave in
            the hallway?” I don’t want to answer him, but I do. “My suitcase.”
            “Christ, Tate,” he mutters. “And… my purse.” “Why the hell is your
            purse outside?” “I might have also left the key to your apartment on
            the hallway floor.” He doesn’t even respond to that one. He just
            groans. “I’ll call Miles and see if he’s home yet. Give me two
            minutes.” “Wait. Who’s Miles?” “He lives across the hall. Whatever
            you do, don’t open the door again until I call you back.” Corbin
            hangs up, and I lean against his front door. I’ve lived in San
            Francisco all of thirty minutes, and I’m already being a pain in his
            ass. Figures. I’ll be lucky if he lets me stay here until I find a
            job. I hope that doesn’t take long, considering I applied for three
            RN positions at the closest hospital. It might mean working nights,
            weekends, or both, but I’ll take what I can get if it prevents me
            from having to dip into savings while I’m back in school. My phone
            rings. I slide my thumb across the screen and answer it. “Hey.”
            “Tate?” “Yep,” I reply, wondering why he always double-checks to see
            if it’s me. He called me, so who else would be answering it who
            sounds exactly like me? “I got hold of Miles.” “Good. Is he gonna
            help me get my stuff?” “Not exactly,” Corbin says. “I kind of need
            you to do me a huge favor.” My head falls against the door again. I
            have a feeling the next few months are going to be full of
            inconvenient favors, since he knows he’s doing me a huge one by
            letting me stay here. Dishes? Check. Corbin’s laundry? Check.
            Corbin’s grocery shopping? Check. “What do you need?” I ask him.
            “Miles kind of needs your help.” “The neighbor?” I pause as soon as
            it clicks, and I close my eyes. “Corbin, please don’t tell me the
            guy you called to protect me from the drunk guy is the drunk guy.”
            Corbin sighs. “I need you to unlock the door and let him in. Let him
            crash on the couch. I’ll be there first thing in the morning. When
            he sobers up, he’ll know where he is, and he’ll go straight home.” I
            shake my head. “What kind of apartment complex are you living in? Do
            I need to prepare to be groped by drunk people every time I come
            home?” Long pause. “He groped you?” “?‘Grope’ might be a bit strong.
            He did grab my ankle, though.” Corbin lets out a sigh. “Just do this
            for me, Tate. Call me back when you’ve got him and all your stuff
            inside.” “Fine.” I groan, recognizing the worry in his voice. I hang
            up with Corbin and open the door. The drunk guy falls onto his
            shoulder, and his cell phone slips from his hand and lands on the
            floor next to his head. I flip him onto his back and look down at
            him. He cracks his eyes open and attempts to look up at me, but his
            eyelids fall shut again. “You’re not Corbin,” he mutters. “No. I’m
            not. But I am your new neighbor, and from the looks of it, you’re
            about to owe me at least fifty cups of sugar.” I lift him by his
            shoulders and try to get him to sit up, but he doesn’t. I don’t
            think he can, actually. How does a person even get this drunk? I
            grab his hands and pull him inch by inch into the apartment,
            stopping when he’s just far enough inside for me to be able to close
            the door. I retrieve all of my things from outside the apartment,
            then shut and lock the front door. I grab a throw pillow from the
            couch, prop his head up, and roll him onto his side in case he pukes
            in his sleep. And that’s all the help he’s getting from me. When
            he’s comfortably asleep in the middle of the living-room floor, I
            leave him there while I look around the apartment. The living room
            alone could fit three of the living rooms from Corbin’s last
            apartment. The dining area is open to the living room, but the
            kitchen is separated from the living room by a half-wall. There are
            several modern paintings throughout the room, and the thick, plush
            sofas are a light tan, offsetting the vibrant paintings. The last
            time I stayed with him, he had a futon, a beanbag chair, and posters
            of models on the walls. I think my brother might finally be growing
            up. “Very impressive, Corbin,” I say out loud as I walk from room to
            room and flip on all the lights, inspecting what has just become my
            temporary home. I kind of hate that it’s so nice. It’ll make it
            harder to want to find my own place once I get enough money saved
            up. I walk into the kitchen and open the refrigerator. There’s a row
            of condiments in the door, a box of leftover pizza on the middle
            shelf, and a completely empty gallon of milk still sitting on the
            top shelf. Of course he doesn’t have groceries. I can’t have
            expected him to change completely. I grab a bottled water and exit
            the kitchen to go search for the room I’ll be living in for the next
            few months. There are two bedrooms, so I take the one that isn’t
            Corbin’s and set my suitcase on top of the bed. I have about three
            more suitcases and at least six boxes down in the car, not to
            mention all my clothes on hangers, but I’m not about to attempt
            those tonight. Corbin said he’d be back in the morning, so I’ll
            leave that to him. I change into a pair of sweats and a tank top,
            then brush my teeth and get ready for bed. Normally, I would be
            nervous about the fact that there’s a stranger in the same apartment
            I’m in, but I have a feeling I don’t need to worry. Corbin would
            never ask me to help someone he felt might be a threat to me in any
            way. Which confuses me, because if this is common behavior for
            Miles, I’m surprised Corbin asked me to bring him inside. Corbin has
            never trusted guys with me, and I blame Blake for that. He was my
            first serious boyfriend when I was fifteen, and he was Corbin’s best
            friend. Blake was seventeen, and I had a huge crush on him for
            months. Of course, my friends and I had huge crushes on most of
            Corbin’s friends, simply because they were older than we were. Blake
            would come over most weekends to stay the night with Corbin, and we
            always seemed to find a way to spend time together when Corbin
            wasn’t paying attention. One thing led to another, and after several
            weekends of sneaking around, Blake told me he wanted to make our
            relationship official. The problem Blake didn’t foresee was how
            Corbin would react once Blake broke my heart. And boy, did he break
            it. As much as a fifteen-year-old heart can be broken after the span
            of a two-week secret relationship. Turned out he was officially
            dating quite a few girls during the two weeks he was with me. Once
            Corbin found out, their friendship was over, and all of Corbin’s
            friends were warned not to come near me. I found it almost
            impossible to date in high school until after Corbin finally moved
            away. Even then, though, the guys had heard horror stories and
            tended to steer clear of Corbin’s little sister. As much as I hated
            it then, I would more than welcome it now. I’ve had my fair share of
            relationships go wrong since high school. I lived with my most
            recent boyfriend for more than a year before we realized we wanted
            two separate things out of life. He wanted me home. I wanted a
            career. So now I’m here. Pursuing my master’s degree in nursing and
            doing whatever I can to avoid relationships. Maybe living with
            Corbin won’t be such a bad thing after all. I head back to the
            living room to turn out the lights, but when I’ve rounded the
            corner, I come to an immediate halt. Not only is Miles up off the
            floor, but he’s in the kitchen, with his head pressed against his
            arms and his arms folded on top of the kitchen counter. He’s seated
            on the edge of a bar stool, and he looks as if he’s about to fall
            off it any second. I can’t tell if he’s sleeping again or just
            attempting to recover. “Miles?” He doesn’t move when I call his
            name, so I walk toward him and gently lay my hand on his shoulder to
            shake him awake. The second my fingers squeeze his shoulder, he
            gasps and sits up straight as if I just woke him from the middle of
            a dream. Or a nightmare. Immediately, he slides off the stool and
            onto very unstable legs. He begins to sway, so I throw his arm over
            my shoulder and try to walk him out of the kitchen. “Let’s go to the
            couch, buddy.” He drops his forehead to the side of my head and
            stumbles along with me, making it even harder to hold him up. “My
            name isn’t Buddy,” he slurs. “It’s Miles.” We make it to the front
            of the couch, and I start to peel him off me. “Okay, Miles. Whoever
            you are. Just go to sleep.” He falls onto the couch, but he doesn’t
            let go of my shoulders. I fall with him and immediately attempt to
            pull away. “Rachel, don’t,” he begs, grabbing me by the arm, trying
            to pull me to the couch with him. “My name isn’t Rachel,” I say,
            freeing myself from his iron grip. “It’s Tate.” I don’t know why I
            clarify what my name is, because it’s not likely he’ll remember this
            conversation tomorrow. I walk to where the throw pillow is and pick
            it up off the floor. I pause before handing it back to him, because
            he’s on his side now, and his face is pressed into the couch
            cushion. He’s gripping the couch so tightly his knuckles are white.
            At first, I think he’s about to get sick, but then I realize how
            incredibly wrong I am. He’s not sick. He’s crying. Hard.
          </ShowMoreLessBtn>
        </div>
      </div>
    </div>
  );
}

export default Author;

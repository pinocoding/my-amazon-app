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
        <div className="author__publishedTop">
          <img src={book1} alt="" />
        </div>
        <div className="author__publishedMiddle">
          <img src={book2} alt="" />
          <img src={book2} alt="" />
          <img src={book2} alt="" />
        </div>
        <div className="author__publishedBottom">
          <img src={book3} alt="" />
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

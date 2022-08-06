import React from "react";
import "./Author.css";

function Author({ name, infor, img }) {
  return (
    <>
      <div className="author__section">
        <div className="author__sectionHeader">
          <h2>About the author</h2>
          <p>
            Follow authors to get new release updates, plus improved
            recommendations.
          </p>
        </div>

        <div className="author__container">
          <div className="author__left">
            <img className="author__img" src={img} alt="/#" />
          </div>
          <div className="author__right">
            <div className="author__name">{name}</div>
            <div className="author__infor">{infor}</div>
          </div>
        </div>
        <div className="Editorial Reviews">
          <h2 className="author__sectionHeader">Editorial Reviewss</h2>
          <p>Review</p>
          <p>
            <ShowMoreLessBtn />
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
            IT! TRUST ME!” ― Shh Mom’s Reading, blog tour review
          </p>
        </div>
      </div>
      <div className="Popular Highlights in this book"></div>
    </>
  );
}

export default Author;

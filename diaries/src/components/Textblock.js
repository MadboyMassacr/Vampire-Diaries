import React, { useEffect, useRef, useState } from 'react'
import './navbar.css';

export default function Textblock() {

    function useOnScreen(ref) {
        const [isIntersecting, setIntersecting] = useState(false);
      
        useEffect(() => {
          const observer = new IntersectionObserver(
            ([entry]) => {
              setIntersecting(entry.isIntersecting);
            },
            {
              root: null,
              rootMargin: '0px',
              threshold: 0.5,
            }
          );
      
          if (ref.current) {
            observer.observe(ref.current);
          }
      
          return () => {
            observer.unobserve(ref.current);
          };
        }, [ref]);
      
        return isIntersecting;
      }

      const secContainerRef = useRef(null);
      const meetAuthorRef = useRef(null);
      const reviewsRef = useRef(null);
      const button = useRef(null);
    
      const isSecContainerVisible = useOnScreen(secContainerRef);
      const isMeetAuthorVisible = useOnScreen(meetAuthorRef);
      const isReviewsVisible = useOnScreen(reviewsRef);
      const isButtonVisible = useOnScreen(button);

    return(
        <>
            <div className="sec" id='sec'>
                <div className={isSecContainerVisible ? 'section animated' : 'section'} ref={secContainerRef} id='sec-container'>
                    <h2>Welcome to the Vampire Diaries</h2>
                        <p>"The Vampire Diaries" book series by L.J. Smith invites readers into a mesmerizing world where the supernatural reigns supreme.
                        Set in the small town of Fell's Church, Virginia, the story revolves around the enigmatic Salvatore brothers, Stefan and Damon, 
                        and their entanglement with the compassionate and courageous high school student, Elena Gilbert.
                        As the series unfolds, readers are drawn into a rich tapestry of vampiric lore, ancient curses, and forbidden love. 
                        Stefan, haunted by his centuries-old existence as a vampire, strives to resist his darker impulses and live a life of redemption. 
                        Damon, his charismatic and unpredictable brother, embraces his immortality with a seductive charm that belies his dangerous nature.</p>
                        <p>Elena, the focal point of the narrative, finds herself torn between her feelings for the two brothers, each representing a different 
                        facet of her desires and fears. Her journey is further complicated by the presence of other supernatural beings, including witches,
                        werewolves, and malevolent spirits, whose machinations threaten the fragile peace of Fell's Church.
                        Throughout the series, Smith weaves a tale of suspense and intrigue, skillfully blending elements of romance, horror, and mystery. 
                        From the eerie atmosphere of Mystic Falls Cemetery to the pulse-pounding confrontations with ancient adversaries, each page brims 
                        with tension and excitement.</p>
                        <p>With its complex characters, intricate plot twists, and vividly imagined world, "The Vampire Diaries" series has captivated readers 
                        since its debut. Smith's evocative prose and compelling storytelling transport audiences into a realm where the line between light 
                        and darkness blurs, and where love and betrayal shape the destinies of both mortals and immortals alike. As readers immerse 
                        themselves in this bewitching saga, they are bound to be spellbound by the timeless allure of "The Vampire Diaries." </p>

                        
                </div>
                <div className={isButtonVisible ? 'section animated' : 'section'} ref={button} style={{ display: 'flex', justifyContent: 'center' }}>
                    <button class="button-85" role="button">Browse the books</button>
                </div>
                <div className={isMeetAuthorVisible ? 'section animated' : 'section'} ref={meetAuthorRef} id='meet-author'>
                    <h2>Meet the Author</h2>
                    <p>L.J. Smith, born Lisa Jane Smith, is a prolific American author best known for her captivating young adult novels, 
                        notably "The Vampire Diaries" series. Born on September 4, 1965, in Fort Lauderdale, Florida, Smith developed a passion for writing from an early age.
                        She studied at the University of California, Santa Barbara, where she earned her degree in psychology. Smith's writing is characterized by its vivid imagery,
                        emotional depth, and complex relationships. Her ability to blend elements of romance, fantasy, and suspense has garnered a dedicated fanbase
                        worldwide. Apart from "The Vampire Diaries," Smith has authored several other successful book series, including "The Secret Circle" and
                            "The Night World." Despite facing health challenges that temporarily halted her writing career, Smith's literary contributions continue to 
                            inspire and captivate readers of all ages. Her works have been adapted into successful television series and have left an indelible mark on
                            the landscape of young adult literature. L.J. Smith's legacy as a master storyteller in the realm of paranormal fiction remains enduring.</p>
                </div>
                <div className={isReviewsVisible ? 'section animated' : 'section'} ref={reviewsRef} id='reviews'>
                    <h2>Some Reviews</h2><br></br>
                    <div className="media">
                        <iframe width="500" height="355" src="https://www.youtube.com/embed/ENQ9AP3o8vs?si=UgTfAI3Zz30gjke3" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <iframe width="500" height="355" src="https://www.youtube.com/embed/2An5ljBmJyg?si=q2XbQRdcU05ojgsw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <iframe width="500" height="355" src="https://www.youtube.com/embed/BmVmhjjkN4E?si=ONjJediYLCRN0EXR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>  
                </div>   
            </div>

            
        </>
    );
}
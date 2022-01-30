import React from "react";
import { ReactComponent as Logo } from './assets/discord_mini_icon.svg';
import {ReactComponent as InviteUi} from './assets/invite_only_landing.svg';
import {ReactComponent as EasyLanding} from './assets/hanging_out_easy_landing.svg';
import {ReactComponent as FandomLanding} from './assets/fandom_landing.svg';
import {ReactComponent as Twitter} from './assets/twitter_icon.svg';
import {ReactComponent as Instagram} from './assets/instagram_icon.svg';
import {ReactComponent as Facebook} from './assets/facebook_icon.svg';
import {ReactComponent as Youtube} from './assets/youtube_icon.svg';
import { AiOutlineDownload  } from 'react-icons/ai';
import {ReactComponent as Chill } from './assets/just_chiling_landing.svg';
import { Link  } from "react-router-dom";
// import Chill from './assets/just-chillimg.png';
import UsaFlag from './assets/usa_flag.png';

function Landingpage(){

    return(
        <>
        <section className="--sectionzero">
        <nav className='--navbar'>

        <div className = "--logoarea">
        <Logo className='--discord-logo' />
        <h1 className = "--discordheading">Discord </h1>
        </div>

        <div className="--navlinks">
        <a href="#">Download</a>
        <a href="#">Nitro</a>
        <a href="#">Safety</a>
        <a href="#">Support</a>
        <a href="#">Blog</a>
        <a href="#">Careers </a>
        </div>

        <div className="--openbutton">
        <Link to='/login'> Open Discord </Link>
        </div> 
        </nav>



        <section className ="--sectionone">

        <div className="--herotitle">
        <h1 > IMAGINE A PLACE...</h1>
        </div>


        <div className="--heropara"> 
        <p >...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
        </div>
        
        <div className ="--downloadsbuttone">
            <a href="#" className="--downloadbuttonone"><AiOutlineDownload className="--downloadicon" />Download for Windows</a>

            <Link to='/login' className="--downloadbuttontwo">Open Discord in your browser </Link>
        </div>


        </section>

        </section>



        <section className="--sectiontwo">
            <div className="imagepart">
                <InviteUi className ="--inviteimage" />
            </div>

            <div className="--sectiontwoheading">
                <h1>Create an invite-only place where you belong</h1>

                <p>Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.</p>
            </div>
        </section>


        <section className="--sectionthree">
            <div className="--sectionthreeheading">
                <h1>Where hanging out is easy</h1>
                <p>Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.</p>
            </div>

            <div className='--sectionthreeimage'>
                <EasyLanding className="--easylanding"/>
            </div>


            
        </section>


        <section className="--sectionfour">

            <div className="--sectionfourimage">
                <FandomLanding className="--fandomimage"/>
            </div>

            <div className="sectionfourheading">
                <h1>From few to a fandom</h1>
                <p>Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.</p>
            </div>
        </section>

        <section className="--sectionsix">
            <h1>
                Ready to start your journey?
            </h1>
            <div className ="--lastdownloadlink">
            <a href=""> <AiOutlineDownload />  Download for Windows</a>
            </div>
        </section>

        <footer>
            <div className="--footer">

         
            <div className="footerpartone">
                <h1>IMAGINE A PLACE</h1>

                <div className="--flagnamecountry">
                <img src={UsaFlag} alt="" className='--usaflag' />
                <p>English, USA</p>
                </div>

                <div className="socialicons">
                    <Twitter className="indisocial"/>
                    <Instagram className="indisocial"/>
                    <Facebook className="indisocial"/>
                    <Youtube className="indisocial"/>
                </div>

            </div>


            <div className="--products">
                <p className="--topic ">Products</p>
                <a href="#">Download</a>
                <a href="#">Nitro</a>
                <a href="#">Status</a>
            </div>

            <div className="--company">
                <p className="--topic ">Company</p>
                <a href="#">About</a>
                <a href="#">Jobs</a>
                <a href="#">Branding</a>
                <a href="#">Newsroom</a>
            </div>


            
            <div className="--resources">
                <p className="--topic " >Resources</p>
                <a href="#">Support</a>
                <a href="#">Safety</a>
                <a href="#">Blog</a>
                <a href="#">Feedback</a>
                <a href="#">Developers</a>
                <a href="#">Streamkit</a>
            </div>

            <div className="--policies">
                <p className="--topic " >Policies</p>
                <a href="#">Terms</a>
                <a href="#">Privacy</a>
                <a href="#">Cookie Settings</a>
                <a href="#">Guidelines</a>
                <a href="#">Acknowledgements</a>
                <a href="#">Licenses</a>
                <a href="#">Moderation</a>
            </div>

            </div>
            <hr />


            <div className="--footerparttow">

            <div className="--footerlogoandtext">  
            <Logo className='--discord-logo2' />
            <h1>Discord</h1>
            </div>

            </div>

           



        </footer>

        </>
    );
};

export default Landingpage;

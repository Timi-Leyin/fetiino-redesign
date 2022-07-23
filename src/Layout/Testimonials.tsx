import {motion} from 'framer-motion'
import TwitterCard from "../Components/TwitterCard";
import tweets from '../Services/twitter';
import randomNumber from "../Utils/number";

const Testimonials = () => {
    const RandomTweets = Array.from({length:10},()=> tweets[randomNumber(0,tweets.length)] )
    console.log(RandomTweets)
  return (
    <section className="py-12">
      <div className="block p-6 sm:p-12">
        <motion.h3 initial={{opacity:0,x:-200}} transition={{delay:.3}} whileInView={{opacity:1,x:0}} className="text-3xl sm:text-5xl font-[600]">
          What Other Users
          <span className="block">Says</span>
        </motion.h3>
      </div>
    <div className="overflow-hidden select-none pointer-events-none">
    <motion.div  initial={{x:'-20%'}} animate={{x:'-100%'}} transition={{duration:15,repeat:Infinity,type:'tween',repeatType:'mirror'}} className="flex gap-2">
          {
              RandomTweets.map((tweet,i)=>(
                <TwitterCard key={i} username={tweet.username} displayName={tweet.displayName}
                comment={tweet.comment} />
              ))
          }
      </motion.div>
    <motion.div  initial={{x:'-100%'}} animate={{x:'0%'}} transition={{duration:20,repeat:Infinity,type:'tween',repeatType:'mirror'}} className="flex gap-2">
          {
              RandomTweets.map((tweet,i)=>(
                <TwitterCard key={i} username={tweet.username} displayName={tweet.displayName}
                comment={tweet.comment} />
              ))
          }
      </motion.div>
    </div>
    </section>
  );
};

export default Testimonials;

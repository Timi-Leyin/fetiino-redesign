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
        <h3 className="text-3xl sm:text-5xl font-[600]">
          What Other Users
          <span className="block">Says</span>
        </h3>
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
    <motion.div  initial={{x:'-50%'}} animate={{x:'0%'}} transition={{duration:20,repeat:Infinity,type:'tween',repeatType:'mirror'}} className="flex gap-2">
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

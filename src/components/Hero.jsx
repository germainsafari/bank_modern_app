
import styles from '../styles'
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'

const Hero = () => {
 (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`} > 
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className={`flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2`}>
          <img src={discount} alt="discount"
          className="w-{32px} h-[32px]"/>
          <p className={`${styles.paragraph}`}>
            <span className='text-white'>20%</span>
            Discount For {""}
            <span className='text-white'> 1 month</span>
            Account
          </p>
          <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] sm:text-[72px] text-[52px] text-white sm:leading-[100px] leading-[75px]'>
              The Next <br className='sm:block hidden'/> {" "}
              <span>Generation</span> {" "}
             

          </h1>
            <div>
              <GetStarted/>
            </div>

          </div>


        </div>
      <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>
          Payment method
      </h1>

      </div>
    </section>
  )
}

export default Hero
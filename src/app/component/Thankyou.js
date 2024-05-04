import React,{useEffect} from 'react'
import Header from './Header'
import { useRouter } from 'next/navigation'

function Thankyou() {
    const router = useRouter();
    useEffect(() => {
      const redirectAfter5Seconds = () => {
        router.push('/Dashboard');
      };
      const timeoutId = setTimeout(redirectAfter5Seconds, 2000);
      return () => clearTimeout(timeoutId);
    }, [router]);
    return (
        

            <div>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-8 col-lg-8 mx-auto text-center pt-5'>
                            <h4> <br /></h4>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-md-6 col-lg-6 mx-auto'>
                            <img src='thanks.png' className='w-100'></img>
                        </div>
                    </div>
                </div>
            </div>
       
    )
}

export default Thankyou
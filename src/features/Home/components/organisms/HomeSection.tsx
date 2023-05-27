import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import InfiniteScroll from 'react-infinite-scroll-component';
import { GENERATE_TRN_PAGE, PAGE_SIZE } from '../../../../data/datasource/api/constant';
import { useEffect } from 'react';
import { RequestStatus } from '../../../../data/common';
import { useNavigate } from 'react-router-dom';

export const HomeSection = () => {
    const navigate = useNavigate();
    
  
    return (
        <section className="">
            <div className="">
                  
            <div className="flex flex-col gap-4">
                   
                        <div className="overflow-x-auto shadow-md sm:rounded-lg">
                           
                        </div> 
                    
                </div>

                
            </div>    
        </section>
    )
}
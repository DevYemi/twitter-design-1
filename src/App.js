import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPepperHot, faPlus, faCouch, faRulerHorizontal, faPencil, faUserGraduate, faAngleDown, faArrowRight, faTableList } from '@fortawesome/free-solid-svg-icons'
import { CloudIcon } from '@heroicons/react/outline'
import { datas, decor } from './data'
import './App.css';
import { faHardDrive } from '@fortawesome/free-regular-svg-icons';
import { animation } from './gsapAnimation';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    const resetAnimation = animation(); // run animation after app has render

    window.addEventListener('resize', resetAnimation)

    return () => window.removeEventListener('resize', resetAnimation)
  }, [])

  return (
    <div className="App">
      {/* CONTAINER WRAPPER */}
      <div className="CONTAINER-WR overflow-hidden relative bg-[#aaaaaa] flex justify-center items-center h-full">
        <div className="CONTAINER relative overflow-hidden flex flex-col max-w-[90%] bg-white rounded-[50px] flex-1 pt-5 ">

          {/* CONTENT SECTION */}
          <section data-name="CONTENT">
            <div className='space-y-5'>
              <p className='relative py-4 px-5 rounded-full bg-[#EECB19] w-fit ml-auto mr-[3em]'>
                <FontAwesomeIcon icon={faPepperHot} />
                <span className='h-[4px] w-[4px] top-[13px] right-[18px] absolute rounded-full bg-black'></span>
                <span className='h-[4px] w-[4px] bottom-[19px] left-[12px] absolute rounded-full bg-black'></span>
              </p>
              <p className='text-[1.8rem] font-normal max-w-[50%] ml-auto'>
                My <br /> storehouse
              </p>
              <div className=' '>
                <div className='flex justify-between space-y-3 mb-5 max-w-[50%] ml-auto pr-[3em]'>
                  <p className='uppercase font-normal text-[1rem]'>product</p>
                  <p className='uppercase font-normal text-[1rem]'>no</p>
                </div>
                <div className='even:bg-[#dfdfdf] '>
                  <div className='flex items-center pr-[3em] bg-inherit max-w-[100%] ml-auto md:max-w-[50%] '>
                    <div className='flex-[0.85]'>
                      <div className=' overflow-x-hidden'>
                        <div data-type='ANIMATION-TEXT' className="relative flex">
                          {datas.map((data, i) => (
                            <div key={i} className='relative flex items-center bg-inherit justify-between min-w-full flex-1 py-[0.5em]'>
                              <p className='text-lg'>{data.text}</p>
                              <span className='text-sm'>{data.size}</span>
                              <img src={data.url} alt="product img" className=' h-[80px] w-[80px] object-contain right-0' />
                            </div>
                          ))}
                          <div className='relative flex items-center bg-inherit justify-between min-w-full flex-1 py-[0.5em]'>
                            <p className='text-lg'>{datas[0].text}</p>
                            <span className='text-sm'>{datas[0].size}</span>
                            <img src={datas[0].url} alt="product img" className=' h-[80px] w-[80px] object-contain right-0' />
                          </div>
                        </div>

                      </div>
                    </div>
                    <div className='flex justify-end bg-inherit flex-[0.15] py-[1.7rem]'><FontAwesomeIcon icon={faPlus} /></div>
                  </div>
                </div>
                <div className='even:bg-[#dfdfdf] '>
                  <div className='flex items-center pr-[3em] bg-inherit max-w-[100%] ml-auto md:max-w-[50%] '>
                    <div className='flex-[0.85]'>
                      <div className=' overflow-x-hidden'>
                        <div data-type='ANIMATION-TEXT' className="relative flex">
                          {datas.map((data, i) => (
                            <div key={i} className='relative flex items-center bg-inherit justify-between min-w-full flex-1 py-[0.5em]'>
                              <p className='text-lg'>{data.text}</p>
                              <span className='text-sm'>{data.size}</span>
                              <img src={data.url} alt="product img" className=' h-[80px] w-[80px] object-contain right-0' />
                            </div>
                          ))}
                          <div className='relative flex items-center bg-inherit justify-between min-w-full flex-1 py-[0.5em]'>
                            <p className='text-lg'>{datas[0].text}</p>
                            <span className='text-sm'>{datas[0].size}</span>
                            <img src={datas[0].url} alt="product img" className=' h-[80px] w-[80px] object-contain right-0' />
                          </div>
                        </div>

                      </div>
                    </div>
                    <div className='flex justify-end bg-inherit flex-[0.15] py-[1.7rem]'><FontAwesomeIcon icon={faPlus} /></div>
                  </div>
                </div>
                <div className='even:bg-[#dfdfdf] '>
                  <div className='flex items-center pr-[3em] bg-inherit max-w-[100%] ml-auto md:max-w-[50%] '>
                    <div className='flex-[0.85]'>
                      <div className=' overflow-x-hidden'>
                        <div data-type='ANIMATION-TEXT' className="relative flex">
                          {datas.map((data, i) => (
                            <div key={i} className='relative flex items-center bg-inherit justify-between min-w-full flex-1 py-[0.5em]'>
                              <p className='text-lg'>{data.text}</p>
                              <span className='text-sm'>{data.size}</span>
                              <img src={data.url} alt="product img" className=' h-[80px] w-[80px] object-contain right-0' />
                            </div>
                          ))}
                          <div className='relative flex items-center bg-inherit justify-between min-w-full flex-1 py-[0.5em]'>
                            <p className='text-lg'>{datas[0].text}</p>
                            <span className='text-sm'>{datas[0].size}</span>
                            <img src={datas[0].url} alt="product img" className=' h-[80px] w-[80px] object-contain right-0' />
                          </div>
                        </div>

                      </div>
                    </div>
                    <div className='flex justify-end bg-inherit flex-[0.15] py-[1.7rem]'><FontAwesomeIcon icon={faPlus} /></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* BLOB ANIMATION SECTION */}
          <section data-name="ANIMATION" className='absolute h-[78%] w-[49%] top-0 '>
            <div data-type="text" className=' absolute h-full w-full '>
              <svg viewBox="0 0 500 500" width="500" height="500" fill='#2E2E47' data-type='ANIMATION-BLOB' className='relative top-[-39%] left-[-43%] rotate-[-7deg] w-[150%] h-[130%] md:w-[130%]'>
                <path d="M 203.434 58.092 Q 258.427 16.854 313.42 58.092 L 442.534 154.912 Q 497.526 196.15 476.521 262.875 L 427.204 419.533 Q 406.199 486.258 338.224 486.258 L 178.63 486.258 Q 110.655 486.258 89.65 419.533 L 40.333 262.875 Q 19.328 196.15 74.32 154.912 Z" data-bx-shape="n-gon 258.427 276.334 251.404 259.48 5 0.23 1@3e41021f" style={{ fill: 'inherit', stroke: 'inherit' }}></path>
              </svg>
              <div className='absolute left-[25%] top-[13%] text-white'>
                <CloudIcon className='h-4 w-4' />
                <div className='text-[2rem] uppercase max-w-[147px] overflow-x-hidden md:text-[3rem] ' >
                  <ul data-type='ANIMATION-BLOBTEXT' className='relative space-x-3 block list-none whitespace-nowrap'>
                    {datas.map((data, i) => (
                      <li key={i} className='inline-block max-w-[142px] whitespace-normal'>{data.text}</li>
                    ))}
                    <li className='inline-block max-w-[142px] whitespace-normal'>{datas[0].text}</li>
                  </ul>
                </div>
                <img src="/img/cloudBlur.png" className='w-[100px] relative top-[-12px] right-[16px] rotate-[5deg]' alt="decor" />
              </div>

            </div>

          </section>
          <div className="icons flex justify-between space-y-3 flex-wrap flex-col bg-[#dfdfdf] rounded-b-[50px] md:p-[2em_3em] md:flex-row ">
            <div className='flex items-center h-fit'>
              <FontAwesomeIcon icon={faCouch} className='p-3 flex-1 cursor-pointer hover:bg-[#C2BFBF] rounded-2xl' />
              <span data-name="dash" className='w-4 h-[1px] flex-1 bg-[gray] mx-2' ></span>
              <FontAwesomeIcon icon={faRulerHorizontal} className='p-3 flex-1 cursor-pointer hover:bg-[#C2BFBF] rounded-2xl' />
              <span data-name="dash" className='w-4 h-[1px] bg-[gray] flex-1 mx-2'></span>
              <FontAwesomeIcon icon={faHardDrive} className='p-3 flex-1 cursor-pointer hover:bg-[#C2BFBF] rounded-2xl' />
            </div>
            <div className='relative  flex items-center bg-white rounded-3xl pl-4 h-fit flex-[0.4] md:max-w-[400px] md:top-[-54px] '>
              <FontAwesomeIcon icon={faRulerHorizontal} className='p-3 flex-1 cursor-pointer hover:bg-[#C2BFBF] rounded-2xl' />
              <div className='p-3 relative flex-1 cursor-pointer hover:bg-[#C2BFBF] rounded-2xl'>
                <FontAwesomeIcon icon={faPencil} className='h-3 w-3' />
                <span className='absolute w-4 h-[1px] bottom-[15px] left-[12px] bg-black' ></span>
              </div>
              <div className='p-3 flex items-center space-x-2 flex-1 cursor-pointer hover:bg-[#C2BFBF] rounded-2xl'>
                <FontAwesomeIcon icon={faUserGraduate} />
                <FontAwesomeIcon icon={faAngleDown} className='h-2 w-2' />
              </div>
              <span data-name="dash" className='w-[1px] h-5 bg-[gray] mx-5'></span>
              <FontAwesomeIcon icon={faArrowRight} className='p-5 bg-black text-white rounded-2xl cursor-pointer hover:bg-[#353535]' />
            </div>
            <FontAwesomeIcon icon={faTableList} className='p-4 rounded-2xl bg-[#c2bfbf] cursor-pointer hover:bg-white' />
          </div>
        </div>

        {/* ANIMATED IMAGE SECTION */}
        <section data-type='ANIMATED-IMGS' className='absolute flex top-[48px] left-[-289px] rounded-full w-[700px] h-[700px]'>
          <div data-type='IMG-HIDDEN' className={`relative [animation-direction:reverse] left-[-100px] max-h-[400px] max-w-[400px]`}>
            <img src={decor[0]} className={`max-w-full translate-x-[-37px] translate-y-[140px] w-[300px] h-[300px] blur-md object-contain`} alt="img" />
            <img src={datas[1].url} data-type='HIDDEN-MAIN' className={`max-w-full w-[300px] scale-y-[-1] h-[300px] object-contain`} alt="img" />
            <img src={decor[1]} className={`max-w-full translate-x-[65px] translate-y-[-146px] w-[300px] h-[300px] blur-md object-contain`} alt="img" />
          </div>
          <div data-type='IMG-SHOWN' className={`relative [animation-direction:reverse] right-[-200px] max-h-[400px] max-w-[400px]`}>
            <img src={datas[0].url} data-type='SHOWN-MAIN' className={`max-w-full translate-x-[45px] translate-y-[150px] w-[300px] h-[300px] object-contain`} alt="img" />
            <img src={decor[0]} className={`max-w-full translate-x-[22px] translate-y-[10px] w-[300px] h-[300px] blur-md object-contain`} alt="img" />
          </div>
        </section>
      </div>



    </div>
  );
}

export default App;

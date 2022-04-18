import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPepperHot, faPlus, faCouch, faRulerHorizontal, faPencil, faUserGraduate, faAngleDown, faArrowRight, faTableList } from '@fortawesome/free-solid-svg-icons'
import { CloudIcon } from '@heroicons/react/outline'
import { datas, animatedImages } from './data'
import './App.css';
import { faHardDrive } from '@fortawesome/free-regular-svg-icons';

function App() {


  return (
    <div className="App">
      <div className="CONTAINER-WR relative bg-[#8a8a8a] flex justify-center items-center h-full">
        <div className="CONTAINER relative overflow-hidden flex flex-col max-w-[90%] bg-white rounded-[50px] flex-1 pt-5 ">
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
                  <div className='flex items-center pr-[3em] bg-inherit max-w-[50%] ml-auto '>
                    <div className='flex-[0.85]'>
                      <div className=' overflow-x-hidden'>
                        <div className="relative flex">
                          {datas.map((data, i) => (
                            <div key={i} className='relative flex items-center bg-inherit justify-between min-w-full flex-1 py-[0.5em]'>
                              <p className='text-lg'>{data.text}</p>
                              <span className='text-sm'>{data.size}</span>
                              <img src={data.url} alt="product img" className=' h-[80px] w-[80px] object-contain right-0' />
                            </div>
                          ))}
                        </div>

                      </div>
                    </div>
                    <div className='flex justify-end bg-inherit flex-[0.15] py-[1.7rem]'><FontAwesomeIcon icon={faPlus} /></div>
                  </div>
                </div>
                <div className='even:bg-[#dfdfdf] '>
                  <div className='flex items-center pr-[3em] bg-inherit max-w-[50%] ml-auto '>
                    <div className='flex-[0.85]'>
                      <div className=' overflow-x-hidden'>
                        <div className="relative flex">
                          {datas.map((data, i) => (
                            <div key={i} className='relative flex items-center bg-inherit justify-between min-w-full flex-1 py-[0.5em]'>
                              <p className='text-lg'>{data.text}</p>
                              <span className='text-sm'>{data.size}</span>
                              <img src={data.url} alt="product img" className=' h-[80px] w-[80px] object-contain right-0' />
                            </div>
                          ))}
                        </div>

                      </div>
                    </div>
                    <div className='flex justify-end bg-inherit flex-[0.15] py-[1.7rem]'><FontAwesomeIcon icon={faPlus} /></div>
                  </div>
                </div>
                <div className='even:bg-[#dfdfdf] '>
                  <div className='flex items-center pr-[3em] bg-inherit max-w-[50%] ml-auto '>
                    <div className='flex-[0.85]'>
                      <div className=' overflow-x-hidden'>
                        <div className="relative flex">
                          {datas.map((data, i) => (
                            <div key={i} className='relative flex items-center bg-inherit justify-between min-w-full flex-1 py-[0.5em]'>
                              <p className='text-lg'>{data.text}</p>
                              <span className='text-sm'>{data.size}</span>
                              <img src={data.url} alt="product img" className=' h-[80px] w-[80px] object-contain right-0' />
                            </div>
                          ))}
                        </div>

                      </div>
                    </div>
                    <div className='flex justify-end bg-inherit flex-[0.15] py-[1.7rem]'><FontAwesomeIcon icon={faPlus} /></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section data-name="ANIMATION" className='absolute h-[78%] w-[49%] top-0 '>
            <div data-type="text" className=' absolute h-full w-full '>
              <svg viewBox="0 0 500 500" width="500" height="500" className='relative top-[-39%] left-[-43%] rotate-[-7deg] w-[130%] h-[130%]'>
                <path d="M 203.434 58.092 Q 258.427 16.854 313.42 58.092 L 442.534 154.912 Q 497.526 196.15 476.521 262.875 L 427.204 419.533 Q 406.199 486.258 338.224 486.258 L 178.63 486.258 Q 110.655 486.258 89.65 419.533 L 40.333 262.875 Q 19.328 196.15 74.32 154.912 Z" data-bx-shape="n-gon 258.427 276.334 251.404 259.48 5 0.23 1@3e41021f" style={{ fill: 'orange', stroke: 'inherit' }}></path>
              </svg>
              <div className='absolute left-[25%] top-[13%] text-white'>
                <CloudIcon className='h-4 w-4' />
                <div className='text-[3rem] uppercase max-w-[147px] overflow-x-hidden  ' >
                  <ul className='relative space-x-3 block list-none whitespace-nowrap'>
                    <li className='inline-block max-w-[142px] truncate'>Blob <br /> Plant</li>
                    <li className='inline-block max-w-[142px] truncate'>Tree <br /> Plant</li>
                  </ul>
                </div>
                <img src="/img/cloudBlur.png" className='w-[100px] relative top-[-12px] right-[16px] rotate-[5deg]' alt="decor" />
              </div>

            </div>

          </section>
          <div className="icons flex justify-between bg-[#dfdfdf] rounded-b-[50px] px-[3em] py-[2em]">
            <div className='flex items-center h-fit'>
              <FontAwesomeIcon icon={faCouch} className='p-3' />
              <span data-name="dash" className='w-4 h-[1px] bg-[gray] mx-2' ></span>
              <FontAwesomeIcon icon={faRulerHorizontal} className='p-3' />
              <span data-name="dash" className='w-4 h-[1px] bg-[gray] mx-2'></span>
              <FontAwesomeIcon icon={faHardDrive} className='p-3' />
            </div>
            <div className='relative flex items-center bg-white rounded-3xl pl-4 h-fit top-[-54px] flex-[0.4] max-w-[400px] '>
              <FontAwesomeIcon icon={faRulerHorizontal} className='p-3 flex-1' />
              <div className='p-3 relative flex-1'>
                <FontAwesomeIcon icon={faPencil} className='h-3 w-3' />
                <span className='absolute w-4 h-[1px] bottom-[15px] left-[12px] bg-black' ></span>
              </div>
              <div className='p-3 flex items-center space-x-2 flex-1'>
                <FontAwesomeIcon icon={faUserGraduate} />
                <FontAwesomeIcon icon={faAngleDown} className='h-2 w-2' />
              </div>
              <span data-name="dash" className='w-[1px] h-5 bg-[gray] mx-5'></span>
              <FontAwesomeIcon icon={faArrowRight} className='p-5 bg-black text-white rounded-2xl' />
            </div>
            <FontAwesomeIcon icon={faTableList} className='p-4 rounded-2xl bg-[#c2bfbf]' />
          </div>
        </div>
        <div data-type='Animated-Images' className='absolute flex top-[-197px] left-[-30px]'>
          <div data-type='hidden' className={`relative left-[-184px] max-h-[400px] max-w-[400px]`}>
            <img src={datas[1].decor[0]} className={`max-w-full w-[300px] h-[300px] translate-x-[-30px] translate-y-[175px] blur-md object-contain`} alt="img" />
            <img src={datas[1].url} className={`max-w-full w-[300px] h-[300px] translate-x-[-98px] translate-y-[8px] object-contain`} alt="img" />
            <img src={datas[1].decor[1]} className={`max-w-full w-[300px] h-[300px] translate-x-[-29px] translate-y-[-130px] blur-md object-contain`} alt="img" />
          </div>
          <div data-type='shown' className={`relative top-[180px] right-[7%] lg:right-[-21%] max-h-[400px] max-w-[400px]`}>
            <img src={datas[0].url} className={`max-w-full w-[300px] h-[300px] translate-x-[-30px] translate-y-[118px] object-contain`} alt="img" />
            <img src={datas[0].decor} className={`max-w-full w-[300px] h-[300px] translate-x-[-98px] translate-y-[-61px]  blur-md object-contain`} alt="img" />
          </div>
        </div>
      </div>



    </div>
  );
}

export default App;

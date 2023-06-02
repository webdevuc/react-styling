

import { BsLinkedin } from 'react-icons/bs';
import { IoCallOutline, IoMailOutline } from 'react-icons/io5';
import { data } from '../util/data';

function Main() {
    return (
        <div className="container h-100vh">
            <div className="row justify-content-center align-items-center h-100">
                {data?.map((d: any) =>
                    <div key={d.id} className="col-12 col-lg-10 col-xl-7">
                        <div className="card py-2">
                            <div className="card-header border-0 p-3 bg-transparent">
                                <div className='mx-md-5 mx-2 border-bottom'>
                                    <div className='d-md-flex align-items-center mb-2'>
                                        <h4 className='fst-italic me-3 text-prime mb-2 mb-md-0'>{d.name}</h4>
                                        <div className='d-flex align-items-center justify-content-end'>
                                            <div className='border-end text-gray d-flex align-items-center'>
                                                <IoCallOutline className='fs-20 fw-bold me-3' />
                                                <IoMailOutline className='fs-20 fw-bold me-3' />
                                            </div>
                                            <div className='d-flex align-items-center'>
                                                <BsLinkedin className='ms-3 text-blue fs-lg' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='d-md-flex align-items-center mb-3'>
                                        <h6 className='mb-2 mb-md-0 fs-17 text-prime'>{d.current_title}</h6>
                                        <div className='d-flex justify-content-end'>
                                            <ul className='text-gray mb-0'>
                                                <li>{d.location}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className='mx-md-5 mx-2'>
                                    <div className='row d-flex align-items-start mb-3'>
                                        <div className='col-12 col-xl-2 py-2'>
                                            <h6 className='mb-0 fs-17 text-prime fst-italic'>Experience</h6>
                                        </div>
                                        <div className='col-12 col-xl-10'>
                                            <ul className='mb-0 experiences'>
                                                {d.experience.map((exp: any) =>
                                                    <li key={exp} className='mb-2 info'>
                                                        <div className='d-flex flex-wrap align-items-center'>
                                                            <div className='logo-container rounded-pill me-3 mb-2 mb-md-0'>
                                                                <img src={require('../assets/images/curion-logo.png')} className='h-100 w-100 rounded-pill' alt="" />
                                                            </div>
                                                            <h6 className='mb-0 fs-17 text-prime fst-italic'>{exp}</h6>
                                                        </div>
                                                    </li>
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='row d-flex align-items-start'>
                                        <div className='col-12 col-xl-2 py-2'>
                                            <h6 className='mb-0 fs-17 text-prime fst-italic'>Education</h6>
                                        </div>
                                        <div className='col-12 col-xl-10'>
                                            <ul className='mb-0'>
                                                {d.education.map((edu: any) =>
                                                    <li key={edu} className='mb-2 info'>
                                                        <div className='d-flex flex-wrap align-items-center'>
                                                            <div className='logo-container rounded-pill me-3 mb-2 mb-md-0'>
                                                                <img src={require('../assets/images/curion-logo.png')} className='h-100 w-100 rounded-pill' alt="" />
                                                            </div>
                                                            <h6 className='mb-0 fs-17 text-prime fst-italic'>{edu}</h6>
                                                        </div>
                                                    </li>
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Main;

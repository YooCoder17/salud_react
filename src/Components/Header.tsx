import React, { useState } from 'react';
import BurgerMenu from './BurgerMenu';
import Emergency from './Modals/Emergency';
import Login from './Modals/Login';
import Register from './Modals/Register';

const Header = () => {
	const [loginOpen, setLoginOpen] = useState(false);
	const [registerOpen, setRegisterOpen] = useState(false);

	return (
		<>
			{emergencyOpen && <Emergency setOpen={setEmergencyOpen} />}
			{registerOpen && <Register setOpen={setRegisterOpen} setLoginOpen={setLoginOpen} />}
			{loginOpen && <Login setOpen={setLoginOpen} setRegisterOpen={setRegisterOpen} />}
			<div className="h-[58px] lg:h-[150px]"></div>
			<div className="fixed flex xl:flex-col bg-[#FFB71B] xl:bg-inherit flex-row-reverse top-0 left-0 right-0  xl:min-h-[150px] max-w-[100vw] z-40 w-full">
				{/* TOP HEADER */}
				<div className="xl:bg-[#6C531D] bg-[#FFB71B]">
					<div className=" flex h-full justify-end space-x-5">
						{/* AMBULANCE */}
						<div
							onClick={() => setEmergencyOpen(true)}
							className="cursor-pointer flex bg-[#E52E2E] my-2 xl:my-0 rounded-xl xl:rounded-none xl:bg-[#A42525] items-center space-x-2 px-3 font-semibold text-white text-sm"
						>
							<img src="/svg/ambulance.svg" className="w-6" alt="" />
							<div className="hidden xl:block">Urgencias y Emergencias</div>
						</div>
						{/* LOGIN */}
						<div
							onClick={() => setLoginOpen(true)}
							className="flex cursor-pointer items-center pr-5 py-2  xl:pr-10 space-x-2  text-white font-semibold"
						>
							<svg
								className="xl:text-white text-[#191B1E]"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="currentColor"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M5.55 17.625C6.6 16.8917 7.64167 16.3292 8.675 15.9375C9.70833 15.5458 10.8167 15.35 12 15.35C13.1833 15.35 14.2958 15.5458 15.3375 15.9375C16.3792 16.3292 17.425 16.8917 18.475 17.625C19.2083 16.725 19.7292 15.8167 20.0375 14.9C20.3458 13.9833 20.5 13.0167 20.5 12C20.5 9.58333 19.6875 7.5625 18.0625 5.9375C16.4375 4.3125 14.4167 3.5 12 3.5C9.58333 3.5 7.5625 4.3125 5.9375 5.9375C4.3125 7.5625 3.5 9.58333 3.5 12C3.5 13.0167 3.65833 13.9833 3.975 14.9C4.29167 15.8167 4.81667 16.725 5.55 17.625ZM12 12.75C11.0333 12.75 10.2208 12.4208 9.5625 11.7625C8.90417 11.1042 8.575 10.2917 8.575 9.325C8.575 8.35833 8.90417 7.54583 9.5625 6.8875C10.2208 6.22917 11.0333 5.9 12 5.9C12.9667 5.9 13.7792 6.22917 14.4375 6.8875C15.0958 7.54583 15.425 8.35833 15.425 9.325C15.425 10.2917 15.0958 11.1042 14.4375 11.7625C13.7792 12.4208 12.9667 12.75 12 12.75ZM12 22C10.6333 22 9.34167 21.7375 8.125 21.2125C6.90833 20.6875 5.84583 19.9708 4.9375 19.0625C4.02917 18.1542 3.3125 17.0917 2.7875 15.875C2.2625 14.6583 2 13.3667 2 12C2 10.6167 2.2625 9.32083 2.7875 8.1125C3.3125 6.90417 4.02917 5.84583 4.9375 4.9375C5.84583 4.02917 6.90833 3.3125 8.125 2.7875C9.34167 2.2625 10.6333 2 12 2C13.3833 2 14.6792 2.2625 15.8875 2.7875C17.0958 3.3125 18.1542 4.02917 19.0625 4.9375C19.9708 5.84583 20.6875 6.90417 21.2125 8.1125C21.7375 9.32083 22 10.6167 22 12C22 13.3667 21.7375 14.6583 21.2125 15.875C20.6875 17.0917 19.9708 18.1542 19.0625 19.0625C18.1542 19.9708 17.0958 20.6875 15.8875 21.2125C14.6792 21.7375 13.3833 22 12 22ZM12 20.5C12.9167 20.5 13.8125 20.3667 14.6875 20.1C15.5625 19.8333 16.425 19.3667 17.275 18.7C16.425 18.1 15.5583 17.6417 14.675 17.325C13.7917 17.0083 12.9 16.85 12 16.85C11.1 16.85 10.2083 17.0083 9.325 17.325C8.44167 17.6417 7.575 18.1 6.725 18.7C7.575 19.3667 8.4375 19.8333 9.3125 20.1C10.1875 20.3667 11.0833 20.5 12 20.5ZM12 11.25C12.5667 11.25 13.0292 11.0708 13.3875 10.7125C13.7458 10.3542 13.925 9.89167 13.925 9.325C13.925 8.75833 13.7458 8.29583 13.3875 7.9375C13.0292 7.57917 12.5667 7.4 12 7.4C11.4333 7.4 10.9708 7.57917 10.6125 7.9375C10.2542 8.29583 10.075 8.75833 10.075 9.325C10.075 9.89167 10.2542 10.3542 10.6125 10.7125C10.9708 11.0708 11.4333 11.25 12 11.25Z"
									fill="currentColor"
								/>
							</svg>
							<div className="hidden xl:block">Ingresar</div>
						</div>
					</div>
				</div>

				{/* MAIN HEADER */}
				<div className="bg-[#FFB71B] flex-grow">
					<header className="flex items-center justify-between mx-auto py-2 xl:py-5">
						{/* LOGO */}
						<div className="text-[#00205C] flex flex-col">
							<img
								src="/gif/logo.gif"
								className="h-[60px] md:h-[80px] ml-5 xl:w-auto"
								alt=""
							/>
						</div>
						{/* NAVBAR */}
						<nav className="mr-[50px] hidden xl:flex items-center space-x-8 text-[#191B1E] font-semibold text-lg">
							<a
								href="#"
								className="bg-[#0F4F87] rounded-lg text-white py-1 px-7 border-2 border-[#0F4F87] transition-all duration-300 hover:bg-white hover:text-[#0F4F87]"
							>
								Cotizá online
							</a>
							<a href="#second-section" className="nav-link">
								Gestiones
							</a>
							<a href="#third-section" className="nav-link">
								Doctor online
							</a>
							<a href="#fourth-section" className="nav-link">
								Zona Bienestar
							</a>
							<a href="#fifth-section" className="nav-link">
								Contacto
							</a>
						</nav>
					</header>
				</div>

				{/* BURGER MENU */}
				<div className="flex xl:hidden items-center justify-center bg-inherit ml-5 !max-w-full relative ">
					<BurgerMenu setEmergencyOpen={setEmergencyOpen} setLoginOpen={setLoginOpen} />
				</div>
			</div>
		</>
	);
};

export default Header;

import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
	Menu,
	MenuButton,
	MenuItem,
	MenuItems,
} from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
	{ name: 'KATEST', href: '#', current: true, test: [1, 2, 3, 4] },
	{ name: 'EMTEST', href: '#', current: false, test: [1, 2, 3, 4] },
	{ name: 'PRTEST', href: '#', current: false, test: [1, 2, 3, 4] },
	{ name: 'CATEST', href: '#', current: false, test: [1, 2, 3, 4] },
];

// function classNames(...classes) {
// 	return classes.filter(Boolean).join(' ');
// }

export default function Header() {
	return (
		<Disclosure as="nav" className="bg-gray-100">
			<div className="mx-auto max-w-7xl px-2 lg:px-6 lg:px-6">
				<div className="relative flex h-14 items-center justify-between">
					<div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
						{/* Mobile menu button*/}
						<DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-gray-700 ">
							<span className="absolute -inset-0.5" />
							<span className="sr-only">Open main menu</span>
							<Bars3Icon
								aria-hidden="true"
								className="block h-6 w-6 group-data-[open]:hidden"
							/>
							<XMarkIcon
								aria-hidden="true"
								className="hidden h-6 w-6 group-data-[open]:block"
							/>
						</DisclosureButton>
					</div>
					<div className="flex flex-1 items-center justify-center lg:items-stretch lg:justify-start">
						<div className="h-14 bg-gray-100 font-bold text-2xl lg:hidden flex justify-center items-center">
							TREPOGIT
						</div>
						{/* <div className="hidden lg:ml-6 lg:block">
							<div className="flex space-x-4">
								{navigation.map(item => (
									<a
										key={item.name}
										href={item.href}
										aria-current={item.current ? 'page' : undefined}
										className={classNames(
											item.current
												? 'bg-gray-900 text-white'
												: 'text-gray-300 hover:bg-gray-700 hover:text-white',
											'rounded-md px-3 py-2 text-sm font-medium',
										)}
									>
										{item.name}
									</a>
								))}
							</div>
						</div> */}
					</div>
					<div className="absolute inset-y-0 right-0 flex items-center pr-2 lg:static lg:inset-auto lg:ml-6 lg:pr-0">
						<button
							type="button"
							className="relative rounded-full p-1 text-gray-400 hover:text-gray-800 focus:outline-none"
						>
							<span className="absolute -inset-1.5" />
							<span className="sr-only">View notifications</span>
							<BellIcon aria-hidden="true" className="h-6 w-6" />
						</button>

						{/* Profile dropdown */}
						<Menu as="div" className="relative ml-3">
							<div>
								<MenuButton className="relative flex rounded-full ">
									<span className="absolute -inset-1.5" />
									<span className="sr-only">Open user menu</span>
									<div className="h-8 w-8 rounded-full  bg-blue-400 text-gray-100 font-bold flex flex-col justify-center">
										<p>BU</p>
									</div>
								</MenuButton>
							</div>
							<MenuItems
								transition
								className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
							>
								<MenuItem>
									<a
										href="#"
										className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
									>
										Your Profile
									</a>
								</MenuItem>
								<MenuItem>
									<a
										href="#"
										className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
									>
										Settings
									</a>
								</MenuItem>
								<MenuItem>
									<a
										href="#"
										className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
									>
										Sign out
									</a>
								</MenuItem>
							</MenuItems>
						</Menu>
					</div>
				</div>
			</div>

			<DisclosurePanel className="lg:hidden bg-gray-800">
				<div className="space-y-1 px-2 pb-3 pt-2 z-10">
					<DisclosureButton
						key="test-result"
						as="a"
						href="/"
						className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
					>
						<div>테스트 결과</div>
					</DisclosureButton>
					<DisclosureButton
						key="create-test"
						as="a"
						href="/"
						className=" text-white block rounded-md px-3 py-2 text-base font-medium"
					>
						<div>테스트 생성</div>
					</DisclosureButton>
					{/* {navigation.map(item => (
						<DisclosureButton
							key={item.name}
							as="a"
							href={item.href}
							aria-current={item.current ? 'page' : undefined}
							className={classNames(
								item.current
									? 'bg-gray-900 text-white'
									: 'text-gray-300 hover:bg-gray-700 hover:text-white',
								'block rounded-md px-3 py-2 text-base font-medium',
							)}
						>
							<div>{item.name}</div>
						</DisclosureButton>
					))} */}
				</div>
			</DisclosurePanel>
		</Disclosure>
	);
}

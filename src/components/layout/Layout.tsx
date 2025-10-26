import type { PropsWithChildren } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

function Layout({ children }: PropsWithChildren) {
	return (
		<div className="px-5 pt-5 text-[14px] font-sans xl:px-25">
			<Header />
			<main>
				{children}
			</main>
			<hr className="my-10 h-px bg-line border-none"/>
			<Footer />
		</div>
	);
}

export default Layout;
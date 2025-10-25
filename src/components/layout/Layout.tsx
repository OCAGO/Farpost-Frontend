import type { PropsWithChildren } from "react";
import Header from "../header/Header";

function Layout({ children }: PropsWithChildren) {
	return (
		<div className="px-5 pt-5 text-[14px] font-sans xl:px-25">
			<Header />
			<main>
				{children}
			</main>
		</div>
	);
}

export default Layout;
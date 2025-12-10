import Header from "./Header";
import Footer from "./Footer";
import BackToTop from "./BackToTop";

export default function PublicLayout({ children }) {
	return (
		<div className="public-layout">
			<Header />
			<main>{children}</main>
			{/* Back to Top Button */}
			<BackToTop />
			<Footer />
		</div>
	);
}

import Header from "./Header";
import Footer from "./Footer";
import "./Layout.css";

export default function Layout({ children }) {
	return (
		<div className="public-dashboard-wrapper">
			<Header />

			<main className="public-dashboard-content">{children}</main>

			<Footer />
		</div>
	);
}

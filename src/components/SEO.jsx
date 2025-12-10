import { useEffect } from "react";

export default function SEO({ title, description }) {
	useEffect(() => {
		if (title) document.title = title;

		if (description) {
			let meta =
				document.querySelector('meta[name="description"]') ||
				(() => {
					const m = document.createElement("meta");
					m.name = "description";
					document.head.appendChild(m);
					return m;
				})();

			meta.setAttribute("content", description);
		}
	}, [title, description]);

	return null;
}

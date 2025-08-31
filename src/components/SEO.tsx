import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface SEOProps {
	title: string;
	description?: string;
	canonicalPath?: string;
}

export function SEO({ title, description, canonicalPath }: SEOProps) {
	const { t } = useLanguage();
	useEffect(() => {
		document.title = title;

		if (description) {
			let meta = document.querySelector('meta[name="description"]');
			if (!meta) {
				meta = document.createElement("meta");
				meta.setAttribute("name", "description");
				document.head.appendChild(meta);
			}
			meta.setAttribute("content", description);
		}

		if (canonicalPath) {
			let link = document.querySelector(
				'link[rel="canonical"]',
			) as HTMLLinkElement | null;
			if (!link) {
				link = document.createElement("link");
				link.setAttribute("rel", "canonical");
				document.head.appendChild(link);
			}
			const origin = window.location.origin;
			link.setAttribute("href", `${origin}${canonicalPath}`);
		}
	}, [title, description, canonicalPath]);

	return null;
}

const SITE_ORIGIN = 'https://aiionwatha.com';

const FILE_EXTENSION_RE = /\.[a-z0-9]+$/i;

export function normalizeHref(href: string): string {
	if (!href) {
		return href;
	}

	if (/^(mailto:|tel:|https?:\/\/|#)/i.test(href)) {
		return href;
	}

	const [pathname, hash = ''] = href.split('#');

	if (pathname === '/') {
		return hash ? `/#${hash}` : '/';
	}

	if (FILE_EXTENSION_RE.test(pathname)) {
		return hash ? `${pathname}#${hash}` : pathname;
	}

	const normalizedPath = pathname.endsWith('/') ? pathname : `${pathname}/`;
	return hash ? `${normalizedPath}#${hash}` : normalizedPath;
}

export function normalizePageUrl(url: string): string {
	if (!url) {
		return SITE_ORIGIN;
	}

	const parsed = new URL(url, SITE_ORIGIN);

	if (parsed.pathname !== '/' && !FILE_EXTENSION_RE.test(parsed.pathname) && !parsed.pathname.endsWith('/')) {
		parsed.pathname = `${parsed.pathname}/`;
	}

	return parsed.toString();
}

export function toAbsoluteUrl(path: string, baseUrl = SITE_ORIGIN): string {
	if (!path) {
		return baseUrl;
	}

	if (/^https?:\/\//i.test(path)) {
		return path;
	}

	return new URL(path, normalizePageUrl(baseUrl)).toString();
}

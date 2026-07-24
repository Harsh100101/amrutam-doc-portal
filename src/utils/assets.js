const baseUrl = import.meta.env.BASE_URL || "/";

export function publicAsset(path) {
	return `${baseUrl}${path.replace(/^\/+/, "")}`;
}

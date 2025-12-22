export async function fetcher(
    url,
    { method = "GET", body = null, setData, setLoading } = {}
) {

    try {
        const response = await fetch(url, {
            method,
            mode: "cors",
            headers: { "Content-Type": "application/json" },
            body: body ? JSON.stringify(body) : null,
        });

        const data = await response.json();

        // For GET requests, update state if provided
        if (method === "GET") {
            if (setData) setData(data);
            if (setLoading) setLoading(false);
        }

        return data; // return data so caller can use it directly
    } catch (error) {
        console.error("Fetcher error:", error);
        if (method === "GET" && setLoading) setLoading(false);
        throw error;
    }
}

export function formatDate(start, end) {
    start = new Date(start).toLocaleString("default", { month: "short", year: "numeric" });
    end = end ? new Date(end).toLocaleString("default", { month: "short", year: "numeric" }) : "PRESENT";
    return `${start} - ${end}`.toUpperCase();
}

export function getYear(date) {
    return new Date(date).toLocaleString("default", {"year": "numeric"})
}

export function getDomain(url) {
    return url.split("/")[2]
}

// Map of icon libraries to import functions
const ICON_IMPORTERS = {
    fa: () => import('react-icons/fa'),
    ri: () => import('react-icons/ri'),
    md: () => import('react-icons/md'),
    ai: () => import('react-icons/ai'),
    si: () => import('react-icons/si'),
    lia: () => import ('react-icons/lia'),
    io: () => import ('react-icons/io')
};

const iconCache = new Map();

export async function loadIcon(library, name) {
    const cacheKey = `${library}/${name}`;
    
    // Check cache first
    if (iconCache.has(cacheKey)) {
        return iconCache.get(cacheKey);
    }
    
    const importer = ICON_IMPORTERS[library];
    
    if (!importer) {
        throw new Error(`Icon library "${library}" is not supported. Add it to ICON_IMPORTERS map.`);
    }
    
    const module = await importer();
    const icon = module[name];
    
    if (!icon) {
        throw new Error(`Icon "${name}" not found in library "${library}"`);
    }
    
    iconCache.set(cacheKey, icon);
    return icon;
}


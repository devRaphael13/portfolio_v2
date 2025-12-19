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


// export async function loadIcon(library, name) {
//     const mod = await import(`react-icons/${library}`);
//     return mod[name];
// }


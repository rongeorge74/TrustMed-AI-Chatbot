(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[next]/internal/font/google/inter_fa93af41.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "inter_fa93af41-module__0D_jrq__className",
});
}),
"[next]/internal/font/google/inter_fa93af41.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_fa93af41$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/inter_fa93af41.module.css [app-client] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_fa93af41$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Inter', 'Inter Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_fa93af41$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_fa93af41$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[project]/src/lib/theme.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "theme",
    ()=>theme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/styles/createTheme.js [app-client] (ecmascript) <export default as createTheme>");
'use client';
;
const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__["createTheme"])({
    palette: {
        mode: 'dark',
        primary: {
            main: '#00d4ff',
            light: '#66e3ff',
            dark: '#0099cc',
            contrastText: '#0a0a0f'
        },
        secondary: {
            main: '#ff006e',
            light: '#ff5599',
            dark: '#cc0057',
            contrastText: '#ffffff'
        },
        error: {
            main: '#ff073a',
            light: '#ff4569',
            dark: '#cc052e'
        },
        warning: {
            main: '#ffb700',
            light: '#ffcc33',
            dark: '#cc9200'
        },
        info: {
            main: '#7c3aed',
            light: '#a855f7',
            dark: '#6d28d9'
        },
        success: {
            main: '#10d9c4',
            light: '#4fe0d2',
            dark: '#0bb5a3'
        },
        background: {
            default: '#0a0a0f',
            paper: 'rgba(17, 25, 40, 0.9)'
        },
        text: {
            primary: '#ffffff',
            secondary: 'rgba(255, 255, 255, 0.8)'
        },
        grey: {
            50: '#f7fafc',
            100: '#edf2f7',
            200: '#e2e8f0',
            300: '#cbd5e0',
            400: '#a0aec0',
            500: '#718096',
            600: '#4a5568',
            700: '#2d3748',
            800: '#1a202c',
            900: '#0f0f15'
        }
    },
    typography: {
        fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
        h1: {
            fontSize: '2.5rem',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.02em'
        },
        h2: {
            fontSize: '2rem',
            fontWeight: 700,
            lineHeight: 1.2,
            letterSpacing: '-0.01em'
        },
        h3: {
            fontSize: '1.75rem',
            fontWeight: 600,
            lineHeight: 1.3
        },
        h4: {
            fontSize: '1.5rem',
            fontWeight: 600,
            lineHeight: 1.4
        },
        h5: {
            fontSize: '1.25rem',
            fontWeight: 600,
            lineHeight: 1.4
        },
        h6: {
            fontSize: '1.125rem',
            fontWeight: 600,
            lineHeight: 1.5
        },
        body1: {
            fontSize: '1rem',
            lineHeight: 1.6,
            fontWeight: 400
        },
        body2: {
            fontSize: '0.875rem',
            lineHeight: 1.5,
            fontWeight: 400
        },
        button: {
            fontWeight: 600,
            textTransform: 'none'
        }
    },
    shape: {
        borderRadius: 16
    },
    shadows: [
        'none',
        '0px 2px 4px -1px rgba(0,0,0,0.06), 0px 1px 2px -1px rgba(0,0,0,0.1)',
        '0px 4px 6px -1px rgba(0,0,0,0.1), 0px 2px 4px -1px rgba(0,0,0,0.06)',
        '0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -2px rgba(0,0,0,0.05)',
        '0px 20px 25px -5px rgba(0,0,0,0.1), 0px 10px 10px -5px rgba(0,0,0,0.04)',
        '0px 25px 50px -12px rgba(0,0,0,0.25)',
        '0px 25px 50px -12px rgba(0,0,0,0.25)',
        '0px 25px 50px -12px rgba(0,0,0,0.25)',
        '0px 25px 50px -12px rgba(0,0,0,0.25)',
        '0px 25px 50px -12px rgba(0,0,0,0.25)',
        '0px 25px 50px -12px rgba(0,0,0,0.25)',
        '0px 25px 50px -12px rgba(0,0,0,0.25)',
        '0px 25px 50px -12px rgba(0,0,0,0.25)',
        '0px 25px 50px -12px rgba(0,0,0,0.25)',
        '0px 25px 50px -12px rgba(0,0,0,0.25)',
        '0px 25px 50px -12px rgba(0,0,0,0.25)',
        '0px 25px 50px -12px rgba(0,0,0,0.25)',
        '0px 25px 50px -12px rgba(0,0,0,0.25)',
        '0px 25px 50px -12px rgba(0,0,0,0.25)',
        '0px 25px 50px -12px rgba(0,0,0,0.25)',
        '0px 25px 50px -12px rgba(0,0,0,0.25)',
        '0px 25px 50px -12px rgba(0,0,0,0.25)',
        '0px 25px 50px -12px rgba(0,0,0,0.25)',
        '0px 25px 50px -12px rgba(0,0,0,0.25)',
        '0px 25px 50px -12px rgba(0,0,0,0.25)'
    ],
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    background: `
            radial-gradient(ellipse at top, #1e3a8a 0%, transparent 70%),
            radial-gradient(ellipse at bottom, #7c2d92 0%, transparent 70%),
            radial-gradient(ellipse at right, #0f172a 0%, transparent 70%),
            linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #16213e 100%)
          `,
                    minHeight: '100vh',
                    backgroundAttachment: 'fixed'
                },
                '*::-webkit-scrollbar': {
                    width: '8px'
                },
                '*::-webkit-scrollbar-track': {
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '10px'
                },
                '*::-webkit-scrollbar-thumb': {
                    background: 'linear-gradient(45deg, #00d4ff, #ff006e)',
                    borderRadius: '10px',
                    '&:hover': {
                        background: 'linear-gradient(45deg, #66e3ff, #ff5599)'
                    }
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '16px',
                    padding: '12px 28px',
                    fontWeight: 700,
                    textTransform: 'none',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: '-100%',
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
                        transition: 'left 0.5s'
                    },
                    '&:hover::before': {
                        left: '100%'
                    },
                    '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 10px 30px rgba(0, 212, 255, 0.4)'
                    },
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                },
                contained: {
                    background: 'linear-gradient(45deg, #00d4ff 0%, #7c3aed 50%, #ff006e 100%)',
                    backgroundSize: '300% 300%',
                    animation: 'gradientShift 3s ease infinite',
                    border: '1px solid rgba(0, 212, 255, 0.3)',
                    '&:hover': {
                        background: 'linear-gradient(45deg, #66e3ff 0%, #a855f7 50%, #ff5599 100%)',
                        boxShadow: '0 0 30px rgba(0, 212, 255, 0.6), 0 0 60px rgba(255, 0, 110, 0.4)'
                    },
                    '@keyframes gradientShift': {
                        '0%': {
                            backgroundPosition: '0% 50%'
                        },
                        '50%': {
                            backgroundPosition: '100% 50%'
                        },
                        '100%': {
                            backgroundPosition: '0% 50%'
                        }
                    }
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: '24px',
                    background: 'rgba(17, 25, 40, 0.8)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(0, 212, 255, 0.2)',
                    position: 'relative',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        borderRadius: '24px',
                        padding: '1px',
                        background: 'linear-gradient(45deg, #00d4ff, #7c3aed, #ff006e)',
                        mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        maskComposite: 'exclude',
                        opacity: 0,
                        transition: 'opacity 0.3s ease'
                    },
                    '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: `
              0 20px 40px rgba(0, 0, 0, 0.4),
              0 0 40px rgba(0, 212, 255, 0.2),
              0 0 80px rgba(255, 0, 110, 0.1)
            `,
                        '&::before': {
                            opacity: 1
                        }
                    },
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                }
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    borderRadius: '20px',
                    background: 'rgba(17, 25, 40, 0.9)',
                    backdropFilter: 'blur(15px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                }
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '16px',
                        backgroundColor: 'rgba(17, 25, 40, 0.8)',
                        backdropFilter: 'blur(10px)',
                        '& fieldset': {
                            borderColor: 'rgba(0, 212, 255, 0.3)'
                        },
                        '&:hover fieldset': {
                            borderColor: '#00d4ff',
                            boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)'
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#00d4ff',
                            borderWidth: '2px',
                            boxShadow: '0 0 30px rgba(0, 212, 255, 0.4)'
                        }
                    },
                    '& .MuiInputBase-input': {
                        color: '#ffffff',
                        '&::placeholder': {
                            color: 'rgba(255, 255, 255, 0.6)'
                        }
                    }
                }
            }
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    borderRadius: '12px',
                    fontWeight: 600,
                    backdropFilter: 'blur(10px)'
                },
                colorPrimary: {
                    background: 'linear-gradient(45deg, #00d4ff 0%, #7c3aed 100%)',
                    color: '#ffffff',
                    border: '1px solid rgba(0, 212, 255, 0.3)',
                    '&:hover': {
                        background: 'linear-gradient(45deg, #66e3ff 0%, #a855f7 100%)',
                        boxShadow: '0 0 20px rgba(0, 212, 255, 0.4)'
                    }
                }
            }
        },
        MuiAvatar: {
            styleOverrides: {
                root: {
                    border: '2px solid rgba(0, 212, 255, 0.3)',
                    boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)'
                }
            }
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    background: 'rgba(10, 10, 15, 0.95)',
                    backdropFilter: 'blur(20px)',
                    borderBottom: '1px solid rgba(0, 212, 255, 0.2)'
                }
            }
        },
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    background: 'rgba(10, 10, 15, 0.98)',
                    backdropFilter: 'blur(20px)',
                    borderRight: '1px solid rgba(0, 212, 255, 0.2)'
                }
            }
        }
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/providers/QueryProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QueryProvider",
    ()=>QueryProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
'use client';
;
;
;
const queryClient = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClient"]({
    defaultOptions: {
        queries: {
            retry: 1,
            refetchOnWindowFocus: false,
            staleTime: 5 * 60 * 1000 // 5 minutes
        }
    }
});
function QueryProvider(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "ba07c23e5f371089ad4a63230553eb131978f137d39e73d5114f385c73792e88") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ba07c23e5f371089ad4a63230553eb131978f137d39e73d5114f385c73792e88";
    }
    const { children } = t0;
    let t1;
    if ($[1] !== children) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
            client: queryClient,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/providers/QueryProvider.tsx",
            lineNumber: 31,
            columnNumber: 10
        }, this);
        $[1] = children;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    return t1;
}
_c = QueryProvider;
var _c;
__turbopack_context__.k.register(_c, "QueryProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// API service for TrustMed-AI Medical Chatbot
__turbopack_context__.s([
    "apiService",
    ()=>apiService
]);
// const API_BASE_URL = 'http://34.170.57.170:8000';
// OLD (Causes Mixed Content Error)
// const API_BASE_URL = 'http://34.170.57.170:8000';
// NEW (Uses the Next.js Proxy)
// The browser sends this to Next.js (HTTPS), which forwards it to the VM
const API_BASE_URL = '/api/proxy';
const makeRequest = async (endpoint, options)=>{
    const url = `${API_BASE_URL}${endpoint}`;
    try {
        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                ...options?.headers
            },
            ...options
        });
        if (!response.ok) {
            const errorData = await response.json().catch(()=>({}));
            throw new Error(errorData.detail || `API Error: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`API request failed for ${endpoint}:`, error);
        throw error;
    }
};
const apiService = {
    // Health check - TrustMed-AI endpoint
    healthCheck: ()=>{
        return makeRequest('/');
    },
    // Main medical query endpoint - TrustMed-AI RAG
    medicalQuery: (query)=>{
        const payload = {
            query
        };
        return makeRequest('/medical/query', {
            method: 'POST',
            body: JSON.stringify(payload)
        });
    },
    // Legacy compatibility methods (for backward compatibility)
    chat: (question)=>{
        return apiService.medicalQuery(question);
    },
    // TrustMed-AI Disease Search endpoints
    searchDiseases: (query, limit = 50)=>{
        const params = new URLSearchParams();
        if (query) params.append('query', query);
        params.append('limit', limit.toString());
        return makeRequest(`/diseases?${params}`);
    },
    // Get disease categories
    getDiseaseCategories: ()=>{
        return makeRequest('/diseases/categories');
    },
    // Legacy search method (updated to use new endpoint)
    search: (question, limit = 5)=>{
        return apiService.searchDiseases(question, limit);
    },
    // Legacy diseases methods (updated to use new endpoint)
    getDiseases: ()=>{
        return apiService.searchDiseases().then((data)=>data.diseases?.map((disease, index)=>({
                    id: index + 1,
                    name: disease.name
                })) || []);
    },
    // Get specific disease details (legacy compatibility)
    getDiseaseDetail: (id)=>{
        // This would need to be implemented based on specific disease lookup
        return makeRequest(`/disease/${id}`);
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/AppLayout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppLayout",
    ()=>AppLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Drawer$2f$Drawer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Drawer$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Drawer/Drawer.js [app-client] (ecmascript) <export default as Drawer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$List$2f$List$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/List/List.js [app-client] (ecmascript) <export default as List>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItem$2f$ListItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItem$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/ListItem/ListItem.js [app-client] (ecmascript) <export default as ListItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemButton$2f$ListItemButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/ListItemButton/ListItemButton.js [app-client] (ecmascript) <export default as ListItemButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemIcon$2f$ListItemIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/ListItemIcon/ListItemIcon.js [app-client] (ecmascript) <export default as ListItemIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemText$2f$ListItemText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemText$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/ListItemText/ListItemText.js [app-client] (ecmascript) <export default as ListItemText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Avatar/Avatar.js [app-client] (ecmascript) <export default as Avatar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Fab$2f$Fab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fab$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Fab/Fab.js [app-client] (ecmascript) <export default as Fab>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Menu.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Chat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Chat.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Search.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$LocalHospital$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/LocalHospital.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
const drawerWidth = 280;
const navigationItems = [
    {
        title: 'AI Chat',
        path: '/chat',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Chat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        description: 'Ask medical questions'
    },
    {
        title: 'Quick Search',
        path: '/search',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        description: 'Find conditions fast'
    },
    {
        title: 'Disease Database',
        path: '/diseases',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$LocalHospital$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        description: 'Browse all conditions'
    }
];
function AppLayout(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(74);
    if ($[0] !== "6f618b63735530662d45f0d0fd096665956114e010ef53c2c03a454e2c92914d") {
        for(let $i = 0; $i < 74; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6f618b63735530662d45f0d0fd096665956114e010ef53c2c03a454e2c92914d";
    }
    const { children } = t0;
    const [mobileOpen, setMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            queryKey: [
                "health"
            ],
            queryFn: _temp,
            refetchInterval: 30000
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const { data: healthData, isError: healthError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t1);
    let t2;
    if ($[2] !== mobileOpen) {
        t2 = ({
            "AppLayout[handleDrawerToggle]": ()=>{
                setMobileOpen(!mobileOpen);
            }
        })["AppLayout[handleDrawerToggle]"];
        $[2] = mobileOpen;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const handleDrawerToggle = t2;
    let t3;
    if ($[4] !== router) {
        t3 = ({
            "AppLayout[handleNavigation]": (path)=>{
                router.push(path);
                setMobileOpen(false);
            }
        })["AppLayout[handleNavigation]"];
        $[4] = router;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    const handleNavigation = t3;
    let t4;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            height: "100%",
            display: "flex",
            flexDirection: "column",
            background: "\n        radial-gradient(ellipse at top left, rgba(0, 212, 255, 0.08) 0%, transparent 70%),\n        radial-gradient(ellipse at bottom right, rgba(255, 0, 110, 0.06) 0%, transparent 70%),\n        linear-gradient(135deg, rgba(10, 10, 15, 0.98) 0%, rgba(17, 25, 40, 0.95) 100%)\n      ",
            backdropFilter: "blur(20px)",
            borderRight: "1px solid rgba(0, 212, 255, 0.2)"
        };
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = {
            p: 4,
            borderBottom: "1px solid rgba(0, 212, 255, 0.2)",
            position: "relative",
            "&::before": {
                content: "\"\"",
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "1px",
                background: "linear-gradient(90deg, transparent, #00d4ff, #ff006e, transparent)",
                animation: "logoGlow 3s ease-in-out infinite"
            },
            "@keyframes logoGlow": {
                "0%, 100%": {
                    opacity: 0.5
                },
                "50%": {
                    opacity: 1
                }
            }
        };
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = {
            display: "flex",
            alignItems: "center",
            gap: 3
        };
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            component: "img",
            src: "/LOGO_doctor.png",
            alt: "TrustMed-AI Logo",
            sx: {
                width: 56,
                height: 56,
                borderRadius: "50%",
                filter: "\n                drop-shadow(0 0 20px rgba(0, 212, 255, 0.6))\n                drop-shadow(0 0 30px rgba(0, 212, 255, 0.4))\n                brightness(1.2)\n                contrast(1.1)\n              ",
                border: "2px solid rgba(0, 212, 255, 0.3)",
                boxShadow: "0 0 30px rgba(0, 212, 255, 0.5)",
                position: "relative",
                animation: "logoFloat 4s ease-in-out infinite",
                "@keyframes logoFloat": {
                    "0%, 100%": {
                        transform: "translateY(0px) scale(1)"
                    },
                    "25%": {
                        transform: "translateY(-3px) scale(1.02)"
                    },
                    "50%": {
                        transform: "translateY(0px) scale(1.05)"
                    },
                    "75%": {
                        transform: "translateY(3px) scale(1.02)"
                    }
                }
            }
        }, void 0, false, {
            fileName: "[project]/src/components/layout/AppLayout.tsx",
            lineNumber: 142,
            columnNumber: 10
        }, this);
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    let t8;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
            variant: "h6",
            component: "div",
            sx: {
                fontWeight: 900,
                background: "linear-gradient(45deg, #00d4ff 0%, #ffffff 50%, #ff006e 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 30px rgba(0, 212, 255, 0.5)",
                fontFamily: "\"Inter\", \"Roboto\", sans-serif"
            },
            children: "TrustMed-AI"
        }, void 0, false, {
            fileName: "[project]/src/components/layout/AppLayout.tsx",
            lineNumber: 172,
            columnNumber: 10
        }, this);
        $[10] = t8;
    } else {
        t8 = $[10];
    }
    let t9;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: t5,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: t6,
                children: [
                    t7,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        children: [
                            t8,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                variant: "caption",
                                sx: {
                                    color: "rgba(0, 212, 255, 0.8)",
                                    fontWeight: 600,
                                    textShadow: "0 0 15px rgba(0, 212, 255, 0.4)",
                                    fontSize: "0.85rem"
                                },
                                children: "Neural Medical Core"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/AppLayout.tsx",
                                lineNumber: 187,
                                columnNumber: 49
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/AppLayout.tsx",
                        lineNumber: 187,
                        columnNumber: 40
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/AppLayout.tsx",
                lineNumber: 187,
                columnNumber: 23
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/layout/AppLayout.tsx",
            lineNumber: 187,
            columnNumber: 10
        }, this);
        $[11] = t9;
    } else {
        t9 = $[11];
    }
    let t10;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = {
            p: 3,
            borderBottom: "1px solid rgba(0, 212, 255, 0.2)",
            background: "rgba(0, 212, 255, 0.02)",
            position: "relative",
            "&::before": {
                content: "\"\"",
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "linear-gradient(45deg, transparent, rgba(0, 212, 255, 0.05), transparent)",
                animation: "statusPulse 3s ease-in-out infinite"
            },
            "@keyframes statusPulse": {
                "0%, 100%": {
                    opacity: 0.3
                },
                "50%": {
                    opacity: 0.7
                }
            }
        };
        $[12] = t10;
    } else {
        t10 = $[12];
    }
    let t11;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
            variant: "caption",
            sx: {
                color: "rgba(0, 212, 255, 0.9)",
                fontWeight: 700,
                fontSize: "0.75rem",
                letterSpacing: "0.5px",
                textTransform: "uppercase",
                mb: 2,
                display: "block",
                textShadow: "0 0 10px rgba(0, 212, 255, 0.3)"
            },
            children: "Neural Core Status"
        }, void 0, false, {
            fileName: "[project]/src/components/layout/AppLayout.tsx",
            lineNumber: 229,
            columnNumber: 11
        }, this);
        $[13] = t11;
    } else {
        t11 = $[13];
    }
    let t12;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = {
            display: "flex",
            flexDirection: "column",
            gap: 1.5
        };
        $[14] = t12;
    } else {
        t12 = $[14];
    }
    let t13;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = {
            display: "flex",
            alignItems: "center",
            gap: 1.5
        };
        $[15] = t13;
    } else {
        t13 = $[15];
    }
    let t14;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
            sx: {
                fontSize: "1rem"
            },
            children: "🧬"
        }, void 0, false, {
            fileName: "[project]/src/components/layout/AppLayout.tsx",
            lineNumber: 267,
            columnNumber: 11
        }, this);
        $[16] = t14;
    } else {
        t14 = $[16];
    }
    let t15;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: t13,
            children: [
                t14,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                    variant: "caption",
                    sx: {
                        color: "rgba(255, 255, 255, 0.85)",
                        fontWeight: 500,
                        fontSize: "0.8rem"
                    },
                    children: "460 medical conditions indexed"
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/AppLayout.tsx",
                    lineNumber: 276,
                    columnNumber: 30
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/AppLayout.tsx",
            lineNumber: 276,
            columnNumber: 11
        }, this);
        $[17] = t15;
    } else {
        t15 = $[17];
    }
    let t16;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = {
            display: "flex",
            alignItems: "center",
            gap: 1.5
        };
        $[18] = t16;
    } else {
        t16 = $[18];
    }
    let t17;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
            sx: {
                fontSize: "1rem"
            },
            children: "⚡"
        }, void 0, false, {
            fileName: "[project]/src/components/layout/AppLayout.tsx",
            lineNumber: 298,
            columnNumber: 11
        }, this);
        $[19] = t17;
    } else {
        t17 = $[19];
    }
    let t18;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: t16,
            children: [
                t17,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                    variant: "caption",
                    sx: {
                        color: "rgba(255, 255, 255, 0.85)",
                        fontWeight: 500,
                        fontSize: "0.8rem"
                    },
                    children: "ChromaDB + Advanced Neural Engine"
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/AppLayout.tsx",
                    lineNumber: 307,
                    columnNumber: 30
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/AppLayout.tsx",
            lineNumber: 307,
            columnNumber: 11
        }, this);
        $[20] = t18;
    } else {
        t18 = $[20];
    }
    let t19;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = {
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            mt: 1
        };
        $[21] = t19;
    } else {
        t19 = $[21];
    }
    const t20 = healthError ? "#ff006e" : healthData?.status === "healthy" ? "#00d4ff" : "#ffa500";
    const t21 = healthError ? "0 0 12px #ff006e" : healthData?.status === "healthy" ? "0 0 12px #00d4ff" : "0 0 12px #ffa500";
    let t22;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = {
            "0%, 100%": {
                opacity: 1
            },
            "50%": {
                opacity: 0.4
            }
        };
        $[22] = t22;
    } else {
        t22 = $[22];
    }
    let t23;
    if ($[23] !== t20 || $[24] !== t21) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: {
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: t20,
                boxShadow: t21,
                animation: "statusBlink 2s ease-in-out infinite",
                "@keyframes statusBlink": t22
            }
        }, void 0, false, {
            fileName: "[project]/src/components/layout/AppLayout.tsx",
            lineNumber: 346,
            columnNumber: 11
        }, this);
        $[23] = t20;
        $[24] = t21;
        $[25] = t23;
    } else {
        t23 = $[25];
    }
    const t24 = healthError ? "#ff006e" : healthData?.status === "healthy" ? "#00d4ff" : "#ffa500";
    const t25 = healthError ? "0 0 8px #ff006e" : healthData?.status === "healthy" ? "0 0 8px #00d4ff" : "0 0 8px #ffa500";
    let t26;
    if ($[26] !== t24 || $[27] !== t25) {
        t26 = {
            color: t24,
            fontWeight: 700,
            fontSize: "0.8rem",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            textShadow: t25
        };
        $[26] = t24;
        $[27] = t25;
        $[28] = t26;
    } else {
        t26 = $[28];
    }
    const t27 = healthError ? "NEURAL CORE OFFLINE" : healthData?.status === "healthy" ? "NEURAL CORE ACTIVE" : "NEURAL CORE SYNCING";
    let t28;
    if ($[29] !== t26 || $[30] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
            variant: "caption",
            sx: t26,
            children: t27
        }, void 0, false, {
            fileName: "[project]/src/components/layout/AppLayout.tsx",
            lineNumber: 382,
            columnNumber: 11
        }, this);
        $[29] = t26;
        $[30] = t27;
        $[31] = t28;
    } else {
        t28 = $[31];
    }
    let t29;
    if ($[32] !== t23 || $[33] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: t10,
            children: [
                t11,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    sx: t12,
                    children: [
                        t15,
                        t18,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            sx: t19,
                            children: [
                                t23,
                                t28
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/AppLayout.tsx",
                            lineNumber: 391,
                            columnNumber: 54
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/AppLayout.tsx",
                    lineNumber: 391,
                    columnNumber: 30
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/AppLayout.tsx",
            lineNumber: 391,
            columnNumber: 11
        }, this);
        $[32] = t23;
        $[33] = t28;
        $[34] = t29;
    } else {
        t29 = $[34];
    }
    let t30;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t30 = {
            flex: 1,
            px: 3,
            py: 3
        };
        $[35] = t30;
    } else {
        t30 = $[35];
    }
    let t31;
    if ($[36] !== handleNavigation || $[37] !== pathname) {
        t31 = navigationItems.map({
            "AppLayout[navigationItems.map()]": (item, index)=>{
                const Icon = item.icon;
                const isActive = pathname === item.path;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItem$2f$ListItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItem$3e$__["ListItem"], {
                    disablePadding: true,
                    sx: {
                        mb: 2
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemButton$2f$ListItemButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemButton$3e$__["ListItemButton"], {
                        onClick: {
                            "AppLayout[navigationItems.map() > <ListItemButton>.onClick]": ()=>handleNavigation(item.path)
                        }["AppLayout[navigationItems.map() > <ListItemButton>.onClick]"],
                        sx: {
                            borderRadius: "16px",
                            p: 2.5,
                            background: isActive ? "linear-gradient(135deg, rgba(0, 212, 255, 0.15) 0%, rgba(255, 0, 110, 0.1) 100%)" : "transparent",
                            border: isActive ? "1px solid rgba(0, 212, 255, 0.3)" : "1px solid transparent",
                            backdropFilter: isActive ? "blur(10px)" : "none",
                            position: "relative",
                            "&:hover": {
                                background: isActive ? "linear-gradient(135deg, rgba(0, 212, 255, 0.2) 0%, rgba(255, 0, 110, 0.15) 100%)" : "rgba(0, 212, 255, 0.08)",
                                transform: "translateY(-2px) translateX(4px)",
                                boxShadow: "0 8px 25px rgba(0, 212, 255, 0.2)",
                                borderColor: "rgba(0, 212, 255, 0.4)"
                            },
                            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemIcon$2f$ListItemIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemIcon$3e$__["ListItemIcon"], {
                                sx: {
                                    minWidth: 48
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"], {
                                    sx: {
                                        width: 40,
                                        height: 40,
                                        background: isActive ? "linear-gradient(45deg, #00d4ff 0%, #7c3aed 100%)" : "rgba(0, 212, 255, 0.1)",
                                        color: isActive ? "white" : "#00d4ff",
                                        border: isActive ? "1px solid rgba(0, 212, 255, 0.4)" : "1px solid rgba(0, 212, 255, 0.2)",
                                        boxShadow: isActive ? "0 0 20px rgba(0, 212, 255, 0.4)" : "none"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        fontSize: "small"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/AppLayout.tsx",
                                        lineNumber: 442,
                                        columnNumber: 18
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/AppLayout.tsx",
                                    lineNumber: 435,
                                    columnNumber: 16
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/AppLayout.tsx",
                                lineNumber: 433,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemText$2f$ListItemText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemText$3e$__["ListItemText"], {
                                primary: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                    variant: "body2",
                                    fontWeight: isActive ? 700 : 600,
                                    sx: {
                                        fontSize: "1rem",
                                        color: isActive ? "#00d4ff" : "rgba(255, 255, 255, 0.9)",
                                        textShadow: isActive ? "0 0 15px rgba(0, 212, 255, 0.5)" : "0 0 10px rgba(0, 212, 255, 0.2)"
                                    },
                                    children: item.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/AppLayout.tsx",
                                    lineNumber: 442,
                                    columnNumber: 90
                                }, void 0),
                                secondary: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                    variant: "caption",
                                    sx: {
                                        fontSize: "0.8rem",
                                        mt: 0.5,
                                        color: "rgba(255, 255, 255, 0.7)"
                                    },
                                    children: item.description
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/AppLayout.tsx",
                                    lineNumber: 446,
                                    columnNumber: 54
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/AppLayout.tsx",
                                lineNumber: 442,
                                columnNumber: 67
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/AppLayout.tsx",
                        lineNumber: 417,
                        columnNumber: 12
                    }, this)
                }, item.path, false, {
                    fileName: "[project]/src/components/layout/AppLayout.tsx",
                    lineNumber: 415,
                    columnNumber: 16
                }, this);
            }
        }["AppLayout[navigationItems.map()]"]);
        $[36] = handleNavigation;
        $[37] = pathname;
        $[38] = t31;
    } else {
        t31 = $[38];
    }
    let t32;
    if ($[39] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$List$2f$List$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"], {
            sx: t30,
            children: t31
        }, void 0, false, {
            fileName: "[project]/src/components/layout/AppLayout.tsx",
            lineNumber: 461,
            columnNumber: 11
        }, this);
        $[39] = t31;
        $[40] = t32;
    } else {
        t32 = $[40];
    }
    let t33;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = {
            p: 3,
            textAlign: "center",
            borderTop: "1px solid rgba(0, 212, 255, 0.2)",
            position: "relative",
            background: "linear-gradient(45deg, rgba(0, 212, 255, 0.03), rgba(255, 0, 110, 0.03))",
            "&::before": {
                content: "\"\"",
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "1px",
                background: "linear-gradient(90deg, transparent, #00d4ff, #ff006e, transparent)",
                animation: "footerLineGlow 2s ease-in-out infinite"
            },
            "@keyframes footerLineGlow": {
                "0%, 100%": {
                    opacity: 0.4
                },
                "50%": {
                    opacity: 0.8
                }
            }
        };
        $[41] = t33;
    } else {
        t33 = $[41];
    }
    let t34;
    if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
            variant: "caption",
            display: "block",
            sx: {
                mb: 1,
                color: "rgba(255, 255, 255, 0.7)",
                fontWeight: 500
            },
            children: "Medical data sourced from"
        }, void 0, false, {
            fileName: "[project]/src/components/layout/AppLayout.tsx",
            lineNumber: 500,
            columnNumber: 11
        }, this);
        $[42] = t34;
    } else {
        t34 = $[42];
    }
    let t35;
    if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: t33,
            children: [
                t34,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                    variant: "caption",
                    fontWeight: "bold",
                    sx: {
                        background: "linear-gradient(45deg, #00d4ff 0%, #7c3aed 50%, #ff006e 100%)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        textShadow: "0 0 20px rgba(0, 212, 255, 0.4)",
                        fontSize: "0.8rem"
                    },
                    children: "MAYO CLINIC NEURAL DATABASE"
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/AppLayout.tsx",
                    lineNumber: 511,
                    columnNumber: 30
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/AppLayout.tsx",
            lineNumber: 511,
            columnNumber: 11
        }, this);
        $[43] = t35;
    } else {
        t35 = $[43];
    }
    let t36;
    if ($[44] !== t29 || $[45] !== t32) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: t4,
            children: [
                t9,
                t29,
                t32,
                t35
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/AppLayout.tsx",
            lineNumber: 525,
            columnNumber: 11
        }, this);
        $[44] = t29;
        $[45] = t32;
        $[46] = t36;
    } else {
        t36 = $[46];
    }
    const drawer = t36;
    let t37;
    if ($[47] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = {
            display: "flex",
            height: "100vh",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        };
        $[47] = t37;
    } else {
        t37 = $[47];
    }
    let t38;
    if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
        t38 = {
            width: {
                sm: drawerWidth
            },
            flexShrink: {
                sm: 0
            }
        };
        $[48] = t38;
    } else {
        t38 = $[48];
    }
    let t39;
    let t40;
    if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
        t39 = {
            keepMounted: true
        };
        t40 = {
            display: {
                xs: "block",
                sm: "none"
            },
            "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth
            }
        };
        $[49] = t39;
        $[50] = t40;
    } else {
        t39 = $[49];
        t40 = $[50];
    }
    let t41;
    if ($[51] !== drawer || $[52] !== handleDrawerToggle || $[53] !== mobileOpen) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Drawer$2f$Drawer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Drawer$3e$__["Drawer"], {
            variant: "temporary",
            open: mobileOpen,
            onClose: handleDrawerToggle,
            ModalProps: t39,
            sx: t40,
            children: drawer
        }, void 0, false, {
            fileName: "[project]/src/components/layout/AppLayout.tsx",
            lineNumber: 582,
            columnNumber: 11
        }, this);
        $[51] = drawer;
        $[52] = handleDrawerToggle;
        $[53] = mobileOpen;
        $[54] = t41;
    } else {
        t41 = $[54];
    }
    let t42;
    if ($[55] === Symbol.for("react.memo_cache_sentinel")) {
        t42 = {
            display: {
                xs: "none",
                sm: "block"
            },
            "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth
            }
        };
        $[55] = t42;
    } else {
        t42 = $[55];
    }
    let t43;
    if ($[56] !== drawer) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Drawer$2f$Drawer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Drawer$3e$__["Drawer"], {
            variant: "permanent",
            sx: t42,
            open: true,
            children: drawer
        }, void 0, false, {
            fileName: "[project]/src/components/layout/AppLayout.tsx",
            lineNumber: 608,
            columnNumber: 11
        }, this);
        $[56] = drawer;
        $[57] = t43;
    } else {
        t43 = $[57];
    }
    let t44;
    if ($[58] !== t41 || $[59] !== t43) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            component: "nav",
            sx: t38,
            children: [
                t41,
                t43
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/AppLayout.tsx",
            lineNumber: 616,
            columnNumber: 11
        }, this);
        $[58] = t41;
        $[59] = t43;
        $[60] = t44;
    } else {
        t44 = $[60];
    }
    let t45;
    if ($[61] === Symbol.for("react.memo_cache_sentinel")) {
        t45 = {
            flexGrow: 1,
            width: {
                sm: `calc(100% - ${drawerWidth}px)`
            },
            height: "100vh",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            pt: "80px"
        };
        $[61] = t45;
    } else {
        t45 = $[61];
    }
    let t46;
    if ($[62] === Symbol.for("react.memo_cache_sentinel")) {
        t46 = {
            flex: 1,
            overflow: "auto",
            pt: 1,
            px: 3,
            pb: 3,
            background: "\n              radial-gradient(ellipse at top left, rgba(0, 212, 255, 0.02) 0%, transparent 60%),\n              radial-gradient(ellipse at bottom right, rgba(255, 0, 110, 0.02) 0%, transparent 60%),\n              transparent\n            ",
            minHeight: "100%"
        };
        $[62] = t46;
    } else {
        t46 = $[62];
    }
    let t47;
    if ($[63] !== children) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            component: "main",
            sx: t45,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: t46,
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/layout/AppLayout.tsx",
                lineNumber: 657,
                columnNumber: 42
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/layout/AppLayout.tsx",
            lineNumber: 657,
            columnNumber: 11
        }, this);
        $[63] = children;
        $[64] = t47;
    } else {
        t47 = $[64];
    }
    let t48;
    if ($[65] === Symbol.for("react.memo_cache_sentinel")) {
        t48 = {
            xs: "flex",
            sm: "none"
        };
        $[65] = t48;
    } else {
        t48 = $[65];
    }
    let t49;
    let t50;
    if ($[66] === Symbol.for("react.memo_cache_sentinel")) {
        t49 = {
            position: "fixed",
            bottom: 24,
            right: 24,
            display: t48,
            background: "linear-gradient(45deg, #00d4ff 0%, #7c3aed 50%, #ff006e 100%)",
            color: "white",
            boxShadow: "0 8px 32px rgba(0, 212, 255, 0.3)",
            "&:hover": {
                background: "linear-gradient(45deg, #00a8cc 0%, #6f32d1 50%, #d6005c 100%)",
                transform: "scale(1.05)"
            },
            zIndex: 1200
        };
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/components/layout/AppLayout.tsx",
            lineNumber: 690,
            columnNumber: 11
        }, this);
        $[66] = t49;
        $[67] = t50;
    } else {
        t49 = $[66];
        t50 = $[67];
    }
    let t51;
    if ($[68] !== handleDrawerToggle) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Fab$2f$Fab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fab$3e$__["Fab"], {
            color: "primary",
            "aria-label": "open navigation",
            onClick: handleDrawerToggle,
            sx: t49,
            children: t50
        }, void 0, false, {
            fileName: "[project]/src/components/layout/AppLayout.tsx",
            lineNumber: 699,
            columnNumber: 11
        }, this);
        $[68] = handleDrawerToggle;
        $[69] = t51;
    } else {
        t51 = $[69];
    }
    let t52;
    if ($[70] !== t44 || $[71] !== t47 || $[72] !== t51) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: t37,
            children: [
                t44,
                t47,
                t51
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/AppLayout.tsx",
            lineNumber: 707,
            columnNumber: 11
        }, this);
        $[70] = t44;
        $[71] = t47;
        $[72] = t51;
        $[73] = t52;
    } else {
        t52 = $[73];
    }
    return t52;
}
_s(AppLayout, "36aoRSHynDb2qd9CAQEYR8bIemI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
_c = AppLayout;
function _temp() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiService"].healthCheck();
}
var _c;
__turbopack_context__.k.register(_c, "AppLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/layout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_fa93af41$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/inter_fa93af41.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ThemeProvider$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/styles/ThemeProvider.js [app-client] (ecmascript) <export default as ThemeProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CssBaseline$2f$CssBaseline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/CssBaseline/CssBaseline.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/theme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$providers$2f$QueryProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/providers/QueryProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$AppLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/AppLayout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
function RootLayout(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "48e82c4e825446af9adce039b9808ced272c55857976f4f190a0cb6addf2ed80") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "48e82c4e825446af9adce039b9808ced272c55857976f4f190a0cb6addf2ed80";
    }
    const { children } = t0;
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const isLandingPage = pathname === "/";
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CssBaseline$2f$CssBaseline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/app/layout.tsx",
            lineNumber: 31,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== children || $[3] !== isLandingPage) {
        t2 = isLandingPage ? children : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$AppLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppLayout"], {
            children: children
        }, void 0, false, {
            fileName: "[project]/src/app/layout.tsx",
            lineNumber: 38,
            columnNumber: 37
        }, this);
        $[2] = children;
        $[3] = isLandingPage;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
            lang: "en",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
                className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_fa93af41$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].className} antialiased`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ThemeProvider$3e$__["ThemeProvider"], {
                    theme: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"],
                    children: [
                        t1,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$providers$2f$QueryProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryProvider"], {
                            children: t2
                        }, void 0, false, {
                            fileName: "[project]/src/app/layout.tsx",
                            lineNumber: 47,
                            columnNumber: 110
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/layout.tsx",
                    lineNumber: 47,
                    columnNumber: 77
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/layout.tsx",
                lineNumber: 47,
                columnNumber: 26
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/layout.tsx",
            lineNumber: 47,
            columnNumber: 10
        }, this);
        $[5] = t2;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    return t3;
}
_s(RootLayout, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = RootLayout;
var _c;
__turbopack_context__.k.register(_c, "RootLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__7eef091a._.js.map
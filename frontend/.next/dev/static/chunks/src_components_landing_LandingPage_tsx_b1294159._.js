(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/landing/LandingPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LandingPage",
    ()=>LandingPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Container$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Container/Container.js [app-client] (ecmascript) <export default as Container>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Card/Card.js [app-client] (ecmascript) <export default as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CardContent$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/CardContent/CardContent.js [app-client] (ecmascript) <export default as CardContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/system/esm/colorManipulator/colorManipulator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$AutoAwesome$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/AutoAwesome.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Speed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Speed.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Security$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Security.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Psychology$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Psychology.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$TrendingUp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/TrendingUp.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$VerifiedUser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/VerifiedUser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Storage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ArrowForward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/ArrowForward.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Chat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Chat.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Search.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$LocalHospital$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/LocalHospital.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
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
;
;
;
;
;
;
const features = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Psychology$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        title: 'Advanced AI Intelligence',
        description: 'Powered by state-of-the-art advanced neural networks and RAG (Retrieval-Augmented Generation) technology. Our AI understands context, medical terminology, and provides personalized responses based on your specific symptoms and concerns. Trained on millions of verified medical cases and continuously learning from the latest research.',
        color: '#00d4ff'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Speed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        title: 'Lightning Fast Responses',
        description: 'Experience blazing-fast query processing with our optimized infrastructure. Get comprehensive medical insights in under 2 seconds, powered by ChromaDB vector search and intelligent caching. No more waiting - instant answers when you need them most, with real-time database querying across 10,000+ conditions.',
        color: '#7c3aed'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Security$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        title: 'Bank-Level Security & Privacy',
        description: 'Your health data deserves maximum protection. All queries are encrypted end-to-end with AES-256 encryption. We never store personal information, never share data with third parties, and all conversations are anonymized. HIPAA-compliant infrastructure ensures your medical privacy is always protected.',
        color: '#ff006e'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Storage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        title: 'Comprehensive Medical Database',
        description: 'Access a vast repository of 10,000+ medical conditions spanning 13 specialized categories including Cardiology, Neurology, Oncology, and more. Each condition includes detailed symptoms, causes, risk factors, diagnostic procedures, treatment options, and prevention strategies sourced from Mayo Clinic and leading medical institutions.',
        color: '#00d4ff'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$VerifiedUser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        title: 'Clinically Verified Information',
        description: 'Every piece of information is carefully curated and verified by medical professionals. Our database is built from trusted sources including Mayo Clinic, peer-reviewed journals, and clinical guidelines. Regular audits ensure accuracy, relevance, and compliance with current medical standards and best practices.',
        color: '#7c3aed'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$TrendingUp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        title: 'Continuously Updated & Learning',
        description: 'Stay ahead with AI that evolves with medical science. Our system is updated weekly with the latest research findings, treatment protocols, and drug information. Machine learning algorithms continuously improve response accuracy, understanding of medical context, and ability to provide relevant, personalized recommendations.',
        color: '#ff006e'
    }
];
const stats = [
    {
        value: '10K+',
        label: 'Medical Conditions',
        color: '#00d4ff'
    },
    {
        value: '13',
        label: 'Categories',
        color: '#7c3aed'
    },
    {
        value: '<2s',
        label: 'Response Time',
        color: '#ff006e'
    },
    {
        value: '99.9%',
        label: 'Accuracy',
        color: '#00d4ff'
    }
];
const showcaseFeatures = [
    {
        title: 'AI-Powered Medical Chat',
        description: 'Engage in natural conversations with our advanced AI assistant. Ask about symptoms, conditions, treatments, and get instant, accurate medical information powered by cutting-edge AI and RAG technology.',
        image: '/LandingPageChat.png',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Chat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        color: '#00d4ff',
        link: '/chat'
    },
    {
        title: 'Smart Medical Search',
        description: 'Lightning-fast search across 10,000+ medical conditions. Filter by category, view detailed information cards, and find exactly what you need with our intelligent search algorithm.',
        image: '/LandingPageSearch.png',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        color: '#7c3aed',
        link: '/search'
    },
    {
        title: 'Comprehensive Database',
        description: 'Browse our extensive medical database with 13 specialized categories. Each condition includes symptoms, causes, risk factors, diagnosis methods, treatment options, and prevention strategies.',
        image: '/LandingPageDatabase.png',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$LocalHospital$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        color: '#ff006e',
        link: '/diseases'
    }
];
const FeatureShowcase = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(114);
    if ($[0] !== "66ee5ff6a82e570b44bd0dbdeda7388e3bba0cc678a7d6428d5a2ef96c787f4f") {
        for(let $i = 0; $i < 114; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "66ee5ff6a82e570b44bd0dbdeda7388e3bba0cc678a7d6428d5a2ef96c787f4f";
    }
    const { feature, index } = t0;
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            once: true,
            margin: "-100px"
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, t1);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const IconComponent = feature.icon;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            opacity: 0,
            y: 100
        };
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] !== isInView) {
        t3 = isInView ? {
            opacity: 1,
            y: 0
        } : {
            opacity: 0,
            y: 100
        };
        $[3] = isInView;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const t4 = index * 0.2;
    let t5;
    if ($[5] !== t4) {
        t5 = {
            duration: 0.8,
            delay: t4
        };
        $[5] = t4;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    const t6 = index % 2 === 0 ? "row" : "row-reverse";
    let t7;
    if ($[7] !== t6) {
        t7 = {
            display: "flex",
            flexDirection: {
                xs: "column",
                md: t6
            },
            gap: 6,
            mb: 12,
            alignItems: "center"
        };
        $[7] = t6;
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = {
            flex: 1,
            position: "relative"
        };
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t10;
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = {
            scale: 1.02
        };
        t10 = {
            duration: 0.3
        };
        $[10] = t10;
        $[11] = t9;
    } else {
        t10 = $[10];
        t9 = $[11];
    }
    let t11;
    if ($[12] !== feature.color) {
        t11 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(feature.color, 0.4);
        $[12] = feature.color;
        $[13] = t11;
    } else {
        t11 = $[13];
    }
    const t12 = `3px solid ${t11}`;
    let t13;
    if ($[14] !== feature.color) {
        t13 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(feature.color, 0.3);
        $[14] = feature.color;
        $[15] = t13;
    } else {
        t13 = $[15];
    }
    const t14 = `0 20px 80px ${t13}`;
    const t15 = feature.color;
    let t16;
    if ($[16] !== feature.color) {
        t16 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(feature.color, 0.5);
        $[16] = feature.color;
        $[17] = t16;
    } else {
        t16 = $[17];
    }
    const t17 = `0 30px 120px ${t16}`;
    let t18;
    if ($[18] !== feature.color || $[19] !== t17) {
        t18 = {
            borderColor: t15,
            boxShadow: t17,
            transform: "translateY(-8px)"
        };
        $[18] = feature.color;
        $[19] = t17;
        $[20] = t18;
    } else {
        t18 = $[20];
    }
    let t19;
    if ($[21] !== t12 || $[22] !== t14 || $[23] !== t18) {
        t19 = {
            position: "relative",
            borderRadius: "32px",
            overflow: "hidden",
            border: t12,
            boxShadow: t14,
            background: "rgba(15, 23, 42, 0.8)",
            backdropFilter: "blur(20px)",
            transition: "all 0.3s ease",
            cursor: "pointer",
            "&:hover": t18
        };
        $[21] = t12;
        $[22] = t14;
        $[23] = t18;
        $[24] = t19;
    } else {
        t19 = $[24];
    }
    let t20;
    if ($[25] !== feature.link || $[26] !== router) {
        t20 = ()=>router.push(feature.link);
        $[25] = feature.link;
        $[26] = router;
        $[27] = t20;
    } else {
        t20 = $[27];
    }
    let t21;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = {
            width: "100%",
            height: "auto",
            display: "block"
        };
        $[28] = t21;
    } else {
        t21 = $[28];
    }
    let t22;
    if ($[29] !== feature.image || $[30] !== feature.title) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            component: "img",
            src: feature.image,
            alt: feature.title,
            sx: t21
        }, void 0, false, {
            fileName: "[project]/src/components/landing/LandingPage.tsx",
            lineNumber: 268,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[29] = feature.image;
        $[30] = feature.title;
        $[31] = t22;
    } else {
        t22 = $[31];
    }
    let t23;
    if ($[32] !== feature.color) {
        t23 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(feature.color, 0.1);
        $[32] = feature.color;
        $[33] = t23;
    } else {
        t23 = $[33];
    }
    const t24 = `linear-gradient(135deg, ${t23}, transparent)`;
    let t25;
    if ($[34] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: {
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: t24,
                pointerEvents: "none"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/landing/LandingPage.tsx",
            lineNumber: 286,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[34] = t24;
        $[35] = t25;
    } else {
        t25 = $[35];
    }
    let t26;
    if ($[36] !== t19 || $[37] !== t20 || $[38] !== t22 || $[39] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: t8,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                whileHover: t9,
                transition: t10,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    sx: t19,
                    onClick: t20,
                    children: [
                        t22,
                        t25
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/landing/LandingPage.tsx",
                    lineNumber: 302,
                    columnNumber: 69
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/landing/LandingPage.tsx",
                lineNumber: 302,
                columnNumber: 24
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/landing/LandingPage.tsx",
            lineNumber: 302,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[36] = t19;
        $[37] = t20;
        $[38] = t22;
        $[39] = t25;
        $[40] = t26;
    } else {
        t26 = $[40];
    }
    let t27;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = {
            flex: 1
        };
        $[41] = t27;
    } else {
        t27 = $[41];
    }
    let t28;
    if ($[42] !== feature.color) {
        t28 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(feature.color, 0.3);
        $[42] = feature.color;
        $[43] = t28;
    } else {
        t28 = $[43];
    }
    let t29;
    if ($[44] !== feature.color) {
        t29 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(feature.color, 0.1);
        $[44] = feature.color;
        $[45] = t29;
    } else {
        t29 = $[45];
    }
    const t30 = `linear-gradient(135deg, ${t28}, ${t29})`;
    let t31;
    if ($[46] !== feature.color) {
        t31 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(feature.color, 0.4);
        $[46] = feature.color;
        $[47] = t31;
    } else {
        t31 = $[47];
    }
    const t32 = `2px solid ${t31}`;
    let t33;
    if ($[48] !== feature.color) {
        t33 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(feature.color, 0.3);
        $[48] = feature.color;
        $[49] = t33;
    } else {
        t33 = $[49];
    }
    const t34 = `0 10px 40px ${t33}`;
    let t35;
    if ($[50] !== t30 || $[51] !== t32 || $[52] !== t34) {
        t35 = {
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 70,
            height: 70,
            borderRadius: "20px",
            background: t30,
            border: t32,
            mb: 3,
            boxShadow: t34
        };
        $[50] = t30;
        $[51] = t32;
        $[52] = t34;
        $[53] = t35;
    } else {
        t35 = $[53];
    }
    const t36 = feature.color;
    let t37;
    if ($[54] !== feature.color) {
        t37 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(feature.color, 0.8);
        $[54] = feature.color;
        $[55] = t37;
    } else {
        t37 = $[55];
    }
    const t38 = `drop-shadow(0 0 15px ${t37})`;
    let t39;
    if ($[56] !== feature.color || $[57] !== t38) {
        t39 = {
            fontSize: 40,
            color: t36,
            filter: t38
        };
        $[56] = feature.color;
        $[57] = t38;
        $[58] = t39;
    } else {
        t39 = $[58];
    }
    let t40;
    if ($[59] !== IconComponent || $[60] !== t39) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
            sx: t39
        }, void 0, false, {
            fileName: "[project]/src/components/landing/LandingPage.tsx",
            lineNumber: 401,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[59] = IconComponent;
        $[60] = t39;
        $[61] = t40;
    } else {
        t40 = $[61];
    }
    let t41;
    if ($[62] !== t35 || $[63] !== t40) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: t35,
            children: t40
        }, void 0, false, {
            fileName: "[project]/src/components/landing/LandingPage.tsx",
            lineNumber: 410,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[62] = t35;
        $[63] = t40;
        $[64] = t41;
    } else {
        t41 = $[64];
    }
    let t42;
    if ($[65] === Symbol.for("react.memo_cache_sentinel")) {
        t42 = {
            xs: "2rem",
            md: "2.5rem"
        };
        $[65] = t42;
    } else {
        t42 = $[65];
    }
    let t43;
    if ($[66] !== feature.color) {
        t43 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(feature.color, 0.4);
        $[66] = feature.color;
        $[67] = t43;
    } else {
        t43 = $[67];
    }
    const t44 = `0 0 40px ${t43}`;
    let t45;
    if ($[68] !== t44) {
        t45 = {
            color: "#ffffff",
            fontWeight: 700,
            mb: 3,
            fontSize: t42,
            textShadow: t44
        };
        $[68] = t44;
        $[69] = t45;
    } else {
        t45 = $[69];
    }
    let t46;
    if ($[70] !== feature.title || $[71] !== t45) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
            variant: "h3",
            sx: t45,
            children: feature.title
        }, void 0, false, {
            fileName: "[project]/src/components/landing/LandingPage.tsx",
            lineNumber: 452,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[70] = feature.title;
        $[71] = t45;
        $[72] = t46;
    } else {
        t46 = $[72];
    }
    let t47;
    if ($[73] === Symbol.for("react.memo_cache_sentinel")) {
        t47 = {
            color: "rgba(255, 255, 255, 0.8)",
            fontSize: "1.1rem",
            lineHeight: 1.8,
            mb: 4
        };
        $[73] = t47;
    } else {
        t47 = $[73];
    }
    let t48;
    if ($[74] !== feature.description) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
            variant: "body1",
            sx: t47,
            children: feature.description
        }, void 0, false, {
            fileName: "[project]/src/components/landing/LandingPage.tsx",
            lineNumber: 473,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[74] = feature.description;
        $[75] = t48;
    } else {
        t48 = $[75];
    }
    let t49;
    let t50;
    if ($[76] === Symbol.for("react.memo_cache_sentinel")) {
        t49 = {
            scale: 1.05
        };
        t50 = {
            scale: 0.95
        };
        $[76] = t49;
        $[77] = t50;
    } else {
        t49 = $[76];
        t50 = $[77];
    }
    let t51;
    if ($[78] === Symbol.for("react.memo_cache_sentinel")) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ArrowForward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/components/landing/LandingPage.tsx",
            lineNumber: 496,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[78] = t51;
    } else {
        t51 = $[78];
    }
    let t52;
    if ($[79] !== feature.link || $[80] !== router) {
        t52 = ()=>router.push(feature.link);
        $[79] = feature.link;
        $[80] = router;
        $[81] = t52;
    } else {
        t52 = $[81];
    }
    const t53 = feature.color;
    let t54;
    if ($[82] !== feature.color) {
        t54 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(feature.color, 0.7);
        $[82] = feature.color;
        $[83] = t54;
    } else {
        t54 = $[83];
    }
    const t55 = `linear-gradient(45deg, ${t53}, ${t54})`;
    let t56;
    if ($[84] !== feature.color) {
        t56 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(feature.color, 0.5);
        $[84] = feature.color;
        $[85] = t56;
    } else {
        t56 = $[85];
    }
    const t57 = `2px solid ${t56}`;
    let t58;
    if ($[86] !== feature.color) {
        t58 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(feature.color, 0.4);
        $[86] = feature.color;
        $[87] = t58;
    } else {
        t58 = $[87];
    }
    const t59 = `0 10px 30px ${t58}`;
    let t60;
    if ($[88] !== feature.color) {
        t60 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(feature.color, 0.6);
        $[88] = feature.color;
        $[89] = t60;
    } else {
        t60 = $[89];
    }
    const t61 = `0 15px 50px ${t60}`;
    let t62;
    if ($[90] !== t61) {
        t62 = {
            boxShadow: t61
        };
        $[90] = t61;
        $[91] = t62;
    } else {
        t62 = $[91];
    }
    let t63;
    if ($[92] !== t55 || $[93] !== t57 || $[94] !== t59 || $[95] !== t62) {
        t63 = {
            px: 5,
            py: 1.5,
            fontSize: "1.1rem",
            fontWeight: 600,
            borderRadius: "16px",
            background: t55,
            border: t57,
            boxShadow: t59,
            textTransform: "none",
            transition: "all 0.3s ease",
            "&:hover": t62
        };
        $[92] = t55;
        $[93] = t57;
        $[94] = t59;
        $[95] = t62;
        $[96] = t63;
    } else {
        t63 = $[96];
    }
    let t64;
    if ($[97] !== feature.title || $[98] !== t52 || $[99] !== t63) {
        t64 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            whileHover: t49,
            whileTap: t50,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                variant: "contained",
                endIcon: t51,
                onClick: t52,
                sx: t63,
                children: [
                    "Try ",
                    feature.title
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/landing/LandingPage.tsx",
                lineNumber: 582,
                columnNumber: 55
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/landing/LandingPage.tsx",
            lineNumber: 582,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[97] = feature.title;
        $[98] = t52;
        $[99] = t63;
        $[100] = t64;
    } else {
        t64 = $[100];
    }
    let t65;
    if ($[101] !== t41 || $[102] !== t46 || $[103] !== t48 || $[104] !== t64) {
        t65 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: t27,
            children: [
                t41,
                t46,
                t48,
                t64
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/landing/LandingPage.tsx",
            lineNumber: 592,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[101] = t41;
        $[102] = t46;
        $[103] = t48;
        $[104] = t64;
        $[105] = t65;
    } else {
        t65 = $[105];
    }
    let t66;
    if ($[106] !== t26 || $[107] !== t65 || $[108] !== t7) {
        t66 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: t7,
            children: [
                t26,
                t65
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/landing/LandingPage.tsx",
            lineNumber: 603,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[106] = t26;
        $[107] = t65;
        $[108] = t7;
        $[109] = t66;
    } else {
        t66 = $[109];
    }
    let t67;
    if ($[110] !== t3 || $[111] !== t5 || $[112] !== t66) {
        t67 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            ref: ref,
            initial: t2,
            animate: t3,
            transition: t5,
            children: t66
        }, void 0, false, {
            fileName: "[project]/src/components/landing/LandingPage.tsx",
            lineNumber: 613,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[110] = t3;
        $[111] = t5;
        $[112] = t66;
        $[113] = t67;
    } else {
        t67 = $[113];
    }
    return t67;
};
_s(FeatureShowcase, "Oa0DA3oQJH4XmtXEUgZaaUxZvdM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = FeatureShowcase;
function LandingPage() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(127);
    if ($[0] !== "66ee5ff6a82e570b44bd0dbdeda7388e3bba0cc678a7d6428d5a2ef96c787f4f") {
        for(let $i = 0; $i < 127; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "66ee5ff6a82e570b44bd0dbdeda7388e3bba0cc678a7d6428d5a2ef96c787f4f";
    }
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])();
    const heroRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            once: true
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const heroInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(heroRef, t0);
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [
            0,
            0.3
        ];
        t2 = [
            1,
            0
        ];
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    const opacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, t1, t2);
    let t3;
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = [
            0,
            0.3
        ];
        t4 = [
            1,
            0.95
        ];
        $[4] = t3;
        $[5] = t4;
    } else {
        t3 = $[4];
        t4 = $[5];
    }
    const scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, t3, t4);
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = {
            minHeight: "100vh",
            background: "\n          radial-gradient(ellipse 80% 80% at 50% -20%, rgba(120, 119, 198, 0.4) 0%, transparent 60%),\n          radial-gradient(ellipse 80% 80% at 80% 20%, rgba(255, 0, 110, 0.3) 0%, transparent 50%),\n          radial-gradient(ellipse 80% 80% at 40% 40%, rgba(0, 212, 255, 0.25) 0%, transparent 50%),\n          linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 30%, #16213e 70%, #0f1419 100%)\n        ",
            position: "relative",
            overflow: "hidden",
            "&::before": {
                content: "\"\"",
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "\n            repeating-linear-gradient(\n              45deg,\n              transparent,\n              transparent 120px,\n              rgba(0, 212, 255, 0.03) 120px,\n              rgba(0, 212, 255, 0.03) 122px\n            ),\n            repeating-linear-gradient(\n              -45deg,\n              transparent,\n              transparent 180px,\n              rgba(255, 0, 110, 0.02) 180px,\n              rgba(255, 0, 110, 0.02) 182px\n            )\n          ",
                pointerEvents: "none"
            }
        };
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = {
            py: 8,
            position: "relative",
            zIndex: 1
        };
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] !== opacity || $[9] !== scale) {
        t7 = {
            opacity,
            scale
        };
        $[8] = opacity;
        $[9] = scale;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = {
            opacity: 0,
            y: 50
        };
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    let t9;
    if ($[12] !== heroInView) {
        t9 = heroInView ? {
            opacity: 1,
            y: 0
        } : {
            opacity: 0,
            y: 50
        };
        $[12] = heroInView;
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    let t10;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = {
            duration: 1
        };
        $[14] = t10;
    } else {
        t10 = $[14];
    }
    let t11;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = {
            textAlign: "center",
            mb: 16,
            py: 8
        };
        $[15] = t11;
    } else {
        t11 = $[15];
    }
    let t12;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: 4
        };
        $[16] = t12;
    } else {
        t12 = $[16];
    }
    let t13;
    let t14;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = {
            y: [
                0,
                -20,
                0
            ]
        };
        t14 = {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
        };
        $[17] = t13;
        $[18] = t14;
    } else {
        t13 = $[17];
        t14 = $[18];
    }
    let t15;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: t12,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                animate: t13,
                transition: t14,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    component: "img",
                    src: "/LOGO_doctor.png",
                    alt: "TrustMed-AI",
                    sx: {
                        width: 140,
                        height: 140,
                        borderRadius: "50%",
                        filter: "\n                      drop-shadow(0 0 40px rgba(0, 212, 255, 0.8))\n                      drop-shadow(0 0 80px rgba(255, 0, 110, 0.6))\n                      brightness(1.2)\n                    ",
                        border: "3px solid rgba(0, 212, 255, 0.4)"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/landing/LandingPage.tsx",
                    lineNumber: 790,
                    columnNumber: 68
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/landing/LandingPage.tsx",
                lineNumber: 790,
                columnNumber: 25
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/landing/LandingPage.tsx",
            lineNumber: 790,
            columnNumber: 11
        }, this);
        $[19] = t15;
    } else {
        t15 = $[19];
    }
    let t16;
    let t17;
    let t18;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = {
            opacity: 0,
            y: 20
        };
        t17 = {
            opacity: 1,
            y: 0
        };
        t18 = {
            duration: 0.8,
            delay: 0.3
        };
        $[20] = t16;
        $[21] = t17;
        $[22] = t18;
    } else {
        t16 = $[20];
        t17 = $[21];
        t18 = $[22];
    }
    let t19;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t16,
            animate: t17,
            transition: t18,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                variant: "h1",
                sx: {
                    fontSize: {
                        xs: "3.5rem",
                        md: "6rem"
                    },
                    fontWeight: 900,
                    mb: 3,
                    background: "linear-gradient(45deg, #00d4ff 0%, #ffffff 30%, #7c3aed 60%, #ff006e 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    textShadow: "0 0 80px rgba(0, 212, 255, 0.5)",
                    letterSpacing: "-0.02em"
                },
                children: "TrustMed-AI"
            }, void 0, false, {
                fileName: "[project]/src/components/landing/LandingPage.tsx",
                lineNumber: 827,
                columnNumber: 68
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/landing/LandingPage.tsx",
            lineNumber: 827,
            columnNumber: 11
        }, this);
        $[23] = t19;
    } else {
        t19 = $[23];
    }
    let t20;
    let t21;
    let t22;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = {
            opacity: 0,
            y: 20
        };
        t21 = {
            opacity: 1,
            y: 0
        };
        t22 = {
            duration: 0.8,
            delay: 0.5
        };
        $[24] = t20;
        $[25] = t21;
        $[26] = t22;
    } else {
        t20 = $[24];
        t21 = $[25];
        t22 = $[26];
    }
    let t23;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t20,
            animate: t21,
            transition: t22,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                variant: "h4",
                sx: {
                    color: "rgba(255, 255, 255, 0.9)",
                    mb: 4,
                    fontWeight: 600,
                    textShadow: "0 0 30px rgba(0, 212, 255, 0.4)"
                },
                children: "Your Intelligent Medical Assistant"
            }, void 0, false, {
                fileName: "[project]/src/components/landing/LandingPage.tsx",
                lineNumber: 871,
                columnNumber: 68
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/landing/LandingPage.tsx",
            lineNumber: 871,
            columnNumber: 11
        }, this);
        $[27] = t23;
    } else {
        t23 = $[27];
    }
    let t24;
    let t25;
    let t26;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = {
            opacity: 0,
            y: 20
        };
        t25 = {
            opacity: 1,
            y: 0
        };
        t26 = {
            duration: 0.8,
            delay: 0.7
        };
        $[28] = t24;
        $[29] = t25;
        $[30] = t26;
    } else {
        t24 = $[28];
        t25 = $[29];
        t26 = $[30];
    }
    let t27;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t24,
            animate: t25,
            transition: t26,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                variant: "h6",
                sx: {
                    color: "rgba(255, 255, 255, 0.7)",
                    maxWidth: 800,
                    mx: "auto",
                    mb: 6,
                    lineHeight: 1.8
                },
                children: "Experience the future of medical information with our advanced AI-powered platform. Get instant, accurate insights on 10,000+ medical conditions with clinically verified data."
            }, void 0, false, {
                fileName: "[project]/src/components/landing/LandingPage.tsx",
                lineNumber: 907,
                columnNumber: 68
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/landing/LandingPage.tsx",
            lineNumber: 907,
            columnNumber: 11
        }, this);
        $[31] = t27;
    } else {
        t27 = $[31];
    }
    let t28;
    let t29;
    let t30;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = {
            opacity: 0,
            y: 20
        };
        t29 = {
            opacity: 1,
            y: 0
        };
        t30 = {
            duration: 0.8,
            delay: 0.9
        };
        $[32] = t28;
        $[33] = t29;
        $[34] = t30;
    } else {
        t28 = $[32];
        t29 = $[33];
        t30 = $[34];
    }
    let t31;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = {
            display: "flex",
            gap: 3,
            justifyContent: "center",
            flexWrap: "wrap"
        };
        $[35] = t31;
    } else {
        t31 = $[35];
    }
    let t32;
    let t33;
    if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = {
            scale: 1.05
        };
        t33 = {
            scale: 0.95
        };
        $[36] = t32;
        $[37] = t33;
    } else {
        t32 = $[36];
        t33 = $[37];
    }
    let t34;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ArrowForward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/components/landing/LandingPage.tsx",
            lineNumber: 971,
            columnNumber: 11
        }, this);
        $[38] = t34;
    } else {
        t34 = $[38];
    }
    let t35;
    if ($[39] !== router) {
        t35 = ({
            "LandingPage[<Button>.onClick]": ()=>router.push("/chat")
        })["LandingPage[<Button>.onClick]"];
        $[39] = router;
        $[40] = t35;
    } else {
        t35 = $[40];
    }
    let t36;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t36 = {
            px: 8,
            py: 2.5,
            fontSize: "1.3rem",
            fontWeight: 700,
            borderRadius: "20px",
            background: "linear-gradient(45deg, #00d4ff 0%, #7c3aed 100%)",
            border: "2px solid rgba(0, 212, 255, 0.5)",
            boxShadow: "0 15px 60px rgba(0, 212, 255, 0.5)",
            textTransform: "none",
            transition: "all 0.3s ease",
            "&:hover": {
                boxShadow: "0 20px 80px rgba(0, 212, 255, 0.7)",
                background: "linear-gradient(45deg, #00d4ff 0%, #7c3aed 80%, #ff006e 100%)"
            }
        };
        $[41] = t36;
    } else {
        t36 = $[41];
    }
    let t37;
    if ($[42] !== t35) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            whileHover: t32,
            whileTap: t33,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                variant: "contained",
                size: "large",
                endIcon: t34,
                onClick: t35,
                sx: t36,
                children: "Start Chatting"
            }, void 0, false, {
                fileName: "[project]/src/components/landing/LandingPage.tsx",
                lineNumber: 1010,
                columnNumber: 55
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/landing/LandingPage.tsx",
            lineNumber: 1010,
            columnNumber: 11
        }, this);
        $[42] = t35;
        $[43] = t37;
    } else {
        t37 = $[43];
    }
    let t38;
    let t39;
    if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
        t38 = {
            scale: 1.05
        };
        t39 = {
            scale: 0.95
        };
        $[44] = t38;
        $[45] = t39;
    } else {
        t38 = $[44];
        t39 = $[45];
    }
    let t40;
    if ($[46] !== router) {
        t40 = ({
            "LandingPage[<Button>.onClick]": ()=>router.push("/search")
        })["LandingPage[<Button>.onClick]"];
        $[46] = router;
        $[47] = t40;
    } else {
        t40 = $[47];
    }
    let t41;
    if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
        t41 = {
            px: 6,
            py: 2.5,
            fontSize: "1.2rem",
            fontWeight: 700,
            borderRadius: "20px",
            border: "2px solid rgba(124, 58, 237, 0.5)",
            color: "#7c3aed",
            background: "rgba(124, 58, 237, 0.05)",
            backdropFilter: "blur(10px)",
            textTransform: "none",
            transition: "all 0.3s ease",
            "&:hover": {
                boxShadow: "0 10px 40px rgba(124, 58, 237, 0.4)",
                borderColor: "#7c3aed",
                background: "rgba(124, 58, 237, 0.1)"
            }
        };
        $[48] = t41;
    } else {
        t41 = $[48];
    }
    let t42;
    if ($[49] !== t40) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            whileHover: t38,
            whileTap: t39,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                variant: "outlined",
                size: "large",
                onClick: t40,
                sx: t41,
                children: "Browse Conditions"
            }, void 0, false, {
                fileName: "[project]/src/components/landing/LandingPage.tsx",
                lineNumber: 1067,
                columnNumber: 55
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/landing/LandingPage.tsx",
            lineNumber: 1067,
            columnNumber: 11
        }, this);
        $[49] = t40;
        $[50] = t42;
    } else {
        t42 = $[50];
    }
    let t43;
    let t44;
    if ($[51] === Symbol.for("react.memo_cache_sentinel")) {
        t43 = {
            scale: 1.05
        };
        t44 = {
            scale: 0.95
        };
        $[51] = t43;
        $[52] = t44;
    } else {
        t43 = $[51];
        t44 = $[52];
    }
    let t45;
    if ($[53] !== router) {
        t45 = ({
            "LandingPage[<Button>.onClick]": ()=>router.push("/diseases")
        })["LandingPage[<Button>.onClick]"];
        $[53] = router;
        $[54] = t45;
    } else {
        t45 = $[54];
    }
    let t46;
    if ($[55] === Symbol.for("react.memo_cache_sentinel")) {
        t46 = {
            px: 6,
            py: 2.5,
            fontSize: "1.2rem",
            fontWeight: 700,
            borderRadius: "20px",
            border: "2px solid rgba(255, 0, 110, 0.5)",
            color: "#ff006e",
            background: "rgba(255, 0, 110, 0.05)",
            backdropFilter: "blur(10px)",
            textTransform: "none",
            transition: "all 0.3s ease",
            "&:hover": {
                boxShadow: "0 10px 40px rgba(255, 0, 110, 0.4)",
                borderColor: "#ff006e",
                background: "rgba(255, 0, 110, 0.1)"
            }
        };
        $[55] = t46;
    } else {
        t46 = $[55];
    }
    let t47;
    if ($[56] !== t45) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            whileHover: t43,
            whileTap: t44,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                variant: "outlined",
                size: "large",
                onClick: t45,
                sx: t46,
                children: "Explore Database"
            }, void 0, false, {
                fileName: "[project]/src/components/landing/LandingPage.tsx",
                lineNumber: 1124,
                columnNumber: 55
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/landing/LandingPage.tsx",
            lineNumber: 1124,
            columnNumber: 11
        }, this);
        $[56] = t45;
        $[57] = t47;
    } else {
        t47 = $[57];
    }
    let t48;
    if ($[58] !== t37 || $[59] !== t42 || $[60] !== t47) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: t11,
            children: [
                t15,
                t19,
                t23,
                t27,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: t28,
                    animate: t29,
                    transition: t30,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: t31,
                        children: [
                            t37,
                            t42,
                            t47
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/landing/LandingPage.tsx",
                        lineNumber: 1132,
                        columnNumber: 102
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/landing/LandingPage.tsx",
                    lineNumber: 1132,
                    columnNumber: 45
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/landing/LandingPage.tsx",
            lineNumber: 1132,
            columnNumber: 11
        }, this);
        $[58] = t37;
        $[59] = t42;
        $[60] = t47;
        $[61] = t48;
    } else {
        t48 = $[61];
    }
    let t49;
    if ($[62] !== t48 || $[63] !== t7 || $[64] !== t9) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            ref: heroRef,
            style: t7,
            initial: t8,
            animate: t9,
            transition: t10,
            children: t48
        }, void 0, false, {
            fileName: "[project]/src/components/landing/LandingPage.tsx",
            lineNumber: 1142,
            columnNumber: 11
        }, this);
        $[62] = t48;
        $[63] = t7;
        $[64] = t9;
        $[65] = t49;
    } else {
        t49 = $[65];
    }
    let t50;
    if ($[66] === Symbol.for("react.memo_cache_sentinel")) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: {
                display: "grid",
                gridTemplateColumns: {
                    xs: "repeat(2, 1fr)",
                    md: "repeat(4, 1fr)"
                },
                gap: 4,
                mb: 16
            },
            children: stats.map(_LandingPageStatsMap)
        }, void 0, false, {
            fileName: "[project]/src/components/landing/LandingPage.tsx",
            lineNumber: 1152,
            columnNumber: 11
        }, this);
        $[66] = t50;
    } else {
        t50 = $[66];
    }
    let t51;
    if ($[67] === Symbol.for("react.memo_cache_sentinel")) {
        t51 = {
            mb: 16
        };
        $[67] = t51;
    } else {
        t51 = $[67];
    }
    let t52;
    let t53;
    let t54;
    let t55;
    if ($[68] === Symbol.for("react.memo_cache_sentinel")) {
        t52 = {
            opacity: 0,
            y: 50
        };
        t53 = {
            opacity: 1,
            y: 0
        };
        t54 = {
            once: true
        };
        t55 = {
            duration: 0.8
        };
        $[68] = t52;
        $[69] = t53;
        $[70] = t54;
        $[71] = t55;
    } else {
        t52 = $[68];
        t53 = $[69];
        t54 = $[70];
        t55 = $[71];
    }
    let t56;
    if ($[72] === Symbol.for("react.memo_cache_sentinel")) {
        t56 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
            variant: "h2",
            sx: {
                textAlign: "center",
                color: "#ffffff",
                fontWeight: 700,
                mb: 3,
                fontSize: {
                    xs: "2.5rem",
                    md: "3.5rem"
                },
                textShadow: "0 0 40px rgba(0, 212, 255, 0.5)"
            },
            children: "Powerful Features at Your Fingertips"
        }, void 0, false, {
            fileName: "[project]/src/components/landing/LandingPage.tsx",
            lineNumber: 1205,
            columnNumber: 11
        }, this);
        $[72] = t56;
    } else {
        t56 = $[72];
    }
    let t57;
    if ($[73] === Symbol.for("react.memo_cache_sentinel")) {
        t57 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: t51,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: t52,
                    whileInView: t53,
                    viewport: t54,
                    transition: t55,
                    children: [
                        t56,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            variant: "h6",
                            sx: {
                                textAlign: "center",
                                color: "rgba(255, 255, 255, 0.7)",
                                mb: 10,
                                maxWidth: 700,
                                mx: "auto"
                            },
                            children: "Explore our comprehensive suite of medical tools designed to provide you with instant, accurate health information"
                        }, void 0, false, {
                            fileName: "[project]/src/components/landing/LandingPage.tsx",
                            lineNumber: 1222,
                            columnNumber: 106
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/landing/LandingPage.tsx",
                    lineNumber: 1222,
                    columnNumber: 25
                }, this),
                showcaseFeatures.map(_LandingPageShowcaseFeaturesMap)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/landing/LandingPage.tsx",
            lineNumber: 1222,
            columnNumber: 11
        }, this);
        $[73] = t57;
    } else {
        t57 = $[73];
    }
    let t58;
    if ($[74] === Symbol.for("react.memo_cache_sentinel")) {
        t58 = {
            mb: 16
        };
        $[74] = t58;
    } else {
        t58 = $[74];
    }
    let t59;
    let t60;
    let t61;
    let t62;
    if ($[75] === Symbol.for("react.memo_cache_sentinel")) {
        t59 = {
            opacity: 0,
            y: 50
        };
        t60 = {
            opacity: 1,
            y: 0
        };
        t61 = {
            once: true
        };
        t62 = {
            duration: 0.8
        };
        $[75] = t59;
        $[76] = t60;
        $[77] = t61;
        $[78] = t62;
    } else {
        t59 = $[75];
        t60 = $[76];
        t61 = $[77];
        t62 = $[78];
    }
    let t63;
    if ($[79] === Symbol.for("react.memo_cache_sentinel")) {
        t63 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
            variant: "h3",
            sx: {
                textAlign: "center",
                color: "#ffffff",
                fontWeight: 700,
                mb: 2,
                textShadow: "0 0 40px rgba(0, 212, 255, 0.5)"
            },
            children: "Why Choose TrustMed-AI?"
        }, void 0, false, {
            fileName: "[project]/src/components/landing/LandingPage.tsx",
            lineNumber: 1273,
            columnNumber: 11
        }, this);
        $[79] = t63;
    } else {
        t63 = $[79];
    }
    let t64;
    if ($[80] === Symbol.for("react.memo_cache_sentinel")) {
        t64 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t59,
            whileInView: t60,
            viewport: t61,
            transition: t62,
            children: [
                t63,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                    variant: "h6",
                    sx: {
                        textAlign: "center",
                        color: "rgba(255, 255, 255, 0.7)",
                        mb: 8,
                        maxWidth: 700,
                        mx: "auto"
                    },
                    children: "Cutting-edge technology meets medical expertise"
                }, void 0, false, {
                    fileName: "[project]/src/components/landing/LandingPage.tsx",
                    lineNumber: 1286,
                    columnNumber: 92
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/landing/LandingPage.tsx",
            lineNumber: 1286,
            columnNumber: 11
        }, this);
        $[80] = t64;
    } else {
        t64 = $[80];
    }
    let t65;
    if ($[81] === Symbol.for("react.memo_cache_sentinel")) {
        t65 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: t58,
            children: [
                t64,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    sx: {
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            md: "repeat(2, 1fr)",
                            lg: "repeat(3, 1fr)"
                        },
                        gap: 4
                    },
                    children: features.map(_LandingPageFeaturesMap)
                }, void 0, false, {
                    fileName: "[project]/src/components/landing/LandingPage.tsx",
                    lineNumber: 1299,
                    columnNumber: 30
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/landing/LandingPage.tsx",
            lineNumber: 1299,
            columnNumber: 11
        }, this);
        $[81] = t65;
    } else {
        t65 = $[81];
    }
    let t66;
    let t67;
    let t68;
    let t69;
    if ($[82] === Symbol.for("react.memo_cache_sentinel")) {
        t66 = {
            opacity: 0,
            scale: 0.95
        };
        t67 = {
            opacity: 1,
            scale: 1
        };
        t68 = {
            once: true
        };
        t69 = {
            duration: 0.8
        };
        $[82] = t66;
        $[83] = t67;
        $[84] = t68;
        $[85] = t69;
    } else {
        t66 = $[82];
        t67 = $[83];
        t68 = $[84];
        t69 = $[85];
    }
    let t70;
    if ($[86] === Symbol.for("react.memo_cache_sentinel")) {
        t70 = {
            xs: 4,
            md: 8
        };
        $[86] = t70;
    } else {
        t70 = $[86];
    }
    let t71;
    if ($[87] === Symbol.for("react.memo_cache_sentinel")) {
        t71 = {
            textAlign: "center",
            py: 12,
            px: t70,
            background: "\n                radial-gradient(circle at 50% 0%, rgba(0, 212, 255, 0.15) 0%, transparent 50%),\n                radial-gradient(circle at 50% 100%, rgba(255, 0, 110, 0.12) 0%, transparent 50%),\n                rgba(10, 15, 30, 0.95)\n              ",
            backdropFilter: "blur(30px)",
            border: "2px solid",
            borderImage: "linear-gradient(135deg, rgba(0, 212, 255, 0.4), rgba(124, 58, 237, 0.3), rgba(255, 0, 110, 0.4)) 1",
            borderRadius: "48px",
            position: "relative",
            overflow: "hidden",
            boxShadow: "\n                0 30px 100px rgba(0, 212, 255, 0.25),\n                0 0 100px rgba(255, 0, 110, 0.15) inset\n              ",
            "&::before": {
                content: "\"\"",
                position: "absolute",
                top: -2,
                left: -2,
                right: -2,
                height: "4px",
                background: "linear-gradient(90deg, transparent, #00d4ff 20%, #7c3aed 50%, #ff006e 80%, transparent)",
                animation: "shimmer 3s ease-in-out infinite",
                filter: "blur(2px)"
            },
            "&::after": {
                content: "\"\"",
                position: "absolute",
                inset: 0,
                background: "\n                  repeating-linear-gradient(\n                    90deg,\n                    transparent,\n                    transparent 100px,\n                    rgba(0, 212, 255, 0.03) 100px,\n                    rgba(0, 212, 255, 0.03) 102px\n                  )\n                ",
                pointerEvents: "none"
            },
            "@keyframes shimmer": {
                "0%, 100%": {
                    opacity: 0.3,
                    transform: "translateX(-100%)"
                },
                "50%": {
                    opacity: 1,
                    transform: "translateX(100%)"
                }
            }
        };
        $[87] = t71;
    } else {
        t71 = $[87];
    }
    let t72;
    if ($[88] === Symbol.for("react.memo_cache_sentinel")) {
        t72 = {
            position: "relative",
            display: "inline-block",
            mb: 4
        };
        $[88] = t72;
    } else {
        t72 = $[88];
    }
    let t73;
    let t74;
    let t75;
    if ($[89] === Symbol.for("react.memo_cache_sentinel")) {
        t73 = {
            rotate: [
                0,
                360
            ],
            scale: [
                1,
                1.15,
                1
            ]
        };
        t74 = {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
        };
        t75 = {
            position: "relative",
            display: "inline-block"
        };
        $[89] = t73;
        $[90] = t74;
        $[91] = t75;
    } else {
        t73 = $[89];
        t74 = $[90];
        t75 = $[91];
    }
    let t76;
    if ($[92] === Symbol.for("react.memo_cache_sentinel")) {
        t76 = {
            width: 100,
            height: 100,
            borderRadius: "50%",
            background: "\n                      radial-gradient(circle at 30% 30%, rgba(0, 212, 255, 0.4), rgba(124, 58, 237, 0.3), rgba(255, 0, 110, 0.2))\n                    ",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            boxShadow: "0 0 60px rgba(0, 212, 255, 0.6), 0 0 100px rgba(255, 0, 110, 0.4) inset",
            border: "3px solid rgba(0, 212, 255, 0.5)",
            "&::before": {
                content: "\"\"",
                position: "absolute",
                inset: -10,
                borderRadius: "50%",
                background: "linear-gradient(45deg, #00d4ff, #7c3aed, #ff006e)",
                opacity: 0.2,
                filter: "blur(20px)",
                animation: "pulse 2s ease-in-out infinite"
            },
            "@keyframes pulse": {
                "0%, 100%": {
                    transform: "scale(1)",
                    opacity: 0.2
                },
                "50%": {
                    transform: "scale(1.2)",
                    opacity: 0.4
                }
            }
        };
        $[92] = t76;
    } else {
        t76 = $[92];
    }
    let t77;
    if ($[93] === Symbol.for("react.memo_cache_sentinel")) {
        t77 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: t72,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    animate: t73,
                    transition: t74,
                    style: t75,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: t76,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$AutoAwesome$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            sx: {
                                fontSize: 50,
                                color: "#00d4ff",
                                filter: "drop-shadow(0 0 30px rgba(0, 212, 255, 1))"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/landing/LandingPage.tsx",
                            lineNumber: 1474,
                            columnNumber: 94
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/landing/LandingPage.tsx",
                        lineNumber: 1474,
                        columnNumber: 80
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/landing/LandingPage.tsx",
                    lineNumber: 1474,
                    columnNumber: 25
                }, this),
                [
                    0,
                    1,
                    2
                ].map(_LandingPageAnonymous)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/landing/LandingPage.tsx",
            lineNumber: 1474,
            columnNumber: 11
        }, this);
        $[93] = t77;
    } else {
        t77 = $[93];
    }
    let t78;
    let t79;
    let t80;
    let t81;
    if ($[94] === Symbol.for("react.memo_cache_sentinel")) {
        t78 = {
            opacity: 0,
            y: 20
        };
        t79 = {
            opacity: 1,
            y: 0
        };
        t80 = {
            once: true
        };
        t81 = {
            duration: 0.6,
            delay: 0.2
        };
        $[94] = t78;
        $[95] = t79;
        $[96] = t80;
        $[97] = t81;
    } else {
        t78 = $[94];
        t79 = $[95];
        t80 = $[96];
        t81 = $[97];
    }
    let t82;
    if ($[98] === Symbol.for("react.memo_cache_sentinel")) {
        t82 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t78,
            whileInView: t79,
            viewport: t80,
            transition: t81,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                variant: "h2",
                sx: {
                    color: "#ffffff",
                    fontWeight: 800,
                    mb: 3,
                    fontSize: {
                        xs: "2.5rem",
                        md: "3.5rem"
                    },
                    background: "linear-gradient(135deg, #00d4ff 0%, #ffffff 40%, #7c3aed 70%, #ff006e 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    textShadow: "0 0 60px rgba(0, 212, 255, 0.5)",
                    letterSpacing: "-0.02em",
                    position: "relative",
                    zIndex: 1
                },
                children: "Ready to Get Started?"
            }, void 0, false, {
                fileName: "[project]/src/components/landing/LandingPage.tsx",
                lineNumber: 1515,
                columnNumber: 87
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/landing/LandingPage.tsx",
            lineNumber: 1515,
            columnNumber: 11
        }, this);
        $[98] = t82;
    } else {
        t82 = $[98];
    }
    let t83;
    let t84;
    let t85;
    let t86;
    if ($[99] === Symbol.for("react.memo_cache_sentinel")) {
        t83 = {
            opacity: 0,
            y: 20
        };
        t84 = {
            opacity: 1,
            y: 0
        };
        t85 = {
            once: true
        };
        t86 = {
            duration: 0.6,
            delay: 0.4
        };
        $[99] = t83;
        $[100] = t84;
        $[101] = t85;
        $[102] = t86;
    } else {
        t83 = $[99];
        t84 = $[100];
        t85 = $[101];
        t86 = $[102];
    }
    let t87;
    if ($[103] === Symbol.for("react.memo_cache_sentinel")) {
        t87 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t83,
            whileInView: t84,
            viewport: t85,
            transition: t86,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                variant: "h5",
                sx: {
                    color: "rgba(255, 255, 255, 0.85)",
                    mb: 6,
                    maxWidth: 650,
                    mx: "auto",
                    lineHeight: 1.7,
                    fontSize: {
                        xs: "1.1rem",
                        md: "1.3rem"
                    },
                    fontWeight: 400,
                    position: "relative",
                    zIndex: 1
                },
                children: "Join thousands of users who trust TrustMed-AI for accurate, instant medical information"
            }, void 0, false, {
                fileName: "[project]/src/components/landing/LandingPage.tsx",
                lineNumber: 1568,
                columnNumber: 87
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/landing/LandingPage.tsx",
            lineNumber: 1568,
            columnNumber: 11
        }, this);
        $[103] = t87;
    } else {
        t87 = $[103];
    }
    let t88;
    let t89;
    let t90;
    let t91;
    let t92;
    let t93;
    if ($[104] === Symbol.for("react.memo_cache_sentinel")) {
        t88 = {
            opacity: 0,
            scale: 0.9
        };
        t89 = {
            opacity: 1,
            scale: 1
        };
        t90 = {
            once: true
        };
        t91 = {
            duration: 0.6,
            delay: 0.6
        };
        t92 = {
            scale: 1.05
        };
        t93 = {
            scale: 0.98
        };
        $[104] = t88;
        $[105] = t89;
        $[106] = t90;
        $[107] = t91;
        $[108] = t92;
        $[109] = t93;
    } else {
        t88 = $[104];
        t89 = $[105];
        t90 = $[106];
        t91 = $[107];
        t92 = $[108];
        t93 = $[109];
    }
    let t94;
    if ($[110] === Symbol.for("react.memo_cache_sentinel")) {
        t94 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ArrowForward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/components/landing/LandingPage.tsx",
            lineNumber: 1630,
            columnNumber: 11
        }, this);
        $[110] = t94;
    } else {
        t94 = $[110];
    }
    let t95;
    if ($[111] !== router) {
        t95 = ({
            "LandingPage[<Button>.onClick]": ()=>router.push("/chat")
        })["LandingPage[<Button>.onClick]"];
        $[111] = router;
        $[112] = t95;
    } else {
        t95 = $[112];
    }
    let t96;
    if ($[113] === Symbol.for("react.memo_cache_sentinel")) {
        t96 = {
            content: "\"\"",
            position: "absolute",
            top: 0,
            left: "-100%",
            width: "100%",
            height: "100%",
            background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)",
            transition: "left 0.6s ease"
        };
        $[113] = t96;
    } else {
        t96 = $[113];
    }
    let t97;
    if ($[114] === Symbol.for("react.memo_cache_sentinel")) {
        t97 = {
            px: 10,
            py: 3,
            fontSize: "1.4rem",
            fontWeight: 700,
            borderRadius: "24px",
            background: "linear-gradient(135deg, #00d4ff 0%, #7c3aed 50%, #ff006e 100%)",
            border: "3px solid rgba(0, 212, 255, 0.6)",
            boxShadow: "\n                    0 20px 80px rgba(0, 212, 255, 0.6),\n                    0 0 60px rgba(255, 0, 110, 0.4) inset\n                  ",
            textTransform: "none",
            position: "relative",
            overflow: "hidden",
            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            "&::before": t96,
            "&:hover": {
                boxShadow: "\n                      0 25px 100px rgba(0, 212, 255, 0.8),\n                      0 0 80px rgba(255, 0, 110, 0.6) inset\n                    ",
                borderColor: "#00d4ff",
                transform: "translateY(-4px)",
                "&::before": {
                    left: "100%"
                }
            },
            "&:active": {
                transform: "translateY(-2px)"
            }
        };
        $[114] = t97;
    } else {
        t97 = $[114];
    }
    let t98;
    if ($[115] !== t95) {
        t98 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t88,
            whileInView: t89,
            viewport: t90,
            transition: t91,
            whileHover: t92,
            whileTap: t93,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                variant: "contained",
                size: "large",
                endIcon: t94,
                onClick: t95,
                sx: t97,
                children: "Launch TrustMed-AI"
            }, void 0, false, {
                fileName: "[project]/src/components/landing/LandingPage.tsx",
                lineNumber: 1695,
                columnNumber: 119
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/landing/LandingPage.tsx",
            lineNumber: 1695,
            columnNumber: 11
        }, this);
        $[115] = t95;
        $[116] = t98;
    } else {
        t98 = $[116];
    }
    let t100;
    let t101;
    let t102;
    let t99;
    if ($[117] === Symbol.for("react.memo_cache_sentinel")) {
        t99 = {
            opacity: 0
        };
        t100 = {
            opacity: 1
        };
        t101 = {
            once: true
        };
        t102 = {
            duration: 0.6,
            delay: 0.8
        };
        $[117] = t100;
        $[118] = t101;
        $[119] = t102;
        $[120] = t99;
    } else {
        t100 = $[117];
        t101 = $[118];
        t102 = $[119];
        t99 = $[120];
    }
    let t103;
    if ($[121] === Symbol.for("react.memo_cache_sentinel")) {
        t103 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t99,
            whileInView: t100,
            viewport: t101,
            transition: t102,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    mt: 6,
                    display: "flex",
                    justifyContent: "center",
                    gap: 4,
                    flexWrap: "wrap"
                },
                children: [
                    {
                        icon: "\u26A1",
                        text: "Instant Answers"
                    },
                    {
                        icon: "\uD83D\uDD12",
                        text: "Secure & Private"
                    },
                    {
                        icon: "\u2713",
                        text: "Clinically Verified"
                    }
                ].map(_LandingPageAnonymous2)
            }, void 0, false, {
                fileName: "[project]/src/components/landing/LandingPage.tsx",
                lineNumber: 1731,
                columnNumber: 91
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/landing/LandingPage.tsx",
            lineNumber: 1731,
            columnNumber: 12
        }, this);
        $[121] = t103;
    } else {
        t103 = $[121];
    }
    let t104;
    if ($[122] !== t98) {
        t104 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t66,
            whileInView: t67,
            viewport: t68,
            transition: t69,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: t71,
                children: [
                    t77,
                    t82,
                    t87,
                    t98,
                    t103
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/landing/LandingPage.tsx",
                lineNumber: 1753,
                columnNumber: 88
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/landing/LandingPage.tsx",
            lineNumber: 1753,
            columnNumber: 12
        }, this);
        $[122] = t98;
        $[123] = t104;
    } else {
        t104 = $[123];
    }
    let t105;
    if ($[124] !== t104 || $[125] !== t49) {
        t105 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: t5,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Container$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"], {
                maxWidth: "xl",
                sx: t6,
                children: [
                    t49,
                    t50,
                    t57,
                    t65,
                    t104
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/landing/LandingPage.tsx",
                lineNumber: 1761,
                columnNumber: 25
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/landing/LandingPage.tsx",
            lineNumber: 1761,
            columnNumber: 12
        }, this);
        $[124] = t104;
        $[125] = t49;
        $[126] = t105;
    } else {
        t105 = $[126];
    }
    return t105;
}
_s1(LandingPage, "R6ToABx90tdFoEaGIYKpryFxoWg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c1 = LandingPage;
function _LandingPageAnonymous2(badge, index_3) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        sx: {
            display: "flex",
            alignItems: "center",
            gap: 1,
            px: 3,
            py: 1.5,
            borderRadius: "16px",
            background: "rgba(0, 212, 255, 0.1)",
            border: "1px solid rgba(0, 212, 255, 0.3)",
            backdropFilter: "blur(10px)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                sx: {
                    fontSize: "1.2rem"
                },
                children: badge.icon
            }, void 0, false, {
                fileName: "[project]/src/components/landing/LandingPage.tsx",
                lineNumber: 1781,
                columnNumber: 6
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                sx: {
                    color: "rgba(255, 255, 255, 0.9)",
                    fontWeight: 600,
                    fontSize: "0.95rem"
                },
                children: badge.text
            }, void 0, false, {
                fileName: "[project]/src/components/landing/LandingPage.tsx",
                lineNumber: 1783,
                columnNumber: 33
            }, this)
        ]
    }, index_3, true, {
        fileName: "[project]/src/components/landing/LandingPage.tsx",
        lineNumber: 1771,
        columnNumber: 10
    }, this);
}
function _LandingPageAnonymous(index_2) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        animate: {
            rotate: [
                0,
                360
            ]
        },
        transition: {
            duration: 3 + index_2,
            repeat: Infinity,
            ease: "linear",
            delay: index_2 * 0.5
        },
        style: {
            position: "absolute",
            top: "50%",
            left: "50%",
            width: 120 + index_2 * 30,
            height: 120 + index_2 * 30,
            marginLeft: -(60 + index_2 * 15),
            marginTop: -(60 + index_2 * 15)
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: {
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: index_2 === 0 ? "#00d4ff" : index_2 === 1 ? "#7c3aed" : "#ff006e",
                boxShadow: `0 0 20px ${index_2 === 0 ? "#00d4ff" : index_2 === 1 ? "#7c3aed" : "#ff006e"}`
            }
        }, void 0, false, {
            fileName: "[project]/src/components/landing/LandingPage.tsx",
            lineNumber: 1805,
            columnNumber: 6
        }, this)
    }, index_2, false, {
        fileName: "[project]/src/components/landing/LandingPage.tsx",
        lineNumber: 1790,
        columnNumber: 10
    }, this);
}
function _LandingPageFeaturesMap(feature_0, index_1) {
    const IconComponent = feature_0.icon;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 50
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true,
            margin: "-50px"
        },
        transition: {
            duration: 0.6,
            delay: index_1 * 0.1
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            whileHover: {
                y: -15,
                scale: 1.02
            },
            transition: {
                duration: 0.3
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                sx: {
                    height: "100%",
                    minHeight: "400px",
                    background: "rgba(15, 23, 42, 0.95)",
                    backdropFilter: "blur(20px)",
                    border: `2px solid ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(feature_0.color, 0.25)}`,
                    borderRadius: "32px",
                    p: 4,
                    position: "relative",
                    overflow: "hidden",
                    transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&::before": {
                        content: "\"\"",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "4px",
                        background: `linear-gradient(90deg, transparent, ${feature_0.color}, transparent)`,
                        opacity: 0,
                        transition: "opacity 0.4s ease"
                    },
                    "&::after": {
                        content: "\"\"",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        width: "200%",
                        height: "200%",
                        background: `radial-gradient(circle, ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(feature_0.color, 0.1)}, transparent 70%)`,
                        transform: "translate(-50%, -50%)",
                        opacity: 0,
                        transition: "opacity 0.5s ease",
                        pointerEvents: "none"
                    },
                    "&:hover": {
                        boxShadow: `0 35px 100px ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(feature_0.color, 0.5)}, inset 0 0 80px ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(feature_0.color, 0.05)}`,
                        borderColor: feature_0.color,
                        borderWidth: "3px",
                        "&::before": {
                            opacity: 1
                        },
                        "&::after": {
                            opacity: 1
                        }
                    }
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CardContent$3e$__["CardContent"], {
                    sx: {
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        position: "relative",
                        zIndex: 1
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            sx: {
                                width: 80,
                                height: 80,
                                borderRadius: "24px",
                                background: `linear-gradient(135deg, ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(feature_0.color, 0.3)}, ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(feature_0.color, 0.1)})`,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                mb: 3,
                                boxShadow: `0 15px 40px ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(feature_0.color, 0.4)}, inset 0 0 30px ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(feature_0.color, 0.2)}`,
                                border: `2px solid ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(feature_0.color, 0.3)}`
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                                sx: {
                                    fontSize: 45,
                                    color: feature_0.color,
                                    filter: `drop-shadow(0 0 15px ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(feature_0.color, 0.8)})`
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/landing/LandingPage.tsx",
                                lineNumber: 1895,
                                columnNumber: 14
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/landing/LandingPage.tsx",
                            lineNumber: 1884,
                            columnNumber: 12
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            variant: "h5",
                            sx: {
                                color: "#ffffff",
                                fontWeight: 700,
                                mb: 2.5,
                                fontSize: "1.5rem",
                                textShadow: `0 0 30px ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(feature_0.color, 0.4)}`
                            },
                            children: feature_0.title
                        }, void 0, false, {
                            fileName: "[project]/src/components/landing/LandingPage.tsx",
                            lineNumber: 1899,
                            columnNumber: 24
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            variant: "body1",
                            sx: {
                                color: "rgba(255, 255, 255, 0.8)",
                                lineHeight: 1.8,
                                fontSize: "1rem",
                                flex: 1
                            },
                            children: feature_0.description
                        }, void 0, false, {
                            fileName: "[project]/src/components/landing/LandingPage.tsx",
                            lineNumber: 1905,
                            columnNumber: 44
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/landing/LandingPage.tsx",
                    lineNumber: 1878,
                    columnNumber: 10
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/landing/LandingPage.tsx",
                lineNumber: 1832,
                columnNumber: 8
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/landing/LandingPage.tsx",
            lineNumber: 1827,
            columnNumber: 6
        }, this)
    }, index_1, false, {
        fileName: "[project]/src/components/landing/LandingPage.tsx",
        lineNumber: 1815,
        columnNumber: 10
    }, this);
}
function _LandingPageShowcaseFeaturesMap(feature, index_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FeatureShowcase, {
        feature: feature,
        index: index_0
    }, index_0, false, {
        fileName: "[project]/src/components/landing/LandingPage.tsx",
        lineNumber: 1913,
        columnNumber: 10
    }, this);
}
function _LandingPageStatsMap(stat, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 50
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true,
            margin: "-100px"
        },
        transition: {
            duration: 0.6,
            delay: index * 0.1
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            whileHover: {
                scale: 1.05,
                y: -10
            },
            transition: {
                duration: 0.3
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                sx: {
                    background: "rgba(15, 23, 42, 0.95)",
                    backdropFilter: "blur(20px)",
                    border: `2px solid ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(stat.color, 0.4)}`,
                    borderRadius: "32px",
                    textAlign: "center",
                    p: 4,
                    minHeight: "200px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&::before": {
                        content: "\"\"",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "100%",
                        background: `radial-gradient(circle at top, ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(stat.color, 0.15)}, transparent 70%)`,
                        pointerEvents: "none"
                    },
                    "&:hover": {
                        boxShadow: `0 25px 80px ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(stat.color, 0.5)}, inset 0 0 60px ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(stat.color, 0.1)}`,
                        borderColor: stat.color,
                        borderWidth: "3px"
                    }
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        variant: "h2",
                        sx: {
                            fontSize: {
                                xs: "3rem",
                                md: "3.5rem"
                            },
                            color: stat.color,
                            fontWeight: 900,
                            mb: 2,
                            textShadow: `0 0 40px ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(stat.color, 0.8)}, 0 0 80px ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alpha"])(stat.color, 0.4)}`,
                            letterSpacing: "-0.02em",
                            position: "relative",
                            zIndex: 1
                        },
                        children: stat.value
                    }, void 0, false, {
                        fileName: "[project]/src/components/landing/LandingPage.tsx",
                        lineNumber: 1962,
                        columnNumber: 10
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        variant: "body1",
                        sx: {
                            color: "rgba(255, 255, 255, 0.9)",
                            fontWeight: 600,
                            fontSize: "1.1rem",
                            position: "relative",
                            zIndex: 1
                        },
                        children: stat.label
                    }, void 0, false, {
                        fileName: "[project]/src/components/landing/LandingPage.tsx",
                        lineNumber: 1974,
                        columnNumber: 37
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/landing/LandingPage.tsx",
                lineNumber: 1933,
                columnNumber: 8
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/landing/LandingPage.tsx",
            lineNumber: 1928,
            columnNumber: 6
        }, this)
    }, index, false, {
        fileName: "[project]/src/components/landing/LandingPage.tsx",
        lineNumber: 1916,
        columnNumber: 10
    }, this);
}
var _c, _c1;
__turbopack_context__.k.register(_c, "FeatureShowcase");
__turbopack_context__.k.register(_c1, "LandingPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_landing_LandingPage_tsx_b1294159._.js.map
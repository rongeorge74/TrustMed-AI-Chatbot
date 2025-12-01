(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/chat/ChatInterface.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatInterface",
    ()=>ChatInterface
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Paper$2f$Paper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paper$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Paper/Paper.js [app-client] (ecmascript) <export default as Paper>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/TextField/TextField.js [app-client] (ecmascript) <export default as TextField>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/IconButton/IconButton.js [app-client] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Avatar/Avatar.js [app-client] (ecmascript) <export default as Avatar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Chip/Chip.js [app-client] (ecmascript) <export default as Chip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/CircularProgress/CircularProgress.js [app-client] (ecmascript) <export default as CircularProgress>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Fade$2f$Fade$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fade$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Fade/Fade.js [app-client] (ecmascript) <export default as Fade>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Tooltip/Tooltip.js [app-client] (ecmascript) <export default as Tooltip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/styles/useTheme.js [app-client] (ecmascript) <export default as useTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Container$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Container/Container.js [app-client] (ecmascript) <export default as Container>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Link$2f$Link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Link/Link.js [app-client] (ecmascript) <export default as Link>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Send.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$SmartToy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/SmartToy.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Person$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Person.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ContentCopy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/ContentCopy.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$WarningAmber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/WarningAmber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
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
const sampleQuestions = [
    "What are the symptoms of diabetes?",
    "How is hypertension diagnosed?",
    "What causes chronic fatigue syndrome?",
    "Tell me about migraine treatments",
    "What are the risk factors for heart disease?",
    "How to prevent cardiovascular disease?",
    "What are the side effects of blood pressure medications?",
    "Signs of early stage kidney disease"
];
const TypingIndicator = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "9141cc5b8cdd2f89da4986f0960ee7adc2873e51eef44300068a269b3f06d1cd") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9141cc5b8cdd2f89da4986f0960ee7adc2873e51eef44300068a269b3f06d1cd";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            display: "flex",
            alignItems: "center",
            gap: 2,
            py: 2
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: {
                display: "flex",
                gap: 0.5
            },
            children: [
                0,
                1,
                2
            ].map(_temp)
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatInterface.tsx",
            lineNumber: 48,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: t0,
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                    variant: "body2",
                    sx: {
                        ml: 1,
                        color: "rgba(0, 212, 255, 0.9)",
                        textShadow: "0 0 15px rgba(0, 212, 255, 0.5)",
                        fontStyle: "italic",
                        fontWeight: 500
                    },
                    children: "TrustMed-AI neural processing active..."
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/ChatInterface.tsx",
                    lineNumber: 58,
                    columnNumber: 27
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/chat/ChatInterface.tsx",
            lineNumber: 58,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    return t2;
};
_c = TypingIndicator;
function ChatInterface(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(95);
    if ($[0] !== "9141cc5b8cdd2f89da4986f0960ee7adc2873e51eef44300068a269b3f06d1cd") {
        for(let $i = 0; $i < 95; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9141cc5b8cdd2f89da4986f0960ee7adc2873e51eef44300068a269b3f06d1cd";
    }
    const { initialMessage } = t0;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"])();
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const [inputValue, setInputValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialMessage || "");
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "ChatInterface[scrollToBottom]": ()=>{
                messagesEndRef.current?.scrollIntoView({
                    behavior: "smooth"
                });
            }
        })["ChatInterface[scrollToBottom]"];
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const scrollToBottom = t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "ChatInterface[useEffect()]": ()=>{
                scrollToBottom();
            }
        })["ChatInterface[useEffect()]"];
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    if ($[4] !== messages) {
        t4 = [
            messages
        ];
        $[4] = messages;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = {
            queryKey: [
                "health"
            ],
            queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiService"].healthCheck,
            refetchInterval: 30000
        };
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    const { data: healthStatus, isError: healthError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t5);
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = {
            mutationFn: _temp2,
            onSuccess: (response)=>{
                setMessages({
                    "ChatInterface[<anonymous> > setMessages()]": (prev)=>prev.map({
                            "ChatInterface[<anonymous> > setMessages() > prev.map()]": (msg)=>msg.isTyping ? {
                                    ...msg,
                                    content: response.answer,
                                    sources: response.links,
                                    confidence: response.confidence_score,
                                    intent: response.query_intent,
                                    responseTime: response.response_time_ms,
                                    sourcesCount: response.sources_count,
                                    isTyping: false
                                } : msg
                        }["ChatInterface[<anonymous> > setMessages() > prev.map()]"])
                }["ChatInterface[<anonymous> > setMessages()]"]);
            },
            onError: (error)=>{
                setMessages({
                    "ChatInterface[<anonymous> > setMessages()]": (prev_0)=>prev_0.map({
                            "ChatInterface[<anonymous> > setMessages() > prev_0.map()]": (msg_0)=>msg_0.isTyping ? {
                                    ...msg_0,
                                    content: `Neural interface encountered an error: ${error.message}. Please try reinitializing your query.`,
                                    isTyping: false
                                } : msg_0
                        }["ChatInterface[<anonymous> > setMessages() > prev_0.map()]"])
                }["ChatInterface[<anonymous> > setMessages()]"]);
            }
        };
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    const chatMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(t6);
    let t7;
    if ($[8] !== chatMutation || $[9] !== inputValue) {
        t7 = ({
            "ChatInterface[handleSendMessage]": ()=>{
                if (!inputValue.trim()) {
                    return;
                }
                const userMessage = {
                    id: `user-${Date.now()}`,
                    type: "user",
                    content: inputValue,
                    timestamp: new Date()
                };
                const typingMessage = {
                    id: `assistant-${Date.now()}`,
                    type: "assistant",
                    content: "",
                    timestamp: new Date(),
                    isTyping: true
                };
                setMessages({
                    "ChatInterface[handleSendMessage > setMessages()]": (prev_1)=>[
                            ...prev_1,
                            userMessage,
                            typingMessage
                        ]
                }["ChatInterface[handleSendMessage > setMessages()]"]);
                chatMutation.mutate(inputValue);
                setInputValue("");
            }
        })["ChatInterface[handleSendMessage]"];
        $[8] = chatMutation;
        $[9] = inputValue;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    const handleSendMessage = t7;
    let t8;
    if ($[11] !== handleSendMessage) {
        t8 = ({
            "ChatInterface[handleKeyPress]": (event)=>{
                if (event.key === "Enter" && !event.shiftKey) {
                    event.preventDefault();
                    handleSendMessage();
                }
            }
        })["ChatInterface[handleKeyPress]"];
        $[11] = handleSendMessage;
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    const handleKeyPress = t8;
    let T0;
    let T1;
    let T2;
    let t10;
    let t11;
    let t12;
    let t13;
    let t14;
    let t9;
    if ($[13] !== healthError || $[14] !== healthStatus || $[15] !== messages) {
        const handleSampleQuestion = {
            "ChatInterface[handleSampleQuestion]": (question)=>{
                setInputValue(question);
                inputRef.current?.focus();
            }
        }["ChatInterface[handleSampleQuestion]"];
        const copyToClipboard = _ChatInterfaceCopyToClipboard;
        const formatMarkdown = _ChatInterfaceFormatMarkdown;
        let t15;
        if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
            t15 = ({
                "ChatInterface[renderMessage]": (message)=>{
                    const isUser = message.type === "user";
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Fade$2f$Fade$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fade$3e$__["Fade"], {
                        in: true,
                        timeout: 300,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            sx: {
                                display: "flex",
                                justifyContent: isUser ? "flex-end" : "flex-start",
                                mb: 3,
                                alignItems: "flex-start",
                                gap: 2
                            },
                            children: [
                                !isUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"], {
                                    sx: {
                                        background: "linear-gradient(45deg, #ff006e 0%, #7c3aed 100%)",
                                        width: 36,
                                        height: 36,
                                        mt: 0.5,
                                        border: "1px solid rgba(255, 0, 110, 0.4)",
                                        boxShadow: "0 0 20px rgba(255, 0, 110, 0.4)"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$SmartToy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        sx: {
                                            fontSize: 20,
                                            color: "white"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/chat/ChatInterface.tsx",
                                        lineNumber: 266,
                                        columnNumber: 18
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/chat/ChatInterface.tsx",
                                    lineNumber: 259,
                                    columnNumber: 28
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                    sx: {
                                        maxWidth: "75%"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Paper$2f$Paper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paper$3e$__["Paper"], {
                                            elevation: 0,
                                            sx: {
                                                p: 2.5,
                                                background: isUser ? "linear-gradient(135deg, rgba(0, 212, 255, 0.12) 0%, rgba(124, 58, 237, 0.08) 100%)" : "linear-gradient(135deg, rgba(17, 25, 40, 0.95) 0%, rgba(26, 26, 46, 0.9) 100%)",
                                                color: "#ffffff",
                                                borderRadius: isUser ? "20px 20px 4px 20px" : "20px 20px 20px 4px",
                                                border: isUser ? "1px solid rgba(0, 212, 255, 0.25)" : "1px solid rgba(255, 255, 255, 0.1)",
                                                backdropFilter: "blur(20px)",
                                                position: "relative",
                                                boxShadow: isUser ? "0 8px 32px rgba(0, 212, 255, 0.15), 0 2px 8px rgba(0, 0, 0, 0.1)" : "0 8px 32px rgba(0, 0, 0, 0.3), 0 2px 8px rgba(0, 0, 0, 0.2)",
                                                transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                                                "&:hover": {
                                                    transform: "translateY(-1px)",
                                                    boxShadow: isUser ? "0 12px 40px rgba(0, 212, 255, 0.2), 0 4px 12px rgba(0, 0, 0, 0.15)" : "0 12px 40px rgba(0, 0, 0, 0.4), 0 4px 12px rgba(0, 0, 0, 0.25)"
                                                },
                                                "&::before": isUser ? {} : {
                                                    content: "\"\"",
                                                    position: "absolute",
                                                    top: 0,
                                                    left: 0,
                                                    right: 0,
                                                    bottom: 0,
                                                    borderRadius: "20px 20px 20px 4px",
                                                    background: "linear-gradient(45deg, rgba(255, 0, 110, 0.03), rgba(124, 58, 237, 0.03))",
                                                    zIndex: -1
                                                }
                                            },
                                            children: message.isTyping ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                sx: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: 1.5,
                                                    py: 0.5
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                        sx: {
                                                            display: "flex",
                                                            gap: 0.4
                                                        },
                                                        children: [
                                                            0,
                                                            1,
                                                            2
                                                        ].map(_ChatInterfaceRenderMessageAnonymous)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/chat/ChatInterface.tsx",
                                                        lineNumber: 301,
                                                        columnNumber: 22
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                        variant: "body2",
                                                        sx: {
                                                            color: "rgba(255, 255, 255, 0.7)",
                                                            fontSize: "0.85rem",
                                                            fontStyle: "italic",
                                                            fontWeight: 500
                                                        },
                                                        children: "TrustMed-AI is analyzing..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/chat/ChatInterface.tsx",
                                                        lineNumber: 304,
                                                        columnNumber: 83
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/chat/ChatInterface.tsx",
                                                lineNumber: 296,
                                                columnNumber: 40
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                        variant: "body1",
                                                        sx: {
                                                            whiteSpace: "pre-wrap",
                                                            wordBreak: "break-word",
                                                            lineHeight: 1.6
                                                        },
                                                        dangerouslySetInnerHTML: {
                                                            __html: formatMarkdown(message.content)
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/chat/ChatInterface.tsx",
                                                        lineNumber: 309,
                                                        columnNumber: 75
                                                    }, this),
                                                    message.sources && message.sources.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                        sx: {
                                                            mt: 2
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                                variant: "caption",
                                                                sx: {
                                                                    mb: 1,
                                                                    color: "rgba(255, 255, 255, 0.7)",
                                                                    fontWeight: 600,
                                                                    fontSize: "0.75rem",
                                                                    textTransform: "uppercase",
                                                                    letterSpacing: "0.5px"
                                                                },
                                                                children: "Sources"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/chat/ChatInterface.tsx",
                                                                lineNumber: 317,
                                                                columnNumber: 24
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                                sx: {
                                                                    display: "flex",
                                                                    flexWrap: "wrap",
                                                                    gap: 0.8,
                                                                    mt: 1
                                                                },
                                                                children: message.sources.map(_ChatInterfaceRenderMessageMessageSourcesMap)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/chat/ChatInterface.tsx",
                                                                lineNumber: 324,
                                                                columnNumber: 46
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                                sx: {
                                                                    mt: 1,
                                                                    display: "none"
                                                                },
                                                                children: message.sources.map(_ChatInterfaceRenderMessageMessageSourcesMap2)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/chat/ChatInterface.tsx",
                                                                lineNumber: 329,
                                                                columnNumber: 99
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/chat/ChatInterface.tsx",
                                                        lineNumber: 315,
                                                        columnNumber: 76
                                                    }, this),
                                                    !isUser && !message.isTyping && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                        sx: {
                                                            mt: 2,
                                                            display: "flex",
                                                            flexWrap: "wrap",
                                                            gap: 0.8,
                                                            alignItems: "center"
                                                        },
                                                        children: [
                                                            message.intent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__["Chip"], {
                                                                label: message.intent,
                                                                size: "small",
                                                                sx: {
                                                                    height: 20,
                                                                    fontSize: "0.7rem",
                                                                    fontWeight: 600,
                                                                    background: "rgba(124, 58, 237, 0.15)",
                                                                    color: "#a855f7",
                                                                    border: "1px solid rgba(124, 58, 237, 0.3)",
                                                                    borderRadius: "10px",
                                                                    "& .MuiChip-label": {
                                                                        px: 1
                                                                    }
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/chat/ChatInterface.tsx",
                                                                lineNumber: 338,
                                                                columnNumber: 43
                                                            }, this),
                                                            message.confidence !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__["Chip"], {
                                                                label: `${(message.confidence * 100).toFixed(0)}% confident`,
                                                                size: "small",
                                                                sx: {
                                                                    height: 20,
                                                                    fontSize: "0.7rem",
                                                                    fontWeight: 600,
                                                                    background: message.confidence > 0.7 ? "rgba(76, 175, 80, 0.15)" : message.confidence > 0.4 ? "rgba(255, 152, 0, 0.15)" : "rgba(244, 67, 54, 0.15)",
                                                                    color: message.confidence > 0.7 ? "#4caf50" : message.confidence > 0.4 ? "#ff9800" : "#f44336",
                                                                    border: `1px solid ${message.confidence > 0.7 ? "rgba(76, 175, 80, 0.3)" : message.confidence > 0.4 ? "rgba(255, 152, 0, 0.3)" : "rgba(244, 67, 54, 0.3)"}`,
                                                                    borderRadius: "10px",
                                                                    "& .MuiChip-label": {
                                                                        px: 1
                                                                    }
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/chat/ChatInterface.tsx",
                                                                lineNumber: 349,
                                                                columnNumber: 66
                                                            }, this),
                                                            message.sourcesCount !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__["Chip"], {
                                                                label: `${message.sourcesCount} sources`,
                                                                size: "small",
                                                                sx: {
                                                                    height: 20,
                                                                    fontSize: "0.7rem",
                                                                    fontWeight: 600,
                                                                    background: "rgba(0, 212, 255, 0.15)",
                                                                    color: "#00d4ff",
                                                                    border: "1px solid rgba(0, 212, 255, 0.3)",
                                                                    borderRadius: "10px",
                                                                    "& .MuiChip-label": {
                                                                        px: 1
                                                                    }
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/chat/ChatInterface.tsx",
                                                                lineNumber: 360,
                                                                columnNumber: 68
                                                            }, this),
                                                            message.responseTime !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__["Chip"], {
                                                                label: `${(message.responseTime / 1000).toFixed(1)}s`,
                                                                size: "small",
                                                                sx: {
                                                                    height: 20,
                                                                    fontSize: "0.7rem",
                                                                    fontWeight: 600,
                                                                    background: "rgba(255, 255, 255, 0.08)",
                                                                    color: "rgba(255, 255, 255, 0.7)",
                                                                    border: "1px solid rgba(255, 255, 255, 0.15)",
                                                                    borderRadius: "10px",
                                                                    "& .MuiChip-label": {
                                                                        px: 1
                                                                    }
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/chat/ChatInterface.tsx",
                                                                lineNumber: 371,
                                                                columnNumber: 68
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/chat/ChatInterface.tsx",
                                                        lineNumber: 332,
                                                        columnNumber: 140
                                                    }, this),
                                                    !isUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                        sx: {
                                                            mt: 1.5,
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "space-between"
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__["Tooltip"], {
                                                            title: "Copy response",
                                                            arrow: true,
                                                            placement: "top",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                                                size: "small",
                                                                onClick: {
                                                                    "ChatInterface[renderMessage > <IconButton>.onClick]": ()=>copyToClipboard(message.content)
                                                                }["ChatInterface[renderMessage > <IconButton>.onClick]"],
                                                                sx: {
                                                                    opacity: 0.6,
                                                                    color: "rgba(255, 255, 255, 0.6)",
                                                                    background: "rgba(255, 255, 255, 0.05)",
                                                                    backdropFilter: "blur(10px)",
                                                                    borderRadius: "8px",
                                                                    width: 28,
                                                                    height: 28,
                                                                    border: "1px solid rgba(255, 255, 255, 0.1)",
                                                                    transition: "all 0.2s",
                                                                    "&:hover": {
                                                                        opacity: 1,
                                                                        background: "rgba(255, 255, 255, 0.1)",
                                                                        transform: "scale(1.05)"
                                                                    }
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ContentCopy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    sx: {
                                                                        fontSize: 14
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/chat/ChatInterface.tsx",
                                                                    lineNumber: 404,
                                                                    columnNumber: 28
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/chat/ChatInterface.tsx",
                                                                lineNumber: 387,
                                                                columnNumber: 84
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/chat/ChatInterface.tsx",
                                                            lineNumber: 387,
                                                            columnNumber: 24
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/chat/ChatInterface.tsx",
                                                        lineNumber: 382,
                                                        columnNumber: 48
                                                    }, this)
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/chat/ChatInterface.tsx",
                                            lineNumber: 271,
                                            columnNumber: 18
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                            variant: "caption",
                                            sx: {
                                                display: "block",
                                                mt: 1,
                                                textAlign: isUser ? "right" : "left",
                                                color: "rgba(255, 255, 255, 0.5)",
                                                fontSize: "0.7rem",
                                                fontWeight: 500
                                            },
                                            children: message.timestamp.toLocaleTimeString([], {
                                                hour: "2-digit",
                                                minute: "2-digit"
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/chat/ChatInterface.tsx",
                                            lineNumber: 406,
                                            columnNumber: 74
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/chat/ChatInterface.tsx",
                                    lineNumber: 269,
                                    columnNumber: 32
                                }, this),
                                isUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"], {
                                    sx: {
                                        background: "linear-gradient(45deg, #00d4ff 0%, #7c3aed 100%)",
                                        width: 36,
                                        height: 36,
                                        mt: 0.5,
                                        border: "1px solid rgba(0, 212, 255, 0.4)",
                                        boxShadow: "0 0 20px rgba(0, 212, 255, 0.4)"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Person$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        sx: {
                                            fontSize: 20,
                                            color: "white"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/chat/ChatInterface.tsx",
                                        lineNumber: 423,
                                        columnNumber: 18
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/chat/ChatInterface.tsx",
                                    lineNumber: 416,
                                    columnNumber: 52
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/chat/ChatInterface.tsx",
                            lineNumber: 253,
                            columnNumber: 65
                        }, this)
                    }, message.id, false, {
                        fileName: "[project]/src/components/chat/ChatInterface.tsx",
                        lineNumber: 253,
                        columnNumber: 18
                    }, this);
                }
            })["ChatInterface[renderMessage]"];
            $[25] = t15;
        } else {
            t15 = $[25];
        }
        const renderMessage = t15;
        T2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Container$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"];
        t13 = "lg";
        if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
            t14 = {
                height: "100%",
                py: 0
            };
            $[26] = t14;
        } else {
            t14 = $[26];
        }
        T1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"];
        if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
            t11 = {
                height: "100%",
                display: "flex",
                flexDirection: "column",
                borderRadius: "24px",
                overflow: "hidden",
                background: "\n            radial-gradient(ellipse at top, rgba(0, 212, 255, 0.08) 0%, transparent 70%),\n            radial-gradient(ellipse at bottom, rgba(255, 0, 110, 0.06) 0%, transparent 70%),\n            linear-gradient(135deg, rgba(17, 25, 40, 0.95) 0%, rgba(26, 26, 46, 0.9) 100%)\n          ",
                backdropFilter: "blur(20px)",
                boxShadow: "\n            0 0 60px rgba(0, 212, 255, 0.3),\n            0 0 120px rgba(255, 0, 110, 0.2),\n            0px 20px 60px rgba(0,0,0,0.4)\n          ",
                border: "1px solid rgba(0, 212, 255, 0.2)",
                position: "relative",
                "&::before": {
                    content: "\"\"",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    borderRadius: "24px",
                    background: "linear-gradient(45deg, rgba(0, 212, 255, 0.1), rgba(124, 58, 237, 0.1), rgba(255, 0, 110, 0.1))",
                    opacity: 0.3,
                    animation: "borderPulse 3s ease-in-out infinite",
                    zIndex: -1
                },
                "@keyframes borderPulse": {
                    "0%, 100%": {
                        opacity: 0.3
                    },
                    "50%": {
                        opacity: 0.6
                    }
                }
            };
            $[27] = t11;
        } else {
            t11 = $[27];
        }
        let t16;
        if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
            t16 = {
                background: "\n              linear-gradient(135deg, rgba(0, 212, 255, 0.8) 0%, rgba(124, 58, 237, 0.8) 50%, rgba(255, 0, 110, 0.8) 100%),\n              linear-gradient(45deg, rgba(17, 25, 40, 0.9) 0%, rgba(26, 26, 46, 0.9) 100%)\n            ",
                backgroundBlendMode: "overlay",
                p: 3,
                color: "white",
                position: "relative",
                "&::before": {
                    content: "\"\"",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "2px",
                    background: "linear-gradient(90deg, #00d4ff 0%, #7c3aed 50%, #ff006e 100%)",
                    animation: "headerGlow 2s ease-in-out infinite alternate"
                },
                "@keyframes headerGlow": {
                    "0%": {
                        boxShadow: "0 0 20px rgba(0, 212, 255, 0.5)"
                    },
                    "100%": {
                        boxShadow: "0 0 40px rgba(255, 0, 110, 0.5)"
                    }
                }
            };
            $[28] = t16;
        } else {
            t16 = $[28];
        }
        let t17;
        if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
            t17 = {
                display: "flex",
                alignItems: "center",
                gap: 3,
                mb: 2
            };
            $[29] = t17;
        } else {
            t17 = $[29];
        }
        let t18;
        if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
            t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                component: "img",
                src: "/ChatBotIcon.png",
                alt: "TrustMed-AI ChatBot",
                sx: {
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    filter: "\n                  drop-shadow(0 0 20px rgba(0, 212, 255, 0.6))\n                  drop-shadow(0 0 30px rgba(0, 212, 255, 0.4))\n                  brightness(1.2)\n                  contrast(1.1)\n                ",
                    border: "2px solid rgba(0, 212, 255, 0.4)",
                    boxShadow: "0 0 30px rgba(0, 212, 255, 0.5)",
                    position: "relative",
                    animation: "avatarGlow 3s ease-in-out infinite",
                    "@keyframes avatarGlow": {
                        "0%, 100%": {
                            boxShadow: "0 0 30px rgba(0, 212, 255, 0.5), 0 0 60px rgba(0, 212, 255, 0.3)"
                        },
                        "50%": {
                            boxShadow: "0 0 40px rgba(0, 212, 255, 0.7), 0 0 80px rgba(0, 212, 255, 0.4)"
                        }
                    }
                }
            }, void 0, false, {
                fileName: "[project]/src/components/chat/ChatInterface.tsx",
                lineNumber: 529,
                columnNumber: 13
            }, this);
            $[30] = t18;
        } else {
            t18 = $[30];
        }
        let t19;
        if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
            t19 = {
                flex: 1
            };
            $[31] = t19;
        } else {
            t19 = $[31];
        }
        let t20;
        if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
            t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                variant: "h4",
                fontWeight: "black",
                sx: {
                    mb: 0.5,
                    background: "linear-gradient(45deg, #00d4ff 0%, #ffffff 50%, #ff006e 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    textShadow: "0 0 30px rgba(0, 212, 255, 0.5)",
                    fontFamily: "\"Inter\", \"Roboto\", sans-serif"
                },
                children: "TrustMed-AI"
            }, void 0, false, {
                fileName: "[project]/src/components/chat/ChatInterface.tsx",
                lineNumber: 562,
                columnNumber: 13
            }, this);
            $[32] = t20;
        } else {
            t20 = $[32];
        }
        let t21;
        if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
            t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: t19,
                children: [
                    t20,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        variant: "body1",
                        sx: {
                            color: "rgba(255, 255, 255, 0.9)",
                            fontSize: "1.1rem",
                            textShadow: "0 0 20px rgba(0, 212, 255, 0.3)",
                            fontWeight: 500
                        },
                        children: "Advanced Neural Medical Intelligence"
                    }, void 0, false, {
                        fileName: "[project]/src/components/chat/ChatInterface.tsx",
                        lineNumber: 577,
                        columnNumber: 32
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/chat/ChatInterface.tsx",
                lineNumber: 577,
                columnNumber: 13
            }, this);
            $[33] = t21;
        } else {
            t21 = $[33];
        }
        let t22;
        if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
            t22 = {
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: 1
            };
            $[34] = t22;
        } else {
            t22 = $[34];
        }
        let t23;
        if ($[35] !== healthStatus) {
            t23 = healthStatus && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    display: "flex",
                    alignItems: "center",
                    gap: 1
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            width: 8,
                            height: 8,
                            borderRadius: "50%",
                            background: healthStatus.status === "healthy" ? "#4caf50" : "#f44336",
                            boxShadow: `0 0 10px ${healthStatus.status === "healthy" ? "#4caf50" : "#f44336"}`,
                            animation: healthStatus.status === "healthy" ? "healthyPulse 2s ease-in-out infinite" : "none",
                            "@keyframes healthyPulse": {
                                "0%, 100%": {
                                    opacity: 0.8
                                },
                                "50%": {
                                    opacity: 1
                                }
                            }
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/chat/ChatInterface.tsx",
                        lineNumber: 605,
                        columnNumber: 10
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        variant: "caption",
                        sx: {
                            color: "rgba(255, 255, 255, 0.8)",
                            fontWeight: 500
                        },
                        children: [
                            healthStatus.active_sessions,
                            " Active"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/chat/ChatInterface.tsx",
                        lineNumber: 620,
                        columnNumber: 14
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/chat/ChatInterface.tsx",
                lineNumber: 601,
                columnNumber: 29
            }, this);
            $[35] = healthStatus;
            $[36] = t23;
        } else {
            t23 = $[36];
        }
        let t24;
        if ($[37] !== healthError) {
            t24 = healthError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                variant: "caption",
                sx: {
                    color: "#f44336"
                },
                children: "Neural Core Offline"
            }, void 0, false, {
                fileName: "[project]/src/components/chat/ChatInterface.tsx",
                lineNumber: 631,
                columnNumber: 28
            }, this);
            $[37] = healthError;
            $[38] = t24;
        } else {
            t24 = $[38];
        }
        let t25;
        if ($[39] !== t23 || $[40] !== t24) {
            t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: t17,
                children: [
                    t18,
                    t21,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: t22,
                        children: [
                            t23,
                            t24
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/chat/ChatInterface.tsx",
                        lineNumber: 641,
                        columnNumber: 37
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/chat/ChatInterface.tsx",
                lineNumber: 641,
                columnNumber: 13
            }, this);
            $[39] = t23;
            $[40] = t24;
            $[41] = t25;
        } else {
            t25 = $[41];
        }
        let t26;
        if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
            t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                variant: "body1",
                sx: {
                    mb: 4,
                    color: "rgba(255, 255, 255, 0.9)",
                    textAlign: "center",
                    fontSize: "1.1rem",
                    textShadow: "0 0 20px rgba(0, 212, 255, 0.3)",
                    fontWeight: 400
                },
                children: "Powered by advanced neural architecture for precise medical insights and comprehensive health information analysis."
            }, void 0, false, {
                fileName: "[project]/src/components/chat/ChatInterface.tsx",
                lineNumber: 650,
                columnNumber: 13
            }, this);
            $[42] = t26;
        } else {
            t26 = $[42];
        }
        if ($[43] !== t25) {
            t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: t16,
                children: [
                    t25,
                    t26
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/chat/ChatInterface.tsx",
                lineNumber: 663,
                columnNumber: 13
            }, this);
            $[43] = t25;
            $[44] = t12;
        } else {
            t12 = $[44];
        }
        T0 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"];
        if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
            t9 = {
                flex: 1,
                overflow: "auto",
                px: 2,
                py: 3,
                minHeight: 0
            };
            $[45] = t9;
        } else {
            t9 = $[45];
        }
        t10 = messages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: {
                textAlign: "center",
                mt: 4,
                position: "relative"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    sx: {
                        position: "relative",
                        display: "inline-block",
                        mb: 4,
                        "&::before": {
                            content: "\"\"",
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: "150px",
                            height: "150px",
                            background: "radial-gradient(circle, rgba(0, 212, 255, 0.3) 0%, transparent 70%)",
                            borderRadius: "50%",
                            animation: "welcomePulse 2s ease-in-out infinite",
                            zIndex: -1
                        },
                        "@keyframes welcomePulse": {
                            "0%, 100%": {
                                transform: "translate(-50%, -50%) scale(1)"
                            },
                            "50%": {
                                transform: "translate(-50%, -50%) scale(1.2)"
                            }
                        }
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        component: "img",
                        src: "/ChatBotIcon.png",
                        alt: "TrustMed-AI ChatBot",
                        sx: {
                            width: 100,
                            height: 100,
                            mx: "auto",
                            borderRadius: "50%",
                            filter: "\n                    drop-shadow(0 0 20px rgba(0, 212, 255, 0.6))\n                    drop-shadow(0 0 30px rgba(0, 212, 255, 0.4))\n                    brightness(1.2)\n                    contrast(1.1)\n                  ",
                            border: "2px solid rgba(0, 212, 255, 0.4)",
                            boxShadow: "0 0 50px rgba(0, 212, 255, 0.6)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/chat/ChatInterface.tsx",
                        lineNumber: 711,
                        columnNumber: 10
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/ChatInterface.tsx",
                    lineNumber: 686,
                    columnNumber: 8
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                    variant: "h3",
                    fontWeight: "black",
                    sx: {
                        mb: 2,
                        background: "linear-gradient(45deg, #00d4ff 0%, #ffffff 30%, #ff006e 60%, #7c3aed 100%)",
                        backgroundSize: "300% 300%",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        animation: "textShimmer 3s ease-in-out infinite",
                        textShadow: "0 0 40px rgba(0, 212, 255, 0.5)",
                        "@keyframes textShimmer": {
                            "0%, 100%": {
                                backgroundPosition: "0% 50%"
                            },
                            "50%": {
                                backgroundPosition: "100% 50%"
                            }
                        }
                    },
                    children: "TrustMed-AI Chat"
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/ChatInterface.tsx",
                    lineNumber: 719,
                    columnNumber: 20
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                    variant: "h6",
                    sx: {
                        mb: 4,
                        maxWidth: 600,
                        mx: "auto",
                        color: "rgba(255, 255, 255, 0.8)",
                        textShadow: "0 0 20px rgba(0, 212, 255, 0.3)",
                        fontWeight: 400
                    },
                    children: "Advanced AI-powered medical intelligence system ready to assist with healthcare queries and medical insights."
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/ChatInterface.tsx",
                    lineNumber: 736,
                    columnNumber: 39
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Paper$2f$Paper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paper$3e$__["Paper"], {
                    sx: {
                        mb: 4,
                        maxWidth: 700,
                        mx: "auto",
                        p: 3,
                        background: "rgba(255, 0, 110, 0.1)",
                        border: "1px solid rgba(255, 0, 110, 0.3)",
                        borderRadius: "16px",
                        backdropFilter: "blur(15px)",
                        position: "relative",
                        "&::before": {
                            content: "\"\"",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            borderRadius: "16px",
                            background: "linear-gradient(45deg, rgba(255, 0, 110, 0.05), rgba(124, 58, 237, 0.05))",
                            zIndex: -1
                        }
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            sx: {
                                display: "flex",
                                alignItems: "center",
                                gap: 2,
                                mb: 2
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$WarningAmber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    sx: {
                                        color: "#ff006e",
                                        fontSize: 28
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/chat/ChatInterface.tsx",
                                    lineNumber: 769,
                                    columnNumber: 12
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                    variant: "h6",
                                    fontWeight: "bold",
                                    sx: {
                                        color: "#ff006e",
                                        textShadow: "0 0 15px rgba(255, 0, 110, 0.4)"
                                    },
                                    children: "TrustMed-AI Health Advisory"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/chat/ChatInterface.tsx",
                                    lineNumber: 772,
                                    columnNumber: 16
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/chat/ChatInterface.tsx",
                            lineNumber: 764,
                            columnNumber: 10
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            variant: "body1",
                            sx: {
                                color: "rgba(255, 255, 255, 0.9)",
                                lineHeight: 1.6,
                                textShadow: "0 0 10px rgba(255, 0, 110, 0.2)"
                            },
                            children: "TrustMed-AI Chat provides educational medical information based on comprehensive AI analysis from verified medical sources. Always consult certified healthcare professionals for medical diagnosis, treatment, and professional medical advice."
                        }, void 0, false, {
                            fileName: "[project]/src/components/chat/ChatInterface.tsx",
                            lineNumber: 775,
                            columnNumber: 60
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/chat/ChatInterface.tsx",
                    lineNumber: 743,
                    columnNumber: 132
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                    variant: "h5",
                    fontWeight: "bold",
                    sx: {
                        mb: 3,
                        color: "#00d4ff",
                        textShadow: "0 0 30px rgba(0, 212, 255, 0.6)"
                    },
                    children: "Initialize Query Protocol:"
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/ChatInterface.tsx",
                    lineNumber: 779,
                    columnNumber: 273
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    sx: {
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 1.5,
                        justifyContent: "center",
                        maxWidth: 900,
                        mx: "auto"
                    },
                    children: sampleQuestions.map({
                        "ChatInterface[sampleQuestions.map()]": (question_0, index_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__["Chip"], {
                                label: question_0,
                                onClick: {
                                    "ChatInterface[sampleQuestions.map() > <Chip>.onClick]": ()=>handleSampleQuestion(question_0)
                                }["ChatInterface[sampleQuestions.map() > <Chip>.onClick]"],
                                sx: {
                                    cursor: "pointer",
                                    background: "rgba(255, 255, 255, 0.05)",
                                    border: "1px solid rgba(255, 255, 255, 0.15)",
                                    color: "rgba(255, 255, 255, 0.9)",
                                    backdropFilter: "blur(15px)",
                                    fontWeight: 500,
                                    fontSize: "0.85rem",
                                    padding: "12px 16px",
                                    height: "auto",
                                    borderRadius: "12px",
                                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                    "&:hover": {
                                        background: "rgba(255, 255, 255, 0.1)",
                                        transform: "translateY(-2px)",
                                        boxShadow: "0 8px 25px rgba(0, 212, 255, 0.2)",
                                        borderColor: "rgba(0, 212, 255, 0.4)"
                                    },
                                    "&:active": {
                                        transform: "translateY(0)"
                                    }
                                }
                            }, index_1, false, {
                                fileName: "[project]/src/components/chat/ChatInterface.tsx",
                                lineNumber: 791,
                                columnNumber: 76
                            }, this)
                    }["ChatInterface[sampleQuestions.map()]"])
                }, void 0, false, {
                    fileName: "[project]/src/components/chat/ChatInterface.tsx",
                    lineNumber: 783,
                    columnNumber: 49
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/chat/ChatInterface.tsx",
            lineNumber: 682,
            columnNumber: 35
        }, this) : messages.map(renderMessage);
        $[13] = healthError;
        $[14] = healthStatus;
        $[15] = messages;
        $[16] = T0;
        $[17] = T1;
        $[18] = T2;
        $[19] = t10;
        $[20] = t11;
        $[21] = t12;
        $[22] = t13;
        $[23] = t14;
        $[24] = t9;
    } else {
        T0 = $[16];
        T1 = $[17];
        T2 = $[18];
        t10 = $[19];
        t11 = $[20];
        t12 = $[21];
        t13 = $[22];
        t14 = $[23];
        t9 = $[24];
    }
    let t15;
    if ($[46] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: messagesEndRef
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatInterface.tsx",
            lineNumber: 841,
            columnNumber: 11
        }, this);
        $[46] = t15;
    } else {
        t15 = $[46];
    }
    let t16;
    if ($[47] !== T0 || $[48] !== t10 || $[49] !== t9) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T0, {
            sx: t9,
            children: [
                t10,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/chat/ChatInterface.tsx",
            lineNumber: 848,
            columnNumber: 11
        }, this);
        $[47] = T0;
        $[48] = t10;
        $[49] = t9;
        $[50] = t16;
    } else {
        t16 = $[50];
    }
    let t17;
    if ($[51] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = {
            p: 2.5,
            background: "linear-gradient(135deg, rgba(17, 25, 40, 0.98) 0%, rgba(26, 26, 46, 0.95) 100%)",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(30px)",
            position: "relative",
            "&::before": {
                content: "\"\"",
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "1px",
                background: "linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.5), rgba(255, 0, 110, 0.5), transparent)",
                animation: "inputShimmer 3s ease-in-out infinite",
                "@keyframes inputShimmer": {
                    "0%, 100%": {
                        opacity: 0.3
                    },
                    "50%": {
                        opacity: 1
                    }
                }
            }
        };
        $[51] = t17;
    } else {
        t17 = $[51];
    }
    let t18;
    if ($[52] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = {
            display: "flex",
            gap: 1.5,
            alignItems: "flex-end"
        };
        $[52] = t18;
    } else {
        t18 = $[52];
    }
    let t19;
    if ($[53] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = ({
            "ChatInterface[<TextField>.onChange]": (e)=>setInputValue(e.target.value)
        })["ChatInterface[<TextField>.onChange]"];
        $[53] = t19;
    } else {
        t19 = $[53];
    }
    let t20;
    let t21;
    if ($[54] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = {
            borderColor: "rgba(255, 255, 255, 0.15)",
            borderWidth: "1px"
        };
        t21 = {
            borderColor: "rgba(0, 212, 255, 0.4)"
        };
        $[54] = t20;
        $[55] = t21;
    } else {
        t20 = $[54];
        t21 = $[55];
    }
    let t22;
    if ($[56] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = {
            borderRadius: "16px",
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(15px)",
            color: "#ffffff",
            fontSize: "0.95rem",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            "& fieldset": t20,
            "&:hover fieldset": t21,
            "&.Mui-focused": {
                background: "rgba(255, 255, 255, 0.08)",
                "& fieldset": {
                    borderColor: "rgba(0, 212, 255, 0.6)",
                    borderWidth: "1px",
                    boxShadow: "0 0 20px rgba(0, 212, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
                }
            }
        };
        $[56] = t22;
    } else {
        t22 = $[56];
    }
    let t23;
    if ($[57] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = {
            "& .MuiOutlinedInput-root": t22,
            "& .MuiInputBase-input": {
                color: "#ffffff",
                "&::placeholder": {
                    color: "rgba(255, 255, 255, 0.5)",
                    fontStyle: "normal"
                }
            }
        };
        $[57] = t23;
    } else {
        t23 = $[57];
    }
    let t24;
    if ($[58] !== chatMutation.isPending || $[59] !== handleKeyPress || $[60] !== inputValue) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
            ref: inputRef,
            multiline: true,
            maxRows: 4,
            value: inputValue,
            onChange: t19,
            onKeyPress: handleKeyPress,
            placeholder: "Ask TrustMed-AI anything about health and medicine...",
            variant: "outlined",
            fullWidth: true,
            disabled: chatMutation.isPending,
            sx: t23
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatInterface.tsx",
            lineNumber: 965,
            columnNumber: 11
        }, this);
        $[58] = chatMutation.isPending;
        $[59] = handleKeyPress;
        $[60] = inputValue;
        $[61] = t24;
    } else {
        t24 = $[61];
    }
    let t25;
    if ($[62] !== chatMutation.isPending || $[63] !== inputValue) {
        t25 = !inputValue.trim() || chatMutation.isPending;
        $[62] = chatMutation.isPending;
        $[63] = inputValue;
        $[64] = t25;
    } else {
        t25 = $[64];
    }
    const t26 = chatMutation.isPending ? "rgba(60, 60, 80, 0.5)" : "linear-gradient(135deg, #00d4ff 0%, #7c3aed 50%, #ff006e 100%)";
    let t27;
    if ($[65] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = {
            content: "\"\"",
            position: "absolute",
            top: 0,
            left: "-100%",
            width: "100%",
            height: "100%",
            background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)",
            transition: "left 0.6s"
        };
        $[65] = t27;
    } else {
        t27 = $[65];
    }
    let t28;
    let t29;
    let t30;
    if ($[66] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = {
            boxShadow: "0 8px 25px rgba(0, 212, 255, 0.4), 0 0 20px rgba(255, 0, 110, 0.2)",
            transform: "translateY(-2px) scale(1.02)",
            "&::before": {
                left: "100%"
            }
        };
        t29 = {
            transform: "translateY(0) scale(0.98)"
        };
        t30 = {
            background: "rgba(60, 60, 80, 0.3)",
            color: "rgba(255, 255, 255, 0.3)",
            border: "1px solid rgba(60, 60, 80, 0.3)",
            cursor: "not-allowed"
        };
        $[66] = t28;
        $[67] = t29;
        $[68] = t30;
    } else {
        t28 = $[66];
        t29 = $[67];
        t30 = $[68];
    }
    let t31;
    if ($[69] !== t26) {
        t31 = {
            p: 1.5,
            borderRadius: "14px",
            background: t26,
            color: "white",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            position: "relative",
            overflow: "hidden",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            "&::before": t27,
            "&:hover:not(:disabled)": t28,
            "&:active:not(:disabled)": t29,
            "&:disabled": t30
        };
        $[69] = t26;
        $[70] = t31;
    } else {
        t31 = $[70];
    }
    let t32;
    if ($[71] !== chatMutation.isPending) {
        t32 = chatMutation.isPending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__["CircularProgress"], {
            size: 20,
            sx: {
                color: "rgba(255, 255, 255, 0.6)",
                "& circle": {
                    strokeLinecap: "round"
                }
            }
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatInterface.tsx",
            lineNumber: 1050,
            columnNumber: 36
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            sx: {
                fontSize: 20
            }
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatInterface.tsx",
            lineNumber: 1055,
            columnNumber: 13
        }, this);
        $[71] = chatMutation.isPending;
        $[72] = t32;
    } else {
        t32 = $[72];
    }
    let t33;
    if ($[73] !== handleSendMessage || $[74] !== t25 || $[75] !== t31 || $[76] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
            onClick: handleSendMessage,
            disabled: t25,
            sx: t31,
            children: t32
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatInterface.tsx",
            lineNumber: 1065,
            columnNumber: 11
        }, this);
        $[73] = handleSendMessage;
        $[74] = t25;
        $[75] = t31;
        $[76] = t32;
        $[77] = t33;
    } else {
        t33 = $[77];
    }
    let t34;
    if ($[78] !== t24 || $[79] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: t18,
            children: [
                t24,
                t33
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/chat/ChatInterface.tsx",
            lineNumber: 1076,
            columnNumber: 11
        }, this);
        $[78] = t24;
        $[79] = t33;
        $[80] = t34;
    } else {
        t34 = $[80];
    }
    let t35;
    if ($[81] === Symbol.for("react.memo_cache_sentinel")) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
            variant: "body2",
            sx: {
                display: "block",
                mt: 1.5,
                textAlign: "center",
                color: "rgba(255, 255, 255, 0.4)",
                fontSize: "0.75rem",
                fontWeight: 500
            },
            children: "Press Enter to send • Shift + Enter for new line • AI responses powered by TrustMed neural architecture"
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatInterface.tsx",
            lineNumber: 1085,
            columnNumber: 11
        }, this);
        $[81] = t35;
    } else {
        t35 = $[81];
    }
    let t36;
    if ($[82] !== t34) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Paper$2f$Paper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paper$3e$__["Paper"], {
            elevation: 0,
            sx: t17,
            children: [
                t34,
                t35
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/chat/ChatInterface.tsx",
            lineNumber: 1099,
            columnNumber: 11
        }, this);
        $[82] = t34;
        $[83] = t36;
    } else {
        t36 = $[83];
    }
    let t37;
    if ($[84] !== T1 || $[85] !== t11 || $[86] !== t12 || $[87] !== t16 || $[88] !== t36) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T1, {
            sx: t11,
            children: [
                t12,
                t16,
                t36
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/chat/ChatInterface.tsx",
            lineNumber: 1107,
            columnNumber: 11
        }, this);
        $[84] = T1;
        $[85] = t11;
        $[86] = t12;
        $[87] = t16;
        $[88] = t36;
        $[89] = t37;
    } else {
        t37 = $[89];
    }
    let t38;
    if ($[90] !== T2 || $[91] !== t13 || $[92] !== t14 || $[93] !== t37) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T2, {
            maxWidth: t13,
            sx: t14,
            children: t37
        }, void 0, false, {
            fileName: "[project]/src/components/chat/ChatInterface.tsx",
            lineNumber: 1119,
            columnNumber: 11
        }, this);
        $[90] = T2;
        $[91] = t13;
        $[92] = t14;
        $[93] = t37;
        $[94] = t38;
    } else {
        t38 = $[94];
    }
    return t38;
}
_s(ChatInterface, "60NNeODSVezPYg902loKjJZ4R74=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
_c1 = ChatInterface;
function _ChatInterfaceRenderMessageMessageSourcesMap2(link_0, index_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        sx: {
            p: 1.5,
            mb: 1,
            borderRadius: "8px",
            background: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.1)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                variant: "caption",
                sx: {
                    color: "rgba(255, 255, 255, 0.6)"
                },
                children: [
                    "[",
                    index_0 + 1,
                    "] ",
                    link_0.source_type
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/chat/ChatInterface.tsx",
                lineNumber: 1137,
                columnNumber: 6
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                variant: "body2",
                sx: {
                    mt: 0.5,
                    fontWeight: 500
                },
                children: link_0.title
            }, void 0, false, {
                fileName: "[project]/src/components/chat/ChatInterface.tsx",
                lineNumber: 1139,
                columnNumber: 57
            }, this)
        ]
    }, index_0, true, {
        fileName: "[project]/src/components/chat/ChatInterface.tsx",
        lineNumber: 1131,
        columnNumber: 10
    }, this);
}
function _ChatInterfaceRenderMessageMessageSourcesMap(link, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Link$2f$Link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__["Link"], {
        href: link.url,
        target: "_blank",
        rel: "noopener noreferrer",
        sx: {
            display: "inline-flex",
            alignItems: "center",
            gap: 0.5,
            px: 1.2,
            py: 0.6,
            borderRadius: "8px",
            textDecoration: "none",
            fontSize: "0.8rem",
            fontWeight: 500,
            background: "rgba(255, 255, 255, 0.08)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            color: "#ffffff",
            backdropFilter: "blur(10px)",
            transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
            "&:hover": {
                background: "rgba(255, 255, 255, 0.15)",
                borderColor: "rgba(0, 212, 255, 0.5)",
                transform: "translateY(-1px)",
                boxShadow: "0 4px 12px rgba(0, 212, 255, 0.2)"
            }
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: link.source_type === "medicine" ? "#ff9800" : link.source_type === "diseases" ? "#4caf50" : link.source_type === "symptoms" ? "#f44336" : "#2196f3",
                    flexShrink: 0
                }
            }, void 0, false, {
                fileName: "[project]/src/components/chat/ChatInterface.tsx",
                lineNumber: 1166,
                columnNumber: 6
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                variant: "inherit",
                children: index + 1
            }, void 0, false, {
                fileName: "[project]/src/components/chat/ChatInterface.tsx",
                lineNumber: 1172,
                columnNumber: 10
            }, this)
        ]
    }, index, true, {
        fileName: "[project]/src/components/chat/ChatInterface.tsx",
        lineNumber: 1145,
        columnNumber: 10
    }, this);
}
function _ChatInterfaceRenderMessageAnonymous(i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        sx: {
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "linear-gradient(45deg, #00d4ff, #ff006e)",
            boxShadow: "0 0 12px rgba(0, 212, 255, 0.6)",
            animation: "modernTyping 1.4s ease-in-out infinite",
            animationDelay: `${i * 0.2}s`,
            "@keyframes modernTyping": {
                "0%, 60%, 100%": {
                    transform: "translateY(0) scale(0.8)",
                    opacity: 0.5
                },
                "30%": {
                    transform: "translateY(-8px) scale(1)",
                    opacity: 1
                }
            }
        }
    }, i, false, {
        fileName: "[project]/src/components/chat/ChatInterface.tsx",
        lineNumber: 1175,
        columnNumber: 10
    }, this);
}
function _ChatInterfaceFormatMarkdown(text) {
    return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/\*(.*?)\*/g, "<em>$1</em>").replace(/###\s(.*?)$/gm, "<h3>$1</h3>").replace(/##\s(.*?)$/gm, "<h2>$1</h2>").replace(/\n/g, "<br />");
}
function _ChatInterfaceCopyToClipboard(content) {
    navigator.clipboard.writeText(content);
}
function _temp2(query) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiService"].medicalQuery(query);
}
function _temp(i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        sx: {
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: "linear-gradient(45deg, #00d4ff, #ff006e)",
            boxShadow: `0 0 20px ${i === 1 ? "rgba(0, 212, 255, 0.8)" : "rgba(255, 0, 110, 0.6)"}`,
            animation: "cyberpunkTyping 1.6s ease-in-out infinite",
            animationDelay: `${i * 0.3}s`,
            "@keyframes cyberpunkTyping": {
                "0%, 60%, 100%": {
                    transform: "translateY(0) scale(1)",
                    opacity: 0.6,
                    boxShadow: "0 0 10px rgba(0, 212, 255, 0.4)"
                },
                "30%": {
                    transform: "translateY(-12px) scale(1.2)",
                    opacity: 1,
                    boxShadow: "0 0 30px rgba(255, 0, 110, 0.8)"
                }
            }
        }
    }, i, false, {
        fileName: "[project]/src/components/chat/ChatInterface.tsx",
        lineNumber: 1205,
        columnNumber: 10
    }, this);
}
var _c, _c1;
__turbopack_context__.k.register(_c, "TypingIndicator");
__turbopack_context__.k.register(_c1, "ChatInterface");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/chat/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Chat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$ChatInterface$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/chat/ChatInterface.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/CircularProgress/CircularProgress.js [app-client] (ecmascript) <export default as CircularProgress>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function ChatPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "b9849f330da2d2c8c221fd5ebd7a2198a31105b73f699ac75023078c4cdb454e") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b9849f330da2d2c8c221fd5ebd7a2198a31105b73f699ac75023078c4cdb454e";
    }
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    let t0;
    if ($[1] !== searchParams) {
        t0 = searchParams?.get("q") || "";
        $[1] = searchParams;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const initialQuery = t0;
    let t1;
    if ($[3] !== initialQuery) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$chat$2f$ChatInterface$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatInterface"], {
            initialMessage: initialQuery
        }, void 0, false, {
            fileName: "[project]/src/app/chat/page.tsx",
            lineNumber: 28,
            columnNumber: 10
        }, this);
        $[3] = initialQuery;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
}
_s(ChatPage, "a+DZx9DY26Zf8FVy1bxe3vp9l1w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = ChatPage;
function LoadingFallback() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "b9849f330da2d2c8c221fd5ebd7a2198a31105b73f699ac75023078c4cdb454e") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b9849f330da2d2c8c221fd5ebd7a2198a31105b73f699ac75023078c4cdb454e";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: {
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__["CircularProgress"], {}, void 0, false, {
                fileName: "[project]/src/app/chat/page.tsx",
                lineNumber: 51,
                columnNumber: 8
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/chat/page.tsx",
            lineNumber: 46,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c1 = LoadingFallback;
function Chat() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "b9849f330da2d2c8c221fd5ebd7a2198a31105b73f699ac75023078c4cdb454e") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b9849f330da2d2c8c221fd5ebd7a2198a31105b73f699ac75023078c4cdb454e";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
            fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LoadingFallback, {}, void 0, false, {
                fileName: "[project]/src/app/chat/page.tsx",
                lineNumber: 68,
                columnNumber: 30
            }, void 0),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChatPage, {}, void 0, false, {
                fileName: "[project]/src/app/chat/page.tsx",
                lineNumber: 68,
                columnNumber: 51
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/chat/page.tsx",
            lineNumber: 68,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c2 = Chat;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ChatPage");
__turbopack_context__.k.register(_c1, "LoadingFallback");
__turbopack_context__.k.register(_c2, "Chat");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_44f3e8f6._.js.map
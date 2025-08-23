module.exports = [
"[project]/App/learning-tracker/src/components/MonthSidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MonthSidebar",
    ()=>MonthSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
'use client';
;
;
;
function MonthSidebar({ selectedMonth, onMonthSelect }) {
    const [currentYear, setCurrentYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Date().getFullYear());
    const months = [
        '1月',
        '2月',
        '3月',
        '4月',
        '5月',
        '6月',
        '7月',
        '8月',
        '9月',
        '10月',
        '11月',
        '12月'
    ];
    const handleMonthClick = (monthIndex)=>{
        const monthStr = `${currentYear}-${String(monthIndex + 1).padStart(2, '0')}`;
        onMonthSelect(monthStr);
    };
    const handlePrevYear = ()=>setCurrentYear(currentYear - 1);
    const handleNextYear = ()=>setCurrentYear(currentYear + 1);
    const isSelectedMonth = (monthIndex)=>{
        const monthStr = `${currentYear}-${String(monthIndex + 1).padStart(2, '0')}`;
        return selectedMonth === monthStr;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-64 bg-card border-r border-border h-full flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 border-b border-border",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handlePrevYear,
                            className: "p-2 hover:bg-background rounded-lg transition-colors",
                            "aria-label": "前年",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/App/learning-tracker/src/components/MonthSidebar.tsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/App/learning-tracker/src/components/MonthSidebar.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-lg font-semibold text-center min-w-0",
                            children: [
                                currentYear,
                                "年"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/App/learning-tracker/src/components/MonthSidebar.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleNextYear,
                            className: "p-2 hover:bg-background rounded-lg transition-colors",
                            "aria-label": "次年",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/App/learning-tracker/src/components/MonthSidebar.tsx",
                                lineNumber: 52,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/App/learning-tracker/src/components/MonthSidebar.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/App/learning-tracker/src/components/MonthSidebar.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/App/learning-tracker/src/components/MonthSidebar.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 p-4 overflow-y-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: months.map((month, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleMonthClick(index),
                                className: `w-full text-left px-4 py-3 rounded-2xl transition-all duration-200 ${isSelectedMonth(index) ? 'gradient-accent text-white shadow-lg' : 'hover:bg-background border border-transparent hover:border-border'}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                            size: 16,
                                            className: "opacity-70"
                                        }, void 0, false, {
                                            fileName: "[project]/App/learning-tracker/src/components/MonthSidebar.tsx",
                                            lineNumber: 71,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium",
                                            children: month
                                        }, void 0, false, {
                                            fileName: "[project]/App/learning-tracker/src/components/MonthSidebar.tsx",
                                            lineNumber: 72,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/App/learning-tracker/src/components/MonthSidebar.tsx",
                                    lineNumber: 70,
                                    columnNumber: 15
                                }, this)
                            }, index, false, {
                                fileName: "[project]/App/learning-tracker/src/components/MonthSidebar.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/App/learning-tracker/src/components/MonthSidebar.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 pt-4 border-t border-border",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>onMonthSelect('uncategorized'),
                            className: `w-full text-left px-4 py-3 rounded-2xl transition-all duration-200 ${selectedMonth === 'uncategorized' ? 'gradient-accent text-white shadow-lg' : 'hover:bg-background border border-transparent hover:border-border'}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                        size: 16,
                                        className: "opacity-70"
                                    }, void 0, false, {
                                        fileName: "[project]/App/learning-tracker/src/components/MonthSidebar.tsx",
                                        lineNumber: 89,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: "未分類"
                                    }, void 0, false, {
                                        fileName: "[project]/App/learning-tracker/src/components/MonthSidebar.tsx",
                                        lineNumber: 90,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/App/learning-tracker/src/components/MonthSidebar.tsx",
                                lineNumber: 88,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/App/learning-tracker/src/components/MonthSidebar.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/App/learning-tracker/src/components/MonthSidebar.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/App/learning-tracker/src/components/MonthSidebar.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/App/learning-tracker/src/components/MonthSidebar.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
}),
"[project]/App/learning-tracker/src/store/useAppStore.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAppStore",
    ()=>useAppStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2f$immer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/zustand/esm/middleware/immer.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/zustand/esm/middleware.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
// Mock data
const mockItems = [
    {
        id: '1',
        userId: 'user1',
        kind: 'book',
        title: 'ゼロからの経済学',
        creators: [
            '山田太郎'
        ],
        date: '2025-08-20',
        amazonUrl: 'https://www.amazon.co.jp/dp/XXXX',
        notebooklmUrl: 'https://notebooklm.google.com/...',
        rating: 8,
        oneLiner: '価格とインセンティブ設計の基礎を再確認。',
        tags: [
            '経済',
            '価格戦略',
            'ビジネス'
        ],
        status: 'done',
        createdAt: '2025-08-20T10:12:00Z',
        updatedAt: '2025-08-20T10:12:00Z'
    },
    {
        id: '2',
        userId: 'user1',
        kind: 'video',
        title: 'React最新機能解説',
        creators: [
            '佐藤花子'
        ],
        date: '2025-08-22',
        rating: 9,
        oneLiner: 'Suspenseとコンカレント機能の実装パターンが理解できた',
        tags: [
            'React',
            'JavaScript',
            'プログラミング'
        ],
        status: 'in_progress',
        createdAt: '2025-08-22T09:30:00Z',
        updatedAt: '2025-08-22T09:30:00Z'
    }
];
const mockItemDetails = {
    '1': {
        id: 'detail1',
        itemId: '1',
        workIdeas: [
            {
                id: 'idea1',
                text: '自社の料金テストをABで週次実施',
                checked: false,
                order: 0
            },
            {
                id: 'idea2',
                text: 'セグメント別価格設定の導入検討',
                checked: true,
                order: 1
            }
        ],
        learnings: [
            {
                id: 'learn1',
                text: '価格弾力性はセグメント別に測定する',
                order: 0
            },
            {
                id: 'learn2',
                text: '消費者心理と価格設定の重要性',
                order: 1
            }
        ],
        longNote: '# 需要曲線と価格差別について\n\n価格設定において最も重要なのは、顧客セグメントごとの価格弾力性を正確に把握することである。',
        highlights: [
            {
                id: 'high1',
                quote: '価格はメッセージである',
                note: 'プロモーション設計の指針として使える',
                source: 'p.42'
            }
        ],
        links: [
            {
                label: '講演スライド',
                url: 'https://example.com/slides'
            }
        ],
        version: 1,
        updatedAt: new Date().toISOString()
    },
    '2': {
        id: 'detail2',
        itemId: '2',
        workIdeas: [
            {
                id: 'idea3',
                text: 'Suspenseを活用したローディング状態の改善',
                checked: false,
                order: 0
            }
        ],
        learnings: [
            {
                id: 'learn3',
                text: 'React 18の並行レンダリングは段階的に導入可能',
                order: 0
            }
        ],
        longNote: '# React 18の新機能について\n\nSuspenseとコンカレント機能により、ユーザー体験が大幅に改善される。',
        highlights: [],
        links: [],
        version: 1,
        updatedAt: new Date().toISOString()
    }
};
const generateId = ()=>Math.random().toString(36).substr(2, 9);
const useAppStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["subscribeWithSelector"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2f$immer$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["immer"])((set, get)=>({
        // Initial State
        items: mockItems,
        itemDetails: mockItemDetails,
        selectedMonth: (()=>{
            const now = new Date();
            return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
        })(),
        selectedItem: null,
        undoStack: [],
        redoStack: [],
        // Item Actions
        addItem: (item)=>{
            const action = ()=>{
                set((state)=>{
                    state.items.push({
                        ...item,
                        id: generateId()
                    });
                });
            };
            const inverse = ()=>{
                set((state)=>{
                    const index = state.items.findIndex((i)=>i.id === item.id);
                    if (index >= 0) {
                        state.items.splice(index, 1);
                    }
                });
            };
            get().executeUndoable(action, inverse);
        },
        updateItem: (id, updates)=>{
            const currentItem = get().items.find((item)=>item.id === id);
            if (!currentItem) return;
            const action = ()=>{
                set((state)=>{
                    const item = state.items.find((i)=>i.id === id);
                    if (item) {
                        Object.assign(item, updates);
                        item.updatedAt = new Date().toISOString();
                    }
                });
            };
            const inverse = ()=>{
                set((state)=>{
                    const item = state.items.find((i)=>i.id === id);
                    if (item) {
                        Object.assign(item, currentItem);
                    }
                });
            };
            get().executeUndoable(action, inverse);
        },
        deleteItem: (id)=>{
            const itemToDelete = get().items.find((item)=>item.id === id);
            const detailsToDelete = get().itemDetails[id];
            if (!itemToDelete) return;
            const action = ()=>{
                set((state)=>{
                    const index = state.items.findIndex((i)=>i.id === id);
                    if (index >= 0) {
                        state.items.splice(index, 1);
                    }
                    delete state.itemDetails[id];
                });
            };
            const inverse = ()=>{
                set((state)=>{
                    state.items.push(itemToDelete);
                    if (detailsToDelete) {
                        state.itemDetails[id] = detailsToDelete;
                    }
                });
            };
            get().executeUndoable(action, inverse);
        },
        // Item Details Actions
        updateItemDetails: (itemId, details)=>{
            const currentDetails = get().itemDetails[itemId];
            const action = ()=>{
                set((state)=>{
                    if (!state.itemDetails[itemId]) {
                        state.itemDetails[itemId] = {
                            id: generateId(),
                            itemId,
                            workIdeas: [],
                            learnings: [],
                            longNote: '',
                            highlights: [],
                            links: [],
                            version: 1,
                            updatedAt: new Date().toISOString()
                        };
                    }
                    Object.assign(state.itemDetails[itemId], details);
                    state.itemDetails[itemId].updatedAt = new Date().toISOString();
                    state.itemDetails[itemId].version += 1;
                });
            };
            const inverse = ()=>{
                set((state)=>{
                    if (currentDetails) {
                        state.itemDetails[itemId] = currentDetails;
                    } else {
                        delete state.itemDetails[itemId];
                    }
                });
            };
            get().executeUndoable(action, inverse);
        },
        addWorkIdea: (itemId, text)=>{
            const newIdea = {
                id: generateId(),
                text,
                checked: false,
                order: get().itemDetails[itemId]?.workIdeas.length || 0
            };
            const action = ()=>{
                set((state)=>{
                    if (!state.itemDetails[itemId]) return;
                    state.itemDetails[itemId].workIdeas.push(newIdea);
                    state.itemDetails[itemId].updatedAt = new Date().toISOString();
                });
            };
            const inverse = ()=>{
                set((state)=>{
                    if (!state.itemDetails[itemId]) return;
                    const index = state.itemDetails[itemId].workIdeas.findIndex((i)=>i.id === newIdea.id);
                    if (index >= 0) {
                        state.itemDetails[itemId].workIdeas.splice(index, 1);
                    }
                });
            };
            get().executeUndoable(action, inverse);
        },
        updateWorkIdea: (itemId, ideaId, updates)=>{
            const currentIdea = get().itemDetails[itemId]?.workIdeas.find((i)=>i.id === ideaId);
            if (!currentIdea) return;
            const action = ()=>{
                set((state)=>{
                    if (!state.itemDetails[itemId]) return;
                    const idea = state.itemDetails[itemId].workIdeas.find((i)=>i.id === ideaId);
                    if (idea) {
                        Object.assign(idea, updates);
                        state.itemDetails[itemId].updatedAt = new Date().toISOString();
                    }
                });
            };
            const inverse = ()=>{
                set((state)=>{
                    if (!state.itemDetails[itemId]) return;
                    const idea = state.itemDetails[itemId].workIdeas.find((i)=>i.id === ideaId);
                    if (idea) {
                        Object.assign(idea, currentIdea);
                    }
                });
            };
            get().executeUndoable(action, inverse);
        },
        deleteWorkIdea: (itemId, ideaId)=>{
            const ideaToDelete = get().itemDetails[itemId]?.workIdeas.find((i)=>i.id === ideaId);
            if (!ideaToDelete) return;
            const action = ()=>{
                set((state)=>{
                    if (!state.itemDetails[itemId]) return;
                    const index = state.itemDetails[itemId].workIdeas.findIndex((i)=>i.id === ideaId);
                    if (index >= 0) {
                        state.itemDetails[itemId].workIdeas.splice(index, 1);
                        state.itemDetails[itemId].updatedAt = new Date().toISOString();
                    }
                });
            };
            const inverse = ()=>{
                set((state)=>{
                    if (!state.itemDetails[itemId]) return;
                    state.itemDetails[itemId].workIdeas.push(ideaToDelete);
                });
            };
            get().executeUndoable(action, inverse);
        },
        reorderWorkIdeas: (itemId, from, to)=>{
            const ideas = get().itemDetails[itemId]?.workIdeas;
            if (!ideas || from === to) return;
            const action = ()=>{
                set((state)=>{
                    if (!state.itemDetails[itemId]) return;
                    const ideas = state.itemDetails[itemId].workIdeas;
                    const [movedIdea] = ideas.splice(from, 1);
                    ideas.splice(to, 0, movedIdea);
                    // Update order values
                    ideas.forEach((idea, index)=>{
                        idea.order = index;
                    });
                    state.itemDetails[itemId].updatedAt = new Date().toISOString();
                });
            };
            const inverse = ()=>{
                set((state)=>{
                    if (!state.itemDetails[itemId]) return;
                    const ideas = state.itemDetails[itemId].workIdeas;
                    const [movedIdea] = ideas.splice(to, 1);
                    ideas.splice(from, 0, movedIdea);
                    // Restore order values
                    ideas.forEach((idea, index)=>{
                        idea.order = index;
                    });
                });
            };
            get().executeUndoable(action, inverse);
        },
        // Similar implementations for learnings
        addLearning: (itemId, text)=>{
            const newLearning = {
                id: generateId(),
                text,
                order: get().itemDetails[itemId]?.learnings.length || 0
            };
            const action = ()=>{
                set((state)=>{
                    if (!state.itemDetails[itemId]) return;
                    state.itemDetails[itemId].learnings.push(newLearning);
                    state.itemDetails[itemId].updatedAt = new Date().toISOString();
                });
            };
            const inverse = ()=>{
                set((state)=>{
                    if (!state.itemDetails[itemId]) return;
                    const index = state.itemDetails[itemId].learnings.findIndex((i)=>i.id === newLearning.id);
                    if (index >= 0) {
                        state.itemDetails[itemId].learnings.splice(index, 1);
                    }
                });
            };
            get().executeUndoable(action, inverse);
        },
        updateLearning: (itemId, learningId, updates)=>{
            const currentLearning = get().itemDetails[itemId]?.learnings.find((l)=>l.id === learningId);
            if (!currentLearning) return;
            const action = ()=>{
                set((state)=>{
                    if (!state.itemDetails[itemId]) return;
                    const learning = state.itemDetails[itemId].learnings.find((l)=>l.id === learningId);
                    if (learning) {
                        Object.assign(learning, updates);
                        state.itemDetails[itemId].updatedAt = new Date().toISOString();
                    }
                });
            };
            const inverse = ()=>{
                set((state)=>{
                    if (!state.itemDetails[itemId]) return;
                    const learning = state.itemDetails[itemId].learnings.find((l)=>l.id === learningId);
                    if (learning) {
                        Object.assign(learning, currentLearning);
                    }
                });
            };
            get().executeUndoable(action, inverse);
        },
        deleteLearning: (itemId, learningId)=>{
            const learningToDelete = get().itemDetails[itemId]?.learnings.find((l)=>l.id === learningId);
            if (!learningToDelete) return;
            const action = ()=>{
                set((state)=>{
                    if (!state.itemDetails[itemId]) return;
                    const index = state.itemDetails[itemId].learnings.findIndex((l)=>l.id === learningId);
                    if (index >= 0) {
                        state.itemDetails[itemId].learnings.splice(index, 1);
                        state.itemDetails[itemId].updatedAt = new Date().toISOString();
                    }
                });
            };
            const inverse = ()=>{
                set((state)=>{
                    if (!state.itemDetails[itemId]) return;
                    state.itemDetails[itemId].learnings.push(learningToDelete);
                });
            };
            get().executeUndoable(action, inverse);
        },
        reorderLearnings: (itemId, from, to)=>{
            const learnings = get().itemDetails[itemId]?.learnings;
            if (!learnings || from === to) return;
            const action = ()=>{
                set((state)=>{
                    if (!state.itemDetails[itemId]) return;
                    const learnings = state.itemDetails[itemId].learnings;
                    const [movedLearning] = learnings.splice(from, 1);
                    learnings.splice(to, 0, movedLearning);
                    // Update order values
                    learnings.forEach((learning, index)=>{
                        learning.order = index;
                    });
                    state.itemDetails[itemId].updatedAt = new Date().toISOString();
                });
            };
            const inverse = ()=>{
                set((state)=>{
                    if (!state.itemDetails[itemId]) return;
                    const learnings = state.itemDetails[itemId].learnings;
                    const [movedLearning] = learnings.splice(to, 1);
                    learnings.splice(from, 0, movedLearning);
                    // Restore order values
                    learnings.forEach((learning, index)=>{
                        learning.order = index;
                    });
                });
            };
            get().executeUndoable(action, inverse);
        },
        // UI State Actions
        setSelectedItem: (itemId)=>{
            set((state)=>{
                state.selectedItem = itemId;
            });
        },
        setSelectedMonth: (month)=>{
            set((state)=>{
                state.selectedMonth = month;
            });
        },
        // Undo/Redo Actions
        executeUndoable: (action, inverse)=>{
            set((state)=>{
                // Save current state for undo
                state.undoStack.push(JSON.parse(JSON.stringify({
                    items: state.items,
                    itemDetails: state.itemDetails
                })));
                // Clear redo stack when new action is performed
                state.redoStack = [];
                // Limit undo stack size
                if (state.undoStack.length > 100) {
                    state.undoStack.shift();
                }
            });
            action();
        },
        undo: ()=>{
            const state = get();
            if (state.undoStack.length === 0) return;
            set((currentState)=>{
                // Save current state to redo stack
                currentState.redoStack.push(JSON.parse(JSON.stringify({
                    items: currentState.items,
                    itemDetails: currentState.itemDetails
                })));
                // Restore previous state
                const previousState = currentState.undoStack.pop();
                currentState.items = previousState.items;
                currentState.itemDetails = previousState.itemDetails;
            });
        },
        redo: ()=>{
            const state = get();
            if (state.redoStack.length === 0) return;
            set((currentState)=>{
                // Save current state to undo stack
                currentState.undoStack.push(JSON.parse(JSON.stringify({
                    items: currentState.items,
                    itemDetails: currentState.itemDetails
                })));
                // Restore next state
                const nextState = currentState.redoStack.pop();
                currentState.items = nextState.items;
                currentState.itemDetails = nextState.itemDetails;
            });
        },
        canUndo: ()=>get().undoStack.length > 0,
        canRedo: ()=>get().redoStack.length > 0
    }))));
}),
"[project]/App/learning-tracker/src/components/MainTable.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MainTable",
    ()=>MainTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Book$3e$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/lucide-react/dist/esm/icons/book.js [app-ssr] (ecmascript) <export default as Book>");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/lucide-react/dist/esm/icons/video.js [app-ssr] (ecmascript) <export default as Video>");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$src$2f$store$2f$useAppStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/src/store/useAppStore.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function MainTable({ selectedMonth, selectedItem, onItemSelect }) {
    const items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$src$2f$store$2f$useAppStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppStore"])((state)=>state.items);
    const itemDetails = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$src$2f$store$2f$useAppStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppStore"])((state)=>state.itemDetails);
    const getKindIcon = (kind)=>{
        switch(kind){
            case 'book':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Book$3e$__["Book"], {
                    size: 16,
                    className: "text-blue-400"
                }, void 0, false, {
                    fileName: "[project]/App/learning-tracker/src/components/MainTable.tsx",
                    lineNumber: 20,
                    columnNumber: 16
                }, this);
            case 'video':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                    size: 16,
                    className: "text-red-400"
                }, void 0, false, {
                    fileName: "[project]/App/learning-tracker/src/components/MainTable.tsx",
                    lineNumber: 22,
                    columnNumber: 16
                }, this);
            case 'article':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                    size: 16,
                    className: "text-green-400"
                }, void 0, false, {
                    fileName: "[project]/App/learning-tracker/src/components/MainTable.tsx",
                    lineNumber: 24,
                    columnNumber: 16
                }, this);
        }
    };
    const getStatusBadge = (status)=>{
        const styles = {
            done: 'bg-green-100 text-green-800 border-green-200',
            in_progress: 'bg-yellow-100 text-yellow-800 border-yellow-200',
            planned: 'bg-gray-100 text-gray-800 border-gray-200'
        };
        const labels = {
            done: '完了',
            in_progress: '進行中',
            planned: '予定'
        };
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: `px-2 py-1 text-xs rounded-full border ${styles[status]}`,
            children: labels[status]
        }, void 0, false, {
            fileName: "[project]/App/learning-tracker/src/components/MainTable.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this);
    };
    const renderRating = (rating)=>{
        if (!rating) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-gray-500 text-sm",
            children: "未評価"
        }, void 0, false, {
            fileName: "[project]/App/learning-tracker/src/components/MainTable.tsx",
            lineNumber: 49,
            columnNumber: 25
        }, this);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                    size: 14,
                    className: "text-yellow-400 fill-current"
                }, void 0, false, {
                    fileName: "[project]/App/learning-tracker/src/components/MainTable.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm font-medium",
                    children: [
                        rating,
                        "/10"
                    ]
                }, void 0, true, {
                    fileName: "[project]/App/learning-tracker/src/components/MainTable.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/App/learning-tracker/src/components/MainTable.tsx",
            lineNumber: 52,
            columnNumber: 7
        }, this);
    };
    const renderTags = (tags)=>{
        const displayTags = tags.slice(0, 3);
        const remainingCount = Math.max(0, tags.length - 3);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1 flex-wrap",
            children: [
                displayTags.map((tag, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "px-2 py-1 text-xs bg-accent-purple bg-opacity-20 text-accent-purple rounded-lg border border-accent-purple border-opacity-30",
                        children: tag
                    }, index, false, {
                        fileName: "[project]/App/learning-tracker/src/components/MainTable.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this)),
                remainingCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "px-2 py-1 text-xs bg-gray-600 text-gray-300 rounded-lg",
                    children: [
                        "+",
                        remainingCount
                    ]
                }, void 0, true, {
                    fileName: "[project]/App/learning-tracker/src/components/MainTable.tsx",
                    lineNumber: 74,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/App/learning-tracker/src/components/MainTable.tsx",
            lineNumber: 64,
            columnNumber: 7
        }, this);
    };
    const renderMemoIndicator = (itemId)=>{
        const details = itemDetails[itemId];
        if (!details) return null;
        const ideaCount = details.workIdeas.length;
        const learningCount = details.learnings.length;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                ideaCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full",
                    children: [
                        "💡",
                        ideaCount
                    ]
                }, void 0, true, {
                    fileName: "[project]/App/learning-tracker/src/components/MainTable.tsx",
                    lineNumber: 92,
                    columnNumber: 11
                }, this),
                learningCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "px-2 py-1 text-xs bg-purple-100 text-purple-800 rounded-full",
                    children: [
                        "📚",
                        learningCount
                    ]
                }, void 0, true, {
                    fileName: "[project]/App/learning-tracker/src/components/MainTable.tsx",
                    lineNumber: 97,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/App/learning-tracker/src/components/MainTable.tsx",
            lineNumber: 90,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 flex flex-col bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 border-b border-border",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold mb-2",
                        children: "学習記録"
                    }, void 0, false, {
                        fileName: "[project]/App/learning-tracker/src/components/MainTable.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-foreground opacity-70",
                        children: selectedMonth === 'uncategorized' ? '未分類のアイテム' : `${selectedMonth.replace('-', '年')}月の記録`
                    }, void 0, false, {
                        fileName: "[project]/App/learning-tracker/src/components/MainTable.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/App/learning-tracker/src/components/MainTable.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "min-w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-12 gap-4 p-4 border-b border-border bg-card sticky top-0 z-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-1 text-sm font-medium",
                                    children: "種別"
                                }, void 0, false, {
                                    fileName: "[project]/App/learning-tracker/src/components/MainTable.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-3 text-sm font-medium",
                                    children: "タイトル・作者"
                                }, void 0, false, {
                                    fileName: "[project]/App/learning-tracker/src/components/MainTable.tsx",
                                    lineNumber: 121,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-1 text-sm font-medium",
                                    children: "評価"
                                }, void 0, false, {
                                    fileName: "[project]/App/learning-tracker/src/components/MainTable.tsx",
                                    lineNumber: 122,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-3 text-sm font-medium",
                                    children: "ひと言まとめ"
                                }, void 0, false, {
                                    fileName: "[project]/App/learning-tracker/src/components/MainTable.tsx",
                                    lineNumber: 123,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-2 text-sm font-medium",
                                    children: "タグ"
                                }, void 0, false, {
                                    fileName: "[project]/App/learning-tracker/src/components/MainTable.tsx",
                                    lineNumber: 124,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-1 text-sm font-medium",
                                    children: "進捗"
                                }, void 0, false, {
                                    fileName: "[project]/App/learning-tracker/src/components/MainTable.tsx",
                                    lineNumber: 125,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-1 text-sm font-medium",
                                    children: "メモ"
                                }, void 0, false, {
                                    fileName: "[project]/App/learning-tracker/src/components/MainTable.tsx",
                                    lineNumber: 126,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/App/learning-tracker/src/components/MainTable.tsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "divide-y divide-border",
                            children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `grid grid-cols-12 gap-4 p-4 hover:bg-card transition-colors cursor-pointer ${selectedItem === item.id ? 'bg-card ring-2 ring-accent-purple ring-opacity-50' : ''}`,
                                    onClick: ()=>onItemSelect(selectedItem === item.id ? null : item.id),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "col-span-1 flex items-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    getKindIcon(item.kind),
                                                    item.amazonUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "text-orange-400 hover:text-orange-300 transition-colors",
                                                        onClick: (e)=>{
                                                            e.stopPropagation();
                                                            window.open(item.amazonUrl, '_blank');
                                                        },
                                                        title: "Amazon",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                            size: 14
                                                        }, void 0, false, {
                                                            fileName: "[project]/App/learning-tracker/src/components/MainTable.tsx",
                                                            lineNumber: 152,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/App/learning-tracker/src/components/MainTable.tsx",
                                                        lineNumber: 144,
                                                        columnNumber: 23
                                                    }, this),
                                                    item.notebooklmUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "text-green-400 hover:text-green-300 transition-colors",
                                                        onClick: (e)=>{
                                                            e.stopPropagation();
                                                            window.open(item.notebooklmUrl, '_blank');
                                                        },
                                                        title: "NotebookLM",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                            size: 14
                                                        }, void 0, false, {
                                                            fileName: "[project]/App/learning-tracker/src/components/MainTable.tsx",
                                                            lineNumber: 164,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/App/learning-tracker/src/components/MainTable.tsx",
                                                        lineNumber: 156,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/App/learning-tracker/src/components/MainTable.tsx",
                                                lineNumber: 141,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/App/learning-tracker/src/components/MainTable.tsx",
                                            lineNumber: 140,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "col-span-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-medium text-foreground mb-1 line-clamp-1",
                                                    children: item.title
                                                }, void 0, false, {
                                                    fileName: "[project]/App/learning-tracker/src/components/MainTable.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-foreground opacity-70",
                                                    children: item.creators.join(', ')
                                                }, void 0, false, {
                                                    fileName: "[project]/App/learning-tracker/src/components/MainTable.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/App/learning-tracker/src/components/MainTable.tsx",
                                            lineNumber: 171,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "col-span-1 flex items-center",
                                            children: renderRating(item.rating)
                                        }, void 0, false, {
                                            fileName: "[project]/App/learning-tracker/src/components/MainTable.tsx",
                                            lineNumber: 181,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "col-span-3 flex items-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-foreground opacity-90 line-clamp-2",
                                                children: item.oneLiner || '—'
                                            }, void 0, false, {
                                                fileName: "[project]/App/learning-tracker/src/components/MainTable.tsx",
                                                lineNumber: 187,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/App/learning-tracker/src/components/MainTable.tsx",
                                            lineNumber: 186,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "col-span-2 flex items-center",
                                            children: renderTags(item.tags)
                                        }, void 0, false, {
                                            fileName: "[project]/App/learning-tracker/src/components/MainTable.tsx",
                                            lineNumber: 193,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "col-span-1 flex items-center",
                                            children: getStatusBadge(item.status)
                                        }, void 0, false, {
                                            fileName: "[project]/App/learning-tracker/src/components/MainTable.tsx",
                                            lineNumber: 198,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "col-span-1 flex items-center",
                                            children: renderMemoIndicator(item.id)
                                        }, void 0, false, {
                                            fileName: "[project]/App/learning-tracker/src/components/MainTable.tsx",
                                            lineNumber: 203,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, item.id, true, {
                                    fileName: "[project]/App/learning-tracker/src/components/MainTable.tsx",
                                    lineNumber: 132,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/App/learning-tracker/src/components/MainTable.tsx",
                            lineNumber: 130,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/App/learning-tracker/src/components/MainTable.tsx",
                    lineNumber: 117,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/App/learning-tracker/src/components/MainTable.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/App/learning-tracker/src/components/MainTable.tsx",
        lineNumber: 106,
        columnNumber: 5
    }, this);
}
}),
"[project]/App/learning-tracker/src/components/RightDrawer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RightDrawer",
    ()=>RightDrawer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/lucide-react/dist/esm/icons/pen.js [app-ssr] (ecmascript) <export default as Edit2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grip$2d$vertical$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GripVertical$3e$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/lucide-react/dist/esm/icons/grip-vertical.js [app-ssr] (ecmascript) <export default as GripVertical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$src$2f$store$2f$useAppStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/src/store/useAppStore.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function RightDrawer({ itemId, onClose }) {
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('overview');
    const [isEditing, setIsEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const drawerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Zustand store
    const item = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$src$2f$store$2f$useAppStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppStore"])((state)=>state.items.find((i)=>i.id === itemId));
    const itemDetails = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$src$2f$store$2f$useAppStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppStore"])((state)=>state.itemDetails[itemId]);
    const updateWorkIdea = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$src$2f$store$2f$useAppStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppStore"])((state)=>state.updateWorkIdea);
    const deleteWorkIdea = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$src$2f$store$2f$useAppStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppStore"])((state)=>state.deleteWorkIdea);
    const addWorkIdea = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$src$2f$store$2f$useAppStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppStore"])((state)=>state.addWorkIdea);
    const addLearning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$src$2f$store$2f$useAppStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppStore"])((state)=>state.addLearning);
    const deleteLearning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$src$2f$store$2f$useAppStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppStore"])((state)=>state.deleteLearning);
    const updateItemDetails = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$src$2f$store$2f$useAppStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppStore"])((state)=>state.updateItemDetails);
    const tabs = [
        {
            id: 'overview',
            label: '概要',
            icon: '📋'
        },
        {
            id: 'ideas',
            label: 'アイデア',
            icon: '💡'
        },
        {
            id: 'learnings',
            label: '学び',
            icon: '📚'
        },
        {
            id: 'notes',
            label: 'ノート',
            icon: '📝'
        },
        {
            id: 'highlights',
            label: '引用',
            icon: '🔖'
        },
        {
            id: 'links',
            label: 'リンク',
            icon: '🔗'
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleKeyDown = (e)=>{
            if (e.key === 'Escape') {
                onClose();
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return ()=>document.removeEventListener('keydown', handleKeyDown);
    }, [
        onClose
    ]);
    const BulletPointList = ({ points, type, hasCheckboxes = false })=>{
        const handleAddNew = ()=>{
            const text = prompt(`新しい${type === 'ideas' ? 'アイデア' : '学び'}を入力してください:`);
            if (text && text.trim()) {
                if (type === 'ideas') {
                    addWorkIdea(itemId, text.trim());
                } else {
                    addLearning(itemId, text.trim());
                }
            }
        };
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2",
            children: [
                points.map((point)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "group flex items-start gap-3 p-3 rounded-lg border border-border hover:bg-card transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grip$2d$vertical$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GripVertical$3e$__["GripVertical"], {
                                        size: 14,
                                        className: "text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity cursor-grab"
                                    }, void 0, false, {
                                        fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, this),
                                    hasCheckboxes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        checked: point.checked || false,
                                        className: "rounded border-gray-300 text-accent-purple focus:ring-accent-purple focus:ring-offset-0",
                                        onChange: (e)=>{
                                            updateWorkIdea(itemId, point.id, {
                                                checked: e.target.checked
                                            });
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                                        lineNumber: 77,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `text-sm ${point.checked ? 'line-through opacity-60' : ''}`,
                                    children: point.text
                                }, void 0, false, {
                                    fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                                    lineNumber: 88,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "opacity-0 group-hover:opacity-100 p-1 hover:bg-red-100 rounded transition-all",
                                onClick: ()=>{
                                    if (type === 'ideas') {
                                        deleteWorkIdea(itemId, point.id);
                                    } else {
                                        deleteLearning(itemId, point.id);
                                    }
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                    size: 12,
                                    className: "text-red-500"
                                }, void 0, false, {
                                    fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                                    lineNumber: 102,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                                lineNumber: 92,
                                columnNumber: 13
                            }, this)
                        ]
                    }, point.id, true, {
                        fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleAddNew,
                    className: "w-full p-3 border-2 border-dashed border-border hover:border-accent-purple hover:bg-accent-purple hover:bg-opacity-5 rounded-lg transition-colors text-sm text-gray-500 hover:text-accent-purple flex items-center justify-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this),
                        "新しい",
                        type === 'ideas' ? 'アイデア' : '学び',
                        "を追加"
                    ]
                }, void 0, true, {
                    fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                    lineNumber: 106,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
            lineNumber: 71,
            columnNumber: 7
        }, this);
    };
    const HighlightsList = ({ highlights })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                highlights.map((highlight)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 bg-card rounded-lg border border-border",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                                className: "border-l-4 border-accent-purple pl-4 italic text-foreground mb-3",
                                children: [
                                    '"',
                                    highlight.quote,
                                    '"'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this),
                            highlight.source && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-500 mb-2",
                                children: [
                                    "出典: ",
                                    highlight.source
                                ]
                            }, void 0, true, {
                                fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                                lineNumber: 125,
                                columnNumber: 13
                            }, this),
                            highlight.note && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-foreground opacity-80",
                                children: highlight.note
                            }, void 0, false, {
                                fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                                lineNumber: 128,
                                columnNumber: 13
                            }, this),
                            highlight.timestamp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-500 mt-2",
                                children: [
                                    "タイムスタンプ: ",
                                    highlight.timestamp
                                ]
                            }, void 0, true, {
                                fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                                lineNumber: 131,
                                columnNumber: 13
                            }, this)
                        ]
                    }, highlight.id, true, {
                        fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "w-full p-3 border-2 border-dashed border-border hover:border-accent-purple hover:bg-accent-purple hover:bg-opacity-5 rounded-lg transition-colors text-sm text-gray-500 hover:text-accent-purple flex items-center justify-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                            lineNumber: 136,
                            columnNumber: 9
                        }, this),
                        "新しい引用を追加"
                    ]
                }, void 0, true, {
                    fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                    lineNumber: 135,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
            lineNumber: 118,
            columnNumber: 5
        }, this);
    const LinksList = ({ links })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2",
            children: [
                links.map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "group flex items-center gap-3 p-3 bg-card rounded-lg border border-border hover:bg-background transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                size: 16,
                                className: "text-accent-blue flex-shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-medium text-foreground truncate",
                                        children: link.label
                                    }, void 0, false, {
                                        fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                                        lineNumber: 148,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500 truncate",
                                        children: link.url
                                    }, void 0, false, {
                                        fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                                        lineNumber: 149,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                                lineNumber: 147,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>window.open(link.url, '_blank'),
                                className: "opacity-0 group-hover:opacity-100 px-3 py-1 bg-accent-blue text-white text-xs rounded hover:bg-blue-600 transition-all",
                                children: "開く"
                            }, void 0, false, {
                                fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                                lineNumber: 151,
                                columnNumber: 11
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "w-full p-3 border-2 border-dashed border-border hover:border-accent-purple hover:bg-accent-purple hover:bg-opacity-5 rounded-lg transition-colors text-sm text-gray-500 hover:text-accent-purple flex items-center justify-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                            lineNumber: 160,
                            columnNumber: 9
                        }, this),
                        "新しいリンクを追加"
                    ]
                }, void 0, true, {
                    fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                    lineNumber: 159,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
            lineNumber: 143,
            columnNumber: 5
        }, this);
    const renderTabContent = ()=>{
        if (!item || !itemDetails) return null;
        switch(activeTab){
            case 'overview':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold mb-4",
                                children: "基本情報"
                            }, void 0, false, {
                                fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                                lineNumber: 174,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 bg-card rounded-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-500 mb-1",
                                                children: "タイトル"
                                            }, void 0, false, {
                                                fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                                                lineNumber: 177,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-medium",
                                                children: item.title
                                            }, void 0, false, {
                                                fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                                                lineNumber: 178,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                                        lineNumber: 176,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 bg-card rounded-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-500 mb-1",
                                                children: "作者・クリエイター"
                                            }, void 0, false, {
                                                fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                                                lineNumber: 181,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: item.creators.join(', ')
                                            }, void 0, false, {
                                                fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                                                lineNumber: 182,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                                        lineNumber: 180,
                                        columnNumber: 17
                                    }, this),
                                    item.date && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 bg-card rounded-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-500 mb-1",
                                                children: "完了日"
                                            }, void 0, false, {
                                                fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                                                lineNumber: 186,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: new Date(item.date).toLocaleDateString('ja-JP')
                                            }, void 0, false, {
                                                fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                                                lineNumber: 187,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                                        lineNumber: 185,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 bg-card rounded-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-500 mb-1",
                                                children: "評価"
                                            }, void 0, false, {
                                                fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                                                lineNumber: 191,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: item.rating ? `${item.rating}/10` : '未評価'
                                            }, void 0, false, {
                                                fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                                                lineNumber: 192,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                                        lineNumber: 190,
                                        columnNumber: 17
                                    }, this),
                                    item.oneLiner && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 bg-card rounded-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-500 mb-1",
                                                children: "ひと言まとめ"
                                            }, void 0, false, {
                                                fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                                                lineNumber: 196,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: item.oneLiner
                                            }, void 0, false, {
                                                fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                                                lineNumber: 197,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                                        lineNumber: 195,
                                        columnNumber: 19
                                    }, this),
                                    item.tags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 bg-card rounded-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-500 mb-1",
                                                children: "タグ"
                                            }, void 0, false, {
                                                fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                                                lineNumber: 202,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-2 mt-2",
                                                children: item.tags.map((tag, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "px-2 py-1 text-xs bg-accent-purple bg-opacity-20 text-accent-purple rounded-lg",
                                                        children: tag
                                                    }, index, false, {
                                                        fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                                                        lineNumber: 205,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                                                lineNumber: 203,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                                        lineNumber: 201,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                                lineNumber: 175,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                        lineNumber: 173,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                    lineNumber: 172,
                    columnNumber: 11
                }, this);
            case 'ideas':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold",
                                    children: "仕事に生かせそうなネタ"
                                }, void 0, false, {
                                    fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                                    lineNumber: 223,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm text-gray-500",
                                    children: [
                                        itemDetails.workIdeas.length,
                                        "件"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                                    lineNumber: 224,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                            lineNumber: 222,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BulletPointList, {
                            points: itemDetails.workIdeas,
                            type: "ideas",
                            hasCheckboxes: true
                        }, void 0, false, {
                            fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                            lineNumber: 226,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                    lineNumber: 221,
                    columnNumber: 11
                }, this);
            case 'learnings':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold",
                                    children: "学んだこと"
                                }, void 0, false, {
                                    fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                                    lineNumber: 233,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm text-gray-500",
                                    children: [
                                        itemDetails.learnings.length,
                                        "件"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                                    lineNumber: 234,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                            lineNumber: 232,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BulletPointList, {
                            points: itemDetails.learnings,
                            type: "learnings"
                        }, void 0, false, {
                            fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                            lineNumber: 236,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                    lineNumber: 231,
                    columnNumber: 11
                }, this);
            case 'notes':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold",
                                    children: "長文ノート"
                                }, void 0, false, {
                                    fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                                    lineNumber: 243,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsEditing(!isEditing),
                                    className: "flex items-center gap-2 px-3 py-1 text-sm bg-accent-purple text-white rounded hover:bg-purple-600 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                                            lineNumber: 248,
                                            columnNumber: 17
                                        }, this),
                                        isEditing ? '保存' : '編集'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                                    lineNumber: 244,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                            lineNumber: 242,
                            columnNumber: 13
                        }, this),
                        isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            className: "w-full h-96 p-4 bg-card border border-border rounded-lg resize-none font-mono text-sm",
                            defaultValue: itemDetails.longNote,
                            placeholder: "Markdownでノートを記述..."
                        }, void 0, false, {
                            fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                            lineNumber: 253,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 bg-card rounded-lg border border-border",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "prose prose-sm prose-invert max-w-none",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                    className: "whitespace-pre-wrap text-sm leading-relaxed",
                                    children: itemDetails.longNote
                                }, void 0, false, {
                                    fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                                    lineNumber: 261,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                                lineNumber: 260,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                            lineNumber: 259,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                    lineNumber: 241,
                    columnNumber: 11
                }, this);
            case 'highlights':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold",
                                    children: "引用・ハイライト"
                                }, void 0, false, {
                                    fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                                    lineNumber: 273,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm text-gray-500",
                                    children: [
                                        itemDetails.highlights.length,
                                        "件"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                                    lineNumber: 274,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                            lineNumber: 272,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HighlightsList, {
                            highlights: itemDetails.highlights
                        }, void 0, false, {
                            fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                            lineNumber: 276,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                    lineNumber: 271,
                    columnNumber: 11
                }, this);
            case 'links':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold",
                                    children: "関連リンク"
                                }, void 0, false, {
                                    fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                                    lineNumber: 283,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm text-gray-500",
                                    children: [
                                        itemDetails.links.length,
                                        "件"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                                    lineNumber: 284,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                            lineNumber: 282,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LinksList, {
                            links: itemDetails.links
                        }, void 0, false, {
                            fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                            lineNumber: 286,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                    lineNumber: 281,
                    columnNumber: 11
                }, this);
            default:
                return null;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: drawerRef,
        className: "w-96 bg-background border-l border-border h-full flex flex-col animate-drawer-open",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 border-b border-border bg-card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold",
                                children: "詳細情報"
                            }, void 0, false, {
                                fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                                lineNumber: 302,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "p-2 hover:bg-background rounded-lg transition-colors",
                                "aria-label": "閉じる",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                                    lineNumber: 308,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                                lineNumber: 303,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                        lineNumber: 301,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-1",
                        children: tabs.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab(tab.id),
                                className: `flex items-center gap-2 px-3 py-2 text-xs rounded-lg transition-all ${activeTab === tab.id ? 'gradient-accent text-white shadow-sm' : 'text-foreground opacity-70 hover:opacity-100 hover:bg-background'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm",
                                        children: tab.icon
                                    }, void 0, false, {
                                        fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                                        lineNumber: 324,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: tab.label
                                    }, void 0, false, {
                                        fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                                        lineNumber: 325,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, tab.id, true, {
                                fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                                lineNumber: 315,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                        lineNumber: 313,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                lineNumber: 300,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto p-6",
                children: renderTabContent()
            }, void 0, false, {
                fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                lineNumber: 332,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 border-t border-border bg-card",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between text-xs text-gray-500",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                "最終更新: ",
                                new Date(itemDetails.updatedAt).toLocaleDateString('ja-JP')
                            ]
                        }, void 0, true, {
                            fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                            lineNumber: 339,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                "v",
                                itemDetails.version
                            ]
                        }, void 0, true, {
                            fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                            lineNumber: 340,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                    lineNumber: 338,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
                lineNumber: 337,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/App/learning-tracker/src/components/RightDrawer.tsx",
        lineNumber: 295,
        columnNumber: 5
    }, this);
}
}),
"[project]/App/learning-tracker/src/components/CommandPalette.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CommandPalette",
    ()=>CommandPalette
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/lucide-react/dist/esm/icons/upload.js [app-ssr] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/lucide-react/dist/esm/icons/palette.js [app-ssr] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Book$3e$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/lucide-react/dist/esm/icons/book.js [app-ssr] (ecmascript) <export default as Book>");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/lucide-react/dist/esm/icons/video.js [app-ssr] (ecmascript) <export default as Video>");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$command$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Command$3e$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/lucide-react/dist/esm/icons/command.js [app-ssr] (ecmascript) <export default as Command>");
'use client';
;
;
;
function CommandPalette({ isOpen, onClose }) {
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedIndex, setSelectedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const listRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const commands = [
        {
            id: 'new-book',
            label: '新規書籍を追加',
            description: '読書記録を作成します',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Book$3e$__["Book"], {
                size: 16,
                className: "text-blue-400"
            }, void 0, false, {
                fileName: "[project]/App/learning-tracker/src/components/CommandPalette.tsx",
                lineNumber: 42,
                columnNumber: 13
            }, this),
            action: ()=>{
                console.log('新規書籍追加');
                onClose();
            },
            keywords: [
                '新規',
                '書籍',
                '本',
                'book',
                '追加',
                'add'
            ]
        },
        {
            id: 'new-video',
            label: '新規動画を追加',
            description: '動画学習記録を作成します',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                size: 16,
                className: "text-red-400"
            }, void 0, false, {
                fileName: "[project]/App/learning-tracker/src/components/CommandPalette.tsx",
                lineNumber: 53,
                columnNumber: 13
            }, this),
            action: ()=>{
                console.log('新規動画追加');
                onClose();
            },
            keywords: [
                '新規',
                '動画',
                'video',
                '追加',
                'add'
            ]
        },
        {
            id: 'new-article',
            label: '新規記事を追加',
            description: '記事の学習記録を作成します',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                size: 16,
                className: "text-green-400"
            }, void 0, false, {
                fileName: "[project]/App/learning-tracker/src/components/CommandPalette.tsx",
                lineNumber: 64,
                columnNumber: 13
            }, this),
            action: ()=>{
                console.log('新規記事追加');
                onClose();
            },
            keywords: [
                '新規',
                '記事',
                'article',
                '追加',
                'add'
            ]
        },
        {
            id: 'search',
            label: '検索',
            description: '学習記録を検索します',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                size: 16,
                className: "text-gray-400"
            }, void 0, false, {
                fileName: "[project]/App/learning-tracker/src/components/CommandPalette.tsx",
                lineNumber: 75,
                columnNumber: 13
            }, this),
            action: ()=>{
                console.log('検索');
                onClose();
            },
            keywords: [
                '検索',
                'search',
                '探す'
            ]
        },
        {
            id: 'jump-current-month',
            label: '今月にジャンプ',
            description: '現在の月の記録を表示します',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                size: 16,
                className: "text-purple-400"
            }, void 0, false, {
                fileName: "[project]/App/learning-tracker/src/components/CommandPalette.tsx",
                lineNumber: 86,
                columnNumber: 13
            }, this),
            action: ()=>{
                console.log('今月にジャンプ');
                onClose();
            },
            keywords: [
                '今月',
                'current',
                'month',
                'ジャンプ',
                'jump'
            ]
        },
        {
            id: 'jump-january',
            label: '1月にジャンプ',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                size: 16,
                className: "text-purple-400"
            }, void 0, false, {
                fileName: "[project]/App/learning-tracker/src/components/CommandPalette.tsx",
                lineNumber: 96,
                columnNumber: 13
            }, this),
            action: ()=>{
                console.log('1月にジャンプ');
                onClose();
            },
            keywords: [
                '1月',
                'january',
                '一月',
                'ジャンプ',
                'jump'
            ]
        },
        {
            id: 'jump-february',
            label: '2月にジャンプ',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                size: 16,
                className: "text-purple-400"
            }, void 0, false, {
                fileName: "[project]/App/learning-tracker/src/components/CommandPalette.tsx",
                lineNumber: 106,
                columnNumber: 13
            }, this),
            action: ()=>{
                console.log('2月にジャンプ');
                onClose();
            },
            keywords: [
                '2月',
                'february',
                '二月',
                'ジャンプ',
                'jump'
            ]
        },
        {
            id: 'jump-march',
            label: '3月にジャンプ',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                size: 16,
                className: "text-purple-400"
            }, void 0, false, {
                fileName: "[project]/App/learning-tracker/src/components/CommandPalette.tsx",
                lineNumber: 116,
                columnNumber: 13
            }, this),
            action: ()=>{
                console.log('3月にジャンプ');
                onClose();
            },
            keywords: [
                '3月',
                'march',
                '三月',
                'ジャンプ',
                'jump'
            ]
        },
        {
            id: 'export',
            label: 'データをエクスポート',
            description: 'JSON形式でデータを書き出します',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                size: 16,
                className: "text-green-400"
            }, void 0, false, {
                fileName: "[project]/App/learning-tracker/src/components/CommandPalette.tsx",
                lineNumber: 127,
                columnNumber: 13
            }, this),
            action: ()=>{
                console.log('エクスポート');
                onClose();
            },
            keywords: [
                'エクスポート',
                'export',
                '書き出し',
                'download'
            ]
        },
        {
            id: 'import',
            label: 'データをインポート',
            description: 'JSON形式のデータを読み込みます',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                size: 16,
                className: "text-blue-400"
            }, void 0, false, {
                fileName: "[project]/App/learning-tracker/src/components/CommandPalette.tsx",
                lineNumber: 138,
                columnNumber: 13
            }, this),
            action: ()=>{
                console.log('インポート');
                onClose();
            },
            keywords: [
                'インポート',
                'import',
                '読み込み',
                'upload'
            ]
        },
        {
            id: 'theme-toggle',
            label: 'テーマ切替',
            description: 'ダークテーマとライトテーマを切り替えます',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"], {
                size: 16,
                className: "text-yellow-400"
            }, void 0, false, {
                fileName: "[project]/App/learning-tracker/src/components/CommandPalette.tsx",
                lineNumber: 149,
                columnNumber: 13
            }, this),
            action: ()=>{
                console.log('テーマ切替');
                onClose();
            },
            keywords: [
                'テーマ',
                'theme',
                '切替',
                'toggle',
                'ダーク',
                'dark',
                'ライト',
                'light'
            ]
        }
    ];
    const filteredCommands = query ? commands.filter((command)=>{
        const searchTerms = query.toLowerCase().split(' ');
        return searchTerms.every((term)=>command.label.toLowerCase().includes(term) || command.description?.toLowerCase().includes(term) || command.keywords?.some((keyword)=>keyword.toLowerCase().includes(term)));
    }) : commands;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isOpen) {
            setQuery('');
            setSelectedIndex(0);
            setTimeout(()=>inputRef.current?.focus(), 100);
        }
    }, [
        isOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setSelectedIndex(0);
    }, [
        query
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleKeyDown = (e)=>{
            if (!isOpen) return;
            switch(e.key){
                case 'Escape':
                    onClose();
                    break;
                case 'ArrowDown':
                    e.preventDefault();
                    setSelectedIndex((prev)=>prev < filteredCommands.length - 1 ? prev + 1 : 0);
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    setSelectedIndex((prev)=>prev > 0 ? prev - 1 : filteredCommands.length - 1);
                    break;
                case 'Enter':
                    e.preventDefault();
                    if (filteredCommands[selectedIndex]) {
                        filteredCommands[selectedIndex].action();
                    }
                    break;
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return ()=>document.removeEventListener('keydown', handleKeyDown);
    }, [
        isOpen,
        selectedIndex,
        filteredCommands,
        onClose
    ]);
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-[10vh]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-2xl bg-card border border-border rounded-2xl shadow-2xl overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 border-b border-border",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-gray-500",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$command$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Command$3e$__["Command"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/App/learning-tracker/src/components/CommandPalette.tsx",
                                        lineNumber: 223,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm",
                                        children: "コマンドパレット"
                                    }, void 0, false, {
                                        fileName: "[project]/App/learning-tracker/src/components/CommandPalette.tsx",
                                        lineNumber: 224,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/App/learning-tracker/src/components/CommandPalette.tsx",
                                lineNumber: 222,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/App/learning-tracker/src/components/CommandPalette.tsx",
                            lineNumber: 221,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 mt-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                    size: 16,
                                    className: "text-gray-500"
                                }, void 0, false, {
                                    fileName: "[project]/App/learning-tracker/src/components/CommandPalette.tsx",
                                    lineNumber: 228,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    ref: inputRef,
                                    type: "text",
                                    placeholder: "コマンドを検索... (タイプして絞り込み)",
                                    value: query,
                                    onChange: (e)=>setQuery(e.target.value),
                                    className: "flex-1 bg-transparent text-foreground placeholder-gray-500 outline-none text-lg"
                                }, void 0, false, {
                                    fileName: "[project]/App/learning-tracker/src/components/CommandPalette.tsx",
                                    lineNumber: 229,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/App/learning-tracker/src/components/CommandPalette.tsx",
                            lineNumber: 227,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/App/learning-tracker/src/components/CommandPalette.tsx",
                    lineNumber: 220,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: listRef,
                    className: "max-h-96 overflow-y-auto",
                    children: filteredCommands.length > 0 ? filteredCommands.map((command, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: command.action,
                            className: `w-full flex items-center gap-4 p-4 text-left hover:bg-background transition-colors ${index === selectedIndex ? 'bg-background' : ''}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-shrink-0",
                                    children: command.icon
                                }, void 0, false, {
                                    fileName: "[project]/App/learning-tracker/src/components/CommandPalette.tsx",
                                    lineNumber: 254,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-medium text-foreground",
                                            children: command.label
                                        }, void 0, false, {
                                            fileName: "[project]/App/learning-tracker/src/components/CommandPalette.tsx",
                                            lineNumber: 258,
                                            columnNumber: 19
                                        }, this),
                                        command.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-gray-500 truncate",
                                            children: command.description
                                        }, void 0, false, {
                                            fileName: "[project]/App/learning-tracker/src/components/CommandPalette.tsx",
                                            lineNumber: 262,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/App/learning-tracker/src/components/CommandPalette.tsx",
                                    lineNumber: 257,
                                    columnNumber: 17
                                }, this),
                                index === selectedIndex && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-gray-500 bg-background px-2 py-1 rounded border",
                                    children: "Enter"
                                }, void 0, false, {
                                    fileName: "[project]/App/learning-tracker/src/components/CommandPalette.tsx",
                                    lineNumber: 268,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, command.id, true, {
                            fileName: "[project]/App/learning-tracker/src/components/CommandPalette.tsx",
                            lineNumber: 247,
                            columnNumber: 15
                        }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-8 text-center text-gray-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                size: 24,
                                className: "mx-auto mb-3 opacity-50"
                            }, void 0, false, {
                                fileName: "[project]/App/learning-tracker/src/components/CommandPalette.tsx",
                                lineNumber: 276,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "該当するコマンドが見つかりませんでした"
                            }, void 0, false, {
                                fileName: "[project]/App/learning-tracker/src/components/CommandPalette.tsx",
                                lineNumber: 277,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm mt-1",
                                children: "別のキーワードで検索してみてください"
                            }, void 0, false, {
                                fileName: "[project]/App/learning-tracker/src/components/CommandPalette.tsx",
                                lineNumber: 278,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/App/learning-tracker/src/components/CommandPalette.tsx",
                        lineNumber: 275,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/App/learning-tracker/src/components/CommandPalette.tsx",
                    lineNumber: 241,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-3 bg-background border-t border-border",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between text-xs text-gray-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                                className: "px-1.5 py-0.5 bg-card border border-border rounded text-xs",
                                                children: "↑"
                                            }, void 0, false, {
                                                fileName: "[project]/App/learning-tracker/src/components/CommandPalette.tsx",
                                                lineNumber: 288,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                                className: "px-1.5 py-0.5 bg-card border border-border rounded text-xs",
                                                children: "↓"
                                            }, void 0, false, {
                                                fileName: "[project]/App/learning-tracker/src/components/CommandPalette.tsx",
                                                lineNumber: 289,
                                                columnNumber: 17
                                            }, this),
                                            "移動"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/App/learning-tracker/src/components/CommandPalette.tsx",
                                        lineNumber: 287,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                                className: "px-1.5 py-0.5 bg-card border border-border rounded text-xs",
                                                children: "Enter"
                                            }, void 0, false, {
                                                fileName: "[project]/App/learning-tracker/src/components/CommandPalette.tsx",
                                                lineNumber: 293,
                                                columnNumber: 17
                                            }, this),
                                            "実行"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/App/learning-tracker/src/components/CommandPalette.tsx",
                                        lineNumber: 292,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                                className: "px-1.5 py-0.5 bg-card border border-border rounded text-xs",
                                                children: "Esc"
                                            }, void 0, false, {
                                                fileName: "[project]/App/learning-tracker/src/components/CommandPalette.tsx",
                                                lineNumber: 297,
                                                columnNumber: 17
                                            }, this),
                                            "閉じる"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/App/learning-tracker/src/components/CommandPalette.tsx",
                                        lineNumber: 296,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/App/learning-tracker/src/components/CommandPalette.tsx",
                                lineNumber: 286,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    filteredCommands.length,
                                    " 件"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/App/learning-tracker/src/components/CommandPalette.tsx",
                                lineNumber: 301,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/App/learning-tracker/src/components/CommandPalette.tsx",
                        lineNumber: 285,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/App/learning-tracker/src/components/CommandPalette.tsx",
                    lineNumber: 284,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/App/learning-tracker/src/components/CommandPalette.tsx",
            lineNumber: 218,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/App/learning-tracker/src/components/CommandPalette.tsx",
        lineNumber: 217,
        columnNumber: 5
    }, this);
}
}),
"[project]/App/learning-tracker/src/hooks/useKeyboardShortcuts.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useKeyboardShortcuts",
    ()=>useKeyboardShortcuts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
function useKeyboardShortcuts(handlers) {
    const handleKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
        const ctrlKey = isMac ? e.metaKey : e.ctrlKey;
        // Command Palette (Ctrl/Cmd + K)
        if (ctrlKey && e.key === 'k') {
            e.preventDefault();
            handlers.onCommandPalette?.();
            return;
        }
        // New Item (N key, when not in input)
        if (e.key === 'n' || e.key === 'N') {
            const target = e.target;
            if (![
                'INPUT',
                'TEXTAREA',
                'SELECT'
            ].includes(target.tagName)) {
                e.preventDefault();
                handlers.onNewItem?.();
                return;
            }
        }
        // Edit (E key, when not in input)
        if (e.key === 'e' || e.key === 'E') {
            const target = e.target;
            if (![
                'INPUT',
                'TEXTAREA',
                'SELECT'
            ].includes(target.tagName)) {
                e.preventDefault();
                handlers.onEdit?.();
                return;
            }
        }
        // Delete (Del key, when not in input)
        if (e.key === 'Delete') {
            const target = e.target;
            if (![
                'INPUT',
                'TEXTAREA',
                'SELECT'
            ].includes(target.tagName)) {
                e.preventDefault();
                handlers.onDelete?.();
                return;
            }
        }
        // Undo (Ctrl/Cmd + Z)
        if (ctrlKey && e.key === 'z' && !e.shiftKey) {
            e.preventDefault();
            handlers.onUndo?.();
            return;
        }
        // Redo (Ctrl/Cmd + Y or Ctrl/Cmd + Shift + Z)
        if (ctrlKey && e.key === 'y' || ctrlKey && e.key === 'z' && e.shiftKey) {
            e.preventDefault();
            handlers.onRedo?.();
            return;
        }
        // Search (/ key, when not in input)
        if (e.key === '/') {
            const target = e.target;
            if (![
                'INPUT',
                'TEXTAREA',
                'SELECT'
            ].includes(target.tagName)) {
                e.preventDefault();
                handlers.onSearch?.();
                return;
            }
        }
        // Navigation keys
        switch(e.key){
            case 'Escape':
                handlers.onEscape?.();
                break;
            case 'ArrowUp':
                const isInTable = e.target.closest('table, [role="table"]');
                if (isInTable) {
                    e.preventDefault();
                    handlers.onArrowUp?.();
                }
                break;
            case 'ArrowDown':
                const isInTableDown = e.target.closest('table, [role="table"]');
                if (isInTableDown) {
                    e.preventDefault();
                    handlers.onArrowDown?.();
                }
                break;
            case 'Enter':
                const isInTableEnter = e.target.closest('table, [role="table"]');
                if (isInTableEnter && ![
                    'INPUT',
                    'TEXTAREA',
                    'BUTTON'
                ].includes(e.target.tagName)) {
                    e.preventDefault();
                    handlers.onEnter?.();
                }
                break;
        }
    }, [
        handlers
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        document.addEventListener('keydown', handleKeyDown);
        return ()=>document.removeEventListener('keydown', handleKeyDown);
    }, [
        handleKeyDown
    ]);
    // Return helper function to check if key combination is pressed
    const isShortcut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((key, ctrlKey)=>{
        return (e)=>{
            const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
            const isCtrl = isMac ? e.metaKey : e.ctrlKey;
            if (ctrlKey !== undefined && isCtrl !== ctrlKey) return false;
            return e.key === key;
        };
    }, []);
    return {
        isShortcut
    };
}
}),
"[project]/App/learning-tracker/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$src$2f$components$2f$MonthSidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/src/components/MonthSidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$src$2f$components$2f$MainTable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/src/components/MainTable.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$src$2f$components$2f$RightDrawer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/src/components/RightDrawer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$src$2f$components$2f$CommandPalette$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/src/components/CommandPalette.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$src$2f$hooks$2f$useKeyboardShortcuts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/src/hooks/useKeyboardShortcuts.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$src$2f$store$2f$useAppStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/src/store/useAppStore.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
function Home() {
    const [isCommandPaletteOpen, setIsCommandPaletteOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Zustand store
    const selectedItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$src$2f$store$2f$useAppStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppStore"])((state)=>state.selectedItem);
    const selectedMonth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$src$2f$store$2f$useAppStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppStore"])((state)=>state.selectedMonth);
    const setSelectedItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$src$2f$store$2f$useAppStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppStore"])((state)=>state.setSelectedItem);
    const setSelectedMonth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$src$2f$store$2f$useAppStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppStore"])((state)=>state.setSelectedMonth);
    const undo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$src$2f$store$2f$useAppStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppStore"])((state)=>state.undo);
    const redo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$src$2f$store$2f$useAppStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppStore"])((state)=>state.redo);
    const canUndo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$src$2f$store$2f$useAppStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppStore"])((state)=>state.canUndo);
    const canRedo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$src$2f$store$2f$useAppStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppStore"])((state)=>state.canRedo);
    // Keyboard shortcuts
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$src$2f$hooks$2f$useKeyboardShortcuts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useKeyboardShortcuts"])({
        onCommandPalette: ()=>setIsCommandPaletteOpen(true),
        onNewItem: ()=>setIsCommandPaletteOpen(true),
        onEscape: ()=>{
            if (selectedItem) {
                setSelectedItem(null);
            } else if (isCommandPaletteOpen) {
                setIsCommandPaletteOpen(false);
            }
        },
        onUndo: ()=>{
            if (canUndo()) {
                undo();
            }
        },
        onRedo: ()=>{
            if (canRedo()) {
                redo();
            }
        }
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$src$2f$components$2f$MonthSidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MonthSidebar"], {
                selectedMonth: selectedMonth,
                onMonthSelect: setSelectedMonth
            }, void 0, false, {
                fileName: "[project]/App/learning-tracker/src/app/page.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$src$2f$components$2f$MainTable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MainTable"], {
                        selectedMonth: selectedMonth,
                        selectedItem: selectedItem,
                        onItemSelect: setSelectedItem
                    }, void 0, false, {
                        fileName: "[project]/App/learning-tracker/src/app/page.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    selectedItem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$src$2f$components$2f$RightDrawer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RightDrawer"], {
                        itemId: selectedItem,
                        onClose: ()=>setSelectedItem(null)
                    }, void 0, false, {
                        fileName: "[project]/App/learning-tracker/src/app/page.tsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/App/learning-tracker/src/app/page.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$src$2f$components$2f$CommandPalette$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CommandPalette"], {
                isOpen: isCommandPaletteOpen,
                onClose: ()=>setIsCommandPaletteOpen(false)
            }, void 0, false, {
                fileName: "[project]/App/learning-tracker/src/app/page.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/App/learning-tracker/src/app/page.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=App_learning-tracker_src_21fabc43._.js.map
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/App/learning-tracker/node_modules/react-datepicker/dist/index.es.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*!
  react-datepicker v8.7.0
  https://github.com/Hacker0x01/react-datepicker
  Released under the MIT License.
*/ __turbopack_context__.s([
    "CalendarContainer",
    ()=>CalendarContainer,
    "DatePicker",
    ()=>DatePicker,
    "default",
    ()=>DatePicker,
    "getDefaultLocale",
    ()=>getDefaultLocale,
    "registerLocale",
    ()=>registerLocale,
    "setDefaultLocale",
    ()=>setDefaultLocale
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$isSameDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/react-datepicker/node_modules/date-fns/isSameDay.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$isWithinInterval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/react-datepicker/node_modules/date-fns/isWithinInterval.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/react-datepicker/node_modules/date-fns/startOfWeek.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/react-datepicker/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/react-datepicker/node_modules/date-fns/startOfDay.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$endOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/react-datepicker/node_modules/date-fns/endOfDay.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$isEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/react-datepicker/node_modules/date-fns/isEqual.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/react-datepicker/node_modules/date-fns/parseISO.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/react-datepicker/node_modules/date-fns/toDate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/react-datepicker/node_modules/date-fns/differenceInCalendarDays.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$isValid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/react-datepicker/node_modules/date-fns/isValid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$isBefore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/react-datepicker/node_modules/date-fns/isBefore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getISOWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/react-datepicker/node_modules/date-fns/getISOWeek.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$isSameMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/react-datepicker/node_modules/date-fns/isSameMonth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$isSameQuarter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/react-datepicker/node_modules/date-fns/isSameQuarter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/react-datepicker/node_modules/date-fns/getYear.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/react-datepicker/node_modules/date-fns/getMonth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getQuarter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/react-datepicker/node_modules/date-fns/getQuarter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$startOfMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/react-datepicker/node_modules/date-fns/startOfMonth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$startOfQuarter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/react-datepicker/node_modules/date-fns/startOfQuarter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$endOfMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/react-datepicker/node_modules/date-fns/endOfMonth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$setMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/react-datepicker/node_modules/date-fns/setMonth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$setQuarter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/react-datepicker/node_modules/date-fns/setQuarter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$isSameYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/react-datepicker/node_modules/date-fns/isSameYear.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$setHours$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/react-datepicker/node_modules/date-fns/setHours.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getHours$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/react-datepicker/node_modules/date-fns/getHours.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$setMinutes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/react-datepicker/node_modules/date-fns/setMinutes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getMinutes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/react-datepicker/node_modules/date-fns/getMinutes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$setSeconds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/react-datepicker/node_modules/date-fns/setSeconds.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getSeconds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/react-datepicker/node_modules/date-fns/getSeconds.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$addHours$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/react-datepicker/node_modules/date-fns/addHours.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$addMinutes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/react-datepicker/node_modules/date-fns/addMinutes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$addSeconds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/react-datepicker/node_modules/date-fns/addSeconds.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$isAfter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/react-datepicker/node_modules/date-fns/isAfter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$startOfYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/react-datepicker/node_modules/date-fns/startOfYear.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$endOfYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/react-datepicker/node_modules/date-fns/endOfYear.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/react-datepicker/node_modules/date-fns/min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$max$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/react-datepicker/node_modules/date-fns/max.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$subMonths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/react-datepicker/node_modules/date-fns/subMonths.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarMonths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/react-datepicker/node_modules/date-fns/differenceInCalendarMonths.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$subQuarters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/react-datepicker/node_modules/date-fns/subQuarters.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarQuarters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/react-datepicker/node_modules/date-fns/differenceInCalendarQuarters.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$subYears$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/react-datepicker/node_modules/date-fns/subYears.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarYears$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/react-datepicker/node_modules/date-fns/differenceInCalendarYears.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$addMonths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/react-datepicker/node_modules/date-fns/addMonths.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$addQuarters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/react-datepicker/node_modules/date-fns/addQuarters.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$addYears$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/react-datepicker/node_modules/date-fns/addYears.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$isDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/react-datepicker/node_modules/date-fns/isDate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/react-datepicker/node_modules/date-fns/parse.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$endOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/react-datepicker/node_modules/date-fns/endOfWeek.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/react-datepicker/node_modules/date-fns/getDay.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/react-datepicker/node_modules/date-fns/getDate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/react-datepicker/node_modules/date-fns/addDays.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$addWeeks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/react-datepicker/node_modules/date-fns/addWeeks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getTime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/react-datepicker/node_modules/date-fns/getTime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$setYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/react-datepicker/node_modules/date-fns/setYear.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$differenceInDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/react-datepicker/node_modules/date-fns/differenceInDays.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$subWeeks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/react-datepicker/node_modules/date-fns/subWeeks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$subDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/react-datepicker/node_modules/date-fns/subDays.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/react-datepicker/node_modules/@floating-ui/react/dist/floating-ui.react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/App/learning-tracker/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
;
;
;
;
;
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol, Iterator */ var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return _extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    _extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var _assign = function __assign() {
    _assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return _assign.apply(this, arguments);
};
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
var CalendarContainer = function(_a) {
    var _b = _a.showTimeSelectOnly, showTimeSelectOnly = _b === void 0 ? false : _b, _c = _a.showTime, showTime = _c === void 0 ? false : _c, className = _a.className, children = _a.children;
    var ariaLabel = showTimeSelectOnly ? "Choose Time" : "Choose Date".concat(showTime ? " and Time" : "");
    return __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: className,
        role: "dialog",
        "aria-label": ariaLabel,
        "aria-modal": "true"
    }, children);
};
var useDetectClickOutside = function(onClickOutside, ignoreClass) {
    var ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var onClickOutsideRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onClickOutside);
    onClickOutsideRef.current = onClickOutside;
    var handleClickOutside = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDetectClickOutside.useCallback[handleClickOutside]": function(event) {
            var _a;
            var target = event.composed && event.composedPath && event.composedPath().find({
                "useDetectClickOutside.useCallback[handleClickOutside]": function(eventTarget) {
                    return eventTarget instanceof Node;
                }
            }["useDetectClickOutside.useCallback[handleClickOutside]"]) || event.target;
            if (ref.current && !ref.current.contains(target)) {
                if (!(ignoreClass && target instanceof HTMLElement && target.classList.contains(ignoreClass))) {
                    (_a = onClickOutsideRef.current) === null || _a === void 0 ? void 0 : _a.call(onClickOutsideRef, event);
                }
            }
        }
    }["useDetectClickOutside.useCallback[handleClickOutside]"], [
        ignoreClass
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDetectClickOutside.useEffect": function() {
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "useDetectClickOutside.useEffect": function() {
                    document.removeEventListener("mousedown", handleClickOutside);
                }
            })["useDetectClickOutside.useEffect"];
        }
    }["useDetectClickOutside.useEffect"], [
        handleClickOutside
    ]);
    return ref;
};
var ClickOutsideWrapper = function(_a) {
    var children = _a.children, onClickOutside = _a.onClickOutside, className = _a.className, containerRef = _a.containerRef, style = _a.style, ignoreClass = _a.ignoreClass;
    var detectRef = useDetectClickOutside(onClickOutside, ignoreClass);
    return __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: className,
        style: style,
        ref: function(node) {
            detectRef.current = node;
            if (containerRef) {
                containerRef.current = node;
            }
        }
    }, children);
};
var KeyType;
(function(KeyType) {
    KeyType["ArrowUp"] = "ArrowUp";
    KeyType["ArrowDown"] = "ArrowDown";
    KeyType["ArrowLeft"] = "ArrowLeft";
    KeyType["ArrowRight"] = "ArrowRight";
    KeyType["PageUp"] = "PageUp";
    KeyType["PageDown"] = "PageDown";
    KeyType["Home"] = "Home";
    KeyType["End"] = "End";
    KeyType["Enter"] = "Enter";
    KeyType["Space"] = " ";
    KeyType["Tab"] = "Tab";
    KeyType["Escape"] = "Escape";
    KeyType["Backspace"] = "Backspace";
    KeyType["X"] = "x";
})(KeyType || (KeyType = {}));
function getLocaleScope() {
    // Use this cast to avoid messing with users globalThis (like window) and the rest of keys in the globalThis object we don't care about
    var scope = typeof window !== "undefined" ? window : globalThis;
    return scope;
}
var DEFAULT_YEAR_ITEM_NUMBER = 12;
// ** Date Constructors **
function newDate(value) {
    if (value == null) {
        return new Date();
    }
    var d = typeof value === "string" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseISO"])(value) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(value);
    return isValid(d) ? d : new Date();
}
/**
 * Parses a date.
 *
 * @param value - The string representing the Date in a parsable form, e.g., ISO 1861
 * @param dateFormat - The date format.
 * @param locale - The locale.
 * @param strictParsing - The strict parsing flag.
 * @param refDate - The base date to be passed to date-fns parse() function.
 * @returns - The parsed date or null.
 */ function parseDate(value, dateFormat, locale, strictParsing, refDate) {
    if (refDate === void 0) {
        refDate = newDate();
    }
    var localeObject = getLocaleObject(locale) || getLocaleObject(getDefaultLocale());
    var formats = Array.isArray(dateFormat) ? dateFormat : [
        dateFormat
    ];
    for(var _i = 0, formats_1 = formats; _i < formats_1.length; _i++){
        var format_1 = formats_1[_i];
        var parsedDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parse"])(value, format_1, refDate, {
            locale: localeObject,
            useAdditionalWeekYearTokens: true,
            useAdditionalDayOfYearTokens: true
        });
        if (isValid(parsedDate) && (!strictParsing || value === formatDate(parsedDate, format_1, locale))) {
            return parsedDate;
        }
    }
    return null;
}
/**
 * Checks if a given date is valid and not before the minimum date.
 * @param date - The date to be checked.
 * @param minDate - The minimum date allowed. If not provided, defaults to "1/1/1800".
 * @returns A boolean value indicating whether the date is valid and not before the minimum date.
 */ function isValid(date, minDate) {
    /* the fallback date is essential to not break test case
     * `should auto update calendar when the updated date text is after props.minDate`
     * and backward compatibility respectfully
     */ return (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$isValid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValid"])(date) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$isBefore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBefore"])(date, new Date("1/1/1800"));
}
// ** Date Formatting **
/**
 * Formats a date.
 *
 * @param date - The date.
 * @param formatStr - The format string.
 * @param locale - The locale.
 * @returns - The formatted date.
 */ function formatDate(date, formatStr, locale) {
    if (locale === "en") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(date, formatStr, {
            useAdditionalWeekYearTokens: true,
            useAdditionalDayOfYearTokens: true
        });
    }
    var localeObj = locale ? getLocaleObject(locale) : undefined;
    if (locale && !localeObj) {
        console.warn("A locale object was not found for the provided string [\"".concat(locale, "\"]."));
    }
    localeObj = localeObj || getLocaleObject(getDefaultLocale());
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(date, formatStr, {
        locale: localeObj,
        useAdditionalWeekYearTokens: true,
        useAdditionalDayOfYearTokens: true
    });
}
/**
 * Safely formats a date.
 *
 * @param date - The date.
 * @param options - An object containing the dateFormat and locale.
 * @returns - The formatted date or an empty string.
 */ function safeDateFormat(date, _a) {
    var dateFormat = _a.dateFormat, locale = _a.locale;
    var formatStr = Array.isArray(dateFormat) && dateFormat.length > 0 ? dateFormat[0] : dateFormat; // Cast to string because it's impossible to get `string | string[] | undefined` here and typescript doesn't know that
    return date && formatDate(date, formatStr, locale) || "";
}
/**
 * Used as a delimiter to separate two dates when formatting a date range
 */ var DATE_RANGE_SEPARATOR = " - ";
/**
 * Safely formats a date range.
 *
 * @param startDate - The start date.
 * @param endDate - The end date.
 * @param props - The props.
 * @returns - The formatted date range or an empty string.
 */ function safeDateRangeFormat(startDate, endDate, props) {
    if (!startDate && !endDate) {
        return "";
    }
    var formattedStartDate = startDate ? safeDateFormat(startDate, props) : "";
    var formattedEndDate = endDate ? safeDateFormat(endDate, props) : "";
    var dateRangeSeparator = props.rangeSeparator || DATE_RANGE_SEPARATOR;
    return "".concat(formattedStartDate).concat(dateRangeSeparator).concat(formattedEndDate);
}
/**
 * Safely formats multiple dates.
 *
 * @param dates - The dates.
 * @param props - The props.
 * @returns - The formatted dates or an empty string.
 */ function safeMultipleDatesFormat(dates, props) {
    if (!(dates === null || dates === void 0 ? void 0 : dates.length)) {
        return "";
    }
    var formattedFirstDate = dates[0] ? safeDateFormat(dates[0], props) : "";
    if (dates.length === 1) {
        return formattedFirstDate;
    }
    if (dates.length === 2 && dates[1]) {
        var formattedSecondDate = safeDateFormat(dates[1], props);
        return "".concat(formattedFirstDate, ", ").concat(formattedSecondDate);
    }
    var extraDatesCount = dates.length - 1;
    return "".concat(formattedFirstDate, " (+").concat(extraDatesCount, ")");
}
// ** Date Setters **
/**
 * Sets the time for a given date.
 *
 * @param date - The date.
 * @param time - An object containing the hour, minute, and second.
 * @returns - The date with the time set.
 */ function setTime(date, _a) {
    var _b = _a.hour, hour = _b === void 0 ? 0 : _b, _c = _a.minute, minute = _c === void 0 ? 0 : _c, _d = _a.second, second = _d === void 0 ? 0 : _d;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$setHours$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setHours"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$setMinutes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setMinutes"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$setSeconds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setSeconds"])(date, second), minute), hour);
}
/**
 * Gets the week of the year for a given date.
 *
 * @param date - The date.
 * @returns - The week of the year.
 */ function getWeek(date) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getISOWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getISOWeek"])(date);
}
/**
 * Gets the day of the week code for a given day.
 *
 * @param day - The day.
 * @param locale - The locale.
 * @returns - The day of the week code.
 */ function getDayOfWeekCode(day, locale) {
    return formatDate(day, "ddd", locale);
}
// *** Start of ***
/**
 * Gets the start of the day for a given date.
 *
 * @param date - The date.
 * @returns - The start of the day.
 */ function getStartOfDay(date) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfDay"])(date);
}
/**
 * Gets the start of the week for a given date.
 *
 * @param date - The date.
 * @param locale - The locale.
 * @param calendarStartDay - The day the calendar starts on.
 * @returns - The start of the week.
 */ function getStartOfWeek(date, locale, calendarStartDay) {
    var localeObj = locale ? getLocaleObject(locale) : getLocaleObject(getDefaultLocale());
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfWeek"])(date, {
        locale: localeObj,
        weekStartsOn: calendarStartDay
    });
}
/**
 * Gets the start of the month for a given date.
 *
 * @param date - The date.
 * @returns - The start of the month.
 */ function getStartOfMonth(date) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$startOfMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfMonth"])(date);
}
/**
 * Gets the start of the year for a given date.
 *
 * @param date - The date.
 * @returns - The start of the year.
 */ function getStartOfYear(date) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$startOfYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfYear"])(date);
}
/**
 * Gets the start of the quarter for a given date.
 *
 * @param date - The date.
 * @returns - The start of the quarter.
 */ function getStartOfQuarter(date) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$startOfQuarter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfQuarter"])(date);
}
/**
 * Gets the start of today.
 *
 * @returns - The start of today.
 */ function getStartOfToday() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfDay"])(newDate());
}
// *** End of ***
/**
 * Gets the end of the day for a given date.
 *
 * @param date - The date.
 * @returns - The end of the day.
 */ function getEndOfDay(date) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$endOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["endOfDay"])(date);
}
/**
 * Gets the end of the week for a given date.
 *
 * @param date - The date.
 * @returns - The end of the week.
 */ function getEndOfWeek(date) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$endOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["endOfWeek"])(date);
}
/**
 * Gets the end of the month for a given date.
 *
 * @param date - The date.
 * @returns - The end of the month.
 */ function getEndOfMonth(date) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$endOfMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["endOfMonth"])(date);
}
/**
 * Checks if two dates are in the same year.
 *
 * @param date1 - The first date.
 * @param date2 - The second date.
 * @returns - True if the dates are in the same year, false otherwise.
 */ function isSameYear(date1, date2) {
    if (date1 && date2) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$isSameYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSameYear"])(date1, date2);
    } else {
        return !date1 && !date2;
    }
}
/**
 * Checks if two dates are in the same month.
 *
 * @param date1 - The first date.
 * @param date2 - The second date.
 * @returns - True if the dates are in the same month, false otherwise.
 */ function isSameMonth(date1, date2) {
    if (date1 && date2) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$isSameMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSameMonth"])(date1, date2);
    } else {
        return !date1 && !date2;
    }
}
/**
 * Checks if two dates are in the same quarter.
 *
 * @param date1 - The first date.
 * @param date2 - The second date.
 * @returns - True if the dates are in the same quarter, false otherwise.
 */ function isSameQuarter(date1, date2) {
    if (date1 && date2) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$isSameQuarter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSameQuarter"])(date1, date2);
    } else {
        return !date1 && !date2;
    }
}
/**
 * Checks if two dates are on the same day.
 *
 * @param date1 - The first date.
 * @param date2 - The second date.
 * @returns - True if the dates are on the same day, false otherwise.
 */ function isSameDay(date1, date2) {
    if (date1 && date2) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$isSameDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSameDay"])(date1, date2);
    } else {
        return !date1 && !date2;
    }
}
/**
 * Checks if two dates are equal.
 *
 * @param date1 - The first date.
 * @param date2 - The second date.
 * @returns - True if the dates are equal, false otherwise.
 */ function isEqual(date1, date2) {
    if (date1 && date2) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$isEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEqual"])(date1, date2);
    } else {
        return !date1 && !date2;
    }
}
/**
 * Checks if a day is within a date range.
 *
 * @param day - The day to check.
 * @param startDate - The start date of the range.
 * @param endDate - The end date of the range.
 * @returns - True if the day is within the range, false otherwise.
 */ function isDayInRange(day, startDate, endDate) {
    var valid;
    var start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfDay"])(startDate);
    var end = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$endOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["endOfDay"])(endDate);
    try {
        valid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$isWithinInterval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWithinInterval"])(day, {
            start: start,
            end: end
        });
    } catch (err) {
        valid = false;
    }
    return valid;
}
// ** Date Localization **
/**
 * Registers a locale.
 *
 * @param localeName - The name of the locale.
 * @param localeData - The data of the locale.
 */ function registerLocale(localeName, localeData) {
    var scope = getLocaleScope();
    if (!scope.__localeData__) {
        scope.__localeData__ = {};
    }
    scope.__localeData__[localeName] = localeData;
}
/**
 * Sets the default locale.
 *
 * @param localeName - The name of the locale.
 */ function setDefaultLocale(localeName) {
    var scope = getLocaleScope();
    scope.__localeId__ = localeName;
}
/**
 * Gets the default locale.
 *
 * @returns - The default locale.
 */ function getDefaultLocale() {
    var scope = getLocaleScope();
    return scope.__localeId__;
}
/**
 * Gets the locale object.
 *
 * @param localeSpec - The locale specification.
 * @returns - The locale object.
 */ function getLocaleObject(localeSpec) {
    if (typeof localeSpec === "string") {
        // Treat it as a locale name registered by registerLocale
        var scope = getLocaleScope();
        // Null was replaced with undefined to avoid type coercion
        return scope.__localeData__ ? scope.__localeData__[localeSpec] : undefined;
    } else {
        // Treat it as a raw date-fns locale object
        return localeSpec;
    }
}
/**
 * Formats the weekday in a given locale.
 *
 * @param date - The date to format.
 * @param formatFunc - The formatting function.
 * @param locale - The locale to use for formatting.
 * @returns - The formatted weekday.
 */ function getFormattedWeekdayInLocale(date, formatFunc, locale) {
    return formatFunc(formatDate(date, "EEEE", locale));
}
/**
 * Gets the minimum weekday in a given locale.
 *
 * @param date - The date to format.
 * @param locale - The locale to use for formatting.
 * @returns - The minimum weekday.
 */ function getWeekdayMinInLocale(date, locale) {
    return formatDate(date, "EEEEEE", locale);
}
/**
 * Gets the short weekday in a given locale.
 *
 * @param date - The date to format.
 * @param locale - The locale to use for formatting.
 * @returns - The short weekday.
 */ function getWeekdayShortInLocale(date, locale) {
    return formatDate(date, "EEE", locale);
}
/**
 * Gets the month in a given locale.
 *
 * @param month - The month to format.
 * @param locale - The locale to use for formatting.
 * @returns - The month.
 */ function getMonthInLocale(month, locale) {
    return formatDate((0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$setMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setMonth"])(newDate(), month), "LLLL", locale);
}
/**
 * Gets the short month in a given locale.
 *
 * @param month - The month to format.
 * @param locale - The locale to use for formatting.
 * @returns - The short month.
 */ function getMonthShortInLocale(month, locale) {
    return formatDate((0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$setMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setMonth"])(newDate(), month), "LLL", locale);
}
/**
 * Gets the short quarter in a given locale.
 *
 * @param quarter - The quarter to format.
 * @param locale - The locale to use for formatting.
 * @returns - The short quarter.
 */ function getQuarterShortInLocale(quarter, locale) {
    return formatDate((0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$setQuarter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setQuarter"])(newDate(), quarter), "QQQ", locale);
}
/**
 * Checks if a day is disabled.
 *
 * @param day - The day to check.
 * @param options - The options to consider when checking.
 * @returns - Returns true if the day is disabled, false otherwise.
 */ function isDayDisabled(day, _a) {
    var _b = _a === void 0 ? {} : _a, minDate = _b.minDate, maxDate = _b.maxDate, excludeDates = _b.excludeDates, excludeDateIntervals = _b.excludeDateIntervals, includeDates = _b.includeDates, includeDateIntervals = _b.includeDateIntervals, filterDate = _b.filterDate;
    return isOutOfBounds(day, {
        minDate: minDate,
        maxDate: maxDate
    }) || excludeDates && excludeDates.some(function(excludeDate) {
        if (excludeDate instanceof Date) {
            return isSameDay(day, excludeDate);
        } else {
            return isSameDay(day, excludeDate.date);
        }
    }) || excludeDateIntervals && excludeDateIntervals.some(function(_a) {
        var start = _a.start, end = _a.end;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$isWithinInterval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWithinInterval"])(day, {
            start: start,
            end: end
        });
    }) || includeDates && !includeDates.some(function(includeDate) {
        return isSameDay(day, includeDate);
    }) || includeDateIntervals && !includeDateIntervals.some(function(_a) {
        var start = _a.start, end = _a.end;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$isWithinInterval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWithinInterval"])(day, {
            start: start,
            end: end
        });
    }) || filterDate && !filterDate(newDate(day)) || false;
}
/**
 * Checks if a day is excluded.
 *
 * @param day - The day to check.
 * @param options - The options to consider when checking.
 * @returns - Returns true if the day is excluded, false otherwise.
 */ function isDayExcluded(day, _a) {
    var _b = _a === void 0 ? {} : _a, excludeDates = _b.excludeDates, excludeDateIntervals = _b.excludeDateIntervals;
    if (excludeDateIntervals && excludeDateIntervals.length > 0) {
        return excludeDateIntervals.some(function(_a) {
            var start = _a.start, end = _a.end;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$isWithinInterval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWithinInterval"])(day, {
                start: start,
                end: end
            });
        });
    }
    return excludeDates && excludeDates.some(function(excludeDate) {
        var _a;
        if (excludeDate instanceof Date) {
            return isSameDay(day, excludeDate);
        } else {
            return isSameDay(day, (_a = excludeDate.date) !== null && _a !== void 0 ? _a : new Date());
        }
    }) || false;
}
function isMonthDisabled(month, _a) {
    var _b = _a === void 0 ? {} : _a, minDate = _b.minDate, maxDate = _b.maxDate, excludeDates = _b.excludeDates, includeDates = _b.includeDates, filterDate = _b.filterDate;
    return isOutOfBounds(month, {
        minDate: minDate ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$startOfMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfMonth"])(minDate) : undefined,
        maxDate: maxDate ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$endOfMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["endOfMonth"])(maxDate) : undefined
    }) || (excludeDates === null || excludeDates === void 0 ? void 0 : excludeDates.some(function(excludeDate) {
        return isSameMonth(month, excludeDate instanceof Date ? excludeDate : excludeDate.date);
    })) || includeDates && !includeDates.some(function(includeDate) {
        return isSameMonth(month, includeDate);
    }) || filterDate && !filterDate(newDate(month)) || false;
}
function isMonthInRange(startDate, endDate, m, day) {
    var startDateYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getYear"])(startDate);
    var startDateMonth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMonth"])(startDate);
    var endDateYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getYear"])(endDate);
    var endDateMonth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMonth"])(endDate);
    var dayYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getYear"])(day);
    if (startDateYear === endDateYear && startDateYear === dayYear) {
        return startDateMonth <= m && m <= endDateMonth;
    } else if (startDateYear < endDateYear) {
        return dayYear === startDateYear && startDateMonth <= m || dayYear === endDateYear && endDateMonth >= m || dayYear < endDateYear && dayYear > startDateYear;
    }
    return false;
}
/**
 * To check if a date's month and year are disabled/excluded
 * @param date Date to check
 * @returns {boolean} true if month and year are disabled/excluded, false otherwise
 */ function isMonthYearDisabled(date, _a) {
    var _b = _a === void 0 ? {} : _a, minDate = _b.minDate, maxDate = _b.maxDate, excludeDates = _b.excludeDates, includeDates = _b.includeDates;
    return isOutOfBounds(date, {
        minDate: minDate,
        maxDate: maxDate
    }) || excludeDates && excludeDates.some(function(excludedDate) {
        return isSameMonth(excludedDate instanceof Date ? excludedDate : excludedDate.date, date);
    }) || includeDates && !includeDates.some(function(includedDate) {
        return isSameMonth(includedDate, date);
    }) || false;
}
function isQuarterDisabled(quarter, _a) {
    var _b = _a === void 0 ? {} : _a, minDate = _b.minDate, maxDate = _b.maxDate, excludeDates = _b.excludeDates, includeDates = _b.includeDates, filterDate = _b.filterDate;
    return isOutOfBounds(quarter, {
        minDate: minDate,
        maxDate: maxDate
    }) || (excludeDates === null || excludeDates === void 0 ? void 0 : excludeDates.some(function(excludeDate) {
        return isSameQuarter(quarter, excludeDate instanceof Date ? excludeDate : excludeDate.date);
    })) || includeDates && !includeDates.some(function(includeDate) {
        return isSameQuarter(quarter, includeDate);
    }) || filterDate && !filterDate(newDate(quarter)) || false;
}
function isYearInRange(year, start, end) {
    if (!start || !end) return false;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$isValid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValid"])(start) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$isValid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValid"])(end)) return false;
    var startYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getYear"])(start);
    var endYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getYear"])(end);
    return startYear <= year && endYear >= year;
}
function isYearDisabled(year, _a) {
    var _b = _a === void 0 ? {} : _a, minDate = _b.minDate, maxDate = _b.maxDate, excludeDates = _b.excludeDates, includeDates = _b.includeDates, filterDate = _b.filterDate;
    var date = new Date(year, 0, 1);
    return isOutOfBounds(date, {
        minDate: minDate ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$startOfYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfYear"])(minDate) : undefined,
        maxDate: maxDate ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$endOfYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["endOfYear"])(maxDate) : undefined
    }) || (excludeDates === null || excludeDates === void 0 ? void 0 : excludeDates.some(function(excludeDate) {
        return isSameYear(date, excludeDate instanceof Date ? excludeDate : excludeDate.date);
    })) || includeDates && !includeDates.some(function(includeDate) {
        return isSameYear(date, includeDate);
    }) || filterDate && !filterDate(newDate(date)) || false;
}
function isQuarterInRange(startDate, endDate, q, day) {
    var startDateYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getYear"])(startDate);
    var startDateQuarter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getQuarter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getQuarter"])(startDate);
    var endDateYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getYear"])(endDate);
    var endDateQuarter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getQuarter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getQuarter"])(endDate);
    var dayYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getYear"])(day);
    if (startDateYear === endDateYear && startDateYear === dayYear) {
        return startDateQuarter <= q && q <= endDateQuarter;
    } else if (startDateYear < endDateYear) {
        return dayYear === startDateYear && startDateQuarter <= q || dayYear === endDateYear && endDateQuarter >= q || dayYear < endDateYear && dayYear > startDateYear;
    }
    return false;
}
function isOutOfBounds(day, _a) {
    var _b;
    var _c = _a === void 0 ? {} : _a, minDate = _c.minDate, maxDate = _c.maxDate;
    return (_b = minDate && (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["differenceInCalendarDays"])(day, minDate) < 0 || maxDate && (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["differenceInCalendarDays"])(day, maxDate) > 0) !== null && _b !== void 0 ? _b : false;
}
function isTimeInList(time, times) {
    return times.some(function(listTime) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getHours$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHours"])(listTime) === (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getHours$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHours"])(time) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getMinutes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMinutes"])(listTime) === (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getMinutes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMinutes"])(time) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getSeconds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSeconds"])(listTime) === (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getSeconds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSeconds"])(time);
    });
}
function isTimeDisabled(time, _a) {
    var _b = _a === void 0 ? {} : _a, excludeTimes = _b.excludeTimes, includeTimes = _b.includeTimes, filterTime = _b.filterTime;
    return excludeTimes && isTimeInList(time, excludeTimes) || includeTimes && !isTimeInList(time, includeTimes) || filterTime && !filterTime(time) || false;
}
function isTimeInDisabledRange(time, _a) {
    var minTime = _a.minTime, maxTime = _a.maxTime;
    if (!minTime || !maxTime) {
        throw new Error("Both minTime and maxTime props required");
    }
    var baseTime = newDate();
    baseTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$setHours$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setHours"])(baseTime, (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getHours$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHours"])(time));
    baseTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$setMinutes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setMinutes"])(baseTime, (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getMinutes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMinutes"])(time));
    baseTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$setSeconds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setSeconds"])(baseTime, (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getSeconds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSeconds"])(time));
    var min = newDate();
    min = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$setHours$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setHours"])(min, (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getHours$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHours"])(minTime));
    min = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$setMinutes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setMinutes"])(min, (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getMinutes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMinutes"])(minTime));
    min = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$setSeconds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setSeconds"])(min, (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getSeconds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSeconds"])(minTime));
    var max = newDate();
    max = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$setHours$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setHours"])(max, (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getHours$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHours"])(maxTime));
    max = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$setMinutes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setMinutes"])(max, (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getMinutes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMinutes"])(maxTime));
    max = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$setSeconds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setSeconds"])(max, (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getSeconds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSeconds"])(maxTime));
    var valid;
    try {
        valid = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$isWithinInterval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWithinInterval"])(baseTime, {
            start: min,
            end: max
        });
    } catch (err) {
        valid = false;
    }
    return valid;
}
function monthDisabledBefore(day, _a) {
    var _b = _a === void 0 ? {} : _a, minDate = _b.minDate, includeDates = _b.includeDates;
    var previousMonth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$subMonths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subMonths"])(day, 1);
    return minDate && (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarMonths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["differenceInCalendarMonths"])(minDate, previousMonth) > 0 || includeDates && includeDates.every(function(includeDate) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarMonths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["differenceInCalendarMonths"])(includeDate, previousMonth) > 0;
    }) || false;
}
function monthDisabledAfter(day, _a) {
    var _b = _a === void 0 ? {} : _a, maxDate = _b.maxDate, includeDates = _b.includeDates;
    var nextMonth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$addMonths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addMonths"])(day, 1);
    return maxDate && (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarMonths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["differenceInCalendarMonths"])(nextMonth, maxDate) > 0 || includeDates && includeDates.every(function(includeDate) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarMonths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["differenceInCalendarMonths"])(nextMonth, includeDate) > 0;
    }) || false;
}
function quarterDisabledBefore(date, _a) {
    var _b = _a === void 0 ? {} : _a, minDate = _b.minDate, includeDates = _b.includeDates;
    var firstDateOfYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$startOfYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfYear"])(date);
    var previousQuarter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$subQuarters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subQuarters"])(firstDateOfYear, 1);
    return minDate && (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarQuarters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["differenceInCalendarQuarters"])(minDate, previousQuarter) > 0 || includeDates && includeDates.every(function(includeDate) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarQuarters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["differenceInCalendarQuarters"])(includeDate, previousQuarter) > 0;
    }) || false;
}
function quarterDisabledAfter(date, _a) {
    var _b = _a === void 0 ? {} : _a, maxDate = _b.maxDate, includeDates = _b.includeDates;
    var lastDateOfYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$endOfYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["endOfYear"])(date);
    var nextQuarter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$addQuarters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addQuarters"])(lastDateOfYear, 1);
    return maxDate && (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarQuarters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["differenceInCalendarQuarters"])(nextQuarter, maxDate) > 0 || includeDates && includeDates.every(function(includeDate) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarQuarters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["differenceInCalendarQuarters"])(nextQuarter, includeDate) > 0;
    }) || false;
}
function yearDisabledBefore(day, _a) {
    var _b = _a === void 0 ? {} : _a, minDate = _b.minDate, includeDates = _b.includeDates;
    var previousYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$subYears$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subYears"])(day, 1);
    return minDate && (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarYears$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["differenceInCalendarYears"])(minDate, previousYear) > 0 || includeDates && includeDates.every(function(includeDate) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarYears$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["differenceInCalendarYears"])(includeDate, previousYear) > 0;
    }) || false;
}
function yearsDisabledBefore(day, _a) {
    var _b = _a === void 0 ? {} : _a, minDate = _b.minDate, _c = _b.yearItemNumber, yearItemNumber = _c === void 0 ? DEFAULT_YEAR_ITEM_NUMBER : _c;
    var previousYear = getStartOfYear((0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$subYears$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subYears"])(day, yearItemNumber));
    var endPeriod = getYearsPeriod(previousYear, yearItemNumber).endPeriod;
    var minDateYear = minDate && (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getYear"])(minDate);
    return minDateYear && minDateYear > endPeriod || false;
}
function yearDisabledAfter(day, _a) {
    var _b = _a === void 0 ? {} : _a, maxDate = _b.maxDate, includeDates = _b.includeDates;
    var nextYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$addYears$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addYears"])(day, 1);
    return maxDate && (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarYears$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["differenceInCalendarYears"])(nextYear, maxDate) > 0 || includeDates && includeDates.every(function(includeDate) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarYears$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["differenceInCalendarYears"])(nextYear, includeDate) > 0;
    }) || false;
}
function yearsDisabledAfter(day, _a) {
    var _b = _a === void 0 ? {} : _a, maxDate = _b.maxDate, _c = _b.yearItemNumber, yearItemNumber = _c === void 0 ? DEFAULT_YEAR_ITEM_NUMBER : _c;
    var nextYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$addYears$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addYears"])(day, yearItemNumber);
    var startPeriod = getYearsPeriod(nextYear, yearItemNumber).startPeriod;
    var maxDateYear = maxDate && (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getYear"])(maxDate);
    return maxDateYear && maxDateYear < startPeriod || false;
}
function getEffectiveMinDate(_a) {
    var minDate = _a.minDate, includeDates = _a.includeDates;
    if (includeDates && minDate) {
        var minDates = includeDates.filter(function(includeDate) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["differenceInCalendarDays"])(includeDate, minDate) >= 0;
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["min"])(minDates);
    } else if (includeDates) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["min"])(includeDates);
    } else {
        return minDate;
    }
}
function getEffectiveMaxDate(_a) {
    var maxDate = _a.maxDate, includeDates = _a.includeDates;
    if (includeDates && maxDate) {
        var maxDates = includeDates.filter(function(includeDate) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["differenceInCalendarDays"])(includeDate, maxDate) <= 0;
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$max$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(maxDates);
    } else if (includeDates) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$max$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(includeDates);
    } else {
        return maxDate;
    }
}
/**
 * Get a map of highlighted dates with their corresponding classes.
 * @param highlightDates The dates to highlight.
 * @param defaultClassName The default class to use for highlighting.
 * @returns A map with dates as keys and arrays of class names as values.
 */ function getHighLightDaysMap(highlightDates, defaultClassName) {
    var _a;
    if (highlightDates === void 0) {
        highlightDates = [];
    }
    if (defaultClassName === void 0) {
        defaultClassName = "react-datepicker__day--highlighted";
    }
    var dateClasses = new Map();
    for(var i = 0, len = highlightDates.length; i < len; i++){
        var obj = highlightDates[i];
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$isDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDate"])(obj)) {
            var key = formatDate(obj, "MM.dd.yyyy");
            var classNamesArr = dateClasses.get(key) || [];
            if (!classNamesArr.includes(defaultClassName)) {
                classNamesArr.push(defaultClassName);
                dateClasses.set(key, classNamesArr);
            }
        } else if (typeof obj === "object") {
            var keys = Object.keys(obj);
            var className = (_a = keys[0]) !== null && _a !== void 0 ? _a : "";
            var arrOfDates = obj[className];
            if (typeof className === "string" && Array.isArray(arrOfDates)) {
                for(var k = 0, len_1 = arrOfDates.length; k < len_1; k++){
                    var dateK = arrOfDates[k];
                    if (dateK) {
                        var key = formatDate(dateK, "MM.dd.yyyy");
                        var classNamesArr = dateClasses.get(key) || [];
                        if (!classNamesArr.includes(className)) {
                            classNamesArr.push(className);
                            dateClasses.set(key, classNamesArr);
                        }
                    }
                }
            }
        }
    }
    return dateClasses;
}
/**
 * Compare the two arrays
 * @param array1 The first array to compare.
 * @param array2 The second array to compare.
 * @returns true, if the passed arrays are equal, false otherwise.
 */ function arraysAreEqual(array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }
    return array1.every(function(value, index) {
        return value === array2[index];
    });
}
/**
 * Assign the custom class to each date
 * @param holidayDates array of object containing date and name of the holiday
 * @param defaultClassName className to be added.
 * @returns Map containing date as key and array of className and holiday name as value
 */ function getHolidaysMap(holidayDates, defaultClassName) {
    if (holidayDates === void 0) {
        holidayDates = [];
    }
    if (defaultClassName === void 0) {
        defaultClassName = "react-datepicker__day--holidays";
    }
    var dateClasses = new Map();
    holidayDates.forEach(function(holiday) {
        var dateObj = holiday.date, holidayName = holiday.holidayName;
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$isDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDate"])(dateObj)) {
            return;
        }
        var key = formatDate(dateObj, "MM.dd.yyyy");
        var classNamesObj = dateClasses.get(key) || {
            className: "",
            holidayNames: []
        };
        if ("className" in classNamesObj && classNamesObj["className"] === defaultClassName && arraysAreEqual(classNamesObj["holidayNames"], [
            holidayName
        ])) {
            return;
        }
        classNamesObj["className"] = defaultClassName;
        var holidayNameArr = classNamesObj["holidayNames"];
        classNamesObj["holidayNames"] = holidayNameArr ? __spreadArray(__spreadArray([], holidayNameArr, true), [
            holidayName
        ], false) : [
            holidayName
        ];
        dateClasses.set(key, classNamesObj);
    });
    return dateClasses;
}
/**
 * Determines the times to inject after a given start of day, current time, and multiplier.
 * @param startOfDay The start of the day.
 * @param currentTime The current time.
 * @param currentMultiplier The current multiplier.
 * @param intervals The intervals.
 * @param injectedTimes The times to potentially inject.
 * @returns An array of times to inject.
 */ function timesToInjectAfter(startOfDay, currentTime, currentMultiplier, intervals, injectedTimes) {
    var l = injectedTimes.length;
    var times = [];
    for(var i = 0; i < l; i++){
        var injectedTime = startOfDay;
        var injectedTimeValue = injectedTimes[i];
        if (injectedTimeValue) {
            injectedTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$addHours$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addHours"])(injectedTime, (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getHours$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHours"])(injectedTimeValue));
            injectedTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$addMinutes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addMinutes"])(injectedTime, (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getMinutes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMinutes"])(injectedTimeValue));
            injectedTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$addSeconds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addSeconds"])(injectedTime, (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getSeconds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSeconds"])(injectedTimeValue));
        }
        var nextTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$addMinutes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addMinutes"])(startOfDay, (currentMultiplier + 1) * intervals);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$isAfter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAfter"])(injectedTime, currentTime) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$isBefore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBefore"])(injectedTime, nextTime) && injectedTimeValue != undefined) {
            times.push(injectedTimeValue);
        }
    }
    return times;
}
/**
 * Adds a leading zero to a number if it's less than 10.
 * @param i The number to add a leading zero to.
 * @returns The number as a string, with a leading zero if it was less than 10.
 */ function addZero(i) {
    return i < 10 ? "0".concat(i) : "".concat(i);
}
/**
 * Gets the start and end years for a period.
 * @param date The date to get the period for.
 * @param yearItemNumber The number of years in the period. Defaults to DEFAULT_YEAR_ITEM_NUMBER.
 * @returns An object with the start and end years for the period.
 */ function getYearsPeriod(date, yearItemNumber) {
    if (yearItemNumber === void 0) {
        yearItemNumber = DEFAULT_YEAR_ITEM_NUMBER;
    }
    var endPeriod = Math.ceil((0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getYear"])(date) / yearItemNumber) * yearItemNumber;
    var startPeriod = endPeriod - (yearItemNumber - 1);
    return {
        startPeriod: startPeriod,
        endPeriod: endPeriod
    };
}
/**
 * Gets the number of hours in a day.
 * @param d The date to get the number of hours for.
 * @returns The number of hours in the day.
 */ function getHoursInDay(d) {
    var startOfDay = new Date(d.getFullYear(), d.getMonth(), d.getDate());
    var startOfTheNextDay = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 24);
    return Math.round((+startOfTheNextDay - +startOfDay) / 3600000);
}
/**
 * Returns the start of the minute for the given date
 *
 * NOTE: this function is a DST and timezone-safe analog of `date-fns/startOfMinute`
 * do not make changes unless you know what you're doing
 *
 * See comments on https://github.com/Hacker0x01/react-datepicker/pull/4244
 * for more details
 *
 * @param d date
 * @returns start of the minute
 */ function startOfMinute(d) {
    var seconds = d.getSeconds();
    var milliseconds = d.getMilliseconds();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(d.getTime() - seconds * 1000 - milliseconds);
}
/**
 * Returns whether the given dates are in the same minute
 *
 * This function is a DST and timezone-safe analog of `date-fns/isSameMinute`
 *
 * @param d1
 * @param d2
 * @returns
 */ function isSameMinute(d1, d2) {
    return startOfMinute(d1).getTime() === startOfMinute(d2).getTime();
}
/**
 * Returns a new datetime object representing the input date with midnight time
 * @param date The date to get the midnight time for
 * @returns A new datetime object representing the input date with midnight time
 */ function getMidnightDate(date) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$isDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDate"])(date)) {
        throw new Error("Invalid date");
    }
    var dateWithoutTime = new Date(date);
    dateWithoutTime.setHours(0, 0, 0, 0);
    return dateWithoutTime;
}
/**
 * Is the first date before the second one?
 * @param date The date that should be before the other one to return true
 * @param dateToCompare The date to compare with
 * @returns The first date is before the second date
 *
 * Note:
 *  This function considers the mid-night of the given dates for comparison.
 *  It evaluates whether date is before dateToCompare based on their mid-night timestamps.
 */ function isDateBefore(date, dateToCompare) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$isDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDate"])(date) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$isDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDate"])(dateToCompare)) {
        throw new Error("Invalid date received");
    }
    var midnightDate = getMidnightDate(date);
    var midnightDateToCompare = getMidnightDate(dateToCompare);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$isBefore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBefore"])(midnightDate, midnightDateToCompare);
}
/**
 * Checks if the space key was pressed down.
 *
 * @param event - The keyboard event.
 * @returns - Returns true if the space key was pressed down, false otherwise.
 */ function isSpaceKeyDown(event) {
    return event.key === KeyType.Space;
}
/**
 * `InputTime` is a React component that manages time input.
 *
 * @component
 * @example
 * <InputTime timeString="12:00" />
 *
 * @param props - The properties that define the `InputTime` component.
 * @param props.onChange - Function that is called when the date changes.
 * @param props.date - The initial date value.
 * @param props.timeString - The initial time string value.
 * @param props.timeInputLabel - The label for the time input.
 * @param props.customTimeInput - An optional custom time input element.
 *
 * @returns The `InputTime` component.
 */ var InputTime = function(_super) {
    __extends(InputTime, _super);
    function InputTime(props) {
        var _this = _super.call(this, props) || this;
        _this.inputRef = __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createRef();
        _this.onTimeChange = function(time) {
            var _a, _b;
            _this.setState({
                time: time
            });
            var propDate = _this.props.date;
            var isPropDateValid = propDate instanceof Date && !isNaN(+propDate);
            var date = isPropDateValid ? propDate : new Date();
            if (time === null || time === void 0 ? void 0 : time.includes(":")) {
                var _c = time.split(":"), hours = _c[0], minutes = _c[1];
                date.setHours(Number(hours));
                date.setMinutes(Number(minutes));
            }
            (_b = (_a = _this.props).onChange) === null || _b === void 0 ? void 0 : _b.call(_a, date);
        };
        _this.renderTimeInput = function() {
            var time = _this.state.time;
            var _a = _this.props, date = _a.date, timeString = _a.timeString, customTimeInput = _a.customTimeInput;
            if (customTimeInput) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(customTimeInput, {
                    date: date,
                    value: time,
                    onChange: _this.onTimeChange
                });
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("input", {
                type: "time",
                className: "react-datepicker-time__input",
                placeholder: "Time",
                name: "time-input",
                ref: _this.inputRef,
                onClick: function() {
                    var _a;
                    (_a = _this.inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
                },
                required: true,
                value: time,
                onChange: function(event) {
                    _this.onTimeChange(event.target.value || timeString);
                }
            });
        };
        _this.state = {
            time: _this.props.timeString
        };
        return _this;
    }
    InputTime.getDerivedStateFromProps = function(props, state) {
        if (props.timeString !== state.time) {
            return {
                time: props.timeString
            };
        }
        // Return null to indicate no change to state.
        return null;
    };
    InputTime.prototype.render = function() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "react-datepicker__input-time-container"
        }, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "react-datepicker-time__caption"
        }, this.props.timeInputLabel), __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "react-datepicker-time__input-container"
        }, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "react-datepicker-time__input"
        }, this.renderTimeInput())));
    };
    return InputTime;
}(__TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"]);
/**
 * `Day` is a React component that represents a single day in a date picker.
 * It handles the rendering and interaction of a day.
 *
 * @prop ariaLabelPrefixWhenEnabled - Aria label prefix when the day is enabled.
 * @prop ariaLabelPrefixWhenDisabled - Aria label prefix when the day is disabled.
 * @prop disabledKeyboardNavigation - Whether keyboard navigation is disabled.
 * @prop day - The day to be displayed.
 * @prop dayClassName - Function to customize the CSS class of the day.
 * @prop endDate - The end date in a range.
 * @prop highlightDates - Map of dates to be highlighted.
 * @prop holidays - Map of holiday dates.
 * @prop inline - Whether the date picker is inline.
 * @prop shouldFocusDayInline - Whether the day should be focused when date picker is inline.
 * @prop month - The month the day belongs to.
 * @prop onClick - Click event handler.
 * @prop onMouseEnter - Mouse enter event handler.
 * @prop handleOnKeyDown - Key down event handler.
 * @prop usePointerEvent - Whether to use pointer events.
 * @prop preSelection - The date that is currently selected.
 * @prop selected - The selected date.
 * @prop selectingDate - The date currently being selected.
 * @prop selectsEnd - Whether the day can be the end date in a range.
 * @prop selectsStart - Whether the day can be the start date in a range.
 * @prop selectsRange - Whether the day can be in a range.
 * @prop showWeekPicker - Whether to show week picker.
 * @prop showWeekNumber - Whether to show week numbers.
 * @prop selectsDisabledDaysInRange - Whether to select disabled days in a range.
 * @prop selectsMultiple - Whether to allow multiple date selection.
 * @prop selectedDates - Array of selected dates.
 * @prop startDate - The start date in a range.
 * @prop renderDayContents - Function to customize the rendering of the day's contents.
 * @prop containerRef - Ref for the container.
 * @prop excludeDates - Array of dates to be excluded.
 * @prop calendarStartDay - The start day of the week.
 * @prop locale - The locale object.
 * @prop monthShowsDuplicateDaysEnd - Whether to show duplicate days at the end of the month.
 * @prop monthShowsDuplicateDaysStart - Whether to show duplicate days at the start of the month.
 * @prop includeDates - Array of dates to be included.
 * @prop includeDateIntervals - Array of date intervals to be included.
 * @prop minDate - The minimum date that can be selected.
 * @prop maxDate - The maximum date that can be selected.
 *
 * @example
 * ```tsx
 * import React from 'react';
 * import Day from './day';
 *
 * function MyComponent() {
 *   const handleDayClick = (event) => {
 *     console.log('Day clicked', event);
 *   };
 *
 *   const handleDayMouseEnter = (event) => {
 *     console.log('Mouse entered day', event);
 *   };
 *
 *   const renderDayContents = (date) => {
 *     return <div>{date.getDate()}</div>;
 *   };
 *
 *   return (
 *     <Day
 *       day={new Date()}
 *       onClick={handleDayClick}
 *       onMouseEnter={handleDayMouseEnter}
 *       renderDayContents={renderDayContents}
 *     />
 *   );
 * }
 *
 * export default MyComponent;
 * ```
 */ var Day = function(_super) {
    __extends(Day, _super);
    function Day() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dayEl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRef"])();
        _this.handleClick = function(event) {
            if (!_this.isDisabled() && _this.props.onClick) {
                _this.props.onClick(event);
            }
        };
        _this.handleMouseEnter = function(event) {
            if (!_this.isDisabled() && _this.props.onMouseEnter) {
                _this.props.onMouseEnter(event);
            }
        };
        _this.handleOnKeyDown = function(event) {
            var _a, _b;
            var eventKey = event.key;
            if (eventKey === KeyType.Space) {
                event.preventDefault();
                event.key = KeyType.Enter;
            }
            (_b = (_a = _this.props).handleOnKeyDown) === null || _b === void 0 ? void 0 : _b.call(_a, event);
        };
        _this.isSameDay = function(other) {
            return isSameDay(_this.props.day, other);
        };
        _this.isKeyboardSelected = function() {
            var _a;
            if (_this.props.disabledKeyboardNavigation) {
                return false;
            }
            var isSelectedDate = _this.props.selectsMultiple ? (_a = _this.props.selectedDates) === null || _a === void 0 ? void 0 : _a.some(function(date) {
                return _this.isSameDayOrWeek(date);
            }) : _this.isSameDayOrWeek(_this.props.selected);
            var isDisabled = _this.props.preSelection && _this.isDisabled(_this.props.preSelection);
            return !isSelectedDate && _this.isSameDayOrWeek(_this.props.preSelection) && !isDisabled;
        };
        _this.isDisabled = function(day) {
            if (day === void 0) {
                day = _this.props.day;
            }
            // Almost all props previously were passed as this.props w/o proper typing with prop-types
            // after the migration to TS i made it explicit
            return isDayDisabled(day, {
                minDate: _this.props.minDate,
                maxDate: _this.props.maxDate,
                excludeDates: _this.props.excludeDates,
                excludeDateIntervals: _this.props.excludeDateIntervals,
                includeDateIntervals: _this.props.includeDateIntervals,
                includeDates: _this.props.includeDates,
                filterDate: _this.props.filterDate
            });
        };
        _this.isExcluded = function() {
            // Almost all props previously were passed as this.props w/o proper typing with prop-types
            // after the migration to TS i made it explicit
            return isDayExcluded(_this.props.day, {
                excludeDates: _this.props.excludeDates,
                excludeDateIntervals: _this.props.excludeDateIntervals
            });
        };
        _this.isStartOfWeek = function() {
            return isSameDay(_this.props.day, getStartOfWeek(_this.props.day, _this.props.locale, _this.props.calendarStartDay));
        };
        _this.isSameWeek = function(other) {
            return _this.props.showWeekPicker && isSameDay(other, getStartOfWeek(_this.props.day, _this.props.locale, _this.props.calendarStartDay));
        };
        _this.isSameDayOrWeek = function(other) {
            return _this.isSameDay(other) || _this.isSameWeek(other);
        };
        _this.getHighLightedClass = function() {
            var _a = _this.props, day = _a.day, highlightDates = _a.highlightDates;
            if (!highlightDates) {
                return false;
            }
            // Looking for className in the Map of {'day string, 'className'}
            var dayStr = formatDate(day, "MM.dd.yyyy");
            return highlightDates.get(dayStr);
        };
        // Function to return the array containing className associated to the date
        _this.getHolidaysClass = function() {
            var _a;
            var _b = _this.props, day = _b.day, holidays = _b.holidays;
            if (!holidays) {
                // For type consistency no other reasons
                return [
                    undefined
                ];
            }
            var dayStr = formatDate(day, "MM.dd.yyyy");
            // Looking for className in the Map of {day string: {className, holidayName}}
            if (holidays.has(dayStr)) {
                return [
                    (_a = holidays.get(dayStr)) === null || _a === void 0 ? void 0 : _a.className
                ];
            }
            // For type consistency no other reasons
            return [
                undefined
            ];
        };
        _this.isInRange = function() {
            var _a = _this.props, day = _a.day, startDate = _a.startDate, endDate = _a.endDate;
            if (!startDate || !endDate) {
                return false;
            }
            return isDayInRange(day, startDate, endDate);
        };
        _this.isInSelectingRange = function() {
            var _a;
            var _b = _this.props, day = _b.day, selectsStart = _b.selectsStart, selectsEnd = _b.selectsEnd, selectsRange = _b.selectsRange, selectsDisabledDaysInRange = _b.selectsDisabledDaysInRange, startDate = _b.startDate, swapRange = _b.swapRange, endDate = _b.endDate;
            var selectingDate = (_a = _this.props.selectingDate) !== null && _a !== void 0 ? _a : _this.props.preSelection;
            if (!(selectsStart || selectsEnd || selectsRange) || !selectingDate || !selectsDisabledDaysInRange && _this.isDisabled()) {
                return false;
            }
            if (selectsStart && endDate && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$isBefore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBefore"])(selectingDate, endDate) || isEqual(selectingDate, endDate))) {
                return isDayInRange(day, selectingDate, endDate);
            }
            if (selectsEnd && startDate && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$isAfter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAfter"])(selectingDate, startDate) || isEqual(selectingDate, startDate))) {
                return isDayInRange(day, startDate, selectingDate);
            }
            if (selectsRange && startDate && !endDate) {
                if (isEqual(selectingDate, startDate)) {
                    return isDayInRange(day, startDate, selectingDate);
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$isAfter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAfter"])(selectingDate, startDate)) {
                    return isDayInRange(day, startDate, selectingDate);
                }
                if (swapRange && (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$isBefore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBefore"])(selectingDate, startDate)) {
                    return isDayInRange(day, selectingDate, startDate);
                }
            }
            return false;
        };
        _this.isSelectingRangeStart = function() {
            var _a;
            if (!_this.isInSelectingRange()) {
                return false;
            }
            var _b = _this.props, day = _b.day, startDate = _b.startDate, selectsStart = _b.selectsStart, swapRange = _b.swapRange, selectsRange = _b.selectsRange;
            var selectingDate = (_a = _this.props.selectingDate) !== null && _a !== void 0 ? _a : _this.props.preSelection;
            if (selectsStart) {
                return isSameDay(day, selectingDate);
            }
            if (selectsRange && swapRange && startDate && selectingDate) {
                return isSameDay(day, (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$isBefore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBefore"])(selectingDate, startDate) ? selectingDate : startDate);
            }
            return isSameDay(day, startDate);
        };
        _this.isSelectingRangeEnd = function() {
            var _a;
            if (!_this.isInSelectingRange()) {
                return false;
            }
            var _b = _this.props, day = _b.day, endDate = _b.endDate, selectsEnd = _b.selectsEnd, selectsRange = _b.selectsRange, swapRange = _b.swapRange, startDate = _b.startDate;
            var selectingDate = (_a = _this.props.selectingDate) !== null && _a !== void 0 ? _a : _this.props.preSelection;
            if (selectsEnd) {
                return isSameDay(day, selectingDate);
            }
            if (selectsRange && swapRange && startDate && selectingDate) {
                return isSameDay(day, (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$isBefore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBefore"])(selectingDate, startDate) ? startDate : selectingDate);
            }
            if (selectsRange) {
                return isSameDay(day, selectingDate);
            }
            return isSameDay(day, endDate);
        };
        _this.isRangeStart = function() {
            var _a = _this.props, day = _a.day, startDate = _a.startDate, endDate = _a.endDate;
            if (!startDate || !endDate) {
                return false;
            }
            return isSameDay(startDate, day);
        };
        _this.isRangeEnd = function() {
            var _a = _this.props, day = _a.day, startDate = _a.startDate, endDate = _a.endDate;
            if (!startDate || !endDate) {
                return false;
            }
            return isSameDay(endDate, day);
        };
        _this.isWeekend = function() {
            var weekday = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDay"])(_this.props.day);
            return weekday === 0 || weekday === 6;
        };
        _this.isAfterMonth = function() {
            return _this.props.month !== undefined && (_this.props.month + 1) % 12 === (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMonth"])(_this.props.day);
        };
        _this.isBeforeMonth = function() {
            return _this.props.month !== undefined && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMonth"])(_this.props.day) + 1) % 12 === _this.props.month;
        };
        _this.isCurrentDay = function() {
            return _this.isSameDay(newDate());
        };
        _this.isSelected = function() {
            var _a;
            if (_this.props.selectsMultiple) {
                return (_a = _this.props.selectedDates) === null || _a === void 0 ? void 0 : _a.some(function(date) {
                    return _this.isSameDayOrWeek(date);
                });
            }
            return _this.isSameDayOrWeek(_this.props.selected);
        };
        _this.getClassNames = function(date) {
            var dayClassName = _this.props.dayClassName ? _this.props.dayClassName(date) : undefined;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("react-datepicker__day", dayClassName, "react-datepicker__day--" + getDayOfWeekCode(_this.props.day), {
                "react-datepicker__day--disabled": _this.isDisabled(),
                "react-datepicker__day--excluded": _this.isExcluded(),
                "react-datepicker__day--selected": _this.isSelected(),
                "react-datepicker__day--keyboard-selected": _this.isKeyboardSelected(),
                "react-datepicker__day--range-start": _this.isRangeStart(),
                "react-datepicker__day--range-end": _this.isRangeEnd(),
                "react-datepicker__day--in-range": _this.isInRange(),
                "react-datepicker__day--in-selecting-range": _this.isInSelectingRange(),
                "react-datepicker__day--selecting-range-start": _this.isSelectingRangeStart(),
                "react-datepicker__day--selecting-range-end": _this.isSelectingRangeEnd(),
                "react-datepicker__day--today": _this.isCurrentDay(),
                "react-datepicker__day--weekend": _this.isWeekend(),
                "react-datepicker__day--outside-month": _this.isAfterMonth() || _this.isBeforeMonth()
            }, _this.getHighLightedClass(), _this.getHolidaysClass());
        };
        _this.getAriaLabel = function() {
            var _a = _this.props, day = _a.day, _b = _a.ariaLabelPrefixWhenEnabled, ariaLabelPrefixWhenEnabled = _b === void 0 ? "Choose" : _b, _c = _a.ariaLabelPrefixWhenDisabled, ariaLabelPrefixWhenDisabled = _c === void 0 ? "Not available" : _c;
            var prefix = _this.isDisabled() || _this.isExcluded() ? ariaLabelPrefixWhenDisabled : ariaLabelPrefixWhenEnabled;
            return "".concat(prefix, " ").concat(formatDate(day, "PPPP", _this.props.locale));
        };
        // A function to return the holiday's name as title's content
        _this.getTitle = function() {
            var _a = _this.props, day = _a.day, _b = _a.holidays, holidays = _b === void 0 ? new Map() : _b, excludeDates = _a.excludeDates;
            var compareDt = formatDate(day, "MM.dd.yyyy");
            var titles = [];
            if (holidays.has(compareDt)) {
                titles.push.apply(titles, holidays.get(compareDt).holidayNames);
            }
            if (_this.isExcluded()) {
                titles.push(excludeDates === null || excludeDates === void 0 ? void 0 : excludeDates.filter(function(excludeDate) {
                    if (excludeDate instanceof Date) {
                        return isSameDay(excludeDate, day);
                    }
                    return isSameDay(excludeDate === null || excludeDate === void 0 ? void 0 : excludeDate.date, day);
                }).map(function(excludeDate) {
                    if (excludeDate instanceof Date) {
                        return undefined;
                    }
                    return excludeDate === null || excludeDate === void 0 ? void 0 : excludeDate.message;
                }));
            }
            // I'm not sure that this is a right output, but all tests are green
            return titles.join(", ");
        };
        _this.getTabIndex = function() {
            var selectedDay = _this.props.selected;
            var preSelectionDay = _this.props.preSelection;
            var tabIndex = !(_this.props.showWeekPicker && (_this.props.showWeekNumber || !_this.isStartOfWeek())) && (_this.isKeyboardSelected() || _this.isSameDay(selectedDay) && isSameDay(preSelectionDay, selectedDay)) ? 0 : -1;
            return tabIndex;
        };
        // various cases when we need to apply focus to the preselected day
        // focus the day on mount/update so that keyboard navigation works while cycling through months with up or down keys (not for prev and next month buttons)
        // prevent focus for these activeElement cases so we don't pull focus from the input as the calendar opens
        _this.handleFocusDay = function() {
            var _a;
            // only do this while the input isn't focused
            // otherwise, typing/backspacing the date manually may steal focus away from the input
            _this.shouldFocusDay() && ((_a = _this.dayEl.current) === null || _a === void 0 ? void 0 : _a.focus({
                preventScroll: true
            }));
        };
        _this.renderDayContents = function() {
            if (_this.props.monthShowsDuplicateDaysEnd && _this.isAfterMonth()) return null;
            if (_this.props.monthShowsDuplicateDaysStart && _this.isBeforeMonth()) return null;
            return _this.props.renderDayContents ? _this.props.renderDayContents((0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDate"])(_this.props.day), _this.props.day) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDate"])(_this.props.day);
        };
        _this.render = function() {
            return(// TODO: Use <option> instead of the "option" role to ensure accessibility across all devices.
            __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                ref: _this.dayEl,
                className: _this.getClassNames(_this.props.day),
                onKeyDown: _this.handleOnKeyDown,
                onClick: _this.handleClick,
                onMouseEnter: !_this.props.usePointerEvent ? _this.handleMouseEnter : undefined,
                onPointerEnter: _this.props.usePointerEvent ? _this.handleMouseEnter : undefined,
                tabIndex: _this.getTabIndex(),
                "aria-label": _this.getAriaLabel(),
                role: "gridcell",
                title: _this.getTitle(),
                "aria-disabled": _this.isDisabled(),
                "aria-current": _this.isCurrentDay() ? "date" : undefined,
                "aria-selected": _this.isSelected() || _this.isInRange()
            }, _this.renderDayContents(), _this.getTitle() !== "" && __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
                className: "overlay"
            }, _this.getTitle())));
        };
        return _this;
    }
    Day.prototype.componentDidMount = function() {
        this.handleFocusDay();
    };
    Day.prototype.componentDidUpdate = function() {
        this.handleFocusDay();
    };
    Day.prototype.shouldFocusDay = function() {
        var shouldFocusDay = false;
        if (this.getTabIndex() === 0 && this.isSameDay(this.props.preSelection)) {
            // there is currently no activeElement and not inline
            if (!document.activeElement || document.activeElement === document.body) {
                shouldFocusDay = true;
            }
            // inline version:
            // do not focus on initial render to prevent autoFocus issue
            // focus after month has changed via keyboard
            if (this.props.inline && !this.props.shouldFocusDayInline) {
                shouldFocusDay = false;
            }
            if (this.isDayActiveElement()) {
                shouldFocusDay = true;
            }
            if (this.isDuplicateDay()) {
                shouldFocusDay = false;
            }
        }
        return shouldFocusDay;
    };
    // the activeElement is in the container, and it is another instance of Day
    Day.prototype.isDayActiveElement = function() {
        var _a, _b, _c;
        return ((_b = (_a = this.props.containerRef) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.contains(document.activeElement)) && ((_c = document.activeElement) === null || _c === void 0 ? void 0 : _c.classList.contains("react-datepicker__day"));
    };
    Day.prototype.isDuplicateDay = function() {
        return(//day is one of the non rendered duplicate days
        this.props.monthShowsDuplicateDaysEnd && this.isAfterMonth() || this.props.monthShowsDuplicateDaysStart && this.isBeforeMonth());
    };
    return Day;
}(__TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"]);
var WeekNumber = function(_super) {
    __extends(WeekNumber, _super);
    function WeekNumber() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.weekNumberEl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRef"])();
        _this.handleClick = function(event) {
            if (_this.props.onClick) {
                _this.props.onClick(event);
            }
        };
        _this.handleOnKeyDown = function(event) {
            var _a, _b;
            var eventKey = event.key;
            if (eventKey === KeyType.Space) {
                event.preventDefault();
                event.key = KeyType.Enter;
            }
            (_b = (_a = _this.props).handleOnKeyDown) === null || _b === void 0 ? void 0 : _b.call(_a, event);
        };
        _this.isKeyboardSelected = function() {
            return !_this.props.disabledKeyboardNavigation && !isSameDay(_this.props.date, _this.props.selected) && isSameDay(_this.props.date, _this.props.preSelection);
        };
        _this.getTabIndex = function() {
            return _this.props.showWeekPicker && _this.props.showWeekNumber && (_this.isKeyboardSelected() || isSameDay(_this.props.date, _this.props.selected) && isSameDay(_this.props.preSelection, _this.props.selected)) ? 0 : -1;
        };
        // various cases when we need to apply focus to the preselected week-number
        // focus the week-number on mount/update so that keyboard navigation works while cycling through months with up or down keys (not for prev and next month buttons)
        // prevent focus for these activeElement cases so we don't pull focus from the input as the calendar opens
        _this.handleFocusWeekNumber = function(prevProps) {
            var shouldFocusWeekNumber = false;
            // only do this while the input isn't focused
            // otherwise, typing/backspacing the date manually may steal focus away from the input
            if (_this.getTabIndex() === 0 && !(prevProps === null || prevProps === void 0 ? void 0 : prevProps.isInputFocused) && isSameDay(_this.props.date, _this.props.preSelection)) {
                // there is currently no activeElement and not inline
                if (!document.activeElement || document.activeElement === document.body) {
                    shouldFocusWeekNumber = true;
                }
                // inline version:
                // do not focus on initial render to prevent autoFocus issue
                // focus after month has changed via keyboard
                if (_this.props.inline && !_this.props.shouldFocusDayInline) {
                    shouldFocusWeekNumber = false;
                }
                // the activeElement is in the container, and it is another instance of WeekNumber
                if (_this.props.containerRef && _this.props.containerRef.current && _this.props.containerRef.current.contains(document.activeElement) && document.activeElement && document.activeElement.classList.contains("react-datepicker__week-number")) {
                    shouldFocusWeekNumber = true;
                }
            }
            shouldFocusWeekNumber && _this.weekNumberEl.current && _this.weekNumberEl.current.focus({
                preventScroll: true
            });
        };
        return _this;
    }
    Object.defineProperty(WeekNumber, "defaultProps", {
        get: function() {
            return {
                ariaLabelPrefix: "week "
            };
        },
        enumerable: false,
        configurable: true
    });
    WeekNumber.prototype.componentDidMount = function() {
        this.handleFocusWeekNumber();
    };
    WeekNumber.prototype.componentDidUpdate = function(prevProps) {
        this.handleFocusWeekNumber(prevProps);
    };
    WeekNumber.prototype.render = function() {
        var _a = this.props, weekNumber = _a.weekNumber, isWeekDisabled = _a.isWeekDisabled, _b = _a.ariaLabelPrefix, ariaLabelPrefix = _b === void 0 ? WeekNumber.defaultProps.ariaLabelPrefix : _b, onClick = _a.onClick;
        var weekNumberClasses = {
            "react-datepicker__week-number": true,
            "react-datepicker__week-number--clickable": !!onClick && !isWeekDisabled,
            "react-datepicker__week-number--selected": !!onClick && isSameDay(this.props.date, this.props.selected)
        };
        return __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            ref: this.weekNumberEl,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(weekNumberClasses),
            "aria-label": "".concat(ariaLabelPrefix, " ").concat(this.props.weekNumber),
            onClick: this.handleClick,
            onKeyDown: this.handleOnKeyDown,
            tabIndex: this.getTabIndex(),
            role: "gridcell"
        }, weekNumber);
    };
    return WeekNumber;
}(__TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"]);
var Week = function(_super) {
    __extends(Week, _super);
    function Week() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isDisabled = function(day) {
            return isDayDisabled(day, {
                minDate: _this.props.minDate,
                maxDate: _this.props.maxDate,
                excludeDates: _this.props.excludeDates,
                excludeDateIntervals: _this.props.excludeDateIntervals,
                includeDateIntervals: _this.props.includeDateIntervals,
                includeDates: _this.props.includeDates,
                filterDate: _this.props.filterDate
            });
        };
        _this.handleDayClick = function(day, event) {
            if (_this.props.onDayClick) {
                _this.props.onDayClick(day, event);
            }
        };
        _this.handleDayMouseEnter = function(day) {
            if (_this.props.onDayMouseEnter) {
                _this.props.onDayMouseEnter(day);
            }
        };
        _this.handleWeekClick = function(day, weekNumber, event) {
            var _a, _b, _c;
            var enabledWeekDay = new Date(day);
            for(var i = 0; i < 7; i++){
                var processingDay = new Date(day);
                processingDay.setDate(processingDay.getDate() + i);
                var isEnabled = !_this.isDisabled(processingDay);
                if (isEnabled) {
                    enabledWeekDay = processingDay;
                    break;
                }
            }
            if (typeof _this.props.onWeekSelect === "function") {
                _this.props.onWeekSelect(enabledWeekDay, weekNumber, event);
            }
            if (_this.props.showWeekPicker) {
                _this.handleDayClick(enabledWeekDay, event);
            }
            if ((_a = _this.props.shouldCloseOnSelect) !== null && _a !== void 0 ? _a : Week.defaultProps.shouldCloseOnSelect) {
                (_c = (_b = _this.props).setOpen) === null || _c === void 0 ? void 0 : _c.call(_b, false);
            }
        };
        _this.formatWeekNumber = function(date) {
            if (_this.props.formatWeekNumber) {
                return _this.props.formatWeekNumber(date);
            }
            return getWeek(date);
        };
        _this.isWeekDisabled = function() {
            var startOfWeek = _this.startOfWeek();
            var endOfWeek = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDays"])(startOfWeek, 6);
            var processingDate = new Date(startOfWeek);
            while(processingDate <= endOfWeek){
                if (!_this.isDisabled(processingDate)) return false;
                processingDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDays"])(processingDate, 1);
            }
            return true;
        };
        _this.renderDays = function() {
            var startOfWeek = _this.startOfWeek();
            var days = [];
            var weekNumber = _this.formatWeekNumber(startOfWeek);
            if (_this.props.showWeekNumber) {
                var onClickAction = _this.props.onWeekSelect || _this.props.showWeekPicker ? _this.handleWeekClick.bind(_this, startOfWeek, weekNumber) : undefined;
                days.push(__TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(WeekNumber, _assign({
                    key: "W"
                }, Week.defaultProps, _this.props, {
                    weekNumber: weekNumber,
                    isWeekDisabled: _this.isWeekDisabled(),
                    date: startOfWeek,
                    onClick: onClickAction
                })));
            }
            return days.concat([
                0,
                1,
                2,
                3,
                4,
                5,
                6
            ].map(function(offset) {
                var day = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDays"])(startOfWeek, offset);
                return __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Day, _assign({}, Week.defaultProps, _this.props, {
                    ariaLabelPrefixWhenEnabled: _this.props.chooseDayAriaLabelPrefix,
                    ariaLabelPrefixWhenDisabled: _this.props.disabledDayAriaLabelPrefix,
                    key: day.valueOf(),
                    day: day,
                    onClick: _this.handleDayClick.bind(_this, day),
                    onMouseEnter: _this.handleDayMouseEnter.bind(_this, day)
                }));
            }));
        };
        _this.startOfWeek = function() {
            return getStartOfWeek(_this.props.day, _this.props.locale, _this.props.calendarStartDay);
        };
        _this.isKeyboardSelected = function() {
            return !_this.props.disabledKeyboardNavigation && !isSameDay(_this.startOfWeek(), _this.props.selected) && isSameDay(_this.startOfWeek(), _this.props.preSelection);
        };
        return _this;
    }
    Object.defineProperty(Week, "defaultProps", {
        get: function() {
            return {
                shouldCloseOnSelect: true
            };
        },
        enumerable: false,
        configurable: true
    });
    Week.prototype.render = function() {
        var weekNumberClasses = {
            "react-datepicker__week": true,
            "react-datepicker__week--selected": isSameDay(this.startOfWeek(), this.props.selected),
            "react-datepicker__week--keyboard-selected": this.isKeyboardSelected()
        };
        var customWeekClassName = this.props.weekClassName ? this.props.weekClassName(this.startOfWeek()) : undefined;
        return __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(weekNumberClasses, customWeekClassName),
            role: "row"
        }, this.renderDays());
    };
    return Week;
}(__TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"]);
var _a;
var FIXED_HEIGHT_STANDARD_WEEK_COUNT = 6;
var MONTH_COLUMNS_LAYOUT = {
    TWO_COLUMNS: "two_columns",
    THREE_COLUMNS: "three_columns",
    FOUR_COLUMNS: "four_columns"
};
var MONTH_COLUMNS = (_a = {}, _a[MONTH_COLUMNS_LAYOUT.TWO_COLUMNS] = {
    grid: [
        [
            0,
            1
        ],
        [
            2,
            3
        ],
        [
            4,
            5
        ],
        [
            6,
            7
        ],
        [
            8,
            9
        ],
        [
            10,
            11
        ]
    ],
    verticalNavigationOffset: 2
}, _a[MONTH_COLUMNS_LAYOUT.THREE_COLUMNS] = {
    grid: [
        [
            0,
            1,
            2
        ],
        [
            3,
            4,
            5
        ],
        [
            6,
            7,
            8
        ],
        [
            9,
            10,
            11
        ]
    ],
    verticalNavigationOffset: 3
}, _a[MONTH_COLUMNS_LAYOUT.FOUR_COLUMNS] = {
    grid: [
        [
            0,
            1,
            2,
            3
        ],
        [
            4,
            5,
            6,
            7
        ],
        [
            8,
            9,
            10,
            11
        ]
    ],
    verticalNavigationOffset: 4
}, _a);
var MONTH_NAVIGATION_HORIZONTAL_OFFSET = 1;
function getMonthColumnsLayout(showFourColumnMonthYearPicker, showTwoColumnMonthYearPicker) {
    if (showFourColumnMonthYearPicker) {
        return MONTH_COLUMNS_LAYOUT.FOUR_COLUMNS;
    }
    if (showTwoColumnMonthYearPicker) {
        return MONTH_COLUMNS_LAYOUT.TWO_COLUMNS;
    }
    return MONTH_COLUMNS_LAYOUT.THREE_COLUMNS;
}
/**
 * `Month` is a React component that represents a month in a calendar.
 * It accepts a `MonthProps` object as props which provides various configurations and event handlers.
 *
 * @prop dayClassName - Function to determine the class name for a day.
 * @prop monthClassName - Function to determine the class name for a month.
 * @prop filterDate - Function to filter dates.
 * @prop formatWeekNumber - Function to format the week number.
 * @prop onDayClick - Function to handle day click events.
 * @prop onDayMouseEnter - Function to handle mouse enter events on a day.
 * @prop onMouseLeave - Function to handle mouse leave events.
 * @prop onWeekSelect - Function to handle week selection.
 * @prop setPreSelection - Function to set pre-selection.
 * @prop setOpen - Function to set open state.
 * @prop renderDayContents - Function to render day contents.
 * @prop renderMonthContent - Function to render month content.
 * @prop renderQuarterContent - Function to render quarter content.
 * @prop handleOnKeyDown - Function to handle key down events.
 * @prop handleOnMonthKeyDown - Function to handle key down events on a month.
 * @prop ariaLabelPrefix - Aria label prefix.
 * @prop chooseDayAriaLabelPrefix - Aria label prefix for choosing a day.
 * @prop disabledDayAriaLabelPrefix - Aria label prefix for disabled day.
 * @prop disabledKeyboardNavigation - Flag to disable keyboard navigation.
 * @prop day - The day.
 * @prop endDate - The end date.
 * @prop orderInDisplay - The order in display.
 * @prop excludeDates - Dates to exclude.
 * @prop excludeDateIntervals - Date intervals to exclude.
 * @prop fixedHeight - Flag to set fixed height.
 * @prop highlightDates - Dates to highlight.
 * @prop holidays - Holidays.
 * @prop includeDates - Dates to include.
 * @prop includeDateIntervals - Date intervals to include.
 * @prop inline - Flag to set inline.
 * @prop shouldFocusDayInline - Flag to set focus on day inline.
 * @prop locale - The locale.
 * @prop maxDate - The maximum date.
 * @prop minDate - The minimum date.
 * @prop usePointerEvent - Flag to use pointer event.
 * @prop peekNextMonth - Flag to peek next month.
 * @prop preSelection - The pre-selection.
 * @prop selected - The selected date.
 * @prop selectingDate - The selecting date.
 * @prop calendarStartDay - The calendar start day.
 * @prop selectsEnd - Flag to select end.
 * @prop selectsStart - Flag to select start.
 * @prop selectsRange - Flag to select range.
 * @prop selectsDisabledDaysInRange - Flag to select disabled days in range.
 * @prop selectsMultiple - Flag to select multiple.
 * @prop selectedDates - The selected dates.
 * @prop showWeekNumbers - Flag to show week numbers.
 * @prop startDate - The start date.
 * @prop shouldCloseOnSelect - Flag to close on select.
 * @prop showMonthYearPicker - Flag to show month year picker.
 * @prop showFullMonthYearPicker - Flag to show full month year picker.
 * @prop showTwoColumnMonthYearPicker - Flag to show two column month year picker.
 * @prop showFourColumnMonthYearPicker - Flag to show four column month year picker.
 * @prop showQuarterYearPicker - Flag to show quarter year picker.
 * @prop showWeekPicker - Flag to show week picker.
 * @prop isInputFocused - Flag to set input focus.
 * @prop weekAriaLabelPrefix - Aria label prefix for week.
 * @prop containerRef - The container reference.
 * @prop monthShowsDuplicateDaysEnd - Flag to show duplicate days at the end of the month.
 * @prop monthShowsDuplicateDaysStart - Flag to show duplicate days at the start of the month.
 *
 * @example
 * ```tsx
 * function App() {
 *  const handleDayClick = (date) => {
 *     console.log('Day clicked: ', date);
 *   };
 *
 *   const handleDayMouseEnter = (date) => {
 *     console.log('Mouse entered on day: ', date);
 *   };
 *
 *   return (
 *     <div>
 *       <Month
 *         day={new Date()}
 *         endDate={new Date()}
 *         onDayClick={handleDayClick}
 *         onDayMouseEnter={handleDayMouseEnter}
 *         disabledKeyboardNavigation={false}
 *         showWeekNumbers={true}
 *         showMonthYearPicker={false}
 *       />
 *     </div>
 *   );
 * }
 * ```
 */ var Month = function(_super) {
    __extends(Month, _super);
    function Month() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.MONTH_REFS = __spreadArray([], Array(12), true).map(function() {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRef"])();
        });
        _this.QUARTER_REFS = __spreadArray([], Array(4), true).map(function() {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRef"])();
        });
        _this.isDisabled = function(day) {
            // Almost all props previously were passed as this.props w/o proper typing with prop-types
            // after the migration to TS i made it explicit
            return isDayDisabled(day, {
                minDate: _this.props.minDate,
                maxDate: _this.props.maxDate,
                excludeDates: _this.props.excludeDates,
                excludeDateIntervals: _this.props.excludeDateIntervals,
                includeDateIntervals: _this.props.includeDateIntervals,
                includeDates: _this.props.includeDates,
                filterDate: _this.props.filterDate
            });
        };
        _this.isExcluded = function(day) {
            // Almost all props previously were passed as this.props w/o proper typing with prop-types
            // after the migration to TS i made it explicit
            return isDayExcluded(day, {
                excludeDates: _this.props.excludeDates,
                excludeDateIntervals: _this.props.excludeDateIntervals
            });
        };
        _this.handleDayClick = function(day, event) {
            var _a, _b;
            (_b = (_a = _this.props).onDayClick) === null || _b === void 0 ? void 0 : _b.call(_a, day, event, _this.props.orderInDisplay);
        };
        _this.handleDayMouseEnter = function(day) {
            var _a, _b;
            (_b = (_a = _this.props).onDayMouseEnter) === null || _b === void 0 ? void 0 : _b.call(_a, day);
        };
        _this.handleMouseLeave = function() {
            var _a, _b;
            (_b = (_a = _this.props).onMouseLeave) === null || _b === void 0 ? void 0 : _b.call(_a);
        };
        _this.isRangeStartMonth = function(m) {
            var _a = _this.props, day = _a.day, startDate = _a.startDate, endDate = _a.endDate;
            if (!startDate || !endDate) {
                return false;
            }
            return isSameMonth((0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$setMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setMonth"])(day, m), startDate);
        };
        _this.isRangeStartQuarter = function(q) {
            var _a = _this.props, day = _a.day, startDate = _a.startDate, endDate = _a.endDate;
            if (!startDate || !endDate) {
                return false;
            }
            return isSameQuarter((0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$setQuarter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setQuarter"])(day, q), startDate);
        };
        _this.isRangeEndMonth = function(m) {
            var _a = _this.props, day = _a.day, startDate = _a.startDate, endDate = _a.endDate;
            if (!startDate || !endDate) {
                return false;
            }
            return isSameMonth((0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$setMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setMonth"])(day, m), endDate);
        };
        _this.isRangeEndQuarter = function(q) {
            var _a = _this.props, day = _a.day, startDate = _a.startDate, endDate = _a.endDate;
            if (!startDate || !endDate) {
                return false;
            }
            return isSameQuarter((0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$setQuarter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setQuarter"])(day, q), endDate);
        };
        _this.isInSelectingRangeMonth = function(m) {
            var _a;
            var _b = _this.props, day = _b.day, selectsStart = _b.selectsStart, selectsEnd = _b.selectsEnd, selectsRange = _b.selectsRange, startDate = _b.startDate, endDate = _b.endDate;
            var selectingDate = (_a = _this.props.selectingDate) !== null && _a !== void 0 ? _a : _this.props.preSelection;
            if (!(selectsStart || selectsEnd || selectsRange) || !selectingDate) {
                return false;
            }
            if (selectsStart && endDate) {
                return isMonthInRange(selectingDate, endDate, m, day);
            }
            if (selectsEnd && startDate) {
                return isMonthInRange(startDate, selectingDate, m, day);
            }
            if (selectsRange && startDate && !endDate) {
                return isMonthInRange(startDate, selectingDate, m, day);
            }
            return false;
        };
        _this.isSelectingMonthRangeStart = function(m) {
            var _a;
            if (!_this.isInSelectingRangeMonth(m)) {
                return false;
            }
            var _b = _this.props, day = _b.day, startDate = _b.startDate, selectsStart = _b.selectsStart;
            var _month = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$setMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setMonth"])(day, m);
            var selectingDate = (_a = _this.props.selectingDate) !== null && _a !== void 0 ? _a : _this.props.preSelection;
            if (selectsStart) {
                return isSameMonth(_month, selectingDate);
            } else {
                return isSameMonth(_month, startDate);
            }
        };
        _this.isSelectingMonthRangeEnd = function(m) {
            var _a;
            if (!_this.isInSelectingRangeMonth(m)) {
                return false;
            }
            var _b = _this.props, day = _b.day, endDate = _b.endDate, selectsEnd = _b.selectsEnd, selectsRange = _b.selectsRange;
            var _month = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$setMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setMonth"])(day, m);
            var selectingDate = (_a = _this.props.selectingDate) !== null && _a !== void 0 ? _a : _this.props.preSelection;
            if (selectsEnd || selectsRange) {
                return isSameMonth(_month, selectingDate);
            } else {
                return isSameMonth(_month, endDate);
            }
        };
        _this.isInSelectingRangeQuarter = function(q) {
            var _a;
            var _b = _this.props, day = _b.day, selectsStart = _b.selectsStart, selectsEnd = _b.selectsEnd, selectsRange = _b.selectsRange, startDate = _b.startDate, endDate = _b.endDate;
            var selectingDate = (_a = _this.props.selectingDate) !== null && _a !== void 0 ? _a : _this.props.preSelection;
            if (!(selectsStart || selectsEnd || selectsRange) || !selectingDate) {
                return false;
            }
            if (selectsStart && endDate) {
                return isQuarterInRange(selectingDate, endDate, q, day);
            }
            if (selectsEnd && startDate) {
                return isQuarterInRange(startDate, selectingDate, q, day);
            }
            if (selectsRange && startDate && !endDate) {
                return isQuarterInRange(startDate, selectingDate, q, day);
            }
            return false;
        };
        _this.isWeekInMonth = function(startOfWeek) {
            var day = _this.props.day;
            var endOfWeek = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDays"])(startOfWeek, 6);
            return isSameMonth(startOfWeek, day) || isSameMonth(endOfWeek, day);
        };
        _this.isCurrentMonth = function(day, m) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getYear"])(day) === (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getYear"])(newDate()) && m === (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMonth"])(newDate());
        };
        _this.isCurrentQuarter = function(day, q) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getYear"])(day) === (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getYear"])(newDate()) && q === (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getQuarter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getQuarter"])(newDate());
        };
        _this.isSelectedMonth = function(day, m, selected) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMonth"])(selected) === m && (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getYear"])(day) === (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getYear"])(selected);
        };
        _this.isSelectMonthInList = function(day, m, selectedDates) {
            return selectedDates.some(function(selectedDate) {
                return _this.isSelectedMonth(day, m, selectedDate);
            });
        };
        _this.isSelectedQuarter = function(day, q, selected) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getQuarter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getQuarter"])(day) === q && (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getYear"])(day) === (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getYear"])(selected);
        };
        _this.isMonthSelected = function() {
            var _a = _this.props, day = _a.day, selected = _a.selected, selectedDates = _a.selectedDates, selectsMultiple = _a.selectsMultiple;
            var monthIdx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMonth"])(day);
            if (selectsMultiple) {
                return selectedDates === null || selectedDates === void 0 ? void 0 : selectedDates.some(function(date) {
                    return _this.isSelectedMonth(day, monthIdx, date);
                });
            }
            return !!selected && _this.isSelectedMonth(day, monthIdx, selected);
        };
        _this.renderWeeks = function() {
            var weeks = [];
            var isFixedHeight = _this.props.fixedHeight;
            var i = 0;
            var breakAfterNextPush = false;
            var currentWeekStart = getStartOfWeek(getStartOfMonth(_this.props.day), _this.props.locale, _this.props.calendarStartDay);
            var isPreSelected = function(preSelection) {
                return _this.props.showWeekPicker ? getStartOfWeek(preSelection, _this.props.locale, _this.props.calendarStartDay) : _this.props.preSelection;
            };
            var isSelected = function(selected) {
                return _this.props.showWeekPicker ? getStartOfWeek(selected, _this.props.locale, _this.props.calendarStartDay) : _this.props.selected;
            };
            var selected = _this.props.selected ? isSelected(_this.props.selected) : undefined;
            var preSelection = _this.props.preSelection ? isPreSelected(_this.props.preSelection) : undefined;
            while(true){
                weeks.push(__TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Week, _assign({}, _this.props, {
                    ariaLabelPrefix: _this.props.weekAriaLabelPrefix,
                    key: i,
                    day: currentWeekStart,
                    month: (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMonth"])(_this.props.day),
                    onDayClick: _this.handleDayClick,
                    onDayMouseEnter: _this.handleDayMouseEnter,
                    selected: selected,
                    preSelection: preSelection,
                    showWeekNumber: _this.props.showWeekNumbers
                })));
                if (breakAfterNextPush) break;
                i++;
                currentWeekStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$addWeeks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addWeeks"])(currentWeekStart, 1);
                // If one of these conditions is true, we will either break on this week
                // or break on the next week
                var isFixedAndFinalWeek = isFixedHeight && i >= FIXED_HEIGHT_STANDARD_WEEK_COUNT;
                var isNonFixedAndOutOfMonth = !isFixedHeight && !_this.isWeekInMonth(currentWeekStart);
                if (isFixedAndFinalWeek || isNonFixedAndOutOfMonth) {
                    if (_this.props.peekNextMonth) {
                        breakAfterNextPush = true;
                    } else {
                        break;
                    }
                }
            }
            return weeks;
        };
        _this.onMonthClick = function(event, m) {
            var _a = _this.isMonthDisabledForLabelDate(m), isDisabled = _a.isDisabled, labelDate = _a.labelDate;
            if (isDisabled) {
                return;
            }
            _this.handleDayClick(getStartOfMonth(labelDate), event);
        };
        _this.onMonthMouseEnter = function(m) {
            var _a = _this.isMonthDisabledForLabelDate(m), isDisabled = _a.isDisabled, labelDate = _a.labelDate;
            if (isDisabled) {
                return;
            }
            _this.handleDayMouseEnter(getStartOfMonth(labelDate));
        };
        _this.handleMonthNavigation = function(newMonth, newDate) {
            var _a, _b, _c, _d;
            (_b = (_a = _this.props).setPreSelection) === null || _b === void 0 ? void 0 : _b.call(_a, newDate);
            (_d = (_c = _this.MONTH_REFS[newMonth]) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 ? void 0 : _d.focus();
        };
        _this.handleKeyboardNavigation = function(event, eventKey, month) {
            var _a;
            var _b = _this.props, selected = _b.selected, preSelection = _b.preSelection, setPreSelection = _b.setPreSelection, minDate = _b.minDate, maxDate = _b.maxDate, showFourColumnMonthYearPicker = _b.showFourColumnMonthYearPicker, showTwoColumnMonthYearPicker = _b.showTwoColumnMonthYearPicker;
            if (!preSelection) return;
            var monthColumnsLayout = getMonthColumnsLayout(showFourColumnMonthYearPicker, showTwoColumnMonthYearPicker);
            var verticalOffset = _this.getVerticalOffset(monthColumnsLayout);
            var monthsGrid = (_a = MONTH_COLUMNS[monthColumnsLayout]) === null || _a === void 0 ? void 0 : _a.grid;
            var calculateNewDateAndMonth = function(eventKey, date, month) {
                var _a, _b;
                var newCalculatedDate = date;
                var newCalculatedMonth = month;
                switch(eventKey){
                    case KeyType.ArrowRight:
                        newCalculatedDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$addMonths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addMonths"])(date, MONTH_NAVIGATION_HORIZONTAL_OFFSET);
                        newCalculatedMonth = month === 11 ? 0 : month + MONTH_NAVIGATION_HORIZONTAL_OFFSET;
                        break;
                    case KeyType.ArrowLeft:
                        newCalculatedDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$subMonths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subMonths"])(date, MONTH_NAVIGATION_HORIZONTAL_OFFSET);
                        newCalculatedMonth = month === 0 ? 11 : month - MONTH_NAVIGATION_HORIZONTAL_OFFSET;
                        break;
                    case KeyType.ArrowUp:
                        newCalculatedDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$subMonths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subMonths"])(date, verticalOffset);
                        newCalculatedMonth = ((_a = monthsGrid === null || monthsGrid === void 0 ? void 0 : monthsGrid[0]) === null || _a === void 0 ? void 0 : _a.includes(month)) ? month + 12 - verticalOffset : month - verticalOffset;
                        break;
                    case KeyType.ArrowDown:
                        newCalculatedDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$addMonths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addMonths"])(date, verticalOffset);
                        newCalculatedMonth = ((_b = monthsGrid === null || monthsGrid === void 0 ? void 0 : monthsGrid[monthsGrid.length - 1]) === null || _b === void 0 ? void 0 : _b.includes(month)) ? month - 12 + verticalOffset : month + verticalOffset;
                        break;
                }
                return {
                    newCalculatedDate: newCalculatedDate,
                    newCalculatedMonth: newCalculatedMonth
                };
            };
            var getNewDateAndMonth = function(eventKey, selectedDate, month) {
                var MAX_ITERATIONS = 40;
                var eventKeyCopy = eventKey;
                var validDateFound = false;
                var iterations = 0;
                var _a = calculateNewDateAndMonth(eventKeyCopy, selectedDate, month), newCalculatedDate = _a.newCalculatedDate, newCalculatedMonth = _a.newCalculatedMonth;
                while(!validDateFound){
                    if (iterations >= MAX_ITERATIONS) {
                        newCalculatedDate = selectedDate;
                        newCalculatedMonth = month;
                        break;
                    }
                    // if minDate exists and the new month is before the minimum month, it will try to find the next available month after
                    if (minDate && newCalculatedDate < minDate) {
                        eventKeyCopy = KeyType.ArrowRight;
                        var obj = calculateNewDateAndMonth(eventKeyCopy, newCalculatedDate, newCalculatedMonth);
                        newCalculatedDate = obj.newCalculatedDate;
                        newCalculatedMonth = obj.newCalculatedMonth;
                    }
                    // if maxDate exists and the new month is after the maximum month, it will try to find the next available month before
                    if (maxDate && newCalculatedDate > maxDate) {
                        eventKeyCopy = KeyType.ArrowLeft;
                        var obj = calculateNewDateAndMonth(eventKeyCopy, newCalculatedDate, newCalculatedMonth);
                        newCalculatedDate = obj.newCalculatedDate;
                        newCalculatedMonth = obj.newCalculatedMonth;
                    }
                    if (isMonthYearDisabled(newCalculatedDate, _this.props)) {
                        var obj = calculateNewDateAndMonth(eventKeyCopy, newCalculatedDate, newCalculatedMonth);
                        newCalculatedDate = obj.newCalculatedDate;
                        newCalculatedMonth = obj.newCalculatedMonth;
                    } else {
                        validDateFound = true;
                    }
                    iterations++;
                }
                return {
                    newCalculatedDate: newCalculatedDate,
                    newCalculatedMonth: newCalculatedMonth
                };
            };
            if (eventKey === KeyType.Enter) {
                if (!_this.isMonthDisabled(month)) {
                    _this.onMonthClick(event, month);
                    setPreSelection === null || setPreSelection === void 0 ? void 0 : setPreSelection(selected);
                }
                return;
            }
            var _c = getNewDateAndMonth(eventKey, preSelection, month), newCalculatedDate = _c.newCalculatedDate, newCalculatedMonth = _c.newCalculatedMonth;
            switch(eventKey){
                case KeyType.ArrowRight:
                case KeyType.ArrowLeft:
                case KeyType.ArrowUp:
                case KeyType.ArrowDown:
                    _this.handleMonthNavigation(newCalculatedMonth, newCalculatedDate);
                    break;
            }
        };
        _this.getVerticalOffset = function(monthColumnsLayout) {
            var _a, _b;
            return (_b = (_a = MONTH_COLUMNS[monthColumnsLayout]) === null || _a === void 0 ? void 0 : _a.verticalNavigationOffset) !== null && _b !== void 0 ? _b : 0;
        };
        _this.onMonthKeyDown = function(event, month) {
            var _a = _this.props, disabledKeyboardNavigation = _a.disabledKeyboardNavigation, handleOnMonthKeyDown = _a.handleOnMonthKeyDown;
            var eventKey = event.key;
            if (eventKey !== KeyType.Tab) {
                // preventDefault on tab event blocks focus change
                event.preventDefault();
            }
            if (!disabledKeyboardNavigation) {
                _this.handleKeyboardNavigation(event, eventKey, month);
            }
            handleOnMonthKeyDown && handleOnMonthKeyDown(event);
        };
        _this.onQuarterClick = function(event, q) {
            var labelDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$setQuarter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setQuarter"])(_this.props.day, q);
            if (isQuarterDisabled(labelDate, _this.props)) {
                return;
            }
            _this.handleDayClick(getStartOfQuarter(labelDate), event);
        };
        _this.onQuarterMouseEnter = function(q) {
            var labelDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$setQuarter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setQuarter"])(_this.props.day, q);
            if (isQuarterDisabled(labelDate, _this.props)) {
                return;
            }
            _this.handleDayMouseEnter(getStartOfQuarter(labelDate));
        };
        _this.handleQuarterNavigation = function(newQuarter, newDate) {
            var _a, _b, _c, _d;
            if (_this.isDisabled(newDate) || _this.isExcluded(newDate)) {
                return;
            }
            (_b = (_a = _this.props).setPreSelection) === null || _b === void 0 ? void 0 : _b.call(_a, newDate);
            (_d = (_c = _this.QUARTER_REFS[newQuarter - 1]) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 ? void 0 : _d.focus();
        };
        _this.onQuarterKeyDown = function(event, quarter) {
            var _a, _b;
            var eventKey = event.key;
            if (!_this.props.disabledKeyboardNavigation) {
                switch(eventKey){
                    case KeyType.Enter:
                        _this.onQuarterClick(event, quarter);
                        (_b = (_a = _this.props).setPreSelection) === null || _b === void 0 ? void 0 : _b.call(_a, _this.props.selected);
                        break;
                    case KeyType.ArrowRight:
                        if (!_this.props.preSelection) {
                            break;
                        }
                        _this.handleQuarterNavigation(quarter === 4 ? 1 : quarter + 1, (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$addQuarters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addQuarters"])(_this.props.preSelection, 1));
                        break;
                    case KeyType.ArrowLeft:
                        if (!_this.props.preSelection) {
                            break;
                        }
                        _this.handleQuarterNavigation(quarter === 1 ? 4 : quarter - 1, (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$subQuarters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subQuarters"])(_this.props.preSelection, 1));
                        break;
                }
            }
        };
        _this.isMonthDisabledForLabelDate = function(month) {
            var _a;
            var _b = _this.props, day = _b.day, minDate = _b.minDate, maxDate = _b.maxDate, excludeDates = _b.excludeDates, includeDates = _b.includeDates;
            var labelDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$setMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setMonth"])(day, month);
            return {
                isDisabled: (_a = (minDate || maxDate || excludeDates || includeDates) && isMonthDisabled(labelDate, _this.props)) !== null && _a !== void 0 ? _a : false,
                labelDate: labelDate
            };
        };
        _this.isMonthDisabled = function(month) {
            var isDisabled = _this.isMonthDisabledForLabelDate(month).isDisabled;
            return isDisabled;
        };
        _this.getMonthClassNames = function(m) {
            var _a = _this.props, day = _a.day, startDate = _a.startDate, endDate = _a.endDate, preSelection = _a.preSelection, monthClassName = _a.monthClassName;
            var _monthClassName = monthClassName ? monthClassName((0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$setMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setMonth"])(day, m)) : undefined;
            var selection = _this.getSelection();
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("react-datepicker__month-text", "react-datepicker__month-".concat(m), _monthClassName, {
                "react-datepicker__month-text--disabled": _this.isMonthDisabled(m),
                "react-datepicker__month-text--selected": selection ? _this.isSelectMonthInList(day, m, selection) : undefined,
                "react-datepicker__month-text--keyboard-selected": !_this.props.disabledKeyboardNavigation && preSelection && _this.isSelectedMonth(day, m, preSelection) && !_this.isMonthSelected() && !_this.isMonthDisabled(m),
                "react-datepicker__month-text--in-selecting-range": _this.isInSelectingRangeMonth(m),
                "react-datepicker__month-text--in-range": startDate && endDate ? isMonthInRange(startDate, endDate, m, day) : undefined,
                "react-datepicker__month-text--range-start": _this.isRangeStartMonth(m),
                "react-datepicker__month-text--range-end": _this.isRangeEndMonth(m),
                "react-datepicker__month-text--selecting-range-start": _this.isSelectingMonthRangeStart(m),
                "react-datepicker__month-text--selecting-range-end": _this.isSelectingMonthRangeEnd(m),
                "react-datepicker__month-text--today": _this.isCurrentMonth(day, m)
            });
        };
        _this.getTabIndex = function(m) {
            if (_this.props.preSelection == null) {
                return "-1";
            }
            var preSelectedMonth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMonth"])(_this.props.preSelection);
            var isPreSelectedMonthDisabled = _this.isMonthDisabledForLabelDate(preSelectedMonth).isDisabled;
            var tabIndex = m === preSelectedMonth && !(isPreSelectedMonthDisabled || _this.props.disabledKeyboardNavigation) ? "0" : "-1";
            return tabIndex;
        };
        _this.getQuarterTabIndex = function(q) {
            if (_this.props.preSelection == null) {
                return "-1";
            }
            var preSelectedQuarter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getQuarter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getQuarter"])(_this.props.preSelection);
            var isCurrentQuarterDisabled = isQuarterDisabled(_this.props.day, _this.props);
            var tabIndex = q === preSelectedQuarter && !(isCurrentQuarterDisabled || _this.props.disabledKeyboardNavigation) ? "0" : "-1";
            return tabIndex;
        };
        _this.getAriaLabel = function(month) {
            var _a = _this.props, _b = _a.chooseDayAriaLabelPrefix, chooseDayAriaLabelPrefix = _b === void 0 ? "Choose" : _b, _c = _a.disabledDayAriaLabelPrefix, disabledDayAriaLabelPrefix = _c === void 0 ? "Not available" : _c, day = _a.day, locale = _a.locale;
            var labelDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$setMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setMonth"])(day, month);
            var prefix = _this.isDisabled(labelDate) || _this.isExcluded(labelDate) ? disabledDayAriaLabelPrefix : chooseDayAriaLabelPrefix;
            return "".concat(prefix, " ").concat(formatDate(labelDate, "MMMM yyyy", locale));
        };
        _this.getQuarterClassNames = function(q) {
            var _a = _this.props, day = _a.day, startDate = _a.startDate, endDate = _a.endDate, selected = _a.selected, minDate = _a.minDate, maxDate = _a.maxDate, excludeDates = _a.excludeDates, includeDates = _a.includeDates, filterDate = _a.filterDate, preSelection = _a.preSelection, disabledKeyboardNavigation = _a.disabledKeyboardNavigation;
            var isDisabled = (minDate || maxDate || excludeDates || includeDates || filterDate) && isQuarterDisabled((0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$setQuarter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setQuarter"])(day, q), _this.props);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("react-datepicker__quarter-text", "react-datepicker__quarter-".concat(q), {
                "react-datepicker__quarter-text--disabled": isDisabled,
                "react-datepicker__quarter-text--selected": selected ? _this.isSelectedQuarter(day, q, selected) : undefined,
                "react-datepicker__quarter-text--keyboard-selected": !disabledKeyboardNavigation && preSelection && _this.isSelectedQuarter(day, q, preSelection) && !isDisabled,
                "react-datepicker__quarter-text--in-selecting-range": _this.isInSelectingRangeQuarter(q),
                "react-datepicker__quarter-text--in-range": startDate && endDate ? isQuarterInRange(startDate, endDate, q, day) : undefined,
                "react-datepicker__quarter-text--range-start": _this.isRangeStartQuarter(q),
                "react-datepicker__quarter-text--range-end": _this.isRangeEndQuarter(q),
                "react-datepicker__quarter-text--today": _this.isCurrentQuarter(day, q)
            });
        };
        _this.getMonthContent = function(m) {
            var _a = _this.props, showFullMonthYearPicker = _a.showFullMonthYearPicker, renderMonthContent = _a.renderMonthContent, locale = _a.locale, day = _a.day;
            var shortMonthText = getMonthShortInLocale(m, locale);
            var fullMonthText = getMonthInLocale(m, locale);
            if (renderMonthContent) {
                return renderMonthContent(m, shortMonthText, fullMonthText, day);
            }
            return showFullMonthYearPicker ? fullMonthText : shortMonthText;
        };
        _this.getQuarterContent = function(q) {
            var _a;
            var _b = _this.props, renderQuarterContent = _b.renderQuarterContent, locale = _b.locale;
            var shortQuarter = getQuarterShortInLocale(q, locale);
            return (_a = renderQuarterContent === null || renderQuarterContent === void 0 ? void 0 : renderQuarterContent(q, shortQuarter)) !== null && _a !== void 0 ? _a : shortQuarter;
        };
        _this.renderMonths = function() {
            var _a;
            var _b = _this.props, showTwoColumnMonthYearPicker = _b.showTwoColumnMonthYearPicker, showFourColumnMonthYearPicker = _b.showFourColumnMonthYearPicker, day = _b.day, selected = _b.selected;
            var monthColumns = (_a = MONTH_COLUMNS[getMonthColumnsLayout(showFourColumnMonthYearPicker, showTwoColumnMonthYearPicker)]) === null || _a === void 0 ? void 0 : _a.grid;
            return monthColumns === null || monthColumns === void 0 ? void 0 : monthColumns.map(function(month, i) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                    className: "react-datepicker__month-wrapper",
                    key: i
                }, month.map(function(m, j) {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                        ref: _this.MONTH_REFS[m],
                        key: j,
                        onClick: function(event) {
                            _this.onMonthClick(event, m);
                        },
                        onKeyDown: function(event) {
                            if (isSpaceKeyDown(event)) {
                                event.preventDefault();
                                event.key = KeyType.Enter;
                            }
                            _this.onMonthKeyDown(event, m);
                        },
                        onMouseEnter: !_this.props.usePointerEvent ? function() {
                            return _this.onMonthMouseEnter(m);
                        } : undefined,
                        onPointerEnter: _this.props.usePointerEvent ? function() {
                            return _this.onMonthMouseEnter(m);
                        } : undefined,
                        tabIndex: Number(_this.getTabIndex(m)),
                        className: _this.getMonthClassNames(m),
                        "aria-disabled": _this.isMonthDisabled(m),
                        role: "option",
                        "aria-label": _this.getAriaLabel(m),
                        "aria-current": _this.isCurrentMonth(day, m) ? "date" : undefined,
                        "aria-selected": selected ? _this.isSelectedMonth(day, m, selected) : undefined
                    }, _this.getMonthContent(m));
                }));
            });
        };
        _this.renderQuarters = function() {
            var _a = _this.props, day = _a.day, selected = _a.selected;
            var quarters = [
                1,
                2,
                3,
                4
            ];
            return __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                className: "react-datepicker__quarter-wrapper"
            }, quarters.map(function(q, j) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                    key: j,
                    ref: _this.QUARTER_REFS[j],
                    role: "option",
                    onClick: function(event) {
                        _this.onQuarterClick(event, q);
                    },
                    onKeyDown: function(event) {
                        _this.onQuarterKeyDown(event, q);
                    },
                    onMouseEnter: !_this.props.usePointerEvent ? function() {
                        return _this.onQuarterMouseEnter(q);
                    } : undefined,
                    onPointerEnter: _this.props.usePointerEvent ? function() {
                        return _this.onQuarterMouseEnter(q);
                    } : undefined,
                    className: _this.getQuarterClassNames(q),
                    "aria-selected": selected ? _this.isSelectedQuarter(day, q, selected) : undefined,
                    tabIndex: Number(_this.getQuarterTabIndex(q)),
                    "aria-current": _this.isCurrentQuarter(day, q) ? "date" : undefined
                }, _this.getQuarterContent(q));
            }));
        };
        _this.getClassNames = function() {
            var _a = _this.props, selectingDate = _a.selectingDate, selectsStart = _a.selectsStart, selectsEnd = _a.selectsEnd, showMonthYearPicker = _a.showMonthYearPicker, showQuarterYearPicker = _a.showQuarterYearPicker, showWeekPicker = _a.showWeekPicker;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("react-datepicker__month", {
                "react-datepicker__month--selecting-range": selectingDate && (selectsStart || selectsEnd)
            }, {
                "react-datepicker__monthPicker": showMonthYearPicker
            }, {
                "react-datepicker__quarterPicker": showQuarterYearPicker
            }, {
                "react-datepicker__weekPicker": showWeekPicker
            });
        };
        return _this;
    }
    Month.prototype.getSelection = function() {
        var _a = this.props, selected = _a.selected, selectedDates = _a.selectedDates, selectsMultiple = _a.selectsMultiple;
        if (selectsMultiple) {
            return selectedDates;
        }
        if (selected) {
            return [
                selected
            ];
        }
        return undefined;
    };
    Month.prototype.render = function() {
        var _a = this.props, showMonthYearPicker = _a.showMonthYearPicker, showQuarterYearPicker = _a.showQuarterYearPicker, day = _a.day, _b = _a.ariaLabelPrefix, ariaLabelPrefix = _b === void 0 ? "Month " : _b;
        var formattedAriaLabelPrefix = ariaLabelPrefix ? ariaLabelPrefix.trim() + " " : "";
        var shouldUseListboxRole = showMonthYearPicker || showQuarterYearPicker;
        if (shouldUseListboxRole) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                className: this.getClassNames(),
                onMouseLeave: !this.props.usePointerEvent ? this.handleMouseLeave : undefined,
                onPointerLeave: this.props.usePointerEvent ? this.handleMouseLeave : undefined,
                "aria-label": "".concat(formattedAriaLabelPrefix).concat(formatDate(day, "MMMM, yyyy", this.props.locale)),
                role: "listbox"
            }, showMonthYearPicker ? this.renderMonths() : this.renderQuarters());
        }
        // For regular calendar view, use table structure
        return __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            role: "table"
        }, this.props.dayNamesHeader && __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            role: "rowgroup"
        }, this.props.dayNamesHeader), __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: this.getClassNames(),
            onMouseLeave: !this.props.usePointerEvent ? this.handleMouseLeave : undefined,
            onPointerLeave: this.props.usePointerEvent ? this.handleMouseLeave : undefined,
            "aria-label": "".concat(formattedAriaLabelPrefix).concat(formatDate(day, "MMMM, yyyy", this.props.locale)),
            role: "rowgroup"
        }, this.renderWeeks()));
    };
    return Month;
}(__TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"]);
var MonthDropdownOptions = function(_super) {
    __extends(MonthDropdownOptions, _super);
    function MonthDropdownOptions() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.monthOptionButtonsRef = {};
        _this.isSelectedMonth = function(i) {
            return _this.props.month === i;
        };
        _this.handleOptionKeyDown = function(i, e) {
            var _a;
            switch(e.key){
                case "Enter":
                    e.preventDefault();
                    _this.onChange(i);
                    break;
                case "Escape":
                    e.preventDefault();
                    _this.props.onCancel();
                    break;
                case "ArrowUp":
                case "ArrowDown":
                    {
                        e.preventDefault();
                        var newMonth = (i + (e.key === "ArrowUp" ? -1 : 1) + _this.props.monthNames.length) % _this.props.monthNames.length;
                        (_a = _this.monthOptionButtonsRef[newMonth]) === null || _a === void 0 ? void 0 : _a.focus();
                        break;
                    }
            }
        };
        _this.renderOptions = function() {
            // Clear refs to prevent memory leaks on re-render
            _this.monthOptionButtonsRef = {};
            return _this.props.monthNames.map(function(month, i) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                    ref: function(el) {
                        _this.monthOptionButtonsRef[i] = el;
                        if (_this.isSelectedMonth(i)) {
                            el === null || el === void 0 ? void 0 : el.focus();
                        }
                    },
                    role: "button",
                    tabIndex: 0,
                    className: _this.isSelectedMonth(i) ? "react-datepicker__month-option react-datepicker__month-option--selected_month" : "react-datepicker__month-option",
                    key: month,
                    onClick: _this.onChange.bind(_this, i),
                    onKeyDown: _this.handleOptionKeyDown.bind(_this, i),
                    "aria-selected": _this.isSelectedMonth(i) ? "true" : undefined
                }, _this.isSelectedMonth(i) ? __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
                    className: "react-datepicker__month-option--selected"
                }, "\u2713") : "", month);
            });
        };
        _this.onChange = function(month) {
            return _this.props.onChange(month);
        };
        _this.handleClickOutside = function() {
            return _this.props.onCancel();
        };
        return _this;
    }
    MonthDropdownOptions.prototype.render = function() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ClickOutsideWrapper, {
            className: "react-datepicker__month-dropdown",
            onClickOutside: this.handleClickOutside
        }, this.renderOptions());
    };
    return MonthDropdownOptions;
}(__TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"]);
var MonthDropdown = function(_super) {
    __extends(MonthDropdown, _super);
    function MonthDropdown() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            dropdownVisible: false
        };
        _this.renderSelectOptions = function(monthNames) {
            return monthNames.map(function(m, i) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("option", {
                    key: m,
                    value: i
                }, m);
            });
        };
        _this.renderSelectMode = function(monthNames) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("select", {
                value: _this.props.month,
                className: "react-datepicker__month-select",
                onChange: function(e) {
                    return _this.onChange(parseInt(e.target.value));
                }
            }, _this.renderSelectOptions(monthNames));
        };
        _this.renderReadView = function(visible, monthNames) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
                key: "read",
                type: "button",
                style: {
                    visibility: visible ? "visible" : "hidden"
                },
                className: "react-datepicker__month-read-view",
                onClick: _this.toggleDropdown
            }, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
                className: "react-datepicker__month-read-view--down-arrow"
            }), __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
                className: "react-datepicker__month-read-view--selected-month"
            }, monthNames[_this.props.month]));
        };
        _this.renderDropdown = function(monthNames) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(MonthDropdownOptions, _assign({
                key: "dropdown"
            }, _this.props, {
                monthNames: monthNames,
                onChange: _this.onChange,
                onCancel: _this.toggleDropdown
            }));
        };
        _this.renderScrollMode = function(monthNames) {
            var dropdownVisible = _this.state.dropdownVisible;
            var result = [
                _this.renderReadView(!dropdownVisible, monthNames)
            ];
            if (dropdownVisible) {
                result.unshift(_this.renderDropdown(monthNames));
            }
            return result;
        };
        _this.onChange = function(month) {
            _this.toggleDropdown();
            if (month !== _this.props.month) {
                _this.props.onChange(month);
            }
        };
        _this.toggleDropdown = function() {
            return _this.setState({
                dropdownVisible: !_this.state.dropdownVisible
            });
        };
        return _this;
    }
    MonthDropdown.prototype.render = function() {
        var _this = this;
        var monthNames = [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11
        ].map(this.props.useShortMonthInDropdown ? function(m) {
            return getMonthShortInLocale(m, _this.props.locale);
        } : function(m) {
            return getMonthInLocale(m, _this.props.locale);
        });
        var renderedDropdown;
        switch(this.props.dropdownMode){
            case "scroll":
                renderedDropdown = this.renderScrollMode(monthNames);
                break;
            case "select":
                renderedDropdown = this.renderSelectMode(monthNames);
                break;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "react-datepicker__month-dropdown-container react-datepicker__month-dropdown-container--".concat(this.props.dropdownMode)
        }, renderedDropdown);
    };
    return MonthDropdown;
}(__TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"]);
function generateMonthYears(minDate, maxDate) {
    var list = [];
    var currDate = getStartOfMonth(minDate);
    var lastDate = getStartOfMonth(maxDate);
    while(!(0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$isAfter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAfter"])(currDate, lastDate)){
        list.push(newDate(currDate));
        currDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$addMonths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addMonths"])(currDate, 1);
    }
    return list;
}
var MonthYearDropdownOptions = function(_super) {
    __extends(MonthYearDropdownOptions, _super);
    function MonthYearDropdownOptions(props) {
        var _this = _super.call(this, props) || this;
        _this.renderOptions = function() {
            return _this.state.monthYearsList.map(function(monthYear) {
                var monthYearPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getTime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTime"])(monthYear);
                var isSameMonthYear = isSameYear(_this.props.date, monthYear) && isSameMonth(_this.props.date, monthYear);
                return __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                    className: isSameMonthYear ? "react-datepicker__month-year-option--selected_month-year" : "react-datepicker__month-year-option",
                    key: monthYearPoint,
                    onClick: _this.onChange.bind(_this, monthYearPoint),
                    "aria-selected": isSameMonthYear ? "true" : undefined
                }, isSameMonthYear ? __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
                    className: "react-datepicker__month-year-option--selected"
                }, "\u2713") : "", formatDate(monthYear, _this.props.dateFormat, _this.props.locale));
            });
        };
        _this.onChange = function(monthYear) {
            return _this.props.onChange(monthYear);
        };
        _this.handleClickOutside = function() {
            _this.props.onCancel();
        };
        _this.state = {
            monthYearsList: generateMonthYears(_this.props.minDate, _this.props.maxDate)
        };
        return _this;
    }
    MonthYearDropdownOptions.prototype.render = function() {
        var dropdownClass = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])({
            "react-datepicker__month-year-dropdown": true,
            "react-datepicker__month-year-dropdown--scrollable": this.props.scrollableMonthYearDropdown
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ClickOutsideWrapper, {
            className: dropdownClass,
            onClickOutside: this.handleClickOutside
        }, this.renderOptions());
    };
    return MonthYearDropdownOptions;
}(__TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"]);
var MonthYearDropdown = function(_super) {
    __extends(MonthYearDropdown, _super);
    function MonthYearDropdown() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            dropdownVisible: false
        };
        _this.renderSelectOptions = function() {
            var currDate = getStartOfMonth(_this.props.minDate);
            var lastDate = getStartOfMonth(_this.props.maxDate);
            var options = [];
            while(!(0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$isAfter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAfter"])(currDate, lastDate)){
                var timePoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getTime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTime"])(currDate);
                options.push(__TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("option", {
                    key: timePoint,
                    value: timePoint
                }, formatDate(currDate, _this.props.dateFormat, _this.props.locale)));
                currDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$addMonths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addMonths"])(currDate, 1);
            }
            return options;
        };
        _this.onSelectChange = function(event) {
            _this.onChange(parseInt(event.target.value));
        };
        _this.renderSelectMode = function() {
            return __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("select", {
                value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getTime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTime"])(getStartOfMonth(_this.props.date)),
                className: "react-datepicker__month-year-select",
                onChange: _this.onSelectChange
            }, _this.renderSelectOptions());
        };
        _this.renderReadView = function(visible) {
            var yearMonth = formatDate(_this.props.date, _this.props.dateFormat, _this.props.locale);
            return __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                key: "read",
                style: {
                    visibility: visible ? "visible" : "hidden"
                },
                className: "react-datepicker__month-year-read-view",
                onClick: _this.toggleDropdown
            }, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
                className: "react-datepicker__month-year-read-view--down-arrow"
            }), __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
                className: "react-datepicker__month-year-read-view--selected-month-year"
            }, yearMonth));
        };
        _this.renderDropdown = function() {
            return __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(MonthYearDropdownOptions, _assign({
                key: "dropdown"
            }, _this.props, {
                onChange: _this.onChange,
                onCancel: _this.toggleDropdown
            }));
        };
        _this.renderScrollMode = function() {
            var dropdownVisible = _this.state.dropdownVisible;
            var result = [
                _this.renderReadView(!dropdownVisible)
            ];
            if (dropdownVisible) {
                result.unshift(_this.renderDropdown());
            }
            return result;
        };
        _this.onChange = function(monthYearPoint) {
            _this.toggleDropdown();
            var changedDate = newDate(monthYearPoint);
            if (isSameYear(_this.props.date, changedDate) && isSameMonth(_this.props.date, changedDate)) {
                return;
            }
            _this.props.onChange(changedDate);
        };
        _this.toggleDropdown = function() {
            return _this.setState({
                dropdownVisible: !_this.state.dropdownVisible
            });
        };
        return _this;
    }
    MonthYearDropdown.prototype.render = function() {
        var renderedDropdown;
        switch(this.props.dropdownMode){
            case "scroll":
                renderedDropdown = this.renderScrollMode();
                break;
            case "select":
                renderedDropdown = this.renderSelectMode();
                break;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "react-datepicker__month-year-dropdown-container react-datepicker__month-year-dropdown-container--".concat(this.props.dropdownMode)
        }, renderedDropdown);
    };
    return MonthYearDropdown;
}(__TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"]);
var Time = function(_super) {
    __extends(Time, _super);
    function Time() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            height: null
        };
        _this.scrollToTheSelectedTime = function() {
            requestAnimationFrame(function() {
                var _a, _b, _c;
                if (!_this.list) return;
                _this.list.scrollTop = (_c = _this.centerLi && Time.calcCenterPosition(_this.props.monthRef ? _this.props.monthRef.clientHeight - ((_b = (_a = _this.header) === null || _a === void 0 ? void 0 : _a.clientHeight) !== null && _b !== void 0 ? _b : 0) : _this.list.clientHeight, _this.centerLi)) !== null && _c !== void 0 ? _c : 0;
            });
        };
        _this.handleClick = function(time) {
            var _a, _b;
            if ((_this.props.minTime || _this.props.maxTime) && isTimeInDisabledRange(time, _this.props) || (_this.props.excludeTimes || _this.props.includeTimes || _this.props.filterTime) && isTimeDisabled(time, _this.props)) {
                return;
            }
            (_b = (_a = _this.props).onChange) === null || _b === void 0 ? void 0 : _b.call(_a, time);
        };
        _this.isSelectedTime = function(time) {
            return _this.props.selected && isSameMinute(_this.props.selected, time);
        };
        _this.isDisabledTime = function(time) {
            return (_this.props.minTime || _this.props.maxTime) && isTimeInDisabledRange(time, _this.props) || (_this.props.excludeTimes || _this.props.includeTimes || _this.props.filterTime) && isTimeDisabled(time, _this.props);
        };
        _this.liClasses = function(time) {
            var _a;
            var classes = [
                "react-datepicker__time-list-item",
                _this.props.timeClassName ? _this.props.timeClassName(time) : undefined
            ];
            if (_this.isSelectedTime(time)) {
                classes.push("react-datepicker__time-list-item--selected");
            }
            if (_this.isDisabledTime(time)) {
                classes.push("react-datepicker__time-list-item--disabled");
            }
            //convert this.props.intervals and the relevant time to seconds and check if it it's a clean multiple of the interval
            if (_this.props.injectTimes && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getHours$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHours"])(time) * 3600 + (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getMinutes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMinutes"])(time) * 60 + (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getSeconds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSeconds"])(time)) % (((_a = _this.props.intervals) !== null && _a !== void 0 ? _a : Time.defaultProps.intervals) * 60) !== 0) {
                classes.push("react-datepicker__time-list-item--injected");
            }
            return classes.join(" ");
        };
        _this.handleOnKeyDown = function(event, time) {
            var _a, _b;
            if (event.key === KeyType.Space) {
                event.preventDefault();
                event.key = KeyType.Enter;
            }
            if ((event.key === KeyType.ArrowUp || event.key === KeyType.ArrowLeft) && event.target instanceof HTMLElement && event.target.previousSibling) {
                event.preventDefault();
                event.target.previousSibling instanceof HTMLElement && event.target.previousSibling.focus();
            }
            if ((event.key === KeyType.ArrowDown || event.key === KeyType.ArrowRight) && event.target instanceof HTMLElement && event.target.nextSibling) {
                event.preventDefault();
                event.target.nextSibling instanceof HTMLElement && event.target.nextSibling.focus();
            }
            if (event.key === KeyType.Enter) {
                _this.handleClick(time);
            }
            (_b = (_a = _this.props).handleOnKeyDown) === null || _b === void 0 ? void 0 : _b.call(_a, event);
        };
        _this.renderTimes = function() {
            var _a;
            var times = [];
            var format = typeof _this.props.format === "string" ? _this.props.format : "p";
            var intervals = (_a = _this.props.intervals) !== null && _a !== void 0 ? _a : Time.defaultProps.intervals;
            var activeDate = _this.props.selected || _this.props.openToDate || newDate();
            var base = getStartOfDay(activeDate);
            var sortedInjectTimes = _this.props.injectTimes && _this.props.injectTimes.sort(function(a, b) {
                return a.getTime() - b.getTime();
            });
            var minutesInDay = 60 * getHoursInDay(activeDate);
            var multiplier = minutesInDay / intervals;
            for(var i = 0; i < multiplier; i++){
                var currentTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$addMinutes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addMinutes"])(base, i * intervals);
                times.push(currentTime);
                if (sortedInjectTimes) {
                    var timesToInject = timesToInjectAfter(base, currentTime, i, intervals, sortedInjectTimes);
                    times = times.concat(timesToInject);
                }
            }
            // Determine which time to focus and scroll into view when component mounts
            var timeToFocus = times.reduce(function(prev, time) {
                if (time.getTime() <= activeDate.getTime()) {
                    return time;
                }
                return prev;
            }, times[0]);
            return times.map(function(time) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("li", {
                    key: time.valueOf(),
                    onClick: _this.handleClick.bind(_this, time),
                    className: _this.liClasses(time),
                    ref: function(li) {
                        if (time === timeToFocus) {
                            _this.centerLi = li;
                        }
                    },
                    onKeyDown: function(event) {
                        _this.handleOnKeyDown(event, time);
                    },
                    tabIndex: time === timeToFocus ? 0 : -1,
                    role: "option",
                    "aria-selected": _this.isSelectedTime(time) ? "true" : undefined,
                    "aria-disabled": _this.isDisabledTime(time) ? "true" : undefined
                }, formatDate(time, format, _this.props.locale));
            });
        };
        _this.renderTimeCaption = function() {
            if (_this.props.showTimeCaption === false) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null);
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                className: "react-datepicker__header react-datepicker__header--time ".concat(_this.props.showTimeSelectOnly ? "react-datepicker__header--time--only" : ""),
                ref: function(header) {
                    _this.header = header;
                }
            }, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                className: "react-datepicker-time__header"
            }, _this.props.timeCaption));
        };
        return _this;
    }
    Object.defineProperty(Time, "defaultProps", {
        get: function() {
            return {
                intervals: 30,
                todayButton: null,
                timeCaption: "Time",
                showTimeCaption: true
            };
        },
        enumerable: false,
        configurable: true
    });
    Time.prototype.componentDidMount = function() {
        // code to ensure selected time will always be in focus within time window when it first appears
        this.scrollToTheSelectedTime();
        this.observeDatePickerHeightChanges();
    };
    Time.prototype.componentWillUnmount = function() {
        var _a;
        (_a = this.resizeObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    };
    Time.prototype.observeDatePickerHeightChanges = function() {
        var _this = this;
        var monthRef = this.props.monthRef;
        this.updateContainerHeight();
        if (monthRef) {
            this.resizeObserver = new ResizeObserver(function() {
                _this.updateContainerHeight();
            });
            this.resizeObserver.observe(monthRef);
        }
    };
    Time.prototype.updateContainerHeight = function() {
        if (this.props.monthRef && this.header) {
            this.setState({
                height: this.props.monthRef.clientHeight - this.header.clientHeight
            });
        }
    };
    Time.prototype.render = function() {
        var _this = this;
        var _a;
        var height = this.state.height;
        return __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "react-datepicker__time-container ".concat(((_a = this.props.todayButton) !== null && _a !== void 0 ? _a : Time.defaultProps.todayButton) ? "react-datepicker__time-container--with-today-button" : "")
        }, this.renderTimeCaption(), __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "react-datepicker__time"
        }, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "react-datepicker__time-box"
        }, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("ul", {
            className: "react-datepicker__time-list",
            ref: function(list) {
                _this.list = list;
            },
            style: height ? {
                height: height
            } : {},
            role: "listbox",
            "aria-label": this.props.timeCaption
        }, this.renderTimes()))));
    };
    Time.calcCenterPosition = function(listHeight, centerLiRef) {
        return centerLiRef.offsetTop - (listHeight / 2 - centerLiRef.clientHeight / 2);
    };
    return Time;
}(__TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"]);
var VERTICAL_NAVIGATION_OFFSET = 3;
/**
 * `Year` is a component that represents a year in a date picker.
 *
 * @class
 * @param {YearProps} props - The properties that define the `Year` component.
 * @property {VoidFunction} [props.clearSelectingDate] - Function to clear the selected date.
 * @property {Date} [props.date] - The currently selected date.
 * @property {boolean} [props.disabledKeyboardNavigation] - If true, keyboard navigation is disabled.
 * @property {Date} [props.endDate] - The end date in a range selection.
 * @property {(date: Date) => void} props.onDayClick - Function to handle day click events.
 * @property {Date} props.preSelection - The date that is currently in focus.
 * @property {(date: Date) => void} props.setPreSelection - Function to set the pre-selected date.
 * @property {{ [key: string]: any }} props.selected - The selected date(s).
 * @property {boolean} props.inline - If true, the date picker is displayed inline.
 * @property {Date} props.maxDate - The maximum selectable date.
 * @property {Date} props.minDate - The minimum selectable date.
 * @property {boolean} props.usePointerEvent - If true, pointer events are used instead of mouse events.
 * @property {(date: Date) => void} props.onYearMouseEnter - Function to handle mouse enter events on a year.
 * @property {(date: Date) => void} props.onYearMouseLeave - Function to handle mouse leave events on a year.
 */ var Year = function(_super) {
    __extends(Year, _super);
    function Year(props) {
        var _this = _super.call(this, props) || this;
        _this.YEAR_REFS = __spreadArray([], Array(_this.props.yearItemNumber), true).map(function() {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRef"])();
        });
        _this.isDisabled = function(date) {
            return isDayDisabled(date, {
                minDate: _this.props.minDate,
                maxDate: _this.props.maxDate,
                excludeDates: _this.props.excludeDates,
                includeDates: _this.props.includeDates,
                filterDate: _this.props.filterDate
            });
        };
        _this.isExcluded = function(date) {
            return isDayExcluded(date, {
                excludeDates: _this.props.excludeDates
            });
        };
        _this.selectingDate = function() {
            var _a;
            return (_a = _this.props.selectingDate) !== null && _a !== void 0 ? _a : _this.props.preSelection;
        };
        _this.updateFocusOnPaginate = function(refIndex) {
            var waitForReRender = function() {
                var _a, _b;
                (_b = (_a = _this.YEAR_REFS[refIndex]) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.focus();
            };
            window.requestAnimationFrame(waitForReRender);
        };
        _this.handleYearClick = function(day, event) {
            if (_this.props.onDayClick) {
                _this.props.onDayClick(day, event);
            }
        };
        _this.handleYearNavigation = function(newYear, newDate) {
            var _a, _b, _c, _d;
            var _e = _this.props, date = _e.date, yearItemNumber = _e.yearItemNumber;
            if (date === undefined || yearItemNumber === undefined) {
                return;
            }
            var startPeriod = getYearsPeriod(date, yearItemNumber).startPeriod;
            if (_this.isDisabled(newDate) || _this.isExcluded(newDate)) {
                return;
            }
            (_b = (_a = _this.props).setPreSelection) === null || _b === void 0 ? void 0 : _b.call(_a, newDate);
            if (newYear - startPeriod < 0) {
                _this.updateFocusOnPaginate(yearItemNumber - (startPeriod - newYear));
            } else if (newYear - startPeriod >= yearItemNumber) {
                _this.updateFocusOnPaginate(Math.abs(yearItemNumber - (newYear - startPeriod)));
            } else (_d = (_c = _this.YEAR_REFS[newYear - startPeriod]) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 ? void 0 : _d.focus();
        };
        _this.isSameDay = function(y, other) {
            return isSameDay(y, other);
        };
        _this.isCurrentYear = function(y) {
            return y === (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getYear"])(newDate());
        };
        _this.isRangeStart = function(y) {
            return _this.props.startDate && _this.props.endDate && isSameYear((0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$setYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setYear"])(newDate(), y), _this.props.startDate);
        };
        _this.isRangeEnd = function(y) {
            return _this.props.startDate && _this.props.endDate && isSameYear((0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$setYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setYear"])(newDate(), y), _this.props.endDate);
        };
        _this.isInRange = function(y) {
            return isYearInRange(y, _this.props.startDate, _this.props.endDate);
        };
        _this.isInSelectingRange = function(y) {
            var _a = _this.props, selectsStart = _a.selectsStart, selectsEnd = _a.selectsEnd, selectsRange = _a.selectsRange, startDate = _a.startDate, endDate = _a.endDate;
            if (!(selectsStart || selectsEnd || selectsRange) || !_this.selectingDate()) {
                return false;
            }
            if (selectsStart && endDate) {
                return isYearInRange(y, _this.selectingDate(), endDate);
            }
            if (selectsEnd && startDate) {
                return isYearInRange(y, startDate, _this.selectingDate());
            }
            if (selectsRange && startDate && !endDate) {
                return isYearInRange(y, startDate, _this.selectingDate());
            }
            return false;
        };
        _this.isSelectingRangeStart = function(y) {
            var _a;
            if (!_this.isInSelectingRange(y)) {
                return false;
            }
            var _b = _this.props, startDate = _b.startDate, selectsStart = _b.selectsStart;
            var _year = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$setYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setYear"])(newDate(), y);
            if (selectsStart) {
                return isSameYear(_year, (_a = _this.selectingDate()) !== null && _a !== void 0 ? _a : null);
            }
            return isSameYear(_year, startDate !== null && startDate !== void 0 ? startDate : null);
        };
        _this.isSelectingRangeEnd = function(y) {
            var _a;
            if (!_this.isInSelectingRange(y)) {
                return false;
            }
            var _b = _this.props, endDate = _b.endDate, selectsEnd = _b.selectsEnd, selectsRange = _b.selectsRange;
            var _year = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$setYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setYear"])(newDate(), y);
            if (selectsEnd || selectsRange) {
                return isSameYear(_year, (_a = _this.selectingDate()) !== null && _a !== void 0 ? _a : null);
            }
            return isSameYear(_year, endDate !== null && endDate !== void 0 ? endDate : null);
        };
        _this.isKeyboardSelected = function(y) {
            if (_this.props.disabledKeyboardNavigation || _this.props.date === undefined || _this.props.preSelection == null) {
                return;
            }
            var _a = _this.props, minDate = _a.minDate, maxDate = _a.maxDate, excludeDates = _a.excludeDates, includeDates = _a.includeDates, filterDate = _a.filterDate, selected = _a.selected;
            var date = getStartOfYear((0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$setYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setYear"])(_this.props.date, y));
            var isDisabled = (minDate || maxDate || excludeDates || includeDates || filterDate) && isYearDisabled(y, _this.props);
            var isSelectedDay = !!selected && isSameDay(date, getStartOfYear(selected));
            var isKeyboardSelectedDay = isSameDay(date, getStartOfYear(_this.props.preSelection));
            return !_this.props.inline && !isSelectedDay && isKeyboardSelectedDay && !isDisabled;
        };
        _this.isSelectedYear = function(year) {
            var _a = _this.props, selectsMultiple = _a.selectsMultiple, selected = _a.selected, selectedDates = _a.selectedDates;
            if (selectsMultiple) {
                return selectedDates === null || selectedDates === void 0 ? void 0 : selectedDates.some(function(date) {
                    return year === (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getYear"])(date);
                });
            }
            return !!selected && year === (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getYear"])(selected);
        };
        _this.onYearClick = function(event, y) {
            var date = _this.props.date;
            if (date === undefined) {
                return;
            }
            _this.handleYearClick(getStartOfYear((0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$setYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setYear"])(date, y)), event);
        };
        _this.onYearKeyDown = function(event, y) {
            var _a, _b;
            var key = event.key;
            var _c = _this.props, date = _c.date, yearItemNumber = _c.yearItemNumber, handleOnKeyDown = _c.handleOnKeyDown;
            if (key !== KeyType.Tab) {
                // preventDefault on tab event blocks focus change
                event.preventDefault();
            }
            if (!_this.props.disabledKeyboardNavigation) {
                switch(key){
                    case KeyType.Enter:
                        if (_this.props.selected == null) {
                            break;
                        }
                        _this.onYearClick(event, y);
                        (_b = (_a = _this.props).setPreSelection) === null || _b === void 0 ? void 0 : _b.call(_a, _this.props.selected);
                        break;
                    case KeyType.ArrowRight:
                        if (_this.props.preSelection == null) {
                            break;
                        }
                        _this.handleYearNavigation(y + 1, (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$addYears$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addYears"])(_this.props.preSelection, 1));
                        break;
                    case KeyType.ArrowLeft:
                        if (_this.props.preSelection == null) {
                            break;
                        }
                        _this.handleYearNavigation(y - 1, (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$subYears$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subYears"])(_this.props.preSelection, 1));
                        break;
                    case KeyType.ArrowUp:
                        {
                            if (date === undefined || yearItemNumber === undefined || _this.props.preSelection == null) {
                                break;
                            }
                            var startPeriod = getYearsPeriod(date, yearItemNumber).startPeriod;
                            var offset = VERTICAL_NAVIGATION_OFFSET;
                            var newYear = y - offset;
                            if (newYear < startPeriod) {
                                var leftOverOffset = yearItemNumber % offset;
                                if (y >= startPeriod && y < startPeriod + leftOverOffset) {
                                    offset = leftOverOffset;
                                } else {
                                    offset += leftOverOffset;
                                }
                                newYear = y - offset;
                            }
                            _this.handleYearNavigation(newYear, (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$subYears$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subYears"])(_this.props.preSelection, offset));
                            break;
                        }
                    case KeyType.ArrowDown:
                        {
                            if (date === undefined || yearItemNumber === undefined || _this.props.preSelection == null) {
                                break;
                            }
                            var endPeriod = getYearsPeriod(date, yearItemNumber).endPeriod;
                            var offset = VERTICAL_NAVIGATION_OFFSET;
                            var newYear = y + offset;
                            if (newYear > endPeriod) {
                                var leftOverOffset = yearItemNumber % offset;
                                if (y <= endPeriod && y > endPeriod - leftOverOffset) {
                                    offset = leftOverOffset;
                                } else {
                                    offset += leftOverOffset;
                                }
                                newYear = y + offset;
                            }
                            _this.handleYearNavigation(newYear, (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$addYears$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addYears"])(_this.props.preSelection, offset));
                            break;
                        }
                }
            }
            handleOnKeyDown && handleOnKeyDown(event);
        };
        _this.getYearClassNames = function(y) {
            var _a = _this.props, date = _a.date, minDate = _a.minDate, maxDate = _a.maxDate, excludeDates = _a.excludeDates, includeDates = _a.includeDates, filterDate = _a.filterDate, yearClassName = _a.yearClassName;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("react-datepicker__year-text", "react-datepicker__year-".concat(y), date ? yearClassName === null || yearClassName === void 0 ? void 0 : yearClassName((0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$setYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setYear"])(date, y)) : undefined, {
                "react-datepicker__year-text--selected": _this.isSelectedYear(y),
                "react-datepicker__year-text--disabled": (minDate || maxDate || excludeDates || includeDates || filterDate) && isYearDisabled(y, _this.props),
                "react-datepicker__year-text--keyboard-selected": _this.isKeyboardSelected(y),
                "react-datepicker__year-text--range-start": _this.isRangeStart(y),
                "react-datepicker__year-text--range-end": _this.isRangeEnd(y),
                "react-datepicker__year-text--in-range": _this.isInRange(y),
                "react-datepicker__year-text--in-selecting-range": _this.isInSelectingRange(y),
                "react-datepicker__year-text--selecting-range-start": _this.isSelectingRangeStart(y),
                "react-datepicker__year-text--selecting-range-end": _this.isSelectingRangeEnd(y),
                "react-datepicker__year-text--today": _this.isCurrentYear(y)
            });
        };
        _this.getYearTabIndex = function(y) {
            if (_this.props.disabledKeyboardNavigation || _this.props.preSelection == null) {
                return "-1";
            }
            var preSelected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getYear"])(_this.props.preSelection);
            var isPreSelectedYearDisabled = isYearDisabled(y, _this.props);
            return y === preSelected && !isPreSelectedYearDisabled ? "0" : "-1";
        };
        _this.getYearContent = function(y) {
            return _this.props.renderYearContent ? _this.props.renderYearContent(y) : y;
        };
        return _this;
    }
    Year.prototype.render = function() {
        var _this = this;
        var yearsList = [];
        var _a = this.props, date = _a.date, yearItemNumber = _a.yearItemNumber, onYearMouseEnter = _a.onYearMouseEnter, onYearMouseLeave = _a.onYearMouseLeave;
        if (date === undefined) {
            return null;
        }
        var _b = getYearsPeriod(date, yearItemNumber), startPeriod = _b.startPeriod, endPeriod = _b.endPeriod;
        var _loop_1 = function(y) {
            yearsList.push(__TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                ref: this_1.YEAR_REFS[y - startPeriod],
                onClick: function(event) {
                    _this.onYearClick(event, y);
                },
                onKeyDown: function(event) {
                    if (isSpaceKeyDown(event)) {
                        event.preventDefault();
                        event.key = KeyType.Enter;
                    }
                    _this.onYearKeyDown(event, y);
                },
                tabIndex: Number(this_1.getYearTabIndex(y)),
                className: this_1.getYearClassNames(y),
                onMouseEnter: !this_1.props.usePointerEvent ? function(event) {
                    return onYearMouseEnter(event, y);
                } : undefined,
                onPointerEnter: this_1.props.usePointerEvent ? function(event) {
                    return onYearMouseEnter(event, y);
                } : undefined,
                onMouseLeave: !this_1.props.usePointerEvent ? function(event) {
                    return onYearMouseLeave(event, y);
                } : undefined,
                onPointerLeave: this_1.props.usePointerEvent ? function(event) {
                    return onYearMouseLeave(event, y);
                } : undefined,
                key: y,
                "aria-current": this_1.isCurrentYear(y) ? "date" : undefined
            }, this_1.getYearContent(y)));
        };
        var this_1 = this;
        for(var y = startPeriod; y <= endPeriod; y++){
            _loop_1(y);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "react-datepicker__year"
        }, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "react-datepicker__year-wrapper",
            onMouseLeave: !this.props.usePointerEvent ? this.props.clearSelectingDate : undefined,
            onPointerLeave: this.props.usePointerEvent ? this.props.clearSelectingDate : undefined
        }, yearsList));
    };
    return Year;
}(__TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"]);
function generateYears(year, noOfYear, minDate, maxDate) {
    var list = [];
    for(var i = 0; i < 2 * noOfYear + 1; i++){
        var newYear = year + noOfYear - i;
        var isInRange = true;
        if (minDate) {
            isInRange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getYear"])(minDate) <= newYear;
        }
        if (maxDate && isInRange) {
            isInRange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getYear"])(maxDate) >= newYear;
        }
        if (isInRange) {
            list.push(newYear);
        }
    }
    return list;
}
var YearDropdownOptions = function(_super) {
    __extends(YearDropdownOptions, _super);
    function YearDropdownOptions(props) {
        var _this = _super.call(this, props) || this;
        _this.yearOptionButtonsRef = {};
        _this.handleOptionKeyDown = function(year, e) {
            var _a;
            switch(e.key){
                case "Enter":
                    e.preventDefault();
                    _this.onChange(year);
                    break;
                case "Escape":
                    e.preventDefault();
                    _this.props.onCancel();
                    break;
                case "ArrowUp":
                case "ArrowDown":
                    {
                        e.preventDefault();
                        var newYear = year + (e.key === "ArrowUp" ? 1 : -1);
                        // Add bounds checking to ensure the year exists in our refs
                        if (_this.yearOptionButtonsRef[newYear]) {
                            (_a = _this.yearOptionButtonsRef[newYear]) === null || _a === void 0 ? void 0 : _a.focus();
                        }
                        break;
                    }
            }
        };
        _this.renderOptions = function() {
            // Clear refs to prevent memory leaks on re-render
            _this.yearOptionButtonsRef = {};
            var selectedYear = _this.props.year;
            var options = _this.state.yearsList.map(function(year) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                    ref: function(el) {
                        _this.yearOptionButtonsRef[year] = el;
                        if (year === selectedYear) {
                            el === null || el === void 0 ? void 0 : el.focus();
                        }
                    },
                    role: "button",
                    tabIndex: 0,
                    className: selectedYear === year ? "react-datepicker__year-option react-datepicker__year-option--selected_year" : "react-datepicker__year-option",
                    key: year,
                    onClick: _this.onChange.bind(_this, year),
                    onKeyDown: _this.handleOptionKeyDown.bind(_this, year),
                    "aria-selected": selectedYear === year ? "true" : undefined
                }, selectedYear === year ? __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
                    className: "react-datepicker__year-option--selected"
                }, "\u2713") : "", year);
            });
            var minYear = _this.props.minDate ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getYear"])(_this.props.minDate) : null;
            var maxYear = _this.props.maxDate ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getYear"])(_this.props.maxDate) : null;
            if (!maxYear || !_this.state.yearsList.find(function(year) {
                return year === maxYear;
            })) {
                options.unshift(__TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                    className: "react-datepicker__year-option",
                    key: "upcoming",
                    onClick: _this.incrementYears
                }, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("a", {
                    className: "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-upcoming"
                })));
            }
            if (!minYear || !_this.state.yearsList.find(function(year) {
                return year === minYear;
            })) {
                options.push(__TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                    className: "react-datepicker__year-option",
                    key: "previous",
                    onClick: _this.decrementYears
                }, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("a", {
                    className: "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-previous"
                })));
            }
            return options;
        };
        _this.onChange = function(year) {
            _this.props.onChange(year);
        };
        _this.handleClickOutside = function() {
            _this.props.onCancel();
        };
        _this.shiftYears = function(amount) {
            var years = _this.state.yearsList.map(function(year) {
                return year + amount;
            });
            _this.setState({
                yearsList: years
            });
        };
        _this.incrementYears = function() {
            return _this.shiftYears(1);
        };
        _this.decrementYears = function() {
            return _this.shiftYears(-1);
        };
        var yearDropdownItemNumber = props.yearDropdownItemNumber, scrollableYearDropdown = props.scrollableYearDropdown;
        var noOfYear = yearDropdownItemNumber || (scrollableYearDropdown ? 10 : 5);
        _this.state = {
            yearsList: generateYears(_this.props.year, noOfYear, _this.props.minDate, _this.props.maxDate)
        };
        _this.dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRef"])();
        return _this;
    }
    YearDropdownOptions.prototype.componentDidMount = function() {
        var dropdownCurrent = this.dropdownRef.current;
        if (dropdownCurrent) {
            // Get array from HTMLCollection
            var dropdownCurrentChildren = dropdownCurrent.children ? Array.from(dropdownCurrent.children) : null;
            var selectedYearOptionEl = dropdownCurrentChildren ? dropdownCurrentChildren.find(function(childEl) {
                return childEl.ariaSelected;
            }) : null;
            dropdownCurrent.scrollTop = selectedYearOptionEl && selectedYearOptionEl instanceof HTMLElement ? selectedYearOptionEl.offsetTop + (selectedYearOptionEl.clientHeight - dropdownCurrent.clientHeight) / 2 : (dropdownCurrent.scrollHeight - dropdownCurrent.clientHeight) / 2;
        }
    };
    YearDropdownOptions.prototype.render = function() {
        var dropdownClass = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])({
            "react-datepicker__year-dropdown": true,
            "react-datepicker__year-dropdown--scrollable": this.props.scrollableYearDropdown
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ClickOutsideWrapper, {
            className: dropdownClass,
            containerRef: this.dropdownRef,
            onClickOutside: this.handleClickOutside
        }, this.renderOptions());
    };
    return YearDropdownOptions;
}(__TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"]);
var YearDropdown = function(_super) {
    __extends(YearDropdown, _super);
    function YearDropdown() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            dropdownVisible: false
        };
        _this.renderSelectOptions = function() {
            var minYear = _this.props.minDate ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getYear"])(_this.props.minDate) : 1900;
            var maxYear = _this.props.maxDate ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getYear"])(_this.props.maxDate) : 2100;
            var options = [];
            for(var i = minYear; i <= maxYear; i++){
                options.push(__TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("option", {
                    key: i,
                    value: i
                }, i));
            }
            return options;
        };
        _this.onSelectChange = function(event) {
            _this.onChange(parseInt(event.target.value));
        };
        _this.renderSelectMode = function() {
            return __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("select", {
                value: _this.props.year,
                className: "react-datepicker__year-select",
                onChange: _this.onSelectChange
            }, _this.renderSelectOptions());
        };
        _this.renderReadView = function(visible) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
                key: "read",
                type: "button",
                style: {
                    visibility: visible ? "visible" : "hidden"
                },
                className: "react-datepicker__year-read-view",
                onClick: _this.toggleDropdown
            }, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
                className: "react-datepicker__year-read-view--down-arrow"
            }), __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
                className: "react-datepicker__year-read-view--selected-year"
            }, _this.props.year));
        };
        _this.renderDropdown = function() {
            return __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(YearDropdownOptions, _assign({
                key: "dropdown"
            }, _this.props, {
                onChange: _this.onChange,
                onCancel: _this.toggleDropdown
            }));
        };
        _this.renderScrollMode = function() {
            var dropdownVisible = _this.state.dropdownVisible;
            var result = [
                _this.renderReadView(!dropdownVisible)
            ];
            if (dropdownVisible) {
                result.unshift(_this.renderDropdown());
            }
            return result;
        };
        _this.onChange = function(year) {
            _this.toggleDropdown();
            if (year === _this.props.year) return;
            _this.props.onChange(year);
        };
        _this.toggleDropdown = function(event) {
            _this.setState({
                dropdownVisible: !_this.state.dropdownVisible
            }, function() {
                if (_this.props.adjustDateOnChange) {
                    _this.handleYearChange(_this.props.date, event);
                }
            });
        };
        _this.handleYearChange = function(date, event) {
            var _a;
            (_a = _this.onSelect) === null || _a === void 0 ? void 0 : _a.call(_this, date, event);
            _this.setOpen();
        };
        _this.onSelect = function(date, event) {
            var _a, _b;
            (_b = (_a = _this.props).onSelect) === null || _b === void 0 ? void 0 : _b.call(_a, date, event);
        };
        _this.setOpen = function() {
            var _a, _b;
            (_b = (_a = _this.props).setOpen) === null || _b === void 0 ? void 0 : _b.call(_a, true);
        };
        return _this;
    }
    YearDropdown.prototype.render = function() {
        var renderedDropdown;
        switch(this.props.dropdownMode){
            case "scroll":
                renderedDropdown = this.renderScrollMode();
                break;
            case "select":
                renderedDropdown = this.renderSelectMode();
                break;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "react-datepicker__year-dropdown-container react-datepicker__year-dropdown-container--".concat(this.props.dropdownMode)
        }, renderedDropdown);
    };
    return YearDropdown;
}(__TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"]);
var DROPDOWN_FOCUS_CLASSNAMES = [
    "react-datepicker__year-select",
    "react-datepicker__month-select",
    "react-datepicker__month-year-select"
];
var OUTSIDE_CLICK_IGNORE_CLASS = "react-datepicker-ignore-onclickoutside";
var isDropdownSelect = function(element) {
    var classNames = (element.className || "").split(/\s+/);
    return DROPDOWN_FOCUS_CLASSNAMES.some(function(testClassname) {
        return classNames.indexOf(testClassname) >= 0;
    });
};
var Calendar = function(_super) {
    __extends(Calendar, _super);
    function Calendar(props) {
        var _this = _super.call(this, props) || this;
        _this.monthContainer = undefined;
        _this.handleClickOutside = function(event) {
            _this.props.onClickOutside(event);
        };
        _this.setClickOutsideRef = function() {
            return _this.containerRef.current;
        };
        _this.handleDropdownFocus = function(event) {
            var _a, _b;
            if (isDropdownSelect(event.target)) {
                (_b = (_a = _this.props).onDropdownFocus) === null || _b === void 0 ? void 0 : _b.call(_a, event);
            }
        };
        _this.getDateInView = function() {
            var _a = _this.props, preSelection = _a.preSelection, selected = _a.selected, openToDate = _a.openToDate;
            var minDate = getEffectiveMinDate(_this.props);
            var maxDate = getEffectiveMaxDate(_this.props);
            var current = newDate();
            var initialDate = openToDate || selected || preSelection;
            if (initialDate) {
                return initialDate;
            } else {
                if (minDate && (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$isBefore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBefore"])(current, minDate)) {
                    return minDate;
                } else if (maxDate && (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$isAfter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAfter"])(current, maxDate)) {
                    return maxDate;
                }
            }
            return current;
        };
        _this.increaseMonth = function() {
            _this.setState(function(_a) {
                var date = _a.date;
                return {
                    date: (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$addMonths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addMonths"])(date, 1)
                };
            }, function() {
                return _this.handleMonthChange(_this.state.date);
            });
        };
        _this.decreaseMonth = function() {
            _this.setState(function(_a) {
                var date = _a.date;
                return {
                    date: (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$subMonths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subMonths"])(date, 1)
                };
            }, function() {
                return _this.handleMonthChange(_this.state.date);
            });
        };
        _this.handleDayClick = function(day, event, monthSelectedIn) {
            _this.props.onSelect(day, event, monthSelectedIn);
            _this.props.setPreSelection && _this.props.setPreSelection(day);
        };
        _this.handleDayMouseEnter = function(day) {
            _this.setState({
                selectingDate: day
            });
            _this.props.onDayMouseEnter && _this.props.onDayMouseEnter(day);
        };
        _this.handleMonthMouseLeave = function() {
            _this.setState({
                selectingDate: undefined
            });
            _this.props.onMonthMouseLeave && _this.props.onMonthMouseLeave();
        };
        _this.handleYearMouseEnter = function(event, year) {
            _this.setState({
                selectingDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$setYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setYear"])(newDate(), year)
            });
            !!_this.props.onYearMouseEnter && _this.props.onYearMouseEnter(event, year);
        };
        _this.handleYearMouseLeave = function(event, year) {
            !!_this.props.onYearMouseLeave && _this.props.onYearMouseLeave(event, year);
        };
        _this.handleYearChange = function(date) {
            var _a, _b, _c, _d;
            (_b = (_a = _this.props).onYearChange) === null || _b === void 0 ? void 0 : _b.call(_a, date);
            _this.setState({
                isRenderAriaLiveMessage: true
            });
            if (_this.props.adjustDateOnChange) {
                _this.props.onSelect(date);
                (_d = (_c = _this.props).setOpen) === null || _d === void 0 ? void 0 : _d.call(_c, true);
            }
            _this.props.setPreSelection && _this.props.setPreSelection(date);
        };
        _this.getEnabledPreSelectionDateForMonth = function(date) {
            if (!isDayDisabled(date, _this.props)) {
                return date;
            }
            var startOfMonth = getStartOfMonth(date);
            var endOfMonth = getEndOfMonth(date);
            var totalDays = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$differenceInDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["differenceInDays"])(endOfMonth, startOfMonth);
            var preSelectedDate = null;
            for(var dayIdx = 0; dayIdx <= totalDays; dayIdx++){
                var processingDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDays"])(startOfMonth, dayIdx);
                if (!isDayDisabled(processingDate, _this.props)) {
                    preSelectedDate = processingDate;
                    break;
                }
            }
            return preSelectedDate;
        };
        _this.handleMonthChange = function(date) {
            var _a, _b, _c;
            var enabledPreSelectionDate = (_a = _this.getEnabledPreSelectionDateForMonth(date)) !== null && _a !== void 0 ? _a : date;
            _this.handleCustomMonthChange(enabledPreSelectionDate);
            if (_this.props.adjustDateOnChange) {
                _this.props.onSelect(enabledPreSelectionDate);
                (_c = (_b = _this.props).setOpen) === null || _c === void 0 ? void 0 : _c.call(_b, true);
            }
            _this.props.setPreSelection && _this.props.setPreSelection(enabledPreSelectionDate);
        };
        _this.handleCustomMonthChange = function(date) {
            var _a, _b;
            (_b = (_a = _this.props).onMonthChange) === null || _b === void 0 ? void 0 : _b.call(_a, date);
            _this.setState({
                isRenderAriaLiveMessage: true
            });
        };
        _this.handleMonthYearChange = function(date) {
            _this.handleYearChange(date);
            _this.handleMonthChange(date);
        };
        _this.changeYear = function(year) {
            _this.setState(function(_a) {
                var date = _a.date;
                return {
                    date: (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$setYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setYear"])(date, Number(year))
                };
            }, function() {
                return _this.handleYearChange(_this.state.date);
            });
        };
        _this.changeMonth = function(month) {
            _this.setState(function(_a) {
                var date = _a.date;
                return {
                    date: (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$setMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setMonth"])(date, Number(month))
                };
            }, function() {
                return _this.handleMonthChange(_this.state.date);
            });
        };
        _this.changeMonthYear = function(monthYear) {
            _this.setState(function(_a) {
                var date = _a.date;
                return {
                    date: (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$setYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setYear"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$setMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setMonth"])(date, (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMonth"])(monthYear)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getYear"])(monthYear))
                };
            }, function() {
                return _this.handleMonthYearChange(_this.state.date);
            });
        };
        _this.header = function(date) {
            if (date === void 0) {
                date = _this.state.date;
            }
            var startOfWeek = getStartOfWeek(date, _this.props.locale, _this.props.calendarStartDay);
            var dayNames = [];
            if (_this.props.showWeekNumbers) {
                dayNames.push(__TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                    key: "W",
                    className: "react-datepicker__day-name",
                    role: "columnheader"
                }, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
                    className: "react-datepicker__sr-only"
                }, "Week number"), __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
                    "aria-hidden": "true"
                }, _this.props.weekLabel || "#")));
            }
            return dayNames.concat([
                0,
                1,
                2,
                3,
                4,
                5,
                6
            ].map(function(offset) {
                var day = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDays"])(startOfWeek, offset);
                var weekDayName = _this.formatWeekday(day, _this.props.locale);
                var weekDayClassName = _this.props.weekDayClassName ? _this.props.weekDayClassName(day) : undefined;
                return __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                    key: offset,
                    role: "columnheader",
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("react-datepicker__day-name", weekDayClassName)
                }, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
                    className: "react-datepicker__sr-only"
                }, formatDate(day, "EEEE", _this.props.locale)), __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
                    "aria-hidden": "true"
                }, weekDayName));
            }));
        };
        _this.formatWeekday = function(day, locale) {
            if (_this.props.formatWeekDay) {
                return getFormattedWeekdayInLocale(day, _this.props.formatWeekDay, locale);
            }
            return _this.props.useWeekdaysShort ? getWeekdayShortInLocale(day, locale) : getWeekdayMinInLocale(day, locale);
        };
        _this.decreaseYear = function() {
            _this.setState(function(_a) {
                var _b;
                var date = _a.date;
                return {
                    date: (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$subYears$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subYears"])(date, _this.props.showYearPicker ? (_b = _this.props.yearItemNumber) !== null && _b !== void 0 ? _b : Calendar.defaultProps.yearItemNumber : 1)
                };
            }, function() {
                return _this.handleYearChange(_this.state.date);
            });
        };
        _this.clearSelectingDate = function() {
            _this.setState({
                selectingDate: undefined
            });
        };
        _this.renderPreviousButton = function() {
            var _a, _b, _c;
            if (_this.props.renderCustomHeader) {
                return;
            }
            var monthsShown = (_a = _this.props.monthsShown) !== null && _a !== void 0 ? _a : Calendar.defaultProps.monthsShown;
            var monthsToSubtract = _this.props.showPreviousMonths ? monthsShown - 1 : 0;
            var monthSelectedIn = (_b = _this.props.monthSelectedIn) !== null && _b !== void 0 ? _b : monthsToSubtract;
            var fromMonthDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$subMonths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subMonths"])(_this.state.date, monthSelectedIn);
            var allPrevDaysDisabled;
            switch(true){
                case _this.props.showMonthYearPicker:
                    allPrevDaysDisabled = yearDisabledBefore(_this.state.date, _this.props);
                    break;
                case _this.props.showYearPicker:
                    allPrevDaysDisabled = yearsDisabledBefore(_this.state.date, _this.props);
                    break;
                case _this.props.showQuarterYearPicker:
                    allPrevDaysDisabled = quarterDisabledBefore(_this.state.date, _this.props);
                    break;
                default:
                    allPrevDaysDisabled = monthDisabledBefore(fromMonthDate, _this.props);
                    break;
            }
            if (!((_c = _this.props.forceShowMonthNavigation) !== null && _c !== void 0 ? _c : Calendar.defaultProps.forceShowMonthNavigation) && !_this.props.showDisabledMonthNavigation && allPrevDaysDisabled || _this.props.showTimeSelectOnly) {
                return;
            }
            var iconClasses = [
                "react-datepicker__navigation-icon",
                "react-datepicker__navigation-icon--previous"
            ];
            var classes = [
                "react-datepicker__navigation",
                "react-datepicker__navigation--previous"
            ];
            var clickHandler = _this.decreaseMonth;
            if (_this.props.showMonthYearPicker || _this.props.showQuarterYearPicker || _this.props.showYearPicker) {
                clickHandler = _this.decreaseYear;
            }
            if (allPrevDaysDisabled && _this.props.showDisabledMonthNavigation) {
                classes.push("react-datepicker__navigation--previous--disabled");
                clickHandler = undefined;
            }
            var isForYear = _this.props.showMonthYearPicker || _this.props.showQuarterYearPicker || _this.props.showYearPicker;
            var _d = _this.props, _e = _d.previousMonthButtonLabel, previousMonthButtonLabel = _e === void 0 ? Calendar.defaultProps.previousMonthButtonLabel : _e, _f = _d.previousYearButtonLabel, previousYearButtonLabel = _f === void 0 ? Calendar.defaultProps.previousYearButtonLabel : _f;
            var _g = _this.props, _h = _g.previousMonthAriaLabel, previousMonthAriaLabel = _h === void 0 ? typeof previousMonthButtonLabel === "string" ? previousMonthButtonLabel : "Previous Month" : _h, _j = _g.previousYearAriaLabel, previousYearAriaLabel = _j === void 0 ? typeof previousYearButtonLabel === "string" ? previousYearButtonLabel : "Previous Year" : _j;
            return __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
                type: "button",
                className: classes.join(" "),
                onClick: clickHandler,
                onKeyDown: _this.props.handleOnKeyDown,
                "aria-label": isForYear ? previousYearAriaLabel : previousMonthAriaLabel
            }, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
                className: iconClasses.join(" ")
            }, isForYear ? previousYearButtonLabel : previousMonthButtonLabel));
        };
        _this.increaseYear = function() {
            _this.setState(function(_a) {
                var _b;
                var date = _a.date;
                return {
                    date: (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$addYears$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addYears"])(date, _this.props.showYearPicker ? (_b = _this.props.yearItemNumber) !== null && _b !== void 0 ? _b : Calendar.defaultProps.yearItemNumber : 1)
                };
            }, function() {
                return _this.handleYearChange(_this.state.date);
            });
        };
        _this.renderNextButton = function() {
            var _a;
            if (_this.props.renderCustomHeader) {
                return;
            }
            var allNextDaysDisabled;
            switch(true){
                case _this.props.showMonthYearPicker:
                    allNextDaysDisabled = yearDisabledAfter(_this.state.date, _this.props);
                    break;
                case _this.props.showYearPicker:
                    allNextDaysDisabled = yearsDisabledAfter(_this.state.date, _this.props);
                    break;
                case _this.props.showQuarterYearPicker:
                    allNextDaysDisabled = quarterDisabledAfter(_this.state.date, _this.props);
                    break;
                default:
                    allNextDaysDisabled = monthDisabledAfter(_this.state.date, _this.props);
                    break;
            }
            if (!((_a = _this.props.forceShowMonthNavigation) !== null && _a !== void 0 ? _a : Calendar.defaultProps.forceShowMonthNavigation) && !_this.props.showDisabledMonthNavigation && allNextDaysDisabled || _this.props.showTimeSelectOnly) {
                return;
            }
            var classes = [
                "react-datepicker__navigation",
                "react-datepicker__navigation--next"
            ];
            var iconClasses = [
                "react-datepicker__navigation-icon",
                "react-datepicker__navigation-icon--next"
            ];
            if (_this.props.showTimeSelect) {
                classes.push("react-datepicker__navigation--next--with-time");
            }
            if (_this.props.todayButton) {
                classes.push("react-datepicker__navigation--next--with-today-button");
            }
            var clickHandler = _this.increaseMonth;
            if (_this.props.showMonthYearPicker || _this.props.showQuarterYearPicker || _this.props.showYearPicker) {
                clickHandler = _this.increaseYear;
            }
            if (allNextDaysDisabled && _this.props.showDisabledMonthNavigation) {
                classes.push("react-datepicker__navigation--next--disabled");
                clickHandler = undefined;
            }
            var isForYear = _this.props.showMonthYearPicker || _this.props.showQuarterYearPicker || _this.props.showYearPicker;
            var _b = _this.props, _c = _b.nextMonthButtonLabel, nextMonthButtonLabel = _c === void 0 ? Calendar.defaultProps.nextMonthButtonLabel : _c, _d = _b.nextYearButtonLabel, nextYearButtonLabel = _d === void 0 ? Calendar.defaultProps.nextYearButtonLabel : _d;
            var _e = _this.props, _f = _e.nextMonthAriaLabel, nextMonthAriaLabel = _f === void 0 ? typeof nextMonthButtonLabel === "string" ? nextMonthButtonLabel : "Next Month" : _f, _g = _e.nextYearAriaLabel, nextYearAriaLabel = _g === void 0 ? typeof nextYearButtonLabel === "string" ? nextYearButtonLabel : "Next Year" : _g;
            return __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
                type: "button",
                className: classes.join(" "),
                onClick: clickHandler,
                onKeyDown: _this.props.handleOnKeyDown,
                "aria-label": isForYear ? nextYearAriaLabel : nextMonthAriaLabel
            }, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
                className: iconClasses.join(" ")
            }, isForYear ? nextYearButtonLabel : nextMonthButtonLabel));
        };
        _this.renderCurrentMonth = function(date) {
            if (date === void 0) {
                date = _this.state.date;
            }
            var classes = [
                "react-datepicker__current-month"
            ];
            if (_this.props.showYearDropdown) {
                classes.push("react-datepicker__current-month--hasYearDropdown");
            }
            if (_this.props.showMonthDropdown) {
                classes.push("react-datepicker__current-month--hasMonthDropdown");
            }
            if (_this.props.showMonthYearDropdown) {
                classes.push("react-datepicker__current-month--hasMonthYearDropdown");
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("h2", {
                className: classes.join(" ")
            }, formatDate(date, _this.props.dateFormat, _this.props.locale));
        };
        _this.renderYearDropdown = function(overrideHide) {
            if (overrideHide === void 0) {
                overrideHide = false;
            }
            if (!_this.props.showYearDropdown || overrideHide) {
                return;
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(YearDropdown, _assign({}, Calendar.defaultProps, _this.props, {
                date: _this.state.date,
                onChange: _this.changeYear,
                year: (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getYear"])(_this.state.date)
            }));
        };
        _this.renderMonthDropdown = function(overrideHide) {
            if (overrideHide === void 0) {
                overrideHide = false;
            }
            if (!_this.props.showMonthDropdown || overrideHide) {
                return;
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(MonthDropdown, _assign({}, Calendar.defaultProps, _this.props, {
                month: (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMonth"])(_this.state.date),
                onChange: _this.changeMonth
            }));
        };
        _this.renderMonthYearDropdown = function(overrideHide) {
            if (overrideHide === void 0) {
                overrideHide = false;
            }
            if (!_this.props.showMonthYearDropdown || overrideHide) {
                return;
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(MonthYearDropdown, _assign({}, Calendar.defaultProps, _this.props, {
                date: _this.state.date,
                onChange: _this.changeMonthYear
            }));
        };
        _this.handleTodayButtonClick = function(event) {
            _this.props.onSelect(getStartOfToday(), event);
            _this.props.setPreSelection && _this.props.setPreSelection(getStartOfToday());
        };
        _this.renderTodayButton = function() {
            if (!_this.props.todayButton || _this.props.showTimeSelectOnly) {
                return;
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                className: "react-datepicker__today-button",
                onClick: _this.handleTodayButtonClick
            }, _this.props.todayButton);
        };
        _this.renderDayNamesHeader = function(monthDate) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                className: "react-datepicker__day-names",
                role: "row"
            }, _this.header(monthDate));
        };
        _this.renderDefaultHeader = function(_a) {
            var monthDate = _a.monthDate, i = _a.i;
            return __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                className: "react-datepicker__header ".concat(_this.props.showTimeSelect ? "react-datepicker__header--has-time-select" : "")
            }, _this.renderCurrentMonth(monthDate), __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                className: "react-datepicker__header__dropdown react-datepicker__header__dropdown--".concat(_this.props.dropdownMode),
                onFocus: _this.handleDropdownFocus
            }, _this.renderMonthDropdown(i !== 0), _this.renderMonthYearDropdown(i !== 0), _this.renderYearDropdown(i !== 0)));
        };
        _this.renderCustomHeader = function(headerArgs) {
            var _a, _b;
            var monthDate = headerArgs.monthDate, i = headerArgs.i;
            if (_this.props.showTimeSelect && !_this.state.monthContainer || _this.props.showTimeSelectOnly) {
                return null;
            }
            var _c = _this.props, showYearPicker = _c.showYearPicker, yearItemNumber = _c.yearItemNumber;
            var visibleYearsRange;
            if (showYearPicker) {
                var _d = getYearsPeriod(monthDate, yearItemNumber), startYear = _d.startPeriod, endYear = _d.endPeriod;
                visibleYearsRange = {
                    startYear: startYear,
                    endYear: endYear
                };
            }
            var prevMonthButtonDisabled = monthDisabledBefore(_this.state.date, _this.props);
            var nextMonthButtonDisabled = monthDisabledAfter(_this.state.date, _this.props);
            var prevYearButtonDisabled = yearDisabledBefore(_this.state.date, _this.props);
            var nextYearButtonDisabled = yearDisabledAfter(_this.state.date, _this.props);
            return __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                className: "react-datepicker__header react-datepicker__header--custom",
                onFocus: _this.props.onDropdownFocus
            }, (_b = (_a = _this.props).renderCustomHeader) === null || _b === void 0 ? void 0 : _b.call(_a, _assign(_assign(_assign({}, _this.state), showYearPicker && {
                visibleYearsRange: visibleYearsRange
            }), {
                customHeaderCount: i,
                monthDate: monthDate,
                changeMonth: _this.changeMonth,
                changeYear: _this.changeYear,
                decreaseMonth: _this.decreaseMonth,
                increaseMonth: _this.increaseMonth,
                decreaseYear: _this.decreaseYear,
                increaseYear: _this.increaseYear,
                prevMonthButtonDisabled: prevMonthButtonDisabled,
                nextMonthButtonDisabled: nextMonthButtonDisabled,
                prevYearButtonDisabled: prevYearButtonDisabled,
                nextYearButtonDisabled: nextYearButtonDisabled
            })));
        };
        _this.renderYearHeader = function(_a) {
            var monthDate = _a.monthDate;
            var _b = _this.props, showYearPicker = _b.showYearPicker, _c = _b.yearItemNumber, yearItemNumber = _c === void 0 ? Calendar.defaultProps.yearItemNumber : _c;
            var _d = getYearsPeriod(monthDate, yearItemNumber), startPeriod = _d.startPeriod, endPeriod = _d.endPeriod;
            return __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                className: "react-datepicker__header react-datepicker-year-header"
            }, showYearPicker ? "".concat(startPeriod, " - ").concat(endPeriod) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getYear"])(monthDate));
        };
        _this.renderHeader = function(_a) {
            var monthDate = _a.monthDate, _b = _a.i, i = _b === void 0 ? 0 : _b;
            var headerArgs = {
                monthDate: monthDate,
                i: i
            };
            switch(true){
                case _this.props.renderCustomHeader !== undefined:
                    return _this.renderCustomHeader(headerArgs);
                case _this.props.showMonthYearPicker || _this.props.showQuarterYearPicker || _this.props.showYearPicker:
                    return _this.renderYearHeader(headerArgs);
                default:
                    return _this.renderDefaultHeader(headerArgs);
            }
        };
        _this.renderMonths = function() {
            var _a, _b;
            if (_this.props.showTimeSelectOnly || _this.props.showYearPicker) {
                return;
            }
            var monthList = [];
            var monthsShown = (_a = _this.props.monthsShown) !== null && _a !== void 0 ? _a : Calendar.defaultProps.monthsShown;
            var monthsToSubtract = _this.props.showPreviousMonths ? monthsShown - 1 : 0;
            var fromMonthDate = _this.props.showMonthYearPicker || _this.props.showQuarterYearPicker ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$addYears$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addYears"])(_this.state.date, monthsToSubtract) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$subMonths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subMonths"])(_this.state.date, monthsToSubtract);
            var monthSelectedIn = (_b = _this.props.monthSelectedIn) !== null && _b !== void 0 ? _b : monthsToSubtract;
            for(var i = 0; i < monthsShown; ++i){
                var monthsToAdd = i - monthSelectedIn + monthsToSubtract;
                var monthDate = _this.props.showMonthYearPicker || _this.props.showQuarterYearPicker ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$addYears$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addYears"])(fromMonthDate, monthsToAdd) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$addMonths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addMonths"])(fromMonthDate, monthsToAdd);
                var monthKey = "month-".concat(i);
                var monthShowsDuplicateDaysEnd = i < monthsShown - 1;
                var monthShowsDuplicateDaysStart = i > 0;
                monthList.push(__TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                    key: monthKey,
                    ref: function(div) {
                        _this.monthContainer = div !== null && div !== void 0 ? div : undefined;
                    },
                    className: "react-datepicker__month-container"
                }, _this.renderHeader({
                    monthDate: monthDate,
                    i: i
                }), __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Month, _assign({}, Calendar.defaultProps, _this.props, {
                    containerRef: _this.containerRef,
                    ariaLabelPrefix: _this.props.monthAriaLabelPrefix,
                    day: monthDate,
                    onDayClick: _this.handleDayClick,
                    handleOnKeyDown: _this.props.handleOnDayKeyDown,
                    handleOnMonthKeyDown: _this.props.handleOnKeyDown,
                    onDayMouseEnter: _this.handleDayMouseEnter,
                    onMouseLeave: _this.handleMonthMouseLeave,
                    orderInDisplay: i,
                    selectingDate: _this.state.selectingDate,
                    monthShowsDuplicateDaysEnd: monthShowsDuplicateDaysEnd,
                    monthShowsDuplicateDaysStart: monthShowsDuplicateDaysStart,
                    dayNamesHeader: _this.renderDayNamesHeader(monthDate)
                }))));
            }
            return monthList;
        };
        _this.renderYears = function() {
            if (_this.props.showTimeSelectOnly) {
                return;
            }
            if (_this.props.showYearPicker) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                    className: "react-datepicker__year--container"
                }, _this.renderHeader({
                    monthDate: _this.state.date
                }), __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Year, _assign({}, Calendar.defaultProps, _this.props, {
                    selectingDate: _this.state.selectingDate,
                    date: _this.state.date,
                    onDayClick: _this.handleDayClick,
                    clearSelectingDate: _this.clearSelectingDate,
                    onYearMouseEnter: _this.handleYearMouseEnter,
                    onYearMouseLeave: _this.handleYearMouseLeave
                })));
            }
            return;
        };
        _this.renderTimeSection = function() {
            if (_this.props.showTimeSelect && (_this.state.monthContainer || _this.props.showTimeSelectOnly)) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Time, _assign({}, Calendar.defaultProps, _this.props, {
                    onChange: _this.props.onTimeChange,
                    format: _this.props.timeFormat,
                    intervals: _this.props.timeIntervals,
                    monthRef: _this.state.monthContainer
                }));
            }
            return;
        };
        _this.renderInputTimeSection = function() {
            var time = _this.props.selected ? new Date(_this.props.selected) : undefined;
            var timeValid = time && isValid(time) && Boolean(_this.props.selected);
            var timeString = timeValid ? "".concat(addZero(time.getHours()), ":").concat(addZero(time.getMinutes())) : "";
            if (_this.props.showTimeInput) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(InputTime, _assign({}, Calendar.defaultProps, _this.props, {
                    date: time,
                    timeString: timeString,
                    onChange: _this.props.onTimeChange
                }));
            }
            return;
        };
        _this.renderAriaLiveRegion = function() {
            var _a;
            var _b = getYearsPeriod(_this.state.date, (_a = _this.props.yearItemNumber) !== null && _a !== void 0 ? _a : Calendar.defaultProps.yearItemNumber), startPeriod = _b.startPeriod, endPeriod = _b.endPeriod;
            var ariaLiveMessage;
            if (_this.props.showYearPicker) {
                ariaLiveMessage = "".concat(startPeriod, " - ").concat(endPeriod);
            } else if (_this.props.showMonthYearPicker || _this.props.showQuarterYearPicker) {
                ariaLiveMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getYear"])(_this.state.date);
            } else {
                ariaLiveMessage = "".concat(getMonthInLocale((0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMonth"])(_this.state.date), _this.props.locale), " ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getYear"])(_this.state.date));
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
                role: "alert",
                "aria-live": "polite",
                className: "react-datepicker__aria-live"
            }, _this.state.isRenderAriaLiveMessage && ariaLiveMessage);
        };
        _this.renderChildren = function() {
            if (_this.props.children) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                    className: "react-datepicker__children-container"
                }, _this.props.children);
            }
            return;
        };
        _this.containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRef"])();
        _this.state = {
            date: _this.getDateInView(),
            selectingDate: undefined,
            monthContainer: undefined,
            isRenderAriaLiveMessage: false
        };
        return _this;
    }
    Object.defineProperty(Calendar, "defaultProps", {
        get: function() {
            return {
                monthsShown: 1,
                forceShowMonthNavigation: false,
                outsideClickIgnoreClass: OUTSIDE_CLICK_IGNORE_CLASS,
                timeCaption: "Time",
                previousYearButtonLabel: "Previous Year",
                nextYearButtonLabel: "Next Year",
                previousMonthButtonLabel: "Previous Month",
                nextMonthButtonLabel: "Next Month",
                yearItemNumber: DEFAULT_YEAR_ITEM_NUMBER
            };
        },
        enumerable: false,
        configurable: true
    });
    Calendar.prototype.componentDidMount = function() {
        var _this = this;
        // monthContainer height is needed in time component
        // to determine the height for the ul in the time component
        // setState here so height is given after final component
        // layout is rendered
        if (this.props.showTimeSelect) {
            this.assignMonthContainer = function() {
                _this.setState({
                    monthContainer: _this.monthContainer
                });
            }();
        }
    };
    Calendar.prototype.componentDidUpdate = function(prevProps) {
        var _this = this;
        if (this.props.preSelection && (!isSameDay(this.props.preSelection, prevProps.preSelection) || this.props.monthSelectedIn !== prevProps.monthSelectedIn)) {
            var hasMonthChanged_1 = !isSameMonth(this.state.date, this.props.preSelection);
            this.setState({
                date: this.props.preSelection
            }, function() {
                return hasMonthChanged_1 && _this.handleCustomMonthChange(_this.state.date);
            });
        } else if (this.props.openToDate && !isSameDay(this.props.openToDate, prevProps.openToDate)) {
            this.setState({
                date: this.props.openToDate
            });
        }
    };
    Calendar.prototype.render = function() {
        var Container = this.props.container || CalendarContainer;
        return __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(ClickOutsideWrapper, {
            onClickOutside: this.handleClickOutside,
            style: {
                display: "contents"
            },
            ignoreClass: this.props.outsideClickIgnoreClass
        }, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            style: {
                display: "contents"
            },
            ref: this.containerRef
        }, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Container, {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("react-datepicker", this.props.className, {
                "react-datepicker--time-only": this.props.showTimeSelectOnly
            }),
            showTime: this.props.showTimeSelect || this.props.showTimeInput,
            showTimeSelectOnly: this.props.showTimeSelectOnly
        }, this.renderAriaLiveRegion(), this.renderPreviousButton(), this.renderNextButton(), this.renderMonths(), this.renderYears(), this.renderTodayButton(), this.renderTimeSection(), this.renderInputTimeSection(), this.renderChildren())));
    };
    return Calendar;
}(__TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"]);
/**
 * `CalendarIcon` is a React component that renders an icon for a calendar.
 * The icon can be a string representing a CSS class, a React node, or a default SVG icon.
 *
 * @component
 * @prop  icon - The icon to be displayed. This can be a string representing a CSS class or a React node.
 * @prop  className - An optional string representing additional CSS classes to be applied to the icon.
 * @prop  onClick - An optional function to be called when the icon is clicked.
 *
 * @example
 * // To use a CSS class as the icon
 * <CalendarIcon icon="my-icon-class" onClick={myClickHandler} />
 *
 * @example
 * // To use a React node as the icon
 * <CalendarIcon icon={<MyIconComponent />} onClick={myClickHandler} />
 *
 * @returns  The `CalendarIcon` component.
 */ var CalendarIcon = function(_a) {
    var icon = _a.icon, _b = _a.className, className = _b === void 0 ? "" : _b, onClick = _a.onClick;
    var defaultClass = "react-datepicker__calendar-icon";
    if (typeof icon === "string") {
        return __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("i", {
            className: "".concat(defaultClass, " ").concat(icon, " ").concat(className),
            "aria-hidden": "true",
            onClick: onClick
        });
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isValidElement(icon)) {
        // Because we are checking that typeof icon is string first, we can safely cast icon as React.ReactElement on types level and code level
        var iconElement_1 = icon;
        return __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cloneElement(iconElement_1, {
            className: "".concat(iconElement_1.props.className || "", " ").concat(defaultClass, " ").concat(className),
            onClick: function(event) {
                if (typeof iconElement_1.props.onClick === "function") {
                    iconElement_1.props.onClick(event);
                }
                if (typeof onClick === "function") {
                    onClick(event);
                }
            }
        });
    }
    // Default SVG Icon
    return __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        className: "".concat(defaultClass, " ").concat(className),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 448 512",
        onClick: onClick
    }, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z"
    }));
};
/**
 * `Portal` is a React component that allows you to render children into a DOM node
 * that exists outside the DOM hierarchy of the parent component.
 *
 * @class
 * @param {PortalProps} props - The properties that define the `Portal` component.
 * @property {React.ReactNode} props.children - The children to be rendered into the `Portal`.
 * @property {string} props.portalId - The id of the DOM node into which the `Portal` will render.
 * @property {ShadowRoot} [props.portalHost] - The DOM node to host the `Portal`.
 */ var Portal = function(_super) {
    __extends(Portal, _super);
    function Portal(props) {
        var _this = _super.call(this, props) || this;
        _this.portalRoot = null;
        _this.el = document.createElement("div");
        return _this;
    }
    Portal.prototype.componentDidMount = function() {
        this.portalRoot = (this.props.portalHost || document).getElementById(this.props.portalId);
        if (!this.portalRoot) {
            this.portalRoot = document.createElement("div");
            this.portalRoot.setAttribute("id", this.props.portalId);
            (this.props.portalHost || document.body).appendChild(this.portalRoot);
        }
        this.portalRoot.appendChild(this.el);
    };
    Portal.prototype.componentWillUnmount = function() {
        if (this.portalRoot) {
            this.portalRoot.removeChild(this.el);
        }
    };
    Portal.prototype.render = function() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createPortal(this.props.children, this.el);
    };
    return Portal;
}(__TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"]);
var focusableElementsSelector = "[tabindex], a, button, input, select, textarea";
var focusableFilter = function(node) {
    if (node instanceof HTMLAnchorElement) {
        return node.tabIndex !== -1;
    }
    return !node.disabled && node.tabIndex !== -1;
};
/**
 * `TabLoop` is a React component that manages tabbing behavior for its children.
 *
 * TabLoop prevents the user from tabbing outside of the popper
 * It creates a tabindex loop so that "Tab" on the last element will focus the first element
 * and "Shift Tab" on the first element will focus the last element
 *
 * @component
 * @example
 * <TabLoop enableTabLoop={true}>
 *   <ChildComponent />
 * </TabLoop>
 *
 * @param props - The properties that define the `TabLoop` component.
 * @param props.children - The child components.
 * @param props.enableTabLoop - Whether to enable the tab loop.
 *
 * @returns The `TabLoop` component.
 */ var TabLoop = function(_super) {
    __extends(TabLoop, _super);
    function TabLoop(props) {
        var _this = _super.call(this, props) || this;
        /**
         * `getTabChildren` is a method of the `TabLoop` class that retrieves all tabbable children of the component.
         *
         * This method uses the `tabbable` library to find all tabbable elements within the `TabLoop` component.
         * It then filters out any elements that are not visible.
         *
         * @returns An array of all tabbable and visible children of the `TabLoop` component.
         */ _this.getTabChildren = function() {
            var _a;
            return Array.prototype.slice.call((_a = _this.tabLoopRef.current) === null || _a === void 0 ? void 0 : _a.querySelectorAll(focusableElementsSelector), 1, -1).filter(focusableFilter);
        };
        _this.handleFocusStart = function() {
            var tabChildren = _this.getTabChildren();
            tabChildren && tabChildren.length > 1 && tabChildren[tabChildren.length - 1].focus();
        };
        _this.handleFocusEnd = function() {
            var tabChildren = _this.getTabChildren();
            tabChildren && tabChildren.length > 1 && tabChildren[0].focus();
        };
        _this.tabLoopRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRef"])();
        return _this;
    }
    TabLoop.prototype.render = function() {
        var _a;
        if (!((_a = this.props.enableTabLoop) !== null && _a !== void 0 ? _a : TabLoop.defaultProps.enableTabLoop)) {
            return this.props.children;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "react-datepicker__tab-loop",
            ref: this.tabLoopRef
        }, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "react-datepicker__tab-loop__start",
            tabIndex: 0,
            onFocus: this.handleFocusStart
        }), this.props.children, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "react-datepicker__tab-loop__end",
            tabIndex: 0,
            onFocus: this.handleFocusEnd
        }));
    };
    TabLoop.defaultProps = {
        enableTabLoop: true
    };
    return TabLoop;
}(__TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"]);
/**
 * `withFloating` is a higher-order component that adds floating behavior to a component.
 *
 * @param Component - The component to enhance.
 *
 * @example
 * const FloatingComponent = withFloating(MyComponent);
 * <FloatingComponent popperModifiers={[]} popperProps={{}} hidePopper={true} />
 *
 * @param popperModifiers - The modifiers to use for the popper.
 * @param popperProps - The props to pass to the popper.
 * @param hidePopper - Whether to hide the popper.
 * @param popperPlacement - The placement of the popper.
 *
 * @returns A new component with floating behavior.
 */ function withFloating(Component) {
    function WithFloating(props) {
        var _a;
        var hidePopper = typeof props.hidePopper === "boolean" ? props.hidePopper : true;
        var arrowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
        var floatingProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useFloating"])(_assign({
            open: !hidePopper,
            whileElementsMounted: __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["autoUpdate"],
            placement: props.popperPlacement,
            middleware: __spreadArray([
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flip"])({
                    padding: 15
                }),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["offset"])(10),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["arrow"])({
                    element: arrowRef
                })
            ], (_a = props.popperModifiers) !== null && _a !== void 0 ? _a : [], true)
        }, props.popperProps));
        var componentProps = _assign(_assign({}, props), {
            hidePopper: hidePopper,
            popperProps: _assign(_assign({}, floatingProps), {
                arrowRef: arrowRef
            })
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Component, _assign({}, componentProps));
    }
    WithFloating.displayName = "withFloating(".concat(Component.displayName || Component.name || "Component", ")");
    return WithFloating;
}
// Exported for testing purposes
var PopperComponent = function(props) {
    var className = props.className, wrapperClassName = props.wrapperClassName, _a = props.hidePopper, hidePopper = _a === void 0 ? true : _a, popperComponent = props.popperComponent, targetComponent = props.targetComponent, enableTabLoop = props.enableTabLoop, popperOnKeyDown = props.popperOnKeyDown, portalId = props.portalId, portalHost = props.portalHost, popperProps = props.popperProps, showArrow = props.showArrow;
    var popper = undefined;
    if (!hidePopper) {
        var classes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("react-datepicker-popper", className);
        popper = __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(TabLoop, {
            enableTabLoop: enableTabLoop
        }, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            ref: popperProps.refs.setFloating,
            style: popperProps.floatingStyles,
            className: classes,
            "data-placement": popperProps.placement,
            onKeyDown: popperOnKeyDown
        }, popperComponent, showArrow && __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f40$floating$2d$ui$2f$react$2f$dist$2f$floating$2d$ui$2e$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["FloatingArrow"], {
            ref: popperProps.arrowRef,
            context: popperProps.context,
            fill: "currentColor",
            strokeWidth: 1,
            height: 8,
            width: 16,
            style: {
                transform: "translateY(-1px)"
            },
            className: "react-datepicker__triangle"
        })));
    }
    if (props.popperContainer) {
        popper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(props.popperContainer, {}, popper);
    }
    if (portalId && !hidePopper) {
        popper = __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Portal, {
            portalId: portalId,
            portalHost: portalHost
        }, popper);
    }
    var wrapperClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("react-datepicker-wrapper", wrapperClassName);
    return __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ref: popperProps.refs.setReference,
        className: wrapperClasses
    }, targetComponent), popper);
};
var PopperComponent$1 = withFloating(PopperComponent);
// Compares dates year+month combinations
function hasPreSelectionChanged(date1, date2) {
    if (date1 && date2) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMonth"])(date1) !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMonth"])(date2) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getYear"])(date1) !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getYear"])(date2);
    }
    return date1 !== date2;
}
/**
 * General datepicker component.
 */ var INPUT_ERR_1 = "Date input not valid.";
var DatePicker = function(_super) {
    __extends(DatePicker, _super);
    function DatePicker(props) {
        var _this = _super.call(this, props) || this;
        _this.calendar = null;
        _this.input = null;
        _this.getPreSelection = function() {
            return _this.props.openToDate ? _this.props.openToDate : _this.props.selectsEnd && _this.props.startDate ? _this.props.startDate : _this.props.selectsStart && _this.props.endDate ? _this.props.endDate : newDate();
        };
        // Convert the date from string format to standard Date format
        _this.modifyHolidays = function() {
            var _a;
            return (_a = _this.props.holidays) === null || _a === void 0 ? void 0 : _a.reduce(function(accumulator, holiday) {
                var date = new Date(holiday.date);
                if (!isValid(date)) {
                    return accumulator;
                }
                return __spreadArray(__spreadArray([], accumulator, true), [
                    _assign(_assign({}, holiday), {
                        date: date
                    })
                ], false);
            }, []);
        };
        _this.calcInitialState = function() {
            var _a;
            var defaultPreSelection = _this.getPreSelection();
            var minDate = getEffectiveMinDate(_this.props);
            var maxDate = getEffectiveMaxDate(_this.props);
            var boundedPreSelection = minDate && (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$isBefore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBefore"])(defaultPreSelection, getStartOfDay(minDate)) ? minDate : maxDate && (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$isAfter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAfter"])(defaultPreSelection, getEndOfDay(maxDate)) ? maxDate : defaultPreSelection;
            return {
                open: _this.props.startOpen || false,
                preventFocus: false,
                inputValue: null,
                preSelection: (_a = _this.props.selectsRange ? _this.props.startDate : _this.props.selected) !== null && _a !== void 0 ? _a : boundedPreSelection,
                // transforming highlighted days (perhaps nested array)
                // to flat Map for faster access in day.jsx
                highlightDates: getHighLightDaysMap(_this.props.highlightDates),
                focused: false,
                // used to focus day in inline version after month has changed, but not on
                // initial render
                shouldFocusDayInline: false,
                isRenderAriaLiveMessage: false,
                wasHidden: false
            };
        };
        _this.getInputValue = function() {
            var _a;
            var _b = _this.props, locale = _b.locale, startDate = _b.startDate, endDate = _b.endDate, rangeSeparator = _b.rangeSeparator, selected = _b.selected, selectedDates = _b.selectedDates, selectsMultiple = _b.selectsMultiple, selectsRange = _b.selectsRange, value = _b.value;
            var dateFormat = (_a = _this.props.dateFormat) !== null && _a !== void 0 ? _a : DatePicker.defaultProps.dateFormat;
            var inputValue = _this.state.inputValue;
            if (typeof value === "string") {
                return value;
            } else if (typeof inputValue === "string") {
                return inputValue;
            } else if (selectsRange) {
                return safeDateRangeFormat(startDate, endDate, {
                    dateFormat: dateFormat,
                    locale: locale,
                    rangeSeparator: rangeSeparator
                });
            } else if (selectsMultiple) {
                return safeMultipleDatesFormat(selectedDates !== null && selectedDates !== void 0 ? selectedDates : [], {
                    dateFormat: dateFormat,
                    locale: locale
                });
            }
            return safeDateFormat(selected, {
                dateFormat: dateFormat,
                locale: locale
            });
        };
        _this.resetHiddenStatus = function() {
            _this.setState(_assign(_assign({}, _this.state), {
                wasHidden: false
            }));
        };
        _this.setHiddenStatus = function() {
            _this.setState(_assign(_assign({}, _this.state), {
                wasHidden: true
            }));
        };
        _this.setHiddenStateOnVisibilityHidden = function() {
            if (document.visibilityState !== "hidden") {
                return;
            }
            _this.setHiddenStatus();
        };
        _this.clearPreventFocusTimeout = function() {
            if (_this.preventFocusTimeout) {
                clearTimeout(_this.preventFocusTimeout);
            }
        };
        _this.setFocus = function() {
            var _a, _b;
            (_b = (_a = _this.input) === null || _a === void 0 ? void 0 : _a.focus) === null || _b === void 0 ? void 0 : _b.call(_a, {
                preventScroll: true
            });
        };
        _this.setBlur = function() {
            var _a, _b;
            (_b = (_a = _this.input) === null || _a === void 0 ? void 0 : _a.blur) === null || _b === void 0 ? void 0 : _b.call(_a);
            _this.cancelFocusInput();
        };
        _this.deferBlur = function() {
            requestAnimationFrame(function() {
                _this.setBlur();
            });
        };
        _this.setOpen = function(open, skipSetBlur) {
            if (skipSetBlur === void 0) {
                skipSetBlur = false;
            }
            _this.setState({
                open: open,
                preSelection: open && _this.state.open ? _this.state.preSelection : _this.calcInitialState().preSelection,
                lastPreSelectChange: PRESELECT_CHANGE_VIA_NAVIGATE
            }, function() {
                if (!open) {
                    _this.setState(function(prev) {
                        return {
                            focused: skipSetBlur ? prev.focused : false
                        };
                    }, function() {
                        !skipSetBlur && _this.deferBlur();
                        _this.setState({
                            inputValue: null
                        });
                    });
                }
            });
        };
        _this.inputOk = function() {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$isDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDate"])(_this.state.preSelection);
        };
        _this.isCalendarOpen = function() {
            return _this.props.open === undefined ? _this.state.open && !_this.props.disabled && !_this.props.readOnly : _this.props.open;
        };
        _this.handleFocus = function(event) {
            var _a, _b;
            var isAutoReFocus = _this.state.wasHidden;
            var isOpenAllowed = isAutoReFocus ? _this.state.open : true;
            if (isAutoReFocus) {
                _this.resetHiddenStatus();
            }
            if (!_this.state.preventFocus) {
                (_b = (_a = _this.props).onFocus) === null || _b === void 0 ? void 0 : _b.call(_a, event);
                if (isOpenAllowed && !_this.props.preventOpenOnFocus && !_this.props.readOnly) {
                    _this.setOpen(true);
                }
            }
            _this.setState({
                focused: true
            });
        };
        _this.sendFocusBackToInput = function() {
            // Clear previous timeout if it exists
            if (_this.preventFocusTimeout) {
                _this.clearPreventFocusTimeout();
            }
            // close the popper and refocus the input
            // stop the input from auto opening onFocus
            // setFocus to the input
            _this.setState({
                preventFocus: true
            }, function() {
                _this.preventFocusTimeout = setTimeout(function() {
                    _this.setFocus();
                    _this.setState({
                        preventFocus: false
                    });
                });
            });
        };
        _this.cancelFocusInput = function() {
            clearTimeout(_this.inputFocusTimeout);
            _this.inputFocusTimeout = undefined;
        };
        _this.deferFocusInput = function() {
            _this.cancelFocusInput();
            _this.inputFocusTimeout = setTimeout(function() {
                return _this.setFocus();
            }, 1);
        };
        _this.handleDropdownFocus = function() {
            _this.cancelFocusInput();
        };
        _this.resetInputValue = function() {
            _this.setState(_assign(_assign({}, _this.state), {
                inputValue: null
            }));
        };
        _this.handleBlur = function(event) {
            var _a, _b;
            if (!_this.state.open || _this.props.withPortal || _this.props.showTimeInput) {
                (_b = (_a = _this.props).onBlur) === null || _b === void 0 ? void 0 : _b.call(_a, event);
            }
            _this.resetInputValue();
            if (_this.state.open && _this.props.open === false) {
                _this.setOpen(false);
            }
            _this.setState({
                focused: false
            });
        };
        _this.handleCalendarClickOutside = function(event) {
            var _a, _b;
            if (!_this.props.inline) {
                _this.setOpen(false);
            }
            (_b = (_a = _this.props).onClickOutside) === null || _b === void 0 ? void 0 : _b.call(_a, event);
            if (_this.props.withPortal) {
                event.preventDefault();
            }
        };
        // handleChange is called when user types in the textbox
        _this.handleChange = function() {
            var _a, _b, _c, _d, _e;
            var allArgs = [];
            for(var _i = 0; _i < arguments.length; _i++){
                allArgs[_i] = arguments[_i];
            }
            var event = allArgs[0];
            if (_this.props.onChangeRaw) {
                _this.props.onChangeRaw.apply(_this, allArgs);
                if (!event || typeof event.isDefaultPrevented !== "function" || event.isDefaultPrevented()) {
                    return;
                }
            }
            _this.setState({
                inputValue: (event === null || event === void 0 ? void 0 : event.target) instanceof HTMLInputElement ? event.target.value : null,
                lastPreSelectChange: PRESELECT_CHANGE_VIA_INPUT
            });
            var _f = _this.props, selectsRange = _f.selectsRange, startDate = _f.startDate, endDate = _f.endDate;
            var dateFormat = (_a = _this.props.dateFormat) !== null && _a !== void 0 ? _a : DatePicker.defaultProps.dateFormat;
            var strictParsing = (_b = _this.props.strictParsing) !== null && _b !== void 0 ? _b : DatePicker.defaultProps.strictParsing;
            var value = (event === null || event === void 0 ? void 0 : event.target) instanceof HTMLInputElement ? event.target.value : "";
            if (selectsRange) {
                var rangeSeparator = _this.props.rangeSeparator;
                var trimmedRangeSeparator = rangeSeparator.trim();
                var _g = value.split(dateFormat.includes(trimmedRangeSeparator) ? rangeSeparator : trimmedRangeSeparator, 2).map(function(val) {
                    return val.trim();
                }), valueStart = _g[0], valueEnd = _g[1];
                var startDateNew = parseDate(valueStart !== null && valueStart !== void 0 ? valueStart : "", dateFormat, _this.props.locale, strictParsing);
                var endDateNew = startDateNew ? parseDate(valueEnd !== null && valueEnd !== void 0 ? valueEnd : "", dateFormat, _this.props.locale, strictParsing) : null;
                var startChanged = (startDate === null || startDate === void 0 ? void 0 : startDate.getTime()) !== (startDateNew === null || startDateNew === void 0 ? void 0 : startDateNew.getTime());
                var endChanged = (endDate === null || endDate === void 0 ? void 0 : endDate.getTime()) !== (endDateNew === null || endDateNew === void 0 ? void 0 : endDateNew.getTime());
                if (!startChanged && !endChanged) {
                    return;
                }
                if (startDateNew && isDayDisabled(startDateNew, _this.props)) {
                    return;
                }
                if (endDateNew && isDayDisabled(endDateNew, _this.props)) {
                    return;
                }
                (_d = (_c = _this.props).onChange) === null || _d === void 0 ? void 0 : _d.call(_c, [
                    startDateNew,
                    endDateNew
                ], event);
            } else {
                // not selectsRange
                var date = parseDate(value, dateFormat, _this.props.locale, strictParsing, (_e = _this.props.selected) !== null && _e !== void 0 ? _e : undefined);
                // Update selection if either (1) date was successfully parsed, or (2) input field is empty
                if (date || !value) {
                    _this.setSelected(date, event, true);
                }
            }
        };
        _this.handleSelect = function(date, event, monthSelectedIn) {
            if (_this.props.readOnly) return;
            var _a = _this.props, selectsRange = _a.selectsRange, startDate = _a.startDate, endDate = _a.endDate, swapRange = _a.swapRange;
            var isDateSelectionComplete = !selectsRange || startDate && !endDate && (swapRange || !isDateBefore(date, startDate));
            if (_this.props.shouldCloseOnSelect && !_this.props.showTimeSelect && isDateSelectionComplete) {
                // Preventing onFocus event to fix issue
                // https://github.com/Hacker0x01/react-datepicker/issues/628
                _this.sendFocusBackToInput();
            }
            if (_this.props.onChangeRaw) {
                _this.props.onChangeRaw(event);
            }
            _this.setSelected(date, event, false, monthSelectedIn);
            if (_this.props.showDateSelect) {
                _this.setState({
                    isRenderAriaLiveMessage: true
                });
            }
            if (!_this.props.shouldCloseOnSelect || _this.props.showTimeSelect) {
                _this.setPreSelection(date);
            } else if (isDateSelectionComplete) {
                _this.setOpen(false);
            }
        };
        // setSelected is called either from handleChange (user typed date into textbox and it was parsed) or handleSelect (user selected date from calendar using mouse or keyboard)
        _this.setSelected = function(date, event, keepInput, monthSelectedIn) {
            var _a, _b;
            var changedDate = date;
            // Early return if selected year/month/day is disabled
            if (_this.props.showYearPicker) {
                if (changedDate !== null && isYearDisabled((0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getYear"])(changedDate), _this.props)) {
                    return;
                }
            } else if (_this.props.showMonthYearPicker) {
                if (changedDate !== null && isMonthDisabled(changedDate, _this.props)) {
                    return;
                }
            } else {
                if (changedDate !== null && isDayDisabled(changedDate, _this.props)) {
                    return;
                }
            }
            var _c = _this.props, onChange = _c.onChange, selectsRange = _c.selectsRange, startDate = _c.startDate, endDate = _c.endDate, selectsMultiple = _c.selectsMultiple, selectedDates = _c.selectedDates, minTime = _c.minTime, swapRange = _c.swapRange;
            if (!isEqual(_this.props.selected, changedDate) || _this.props.allowSameDay || selectsRange || selectsMultiple) {
                if (changedDate !== null) {
                    // Preserve previously selected time if only date is currently being changed
                    if (_this.props.selected && (!keepInput || !_this.props.showTimeSelect && !_this.props.showTimeSelectOnly && !_this.props.showTimeInput)) {
                        changedDate = setTime(changedDate, {
                            hour: (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getHours$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHours"])(_this.props.selected),
                            minute: (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getMinutes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMinutes"])(_this.props.selected),
                            second: (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getSeconds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSeconds"])(_this.props.selected)
                        });
                    }
                    // If minTime is present then set the time to minTime
                    if (!keepInput && (_this.props.showTimeSelect || _this.props.showTimeSelectOnly)) {
                        if (minTime) {
                            changedDate = setTime(changedDate, {
                                hour: minTime.getHours(),
                                minute: minTime.getMinutes(),
                                second: minTime.getSeconds()
                            });
                        }
                    }
                    if (!_this.props.inline) {
                        _this.setState({
                            preSelection: changedDate
                        });
                    }
                    if (!_this.props.focusSelectedMonth) {
                        _this.setState({
                            monthSelectedIn: monthSelectedIn
                        });
                    }
                }
                if (selectsRange) {
                    var noRanges = !startDate && !endDate;
                    var hasStartRange = startDate && !endDate;
                    var hasOnlyEndRange = !startDate && !!endDate;
                    var isRangeFilled = startDate && endDate;
                    if (noRanges) {
                        onChange === null || onChange === void 0 ? void 0 : onChange([
                            changedDate,
                            null
                        ], event);
                    } else if (hasStartRange) {
                        if (changedDate === null) {
                            onChange === null || onChange === void 0 ? void 0 : onChange([
                                null,
                                null
                            ], event);
                        } else if (isDateBefore(changedDate, startDate)) {
                            if (swapRange) {
                                onChange === null || onChange === void 0 ? void 0 : onChange([
                                    changedDate,
                                    startDate
                                ], event);
                            } else {
                                onChange === null || onChange === void 0 ? void 0 : onChange([
                                    changedDate,
                                    null
                                ], event);
                            }
                        } else {
                            onChange === null || onChange === void 0 ? void 0 : onChange([
                                startDate,
                                changedDate
                            ], event);
                        }
                    } else if (hasOnlyEndRange) {
                        if (changedDate && isDateBefore(changedDate, endDate)) {
                            onChange === null || onChange === void 0 ? void 0 : onChange([
                                changedDate,
                                endDate
                            ], event);
                        } else {
                            onChange === null || onChange === void 0 ? void 0 : onChange([
                                changedDate,
                                null
                            ], event);
                        }
                    }
                    if (isRangeFilled) {
                        onChange === null || onChange === void 0 ? void 0 : onChange([
                            changedDate,
                            null
                        ], event);
                    }
                } else if (selectsMultiple) {
                    if (changedDate !== null) {
                        if (!(selectedDates === null || selectedDates === void 0 ? void 0 : selectedDates.length)) {
                            onChange === null || onChange === void 0 ? void 0 : onChange([
                                changedDate
                            ], event);
                        } else {
                            var isChangedDateAlreadySelected = selectedDates.some(function(selectedDate) {
                                return isSameDay(selectedDate, changedDate);
                            });
                            if (isChangedDateAlreadySelected) {
                                var nextDates = selectedDates.filter(function(selectedDate) {
                                    return !isSameDay(selectedDate, changedDate);
                                });
                                onChange === null || onChange === void 0 ? void 0 : onChange(nextDates, event);
                            } else {
                                onChange === null || onChange === void 0 ? void 0 : onChange(__spreadArray(__spreadArray([], selectedDates, true), [
                                    changedDate
                                ], false), event);
                            }
                        }
                    }
                } else {
                    onChange === null || onChange === void 0 ? void 0 : onChange(changedDate, event);
                }
            }
            if (!keepInput) {
                (_b = (_a = _this.props).onSelect) === null || _b === void 0 ? void 0 : _b.call(_a, changedDate, event);
                _this.setState({
                    inputValue: null
                });
            }
        };
        // When checking preSelection via min/maxDate, times need to be manipulated via getStartOfDay/getEndOfDay
        _this.setPreSelection = function(date) {
            if (_this.props.readOnly) return;
            var hasMinDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$isDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDate"])(_this.props.minDate);
            var hasMaxDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$isDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDate"])(_this.props.maxDate);
            var isValidDateSelection = true;
            if (date) {
                var dateStartOfDay = getStartOfDay(date);
                if (hasMinDate && hasMaxDate) {
                    // isDayInRange uses getStartOfDay internally, so not necessary to manipulate times here
                    isValidDateSelection = isDayInRange(date, _this.props.minDate, _this.props.maxDate);
                } else if (hasMinDate) {
                    var minDateStartOfDay = getStartOfDay(_this.props.minDate);
                    isValidDateSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$isAfter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAfter"])(date, minDateStartOfDay) || isEqual(dateStartOfDay, minDateStartOfDay);
                } else if (hasMaxDate) {
                    var maxDateEndOfDay = getEndOfDay(_this.props.maxDate);
                    isValidDateSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$isBefore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBefore"])(date, maxDateEndOfDay) || isEqual(dateStartOfDay, maxDateEndOfDay);
                }
            }
            if (isValidDateSelection) {
                _this.setState({
                    preSelection: date
                });
            }
        };
        _this.toggleCalendar = function() {
            _this.setOpen(!_this.state.open);
        };
        _this.handleTimeChange = function(time) {
            var _a, _b;
            if (_this.props.selectsRange || _this.props.selectsMultiple) {
                return;
            }
            var selected = _this.props.selected ? _this.props.selected : _this.getPreSelection();
            var changedDate = _this.props.selected ? time : setTime(selected, {
                hour: (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getHours$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHours"])(time),
                minute: (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getMinutes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMinutes"])(time)
            });
            _this.setState({
                preSelection: changedDate
            });
            (_b = (_a = _this.props).onChange) === null || _b === void 0 ? void 0 : _b.call(_a, changedDate);
            if (_this.props.shouldCloseOnSelect && !_this.props.showTimeInput) {
                _this.sendFocusBackToInput();
                _this.setOpen(false);
            }
            if (_this.props.showTimeInput) {
                _this.setOpen(true);
            }
            if (_this.props.showTimeSelectOnly || _this.props.showTimeSelect) {
                _this.setState({
                    isRenderAriaLiveMessage: true
                });
            }
            _this.setState({
                inputValue: null
            });
        };
        _this.onInputClick = function() {
            var _a, _b;
            if (!_this.props.disabled && !_this.props.readOnly) {
                _this.setOpen(true);
            }
            (_b = (_a = _this.props).onInputClick) === null || _b === void 0 ? void 0 : _b.call(_a);
        };
        _this.onInputKeyDown = function(event) {
            var _a, _b, _c, _d, _e, _f;
            (_b = (_a = _this.props).onKeyDown) === null || _b === void 0 ? void 0 : _b.call(_a, event);
            var eventKey = event.key;
            if (!_this.state.open && !_this.props.inline && !_this.props.preventOpenOnFocus) {
                if (eventKey === KeyType.ArrowDown || eventKey === KeyType.ArrowUp || eventKey === KeyType.Enter) {
                    (_c = _this.onInputClick) === null || _c === void 0 ? void 0 : _c.call(_this);
                }
                return;
            }
            // if calendar is open, these keys will focus the selected item
            if (_this.state.open) {
                if (eventKey === KeyType.ArrowDown || eventKey === KeyType.ArrowUp) {
                    event.preventDefault();
                    var selectorString = _this.props.showTimeSelectOnly ? ".react-datepicker__time-list-item[tabindex='0']" : _this.props.showWeekPicker && _this.props.showWeekNumbers ? '.react-datepicker__week-number[tabindex="0"]' : _this.props.showFullMonthYearPicker || _this.props.showMonthYearPicker ? '.react-datepicker__month-text[tabindex="0"]' : '.react-datepicker__day[tabindex="0"]';
                    var selectedItem = ((_d = _this.calendar) === null || _d === void 0 ? void 0 : _d.containerRef.current) instanceof Element && _this.calendar.containerRef.current.querySelector(selectorString);
                    selectedItem instanceof HTMLElement && selectedItem.focus({
                        preventScroll: true
                    });
                    return;
                }
                var copy = newDate(_this.state.preSelection);
                if (eventKey === KeyType.Enter) {
                    event.preventDefault();
                    event.target.blur();
                    if (_this.inputOk() && _this.state.lastPreSelectChange === PRESELECT_CHANGE_VIA_NAVIGATE) {
                        _this.handleSelect(copy, event);
                        !_this.props.shouldCloseOnSelect && _this.setPreSelection(copy);
                    } else {
                        _this.setOpen(false);
                    }
                } else if (eventKey === KeyType.Escape) {
                    event.preventDefault();
                    event.target.blur();
                    _this.sendFocusBackToInput();
                    _this.setOpen(false);
                } else if (eventKey === KeyType.Tab) {
                    _this.setOpen(false);
                }
                if (!_this.inputOk()) {
                    (_f = (_e = _this.props).onInputError) === null || _f === void 0 ? void 0 : _f.call(_e, {
                        code: 1,
                        msg: INPUT_ERR_1
                    });
                }
            }
        };
        _this.onPortalKeyDown = function(event) {
            var eventKey = event.key;
            if (eventKey === KeyType.Escape) {
                event.preventDefault();
                _this.setState({
                    preventFocus: true
                }, function() {
                    _this.setOpen(false);
                    setTimeout(function() {
                        _this.setFocus();
                        _this.setState({
                            preventFocus: false
                        });
                    });
                });
            }
        };
        // keyDown events passed down to day.jsx
        _this.onDayKeyDown = function(event) {
            var _a, _b, _c, _d, _e, _f;
            var _g = _this.props, minDate = _g.minDate, maxDate = _g.maxDate, disabledKeyboardNavigation = _g.disabledKeyboardNavigation, showWeekPicker = _g.showWeekPicker, shouldCloseOnSelect = _g.shouldCloseOnSelect, locale = _g.locale, calendarStartDay = _g.calendarStartDay, adjustDateOnChange = _g.adjustDateOnChange, inline = _g.inline;
            (_b = (_a = _this.props).onKeyDown) === null || _b === void 0 ? void 0 : _b.call(_a, event);
            if (disabledKeyboardNavigation) return;
            var eventKey = event.key;
            var isShiftKeyActive = event.shiftKey;
            var copy = newDate(_this.state.preSelection);
            var calculateNewDate = function(eventKey, date) {
                var newCalculatedDate = date;
                switch(eventKey){
                    case KeyType.ArrowRight:
                        newCalculatedDate = showWeekPicker ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$addWeeks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addWeeks"])(date, 1) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDays"])(date, 1);
                        break;
                    case KeyType.ArrowLeft:
                        newCalculatedDate = showWeekPicker ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$subWeeks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subWeeks"])(date, 1) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$subDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(date, 1);
                        break;
                    case KeyType.ArrowUp:
                        newCalculatedDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$subWeeks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subWeeks"])(date, 1);
                        break;
                    case KeyType.ArrowDown:
                        newCalculatedDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$addWeeks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addWeeks"])(date, 1);
                        break;
                    case KeyType.PageUp:
                        newCalculatedDate = isShiftKeyActive ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$subYears$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subYears"])(date, 1) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$subMonths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subMonths"])(date, 1);
                        break;
                    case KeyType.PageDown:
                        newCalculatedDate = isShiftKeyActive ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$addYears$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addYears"])(date, 1) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$addMonths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addMonths"])(date, 1);
                        break;
                    case KeyType.Home:
                        newCalculatedDate = getStartOfWeek(date, locale, calendarStartDay);
                        break;
                    case KeyType.End:
                        newCalculatedDate = getEndOfWeek(date);
                        break;
                }
                return newCalculatedDate;
            };
            var getNewDate = function(eventKey, date) {
                var MAX_ITERATIONS = 40;
                var eventKeyCopy = eventKey;
                var validDateFound = false;
                var iterations = 0;
                var newSelection = calculateNewDate(eventKey, date);
                while(!validDateFound){
                    if (iterations >= MAX_ITERATIONS) {
                        newSelection = date;
                        break;
                    }
                    // if minDate exists and the new selection is before the min date, get the nearest date that isn't disabled
                    if (minDate && newSelection < minDate) {
                        eventKeyCopy = KeyType.ArrowRight;
                        newSelection = isDayDisabled(minDate, _this.props) ? calculateNewDate(eventKeyCopy, newSelection) : minDate;
                    }
                    // if maxDate exists and the new selection is after the max date, get the nearest date that isn't disabled
                    if (maxDate && newSelection > maxDate) {
                        eventKeyCopy = KeyType.ArrowLeft;
                        newSelection = isDayDisabled(maxDate, _this.props) ? calculateNewDate(eventKeyCopy, newSelection) : maxDate;
                    }
                    if (isDayDisabled(newSelection, _this.props)) {
                        // if PageUp and Home is pressed to a disabled date, it will try to find the next available date after
                        if (eventKeyCopy === KeyType.PageUp || eventKeyCopy === KeyType.Home) {
                            eventKeyCopy = KeyType.ArrowRight;
                        }
                        // if PageDown and End is pressed to a disabled date, it will try to find the next available date before
                        if (eventKeyCopy === KeyType.PageDown || eventKeyCopy === KeyType.End) {
                            eventKeyCopy = KeyType.ArrowLeft;
                        }
                        newSelection = calculateNewDate(eventKeyCopy, newSelection);
                    } else {
                        validDateFound = true;
                    }
                    iterations++;
                }
                return newSelection;
            };
            if (eventKey === KeyType.Enter) {
                event.preventDefault();
                _this.handleSelect(copy, event);
                !shouldCloseOnSelect && _this.setPreSelection(copy);
                return;
            } else if (eventKey === KeyType.Escape) {
                event.preventDefault();
                _this.setOpen(false);
                if (!_this.inputOk()) {
                    (_d = (_c = _this.props).onInputError) === null || _d === void 0 ? void 0 : _d.call(_c, {
                        code: 1,
                        msg: INPUT_ERR_1
                    });
                }
                return;
            }
            var newSelection = null;
            switch(eventKey){
                case KeyType.ArrowLeft:
                case KeyType.ArrowRight:
                case KeyType.ArrowUp:
                case KeyType.ArrowDown:
                case KeyType.PageUp:
                case KeyType.PageDown:
                case KeyType.Home:
                case KeyType.End:
                    newSelection = getNewDate(eventKey, copy);
                    break;
            }
            if (!newSelection) {
                (_f = (_e = _this.props).onInputError) === null || _f === void 0 ? void 0 : _f.call(_e, {
                    code: 1,
                    msg: INPUT_ERR_1
                });
                return;
            }
            event.preventDefault();
            _this.setState({
                lastPreSelectChange: PRESELECT_CHANGE_VIA_NAVIGATE
            });
            if (adjustDateOnChange) {
                _this.setSelected(newSelection);
            }
            _this.setPreSelection(newSelection);
            // need to figure out whether month has changed to focus day in inline version
            if (inline) {
                var prevMonth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMonth"])(copy);
                var newMonth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMonth"])(newSelection);
                var prevYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getYear"])(copy);
                var newYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$react$2d$datepicker$2f$node_modules$2f$date$2d$fns$2f$getYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getYear"])(newSelection);
                if (prevMonth !== newMonth || prevYear !== newYear) {
                    // month has changed
                    _this.setState({
                        shouldFocusDayInline: true
                    });
                } else {
                    // month hasn't changed
                    _this.setState({
                        shouldFocusDayInline: false
                    });
                }
            }
        };
        // handle generic key down events in the popper that do not adjust or select dates
        // ex: while focusing prev and next month buttons
        _this.onPopperKeyDown = function(event) {
            var eventKey = event.key;
            if (eventKey === KeyType.Escape) {
                event.preventDefault();
                _this.sendFocusBackToInput();
                _this.setOpen(false);
            }
        };
        _this.onClearClick = function(event) {
            if (event) {
                if (event.preventDefault) {
                    event.preventDefault();
                }
            }
            _this.sendFocusBackToInput();
            var _a = _this.props, selectsRange = _a.selectsRange, onChange = _a.onChange;
            if (selectsRange) {
                onChange === null || onChange === void 0 ? void 0 : onChange([
                    null,
                    null
                ], event);
            } else {
                onChange === null || onChange === void 0 ? void 0 : onChange(null, event);
            }
            _this.setState({
                inputValue: null
            });
        };
        _this.clear = function() {
            _this.onClearClick();
        };
        _this.onScroll = function(event) {
            if (typeof _this.props.closeOnScroll === "boolean" && _this.props.closeOnScroll) {
                if (event.target === document || event.target === document.documentElement || event.target === document.body) {
                    _this.setOpen(false);
                }
            } else if (typeof _this.props.closeOnScroll === "function") {
                if (_this.props.closeOnScroll(event)) {
                    _this.setOpen(false);
                }
            }
        };
        _this.renderCalendar = function() {
            var _a, _b;
            if (!_this.props.inline && !_this.isCalendarOpen()) {
                return null;
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Calendar, _assign({
                showMonthYearDropdown: undefined,
                ref: function(elem) {
                    _this.calendar = elem;
                }
            }, _this.props, _this.state, {
                setOpen: _this.setOpen,
                dateFormat: (_a = _this.props.dateFormatCalendar) !== null && _a !== void 0 ? _a : DatePicker.defaultProps.dateFormatCalendar,
                onSelect: _this.handleSelect,
                onClickOutside: _this.handleCalendarClickOutside,
                holidays: getHolidaysMap(_this.modifyHolidays()),
                outsideClickIgnoreClass: _this.props.outsideClickIgnoreClass,
                onDropdownFocus: _this.handleDropdownFocus,
                onTimeChange: _this.handleTimeChange,
                className: _this.props.calendarClassName,
                container: _this.props.calendarContainer,
                handleOnKeyDown: _this.props.onKeyDown,
                handleOnDayKeyDown: _this.onDayKeyDown,
                setPreSelection: _this.setPreSelection,
                dropdownMode: (_b = _this.props.dropdownMode) !== null && _b !== void 0 ? _b : DatePicker.defaultProps.dropdownMode
            }), _this.props.children);
        };
        _this.renderAriaLiveRegion = function() {
            var _a;
            var locale = _this.props.locale;
            var dateFormat = (_a = _this.props.dateFormat) !== null && _a !== void 0 ? _a : DatePicker.defaultProps.dateFormat;
            var isContainsTime = _this.props.showTimeInput || _this.props.showTimeSelect;
            var longDateFormat = isContainsTime ? "PPPPp" : "PPPP";
            var ariaLiveMessage;
            if (_this.props.selectsRange) {
                ariaLiveMessage = "Selected start date: ".concat(safeDateFormat(_this.props.startDate, {
                    dateFormat: longDateFormat,
                    locale: locale
                }), ". ").concat(_this.props.endDate ? "End date: " + safeDateFormat(_this.props.endDate, {
                    dateFormat: longDateFormat,
                    locale: locale
                }) : "");
            } else {
                if (_this.props.showTimeSelectOnly) {
                    ariaLiveMessage = "Selected time: ".concat(safeDateFormat(_this.props.selected, {
                        dateFormat: dateFormat,
                        locale: locale
                    }));
                } else if (_this.props.showYearPicker) {
                    ariaLiveMessage = "Selected year: ".concat(safeDateFormat(_this.props.selected, {
                        dateFormat: "yyyy",
                        locale: locale
                    }));
                } else if (_this.props.showMonthYearPicker) {
                    ariaLiveMessage = "Selected month: ".concat(safeDateFormat(_this.props.selected, {
                        dateFormat: "MMMM yyyy",
                        locale: locale
                    }));
                } else if (_this.props.showQuarterYearPicker) {
                    ariaLiveMessage = "Selected quarter: ".concat(safeDateFormat(_this.props.selected, {
                        dateFormat: "yyyy, QQQ",
                        locale: locale
                    }));
                } else {
                    ariaLiveMessage = "Selected date: ".concat(safeDateFormat(_this.props.selected, {
                        dateFormat: longDateFormat,
                        locale: locale
                    }));
                }
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
                role: "alert",
                "aria-live": "polite",
                className: "react-datepicker__aria-live"
            }, ariaLiveMessage);
        };
        _this.renderDateInput = function() {
            var _a, _b;
            var className = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(_this.props.className, (_a = {}, _a[_this.props.outsideClickIgnoreClass || DatePicker.defaultProps.outsideClickIgnoreClass] = _this.state.open, _a));
            var customInput = _this.props.customInput || __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("input", {
                type: "text"
            });
            var customInputRef = _this.props.customInputRef || "ref";
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(customInput, (_b = {}, _b[customInputRef] = function(input) {
                _this.input = input;
            }, _b.value = _this.getInputValue(), _b.onBlur = _this.handleBlur, _b.onChange = _this.handleChange, _b.onClick = _this.onInputClick, _b.onFocus = _this.handleFocus, _b.onKeyDown = _this.onInputKeyDown, _b.id = _this.props.id, _b.name = _this.props.name, _b.form = _this.props.form, _b.autoFocus = _this.props.autoFocus, _b.placeholder = _this.props.placeholderText, _b.disabled = _this.props.disabled, _b.autoComplete = _this.props.autoComplete, _b.className = (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(customInput.props.className, className), _b.title = _this.props.title, _b.readOnly = _this.props.readOnly, _b.required = _this.props.required, _b.tabIndex = _this.props.tabIndex, _b["aria-describedby"] = _this.props.ariaDescribedBy, _b["aria-invalid"] = _this.props.ariaInvalid, _b["aria-labelledby"] = _this.props.ariaLabelledBy, _b["aria-required"] = _this.props.ariaRequired, _b));
        };
        _this.renderClearButton = function() {
            var _a = _this.props, isClearable = _a.isClearable, disabled = _a.disabled, selected = _a.selected, startDate = _a.startDate, endDate = _a.endDate, clearButtonTitle = _a.clearButtonTitle, _b = _a.clearButtonClassName, clearButtonClassName = _b === void 0 ? "" : _b, _c = _a.ariaLabelClose, ariaLabelClose = _c === void 0 ? "Close" : _c, selectedDates = _a.selectedDates, readOnly = _a.readOnly;
            if (isClearable && !readOnly && (selected != null || startDate != null || endDate != null || (selectedDates === null || selectedDates === void 0 ? void 0 : selectedDates.length))) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
                    type: "button",
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("react-datepicker__close-icon", clearButtonClassName, {
                        "react-datepicker__close-icon--disabled": disabled
                    }),
                    disabled: disabled,
                    "aria-label": ariaLabelClose,
                    onClick: _this.onClearClick,
                    title: clearButtonTitle,
                    tabIndex: -1
                });
            } else {
                return null;
            }
        };
        _this.state = _this.calcInitialState();
        _this.preventFocusTimeout = undefined;
        return _this;
    }
    Object.defineProperty(DatePicker, "defaultProps", {
        get: function() {
            return {
                allowSameDay: false,
                dateFormat: "MM/dd/yyyy",
                dateFormatCalendar: "LLLL yyyy",
                disabled: false,
                disabledKeyboardNavigation: false,
                dropdownMode: "scroll",
                preventOpenOnFocus: false,
                monthsShown: 1,
                outsideClickIgnoreClass: OUTSIDE_CLICK_IGNORE_CLASS,
                readOnly: false,
                rangeSeparator: DATE_RANGE_SEPARATOR,
                withPortal: false,
                selectsDisabledDaysInRange: false,
                shouldCloseOnSelect: true,
                showTimeSelect: false,
                showTimeInput: false,
                showPreviousMonths: false,
                showMonthYearPicker: false,
                showFullMonthYearPicker: false,
                showTwoColumnMonthYearPicker: false,
                showFourColumnMonthYearPicker: false,
                showYearPicker: false,
                showQuarterYearPicker: false,
                showWeekPicker: false,
                strictParsing: false,
                swapRange: false,
                timeIntervals: 30,
                timeCaption: "Time",
                previousMonthAriaLabel: "Previous Month",
                previousMonthButtonLabel: "Previous Month",
                nextMonthAriaLabel: "Next Month",
                nextMonthButtonLabel: "Next Month",
                previousYearAriaLabel: "Previous Year",
                previousYearButtonLabel: "Previous Year",
                nextYearAriaLabel: "Next Year",
                nextYearButtonLabel: "Next Year",
                timeInputLabel: "Time",
                enableTabLoop: true,
                yearItemNumber: DEFAULT_YEAR_ITEM_NUMBER,
                focusSelectedMonth: false,
                showPopperArrow: true,
                excludeScrollbar: true,
                customTimeInput: null,
                calendarStartDay: undefined,
                toggleCalendarOnIconClick: false,
                usePointerEvent: false
            };
        },
        enumerable: false,
        configurable: true
    });
    DatePicker.prototype.componentDidMount = function() {
        window.addEventListener("scroll", this.onScroll, true);
        document.addEventListener("visibilitychange", this.setHiddenStateOnVisibilityHidden);
    };
    DatePicker.prototype.componentDidUpdate = function(prevProps, prevState) {
        var _a, _b, _c, _d;
        if (prevProps.inline && hasPreSelectionChanged(prevProps.selected, this.props.selected)) {
            this.setPreSelection(this.props.selected);
        }
        if (this.state.monthSelectedIn !== undefined && prevProps.monthsShown !== this.props.monthsShown) {
            this.setState({
                monthSelectedIn: 0
            });
        }
        if (prevProps.highlightDates !== this.props.highlightDates) {
            this.setState({
                highlightDates: getHighLightDaysMap(this.props.highlightDates)
            });
        }
        if (!prevState.focused && !isEqual(prevProps.selected, this.props.selected)) {
            this.setState({
                inputValue: null
            });
        }
        if (prevState.open !== this.state.open) {
            if (prevState.open === false && this.state.open === true) {
                (_b = (_a = this.props).onCalendarOpen) === null || _b === void 0 ? void 0 : _b.call(_a);
            }
            if (prevState.open === true && this.state.open === false) {
                (_d = (_c = this.props).onCalendarClose) === null || _d === void 0 ? void 0 : _d.call(_c);
            }
        }
    };
    DatePicker.prototype.componentWillUnmount = function() {
        this.clearPreventFocusTimeout();
        window.removeEventListener("scroll", this.onScroll, true);
        document.removeEventListener("visibilitychange", this.setHiddenStateOnVisibilityHidden);
    };
    DatePicker.prototype.renderInputContainer = function() {
        var _a = this.props, showIcon = _a.showIcon, icon = _a.icon, calendarIconClassname = _a.calendarIconClassname, calendarIconClassName = _a.calendarIconClassName, toggleCalendarOnIconClick = _a.toggleCalendarOnIconClick;
        var open = this.state.open;
        if (calendarIconClassname) {
            console.warn("calendarIconClassname props is deprecated. should use calendarIconClassName props.");
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: "react-datepicker__input-container".concat(showIcon ? " react-datepicker__view-calendar-icon" : "")
        }, showIcon && __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(CalendarIcon, _assign({
            icon: icon,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(calendarIconClassName, !calendarIconClassName && calendarIconClassname, open && "react-datepicker-ignore-onclickoutside")
        }, toggleCalendarOnIconClick ? {
            onClick: this.toggleCalendar
        } : null)), this.state.isRenderAriaLiveMessage && this.renderAriaLiveRegion(), this.renderDateInput(), this.renderClearButton());
    };
    DatePicker.prototype.render = function() {
        var calendar = this.renderCalendar();
        if (this.props.inline) return calendar;
        if (this.props.withPortal) {
            var portalContainer = this.state.open ? __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(TabLoop, {
                enableTabLoop: this.props.enableTabLoop
            }, __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
                className: "react-datepicker__portal",
                tabIndex: -1,
                onKeyDown: this.onPortalKeyDown
            }, calendar)) : null;
            if (this.state.open && this.props.portalId) {
                portalContainer = __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Portal, _assign({
                    portalId: this.props.portalId
                }, this.props), portalContainer);
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", null, this.renderInputContainer(), portalContainer);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(PopperComponent$1, _assign({}, this.props, {
            className: this.props.popperClassName,
            hidePopper: !this.isCalendarOpen(),
            targetComponent: this.renderInputContainer(),
            popperComponent: calendar,
            popperOnKeyDown: this.onPopperKeyDown,
            showArrow: this.props.showPopperArrow
        }));
    };
    return DatePicker;
}(__TURBOPACK__imported__module__$5b$project$5d2f$App$2f$learning$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"]);
var PRESELECT_CHANGE_VIA_INPUT = "input";
var PRESELECT_CHANGE_VIA_NAVIGATE = "navigate";
;
 //# sourceMappingURL=index.es.js.map
}),
]);

//# sourceMappingURL=17483_react-datepicker_dist_index_es_6d190485.js.map
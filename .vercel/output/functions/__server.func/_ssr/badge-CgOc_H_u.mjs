import { s as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { r as cn } from "./router-DNtYtNmG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/badge-CgOc_H_u.js
var import_jsx_runtime = require_jsx_runtime();
var badgeVariants = cva("inline-flex items-center rounded-sm px-2 py-0.5 text-[11px] font-medium uppercase tracking-[0.14em]", {
	variants: { tone: {
		mute: "bg-elevated text-muted border border-line",
		accent: "bg-accent/15 text-accent border border-accent/25",
		fg: "bg-fg/10 text-fg border border-fg/15"
	} },
	defaultVariants: { tone: "mute" }
});
function Badge({ className, tone, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn(badgeVariants({ tone }), className),
		...props
	});
}
//#endregion
export { Badge as t };

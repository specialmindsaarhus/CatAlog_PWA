import { inView, animate } from "motion"

inView("section", (info) => {
    animate(".fetchText", { opacity: [0, 100] }, { duration: 1 })
})
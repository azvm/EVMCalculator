const app = new Vue({
    el: "#app",
    data() {
        return {
            plannedWork: 2400,
            completedWork: 1200,
            remainingWork: 1000,
            workersNumber: 5,
            currency: "$",
            humanHourCost: 20,
            hoursPerWorkingDay: 8,
            decimalDigits: 2
        }
    },
    computed: {
        plannedCompletionPeriod() {
            return (+this.plannedWork / +this.hoursPerWorkingDay / +this.workersNumber) || 0
        },
        elapsedPeriod() {
            return (+this.completedWork / +this.hoursPerWorkingDay / +this.workersNumber) || 0
        },
        estimatedCompletionPeriod() {
            return (+this.plannedCompletionPeriod / +this.schedulePerformanceIndex) || 0
        },
        plannedCompletionPercentage() {
            return (+this.completedWork / +this.plannedWork) || 0
        },
        actualCompletionPercentage() {
            return (+this.completedWork / (+this.completedWork + +this.remainingWork)) || 0
        },
        budgetAtCompletion() {
            return (+this.plannedWork * +this.humanHourCost) || 0
        },
        plannedValue() {
            return (+this.budgetAtCompletion * +this.plannedCompletionPercentage) || 0
        },
        earnedValue() {
            return (+this.budgetAtCompletion * +this.actualCompletionPercentage) || 0
        },
        actualCost() {
            return (+this.completedWork * +this.humanHourCost) || 0
        },
        costVariance() {
            return (+this.earnedValue - +this.actualCost) || 0
        },
        scheduleVariance() {
            return (+this.earnedValue - +this.plannedValue) || 0
        },
        costPerformanceIndex() {
            return (+this.earnedValue / +this.actualCost) || 0
        },
        schedulePerformanceIndex() {
            return (this.earnedValue / +this.plannedValue) || 0
        },
        estimateAtCompletion() {
            return (+this.budgetAtCompletion / +this.costPerformanceIndex) || 0
        },
        estimateToComplete() {
            return (+this.estimateAtCompletion - +this.actualCost) || 0
        },
        varianceAtCompletion() {
            return (+this.budgetAtCompletion - +this.estimateAtCompletion) || 0
        }
    }
})
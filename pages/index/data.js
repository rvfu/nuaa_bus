var bus_time_table = {
    workday: {
        jjl: [{ time: "07:05", count: 1, dq: true },
        { time: "07:15", count: 1, dq: false },
        { time: "08:05", count: 1, dq: true },
        { time: "08:10", count: 1, dq: false },
        { time: "09:10", count: 1, dq: true },
        { time: "10:10", count: 1, dq: true },
        { time: "11:05", count: 1, dq: true },
        { time: "12:10", count: 1, dq: true },
        { time: "12:15", count: 1, dq: false },
        { time: "13:15", count: 1, dq: true },
        { time: "13:20", count: 1, dq: false },
        { time: "14:05", count: 1, dq: true },
        { time: "14:55", count: 1, dq: true },
        { time: "15:00", count: 1, dq: false },
        { time: "16:00", count: 1, dq: true },
        { time: "16:05", count: 1, dq: true },
        { time: "16:10", count: 1, dq: false },
        { time: "17:00", count: 1, dq: true },
        { time: "17:35", count: 1, dq: true },
        { time: "17:40", count: 1, dq: true },
        { time: "17:40", count: 1, dq: false },
        { time: "17:45", count: 1, dq: true },
        { time: "18:15", count: 1, dq: true },
        { time: "18:25", count: 1, dq: false },
        { time: "20:10", count: 1, dq: true },
        { time: "21:05", count: 1, dq: true },
        { time: "22:10", count: 1, dq: true }],
        mgg: [{ time: "06:50", count: 1, dq: true },
        { time: "07:00", count: 2, dq: true },
        { time: "07:05", count: 2, dq: true },
        { time: "07:10", count: 1, dq: true },
        { time: "08:05", count: 1, dq: true },
        { time: "08:10", count: 1, dq: true },
        { time: "08:20", count: 2, dq: true },
        { time: "09:10", count: 2, dq: true },
        { time: "09:20", count: 1, dq: true },
        { time: "10:30", count: 1, dq: true },
        { time: "11:10", count: 1, dq: true },
        { time: "12:10", count: 1, dq: true },
        { time: "13:10", count: 2, dq: true },
        { time: "13:20", count: 1, dq: true },
        { time: "15:20", count: 2, dq: true },
        { time: "16:00", count: 1, dq: true },
        { time: "17:20", count: 1, dq: true },
        { time: "17:35", count: 1, dq: true },
        { time: "17:40", count: 1, dq: false },
        { time: "18:10", count: 1, dq: true },
        { time: "19:10", count: 1, dq: true },
        { time: "20:25", count: 1, dq: true },
        { time: "21:40", count: 1, dq: true }]
    },
    weekend: {
        jjl: [{ time: "08:05", count: 1, dq: true },
        { time: "08:10", count: 1, dq: false },
        { time: "12:10", count: 1, dq: true },
        { time: "12:15", count: 1, dq: false },
        { time: "16:55", count: 1, dq: true },
        { time: "17:00", count: 1, dq: false },
        { time: "18:15", count: 1, dq: true },
        { time: "20:10", count: 1, dq: true },
        { time: "21:05", count: 1, dq: true },
        { time: "22:10", count: 1, dq: true }],
        mgg: [{ time: "07:15", count: 1, dq: true },
        { time: "07:20", count: 1, dq: true },
        { time: "09:15", count: 1, dq: true },
        { time: "09:20", count: 1, dq: true },
        { time: "13:15", count: 1, dq: true },
        { time: "13:20", count: 1, dq: true },
        { time: "17:40", count: 1, dq: true },
        { time: "19:30", count: 1, dq: true },
        { time: "20:25", count: 1, dq: true },
        { time: "21:40", count: 1, dq: true }]
    }
}

module.exports = {
  bus_time_table: bus_time_table
}
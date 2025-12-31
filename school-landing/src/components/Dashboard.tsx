export default function Dashboard() {
  return (
    <div className="relative">
      <div className="bg-light-gray-bg rounded-2xl p-6 shadow-xl border border-border-gray">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <StatCard title="Total Students" value="2,847" change="+12%" positive />
          <StatCard title="Fees Collected" value="$124,500" change="+8.2%" positive />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl p-4 border border-border-gray">
            <h3 className="text-sm font-medium text-dark-gray mb-4">Attendance Overview</h3>
            <div className="flex items-end gap-2 h-32">
              {[65, 80, 72, 90, 85, 78, 92].map((height, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div 
                    className="w-full bg-accent rounded-t-sm transition-all"
                    style={{ height: `${height}%` }}
                  />
                  <span className="text-xs text-dark-gray">
                    {['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-4 border border-border-gray">
            <h3 className="text-sm font-medium text-dark-gray mb-4">Performance</h3>
            <div className="space-y-3">
              <ProgressBar label="Mathematics" value={85} />
              <ProgressBar label="Science" value={78} />
              <ProgressBar label="English" value={92} />
              <ProgressBar label="History" value={70} />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg border border-border-gray w-48">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <p className="text-xs text-dark-gray">Today's Classes</p>
            <p className="text-sm font-semibold text-black">24 Completed</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function StatCard({ title, value, change, positive }: { 
  title: string
  value: string
  change: string
  positive?: boolean 
}) {
  return (
    <div className="bg-white rounded-xl p-4 border border-border-gray">
      <p className="text-sm text-dark-gray mb-1">{title}</p>
      <div className="flex items-end justify-between">
        <p className="text-2xl font-semibold text-black">{value}</p>
        <span className={`text-xs font-medium ${positive ? 'text-green-600' : 'text-red-600'}`}>
          {change}
        </span>
      </div>
    </div>
  )
}

function ProgressBar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="flex justify-between text-xs mb-1">
        <span className="text-dark-gray">{label}</span>
        <span className="font-medium text-black">{value}%</span>
      </div>
      <div className="h-2 bg-light-gray-bg rounded-full overflow-hidden">
        <div 
          className="h-full bg-accent rounded-full transition-all"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  )
}

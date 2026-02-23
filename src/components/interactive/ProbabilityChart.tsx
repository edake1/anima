'use client';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface DataPoint {
  year: number;
  probability: number;
  label?: string;
}

interface UserPoint {
  year: number;
  probability: number;
}

interface ProbabilityChartProps {
  data: DataPoint[];
  userPrediction?: UserPoint | null;
  color?: string;
  title?: string;
  showGrid?: boolean;
  height?: number;
  className?: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const value = payload[0].value as number;
    return (
      <div className="glass rounded-xl px-4 py-3 border border-white/10 shadow-xl">
        <p className="text-xs text-zinc-400 mb-1">{label}</p>
        <p className="text-lg font-bold text-white">{Math.round(value * 100)}%</p>
        <p className="text-xs text-zinc-500">community probability</p>
      </div>
    );
  }
  return null;
};

export function ProbabilityChart({
  data,
  userPrediction,
  color = '#8b5cf6',
  title,
  showGrid = true,
  height = 200,
  className,
}: ProbabilityChartProps) {
  const chartData = data.map((d) => ({
    year: d.year,
    probability: d.probability,
    user: userPrediction?.year === d.year ? userPrediction.probability : undefined,
  }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn('w-full', className)}
    >
      {title && (
        <p className="text-sm font-medium text-zinc-400 mb-3">{title}</p>
      )}
      <ResponsiveContainer width="100%" height={height}>
        <AreaChart data={chartData} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
          <defs>
            <linearGradient id={`gradient-${color.replace('#', '')}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={color} stopOpacity={0.3} />
              <stop offset="95%" stopColor={color} stopOpacity={0.02} />
            </linearGradient>
          </defs>
          {showGrid && (
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
          )}
          <XAxis
            dataKey="year"
            tick={{ fill: '#71717a', fontSize: 11 }}
            axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
            tickLine={false}
          />
          <YAxis
            tickFormatter={(v) => `${Math.round(v * 100)}%`}
            tick={{ fill: '#71717a', fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            domain={[0, 1]}
          />
          <Tooltip content={<CustomTooltip />} />
          {userPrediction && (
            <ReferenceLine
              x={userPrediction.year}
              stroke="#f59e0b"
              strokeDasharray="4 4"
              label={{
                value: 'You',
                fill: '#f59e0b',
                fontSize: 11,
                position: 'top',
              }}
            />
          )}
          <Area
            type="monotone"
            dataKey="probability"
            stroke={color}
            strokeWidth={2.5}
            fill={`url(#gradient-${color.replace('#', '')})`}
            dot={false}
            activeDot={{ r: 5, fill: color, stroke: 'rgba(0,0,0,0.3)', strokeWidth: 2 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </motion.div>
  );
}

'use client';

import React from 'react';
import { AlertTriangle, Clock, User, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { Alert } from '@/utils/api';
import { useTranslation } from 'react-i18next';

interface AlertsFeedProps {
  alerts: Alert[];
  loading?: boolean;
}

export default function AlertsFeed({ alerts, loading = false }: AlertsFeedProps) {
  const { t } = useTranslation();

  const getAlertTypeColor = (type?: string) => {
    const key = (type ?? 'info').toString().toLowerCase();
    switch (key) {
      case 'emergency':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400 border-red-200 dark:border-red-800';
      case 'warning':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800';
      case 'info':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400 border-blue-200 dark:border-blue-800';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400 border-gray-200 dark:border-gray-800';
    }
  };

  const getAlertIcon = (type?: string) => {
    const key = (type ?? 'info').toString().toLowerCase();
    switch (key) {
      case 'emergency':
      case 'warning':
      case 'info':
      default:
        return <AlertTriangle className="w-4 h-4" />;
    }
  };

  const getTypeString = (a: any) => (a?.type ?? a?.alert_type ?? 'info') as string;
  const getTitleString = (a: any) => (a?.title ?? a?.message ?? 'Alert') as string;
  const getDescriptionString = (a: any) => (a?.description ?? a?.message ?? '') as string;

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-100 dark:border-gray-700"
      >
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
          <AlertTriangle className="w-5 h-5 mr-2 text-red-600" />
          Alerts Feed
        </h2>
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-4 border border-gray-200 dark:border-gray-700 rounded-xl animate-pulse">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-100 dark:border-gray-700"
    >
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
        <AlertTriangle className="w-5 h-5 mr-2 text-red-600" />
        Alerts Feed
      </h2>
      
      <div className="space-y-3 max-h-96 overflow-y-auto">
        {alerts.length === 0 ? (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            <AlertTriangle className="w-12 h-12 mx-auto mb-2 text-gray-300 dark:text-gray-600" />
            <p>No alerts at the moment</p>
          </div>
        ) : (
          <motion.div className="space-y-3">
            {alerts.map((alert, index) => {
              const typeStr = getTypeString(alert);
              const titleStr = getTitleString(alert);
              const descStr = getDescriptionString(alert);
              return (
                <motion.div
                  key={alert.id ?? index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 hover:shadow-lg ${getAlertTypeColor(typeStr)}`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-0.5">
                        {getAlertIcon(typeStr)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-semibold mb-1">
                          {titleStr}
                        </h3>
                        {descStr && (
                          <p className="text-sm opacity-90 mb-2">
                            {descStr}
                          </p>
                        )}
                        <div className="flex items-center space-x-4 text-xs opacity-75">
                          <div className="flex items-center space-x-1">
                            <Clock className="w-3 h-3" />
                            <span>{alert.created_at ? new Date(alert.created_at).toLocaleTimeString() : ''}</span>
                          </div>
                          {alert.tourist_id && (
                            <div className="flex items-center space-x-1">
                              <User className="w-3 h-3" />
                              <span>Tourist #{alert.tourist_id}</span>
                            </div>
                          )}
                          {alert.location && (
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-3 h-3" />
                              <span>{alert.location}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getAlertTypeColor(typeStr)}`}>
                        {typeStr}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

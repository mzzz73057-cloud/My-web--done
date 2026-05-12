import { useState, useEffect } from 'react';
import axios from 'axios';

export function useLessonId(grade, unitNumber, lessonNumber) {
  const [lessonId, setLessonId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchId = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get(`/api/lessons/${grade}/${unitNumber}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        const lessons = res.data.lessons || [];
        const current = lessons.find(l => l.number === Number(lessonNumber));
        if (current) {
          setLessonId(current._id);
        }
      } catch (err) {
        console.error('Error fetching lesson ID:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchId();
  }, [grade, unitNumber, lessonNumber]);

  return { lessonId, loading };
}

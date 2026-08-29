SELECT 
    track_name,
    artist_name,
    COUNT(*) AS skip_count
FROM playback_data
WHERE skipped = 'TRUE'
  AND ms_played < 10000
GROUP BY track_name, artist_name
ORDER BY skip_count DESC;
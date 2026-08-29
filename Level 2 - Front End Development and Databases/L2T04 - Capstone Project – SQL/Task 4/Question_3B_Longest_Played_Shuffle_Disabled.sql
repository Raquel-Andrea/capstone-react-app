SELECT
    track_name,
    artist_name,
    ms_played
FROM playback_data
WHERE shuffle = 'FALSE'
ORDER BY ms_played DESC
LIMIT 20;
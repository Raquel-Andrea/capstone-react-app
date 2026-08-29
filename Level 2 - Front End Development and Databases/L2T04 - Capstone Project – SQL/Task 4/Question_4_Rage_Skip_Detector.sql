WITH skip_data AS (
    SELECT
        ts,
        track_name,
        artist_name,
        platform,
        LAG(ts) OVER (ORDER BY ts) AS previous_skip
    FROM playback_data
    WHERE skipped = 'TRUE'
),
session_groups AS (
    SELECT
        *,
        SUM(
            CASE
                WHEN previous_skip IS NULL
                     OR ts > previous_skip + INTERVAL 1 MINUTE
                THEN 1
                ELSE 0
            END
        ) OVER (ORDER BY ts) AS session_id
    FROM skip_data
)
SELECT
    session_id,
    MIN(ts) AS session_start,
    MAX(ts) AS session_end,
    COUNT(*) AS skipped_songs,
    TIMESTAMPDIFF(SECOND, MIN(ts), MAX(ts)) AS seconds_elapsed
FROM session_groups
GROUP BY session_id
HAVING COUNT(*) >= 5
   AND TIMESTAMPDIFF(SECOND, MIN(ts), MAX(ts)) < 60
ORDER BY skipped_songs DESC, session_start;
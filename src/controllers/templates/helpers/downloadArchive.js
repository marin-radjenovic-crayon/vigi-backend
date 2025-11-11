
const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const archiver = require('archiver');

const appURL = process.env.APPURL
const backendCfg = {
    screenshotsUrl: `${appURL}/screenshots/[[TEMPLATE]]/[[UUID]]/[[TYPE]].jpg`,
};

async function downloadAndZipTemplates(req, res) {
    const { templates, eventId, lang } = req.body;
    const zipFileName = `templates_${eventId}_${lang}.zip`;
    const zipFilePath = path.join(__dirname, '../../../../public/screenshots/zip/', zipFileName);

    // Ensure zips directory exists
    fs.mkdirSync(path.dirname(zipFilePath), { recursive: true });

    // Remove existing zip file if it exists
    if (fs.existsSync(zipFilePath)) {
        fs.unlinkSync(zipFilePath);
    }

    const output = fs.createWriteStream(zipFilePath);
    const archive = archiver('zip', { zlib: { level: 9 } });

    output.on('close', () => {
        const publicUrl = `${req.protocol}://${req.get('host')}/screenshots/zip/${zipFileName}`;
        return res.json({ url: publicUrl });
    });

    archive.on('error', (err) => res.status(500).json({ error: err.message }));

    archive.pipe(output);

    for (const template of templates) {
        const updatedAtPrefix = new Date(template.updatedAt).getTime();
        const hashUpdate = ""; // optional
        const imageUrl = `${backendCfg.screenshotsUrl
            .replace("[[TEMPLATE]]", template.template_name)
            .replace("[[TYPE]]", "preview")
            .replace("[[UUID]]", template.uuid)
            }?updated_at=${updatedAtPrefix}-${hashUpdate}`;

        try {
            const response = await fetch(imageUrl);
            const buffer = await response.buffer();
            archive.append(buffer, {
                name: `${template.template_name}-${template.uuid}.png`,
            });
        } catch (err) {
            console.error("Failed to fetch image:", imageUrl, err);
        }
    }

    archive.finalize();
}

module.exports = downloadAndZipTemplates;
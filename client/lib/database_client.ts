import { drizzle } from 'drizzle-orm/better-sqlite3';
import { count } from 'drizzle-orm';
import { questions } from './schemas';
import { IQuestion } from '@/app/interfaces/IQuestion';

const db = drizzle(process.env.DB_FILE_NAME);

export async function getQuestions(searchParams : { max_per_page?: number , page: number  }) {
  // try {
    const MAX_PER_PAGE = 10

    const limit = searchParams.max_per_page || MAX_PER_PAGE
    const page = searchParams.page || 1

    console.log(page)
    // const search = searchParams.get('search')?.trim() || '';

    const offset = (page - 1) * limit;

    // Optional filter logic (only adds WHERE if there's a search term)
    // const whereClause = search
    //   ? like(questions.questionText, `%${search}%`)
    //   : undefined;

    const totalQuery = await db.select({ count: count() }).from(questions).get();
    const dataQuery = await db
    .select()
    .from(questions)
    .orderBy(questions.id)
    // .where(whereClause)
    .limit(limit)
    .offset(offset)
    .all();

    const data : Array<IQuestion> = dataQuery

    // [data, totalResult] = await Promise.all([dataQuery, totalQuery]);

    const total = totalQuery?.count || 0
    const totalPages = Math.floor(total  / limit)


    return {
      data,
      metadata: {
        total,
        totalPages,
        page,
      },
    }
  // } catch (error) {
  //   console.error('Error in GET /api/questions:', error);
  //   return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  // }
}

